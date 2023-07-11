<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $products = Product::select('id', 'title', 'name', 'imageUrl', 'imageFile', 'price', 'rating')->get();
        return $products;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductRequest $request)
    {

        if ($request->hasFile('imageFile')) {
            $path = 'public/images/products';
            $imageUrl = time() . '_' . $request->file('imageFile')->getClientOriginalName();
            $request->file('imageFile')->storeAs($path, $imageUrl);
        } elseif ($request->has('imageUrl')) {
            $imageUrl = $request->imageUrl;
        }

        Product::create([
            'title' => $request->input('title'),
            'name' => $request->input('name'),

            'imageFile' => isset($request->imageFile) ? asset(
                'storage/images/products/' . $imageUrl
            ) : '',
            'imageUrl' => isset($request->imageUrl) ? $request->imageUrl : '',
            'price' => $request->input('price'),
            'rating' => $request->input('rating'),

        ]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($id);

        $request->validate([
            'name' => ['required', 'string'],
            'price' => ['required', 'numeric', 'min:1'],

            'imageFile' => [
                'required_without:imageUrl',
                'file', // ensure it is a file upload
                'mimes:jpg,jpeg,png,gif', // ensure it is one of these file types
                'max:2048', // ensure the file size is not larger than 2MB
            ],
            'imageUrl' => ['required_without:imageFile', 'url'],

        ]);

        if ($request->hasFile('imageFile')) {
            $path = 'public/images/products';
            $imageUrl = time() . '_' . $request->file('imageFile')->getClientOriginalName();
            $request->file('imageFile')->storeAs($path, $imageUrl);
        } elseif ($request->has('imageUrl')) {
            $imageUrl = $request->imageUrl;
        }

        $product->update([
            'name' => $request->input('name'),
            'imageFile' => isset($imageUrl) ? asset('storage/images/products/' . $imageUrl) : '',
            'imageUrl' => isset($request->imageUrl) ? $request->imageUrl : '',
            'price' => $request->input('price'),
        ]);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $product = Product::findOrFail($id);

        if ($product) {$product->delete();

            return response()->json(['message' => 'Product deleted successfully']);
        }}

}
