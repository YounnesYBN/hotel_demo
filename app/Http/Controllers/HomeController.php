<?php

namespace App\Http\Controllers;

use App\Models\Room;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    //
    public function index() {
        //all files of gallery folder //all files of generate urls for gallery folder
        $galleryPath = public_path("storage/gallery");
        $allGallery = File::allFiles($galleryPath);
        $allGalleryURL = array_map(function ($gallery) {
            return asset("storage/gallery/" . $gallery->getFileName());
        }, $allGallery);
    
        //all files of home folder //all files of generate urls for home folder
        $homePhotoPath = public_path("storage/home");
        $allHomePhotos = File::allFiles($homePhotoPath);
        $allHomePhotosURL = array_map(function ($gallery) {
            return asset("storage/home/" . $gallery->getFileName());
        }, $allHomePhotos);
        array_splice($allGalleryURL, 10);
    
        //get some rooms and thiere images
        $someRooms = Room::limit(5)->get();
        foreach ($someRooms as $room) {
            $image = $room->rooms_gallery()->where("selected", true)->first();
            $room->selected_image = asset("storage/rooms/" . $image->image_name);
        }
    
        return Inertia::render("Home", [
            "imgs" => $allHomePhotosURL,
            "galeries" => $allGalleryURL,
            "rooms" => $someRooms,
    
        ]);
    }
}
