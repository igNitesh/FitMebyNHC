import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Brain, HeartPulse, Zap, Utensils, Move } from "lucide-react";

export default function ObesityCausesSection() {
    const causes = {
        physiological: {
            label: "Physiological",
            icon: HeartPulse,
            title: "Hormonal & Metabolic Barriers",
            points: [
                "Thyroid dysfunction (Hypothyroidism)",
                "Insulin resistance & PCOD/PCOS",
                "High Cortisol (Stress Hormone)",
                "Slow basal metabolic rate (BMR)",
                "Vitamin D & B12 deficiencies"
            ]
        },
        psychological: {
            label: "Psychological",
            icon: Brain,
            title: "Mind-Body Connection",
            points: [
                "Emotional eating triggers",
                "Stress-induced binges",
                "Body image anxiety",
                "Depression-linked weight gain",
                "Sleep deprivation effects"
            ]
        },
        neurological: {
            label: "Neurological",
            icon: Zap,
            title: "Brain Signaling Issues",
            points: [
                "Leptin resistance (Satiety hormone)",
                "Dopamine seeking behavior",
                "Hypothalamic dysfunction",
                "Gut-Brain axis disruption",
                "Neurotransmitter imbalances"
            ]
        },
        lifestyle: {
            label: "Lifestyle",
            icon: Move,
            title: "Mechanical & Environmental",
            points: [
                "Sedentary work culture",
                "Joint pain preventing exercise",
                "Circadian rhythm disruption",
                "Obesogenic environment",
                "Post-pregnancy changes"
            ]
        },
        nutritional: {
            label: "Nutritional",
            icon: Utensils,
            title: "Dietary Misalignment",
            points: [
                "Hidden calorie density",
                "Micro-nutrient starvation",
                "Processed food addiction",
                "Erratic meal timing",
                "Inadequate protein intake"
            ]
        }
    };

    return (
        <section className="py-24 bg-white" id="causes">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Why You're Not Losing Weight
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        It's not just "calories in, calories out". We analyze all 5 dimensions of fat storage.
                    </p>
                </div>

                <Tabs defaultValue="physiological" className="w-full max-w-4xl mx-auto">
                    <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 h-auto p-1 bg-secondary/30 rounded-xl mb-8">
                        {Object.entries(causes).map(([key, data]) => (
                            <TabsTrigger
                                key={key}
                                value={key}
                                className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm py-3 rounded-lg text-xs md:text-sm font-medium transition-all"
                            >
                                {data.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {Object.entries(causes).map(([key, data]) => (
                        <TabsContent key={key} value={key} className="mt-0 animate-fade-in">
                            <Card className="border-none shadow-lg bg-gradient-to-br from-white to-secondary/10 overflow-hidden">
                                <div className="grid md:grid-cols-[1fr_200px] gap-6">
                                    <div className="p-6 md:p-8">
                                        <div className="flex items-center gap-3 mb-6 text-primary">
                                            <data.icon className="w-8 h-8" />
                                            <CardTitle className="text-2xl">{data.title}</CardTitle>
                                        </div>
                                        <ul className="grid sm:grid-cols-2 gap-4">
                                            {data.points.map((point, idx) => (
                                                <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* Decorative Sice Panel */}
                                    <div className="hidden md:flex items-center justify-center bg-primary/5 border-l border-primary/10">
                                        <data.icon className="w-24 h-24 text-primary/20" />
                                    </div>
                                </div>
                            </Card>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    );
}
