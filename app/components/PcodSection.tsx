import Image from "next/image";

export default function PcodSection() {
    return (
        <section id="pcod-vs-pcos" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                        Understanding Your Diagnosis
                    </h2>
                    <p className="text-[#6B7280] text-lg font-medium max-w-2xl mx-auto">
                        A clear medical breakdown of PCOD vs PCOS and how our hormonal weight loss protocol tackles both.
                    </p>
                </div>

                <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                    <Image
                        src="/images/pcod-vs-pcos.jpg"
                        alt="Explaining the Difference: PCOD vs PCOS"
                        fill
                        className="object-contain bg-[#e5f5f4]"
                        sizes="(max-width: 1024px) 100vw, 1024px"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
