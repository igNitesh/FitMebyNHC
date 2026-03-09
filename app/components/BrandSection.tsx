import { Award, Heart, Leaf, Shield } from "lucide-react";
import Image from 'next/image';
// import brandImage from "@assets/generated_images/ayurvedic_heritage_brand_image.png";

const values = [
    {
        icon: Leaf,
        title: "100% Natural",
        description: "Pure Ayurvedic herbs sourced responsibly",
    },
    {
        icon: Shield,
        title: "Lab Tested",
        description: "Third-party verified for purity and potency",
    },
    {
        icon: Award,
        title: "Ancient Wisdom",
        description: "Formulated using 5000-year-old traditions",
    },
    {
        icon: Heart,
        title: "Made with Care",
        description: "Small-batch crafted for quality assurance",
    },
];

export default function BrandSection() {
    return (
        <section
            id="brand"
            className="py-20 lg:py-32 bg-card"
            data-testid="section-brand"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-3 space-y-6">
                        <h2
                            className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight"
                            data-testid="text-brand-title"
                        >
                            Rooted in Ancient
                            <br />
                            <span className="text-primary">Ayurvedic Tradition</span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground font-serif text-lg leading-relaxed">
                            <p data-testid="text-brand-p1">
                                For over 5,000 years, Ayurveda has been the cornerstone of
                                holistic wellness in India. Our founder, inspired by her
                                grandmother&apos;s traditional herbal remedies, set out to bring this
                                ancient wisdom to the modern world.
                            </p>
                            <p data-testid="text-brand-p2">
                                FitMeByNHC was born from a simple belief: nature provides
                                everything we need to achieve balance and vitality. Each
                                ingredient in our formula has been carefully selected based on
                                classical Ayurvedic texts and validated by modern science.
                            </p>
                            <p data-testid="text-brand-p3">
                                We partner directly with organic farms across India, ensuring
                                every herb is grown without pesticides and harvested at peak
                                potency. From soil to supplement, we maintain the highest
                                standards of quality and authenticity.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            {values.map((value, index) => (
                                <div
                                    key={value.title}
                                    className="flex items-start gap-3"
                                    data-testid={`card-value-${index}`}
                                >
                                    <div className="flex-shrink-0 w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                                        <value.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sm">{value.title}</h3>
                                        <p className="text-xs text-muted-foreground">
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <div className="relative aspect-[4/3]">
                            <Image
                                src='/images/brand_img.jpg'
                                alt="Traditional Ayurvedic preparation with brass mortar and ancient manuscripts"
                                fill={true}
                                sizes="(max-width: 1024px) 100vw, 1024px"
                                className="rounded-lg object-cover"
                                data-testid="img-brand"
                            />
                            <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
