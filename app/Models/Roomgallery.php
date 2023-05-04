<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Roomgallery extends Model
{
    use HasFactory;
    protected $guarded = [
        "id_room_gallery",
    ];

    public function rooms(){
        return $this->belongsTo(Room::class,"id_room","id_room");
    }
}
