import { useState } from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// DATA DUMMY
const DUMMY_ARTICLES = [
    {
        id: 1,
        title: "Menemukan Kedamaian dalam Kesibukan Kuliah: Panduan Spiritual Mahasiswa",
        excerpt:
            "Bagaimana menjaga keseimbangan antara prestasi akademik dan pertumbuhan iman? Simak tips praktis manajemen waktu berbasis nilai-nilai Islam untuk mahasiswa modern yang dinamis.",
        category: "Islamic Knowledge",
        author: "Ustadz Ahmad Fauzi",
        authorRole: "Penyuluh Agama",
        authorInitial: "A",
        date: "24 Oktober 2026",
        image: "https://images.unsplash.com/photo-1577563908411-50cb98976fea?auto=format&fit=crop&q=80&w=1200",
        isFeatured: true,
    },
    {
        id: 2,
        title: "5 Habit Pagi untuk Mahasiswa Lebih Produktif",
        excerpt:
            "Memulai hari dengan tilawah dan olahraga ringan bisa mengubah kualitas studi Anda.",
        category: "Motivation",
        author: "Sarah Khadijah",
        authorRole: "Penulis",
        authorInitial: "S",
        date: "15 Menit Lalu",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800",
        isFeatured: false,
    },
    {
        id: 3,
        title: "Organisasi vs Akademik: Mana yang Lebih Utama?",
        excerpt:
            "Menemukan titik tengah antara aktif berorganisasi di SENADA dan menjaga IPK tetap cumlaude.",
        category: "Campus Life",
        author: "Dimas Pratama",
        date: "3 Jam Lalu",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
        isFeatured: false,
    },
    {
        id: 4,
        title: "Adab Menuntut Ilmu di Era Digital",
        excerpt:
            "Bagaimana menjaga keberkahan ilmu saat belajar melalui layar smartphone dan video tutorial.",
        category: "Islamic Knowledge",
        author: "Ustadz Rizky",
        date: "Kemarin",
        image: "https://images.unsplash.com/photo-1584285418504-03fb1b6cb46b?auto=format&fit=crop&q=80&w=800",
        isFeatured: false,
    },
];

export default function Articles() {
    // STATE UNTUK FILTER
    const [activeCategory, setActiveCategory] = useState("Semua Artikel");
    const categories = [
        "Semua Artikel",
        "Islamic Knowledge",
        "Motivation",
        "Campus Life",
    ];

    // LOGIKA PEMISAHAN & FILTER
    const isAll = activeCategory === "Semua Artikel";
    const featuredArticle = DUMMY_ARTICLES.find(
        (article) => article.isFeatured,
    );

    // Jika 'Semua', tampilkan yang bukan featured di grid. Jika difilter, cari semua yang cocok.
    const gridArticles = isAll
        ? DUMMY_ARTICLES.filter((article) => !article.isFeatured)
        : DUMMY_ARTICLES.filter(
              (article) => article.category === activeCategory,
          );


    return (
        <div className="bg-background text-on-surface min-h-screen flex flex-col">
            <Head title="Artikel & Wawasan | SENADA" />

            <Navbar />

            <main className="flex-grow max-w-screen-2xl mx-auto px-margin-mobile md:px-margin-desktop py-lg lg:py-32 w-full">
                {/* Page Header & Categories Dinamis */}
                <section className="mb-lg">
                    <h1 className="text-headline-lg-mobile md:text-headline-xl font-headline-xl text-primary mb-md">
                        Artikel Terbaru
                    </h1>
                    <div className="flex flex-wrap gap-sm items-center">
                        {categories.map((cat) => (
                            <span
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-md py-xs rounded-full text-label-sm font-label-sm cursor-pointer transition-colors ${
                                    activeCategory === cat
                                        ? "bg-tertiary text-on-tertiary shadow-sm"
                                        : "bg-surface-container-high text-on-surface-variant hover:bg-secondary-container"
                                }`}
                            >
                                {cat}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Featured Article: Hanya muncul jika tab 'Semua Artikel' aktif */}
                {isAll && featuredArticle && (
                    <section className="mb-xl transition-all duration-500">
                        <div className="group relative bg-surface-container-low rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[480px] hover:shadow-[0px_4px_20px_rgba(14,104,88,0.08)] transition-all duration-500">
                            <div className="md:col-span-7 relative overflow-hidden h-64 md:h-auto">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    src={featuredArticle.image}
                                    alt={featuredArticle.title}
                                />
                                <div className="absolute top-md left-md">
                                    <span className="bg-tertiary text-on-tertiary px-md py-xs rounded-full text-label-sm font-label-sm uppercase tracking-wider">
                                        {featuredArticle.category}
                                    </span>
                                </div>
                            </div>
                            <div className="md:col-span-5 p-lg flex flex-col justify-center">
                                <div className="flex items-center gap-xs text-on-surface-variant mb-sm">
                                    <span className="material-symbols-outlined text-[18px]">
                                        calendar_today
                                    </span>
                                    <span className="text-label-sm font-label-sm">
                                        {featuredArticle.date}
                                    </span>
                                </div>
                                <h2 className="text-headline-lg font-headline-lg text-primary mb-md group-hover:text-primary-container transition-colors">
                                    {featuredArticle.title}
                                </h2>
                                <p className="text-body-md font-body-md text-on-surface-variant mb-lg line-clamp-3">
                                    {featuredArticle.excerpt}
                                </p>
                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex items-center gap-sm">
                                        <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold">
                                            {featuredArticle.authorInitial}
                                        </div>
                                        <div>
                                            <p className="text-label-md font-label-md text-on-surface">
                                                {featuredArticle.author}
                                            </p>
                                            <p className="text-label-sm font-label-sm text-outline">
                                                {featuredArticle.authorRole}
                                            </p>
                                        </div>
                                    </div>
                                    <Link
                                        href="#"
                                        className="text-primary flex items-center gap-xs font-label-md text-label-md group/link"
                                    >
                                        Baca Selengkapnya
                                        <span className="material-symbols-outlined transition-transform group-hover/link:translate-x-1">
                                            arrow_forward
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Bento Grid / Filtered Articles */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-md mb-xl">
                    {gridArticles.length > 0 ? (
                        gridArticles.map((article) => (
                            <div
                                key={article.id}
                                className="flex flex-col bg-surface-container-low rounded-xl overflow-hidden hover:shadow-[0px_4px_20px_rgba(14,104,88,0.08)] transition-all group"
                            >
                                <div className="relative h-48">
                                    <img
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        src={article.image}
                                        alt={article.title}
                                    />
                                    <span
                                        className={`absolute top-sm right-sm text-white px-sm py-xs rounded-full text-[10px] font-bold uppercase ${
                                            article.category ===
                                            "Islamic Knowledge"
                                                ? "bg-tertiary"
                                                : article.category ===
                                                    "Campus Life"
                                                  ? "bg-secondary"
                                                  : "bg-primary"
                                        }`}
                                    >
                                        {article.category}
                                    </span>
                                </div>
                                <div className="p-md flex flex-col flex-grow">
                                    <span className="text-label-sm font-label-sm text-outline mb-xs">
                                        {article.date}
                                    </span>
                                    <h3 className="text-title-md font-title-md text-primary mb-sm line-clamp-2">
                                        {article.title}
                                    </h3>
                                    <p className="text-body-md font-body-md text-on-surface-variant line-clamp-2 mb-md">
                                        {article.excerpt}
                                    </p>
                                    <div className="mt-auto pt-md border-t border-outline-variant/10 flex justify-between items-center">
                                        <span className="text-label-sm font-label-sm text-outline">
                                            {article.author}
                                        </span>
                                        <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">
                                            bookmark
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full py-xl text-center">
                            <p className="text-on-surface-variant italic">
                                Belum ada artikel untuk kategori ini.
                            </p>
                        </div>
                    )}
                </section>

                {/* Community WhatsApp CTA Section */}
                <section className="relative rounded-xl overflow-hidden py-xl px-lg text-center bg-primary">
                    <div
                        className="absolute inset-0 opacity-10 pointer-events-none"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                            backgroundSize: "24px 24px",
                        }}
                    ></div>
                    <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
                        {/* Ikon Komunitas (Opsional untuk memperkuat visual) */}
                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-md backdrop-blur-sm border border-white/20">
                            <span className="material-symbols-outlined text-[32px] text-tertiary-fixed">
                                diversity_3
                            </span>
                        </div>

                        <h2 className="text-headline-lg font-headline-lg text-on-primary mb-md">
                            Terhubung Lebih Dekat dengan SENADA
                        </h2>
                        <p className="text-body-md font-body-md text-on-primary/80 mb-lg max-w-xl mx-auto">
                            Mari bertumbuh bersama. Bergabunglah dengan grup
                            WhatsApp resmi mahasiswa/i muslim untuk mendapatkan
                            info kajian, diskusi inspiratif, dan jejaring
                            pertemanan.
                        </p>

                        <a
                            href="https://chat.whatsapp.com/GANTI_DENGAN_LINK_GRUP_ASLI"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-sm bg-tertiary text-on-tertiary px-xl py-sm rounded-full font-title-md text-title-md hover:bg-tertiary-fixed hover:text-on-tertiary-fixed transition-all active:scale-95 shadow-lg"
                        >
                            <span className="material-symbols-outlined">
                                forum
                            </span>
                            Gabung Grup WhatsApp
                        </a>
                    </div>
                </section>
            </main>

            <Footer />

            <Link
                href="#"
                className="fixed bottom-md right-md bg-primary-container text-on-primary-container p-md rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all z-50 flex items-center gap-sm"
            >
                <span className="material-symbols-outlined">edit</span>
                <span className="hidden md:inline font-label-md text-label-md">
                    Tulis Artikel
                </span>
            </Link>
        </div>
    );
}
