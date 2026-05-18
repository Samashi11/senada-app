export default function CallToAction() {
  return (
    <>
      {/* Final CTA */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <div className="bg-surface-container p-12 md:p-20 rounded-xl relative overflow-hidden">
          <div className="absolute top-10 left-10 opacity-20 transform -rotate-12">
            <span
              className="material-symbols-outlined !text-8xl text-secondary"
              data-icon="auto_awesome"
            >
              auto_awesome
            </span>
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-primary mb-6 leading-tight">
              Ready to be part of <br />
              something meaningful?
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <button className="w-full md:w-auto bg-primary text-white px-10 py-5 rounded-full font-headline font-bold text-lg shadow-lg">
                Apply Today
              </button>
              <button className="w-full md:w-auto bg-transparent border-2 border-primary text-primary px-10 py-5 rounded-full font-headline font-bold text-lg">
                Talk to Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
