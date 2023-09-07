<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\MainPageController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SocialiteController;
use App\Http\Controllers\UserDashboardController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
 */
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    $userData = $request->user()->toArray();
    unset($userData['admin']);

    return response()->json(['user' => $userData, 'admin' =>
        $request->user()->admin]);
});
// Route::get('/sanctum/csrf-cookie', function () {
//     return response()->json(['message' => 'CSRF cookie set']);
// })->name('sanctum.cookie');

Route::resource('/users/dashboard', UserDashboardController::class);
Route::resource('/home', MainPageController::class);
Route::resource('/products', ProductController::class);
Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);

Route::resource('/cart', CartController::class);

Route::get('auth/google', [SocialiteController::class, 'signInwithGoogle']);
Route::get('callback/google', [SocialiteController::class, 'callbackToGoogle']);

// Email verification endpoint
Route::get('/email/verify', function () {
    return view('auth.verify-email');
})->middleware(['auth'])->name('verification.notice');

// Email verification link route
Route::get('/email/verify/{id}/{hash}', 'App\Http\Controllers\VerificationController@verify')
    ->middleware(['auth', 'signed'])
    ->name('verification.verify');

// Route::group(['prefix' => 'products'], function () {
//     Route::get('/', [ProductController::class, 'index']);
//     Route::post('/store', [ProductController::class, 'store']);
//     Route::put('/{id}', [ProductController::class, 'update']);
//     Route::delete('/{id}', [ProductController::class, 'destroy']);
// });
