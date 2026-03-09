"use client";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SystemSection from "./components/SystemSection";
import BMICalculator from "./components/BMICalculator";
import SupplementSection from "./components/ObesityCausesSection";
import SuccessStoriesSection from "./components/SuccessStoriesSection";
import FunnelSection from "./components/FunnelSection";
import Link from "next/link";
import Footer from "./components/Footer";
import FaqSection from "./components/FaqSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background" data-testid="landing-page">
      <Navbar />
      <main>
        <div id="hero"><HeroSection /></div>
        <div id="about"><AboutSection /></div>
        <div id="system"><SystemSection /></div>
        <div id="causes"><SupplementSection /></div>
        <div id="bmi-calculator"><BMICalculator /></div>
        <div id="stories"><SuccessStoriesSection /></div>
        <div id="funnel"><FunnelSection /></div>

        <div id="faq"><FaqSection /></div>

        {/* Call to action section instead of the order form */}
        <section className="bg-primary py-20 text-white text-center relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-0 -my-20 -ml-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Your Safe Transformation Today</h2>
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg md:text-xl font-medium">
              Join thousands of Indians fixing their metabolism. No magic pills. Only doctor-guided results.
            </p>
            <Link href="/book-consultation" className="inline-block bg-white text-primary font-bold text-lg px-10 py-5 rounded-full shadow-xl shadow-white/10 hover:bg-gray-50 transition-transform hover:scale-105">
              Book Your Medical Consultation
            </Link>
            <p className="mt-6 text-sm text-gray-400 font-medium">100% Confidential • Doctor Supervised</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
