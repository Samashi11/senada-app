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

  // Fungsi untuk pindah ke quote berikutnya (Manual/Otomatis)
  const nextQuote = () => {
    setFade(false); // Mulai memudar keluar
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % QUOTES_DATA.length);
      setFade(true); // Memudar masuk kembali
    }, 400); // Durasi delay disesuaikan dengan durasi CSS
  };

  // Logic Interval Otomatis (Ganti setiap 8 detik)
  useEffect(() => {
    const timer = setInterval(nextQuote, 10000);
    return () => clearInterval(timer); // Membersihkan interval saat komponen mati
  }, []);

  const current = QUOTES_DATA[index];

  return (
    <section className="py-17 bg-primary text-white rounded-xl mx-6 overflow-hidden relative group">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container rounded-full -mr-32 -mt-32 opacity-20 transition-transform group-hover:scale-110 duration-1000"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary-container rounded-full -ml-24 -mb-24 opacity-10 transition-transform group-hover:scale-110 duration-1000"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <span
          className="material-symbols-outlined text-6xl opacity-30 mb-8 select-none"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          format_quote
        </span>

        {/* Container Utama dengan Animasi Fade */}
        <div
          className={`transition-all duration-500 transform ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <blockquote className="text-2xl md:text-4xl font-headline font-semibold italic mb-10 min-h-[160px] md:min-h-[120px] flex items-center justify-center leading-relaxed">
            "{current.text}"
          </blockquote>

          <p className="font-label font-bold tracking-[0.3em] uppercase opacity-70 mb-8">
            — {current.author}
          </p>
        </div>

        {/* Tombol Next Manual */}
        <button
          onClick={nextQuote}
          className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all active:scale-90 group/btn"
          aria-label="Next Quote"
        >
          <span className="material-symbols-outlined text-white/60 group-hover/btn:text-white transition-colors">
            navigate_next
          </span>
        </button>
      </div>

      {/* Indikator Titik (Progress) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {QUOTES_DATA.map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all duration-500 ${i === index ? "w-8 bg-secondary" : "w-2 bg-white/20"}`}
          />
        ))}
      </div>
    </section>
  );
}
