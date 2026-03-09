import { CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FunnelSection() {
    const plans = [
        {
            name: "1 Month Plan",
            price: "1999",
            period: "per month",
            color: "border-gray-200",
            buttonColor: "bg-white text-primary border border-primary/20 hover:bg-slate-50",
            features: [
                "Complete Health Assessment",
                "Personalized Diet Plan",
                "Basic Workout Plan",
                "2 Doctor Consultations",
                "Weekly Tracking",
                "WhatsApp Support",
            ],
            isPopular: false,
        },
        {
            name: "2 Month Plan",
            price: "2999",
            period: "total",
            color: "border-primary/20",
            buttonColor: "bg-primary text-primary-foreground hover:bg-primary/90",
            features: [
                "Everything in 1 Month",
                "Biweekly Doctor Review",
                "Hormonal Focus Plan",
                "Advanced Workout",
                "Nutritionist Follow-up",
            ],
            isPopular: true,
        },
        {
            name: "3 Month Plan",
            price: "4999",
            period: "total",
            color: "border-gray-200",
            buttonColor: "bg-white text-primary border border-primary/20 hover:bg-slate-50",
            features: [
                "Everything in 2 Month",
                "Weekly Doctor Monitoring",
                "Blood Report Review",
                "Gut & Inflammation Protocol",
                "Maintenance Blueprint",
                "Priority Support",
            ],
            isPopular: false,
        }
    ];

    return (
        <section id="plans" className="py-24 bg-[#F8FAFC]">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">

                <div className="text-center mb-16 px-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                        Transparent Medical Care
                    </h2>
                    <p className="text-[#6B7280] max-w-2xl mx-auto text-lg md:text-xl font-medium">
                        Premium medical guidance. Honest pricing. No hidden sales.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`relative bg-white rounded-2xl p-8 flex flex-col h-full border-[1.5px] transition-all hover:shadow-xl ${plan.color} ${plan.isPopular ? 'shadow-lg transform md:-translate-y-4' : 'shadow-sm'}`}
                        >
                            {plan.isPopular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground font-bold px-4 py-1 rounded-full text-sm uppercase tracking-wider">
                                    Most Recommended
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-[#333333] mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-black text-primary">₹{plan.price}</span>
                                    <span className="text-[#6B7280] font-medium text-sm">/{plan.period}</span>
                                </div>
                            </div>

                            <div className="flex-grow">
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                            <span className="text-[#333333] text-sm md:text-base font-medium leading-tight">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link
                                href={`https://wa.me/9718476787?text=${encodeURIComponent(`Hi, I want to select the ${plan.name} at ₹${plan.price}. Please provide more details.`)}`}
                                target="_blank"
                                className="w-full mt-auto"
                            >
                                <Button className={`w-full py-6 rounded-xl font-bold text-base md:text-lg flex justify-center items-center gap-2 transition-transform duration-200 active:scale-95 ${plan.buttonColor}`}>
                                    Select Plan <ChevronRight className="w-5 h-5" />
                                </Button>
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
