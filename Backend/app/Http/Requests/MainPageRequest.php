<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MainPageRequest extends FormRequest
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
            'title' => ['required'],
            'shop' => ['string'],
            'imageFile' => ['required_without:imageUrl'], // removed 'nullable' rule 
            'imageUrl' => ['required_without:imageFile', 'url'],
            'route' => ['required', 'string'],
        ];
    }
}
