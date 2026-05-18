export default function ProgramCard({
  title,
  date,
  desc,
  category,
  imgSrc,
  participants,
}) {
  const categoryColor =
    category === "Workshop"
      ? "bg-primary"
      : category === "Community"
        ? "bg-tertiary"
        : "bg-secondary-container";

  return (
    <div className="group bg-surface-container-lowest rounded-lg overflow-hidden editorial-shadow hover:-translate-y-2 transition-all duration-300">
      <div className="aspect-video relative overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={imgSrc}
          alt={title}
        />
        <div
          className={`absolute top-4 left-4 ${categoryColor} text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest`}
        >
          {category}
        </div>
      </div>
      <div className="p-8">
        <div className="flex items-center gap-2 text-on-surface-variant text-xs mb-3">
          <span className="material-symbols-outlined text-sm">
            calendar_today
          </span>
          {date}
        </div>
        <h3 className="text-xl font-headline font-bold text-primary mb-4">
          {title}
        </h3>
        <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
          {desc}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full border-2 border-white bg-surface-dim"></div>
            <div className="w-8 h-8 rounded-full border-2 border-white bg-secondary text-white flex items-center justify-center text-[10px] font-bold">
              +{participants}
            </div>
          </div>
          <button className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
            Details{" "}
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </button>
        </div>
      </div>
    </div>
  );
}
