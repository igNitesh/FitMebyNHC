import { Ban, CheckCircle2, Stethoscope, TestTube2, BrainCircuit, Activity } from "lucide-react";

export default function AboutSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Not Influencer Weight Loss. <br className="hidden md:block" />
                        <span className="text-primary">A Medical System.</span>
                    </h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left: Founders/Approach */}
                    <div className="space-y-8">
                        <div className="bg-secondary/20 p-8 rounded-3xl border border-secondary/50">
                            <h3 className="text-2xl font-bold mb-6 text-foreground">The Clinical Edge</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white rounded-xl shadow-sm border border-secondary text-primary">
                                        <Stethoscope className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg">Medical Doctor & Physiotherapist</h4>
                                        <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                                            Founded by clinical experts who understand that weight loss is about metabolic health, not just calories.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pt-2">
                                    {[
                                        { icon: TestTube2, label: "Clinical Diagnosis" },
                                        { icon: BrainCircuit, label: "Metabolic Correction" },
                                        { icon: Activity, label: "Biomechanics" },
                                        { icon: Stethoscope, label: "Nutrition Science" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-border shadow-sm">
                                            <item.icon className="w-4 h-4 text-primary" />
                                            <span className="text-sm font-medium">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: USP Comparison */}
                    <div className="grid gap-6">
                        {[
                            { title: "No crash dieting", desc: "Eat to fuel your metabolism, not starve it.", icon: Ban, color: "text-red-500" },
                            { title: "No random supplements", desc: "Only clinically indicated support based on labs.", icon: Ban, color: "text-red-500" },
                            { title: "Lab-based customization", desc: "Treatment plan based on YOUR bloodwork.", icon: CheckCircle2, color: "text-primary" },
                            { title: "Hormone-friendly fat loss", desc: "Fix insulin & cortisol while losing fat.", icon: CheckCircle2, color: "text-primary" },
                            { title: "Fat loss + symptom correction", desc: "Improve sleep, energy, and digestion simultaneously.", icon: CheckCircle2, color: "text-primary" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/10 transition-colors">
                                <item.icon className={`w-6 h-6 shrink-0 mt-1 ${item.color}`} />
                                <div>
                                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
