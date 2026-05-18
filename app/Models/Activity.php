<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    protected $guarded = [];

    // Menyuruh Laravel mengubah data JSON menjadi Array secara otomatis
    protected $casts = [
        'objectives' => 'array',
        'speakers' => 'array',
    ];
}