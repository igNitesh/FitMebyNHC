import { Microscope, Dumbbell, Activity, ArrowRight } from "lucide-react";

export default function SystemSection() {
    const steps = [
        {
            step: "01",
            title: "Diagnose the Cause",
            desc: "We don't guess. We evaluate thyroid function, hormonal imbalances, anemia, sleep patterns, and stress levels to find the root cause.",
            icon: Microscope,
            color: "bg-blue-50 text-blue-600"
        },
        {
            step: "02",
            title: "Correct & Build",
            desc: "Personalized nutrition protocols combined with joint-safe training to repair metabolic damage and build lean tissue.",
            icon: Dumbbell,
            color: "bg-teal-50 text-teal-600"
        },
        {
            step: "03",
            title: "Monitor & Sustain",
            desc: "Weekly doctor reviews and smart metabolic adjustments ensure you don't hit plateaus and keep the weight off.",
            icon: Activity,
            color: "bg-indigo-50 text-indigo-600"
        }
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        3 Step Medical Fat Correction System
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        A scientific approach to weight loss that prioritizes your long-term health.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:black absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-10" />

                    {steps.map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative group">
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${item.color} group-hover:scale-110 transition-transform`}>
                                <item.icon className="w-7 h-7" />
                            </div>

                            <div className="absolute top-8 right-8 text-4xl font-bold text-slate-100 -z-10">
                                {item.step}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-slate-500 leading-relaxed text-sm">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
