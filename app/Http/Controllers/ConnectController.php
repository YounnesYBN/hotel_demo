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

    public function index(Request $request)
    {
        // Inertia::share("from",$request->from);
        session(["from" => $request->from]);
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
            Auth::login($newUser);

            return redirect(Inertia::getShared("From"));
        }
    }


    public function logout(Request $request)
    {
        
        Auth::logout();
        session()->forget([
            "email", "username", "id","error","message"
        ]);

        return redirect()->back();
    }

    public function login(Request $request)
    {

        $request->validate([
            "email" => ["required"],
            "password" => ["required"],
        ]);

        $user = Auth::attempt(['email' => strtolower($request->email), 'password' => $request->password]);
        

        if ($user) {
            session([
                "error" => false,
                "message" => "",
            ]);
            return redirect(Inertia::getShared("From"));
        } else {
            session([
                "error" => true,
                "message" => "email or password is not valid",
            ]);
            redirect()->back();
        }
    }
}
