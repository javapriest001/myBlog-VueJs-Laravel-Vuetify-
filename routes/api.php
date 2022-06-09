<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', [AdminController::class , 'login']);
Route::post('/register', [AdminController::class , 'register']);
Route::get('/blogs', [AdminController::class , 'allBlogs']);
Route::get('/blog/{id}', [AdminController::class , 'singleBlog']);
Route::get('/addtag', [AdminController::class , 'addTag']);
Route::post('/updateTag', [AdminController::class , 'updateTag']);
Route::post('/addCategory', [AdminController::class , 'addCategory']);
Route::post('/updateCategory/{id}', [AdminController::class , 'updateCategory']);





Route::group(['middleware' => ['auth:sanctum']] , function () {
    Route::post('/logout', [AdminController::class , 'logout']);
    Route::post('/addCategory', [AdminController::class , 'addCategory']);
    Route::post('deleteBlog', [AdminController::class , 'deleteBlog']); //
    Route::post('/userType/{id}', [AdminController::class , 'userType']);
});


