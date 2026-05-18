export default function PrayerTimes() {
    return (
        <section className="bg-surface-container-low py-lg px-margin-mobile md:px-margin-desktop">
            <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-lg glass-card p-lg rounded-xl">
                <div>
                    <h2 className="font-title-md text-title-md text-primary">
                        Jadwal Sholat Hari Ini
                    </h2>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">
                        Wilayah Jakarta & Sekitarnya
                    </p>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-md w-full md:w-auto">
                    {/* Kamu bisa me-map data ini dari API nantinya */}
                    {["Subuh", "Dzuhur", "Ashar", "Maghrib", "Isya"].map(
                        (waktu, index) => (
                            <div
                                key={index}
                                className="text-center p-md bg-white rounded-lg border border-outline-variant/10"
                            >
                                <div className="text-label-sm text-on-surface-variant">
                                    {waktu}
                                </div>
                                <div className="font-title-md text-primary">
                                    --:--
                                </div>
                            </div>
                        ),
                    )}
                    <div className="text-center p-md bg-tertiary-fixed text-on-tertiary-fixed rounded-lg border border-tertiary-container">
                        <div className="text-label-sm">Berikutnya</div>
                        <div className="font-title-md">--:--:--</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
