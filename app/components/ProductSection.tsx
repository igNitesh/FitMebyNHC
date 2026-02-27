import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Scale,
    Flame,
    Zap,
    Moon,
    HeartPulse,
    Sparkles,
    Clock,
    Droplets,
} from "lucide-react";
import Image from 'next/image';

// import productImage from "@assets/generated_images/ayurvedic_product_bottle_hero.png";

const benefits = [
    {
        icon: Scale,
        title: "Healthy Weight Management",
        description:
            "Supports natural metabolism and helps maintain a healthy body composition through balanced digestive function.",
    },
    {
        icon: Flame,
        title: "Boosts Metabolism",
        description:
            "Thermogenic herbs like green tea and turmeric help increase calorie burning and energy expenditure.",
    },
    {
        icon: Zap,
        title: "Sustained Energy",
        description:
            "Natural adaptogens provide steady energy throughout the day without jitters or crashes.",
    },
    {
        icon: Moon,
        title: "Reduces Stress Eating",
        description:
            "Ashwagandha helps manage cortisol levels, reducing stress-related cravings and emotional eating.",
    },
    {
        icon: HeartPulse,
        title: "Supports Digestion",
        description:
            "Triphala and ginger promote healthy gut function and optimal nutrient absorption.",
    },
    {
        icon: Sparkles,
        title: "Detoxifies Naturally",
        description:
            "Gentle cleansing herbs help eliminate toxins and support liver and kidney health.",
    },
];

const howItWorks = [
    {
        step: 1,
        icon: Clock,
        title: "Morning Routine",
        description:
            "Take 2 capsules with warm water 30 minutes before breakfast to kickstart your metabolism.",
    },
    {
        step: 2,
        icon: Droplets,
        title: "Stay Hydrated",
        description:
            "Drink 8+ glasses of water throughout the day to support detoxification and absorption.",
    },
    {
        step: 3,
        icon: HeartPulse,
        title: "See Results",
        description:
            "With consistent use and a balanced lifestyle, notice visible changes within 4-6 weeks.",
    },
];

export default function ProductSection() {
    return (
        <section id="product" className="py-20 lg:py-32" data-testid="section-product">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <Badge variant="secondary" className="mb-4" data-testid="badge-product">
                        Premium Formula
                    </Badge>
                    <h2>
                        Why Choose <span className="text-primary">FitMeByNHC</span>?
                    </h2>
                    <p
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                        data-testid="text-product-subtitle"
                    >
                        Our scientifically-formulated blend combines the best of Ayurvedic
                        tradition with modern wellness science.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
                    <div className="order-2 lg:order-1">
                        <div className="grid sm:grid-cols-2 gap-4">
                            {benefits.map((benefit, index) => (
                                <Card
                                    key={benefit.title}
                                    className="hover-elevate"
                                    data-testid={`card-benefit-${index}`}
                                >
                                    <CardContent className="p-5">
                                        <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-3">
                                            <benefit.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <h3 className="font-semibold mb-1">{benefit.title}</h3>
                                        <p className="text-sm text-muted-foreground">
                                            {benefit.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 flex justify-center">
                        {/* ADDED: aspect-[4/3] (or any other ratio) AND w-full to size the container */}
                        <div className="relative max-w-md aspect-[4/3] w-full">
                            <Image
                                src='/images/ayurvedic_product_bottle_hero.png'
                                alt="Traditional Ayurvedic preparation with brass mortar and ancient manuscripts"
                                fill={true}
                                sizes="(max-width: 1024px) 100vw, 1024px"
                                className="rounded-lg object-cover"
                                priority={true}
                                data-testid="img-brand"
                            />

                        </div>
                    </div>
                </div>

                <div className="bg-card rounded-lg p-8 lg:p-12">
                    <h3
                        className="text-2xl font-semibold text-center mb-8"
                        data-testid="text-how-title"
                    >
                        How It Works
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {howItWorks.map((step, index) => (
                            <div
                                key={step.step}
                                className="text-center"
                                data-testid={`step-${index}`}
                            >
                                <div className="relative inline-flex items-center justify-center mb-4">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                        <step.icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-semibold flex items-center justify-center">
                                        {step.step}
                                    </div>
                                </div>
                                <h4 className="font-semibold mb-2">{step.title}</h4>
                                <p className="text-sm text-muted-foreground">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
