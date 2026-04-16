import Image from "next/image";

const ingredients = [
    { name: "Ashwagandha", src: "/images/ashwagandha_root_ingredient.png" },
    { name: "Triphala", src: "/images/triphala_berries_ingredient.png" },
    { name: "Turmeric", src: "/images/turmeric_ingredient_closeup.png" },
    { name: "Green Tea", src: "/images/green_tea_leaves_ingredient.png" },
    { name: "Ginger", src: "/images/ginger_ingredient.png" },
    { name: "Cinnamon", src: "/images/cinnmon.png" },
    { name: "Aloe Vera", src: "/images/alovera.png" },
    { name: "Lemon Extract", src: "/images/lemon_extract_ingredient.png" },
    { name: "Black Pepper", src: "/images/black_pepper.png" },
    { name: "Methi Dana", src: "/images/mehi_dana.png" },
];

export default function IngredientsSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            
            <div className="container mx-auto px-4 md:px-6 mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold font-serif text-primary mb-4 tracking-tight">
                    Pure Clinical Grade Extracts
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
                    Every ingredient in our optional medical protocols is scientifically validated for metabolic correction and hormonal balance.
                </p>
            </div>

            {/* Scrolling Marquee Container */}
            <div className="relative w-full flex overflow-x-hidden group">
                <div className="animate-marquee flex whitespace-nowrap gap-8 py-8 items-center">
                    {[...ingredients, ...ingredients].map((item, idx) => (
                        <div 
                            key={idx} 
                            className="relative flex flex-col items-center justify-center min-w-[200px] h-[240px] bg-background/50 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:bg-white group/card shrink-0"
                        >
                            {/* Ambient glow behind image */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-secondary/15 rounded-full blur-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
                            
                            <div className="relative w-32 h-32 mb-6">
                                <Image 
                                    src={item.src} 
                                    alt={item.name} 
                                    fill 
                                    sizes="128px"
                                    className="object-contain drop-shadow-lg transition-transform duration-500 group-hover/card:scale-110" 
                                />
                            </div>
                            <h3 className="font-bold text-foreground font-serif tracking-wide text-lg relative z-10">{item.name}</h3>
                        </div>
                    ))}
                </div>

                {/* Left/Right Fade out to white */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
            </div>

            <style dangerouslySetInnerHTML={{__html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-50% - 1rem)); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}} />
        </section>
    );
}
