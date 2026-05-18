<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Activity;

// Paksa root URL untuk merender komponen Home.jsx milikmu
Route::get('/', function () {
    return Inertia::render('Home');
});

// Nanti tambahkan rute activities di sini

Route::get('/activities', function () {
    return Inertia::render('Activities', [
        // Mengambil semua data aktivitas dari database, diurutkan dari yang terbaru
        'activities' => Activity::latest()->get()
    ]);
});

// TAMBAHKAN RUTE BARU INI
Route::get('/activities/{activity}', function (Activity $activity) {
    return Inertia::render('ActivityDetail', [
        'activity' => $activity
    ]);
})->name('activities.show');

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
