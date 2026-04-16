import { CheckCircle2, ShieldAlert, Activity, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function SupplementSection() {
    return (
        <section className="py-24 bg-white border-b border-gray-100">
            <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                
                <div className="bg-[#F8FAFC] border-t-[10px] border-green-600 rounded-[2.5rem] p-8 md:p-16 shadow-[0_10px_40px_rgba(0,0,0,0.05)] text-center relative overflow-hidden">
                    {/* Background medical grid subtle pattern */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#16a34a 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }} />

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="inline-flex items-center justify-center p-5 bg-white rounded-2xl shadow-sm mb-8 text-green-600 border border-green-100">
                            <Activity className="w-10 h-10" />
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#111827] mb-6 tracking-tight">
                            The Clinical Reality of Fat Loss
                        </h2>

                        <div className="space-y-8 text-lg md:text-xl text-foreground font-medium leading-relaxed w-full">
                            <p className="text-2xl text-gray-500 font-serif italic mb-4">
                                "Obesity isn't a willpower issue. It's a hormonal issue."
                            </p>

                            <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-md text-left my-8 w-full">
                                <h3 className="text-2xl font-bold font-serif text-[#111827] mb-6 border-b border-gray-100 pb-4">Our Medical Protocol Focuses On:</h3>
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4">
                                        <div className="p-2 bg-green-50 rounded-xl shrink-0 mt-0.5 text-green-600 border border-green-100">
                                            <CheckCircle2 className="w-6 h-6" />
                                        </div>
                                        <span className="text-gray-700 leading-relaxed"><strong className="text-[#111827]">Insulin Resistance:</strong> Re-sensitizing your cells to properly burn glucose instead of storing it as fat.</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="p-2 bg-green-50 rounded-xl shrink-0 mt-0.5 text-green-600 border border-green-100">
                                            <CheckCircle2 className="w-6 h-6" />
                                        </div>
                                        <span className="text-gray-700 leading-relaxed"><strong className="text-[#111827]">Hormonal Imbalance:</strong> Treating the root causes associated with PCOD, Thyroid, and strict metabolic plateaus.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-center w-full">
                            <Link
                                href="https://wa.me/919718476787?text=Hi, I want to understand my hormonal issues and get a medical protocol."
                                target="_blank"
                                className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-2xl bg-green-600 text-white font-bold text-lg hover:bg-green-700 shadow-xl shadow-green-600/20 transition-transform hover:-translate-y-1 w-full sm:w-auto"
                            >
                                WhatsApp Us To Fix Your Hormones <ChevronRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
                
                {/* Narrative Handoff */}
                <div className="mt-16 text-center">
                    <a href="#system" className="inline-flex flex-col items-center justify-center text-gray-400 hover:text-green-600 transition-colors animate-pulse">
                        <span className="text-sm font-bold uppercase tracking-widest mb-2">See how we treat it medically</span>
                        <ChevronRight className="w-6 h-6 rotate-90" />
                    </a>
                </div>

            </div>
        </section>
    );
}
