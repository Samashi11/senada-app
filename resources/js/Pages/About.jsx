import { useEffect } from "react";
import { Head } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function About() {
    // Logic animasi observer saat di-scroll
    useEffect(() => {
        const observerOptions = { threshold: 0.2 };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("opacity-100", "translate-y-0");
                    entry.target.classList.remove("opacity-0", "translate-y-8");
                }
            });
        }, observerOptions);

        // Menargetkan elemen timeline untuk dianimasikan
        const timelineItems = document.querySelectorAll(".timeline-item");
        timelineItems.forEach((el) => {
            el.classList.add(
                "transition-all",
                "duration-700",
                "opacity-0",
                "translate-y-8",
            );
            observer.observe(el);
        });

        return () => {
            timelineItems.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <div
            className="bg-background text-on-background min-h-screen flex flex-col selection:bg-secondary-container"
            style={{
                backgroundImage:
                    "radial-gradient(circle at 2px 2px, rgba(14, 104, 88, 0.05) 1px, transparent 0)",
                backgroundSize: "24px 24px",
            }}
        >
            <Head title="Tentang Kami | SENADA" />

            <Navbar />

            <main className="flex-grow max-w-screen-2xl mx-auto px-margin-mobile md:px-margin-desktop py-32 space-y-xl w-full">
                {/* Introduction (Perkenalan) */}
                <section className="relative overflow-hidden rounded-xl bg-primary-container text-on-primary-container p-lg md:p-xl flex flex-col items-center text-center gap-md shadow-sm">
                    <div className="absolute top-4 right-4 opacity-20">
                        <span
                            className="material-symbols-outlined text-[120px]"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                            spa
                        </span>
                    </div>
                    <span className="bg-primary text-on-primary px-sm py-1 rounded-full font-label-sm text-label-sm">
                        Perkenalan
                    </span>
                    <h1 className="font-headline-lg-mobile md:font-headline-xl text-headline-lg-mobile md:text-headline-xl max-w-3xl relative z-10">
                        Lembaga Dakwah Kampus SENADA
                    </h1>
                    <p className="font-body-lg text-body-lg max-w-2xl opacity-90 relative z-10">
                        SENADA adalah organisasi mahasiswa Islam yang
                        berdedikasi untuk menciptakan harmoni antara nilai-nilai
                        spiritual dan keunggulan intelektual. Sebagai Lembaga
                        Dakwah Kampus (LDK), kami hadir untuk merangkul setiap
                        mahasiswa dalam perjalanan mencari makna, memperdalam
                        iman, dan berkontribusi bagi kemanusiaan di lingkungan
                        akademis.
                    </p>
                </section>

                {/* Vision & Mission (Visi dan Misi) */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                    <div className="md:col-span-2 bg-white/70 backdrop-blur-md border border-primary/10 rounded-xl p-md flex flex-col justify-between group hover:shadow-lg transition-all duration-300">
                        <div>
                            <div className="flex items-center gap-sm mb-sm">
                                <span className="material-symbols-outlined text-primary bg-secondary-container p-xs rounded-lg">
                                    visibility
                                </span>
                                <h2 className="font-title-md text-title-md text-primary">
                                    Visi Kami
                                </h2>
                            </div>
                            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                Menjadi organisasi mahasiswa Islam terdepan yang
                                mengintegrasikan nilai-nilai luhur Al-Qur'an dan
                                Sunnah ke dalam inovasi ilmu pengetahuan, guna
                                membentuk pemimpin masa depan yang berakhlak
                                mulia dan kompetitif secara global.
                            </p>
                        </div>
                        <div className="mt-lg h-48 w-full rounded-lg overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                            <img
                                alt="Suasana diskusi mahasiswa yang inklusif"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200"
                            />
                        </div>
                    </div>

                    <div className="bg-surface-container-high rounded-xl p-md flex flex-col gap-md">
                        <div className="flex items-center gap-sm">
                            <span className="material-symbols-outlined text-tertiary bg-tertiary-fixed p-xs rounded-lg">
                                track_changes
                            </span>
                            <h2 className="font-title-md text-title-md text-tertiary">
                                Misi Kami
                            </h2>
                        </div>
                        <ul className="space-y-sm">
                            <li className="flex gap-sm items-start">
                                <span
                                    className="material-symbols-outlined text-primary text-[18px] mt-1"
                                    style={{
                                        fontVariationSettings: "'FILL' 1",
                                    }}
                                >
                                    eco
                                </span>
                                <p className="font-body-md text-body-md">
                                    Membangun ekosistem dakwah yang inklusif dan
                                    progresif di kampus.
                                </p>
                            </li>
                            <li className="flex gap-sm items-start">
                                <span
                                    className="material-symbols-outlined text-primary text-[18px] mt-1"
                                    style={{
                                        fontVariationSettings: "'FILL' 1",
                                    }}
                                >
                                    eco
                                </span>
                                <p className="font-body-md text-body-md">
                                    Memfasilitasi pengembangan riset berbasis
                                    nilai keislaman bagi mahasiswa.
                                </p>
                            </li>
                            <li className="flex gap-sm items-start">
                                <span
                                    className="material-symbols-outlined text-primary text-[18px] mt-1"
                                    style={{
                                        fontVariationSettings: "'FILL' 1",
                                    }}
                                >
                                    eco
                                </span>
                                <p className="font-body-md text-body-md">
                                    Mendorong kolaborasi lintas disiplin ilmu
                                    yang menjunjung etika Islam.
                                </p>
                            </li>
                            <li className="flex gap-sm items-start">
                                <span
                                    className="material-symbols-outlined text-primary text-[18px] mt-1"
                                    style={{
                                        fontVariationSettings: "'FILL' 1",
                                    }}
                                >
                                    eco
                                </span>
                                <p className="font-body-md text-body-md">
                                    Memberikan kontribusi nyata dalam
                                    pemberdayaan masyarakat melalui aksi sosial.
                                </p>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* History (Sejarah): Timeline Narrative */}
                <section className="space-y-lg py-lg">
                    <div className="text-center">
                        <h2 className="font-headline-lg text-headline-lg text-primary mb-xs">
                            Jejak Langkah
                        </h2>
                        <p className="font-label-md text-label-md text-on-surface-variant">
                            Perjalanan kami membangun harmoni di kampus
                        </p>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Garis vertikal tengah untuk mode desktop */}
                        <div className="absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-outline-variant/30 hidden md:block"></div>

                        <div className="space-y-md md:space-y-0">
                            {/* Event 1 */}
                            <div className="timeline-item flex flex-col md:flex-row items-center gap-gutter md:relative">
                                <div className="md:w-1/2 md:text-right">
                                    <span className="bg-primary-fixed text-on-primary-fixed px-sm py-1 rounded-full font-label-md text-label-md">
                                        2010
                                    </span>
                                    <h3 className="font-title-md text-title-md mt-2">
                                        Permulaan: Halaqah Kecil
                                    </h3>
                                    <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                                        Dimulai dari kelompok diskusi kecil di
                                        pelataran masjid universitas yang
                                        berfokus pada penguatan aqidah dan
                                        ukhuwah antar mahasiswa baru.
                                    </p>
                                </div>
                                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 shadow-sm"></div>
                                <div className="md:w-1/2"></div>
                            </div>

                            {/* Event 2 */}
                            <div className="timeline-item flex flex-col md:flex-row-reverse items-center gap-gutter md:relative md:mt-12">
                                <div className="md:w-1/2">
                                    <span className="bg-secondary-container text-on-secondary-container px-sm py-1 rounded-full font-label-md text-label-md">
                                        2018
                                    </span>
                                    <h3 className="font-title-md text-title-md mt-2">
                                        Transformasi & Digitalisasi
                                    </h3>
                                    <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                                        Meluncurkan platform digital pertama
                                        untuk mempermudah akses jadwal kajian
                                        kampus dan materi pendidikan Islam yang
                                        modern bagi generasi Z.
                                    </p>
                                </div>
                                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-background z-10 shadow-sm"></div>
                                <div className="md:w-1/2"></div>
                            </div>

                            {/* Event 3 */}
                            <div className="timeline-item flex flex-col md:flex-row items-center gap-gutter md:relative md:mt-12">
                                <div className="md:w-1/2 md:text-right">
                                    <span className="bg-tertiary-fixed text-on-tertiary-fixed px-sm py-1 rounded-full font-label-md text-label-md">
                                        2026
                                    </span>
                                    <h3 className="font-title-md text-title-md mt-2">
                                        Menuju Organisasi Global
                                    </h3>
                                    <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                                        Resmi bertransformasi menjadi SENADA
                                        dengan visi global, menjalin kemitraan
                                        dengan organisasi kemahasiswaan
                                        internasional untuk dakwah lintas
                                        budaya.
                                    </p>
                                </div>
                                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-tertiary border-4 border-background z-10 shadow-sm"></div>
                                <div className="md:w-1/2"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="bg-surface-container-low rounded-3xl p-lg md:p-xl border border-outline-variant/10 shadow-sm">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-md mb-xl">
                        <div className="max-w-xl">
                            <h2 className="font-headline-lg text-headline-lg text-primary mb-sm">
                                Nilai-Nilai Utama
                            </h2>
                            <p className="font-body-md text-body-md text-on-surface-variant">
                                Fondasi yang mendasari setiap interaksi dan
                                keputusan yang kami ambil di SENADA.
                            </p>
                        </div>
                        <div className="flex gap-sm">
                            <span
                                className="material-symbols-outlined text-secondary animate-pulse"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                                auto_awesome
                            </span>
                            <span
                                className="material-symbols-outlined text-primary"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                                flare
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
                        <div className="space-y-sm">
                            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-on-primary shadow-sm">
                                <span className="material-symbols-outlined">
                                    balance
                                </span>
                            </div>
                            <h3 className="font-title-md text-title-md text-primary">
                                Integritas
                            </h3>
                            <p className="font-body-md text-body-md text-on-surface-variant">
                                Menjunjung tinggi kejujuran dan etika dalam
                                setiap langkah akademik dan organisasi.
                            </p>
                        </div>
                        <div className="space-y-sm">
                            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-on-secondary shadow-sm">
                                <span className="material-symbols-outlined">
                                    group_work
                                </span>
                            </div>
                            <h3 className="font-title-md text-title-md text-primary">
                                Ukhuwah
                            </h3>
                            <p className="font-body-md text-body-md text-on-surface-variant">
                                Mempererat tali persaudaraan antar anggota tanpa
                                memandang latar belakang.
                            </p>
                        </div>
                        <div className="space-y-sm">
                            <div className="w-12 h-12 bg-tertiary rounded-xl flex items-center justify-center text-on-tertiary shadow-sm">
                                <span className="material-symbols-outlined">
                                    lightbulb
                                </span>
                            </div>
                            <h3 className="font-title-md text-title-md text-primary">
                                Inovatif
                            </h3>
                            <p className="font-body-md text-body-md text-on-surface-variant">
                                Terus mengeksplorasi cara-cara baru yang relevan
                                dalam menyebarkan nilai kebaikan.
                            </p>
                        </div>
                        <div className="space-y-sm">
                            <div className="w-12 h-12 bg-surface-container-highest rounded-xl flex items-center justify-center text-primary shadow-sm">
                                <span className="material-symbols-outlined">
                                    volunteer_activism
                                </span>
                            </div>
                            <h3 className="font-title-md text-title-md text-primary">
                                Khidmat
                            </h3>
                            <p className="font-body-md text-body-md text-on-surface-variant">
                                Berdedikasi untuk memberikan manfaat nyata bagi
                                umat dan lingkungan sekitar.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
