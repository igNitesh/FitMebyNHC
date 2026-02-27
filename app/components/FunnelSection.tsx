import { ArrowRight, Smartphone, CalendarCheck, FileText, Activity } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FunnelSection() {
    const steps = [
        { icon: Smartphone, label: "WhatsApp Pre-Screening" },
        { icon: CalendarCheck, label: "Paid Consultation" },
        { icon: FileText, label: "Customized Plan" },
        { icon: Activity, label: "Weekly Monitoring" },
    ];

    return (
        <section className="py-24 bg-slate-50 text-center border-t border-slate-100">
            <div className="container mx-auto px-4 md:px-6">

                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                    Start Your <span className="text-teal-600">Medical Fat Correction</span> Journey
                </h2>
                <p className="text-slate-600 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
                    No guesswork. Just a structured clinical path to your goal weight.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-16">
                    {steps.map((step, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row items-center gap-4 relative group">
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-16 h-16 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center group-hover:border-teal-200 group-hover:shadow-md transition-all">
                                    <step.icon className="w-7 h-7 text-teal-600" />
                                </div>
                                <span className="font-semibold text-sm md:text-base text-slate-800">{step.label}</span>
                            </div>

                            {idx < steps.length - 1 && (
                                <ArrowRight className="hidden md:block w-5 h-5 text-slate-300" />
                            )}
                            {idx < steps.length - 1 && (
                                <div className="md:hidden w-0.5 h-8 bg-slate-200 my-2" />
                            )}
                        </div>
                    ))}
                </div>

                <Link href="https://wa.me/919876543210" target="_blank">
                    <Button size="lg" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-lg px-8 h-14 rounded-full shadow-xl shadow-[#25D366]/20 transition-transform hover:scale-105">
                        Start WhatsApp Screening
                    </Button>
                </Link>
                <p className="mt-4 text-xs font-medium text-slate-500 uppercase tracking-wide">
                    Direct access to our medical coordination team
                </p>

            </div>
        </section>
    );
}
