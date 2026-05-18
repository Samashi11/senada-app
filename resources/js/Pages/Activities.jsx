import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ACTIVITIES_DATA } from "../data/activities";

export default function Activities() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Kajian", "Sosial", "Event Besar", "Pelatihan"];

  return (
    <div className="bg-background min-h-screen font-body">
      <Navbar />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <header className="max-w-7xl mx-auto px-8 mb-16 relative overflow-hidden text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed mb-6">
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  colors_spark
                </span>
                <span className="text-xs font-bold tracking-widest uppercase font-label">
                  Program & Agenda
                </span>
              </div>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-background tracking-tighter leading-tight mb-6">
                Discover Our{" "}
                <span className="text-secondary italic">Spirit</span> in Every
                Action.
              </h1>
              <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
                From spiritual depth to social impact, explore the diverse range
                of activities curated by SENADA.
              </p>
            </div>
            <div className="flex-1 w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl rotate-2 hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1523240715181-310f9d745739?auto=format&fit=crop&q=80&w=800"
                alt="Students"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </header>

        {/* Category Filter */}
        <section className="max-w-7xl mx-auto px-8 mb-12 overflow-x-auto">
          <div className="bg-surface-container-low p-2 rounded-full inline-flex gap-2 shadow-sm border border-outline-variant/10 whitespace-nowrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 md:px-8 py-3 rounded-full font-semibold transition-all ${
                  filter === cat
                    ? "bg-primary text-white shadow-md"
                    : "hover:bg-surface-container-high text-on-surface-variant"
                }`}
              >
                {cat === "All" ? "All Activities" : cat}
              </button>
            ))}
          </div>
        </section>

        {/* Bento Grid */}
        <section className="max-width-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Featured Card (Contoh mapping logic) */}
          {ACTIVITIES_DATA.filter(
            (a) => filter === "All" || a.category === filter,
          ).map((act) => (
            <ActivityCard key={act.id} data={act} />
          ))}

          {/* Card Ide Program (Statik) */}
          <div className="md:col-span-4 group bg-surface-container-low rounded-lg p-6 border-2 border-dashed border-outline-variant/30 flex flex-col items-center justify-center text-center hover:bg-surface transition-all">
            <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center text-primary/30 mb-4">
              <span className="material-symbols-outlined text-4xl">
                calendar_add_on
              </span>
            </div>
            <h3 className="font-headline text-lg font-bold text-on-surface-variant mb-2">
              Have a Program Idea?
            </h3>
            <button className="text-primary font-bold text-sm px-6 py-2 rounded-full border border-primary hover:bg-primary hover:text-white transition-all">
              Submit Proposal
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// Komponen Card Internal untuk kerapihan
function ActivityCard({ data }) {
  // --- TIPE 1: FEATURED (KARTU BESAR DENGAN GAMBAR) ---
  if (data.type === "featured") {
    return (
      <div className="md:col-span-8 group relative rounded-lg overflow-hidden bg-surface-container-lowest shadow-md hover:shadow-xl transition-all duration-500 border border-outline-variant/10">
        <div className="h-80 w-full relative overflow-hidden">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-6 left-6 flex gap-2">
            <span className="px-4 py-1.5 rounded-full bg-secondary text-white text-xs font-bold uppercase tracking-wider">
              {data.status}
            </span>
            <span className="px-4 py-1.5 rounded-full bg-surface/90 backdrop-blur-md text-primary text-xs font-bold uppercase tracking-wider">
              {data.category}
            </span>
          </div>
        </div>
        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-headline text-3xl font-bold tracking-tight text-on-background">
              {data.title}
            </h3>
            <div className="text-right">
              <p className="text-sm font-label font-bold text-secondary">
                {data.date}
              </p>
              <p className="text-xs text-on-surface-variant">{data.location}</p>
            </div>
          </div>
          <p className="text-on-surface-variant leading-relaxed mb-6 line-clamp-2 max-w-2xl">
            {data.desc}
          </p>
          <button className="inline-flex items-center gap-2 font-bold text-primary hover:gap-3 transition-all">
            View Details{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    );
  }

  // --- TIPE 2: SMALL TEXT (KARTU TANPA GAMBAR, FOKUS TEKS & IKON) ---
  if (data.type === "small-text") {
    return (
      <div className="md:col-span-4 group bg-surface-container-low rounded-lg p-6 flex flex-col justify-between hover:bg-surface-bright transition-all shadow-sm border border-outline-variant/10">
        <div>
          <div className="flex justify-between items-center mb-6">
            <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold uppercase">
              {data.status}
            </span>
            <span
              className="material-symbols-outlined text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {data.icon}
            </span>
          </div>
          <h3 className="font-headline text-xl font-bold text-on-background mb-3">
            {data.title}
          </h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            {data.desc}
          </p>
        </div>
        <div className="mt-8 pt-6 border-t border-outline-variant/20 flex justify-between items-center">
          <span className="text-xs font-label text-on-surface-variant italic">
            {data.schedule}
          </span>
          <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm hover:scale-110 transition-transform">
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
      </div>
    );
  }

  // --- TIPE 3: SMALL CARD (DENGAN GAMBAR KECIL) ---
  if (data.type === "small-card") {
    return (
      <div className="md:col-span-4 group bg-surface-container-lowest rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all border border-outline-variant/10">
        <div className="h-48 overflow-hidden">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          />
        </div>
        <div className="p-6">
          <div className="flex gap-2 mb-3">
            <span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant text-[10px] font-bold uppercase">
              {data.category}
            </span>
          </div>
          <h3 className="font-headline text-lg font-bold text-on-background mb-2">
            {data.title}
          </h3>
          <p className="text-xs text-on-surface-variant line-clamp-2">
            {data.desc}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-[10px] font-bold text-secondary uppercase">
              {data.status}
            </span>
            <span className="text-[10px] text-on-surface-variant">
              {data.date}
            </span>
          </div>
        </div>
      </div>
    );
  }

  // --- TIPE 4: MEDIUM WIDE (PANJANG KE SAMPING DENGAN WARNA PRIMARY) ---
  if (data.type === "medium-wide") {
    return (
      <div className="md:col-span-8 group bg-primary rounded-lg p-8 flex flex-col md:flex-row gap-8 items-center text-on-primary shadow-lg overflow-hidden relative">
        <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
          <span
            className="material-symbols-outlined text-[150px]"
            style={{ fontVariationSettings: "'wght' 100" }}
          >
            auto_awesome
          </span>
        </div>
        <div className="flex-1 relative z-10 text-left">
          <div className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-bold uppercase mb-4 tracking-widest">
            {data.status}
          </div>
          <h3 className="font-headline text-3xl font-bold mb-4 tracking-tight text-white">
            {data.title}
          </h3>
          <p className="text-white/80 mb-6 text-sm leading-relaxed max-w-md">
            {data.desc}
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-secondary-fixed transition-all flex items-center gap-2">
            Register Now{" "}
            <span className="material-symbols-outlined text-sm">
              how_to_reg
            </span>
          </button>
        </div>
        <div className="w-full md:w-64 h-64 rounded-xl overflow-hidden shadow-xl z-10 flex-shrink-0">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
  }

  return null;
}
