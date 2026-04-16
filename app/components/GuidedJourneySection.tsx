import { Activity, AlertCircle, CheckCircle2, ChevronRight, Stethoscope } from "lucide-react";
import Link from "next/link";

export default function GuidedJourneySection() {
    const steps = [
        {
            num: "01",
            title: "The Symptoms",
            icon: AlertCircle,
            desc: "Irregular periods, unexplained weight gain, severe hair fall, and facial hair. You've tried eating less and exercising more, but the scale won't budge.",
            color: "text-red-600 bg-red-50 border-red-100",
        },
        {
            num: "02",
            title: "The Reality",
            icon: Activity,
            desc: "It is NOT your fault. Stubborn fat in Indian women is primarily driven by Insulin Resistance and Hormonal Imbalances, not just calories.",
            color: "text-orange-600 bg-orange-50 border-orange-100",
        },
        {
            num: "03",
            title: "The Clinical Fix",
            icon: Stethoscope,
            desc: "We don't prescribe crash diets. Our Medical Doctors and Physiotherapists design a protocol to re-sensitize your cells to insulin.",
            color: "text-blue-600 bg-blue-50 border-blue-100",
        },
        {
            num: "04",
            title: "The Result",
            icon: CheckCircle2,
            desc: "Sustainable fat loss, regulated periods, cleared skin, and recovered energy levels. All monitored by a real clinical team.",
            color: "text-green-600 bg-green-50 border-green-100",
        }
    ];

    return (
        <section className="py-24 bg-white border-b border-gray-100">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#111827] mb-6">
                        Feeling stuck despite trying everything?
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Traditional gyms and dietitians miss the root cause. Here is the actual path to healing.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {steps.map((step, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-2 transition-transform duration-300">
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center border mb-6 ${step.color}`}>
                                <step.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-[#111827] mb-3">{step.title}</h3>
                            <p className="text-gray-600 font-medium leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Narrative Handoff */}
                <div className="mt-16 text-center">
                    <a href="#about" className="inline-flex flex-col items-center justify-center text-gray-400 hover:text-green-600 transition-colors animate-pulse">
                        <span className="text-sm font-bold uppercase tracking-widest mb-2">Understand your real problem</span>
                        <ChevronRight className="w-6 h-6 rotate-90" />
                    </a>
                </div>

            </div>
        </section>
    );
}
