import fotoImg from "../assets/fotbar2SND26.jpg";

export default function BentoHighlights() {
  return (
    <section className="py-24 bg-surface-container-low rounded-t-xl lg:rounded-t-[3rem] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4 flex items-center gap-3">
              Harmony in Diversity
              <span className="material-symbols-outlined text-secondary">
                eco
              </span>
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              SENADA is more than an organization; it is a home for every
              student at STT Nurul Fikri seeking to balance their technical
              skills with Islamic values.
            </p>
          </div>
          <a
            className="text-primary font-headline font-bold flex items-center gap-1 hover:gap-2 transition-all"
            href="#"
          >
            Learn our history
            <span className="material-symbols-outlined">chevron_right</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
          {/* Card Besar */}
          <div className="md:col-span-2 md:row-span-2 bg-surface-container-lowest p-10 rounded-lg flex flex-col justify-between editorial-shadow">
            <div>
              <span className="material-symbols-outlined text-4xl text-secondary mb-6">
                diversity_3
              </span>
              <h3 className="text-2xl font-headline font-bold text-primary mb-4">
                Ukhuwah Islamiyah
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                We believe in the power of brotherhood and sisterhood. Our
                community is built on mutual support.
              </p>
            </div>
            <div className="w-full h-48 bg-surface-dim rounded-lg mt-8 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={fotoImg}
                alt="Ukhuwah Islamiyah"
              />
            </div>
          </div>

          {/* Card Medium */}
          <div className="md:col-span-2 bg-tertiary-container text-on-tertiary-container p-8 rounded-lg flex items-center gap-6 shadow-md">
            <div className="flex-1">
              <h3 className="text-xl font-headline font-bold mb-2">
                Academic Excellence
              </h3>
              <p className="text-sm opacity-90">
                Integrating spiritual values with technology and innovation.
              </p>
            </div>
            <div className="w-24 h-24 rounded-full bg-surface-container-low/20 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-4xl">school</span>
            </div>
          </div>

          {/* Card Kecil 1 */}
          <div className="md:col-span-1 bg-surface-container-lowest p-8 rounded-lg editorial-shadow">
            <span className="material-symbols-outlined text-3xl text-primary mb-4">
              volunteer_activism
            </span>
            <h4 className="font-headline font-bold text-on-surface mb-2">
              Social Impact
            </h4>
            <p className="text-xs text-on-surface-variant">
              Active contribution to the community.
            </p>
          </div>

          {/* Card Kecil 2 */}
          <div className="md:col-span-1 bg-secondary-fixed p-8 rounded-lg shadow-sm">
            <span className="material-symbols-outlined text-3xl text-secondary mb-4">
              forum
            </span>
            <h4 className="font-headline font-bold text-on-secondary-fixed mb-2">
              Open Dialogue
            </h4>
            <p className="text-xs text-on-secondary-fixed/80">
              A safe space for questions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
