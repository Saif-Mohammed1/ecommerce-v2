<?php

namespace App\Http\Controllers;

use App\Http\Requests\CartRequest;
use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cart = Cart::select('id', 'imageUrl',
            'imageFile',
            'name',
            'quantity',
            'price')->get();
        return $cart;
    }
    public function show(Request $request, $id)
    {

        $cart = Cart::where('user_id', $id)->select(
            \Illuminate\Support\Facades\DB::raw('CAST(product_id AS SIGNED INTEGER) as id'),
            'imageUrl',
            'imageFile',
            'name', \Illuminate\Support\Facades\DB::raw('CAST(quantity AS SIGNED INTEGER) as quantity')

            ,
            'price',

        )->get();

        return $cart->toArray();

    }

    /**
     * Show the form for creating a new resource.
     */

    /**
     * Store a newly created resource in storage.
     */
    public function store(CartRequest $request)
    {
        $cart = Cart::where([
            'product_id' => $request->product_id,
            'user_id' => $request->user_id,
        ])->first();
        if (!$cart) {
            Cart::create(['product_id' => $request->id,
                'name' => $request->name,
                'price' => $request->price,
                'quantity' => isset($request->quantity) ? $request->quantity : 0,
                'imageFile' => isset($request->imageFile) ? $request->imageFile
                : '',
                'imageUrl' => isset($request->imageUrl) ? $request->imageUrl : '',
                'user_id' => $request->user_id,
            ]);

            return 'done';
        }

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {

        $cart = Cart::where([
            'product_id' => $request->product_id,
            'user_id' => $request->user_id,
        ])->first();
        $product = Product::where(
            'id', $request->product_id,
        )->first();

        $request->validate([
            'quantity' => ['required', 'numeric'],
        ]);

        if ($cart) {
            if ($product) {
                $cart->update([
                    'quantity' => $request->quantity,
                ]);
                return $cart;

            } else {

                $this->destroy($request->product_id);

                return response()->json(['errors' => 'product not available any more'], Response::HTTP_NOT_FOUND);
            }

        }

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $cartItem = Cart::where('product_id', $id)->first();
        // Alternatively, you can use findOrFail() to throw an exception if the record is not found
        // $cartItem = Cart::findOrFail($id);

        if ($cartItem) {
            $cartItem->delete();
            return;
        }

        return 'Cart item not found';
    }

}
