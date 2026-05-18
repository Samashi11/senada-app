<?php

namespace App\Filament\Resources\Activities\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Repeater; // Wajib ditambahkan untuk array JSON
use Filament\Schemas\Schema;

class ActivityForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->required()
                    ->maxLength(150),
                Select::make('type')
                    ->options([
                        'featured' => 'Featured',
                        'small-text' => 'Small text',
                        'small-card' => 'Small card',
                        'medium-wide' => 'Medium wide',
                    ])
                    ->default('small-card')
                    ->required(),
                Select::make('category')
                    ->options([
                        'Kajian' => 'Kajian',
                        'Sosial' => 'Sosial',
                        'Event Besar' => 'Event besar',
                        'Pelatihan' => 'Pelatihan',
                    ])
                    ->required(),
                Select::make('status')
                    ->options([
                        'Upcoming' => 'Upcoming',
                        'Ongoing' => 'Ongoing',
                        'Completed' => 'Completed',
                        'Open Registration' => 'Open registration',
                    ])
                    ->default('Upcoming')
                    ->required(),
                DatePicker::make('date')
                    ->native(false)
                    ->displayFormat('d M Y'),
                TextInput::make('time')
                    ->placeholder('Contoh: 08:00 - 15:00 WIB'),
                TextInput::make('location'),
                TextInput::make('capacity')
                    ->placeholder('Contoh: 100 Peserta'),
                TextInput::make('fee')
                    ->numeric()
                    ->prefix('Rp')
                    ->default(0)
                    ->helperText('Isi 0 jika gratis'),
                DatePicker::make('registration_deadline')
                    ->native(false)
                    ->displayFormat('d M Y'),
                TextInput::make('schedule')
                    ->placeholder('Contoh: Setiap Selasa'),
                TextInput::make('icon')
                    ->placeholder('Material icon nama'),
                Textarea::make('desc')
                    ->required(),
                FileUpload::make('image')
                    ->image()
                    ->directory('activities'),

                // --- KOMPONEN ARRAY JSON (REPEATER) ---
                Repeater::make('objectives')
                    ->label('Tujuan Pembelajaran')
                    ->schema([
                        TextInput::make('point')
                            ->required()
                            ->label('Poin Tujuan'),
                    ])
                    ->addActionLabel('Tambah Tujuan'),

                Repeater::make('speakers')
                    ->label('Pemateri / Pembicara')
                    ->schema([
                        TextInput::make('name')
                            ->required()
                            ->label('Nama Lengkap (beserta gelar)'),
                        TextInput::make('role')
                            ->required()
                            ->label('Jabatan / Peran'),
                        FileUpload::make('photo')
                            ->image()
                            ->directory('speakers')
                            ->label('Foto Pemateri'),
                    ])
                    ->addActionLabel('Tambah Pemateri'),
            ]);
    }
}