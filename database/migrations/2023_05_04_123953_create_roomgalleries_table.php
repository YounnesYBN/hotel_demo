<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('roomgalleries', function (Blueprint $table) {
            $table->integer("id_room_gallery")->autoIncrement();
            $table->string("image_name");
            $table->integer("id_room");
            $table->foreign("id_room")->references("id_room")->on("rooms")->cascadeOnDelete()->cascadeOnUpdate();
            $table->boolean("selected")->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('roomgalleries');
    }
};
