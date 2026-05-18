import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
        <footer className="bg-surface-container-low border-t border-outline-variant/10 w-full px-margin-desktop py-lg max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between gap-md">
            <div className="space-y-md max-w-sm">
                <div className="text-title-md font-title-md font-bold text-primary">
                    SENADA
                </div>
                <p className="text-body-md font-body-md text-on-surface-variant">
                    Grounded in faith, growing in wisdom. Organisasi Mahasiswa
                    muslim untuk masa depan yang lebih baik.
                </p>
                <div className="flex gap-md">
                    <a
                        className="w-md h-md rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all"
                        href="#"
                    >
                        <span className="material-symbols-outlined text-[18px]">
                            public
                        </span>
                    </a>
                    <a
                        className="w-md h-md rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all"
                        href="#"
                    >
                        <span className="material-symbols-outlined text-[18px]">
                            chat
                        </span>
                    </a>
                    <a
                        className="w-md h-md rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all"
                        href="#"
                    >
                        <span className="material-symbols-outlined text-[18px]">
                            mail
                        </span>
                    </a>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-lg">
                <div className="space-y-sm">
                    <h4 className="font-label-md text-label-md text-primary">
                        Navigasi
                    </h4>
                    <ul className="space-y-xs">
                        <li>
                            <Link
                                className="text-label-sm text-on-surface-variant hover:text-primary transition-colors"
                                href="/"
                            >
                                Beranda
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-label-sm text-on-surface-variant hover:text-primary transition-colors"
                                href="/activities"
                            >
                                Program
                            </Link>
                        </li>
                        <li>
                            <a
                                className="text-label-sm text-on-surface-variant hover:text-primary transition-colors"
                                href="#"
                            >
                                Jadwal Sholat
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="space-y-sm">
                    <h4 className="font-label-md text-label-md text-primary">
                        Legal
                    </h4>
                    <ul className="space-y-xs">
                        <li>
                            <a
                                className="text-label-sm text-on-surface-variant hover:text-primary transition-colors"
                                href="#"
                            >
                                Kebijakan Privasi
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-label-sm text-on-surface-variant hover:text-primary transition-colors"
                                href="#"
                            >
                                Syarat & Ketentuan
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="space-y-sm">
                    <h4 className="font-label-md text-label-md text-primary">
                        Bantuan
                    </h4>
                    <ul className="space-y-xs">
                        <li>
                            <a
                                className="text-label-sm text-on-surface-variant hover:text-primary transition-colors"
                                href="#"
                            >
                                Hubungi Kami
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-label-sm text-on-surface-variant hover:text-primary transition-colors"
                                href="#"
                            >
                                Dokumentasi
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="md:hidden pt-lg border-t border-outline-variant/10">
                <p className="text-label-sm text-on-surface-variant">
                    © 2026 SENADA University Islamic Organization. Grounded in
                    faith, growing in wisdom.
                </p>
            </div>
        </footer>
    );
}
