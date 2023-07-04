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
        $token = $user->createToken('MyApp')->plainTextToken;
        return response([
            'user' => $user, 'token' => $token,
        ]);}
    public function login(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $credentials = $request->only('email', 'password');
        if (auth()->attempt($credentials, $request->filled('remember'))) {
            $token = Auth::user()->createToken('MyApp')->plainTextToken;

            return response([
                'user' => Auth::user(), 'admin' => Auth::user()->admin, 'token' => $token,
            ]);

        } else {
            $user = User::where('email', $validatedData['email'])->first();
            if ($user) {
                return response()->json(["errors" => ["password" => "Invalid password"]], 401); // Password doesn't match error
            } else {
                return response()->json(["errors" => ["email" => "Email address not found"]], 422); // Email not found error
            }
        }
    }
    public function logout(Request $request)
    {
        if (Auth::check()) {
            Auth::user()->tokens()->delete();
            // Auth::guard('api')->logout();
            // it works fine without this line but when i use it
            // i got     "message": "Method Illuminate\\Auth\\RequestGuard::logout does not exist.",

            $request->session()->invalidate();
            $request->session()->regenerateToken();

            return response()->json(['message' => 'logged out']);
        } else {
            return response()->json(['message' => 'User not authenticated'], 401);
        }
    }

}
