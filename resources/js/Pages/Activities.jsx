import { useState } from "react";
import { Head } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ActivityCard from "../Components/ActivityCard";
import FloatingFab from "../Components/FloatingFab";

export default function Activities({ activities }) {
    const [selectedCategory, setSelectedCategory] = useState("Semua");

    const categories = [
        "Semua",
        "Kajian",
        "Sosial",
        "Event Besar",
        "Pelatihan",
    ];

    // Logika Filtering
    const filteredActivities =
        selectedCategory === "Semua"
            ? activities
            : activities.filter((act) => act.category === selectedCategory);

    return (
        <div className="min-h-screen bg-background">
            <Head title="Kegiatan SENADA" />

            <Navbar />

            <main className="max-w-screen-2xl mx-auto px-margin-mobile md:px-margin-desktop py-lg">
                {/* Hero Section */}
                <section className="mb-xl">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-md mb-lg">
                        <div className="max-w-2xl">
                            <span className="bg-tertiary-fixed text-on-tertiary-fixed px-4 py-1 rounded-full text-label-sm font-label-sm mb-4 inline-block">
                                KEGIATAN KAMI
                            </span>
                            <h1 className="text-headline-xl font-headline-xl text-primary mb-4">
                                Gali Potensi, Perkuat Iman.
                            </h1>
                            <p className="text-body-lg font-body-lg text-on-surface-variant">
                                Jelajahi berbagai kegiatan bermanfaat mulai dari
                                kajian spiritual hingga pelatihan profesional.
                            </p>
                        </div>
                    </div>

                    {/* Category Filter Chips Dinamis */}
                    <div className="flex flex-wrap gap-sm mb-lg">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-2 rounded-full font-label-md text-label-md transition-all ${
                                    selectedCategory === cat
                                        ? "bg-primary text-on-primary"
                                        : "bg-surface-container-high text-on-surface-variant hover:bg-secondary-container"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Bento Grid Dinamis */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
                    {filteredActivities.length > 0 ? (
                        filteredActivities.map((activity) => (
                            <ActivityCard
                                key={activity.id}
                                activity={activity}
                            />
                        ))
                    ) : (
                        <div className="col-span-full py-xl text-center">
                            <p className="text-on-surface-variant italic">
                                Belum ada kegiatan untuk kategori ini.
                            </p>
                        </div>
                    )}

                    {/* CTA Card Statis (Selalu Muncul) */}
                    <div className="md:col-span-4 group cursor-pointer overflow-hidden rounded-xl bg-primary text-on-primary p-md flex flex-col justify-between">
                        <div>
                            <h3 className="text-title-md font-title-md mb-2">
                                Ingin Berkolaborasi?
                            </h3>
                            <p className="text-body-md font-body-md opacity-80">
                                Kami selalu terbuka untuk ide kegiatan baru dari
                                mahasiswa dan organisasi partner.
                            </p>
                        </div>
                        <button className="bg-tertiary-fixed text-on-tertiary-fixed w-full py-3 rounded-lg font-label-md text-label-md mt-lg hover:opacity-90 transition-opacity">
                            Ajukan Proposal
                        </button>
                    </div>
                </div>

                {/* Load More Simulation */}
                <div className="mt-xl flex justify-center">
                    <button className="group flex items-center gap-2 text-primary font-label-md text-label-md hover:gap-4 transition-all">
                        Lihat Semua Kegiatan{" "}
                        <span className="material-symbols-outlined">south</span>
                    </button>
                </div>
            </main>

            <Footer />
            <FloatingFab />
        </div>
    );
}
