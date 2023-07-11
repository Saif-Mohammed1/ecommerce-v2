<?php
namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Laravel\Socialite\Facades\Socialite;

class SocialiteController extends Controller
{

    public function signInWithGoogle()
    {
        $redirectUrl = Socialite::driver('google')->stateless()->redirect()->getTargetUrl();

        return response()->json([
            'redirect' => $redirectUrl,
        ]);
    }

    public function callbackToGoogle()
    {
        try {

            $user = Socialite::driver('google')->stateless()->user();

            $findUser = User::where('social_id', $user->id)->first();

            $existingUser = User::where('email', $user->email)
                ->whereNull('social_type')
                ->first();

            if ($existingUser) {
                return redirect(env('FRONT_REDIRECT') . '/auth' . '?errors=Email%20already%20exists%20please%20authenticated%20with%20email%20and%20password&' . 'email=' . $user->email);

            }

            if ($findUser) {

                Auth::login($findUser);

                $token = $findUser->createToken('Personal Access Token')->plainTextToken;
                return redirect(env('FRONT_REDIRECT') . '/auth' . '?token=' . $token);

            } else {
                $newUser = User::create([
                    'name' => $user->name,
                    'email' => $user->email,
                    'social_id' => $user->id,
                    'social_type' => 'google',
                    'password' => Hash::make(''),
                ]);

                Auth::login($newUser);
                $token = $newUser->createToken('Personal Access Token')->plainTextToken;

                return redirect(env('FRONT_REDIRECT') . '/auth' . '?token=' . $token);
            }

        } catch (Exception $e) {

            return response()->json(['error' => $e->getMessage()]);

        }
    }

}
