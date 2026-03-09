import { CheckCircle2, ShieldAlert } from "lucide-react";

export default function SupplementSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">

                <div className="bg-secondary/10 border border-secondary/30 rounded-3xl p-8 md:p-12 shadow-sm text-center">
                    <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-sm mb-6 text-primary">
                        <ShieldAlert className="w-8 h-8" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                        Are Supplements Mandatory?
                    </h2>

                    <div className="space-y-6 text-lg md:text-xl text-[#333333] font-medium leading-relaxed max-w-2xl mx-auto">
                        <p className="text-2xl font-bold text-red-500">No.</p>
                        <p>Supplements are completely optional.</p>

                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-left my-8">
                            <h3 className="text-xl font-bold text-primary mb-4 text-center">We believe:</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                                    <span>Nutrition & lifestyle contribute <strong>80%</strong> of fat loss.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                                    <span>Supplements contribute around <strong>20%</strong>.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="pt-4 border-t border-secondary/20">
                            <p className="text-primary font-bold mb-2">Optional Supplement Pack: ₹999 per month</p>
                            <p className="text-base text-[#6B7280]">
                                Only prescribed if required. No compulsion. No hidden sales.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
