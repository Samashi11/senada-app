export default function IntroSection() {
    return (
        <section className="py-xl px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
            <div className="relative">
                <div className="aspect-square bg-secondary-container rounded-full absolute -top-base -left-base w-3/4 opacity-50 blur-3xl"></div>
                <img
                    alt="Empowered Students"
                    className="relative z-10 w-full h-[500px] object-cover rounded-xl shadow-xl"
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
                />
            </div>
            <div className="space-y-md">
                <h2 className="font-headline-lg text-headline-lg text-primary">
                    Membangun Generasi Madani di Era Digital
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    SENADA University Islamic Organization hadir sebagai wadah
                    bagi mahasiswa untuk mengeksplorasi nilai-nilai Islam yang
                    relevan dengan dinamika zaman. Kami percaya bahwa kecerdasan
                    intelektual harus berjalan selaras dengan ketenangan jiwa
                    dan kepedulian sosial.
                </p>
                <div className="space-y-sm">
                    <div className="flex items-center gap-md">
                        <span className="material-symbols-outlined text-primary p-xs bg-primary-fixed rounded-full">
                            check_circle
                        </span>
                        <span className="font-body-md text-body-md font-semibold">
                            Integritas Spiritual & Akhlakul Karimah
                        </span>
                    </div>
                    <div className="flex items-center gap-md">
                        <span className="material-symbols-outlined text-primary p-xs bg-primary-fixed rounded-full">
                            check_circle
                        </span>
                        <span className="font-body-md text-body-md font-semibold">
                            Pemberdayaan Soft Skills Mahasiswa
                        </span>
                    </div>
                    <div className="flex items-center gap-md">
                        <span className="material-symbols-outlined text-primary p-xs bg-primary-fixed rounded-full">
                            check_circle
                        </span>
                        <span className="font-body-md text-body-md font-semibold">
                            Kontribusi Nyata Untuk Masyarakat
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
