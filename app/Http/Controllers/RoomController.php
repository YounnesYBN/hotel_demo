<?php

namespace App\Http\Controllers;

use App\Models\Room;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RoomController extends Controller
{
    public function index()
    {
        $allRooms = Room::all();

        foreach ($allRooms as $room) {
            // $room->gallery = array_map(function ($name_photo) {
            //     return asset("storage/rooms/" . $name_photo["image_name"]);
            // }, $room->rooms_gallery()->select("image_name")->get()->toArray());

            $photo = $room->rooms_gallery()->select("image_name")->where("selected", true)->first();
            $room->gallery = asset("storage/rooms/" . $photo->image_name);
        }

        return Inertia::render("Rooms", [
            "AllRoomsPros" => $allRooms
        ]);
    }
    /**
     * Show the form for creating the resource.
     */
    public function create(): never
    {
        abort(404);
    }

    /**
     * Store the newly created resource in storage.
     */
    public function store(Request $request): never
    {
        abort(404);
    }

    /**
     * Display the resource.
     */
    public function show()
    {
        //
    }

    /**
     * Show the form for editing the resource.
     */
    public function edit()
    {
        //
    }

    /**
     * Update the resource in storage.
     */
    public function update(Request $request)
    {
        //
    }

    /**
     * Remove the resource from storage.
     */
    public function destroy(): never
    {
        abort(404);
    }
}
