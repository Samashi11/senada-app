import heroImg from "../assets/fotbarSND26.jpg";

export default function HeroSection() {
    return (
        <section className="hero-gradient min-h-[819px] flex flex-col justify-center px-margin-mobile md:px-margin-desktop py-xl relative overflow-hidden">
            <div className="max-w-4xl space-y-md relative z-10">
                <span className="inline-block px-md py-xs bg-tertiary-fixed text-on-tertiary-fixed rounded-full font-label-sm text-label-sm">
                    LEMBAGA DAKWAH KAMPUS
                </span>
                <h1 className="font-headline-xl text-headline-xl md:text-headline-xl text-primary leading-tight">
                    Elevate Your Soul,
                    <br />
                    Empower Your Future
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                    Bergabunglah bersama Organisasi Mahasiswa muslim yang
                    berkomitmen pada integritas spiritual, kecemerlangan
                    akademik, dan pemberdayaan masyarakat.
                </p>
                <div className="flex flex-wrap gap-md pt-md">
                    <button className="bg-primary text-on-primary px-lg py-md rounded-full font-title-md text-title-md hover:shadow-lg transition-all active:scale-95">
                        Daftar Sekarang
                    </button>
                    <button className="bg-secondary-container text-on-secondary-container px-lg py-md rounded-full font-title-md text-title-md hover:bg-secondary-fixed transition-all">
                        Pelajari Visi Kami
                    </button>
                </div>
            </div>

            <div className="hidden lg:block absolute right-margin-desktop top-1/2 -translate-y-1/2 w-[400px] h-[500px] rounded-xl overflow-hidden shadow-2xl rotate-3">
                <img
                    alt="Modern Islamic Architecture"
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&q=80&w=800"
                />
            </div>
        </section>
    );
}