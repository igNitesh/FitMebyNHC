import Link from "next/link";
import { ShieldCheck, UserCheck, Activity, MessageCircle, AlertCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAFCFC] pt-32 pb-24 md:pt-48 md:pb-32">
      {/* Abstract Background Glows for Medical/Trust Feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-500/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-700 text-sm font-semibold border border-red-100 mb-8 animate-fade-in-up">
          <AlertCircle className="w-4 h-4" />
          <span>Is your stubborn fat actually a hormonal issue?</span>
        </div>

        <h1 className="max-w-5xl text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-[#111827] leading-[1.1] font-serif mb-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          Don't fight your body. <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-teal-600">Fix your metabolism.</span>
        </h1>

        <p className="max-w-3xl text-xl md:text-2xl text-[#4B5563] font-medium leading-relaxed font-sans mb-12 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          Doctor-guided protocol for Indian women to reverse PCOS, Thyroid resistance, and stubborn fat. No crash diets. Pure medical science.
        </p>

        {/* High Conversion CTA Block */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          <Link
            href="https://wa.me/919718476787?text=Hi,%20I%20would%20like%20to%20check%20my%20PCOS/Metabolism%20risk%20and%20consult%20a%20doctor."
            target="_blank"
            className="flex-1 flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-green-600 text-white font-bold text-lg hover:bg-green-700 shadow-[0_10px_30px_rgba(22,163,74,0.3)] transition-all hover:-translate-y-1"
          >
            <MessageCircle className="w-6 h-6" />
            Check Your PCOS Risk
          </Link>
          <Link
            href="https://wa.me/919718476787?text=I%20want%20to%20talk%20to%20a%20doctor%20directly."
            target="_blank"
            className="flex-1 flex items-center justify-center gap-2 px-8 py-5 rounded-2xl bg-white text-[#374151] border-2 border-gray-200 font-bold text-lg hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
          >
            Talk to Doctor
          </Link>
        </div>
        
        <p className="text-base text-[#4B5563] font-semibold mb-16 animate-fade-in-up flex items-center justify-center gap-3 flex-wrap" style={{ animationDelay: "400ms" }}>
          <span>🩺 Doctor-guided</span>
          <span className="text-gray-300">•</span>
          <span>🛡️ Safe</span>
          <span className="text-gray-300">•</span>
          <span>✨ Personalized</span>
        </p>

        {/* Clinical Proof Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-gray-200 animate-fade-in-up w-full max-w-5xl" style={{ animationDelay: "500ms" }}>
          {[
            { metric: "10,000+", label: "Patients Treated" },
            { metric: "MD / PT", label: "Supervised Protocols" },
            { metric: "93%", label: "Success Rate" },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center gap-1">
              <span className="text-4xl font-black text-[#111827]">{stat.metric}</span>
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
