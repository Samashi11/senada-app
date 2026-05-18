import { Link } from "@inertiajs/react";

export default function ProgramBento() {
    return (
        <section className="py-xl bg-surface-container-lowest px-margin-mobile md:px-margin-desktop">
            <div className="max-w-screen-2xl mx-auto space-y-lg">
                <div className="flex flex-col md:flex-row justify-between items-end gap-md">
                    <div>
                        <h2 className="font-headline-lg text-headline-lg text-primary">
                            Program Mendatang
                        </h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                            Jangan lewatkan kesempatan untuk bertumbuh bersama
                            kami.
                        </p>
                    </div>
                    <Link
                        href="/activities"
                        className="text-primary font-label-md text-label-md flex items-center gap-xs hover:gap-md transition-all"
                    >
                        Lihat Semua Program{" "}
                        <span className="material-symbols-outlined">
                            arrow_forward
                        </span>
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter h-auto md:h-[600px]">
                    <div className="md:col-span-8 group relative overflow-hidden rounded-xl">
                        <img
                            alt="Leadership Workshop"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent flex flex-col justify-end p-lg">
                            <span className="w-fit mb-sm px-md py-xs bg-tertiary text-on-tertiary rounded-full text-label-sm font-label-sm">
                                Workshop Unggulan
                            </span>
                            <h3 className="font-headline-lg text-headline-lg text-white">
                                Leadership Development Program
                            </h3>
                            <p className="text-on-primary-container max-w-lg mb-md">
                                Melatih karakter kepemimpinan yang amanah dan
                                visioner di lingkungan kampus.
                            </p>
                            <button className="w-fit bg-white text-primary px-lg py-sm rounded-full font-label-md text-label-md hover:bg-primary-fixed transition-all">
                                Daftar Sekarang
                            </button>
                        </div>
                    </div>
                    <div className="md:col-span-4 flex flex-col gap-gutter">
                        <div className="flex-1 glass-card p-md rounded-xl hover:shadow-md transition-all flex flex-col justify-between border-l-4 border-primary">
                            <div>
                                <span className="material-symbols-outlined text-primary text-[32px]">
                                    menu_book
                                </span>
                                <h3 className="font-title-md text-title-md text-primary mt-sm">
                                    Tahsin & Tadabbur
                                </h3>
                                <p className="text-label-sm text-on-surface-variant mt-xs">
                                    Setiap Selasa & Kamis | 16:30 WIB
                                </p>
                            </div>
                            <button className="text-primary font-label-md text-label-md text-left">
                                Daftar Sesi →
                            </button>
                        </div>
                        <div className="flex-1 glass-card p-md rounded-xl hover:shadow-md transition-all flex flex-col justify-between border-l-4 border-tertiary">
                            <div>
                                <span className="material-symbols-outlined text-tertiary text-[32px]">
                                    volunteer_activism
                                </span>
                                <h3 className="font-title-md text-title-md text-primary mt-sm">
                                    Senada Peduli
                                </h3>
                                <p className="text-label-sm text-on-surface-variant mt-xs">
                                    Bakti Sosial & Sharing Session
                                </p>
                            </div>
                            <button className="text-primary font-label-md text-label-md text-left">
                                Ikut Berdonasi →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
