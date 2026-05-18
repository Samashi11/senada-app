<?php

// namespace App\Filament\Resources\Activities\Schemas;

// use Filament\Forms\Components\FileUpload;
// use Filament\Forms\Components\Select;
// use Filament\Forms\Components\TextInput;
// use Filament\Forms\Components\Textarea;
// use Filament\Forms\Components\Section;
// use Filament\Forms\Components\Grid;
// use Filament\Schemas\Schema;

// class ActivityForm
// {
//     public static function configure(Schema $schema): Schema
// {
//     return $schema
//         ->components([
//             Section::make('Konten Utama')
//                 ->schema([
//                     TextInput::make('title')
//                         ->required()
//                         ->maxLength(150),
//                     Textarea::make('desc')
//                         ->required()
//                         ->columnSpanFull(),
//                 ]),

//             Section::make('Kategorisasi & Status')
//                 ->schema([
//                     Grid::make(3) // Membuat 3 kolom dalam satu baris
//                         ->schema([
//                             Select::make('type')
//                                 ->options([
//                                     'featured' => 'Featured',
//                                     'small-text' => 'Small text',
//                                     'small-card' => 'Small card',
//                                     'medium-wide' => 'Medium wide',
//                                 ])->default('small-card')->required(),
//                             Select::make('category')
//                                 ->options([
//                                     'Kajian' => 'Kajian',
//                                     'Sosial' => 'Sosial',
//                                     'Event Besar' => 'Event besar',
//                                     'Pelatihan' => 'Pelatihan',
//                                 ])->required(),
//                             Select::make('status')
//                                 ->options([
//                                     'Upcoming' => 'Upcoming',
//                                     'Ongoing' => 'Ongoing',
//                                     'Completed' => 'Completed',
//                                     'Open Registration' => 'Open registration',
//                                 ])->default('Upcoming')->required(),
//                         ]),
//                 ]),

//             Section::make('Logistik & Media')
//                 ->schema([
//                     Grid::make(2)
//                         ->schema([
//                             TextInput::make('date'),
//                             TextInput::make('location'),
//                             TextInput::make('schedule'),
//                             TextInput::make('icon'),
//                             FileUpload::make('image')
//                                 ->image()
//                                 ->directory('activities'), // Menyimpan di storage/app/public/activities
//                         ]),
//                 ]),
//         ]);
// }
// }


namespace App\Filament\Resources\Activities\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\DatePicker;
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
                    ->native(false) // Menggunakan kalender kustom Filament yang lebih rapi
                    ->displayFormat('d M Y'), // Ditampilkan sebagai: 12 Mar 2024
                TextInput::make('location'),
                TextInput::make('schedule'),
                TextInput::make('icon'),
                Textarea::make('desc')
                    ->required(),
                FileUpload::make('image')
                    ->image()
                    ->directory('activities'),
            ]);
    }
}