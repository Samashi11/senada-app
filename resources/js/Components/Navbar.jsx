import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom"; // Tambahkan Link dan useLocation
import { Link, usePage } from "@inertiajs/react";
import logoImg from "../assets/senada-logo.png";
import { getPrayerTimes } from "../Services/prayerApi";
import PrayerModal from "./PrayerModal";

export default function Navbar() {
    const [prayerTimes, setPrayerTimes] = useState(null);
    const [showPrayerModal, setShowPrayerModal] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);

    const { url } = usePage(); // Untuk mendeteksi halaman aktif
    // const location = useLocation(); // Untuk mendeteksi halaman aktif

    const getNextPrayer = (jadwal) => {
        if (!jadwal) return "Cek Waktu";
        const now = new Date();
        const currentTime = now.getHours() * 60 + now.getMinutes();

        const prayerList = [
            { name: "Subuh", time: jadwal.subuh },
            { name: "Dzuhur", time: jadwal.dzuhur },
            { name: "Ashar", time: jadwal.ashar },
            { name: "Maghrib", time: jadwal.maghrib },
            { name: "Isya", time: jadwal.isya },
        ];

        const next = prayerList.find((p) => {
            const [h, m] = p.time.split(":").map(Number);
            return h * 60 + m > currentTime;
        });

        return next ? `${next.name} ${next.time}` : `Subuh ${jadwal.subuh}`;
    };

    useEffect(() => {
        const fetchTimes = async () => {
            const data = await getPrayerTimes();
            setPrayerTimes(data);
        };
        fetchTimes();
    }, []);

    const toggleAbout = (e) => {
        e.preventDefault();
        setIsAboutOpen(!isAboutOpen);
    };

    // Helper untuk class aktif
    const activeClass = "text-primary border-b-2 border-secondary pb-1";
    const inactiveClass =
        "text-on-surface-variant hover:text-secondary transition-colors";

    return (
        <header className="fixed top-0 left-0 w-full bg-surface/80 backdrop-blur-xl z-50 shadow-md">
            <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
                {/* --- BAGIAN KIRI: LOGO --- */}
                <div className="flex-shrink-0 lg:w-1/4">
                    <Link
                        to="/"
                        className="text-2xl font-bold text-primary tracking-tighter font-headline flex items-center"
                    >
                        <img
                            src={logoImg}
                            alt="SENADA Logo"
                            className="h-6 w-6 inline-block mr-2"
                        />
                        <span>SENADA</span>
                    </Link>
                </div>

                {/* --- BAGIAN TENGAH: NAVIGATION (Link diganti ke react-router-dom) --- */}
                <div className="hidden md:flex flex-grow justify-center items-center gap-8 font-semibold text-sm font-headline">
                    <Link
                        href="/"
                        className={url === "/" ? activeClass : inactiveClass}
                    >
                        Beranda
                    </Link>

                    <Link
                        href="/articles"
                        className={
                            url.startsWith("/articles")
                                ? activeClass
                                : inactiveClass
                        }
                    >
                        Artikel
                    </Link>

                    <Link
                        href="/activities"
                        className={
                            url.startsWith("/activities")
                                ? activeClass
                                : inactiveClass
                        }
                    >
                        Aktivitas
                    </Link>

                    {/* Dropdown Tentang */}
                    <div className="relative group">
                        {/* Induk Tombol: Menyala jika URL saat ini ada di dalam ekosistem /about */}
                        <button
                            className={`flex items-center gap-1 font-label-md text-label-md transition-colors focus:outline-none py-1 ${
                                url.startsWith("/about")
                                    ? "text-primary border-b-2 border-primary pb-1"
                                    : "text-on-surface-variant hover:text-primary"
                            }`}
                        >
                            Tentang
                            <span className="material-symbols-outlined text-sm leading-none transition-transform group-hover:rotate-180">
                                expand_more
                            </span>
                        </button>

                        {/* Kotak Dropdown */}
                        <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-surface-container rounded-xl shadow-lg border border-outline-variant/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                            <div className="py-2 flex flex-col">
                                <Link
                                    href="/about"
                                    className={`block px-6 py-3 text-sm transition-colors ${
                                        url === "/about"
                                            ? "bg-primary/10 text-primary font-bold border-l-4 border-primary"
                                            : "text-on-surface-variant hover:bg-surface-bright hover:text-primary border-l-4 border-transparent"
                                    }`}
                                >
                                    Tentang Kami
                                </Link>
                                <Link
                                    href="/about/structure"
                                    className={`block px-6 py-3 text-sm transition-colors ${
                                        url === "/about/structure"
                                            ? "bg-primary/10 text-primary font-bold border-l-4 border-primary"
                                            : "text-on-surface-variant hover:bg-surface-bright hover:text-primary border-l-4 border-transparent"
                                    }`}
                                >
                                    Struktur
                                </Link>
                                <Link
                                    href="/about/contact"
                                    className={`block px-6 py-3 text-sm transition-colors ${
                                        url === "/about/contact"
                                            ? "bg-primary/10 text-primary font-bold border-l-4 border-primary"
                                            : "text-on-surface-variant hover:bg-surface-bright hover:text-primary border-l-4 border-transparent"
                                    }`}
                                >
                                    Hubungi Kami
                                </Link>
                                <Link
                                    href="/about/gallery"
                                    className={`block px-6 py-3 text-sm transition-colors ${
                                        url === "/about/gallery"
                                            ? "bg-primary/10 text-primary font-bold border-l-4 border-primary"
                                            : "text-on-surface-variant hover:bg-surface-bright hover:text-primary border-l-4 border-transparent"
                                    }`}
                                >
                                    Galeri
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- BAGIAN KANAN: ACTION BUTTONS --- */}
                <div className="flex items-center justify-end lg:w-1/4 gap-3">
                    <div className="hidden lg:block">
                        <button
                            onClick={() => setShowPrayerModal(true)}
                            className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-high hover:bg-surface-container-highest rounded-full transition-all border border-outline-variant/20 group shadow-sm active:scale-95"
                        >
                            <span className="material-symbols-outlined text-secondary animate-pulse text-[18px]">
                                notifications_active
                            </span>
                            <div className="text-left leading-tight">
                                <p className="text-[8px] font-bold text-on-surface-variant/60 uppercase tracking-tighter">
                                    Selanjutnya
                                </p>
                                <p className="text-[11px] font-bold text-primary whitespace-nowrap">
                                    {prayerTimes
                                        ? getNextPrayer(prayerTimes)
                                        : "Memuat..."}
                                </p>
                            </div>
                        </button>
                    </div>

                    <div className="hidden md:block">
                        <button className="bg-primary text-white px-6 py-2.5 rounded-full font-headline font-semibold hover:bg-primary-container transition-all text-sm whitespace-nowrap">
                            Join Now
                        </button>
                    </div>

                    <button
                        className="md:hidden text-primary p-2 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="material-symbols-outlined text-3xl">
                            {isOpen ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </nav>

            {/* --- MOBILE MENU (Link diganti ke react-router-dom) --- */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-surface border-t border-outline-variant/20 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
            >
                <div className="flex flex-col p-6 gap-4 font-semibold shadow-xl">
                    <Link
                        className="text-primary"
                        to="/ldk-senada/"
                        onClick={() => setIsOpen(false)}
                    >
                        Beranda
                    </Link>
                    <Link
                        className="text-on-surface-variant"
                        to="/articles"
                        onClick={() => setIsOpen(false)}
                    >
                        Artikel
                    </Link>
                    <Link
                        className="text-on-surface-variant"
                        to="/ldk-senada/aktivitas"
                        onClick={() => setIsOpen(false)}
                    >
                        Aktivitas
                    </Link>

                    <div className="flex flex-col gap-2">
                        <button
                            onClick={toggleAbout}
                            className="flex justify-between items-center text-on-surface-variant"
                        >
                            Tentang
                            <span
                                className={`material-symbols-outlined transition-transform ${isAboutOpen ? "rotate-180" : ""}`}
                            >
                                expand_more
                            </span>
                        </button>
                        <div
                            className={`flex flex-col gap-4 pl-4 overflow-hidden transition-all duration-300 ${isAboutOpen ? "max-h-40 py-2" : "max-h-0"}`}
                        >
                            <Link
                                to="/about/structure"
                                className="text-sm text-on-surface-variant/80"
                                onClick={() => setIsOpen(false)}
                            >
                                Struktur
                            </Link>
                            <Link
                                to="/about/contact"
                                className="text-sm text-on-surface-variant/80"
                                onClick={() => setIsOpen(false)}
                            >
                                Hubungi Kami
                            </Link>
                            <Link
                                to="/about/gallery"
                                className="text-sm text-on-surface-variant/80"
                                onClick={() => setIsOpen(false)}
                            >
                                Galeri
                            </Link>
                        </div>
                    </div>
                    <button className="bg-primary text-white px-6 py-3 rounded-full font-headline font-semibold w-full mt-2">
                        Join Now
                    </button>
                </div>
            </div>

            {showPrayerModal && (
                <PrayerModal
                    data={prayerTimes}
                    onClose={() => setShowPrayerModal(false)}
                />
            )}
        </header>
    );
}
