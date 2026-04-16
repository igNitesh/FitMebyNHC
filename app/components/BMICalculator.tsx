import { HeartPulse, ShieldCheck, Scale } from "lucide-react";

export default function BMICalculator() {
    return (
        <section id="mission" className="py-24 bg-[#111827] text-white relative overflow-hidden border-y border-gray-800">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-12">

                    <div className="space-y-6">
                        <h2 className="text-sm md:text-base tracking-widest uppercase font-bold text-green-500 mb-2">
                            Our Medical Mission
                        </h2>
                        <h3 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight font-serif">
                            Medical Weight Loss Shouldn&apos;t Be <br className="hidden md:block" />
                            a Luxury for the Wealthy.
                        </h3>
                        <div className="h-1 w-24 bg-green-500 mx-auto rounded-full mt-8" />
                    </div>

                    <p className="text-xl md:text-3xl text-gray-300 leading-relaxed font-medium italic font-serif py-6 px-4 border-l-4 border-green-500 bg-white/5 rounded-r-2xl">
                        &quot;We started <span className="text-white font-bold">FitMe by NHC</span> because we were tired of seeing Indian families fall for crash diets, dangerous pills, and overpriced &apos;gurus&apos;.&quot;
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
                        {[
                            { icon: ShieldCheck, title: "Doctor Supervised", desc: "True medical safety." },
                            { icon: Scale, title: "Root Cause Focus", desc: "No symptom masking." },
                            { icon: HeartPulse, title: "Affordable Care", desc: "Priced for real people." },
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-3">
                                <div className="p-4 bg-white/5 rounded-full mb-2 border border-white/10 shadow-lg">
                                    <item.icon className="w-8 h-8 text-green-500" />
                                </div>
                                <h4 className="text-xl font-bold text-white">{item.title}</h4>
                                <p className="text-gray-400 font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
