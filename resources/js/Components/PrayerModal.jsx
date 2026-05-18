export default function PrayerModal({ data, onClose }) {
  if (!data) return null;

  const currentHour = new Date().getHours();
  const currentMinute = new Date().getMinutes();
  const currentTime = `${currentHour.toString().padStart(2, "0")}:${currentMinute.toString().padStart(2, "0")}`;

  // List jadwal untuk ditampilkan di looping
  const schedules = [
    { name: "Imsak", time: data.imsak, icon: "wb_twilight" },
    { name: "Subuh", time: data.subuh, icon: "light_mode" },
    { name: "Terbit", time: data.terbit, icon: "sunny" },
    { name: "Dzuhur", time: data.dzuhur, icon: "wb_sunny" },
    { name: "Ashar", time: data.ashar, icon: "partly_cloudy_day" },
    { name: "Maghrib", time: data.maghrib, icon: "nights_stay" },
    { name: "Isya", time: data.isya, icon: "bedtime" },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-primary/20 backdrop-blur-sm animate-backdrop"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative top-80 bg-surface w-full max-w-md rounded-[1.5rem] shadow-2xl overflow-hidden editorial-shadow animate-modal">
        {/* Header: Dibuat lebih tipis */}
        <div className="bg-primary p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>

          <span className="text-secondary-fixed text-[10px] font-bold tracking-[0.2em] uppercase opacity-80">
            Jadwal Sholat
          </span>
          <h2 className="text-xl font-headline font-extrabold mt-0.5">
            Depok & Sekitarnya
          </h2>
          <p className="text-white/60 text-xs font-body">{data.tanggal}</p>
        </div>

        {/* List Body: Padding dikecilkan & Spacing dirapatkan */}
        <div className="p-4 grid grid-cols-1 gap-2">
          {schedules.map((item) => {
            const isNext = item.time > currentTime;

            return (
              <div
                key={item.name}
                className={`flex items-center justify-between px-4 py-2.5 rounded-xl transition-all ${
                  isNext
                    ? "bg-secondary/10 border-l-4 border-secondary shadow-sm"
                    : "bg-surface-container-low/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`material-symbols-outlined text-lg ${
                      isNext ? "text-secondary" : "text-primary/30"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span
                    className={`text-sm font-headline font-bold ${
                      isNext ? "text-primary" : "text-on-surface-variant"
                    }`}
                  >
                    {item.name}
                  </span>
                </div>
                <span
                  className={`font-body font-bold text-base ${
                    isNext ? "text-primary" : "text-on-surface-variant"
                  }`}
                >
                  {item.time}
                </span>
              </div>
            );
          })}
        </div>

        {/* Footer: Dibuat lebih minimalis */}
        <div className="py-3 bg-surface-container-low border-t border-outline-variant/5 text-center">
          <p className="text-[9px] text-on-surface-variant/40 uppercase tracking-widest font-bold">
            Kemenag RI • MyQuran API
          </p>
        </div>
      </div>
    </div>
  );
}
