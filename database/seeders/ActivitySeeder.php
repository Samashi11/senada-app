<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Activity;

class ActivitySeeder extends Seeder
{
    public function run(): void
    {
        $activities = [
            [
                'type' => 'featured',
                'category' => 'Event Besar',
                'status' => 'Upcoming',
                'title' => 'GEMA RAMADHAN 1445H',
                'date' => '2024-03-12',
                'location' => 'Main Hall STT NF',
                'desc' => 'Our flagship annual event celebrating the holy month with series of competitions, community breaking fast, and inspiring talks.',
                'image' => 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800',
                'icon' => null,
                'schedule' => null,
            ],
            [
                'type' => 'small-text',
                'category' => 'Kajian',
                'status' => 'Ongoing',
                'title' => 'Tafsir Jalalain Weekly',
                'date' => null,
                'location' => 'Masjid Al-Iman',
                'desc' => 'Deep dive into the meanings of Al-Qur\'an every Tuesday after Maghrib.',
                'image' => null,
                'icon' => 'menu_book',
                'schedule' => 'Every Tuesday',
            ],
            [
                'type' => 'small-card',
                'category' => 'Sosial',
                'status' => 'Completed',
                'title' => 'SENADA Berbagi',
                'date' => '2024-02-24',
                'location' => 'Area Kampus',
                'desc' => 'Monthly charity program distributing meal boxes to those in need around Campus area.',
                'image' => 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800',
                'icon' => null,
                'schedule' => null,
            ],
            [
                'type' => 'medium-wide',
                'category' => 'Pelatihan',
                'status' => 'Open Registration',
                'title' => 'Leadership Training 1.0',
                'date' => '2024-06-05',
                'location' => 'Villa Insani Cisarua',
                'desc' => 'Develop your organizational skills and discover your leadership potential in our intensive weekend workshop.',
                'image' => 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800',
                'icon' => null,
                'schedule' => null,
            ],
            [
                'type' => 'small-text',
                'category' => 'Kajian',
                'status' => 'Ongoing',
                'title' => 'Mentoring Circles',
                'date' => null,
                'location' => 'Ruang Diskusi',
                'desc' => 'Small group discussions led by seniors to support your spiritual and academic journey.',
                'image' => null,
                'icon' => 'diversity_3',
                'schedule' => 'Weekly Basis',
            ]
        ];

        foreach ($activities as $activity) {
            Activity::create($activity);
        }
    }
}