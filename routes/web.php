<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
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
    //all files of gallery folder
    $galleryPath = public_path("storage/gallery");
    $allGallery =File::allFiles($galleryPath);
    
    //all files of home folder
    $homePhotoPath = public_path("storage/home");
    $allHomePhotos = File::allFiles($homePhotoPath);

    //all files of generate urls for gallery folder
    $allGalleryURL = array_map(function($gallery){
        return asset("storage/gallery/".$gallery->getFileName());
    },$allGallery);

    //all files of generate urls for home folder
    $allHomePhotosURL = array_map(function($gallery){
        return asset("storage/home/".$gallery->getFileName());
    },$allHomePhotos);
    array_splice($allGalleryURL,10);

    return Inertia::render("Home", [
        "imgs" => $allHomePhotosURL,
        "galeries" => $allGalleryURL

    ]);
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
