import heroImg from "../assets/fotbarSND26.jpg";

export default function Hero() {
  return (
    <section className="pt-38 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 bg-tertiary-fixed px-4 py-1.5 rounded-full mb-6">
            <span className="text-xs font-bold tracking-widest text-tertiary uppercase">
              Grow With Faith
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-primary leading-tight mb-8">
            Elevate Your Soul, <br />
            <span className="text-secondary italic">Empower</span> Your Future.
          </h1>
          <button className="bg-primary text-white px-8 py-4 rounded-full font-bold">
            Join Now
          </button>
        </div>
        {/* Container Gambar (Relative Parent) */}
        <div className="lg:col-span-5 relative group">
          {/* Pembungkus Gambar agar Efek Rotate Tidak Memotong Shadow */}
          <div className="relative">
            <img
              src={heroImg}
              alt="Hero"
              className="w-full h-auto rounded-xl shadow-2xl rotate-3 group-hover:rotate-0 transition-all duration-700 object-cover"
            />

            {/* Overlay Gradient (Optional, aktifkan jika ingin teks lebih terbaca) */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl pointer-events-none"></div>
          </div>

          {/* Floating Box - Sekarang nempel ke Gambar */}
          <div className="absolute -bottom-6 -left-3 md:-left-10 bg-secondary-container p-4 md:p-6 rounded-lg text-white shadow-xl max-w-[160px] md:max-w-[200px] z-10 animate-bounce-slow">
            <span
              className="material-symbols-outlined text-3xl md:text-4xl mb-2 block"
              data-icon="auto_awesome"
            >
              auto_awesome
            </span>
            <p className="text-xs md:text-sm font-headline font-bold leading-tight">
              15+ Active Campus Programs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
