<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserDashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = User::select('id', 'name',
            'email',
            'admin', 'created_at', 'social_type'
        )->get();
        return $user;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $request->validate([
            'name' => ['required', 'string'],
            // 'phone' => ['required', 'regex:/^\d{11}$/', 'unique:phones,phone'],
            'email' => ['required', 'email', 'unique:users,email'],
            'admin' => ['required', 'boolean', 'min:0', 'max:1'],
            'password' => ['required', 'min:8', 'max:16'],
            'confirmPassword' => ['required', 'same:password']]);

        //
        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'admin' => $request->input('admin'),
            // 'admin' => $request->input('admin') == 1 ? 'true' : 'false',
            'password' => Hash::make($request->input('password')), 'confirmPassword']);

        return 'success';

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $request->validate([
            'email' => ['required', 'email'],
            'admin' => ['required', 'boolean'],
        ]);

        $user = User::where('email', $request->email);
        if ($user) {
            $user->update([
                'admin' => $request->admin,
            ]);
            // return $user;
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = User::findOrFail($id);
        $user->delete();
    }
}
