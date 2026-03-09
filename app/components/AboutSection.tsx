import { Ban, CheckCircle2, Stethoscope, TestTube2, BrainCircuit, Activity } from "lucide-react";

export default function AboutSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                        Why FitMe by NHC is Different
                    </h2>
                    <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Founders/Approach */}
                    <div className="space-y-8">
                        <div className="bg-[#F8FAFC] p-8 md:p-10 rounded-2xl border border-gray-100">
                            <h3 className="text-2xl font-bold mb-8 text-primary border-b-2 border-secondary/30 pb-4 inline-block">The Clinical Edge</h3>

                            <div className="space-y-8">
                                <div className="flex items-start gap-5">
                                    <div className="p-4 bg-white rounded-xl shadow-[0_2px_10px_rgba(15,43,70,0.06)] border border-gray-100 text-accent shrink-0">
                                        <Stethoscope className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl text-primary">Led by Medical Doctor & Physiotherapist</h4>
                                        <p className="text-[#333333] text-base leading-relaxed mt-2">
                                            Obesity treated as a medical condition. Founded by clinical experts who understand that weight loss is about metabolic health, not just calories.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="p-4 bg-white rounded-xl shadow-[0_2px_10px_rgba(15,43,70,0.06)] border border-gray-100 text-accent shrink-0">
                                        <BrainCircuit className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl text-primary">Root Cause Approach</h4>
                                        <p className="text-[#333333] text-base leading-relaxed mt-2">
                                            We treat the hormones, metabolism, and lifestyle factors causing the weight gain. Safe and effective for PCOD, Thyroid, and Pre-diabetes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: USP Comparison */}
                    <div className="grid gap-6">
                        {[
                            { title: "No extreme dieting", desc: "Eat to fuel your metabolism, safely and sustainably.", icon: Ban, color: "text-red-500", bg: "bg-red-50" },
                            { title: "No hidden charges", desc: "100% transparent pricing for our medical care.", icon: Ban, color: "text-red-500", bg: "bg-red-50" },
                            { title: "Transparent communication", desc: "Honest feedback from doctors, not salespeople.", icon: CheckCircle2, color: "text-accent", bg: "bg-teal-50" },
                            { title: "Ethical & Science-Backed", desc: "Protocols based on physiology, not fads.", icon: CheckCircle2, color: "text-accent", bg: "bg-teal-50" },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-5 p-5 bg-white border border-gray-100 shadow-[0_2px_10px_rgba(15,43,70,0.04)] rounded-xl hover:border-secondary/50 hover:shadow-md transition-all">
                                <div className={`p-3 rounded-full ${item.bg} shrink-0`}>
                                    <item.icon className={`w-6 h-6 ${item.color}`} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-primary">{item.title}</h4>
                                    <p className="text-sm text-[#6B7280] mt-1 pr-4">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
