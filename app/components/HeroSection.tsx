"use client";

import Link from "next/link";
import { ArrowRight, Activity, Calendar, ShieldCheck, Microscope, UserCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-secondary/20 to-white pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              <ShieldCheck className="w-4 h-4" />
              <span>Medically Supervised Weight Loss</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.15]">
                Doctor Guided <br />
                <span className="text-primary">Fat Loss</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
                Safe Weight Loss. Real Results.
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              A structured medical system combining clinical diagnosis, nutrition science, and biomechanics for sustainable fat correction.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/book-consultation"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all hover:-translate-y-0.5"
              >
                Book Consultation
              </Link>
              <Link
                href="#bmi-calculator"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white border border-input text-foreground font-medium text-lg hover:bg-accent/50 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('bmi-calculator')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Check Your BMI
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-border/50">
              {[
                { icon: UserCheck, label: "Doctor Founded" },
                { icon: Activity, label: "Physio Designed" },
                { icon: Microscope, label: "Lab Based" },
                { icon: Calendar, label: "Weekly Monitoring" },
              ].map((badge, idx) => (
                <div key={idx} className="flex flex-col items-center text-center gap-2">
                  <div className="p-2 rounded-full bg-secondary/30 text-primary">
                    <badge.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground leading-tight">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image/Illustration Area */}
          <div className="relative animate-fade-in md:pl-10">
            <div className="relative aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white border border-border/50">
              {/* Placeholder for Doctor/Patient Image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-slate-50 flex items-center justify-center group">
                <div className="text-center space-y-4 p-6">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Activity className="w-10 h-10 text-primary" />
                  </div>
                  <p className="text-muted-foreground font-medium">Professional Medical Support</p>
                  {/* In production this would be: 
                        <Image src="/images/doctor-consultation.jpg" alt="Doctor Consultation" fill className="object-cover" /> 
                    */}
                </div>

                {/* Floating Cards Over Image */}
                <div className="absolute top-10 left-4 bg-white/90 backdrop-blur px-4 py-3 rounded-xl shadow-lg border border-primary/10 animate-bounce-slow">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-semibold">Verified Medical Expert</span>
                  </div>
                </div>

                <div className="absolute bottom-10 right-4 bg-primary text-white px-5 py-3 rounded-xl shadow-lg shadow-primary/20">
                  <p className="text-2xl font-bold">100%</p>
                  <p className="text-xs opacity-90">Science Based</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
