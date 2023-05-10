<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Inertia\Inertia;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class ConnectController extends Controller
{
    //

    public function index()
    {
        return Inertia::render("Connect");
    }

    public function singup(Request $request)
    {

        $request->validate(
            [
                "email" => ["required", "unique:users,email"],
                "password" => ["required"],
                "username" => ["required"],
                "validate_password" => ["required", "in:$request->password"]
            ],
            [
                "validate_password.in" => "password confirme is not matching password",
                "email.unique" => "this email is already exists",
            ]
        );


        $newUser = User::create([
            "name" => strtolower($request->username),
            "email" => strtolower($request->email),
            "password" => Hash::make($request->password),
        ]);
        if ($newUser) {
            session([
                "email" => $newUser->email,
                "username" => $newUser->name,
                "id" => $newUser->id,
            ]);

            return redirect("/");
        } 
    }


    public function logout(Request $request){
        session()->forget([
            "email","username","id"
        ]);

        return redirect()->back();
    }
}
