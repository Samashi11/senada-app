<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('activities', function (Blueprint $table) {
            $table->id();
            $table->enum('type', ['featured', 'small-text', 'small-card', 'medium-wide'])->default('small-card');
            $table->enum('category', ['Kajian', 'Sosial', 'Event Besar', 'Pelatihan']);
            $table->enum('status', ['Upcoming', 'Ongoing', 'Completed', 'Open Registration'])->default('Upcoming');
            $table->string('title', 150);
            $table->date('date')->nullable();

            // --- KOLOM BARU MULAI DI SINI ---
            $table->string('time')->nullable(); // Contoh: "08:00 - 15:00 WIB"
            $table->string('capacity')->nullable(); // Contoh: "100 Peserta"
            $table->integer('fee')->default(0); // Pakai integer (angka). 0 = Gratis
            $table->date('registration_deadline')->nullable();
            $table->json('objectives')->nullable(); // Menyimpan list tujuan pembelajaran
            $table->json('speakers')->nullable(); // Menyimpan data pemateri (Nama, Foto, Role)
            // --- BATAS KOLOM BARU ---

            $table->string('location')->nullable();
            $table->text('desc');
            $table->string('image')->nullable();
            $table->string('icon', 50)->nullable();
            $table->string('schedule')->nullable();
            $table->index(['category', 'status']);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('activities');
    }
};