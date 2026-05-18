import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import BentoHighlights from "../components/BentoHighlights";
import ProgramCard from "../components/ProgramCard";
import CallToAction from "../components/CallToAction";
import QuoteSection from "../components/QuoteSection";

export default function Home() {
  return (
    <div className="bg-surface text-on-surface font-body">
      <Navbar />
      <main>
        <Hero />
        <BentoHighlights />
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-label font-bold tracking-[0.2em] text-secondary uppercase">
              What's Happening
            </span>
            <h2 className="text-4xl font-headline font-extrabold text-primary mt-4">
              Upcoming Programs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProgramCard
              category="Workshop"
              title="KANADA: KAJIAN SENADA"
              desc="A workshop series exploring the intersection of technology and Islamic values."
              date="Oct 25, 2026"
              participants="20"
              imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuB-FULcC5ONTNJXT639EMfphOXE9Pxt74fXyYfLHzv-j0fBv2R4D6vj514rM5lyVnkQy_f3isNPG8jVDLk0GoKcT5-CKxobGHzkwtL2NomjG3zNTBI9AQuGj7iho7qxIyOZpdsOjNYd4of3Sgv-H38-IGKtXRaFCjTidMC3dU9uVgiOZCFVXL3IfG547oI-QCVwP32Jv9iLduBELUCD_ETxIzhjxZFZr3L-qsjMCH01Yu-D1QhGn0iOcYM5-GhXA_BKeMebaWK2jJs"
            />
            {/* Tambahkan ProgramCard lainnya di sini */}
          </div>
        </section>
        <QuoteSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
