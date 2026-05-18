import { Link } from "@inertiajs/react";

export default function ActivityCard({ activity }) {
    // 1. Desain untuk tipe FEATURED (Besar)
    if (activity.type === "featured") {
        return (
            <div className="md:col-span-8 group cursor-pointer overflow-hidden rounded-xl bg-surface-container-low shadow-sm hover:shadow-md transition-all">
                <div className="relative h-[400px]">
                    <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        src={activity.image || "/assets/default-event.jpg"}
                        alt={activity.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-lg text-white">
                        <span className="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-label-sm font-label-sm mb-3 inline-block">
                            {activity.category}
                        </span>
                        <h2 className="text-headline-lg font-headline-lg mb-2">
                            {activity.title}
                        </h2>
                        <div className="flex gap-md text-label-md font-label-md opacity-90">
                            {activity.date && (
                                <span className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">
                                        calendar_today
                                    </span>{" "}
                                    {activity.date}
                                </span>
                            )}
                            {activity.location && (
                                <span className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">
                                        location_on
                                    </span>{" "}
                                    {activity.location}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // 2. Desain untuk tipe SMALL-CARD (Standard)
    return (
        <Link href={`/activities/${activity.id}`} className="md:col-span-4 group cursor-pointer overflow-hidden rounded-xl bg-surface-container-low p-md transition-all hover:translate-y-[-4px]">
            <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center mb-md ${activity.category === "Sosial" ? "bg-tertiary-fixed" : "bg-secondary-container"}`}
            >
                <span
                    className={`material-symbols-outlined ${activity.category === "Sosial" ? "text-on-tertiary-fixed" : "text-primary"}`}
                >
                    {activity.icon ||
                        (activity.category === "Kajian"
                            ? "menu_book"
                            : "volunteer_activism")}
                </span>
            </div>
            <span className="text-primary font-label-sm text-label-sm mb-2 uppercase tracking-wider">
                {activity.category}
            </span>
            <h3 className="text-title-md font-title-md text-primary mb-3">
                {activity.title}
            </h3>
            <p className="text-body-md font-body-md text-on-surface-variant mb-md line-clamp-2">
                {activity.desc}
            </p>
            <div className="flex items-center gap-2 text-label-sm font-label-sm text-secondary">
                <span className="material-symbols-outlined text-[18px]">
                    {activity.schedule ? "schedule" : "group"}
                </span>
                {activity.schedule || activity.status}
            </div>
        </Link>
    );
}
