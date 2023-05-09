<?php

use App\Http\Controllers\AboutUsController;
use App\Http\Controllers\ContactUsController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\RoomController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [HomeController::class,"index"]);



Route::get('/About us',[AboutUsController::class,"index"]);

Route::get('/Rooms', [RoomController::class,"index"]);

Route::get('/Contact us', [ContactUsController::class,"index"]);

Route::get('/Gallery',[GalleryController::class,"index"]);

Route::get("/Connect",function(){
    Inertia::render("Connect");
});
