<?php

use App\Models\Room;
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
    //all files of gallery folder //all files of generate urls for gallery folder
    $galleryPath = public_path("storage/gallery");
    $allGallery =File::allFiles($galleryPath);
    $allGalleryURL = array_map(function($gallery){
        return asset("storage/gallery/".$gallery->getFileName());
    },$allGallery);
    
    //all files of home folder //all files of generate urls for home folder
    $homePhotoPath = public_path("storage/home");
    $allHomePhotos = File::allFiles($homePhotoPath);
    $allHomePhotosURL = array_map(function($gallery){
        return asset("storage/home/".$gallery->getFileName());
    },$allHomePhotos);
    array_splice($allGalleryURL,10);

    //get some rooms and thiere images
    $someRooms = Room::limit(5)->get(); 
    foreach ($someRooms as $room) {
        $image = $room->rooms_gallery()->where("selected",true)->first();
        $room->selected_image = asset("storage/rooms/".$image->image_name);
    }
    
    return Inertia::render("Home", [
        "imgs" => $allHomePhotosURL,
        "galeries" => $allGalleryURL,
        "rooms"=>$someRooms,

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
    $allGallery = File::allFiles("storage/gallery");
    $allGalleryURL = array_map(function($image){
        return asset("storage/gallery/".$image->getFileName());
    },$allGallery); 
    
    return Inertia::render("Gallery",[
        "AllGalleriesProps" => $allGalleryURL
    ]);
});
