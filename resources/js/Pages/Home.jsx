// import { useEffect } from "react";
// import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";
// import HeroSection from "../Components/HeroSection";
// import PrayerTimes from "../Components/PrayerTimes";
// import FloatingFab from "../Components/FloatingFab";
// // Nanti tambahkan import IntroSection, ProgramBento, Testimonials

// export default function Home() {
//     // Logic animasi observer diubah ke cara React
//     useEffect(() => {
//         const observerOptions = { threshold: 0.1 };

//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add("opacity-100", "translate-y-0");
//                     entry.target.classList.remove(
//                         "opacity-0",
//                         "translate-y-10",
//                     );
//                 }
//             });
//         }, observerOptions);

//         const sections = document.querySelectorAll("section");
//         sections.forEach((section) => {
//             section.classList.add(
//                 "transition-all",
//                 "duration-700",
//                 "opacity-0",
//                 "translate-y-10",
//             );
//             observer.observe(section);
//         });

//         // Cleanup function
//         return () => {
//             sections.forEach((section) => observer.unobserve(section));
//         };
//     }, []);

//     return (
//         <div className="min-h-screen">
//             <Navbar />

//             <main>
//                 <HeroSection />
//                 <PrayerTimes />

//                 {/* Masukkan komponen IntroSection, ProgramBento,
//                   dan Testimonials kamu di sini nanti
//                 */}
//             </main>

//             <Footer />
//             <FloatingFab />
//         </div>
//     );
// }

import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
// import PrayerTimes from "../Components/PrayerTimes";
import IntroSection from "../Components/IntroSection";
import ProgramBento from "../Components/ProgramBento";
import QuoteSection from "../Components/QuoteSection";
import FloatingFab from "../Components/FloatingFab";

export default function Home() {
    useEffect(() => {
        const observerOptions = { threshold: 0.1 };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("opacity-100", "translate-y-0");
                    entry.target.classList.remove(
                        "opacity-0",
                        "translate-y-10",
                    );
                }
            });
        }, observerOptions);

        const sections = document.querySelectorAll("section");
        sections.forEach((section) => {
            section.classList.add(
                "transition-all",
                "duration-700",
                "opacity-0",
                "translate-y-10",
            );
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <div className="min-h-screen bg-background text-on-background">
            <Navbar />

            <main>
                <HeroSection />
                {/* <PrayerTimes /> */}
                <IntroSection />
                <ProgramBento />
                <QuoteSection />
            </main>

            <Footer />
            <FloatingFab />
        </div>
    );
}