<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CartRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string'],
            'price' => ['required', 'numeric', 'min:1'],
            'quantity' => ['numeric'],
            'product_id' => ['required'],
            'imageFile' => [
                'required_without:imageUrl',
                // 'file', // ensure it is a file upload
                // 'mimes:jpg,jpeg,png,gif', // ensure it is one of these file types
                'max:2048', // ensure the file size is not larger than 2MB
            ],
            'imageUrl' => ['required_without:imageFile', 'url'],
        ];
    }
}
