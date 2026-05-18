<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    // Admin Utama SENADA
    User::updateOrCreate(
      ['email' => 'admin@senada.com'], // Kriteria pencarian
      [
        'name' => 'Admin SENADA',
        'password' => Hash::make('bismillahsenada'), // Ganti dengan password yang lebih kuat nanti
        'email_verified_at' => now(),
      ]
    );
  }
}