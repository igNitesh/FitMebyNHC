import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-24 pb-20 max-w-7xl mx-auto px-6 lg:px-8 space-y-20">

                {/* Header Section */}
                <section className="text-center max-w-3xl mx-auto space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                        🌿 ABOUT US – <span className="text-primary">FitMe by NHC</span>
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        (Premium Conversion Version)
                    </p>
                </section>

                {/* Who We Are */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-semibold">Who We Are</h2>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            FitMe by NHC (Nutrition and Health Care) is a doctor-led medical weight management initiative built on science, safety, and sustainability.
                        </p>
                        <ul className="space-y-3 text-lg font-medium">
                            <li className="flex items-center gap-3">
                                <span className="text-red-500">❌</span> We don’t sell crash diets.
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-red-500">❌</span> We don’t promote shortcuts.
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-red-500">❌</span> We don’t believe obesity is just about calories.
                            </li>
                        </ul>
                        <p className="text-lg font-bold text-primary">
                            We treat the root cause, not just the weight.
                        </p>
                    </div>
                    <div className="bg-secondary/20 p-8 rounded-3xl border border-secondary/50">
                        <h3 className="text-2xl font-bold mb-4">Why We Started</h3>
                        <p className="mb-4">Obesity today is not just overeating. It is:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                            {[
                                "Hormonal imbalance",
                                "Insulin resistance",
                                "Thyroid dysfunction",
                                "Emotional stress",
                                "Sedentary neuromuscular patterns",
                                "Poor metabolic adaptation"
                            ].map((cause, idx) => (
                                <div key={idx} className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm border border-border">
                                    <span className="w-2 h-2 rounded-full bg-primary" />
                                    <span className="text-sm font-medium">{cause}</span>
                                </div>
                            ))}
                        </div>
                        <p className="font-semibold">Most programs ignore this complexity.</p>
                        <p className="text-primary font-bold text-xl">We don’t.</p>
                        <p className="mt-4 text-muted-foreground">
                            FitMe was created to bring ethical, medical, and physiologically sound fat-loss care to people who are tired of trial-and-error dieting.
                        </p>
                    </div>
                </section>

                {/* Philosophy & Differences */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-semibold">Our Philosophy</h2>
                        <div className="flex gap-4">
                            <div className="w-1/2 p-6 bg-primary/10 rounded-2xl border border-primary/20 text-center">
                                <p className="text-4xl font-bold text-primary mb-2">80%</p>
                                <p className="font-medium">Medical Lifestyle Correction</p>
                            </div>
                            <div className="w-1/2 p-6 bg-secondary/10 rounded-2xl border border-secondary/20 text-center">
                                <p className="text-4xl font-bold text-secondary-foreground mb-2">20%</p>
                                <p className="font-medium">Optional Supplement Support</p>
                            </div>
                        </div>
                        <p className="text-muted-foreground">
                            Supplement is optional because it supports — it does not replace discipline and medical guidance.
                        </p>
                        <div className="space-y-4">
                            <p className="font-semibold text-lg">Our real hero is:</p>
                            <ul className="space-y-2">
                                {[
                                    "Doctor evaluation",
                                    "Personalized metabolic assessment",
                                    "Structured follow-up",
                                    "Safe fat loss protocols",
                                    "Habit re-engineering"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <span className="text-primary">✔</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="bg-foreground text-background p-8 rounded-3xl space-y-6">
                        <h2 className="text-3xl font-semibold">What Makes Us Different</h2>
                        <ul className="space-y-4 text-lg">
                            {[
                                "Doctor-supervised program",
                                "Evidence-based protocols",
                                "Transparent pricing",
                                "No hidden charges",
                                "No unrealistic promises",
                                "Focus on long-term maintenance"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <span className="text-primary">✔</span> {item}
                                </li>
                            ))}
                        </ul>
                        <p className="text-xl font-bold pt-4 border-t border-background/20">
                            We measure progress scientifically — not emotionally.
                        </p>
                    </div>
                </section>

                {/* Promise & Vision */}
                <section className="bg-primary/5 p-8 md:p-12 rounded-3xl border border-primary/20 text-center space-y-12">
                    <div className="max-w-3xl mx-auto space-y-6">
                        <h2 className="text-3xl font-semibold">Our Promise</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
                            {[
                                "No crash dieting",
                                "No unsafe fat burners",
                                "No starvation methods",
                                "No fake before-after claims",
                                "No misleading ads"
                            ].map((promise, idx) => (
                                <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-border flex gap-3 items-start">
                                    <span className="text-red-500">❌</span>
                                    <span className="font-medium">{promise}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-2xl font-bold text-primary mt-8">
                            Only safe, gradual, medically guided transformation.
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto space-y-4 pt-12 border-t border-primary/20">
                        <h2 className="text-3xl font-semibold">Our Vision</h2>
                        <p className="text-xl leading-relaxed font-medium">
                            To build a community where weight loss is not fear-based, but knowledge-based.
                            Where patients feel educated, not pressured.
                            Where results are sustainable — not temporary.
                        </p>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="max-w-4xl mx-auto space-y-8">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold">❓ FAQ</h2>
                        <p className="text-muted-foreground">High Conversion Version. This section removes objections and increases trust.</p>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg font-semibold text-left">1️⃣ Is this just a diet plan?</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground space-y-2">
                                <p><strong className="text-foreground">No.</strong> This is a doctor-guided medical weight management program.</p>
                                <p>Diet is only one component. We address: Hormones, Metabolism, Stress patterns, Lifestyle behavior, Sleep cycle, Activity correction.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg font-semibold text-left">2️⃣ Are supplements compulsory?</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground space-y-2">
                                <p><strong className="text-foreground">No.</strong> Supplements are completely optional (₹999/month).</p>
                                <p>They support micronutrient correction but play only about 20% role. The main transformation comes from doctor-guided lifestyle restructuring.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-lg font-semibold text-left">3️⃣ How is FitMe different from gym trainers or online diet apps?</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground space-y-2">
                                <p>Gym trainers focus on workouts. Diet apps give generic calorie charts.</p>
                                <p>We provide: Medical screening, Risk assessment, Hormonal consideration, Regular doctor follow-up, Safe fat loss progression.</p>
                                <p className="font-semibold text-foreground">This is clinical supervision — not generic advice.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-lg font-semibold text-left">4️⃣ How soon will I see results?</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground space-y-2">
                                <p>Most clients begin noticing measurable changes within 3–4 weeks.</p>
                                <p>However, we focus on fat reduction and metabolic improvement, not just scale weight.</p>
                                <p className="font-semibold text-foreground">Sustainable results &gt; fast results.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger className="text-lg font-semibold text-left">5️⃣ Will I regain weight after stopping?</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground space-y-2">
                                <p>Weight regain happens when habits are not corrected.</p>
                                <p>Our program focuses on: Metabolic adaptation, Behavior reconditioning, Sustainable routine building.</p>
                                <p className="font-semibold text-foreground">So maintenance becomes easier.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger className="text-lg font-semibold text-left">6️⃣ Is this safe for thyroid, PCOS, or diabetes patients?</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground space-y-2">
                                <p><strong className="text-foreground">Yes, but after proper assessment.</strong></p>
                                <p>Because we are doctor-guided, protocols are adjusted according to: Medical history, Medication, Lab reports.</p>
                                <p className="font-semibold text-foreground">Safety is always the first priority.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-7">
                            <AccordionTrigger className="text-lg font-semibold text-left">7️⃣ Is this completely online?</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground space-y-2">
                                <p><strong className="text-foreground">Yes.</strong></p>
                                <p>You receive: Structured plan, Doctor consultation, Follow-up monitoring, Progress tracking.</p>
                                <p>All digitally managed for convenience.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-8">
                            <AccordionTrigger className="text-lg font-semibold text-left">8️⃣ What if I miss a follow-up?</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground space-y-2">
                                <p>We provide structured reminders.</p>
                                <p>If you miss a session, it can be rescheduled within the plan duration. Consistency is encouraged, but flexibility is supported.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-9">
                            <AccordionTrigger className="text-lg font-semibold text-left">9️⃣ Do you guarantee results?</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground space-y-2">
                                <p>We guarantee: Ethical guidance, Scientific protocol, Dedicated monitoring.</p>
                                <p>Results depend on adherence.</p>
                                <p className="font-semibold text-foreground">We do not promise unrealistic numbers — we promise safe transformation.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-10">
                            <AccordionTrigger className="text-lg font-semibold text-left">🔟 Who should join this program?</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground space-y-2">
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Individuals struggling with stubborn fat</li>
                                    <li>Thyroid / PCOS / insulin resistance patients</li>
                                    <li>People tired of crash dieting</li>
                                    <li>Those who want medically safe fat loss</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>

                {/* Conversion Booster Section */}
                <section className="bg-gradient-to-r from-primary to-primary/80 text-white p-8 md:p-12 rounded-3xl text-center space-y-8 shadow-xl">
                    <h2 className="text-3xl md:text-4xl font-bold">🔥 Still Thinking?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto bg-white/10 p-6 md:p-8 rounded-2xl backdrop-blur-sm">
                        <div className="space-y-4">
                            <p className="font-medium text-lg text-white/90 border-b border-white/20 pb-2">If you are looking for:</p>
                            <ul className="space-y-3">
                                <li className="flex gap-3"><span className="text-red-300">❌</span> Quick shortcuts</li>
                                <li className="flex gap-3"><span className="text-red-300">❌</span> Magic pills</li>
                                <li className="flex gap-3"><span className="text-red-300">❌</span> 10 kg in 10 days</li>
                            </ul>
                            <p className="font-bold text-xl pt-4">We are not for you.</p>
                        </div>
                        <div className="space-y-4">
                            <p className="font-medium text-lg text-white/90 border-b border-white/20 pb-2">If you are ready for:</p>
                            <ul className="space-y-3">
                                <li className="flex gap-3"><span className="text-green-300">✔</span> Honest guidance</li>
                                <li className="flex gap-3"><span className="text-green-300">✔</span> Medical safety</li>
                                <li className="flex gap-3"><span className="text-green-300">✔</span> Sustainable fat loss</li>
                            </ul>
                            <p className="font-bold text-xl pt-4">Welcome to FitMe by NHC.</p>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
