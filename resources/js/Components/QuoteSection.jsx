import { useState, useEffect } from "react";

const QUOTES_DATA = [
    {
        text: "Barangsiapa menempuh jalan untuk mencari ilmu, maka Allah akan memudahkan baginya jalan menuju Surga.",
        author: "Nabi Muhammad (SAW)",
    },
    {
        text: "Ilmu itu bukan yang dihafal, tetapi yang memberi manfaat.",
        author: "Imam Syafi'i",
    },
    {
        text: "Hati itu seperti wadah: jika tidak diisi dengan kebenaran, maka ia akan terisi dengan kebatilan.",
        author: "Ibnul Qayyim",
    },
    {
        text: "Puncak keteguhan adalah tetap tersenyum di saat hati sedang menangis.",
        author: "Ali bin Abi Thalib (RA)",
    },
    {
        text: "Sabar adalah ketika hati tidak merasa marah terhadap apa yang sudah ditakdirkan, dan mulut tidak mengeluh.",
        author: "Ibnu Qayyim Al-Jauziyyah",
    },
    {
        text: "Seandainya kalian bertawakal kepada Allah dengan sebenar-benarnya tawakal, niscaya Dia akan memberi rezeki kepada kalian sebagaimana Dia memberi rezeki kepada burung.",
        author: "Nabi Muhammad (SAW)",
    },
    {
        text: "Didiklah anak-anakmu, karena mereka akan hidup pada zaman yang berbeda dengan zamanmu.",
        author: "Umar bin Khattab (RA)",
    },
    {
        text: "Kecantikan yang abadi adalah kecantikan adab dan ketinggian ilmu seseorang, bukan wajah dan pakaiannya.",
        author: "Hamka",
    },
    {
        text: "Dunia ini hanya tiga hari: Kemarin yang telah pergi, Besok yang mungkin tak datang, dan Hari ini tempat kita beramal.",
        author: "Hasan Al-Bashri",
    },
    {
        text: "Barangsiapa yang tidak mencicipi pahitnya belajar walau sebentar, ia akan merasakan hinanya kebodohan sepanjang hidupnya.",
        author: "Imam Syafi'i",
    },
];

export default function QuoteSection() {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    const nextQuote = () => {
        setFade(false);
        setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % QUOTES_DATA.length);
            setFade(true);
        }, 400);
    };

    useEffect(() => {
        const timer = setInterval(nextQuote, 10000);
        return () => clearInterval(timer);
    }, []);

    const current = QUOTES_DATA[index];

    return (
        // Membungkus section dengan padding global agar sejajar dengan komponen lain
        <section className="py-xl px-margin-mobile md:px-margin-desktop bg-surface">
            <div className="max-w-screen-2xl mx-auto bg-primary text-on-primary rounded-xl overflow-hidden relative group py-12 px-md md:px-md shadow-2xl">
                {/* Decorative Background - Menggunakan warna dari config baru */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed rounded-full -mr-32 -mt-32 opacity-10 transition-transform group-hover:scale-110 duration-1000"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary-fixed rounded-full -ml-24 -mb-24 opacity-10 transition-transform group-hover:scale-110 duration-1000"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span
                        className="material-symbols-outlined text-[64px] opacity-20 mb-md select-none text-tertiary-fixed"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                        format_quote
                    </span>

                    {/* Container Utama dengan Animasi Fade */}
                    <div
                        className={`transition-all duration-500 transform ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    >
                        {/* Menggunakan typography dari template baru */}
                        <blockquote className="font-headline-lg text-headline-lg md:text-headline-xl italic mb-lg min-h-[160px] md:min-h-[120px] flex items-center justify-center leading-tight">
                            "{current.text}"
                        </blockquote>

                        <p className="font-label-md text-label-md tracking-widest uppercase text-primary-fixed mb-md">
                            — {current.author}
                        </p>
                    </div>

                    {/* Tombol Next Manual */}
                    <button
                        onClick={nextQuote}
                        className="inline-flex items-center justify-center w-lg h-lg rounded-full border border-outline-variant/30 hover:bg-white/10 hover:border-white/50 transition-all active:scale-95 group/btn"
                        aria-label="Next Quote"
                    >
                        <span className="material-symbols-outlined text-outline-variant group-hover/btn:text-white transition-colors">
                            navigate_next
                        </span>
                    </button>
                </div>

                {/* Indikator Titik (Progress) */}
                <div className="absolute bottom-md left-1/2 -translate-x-1/2 flex gap-xs">
                    {QUOTES_DATA.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? "w-md bg-secondary-fixed" : "w-base bg-white/20"}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
