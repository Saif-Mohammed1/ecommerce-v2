<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\MainPageController;
use App\Http\Controllers\ProductController;
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
    return $request->user();
});

Route::resource('/home', MainPageController::class);
Route::resource('/products', ProductController::class);
Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);

Route::resource('/cart', CartController::class);

// Route::group(['prefix' => 'products'], function () {
//     Route::get('/', [ProductController::class, 'index']);
//     Route::post('/store', [ProductController::class, 'store']);
//     Route::put('/{id}', [ProductController::class, 'update']);
//     Route::delete('/{id}', [ProductController::class, 'destroy']);
// });
