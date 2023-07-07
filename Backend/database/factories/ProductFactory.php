<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->title(),
            'imageUrl' => fake()->imageUrl(),
            'name' => fake()->name(),
            'imageFile' => '',
            'price' => fake()->randomFloat(1, 1, 500),
            'rating' => fake()->randomFloat(1, 1, 5),

        ];

    }
}
