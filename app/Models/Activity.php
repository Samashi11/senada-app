<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    // Tambahkan ini agar Filament bisa menyimpan data ke kolom-kolom tersebut
    protected $guarded = [];
}