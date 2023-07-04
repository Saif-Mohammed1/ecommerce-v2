<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequests extends FormRequest
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
            // 'phone' => ['required', 'regex:/^\d{11}$/', 'unique:phones,phone'],
            'email' => ['required', 'email', 'unique:users,email'],
            'password' => 'required',
            'confirmPassword' => ['required', 'same:password', function ($attribute, $value, $fail) {
                if (strlen($value) !== strlen($this->input('password'))) {
                    $fail($attribute . ' should be equal to password.');
                }
            }]];

    }
}
