import { Head, Link } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function ActivityDetail({ activity }) {
    // Fungsi format rupiah
    const formatRupiah = (angka) => {
        if (!angka || angka === 0) return "Gratis";
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(angka);
    };

    return (
        <div className="bg-surface-bright text-on-surface font-body-md antialiased min-h-screen flex flex-col">
            <Head title={`${activity.title} | SENADA`} />

            {/* Navbar komponen SENADA */}
            <Navbar />

            {/* main terpusat dengan padding-top 100px agar tidak menabrak navbar */}
            <main className="max-w-7xl mx-auto flex-grow pt-[100px] pb-[50px] px-margin-mobile md:px-margin-desktop w-full">
                {/* Breadcrumbs */}
                <div className="py-md">
                    <nav className="flex items-center gap-xs text-on-surface-variant font-label-sm text-label-sm">
                        <Link href="/" className="hover:text-primary">
                            Beranda
                        </Link>
                        <span className="material-symbols-outlined text-[14px]">
                            chevron_right
                        </span>
                        <Link href="/activities" className="hover:text-primary">
                            Program
                        </Link>
                        <span className="material-symbols-outlined text-[14px]">
                            chevron_right
                        </span>
                        <span className="text-primary font-semibold">
                            Detail Kegiatan
                        </span>
                    </nav>
                </div>

                {/* Hero Section - Tinggi diturunkan menjadi 400px agar proporsional */}
                <section className="mb-lg">
                    <div className="relative h-[250px] md:h-[400px] w-full rounded-xl md:rounded-xl overflow-hidden shadow-xl bg-surface-container-highest">
                        <img
                            className="w-full h-full object-cover"
                            src={
                                activity.image
                                    ? `/storage/${activity.image}`
                                    : "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200"
                            }
                            alt={activity.title}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-md md:p-lg">
                            <div className="flex items-center gap-sm mb-base">
                                <span className="bg-tertiary text-on-tertiary px-sm py-xs rounded-full font-label-sm md:font-label-md text-label-sm md:text-label-md flex items-center gap-xs">
                                    <span
                                        className="material-symbols-outlined text-[16px] md:text-[18px]"
                                        style={{
                                            fontVariationSettings: "'FILL' 1",
                                        }}
                                    >
                                        {activity.icon || "event_available"}
                                    </span>
                                    {activity.status}
                                </span>
                                <span className="bg-white/20 backdrop-blur-md text-white px-sm py-xs rounded-full font-label-sm md:font-label-md text-label-sm md:text-label-md">
                                    {activity.category}
                                </span>
                            </div>
                            <h1 className="font-headline-lg-mobile md:text-headline-xl text-white mb-xs leading-tight">
                                {activity.title}
                            </h1>
                        </div>
                    </div>
                </section>

                {/* Content Grid - KOREKSI TOTAL: Breakpoint dari LG ke MD agar sidebar tidak jatuh */}
                <section className="grid grid-cols-1 md:grid-cols-12 gap-lg md:gap-xl items-start">
                    {/* Kolom Kiri: Deskripsi (8 Kolom di layar MD+) */}
                    <div className="md:col-span-8 space-y-lg">
                        <article className="prose prose-lg max-w-none">
                            <h2 className="font-headline-lg text-headline-lg text-primary mb-md">
                                Deskripsi Kegiatan
                            </h2>

                            <div className="text-on-surface-variant text-body-lg leading-relaxed mb-lg whitespace-pre-wrap">
                                {activity.desc}
                            </div>

                            {/* Render Objectives secara dinamis */}
                            {activity.objectives &&
                                activity.objectives.length > 0 && (
                                    <>
                                        <h3 className="font-title-md text-title-md text-secondary mb-base">
                                            Tujuan Pembelajaran
                                        </h3>
                                        <ul className="space-y-sm mb-lg list-none p-0">
                                            {activity.objectives.map(
                                                (obj, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex gap-sm items-start p-0 m-0"
                                                    >
                                                        <span className="material-symbols-outlined text-primary mt-1 flex-shrink-0">
                                                            check_circle
                                                        </span>
                                                        <span className="text-on-surface-variant leading-relaxed p-0 m-0">
                                                            {obj.point}
                                                        </span>
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </>
                                )}
                        </article>

                        {/* Render Speakers secara dinamis */}
                        {activity.speakers && activity.speakers.length > 0 && (
                            <section className="pt-md md:pt-lg">
                                <h2 className="font-headline-lg text-headline-lg text-primary mb-md">
                                    Pemateri Inspiratif
                                </h2>
                                {/* <p className="text-on-surface-variant mb-md italic text-body-md">
                                    Siki, agar foto pemateri muncul, silakan
                                    *upload* foto mereka di *dashboard* admin
                                    Filament.
                                </p> */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-md">
                                    {activity.speakers.map((speaker, index) => (
                                        <div
                                            key={index}
                                            className="flex gap-md bg-white p-md rounded-xl shadow-sm border border-outline-variant/10 items-center"
                                        >
                                            {speaker.photo ? (
                                                <img
                                                    className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover flex-shrink-0"
                                                    src={`/storage/${speaker.photo}`}
                                                    alt={speaker.name}
                                                />
                                            ) : (
                                                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-surface-container-highest flex items-center justify-center text-primary flex-shrink-0">
                                                    <span className="material-symbols-outlined text-[24px] md:text-[32px]">
                                                        person
                                                    </span>
                                                </div>
                                            )}
                                            <div className="flex-grow">
                                                <h4 className="font-title-md text-title-md text-on-surface leading-snug">
                                                    {speaker.name}
                                                </h4>
                                                <p className="text-primary font-semibold text-label-md mb-0">
                                                    {speaker.role}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Kolom Kanan: Sidebar (4 Kolom di layar MD+) */}
                    <div className="md:col-span-4 sticky-sidebar">
                        {/* Biaya Pendaftaran */}
                        <div className="bg-white p-md md:p-lg rounded-xl shadow-[0px_4px_20px_rgba(14,104,88,0.08)] border border-outline-variant/10 mb-md sticky top-[120px]">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-md gap-xs">
                                <span className="text-on-surface-variant font-label-md">
                                    Biaya Pendaftaran
                                </span>
                                <span className="text-primary font-headline-lg text-headline-lg leading-tight">
                                    {formatRupiah(activity.fee)}
                                </span>
                            </div>

                            {/* Detail Logistics */}
                            <div className="space-y-md mb-lg">
                                <div className="flex items-center gap-md">
                                    <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary flex-shrink-0">
                                        <span className="material-symbols-outlined">
                                            calendar_today
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-label-sm text-on-surface-variant p-0 m-0">
                                            Tanggal
                                        </p>
                                        <p className="text-label-md font-bold p-0 m-0">
                                            {activity.date ||
                                                "Belum ditentukan"}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-md">
                                    <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary flex-shrink-0">
                                        <span className="material-symbols-outlined">
                                            schedule
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-label-sm text-on-surface-variant p-0 m-0">
                                            Waktu
                                        </p>
                                        <p className="text-label-md font-bold p-0 m-0">
                                            {activity.time ||
                                                activity.schedule ||
                                                "Belum ditentukan"}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-md">
                                    <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary flex-shrink-0">
                                        <span className="material-symbols-outlined">
                                            location_on
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-label-sm text-on-surface-variant p-0 m-0">
                                            Lokasi
                                        </p>
                                        <p className="text-label-md font-bold line-clamp-2 p-0 m-0">
                                            {activity.location || "Menyusul"}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-md">
                                    <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary flex-shrink-0">
                                        <span className="material-symbols-outlined">
                                            group
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-label-sm text-on-surface-variant p-0 m-0">
                                            Kapasitas
                                        </p>
                                        <p className="text-label-md font-bold p-0 m-0">
                                            {activity.capacity ||
                                                "Terbuka untuk Umum"}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full bg-primary text-on-primary py-md rounded-xl font-title-md text-title-md shadow-md hover:shadow-lg transition-all active:scale-95 mb-md">
                                Daftar Sekarang
                            </button>

                            {activity.registration_deadline && (
                                <div className="flex items-center justify-center gap-xs text-on-surface-variant font-label-sm">
                                    <span className="material-symbols-outlined text-[16px]">
                                        info
                                    </span>
                                    <span>
                                        Pendaftaran ditutup{" "}
                                        {activity.registration_deadline}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* </div> */}
                </section>
            </main>

            <Footer />
        </div>
    );
}
