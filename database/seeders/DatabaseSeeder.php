<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Hash;
use App\Models\User;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'email' => 'mfkl',
            'password' => Hash::make('123456'),
            'name' => 'mfkl'
        ]);
    }
}
