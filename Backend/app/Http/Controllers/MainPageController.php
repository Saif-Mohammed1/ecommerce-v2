<?php

namespace App\Http\Controllers;

use App\Http\Requests\MainPageRequest;
use App\Models\MainPage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MainPageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = MainPage::select('id', 'title', 'shop', 'imageUrl', 'imageFile', 'route')->get();

        return $products;
        // return response()->json($products->all());
    }

    /**
     * Show the form for creating a new resource.
     */
    // public function create()
    // {
    //     // $errors = []; // default value
    //     // if (session()->has('errors')) {
    //     //     $errors = session()->get('errors')->toArray();
    //     // }
    //     return view('mainPage.mainPage');
    // }

    /**
     * Store a newly created resource in storage.
     */
    public function store(MainPageRequest $request)
    {

/*
// $validatedData = $request->validate([
//     'title' => 'required|max:255',
//     'shop' => 'required|max:255',
//     'imageUrl' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
//     'route' => 'required|max:255',
// ]);

// // Code to save the data to the database or perform other actions goes here

// // return redirect('/')->with('success', 'Product has been created successfully.');
// if ($request->hasFile('imageFile')) {

//     $imageFile = $request->file('imageFile');
//     $imageUrl = time() . '_' . $imageFile->getClientOriginalName();
//     $path = 'public/images';
//     $imageFile->storeAs($path, $imageUrl);

//     $product = MainPage::create([
//         'imageFile' => $imageUrl,
//         'title' => $request->input('title'),
//         'shop' => (strlen($request->shop) > 0) ? "{$request->shop}" : "shop now",
//         'route' => $request->input('route'),
//         'imageUrl' => '',

//     ]);
// }

// if ($request->hasFile('imageUrl')) {

//     $product = MainPage::create([
//         'imageUrl' => $request->imageUrl,
//         'imageFile' => '',
//         'title' => $request->input('title'),
//         'shop' => (strlen($request->shop) > 0) ? "{$request->shop}" : "shop now",
//         'route' => $request->input('route'),
//     ]);
// }

// return $product;
 */

        if ($request->hasFile('imageFile')) {
            $path = 'public/images/MainPage';
            $imageUrl = time() . '_' . $request->file('imageFile')->getClientOriginalName();
            $request->file('imageFile')->storeAs($path, $imageUrl);
        } elseif ($request->has('imageUrl')) {
            $imageUrl = $request->imageUrl;
        }

        $product = MainPage::create([
            'title' => $request->input('title'),
            'shop' => (strlen($request->shop) > 0) ? "{$request->shop}" : "shop now",
            'route' => $request->input('route'),
            'imageFile' => isset($request->imageFile) ? asset(
                'storage/images/MainPage/' . $imageUrl
            ) : '',
            'imageUrl' => isset($request->imageUrl) ? $request->imageUrl : '',
        ]);

        return $product;
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $product = MainPage::findOrFail($id);

        return $product;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $product = MainPage::findOrFail($id);

        return view("mainPage.mainPage", ['errors' => [], 'product' => $product]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $product = MainPage::findOrFail($id);

        $request->validate([
            'title' => ['required', 'string'],
            // 'shop' => ['required', 'string
        ]);

        $product->title = $request->input('title');
        $product->shop = $request->input('shop');
        $imageFile = $request->file('imageUrl');
        $product->imageUrl = rand() . '.' . $imageFile->getClientOriginalExtension();
        Storage::disk('public')->makeDirectory('image');
        $imageFile->storeAs('image', $product->imageUrl, 'public');
        $product->route = $request->input('route');

        $product->save();

        return $product;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $product = MainPage::findOrFail($id);

        $product->delete();

        return response()->json(['message' => 'Product deleted successfully']);
    }
}
