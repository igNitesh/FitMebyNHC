import { CheckCircle2, ChevronRight, ShieldCheck, Target, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FunnelSection() {
    const plans = [
        {
            name: "1 Month Plan",
            bestFor: "Mild weight gain or minor lethargy",
            outcome: "Initial detoxification & metabolic reset.",
            price: "1999",
            period: "per month",
            color: "border-gray-200 bg-white",
            buttonColor: "bg-white text-green-700 border-2 border-green-200 hover:bg-green-50 hover:border-green-300",
            features: [
                "Complete Health Assessment",
                "Personalized Diet Plan",
                "Basic Workout Plan",
                "2 Doctor Consultations",
                "Weekly Tracking",
            ],
            isPopular: false,
        },
        {
            name: "3 Month Protocol",
            bestFor: "Stubborn Fat, active PCOS, or constant fatigue",
            outcome: "Deep hormonal correction & sustainable weight drop.",
            price: "4999",
            period: "total",
            color: "border-green-500 bg-green-50/30 scale-105 shadow-2xl relative z-10",
            buttonColor: "bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-600/30",
            features: [
                "Everything in 1 Month",
                "Biweekly Doctor Review",
                "Hormonal Focus Plan",
                "Advanced Workout",
                "Nutritionist Follow-up",
                "Free SOS WhatsApp Chat"
            ],
            isPopular: true,
        },
        {
            name: "6 Month Plan",
            bestFor: "Severe Thyroid imbalance or Post-pregnancy recovery",
            outcome: "Complete lifestyle & inflammatory reversal.",
            price: "8999",
            period: "total",
            color: "border-gray-200 bg-white",
            buttonColor: "bg-white text-green-700 border-2 border-green-200 hover:bg-green-50 hover:border-green-300",
            features: [
                "Everything in 3 Month",
                "Blood Report Review",
                "Gut & Inflammation Protocol",
                "Maintenance Blueprint",
                "Priority Support",
            ],
            isPopular: false,
        }
    ];

    return (
        <section id="plans" className="py-32 bg-[#FAFCFC]">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">

                <div className="text-center mb-20 px-4">
                    {/* Personalization Hook */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold border border-blue-100 mb-8 animate-fade-in-up">
                        <Target className="w-4 h-4" />
                        <span>Based on clinical outcome data</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-[#111827] font-serif mb-6">
                        The Recommended Protocol
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl font-medium">
                        Select the plan that matches your current health state. All plans are doctor-monitored.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`rounded-[2rem] p-8 flex flex-col h-full border-2 transition-all ${plan.color}`}
                        >
                            {plan.isPopular && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold px-6 py-2 rounded-full text-sm uppercase tracking-wider text-center shadow-lg shadow-green-500/30 w-max">
                                    Highest Success Rate
                                </div>
                            )}

                            <div className="mb-6 text-center pt-4">
                                <h3 className="text-xl font-bold text-[#111827] mb-2">{plan.name}</h3>
                                <div className="flex items-end justify-center gap-1">
                                    <span className="text-5xl font-black text-[#111827]">₹{plan.price}</span>
                                    <span className="text-gray-500 font-medium pb-2 text-sm">/{plan.period}</span>
                                </div>
                            </div>

                            {/* Best For & Outcome Blocks */}
                            <div className="mb-8 space-y-3 pb-6 border-b border-gray-100">
                                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Best For</p>
                                    <p className="text-[#374151] font-semibold text-sm leading-snug">{plan.bestFor}</p>
                                </div>
                                <div className="bg-blue-50/50 p-3 rounded-xl border border-blue-50">
                                    <p className="text-xs text-blue-600 font-bold uppercase tracking-wider mb-1">Expected Outcome</p>
                                    <p className="text-[#111827] font-semibold text-sm leading-snug flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                                        <span>{plan.outcome}</span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex-grow">
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-4">
                                            <div className="p-1 rounded-full bg-green-100 text-green-700 shrink-0 mt-0.5">
                                                <CheckCircle2 className="w-4 h-4" />
                                            </div>
                                            <span className="text-[#374151] font-medium text-sm md:text-base">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link
                                href={`https://wa.me/919718476787?text=${encodeURIComponent(`Hi, I believe the ${plan.name} is best for me. I would like to start.`)}`}
                                target="_blank"
                                className={`w-full py-5 rounded-xl font-bold text-lg flex justify-center items-center gap-2 transition-all hover:-translate-y-1 ${plan.buttonColor}`}
                            >
                                Start This Protocol <ChevronRight className="w-5 h-5" />
                            </Link>

                            {plan.isPopular && (
                                <p className="text-center text-xs text-green-700 font-bold mt-4">
                                    *Spots limited to ensure quality care.
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Narrative Connector out of Funnel */}
                <div className="mt-24 text-center pb-10">
                    <p className="text-gray-400 font-medium tracking-wide mb-2 italic">Still unsure if this is right for you?</p>
                    <Link href="https://wa.me/919718476787?text=Hi, I'm not sure which plan is right for me. Can a doctor review my symptoms?" target="_blank" className="text-green-600 font-bold hover:underline">
                        Talk directly to our medical team &rarr;
                    </Link>
                </div>

            </div>
        </section>
    );
}
