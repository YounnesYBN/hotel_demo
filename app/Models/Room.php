<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Room extends Model
{
    use HasFactory;
    protected $guarded  = [
        "id_room",
    ];

    public function rooms_gallery(){
        return $this->hasMany(Roomgallery::class,"id_room","id_room");
    }
}
