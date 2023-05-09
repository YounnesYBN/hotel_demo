<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;
use Illuminate\Http\Request;

class GalleryController extends Controller
{
    //
    public function index () {
        $allGallery = File::allFiles("storage/gallery");
        $allGalleryURL = array_map(function ($image) {
            return asset("storage/gallery/" . $image->getFileName());
        }, $allGallery);
    
        return Inertia::render("Gallery", [
            "AllGalleriesProps" => $allGalleryURL
        ]);
    }
}
