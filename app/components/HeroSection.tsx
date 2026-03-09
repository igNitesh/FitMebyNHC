"use client";

import Link from "next/link";
import { ArrowRight, Activity, Calendar, ShieldCheck, UserCheck, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-16 md:pt-32 md:pb-24">

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              <ShieldCheck className="w-4 h-4" />
              <span>Medically Supervised Weight Loss</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-[1.15]">
                Fat Loss is Medical. <br />
                <span className="text-[#333333]">And We Treat It That Way.</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-[#333333] font-medium leading-relaxed">
                Doctor-Led Scientific Weight Management Program
                <br />
                <span className="font-semibold">Safe. Transparent. Affordable.</span>
              </h2>
            </div>

            <p className="text-sm md:text-base font-semibold text-[#6B7280]">
              Doctor Supervised | Evidence Based | No Crash Diets
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/book-consultation"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[10px] bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 shadow-md transition-colors"
              >
                👉 Start Your Medical Assessment
              </Link>
              <Link
                href="#plans"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[10px] bg-white text-primary border-[1.5px] border-secondary font-bold text-lg hover:bg-primary hover:text-white transition-colors"
              >
                👉 View Plans
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-8 border-t border-border/50">
              {[
                { icon: ShieldCheck, label: "100% Safe & Natural" },
                { icon: UserCheck, label: "Verified Doctors" },
                { icon: Activity, label: "Fixes Root Cause" },
              ].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-secondary shadow-sm">
                  <div className="p-2 rounded-full bg-green-50 text-green-600">
                    <badge.icon className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-sm text-foreground leading-tight">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image/Illustration Area */}
          <div className="relative animate-fade-in md:pl-10 mt-12 md:mt-0 aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
              alt="Professional Medical Team Consultation"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
