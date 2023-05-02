<?php

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

Route::get('/', function () {
    return Inertia::render("Home");
});

Route::get('/About us', function () {
    return Inertia::render("AboutUs");
});

Route::get('/Rooms', function () {
    return Inertia::render("Rooms");
});

Route::get('/Contact us', function () {
    return Inertia::render("ContactUs");
});

Route::get('/Gallery', function () {
    return Inertia::render("Gallery");
});
