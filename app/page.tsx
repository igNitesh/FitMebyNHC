"use client";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import GuidedJourneySection from "./components/GuidedJourneySection";
import AboutSection from "./components/AboutSection";
import HomepageBlogSection from "./components/HomepageBlogSection";
import SystemSection from "./components/SystemSection";
import PcodSection from "./components/PcodSection";
import BMICalculator from "./components/BMICalculator";
import SupplementSection from "./components/ObesityCausesSection";
import SuccessStoriesSection from "./components/SuccessStoriesSection";
import FunnelSection from "./components/FunnelSection";
import Link from "next/link";
import Footer from "./components/Footer";
import FaqSection from "./components/FaqSection";
import LandingModal from "./components/LandingModal";
import VideoReelsSection from "./components/VideoReelsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background" data-testid="landing-page">
      <Navbar />
      <LandingModal />
      <main>
        <div id="hero"><HeroSection /></div>
        <GuidedJourneySection />
        <div id="about"><AboutSection /></div>
        {/* <div id="pcod"><PcodSection /></div> */}
        <div id="system"><SystemSection /></div>
        <div id="causes"><SupplementSection /></div>
        <div id="bmi-calculator"><BMICalculator /></div>
        <div id="stories"><SuccessStoriesSection /></div>
        <div id="funnel"><FunnelSection /></div>


        <VideoReelsSection />
        <HomepageBlogSection />
        <div id="faq"><FaqSection /></div>

        {/* High Conversion Bottom CTA */}
        <section className="bg-[#111827] py-32 text-white text-center relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="container mx-auto px-4 relative z-10 max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-serif tracking-tight">Start your recovery journey today.</h2>
            <p className="text-gray-300 mb-12 text-xl font-medium leading-relaxed max-w-2xl mx-auto">
              You deserve a body that works for you, not against you. Let our doctors find the root cause and fix your metabolism safely.
            </p>
            <div className="flex justify-center w-full">
              <Link
                href="https://wa.me/919718476787?text=Hi,%20I%20am%20ready%20to%20start%20my%20medical%20fat%20loss%20protocol."
                target="_blank"
                className="flex items-center justify-center gap-3 bg-green-600 text-white font-bold text-xl px-12 py-6 rounded-2xl shadow-[0_10px_40px_rgba(22,163,74,0.3)] hover:bg-green-500 transition-all hover:-translate-y-1 w-full sm:w-auto"
              >
                Get Your Personalized Plan
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap justify-center items-center gap-4 text-sm text-gray-400 font-semibold px-4">
              <span>🩺 100% Confidential</span>
              <span className="hidden sm:inline">•</span>
              <span>👨‍⚕️ Doctor Supervised</span>
              <span className="hidden sm:inline">•</span>
              <span>⚡️ No Crash Diets</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
