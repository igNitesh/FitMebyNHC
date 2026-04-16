import { CheckCircle2, ShieldCheck, Stethoscope, Microscope, Search, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
    return (
        <section className="py-24 bg-[#FAFCFC] border-b border-gray-100">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#111827] mb-6">
                        Why FitMe works when diets fail.
                    </h2>
                    <p className="text-xl text-gray-600 font-medium font-sans">
                        We are a medical facility, not a gym. We diagnose before we prescribe.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {[
                        { 
                            icon: Stethoscope, 
                            title: "Doctors, NOT Trainers", 
                            desc: "Your protocol is designed by certified MDs and Clinical Physiotherapists who understand female hormones.",
                            color: "text-blue-600 bg-blue-50 border-blue-100" 
                        },
                        { 
                            icon: Microscope, 
                            title: "Bloodwork Driven", 
                            desc: "We analyze your internal health markers. If you have insulin resistance, standard calorie deficits will literally not work.",
                            color: "text-purple-600 bg-purple-50 border-purple-100" 
                        },
                        { 
                            icon: Search, 
                            title: "Root Cause Correction", 
                            desc: "We don't sell 'magic fat burners'. We fix the underlying metabolic slowdown causing the weight retention.",
                            color: "text-emerald-600 bg-emerald-50 border-emerald-100" 
                        }
                    ].map((feature, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center border mb-6 ${feature.color}`}>
                                <feature.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-[#111827] mb-3">{feature.title}</h3>
                            <p className="text-gray-600 font-medium leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Proof & Contrast Box */}
                <div className="bg-white rounded-[2rem] border border-gray-200 overflow-hidden shadow-xl">
                    <div className="grid md:grid-cols-2">
                        <div className="p-10 md:p-14 bg-red-50 border-b md:border-b-0 md:border-r border-red-100">
                            <h4 className="text-2xl font-bold text-red-900 mb-6 font-serif">The Old Standard Way</h4>
                            <ul className="space-y-4">
                                {["Starvation diets & low calories", "Excessive cardio driving up cortisol", "Blaming 'willpower'", "No hormonal consideration"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-red-200 text-red-700 flex items-center justify-center shrink-0 mt-0.5 text-sm font-bold">✕</div>
                                        <span className="text-red-900 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-10 md:p-14 bg-green-50 border-green-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <ShieldCheck className="w-32 h-32 text-green-700" />
                            </div>
                            <h4 className="text-2xl font-bold text-green-900 mb-6 font-serif relative z-10">The FitMe Medical Way</h4>
                            <ul className="space-y-4 relative z-10">
                                {["Nourishing clinical nutrition", "Metabolic conditioning", "Healing the root cause", "Doctor monitored progression"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 className="w-4 h-4" /></div>
                                        <span className="text-green-900 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="https://wa.me/919718476787?text=I%20want%20to%20consult%20a%20doctor%20about%20my%20weight."
                        target="_blank"
                        className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-xl bg-green-600 text-white font-bold text-lg hover:bg-green-700 shadow-lg shadow-green-600/30 transition-transform hover:-translate-y-1 w-full sm:w-auto"
                    >
                        Talk To Our Clinical Team On WhatsApp <ChevronRight className="w-5 h-5" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
