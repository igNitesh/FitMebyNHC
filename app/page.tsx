"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SystemSection from "./components/SystemSection";
import BMICalculator from "./components/BMICalculator";
import ObesityCausesSection from "./components/ObesityCausesSection";
import SuccessStoriesSection from "./components/SuccessStoriesSection";
import FunnelSection from "./components/FunnelSection";
import OrderSection from "./components/OrderSection";
import TrackingSection from "./components/TrackingSection";
import Footer from "./components/Footer";

export default function Home() {
  const [trackedOrderId, setTrackedOrderId] = useState<string | null>(null);

  const handleOrderPlaced = (orderId: string) => {
    setTrackedOrderId(orderId);
    // Optionally scroll to tracking section
    setTimeout(() => {
      document.getElementById('track')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background" data-testid="landing-page">
      <Navbar />
      <main>
        <div id="hero"><HeroSection /></div>
        <div id="about"><AboutSection /></div>
        <div id="system"><SystemSection /></div>
        <div id="causes"><ObesityCausesSection /></div>
        <div id="bmi-calculator"><BMICalculator /></div>
        <div id="stories"><SuccessStoriesSection /></div>
        <div id="funnel"><FunnelSection /></div>
        <div id="order"><OrderSection onOrderPlaced={handleOrderPlaced} /></div>
        <div id="track"><TrackingSection /></div>
      </main>
      <Footer />
    </div>
  );
}
