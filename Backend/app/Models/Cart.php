<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;
    protected $fillable = ['imageUrl', 'product_id',
        'imageFile',
        'name',
        'quantity',
        'price', 'user_id',
    ];
    public function user()
    {

        return $this->belongsToMany(User::class);
    }
}
