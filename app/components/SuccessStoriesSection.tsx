import { Star, Quote, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function SuccessStoriesSection() {
    const testimonials = [
        {
            name: "Sneha Reddy",
            tag: "PCOD Patient",
            result: "Lost 14 kg in 4 months",
            text: "I was tired of influencers telling me to just &apos;eat less&apos;. The doctors at FitMe checked my insulin levels first and customized my plan. For the first time, the weight didn&apos;t bounce back.",
            avatarColor: "bg-teal-100 text-teal-700"
        },
        {
            name: "Rahul Verma",
            tag: "Pre-Diabetic",
            result: "Lost 18 kg & reversed Pre-diabetes",
            text: "The medical monitoring makes all the difference. My doctor adjusted my meals based on how my body responded each week. Totally transparent, no unnecessary supplements.",
            avatarColor: "bg-blue-100 text-blue-700"
        },
        {
            name: "Anjali K.",
            tag: "Post-Pregnancy",
            result: "Lost 11 kg safely",
            text: "As a new mother, safety was my priority. The team didn&apos;t give me any crash diets. It was all home food, properly proportioned with medical supervision. Highly recommended.",
            avatarColor: "bg-indigo-100 text-indigo-700"
        }
    ];

    return (
        <section id="testimonials" className="py-24 bg-white relative">
            <div className="container mx-auto px-4 md:px-6">

                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                        Real Patients. Real Results.
                    </h2>
                    <p className="text-[#6B7280] text-lg md:text-xl font-medium">
                        Join thousands of Indians who fixed their metabolism the safe way.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="bg-[#F8FAFC] p-8 rounded-2xl border border-gray-100 relative group hover:shadow-lg transition-all">
                            <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-200 -z-0 group-hover:text-secondary/20 transition-colors" />

                            <div className="flex items-center gap-1 mb-6 relative z-10">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                                ))}
                            </div>

                            <p className="text-[#333333] italic leading-relaxed mb-8 relative z-10">
                                &quot;{t.text}&quot;
                            </p>

                            <div className="flex items-center gap-4 mt-auto relative z-10 pt-6 border-t border-gray-200">
                                <div className={`w-12 h-12 rounded-full ${t.avatarColor} flex items-center justify-center font-bold text-xl shrink-0`}>
                                    {t.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary flex items-center gap-1">
                                        {t.name} <CheckCircle2 className="w-4 h-4 text-accent" />
                                    </h4>
                                    <div className="text-sm font-medium text-[#6B7280]">{t.tag}</div>
                                    <div className="text-sm font-bold text-accent mt-0.5">{t.result}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
