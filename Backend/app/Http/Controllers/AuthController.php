<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequests;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    public function signup(StoreUserRequests $request)
    {

        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')), 'confirmPassword',

        ]);
        Auth::login($user);
        $token = $user->createToken('MyApp')->plainTextToken;
        // $user->sendEmailVerificationNotification(); // Send verification email

        return response([
            'user' => Auth::user(), 'admin' => false, 'token' => $token,
        ]);}
    public function login(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $credentials = $request->only('email', 'password');
        $user = User::where('email', $validatedData['email'])->first();

        if ($user && $user->social_type === 'google') {
            return response()->json(["errors" => ["email" => "This email is authenticated with Google. Please sign in using your Google account."]], 422);
        }

        // if (auth()->attempt($credentials, $request->filled('remember'))) {
        if (auth()->attempt($credentials)) {
            $token = Auth::user()->createToken('MyApp')->plainTextToken;
            $userData = $user->toArray();
            unset($userData['admin']);

            return response([
                'user' => $userData, 'admin' => Auth::user()->admin, 'token' => $token,
            ]);

        } else {
            if ($user) {
                return response()->json(["errors" => ["password" => "Invalid password"]], 422); // Password doesn't match error
            } else {
                return response()->json(["errors" => ["email" => "Email address not found"]], 422); // Email not found error
            }
        }
    }
    public function logout(Request $request)
    {
        if (Auth::check()) {
            Auth::user()->tokens()->delete();

            $request->session()->invalidate();
            $request->session()->regenerateToken();

            return response()->json(['message' => 'logged out']);
        } else {
            return response()->json(['message' => 'User not authenticated'], 401);
        }
    }

}
