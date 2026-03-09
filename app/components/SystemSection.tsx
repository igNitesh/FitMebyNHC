import { FileText, ClipboardList, Stethoscope, HeartHandshake } from "lucide-react";

export default function SystemSection() {
    const steps = [
        {
            step: "01",
            title: "Medical Assessment",
            desc: "Detailed health history, lifestyle, and metabolic evaluation.",
            icon: FileText,
            color: "text-primary bg-primary/10 border-primary/20",
        },
        {
            step: "02",
            title: "Personalized Plan",
            desc: "Calorie & macro calculation with customized diet & workout.",
            icon: ClipboardList,
            color: "text-primary bg-primary/10 border-primary/20",
        },
        {
            step: "03",
            title: "Doctor Monitoring",
            desc: "Regular reviews and adjustments based on bodily response.",
            icon: Stethoscope,
            color: "text-primary bg-primary/10 border-primary/20",
        },
        {
            step: "04",
            title: "Sustainable Maintenance",
            desc: "Habit building and long-term lifestyle correction.",
            icon: HeartHandshake,
            color: "text-secondary bg-secondary/10 border-secondary/20",
        }
    ];

    return (
        <section id="process" className="py-24 bg-[#F8FAFC]">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">

                <div className="text-center mb-20 px-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                        Our Safe & Transparent Process
                    </h2>
                    <p className="text-[#6B7280] max-w-2xl mx-auto text-lg md:text-xl font-medium">
                        Because safety and sustainability matter more than speed.
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[2.75rem] left-[12%] right-[12%] h-0.5 bg-gray-200 -z-10" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                        {steps.map((item, idx) => (
                            <div key={idx} className="relative flex flex-col items-center lg:items-start text-center lg:text-left group">

                                {/* Icon Wrapper */}
                                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-sm border ${item.color} bg-white transition-transform duration-300 group-hover:-translate-y-2`}>
                                    <item.icon className="w-10 h-10" />
                                </div>

                                <div className="absolute top-4 right-4 lg:-right-4 text-5xl font-black text-gray-100 -z-10 select-none">
                                    {item.step}
                                </div>

                                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                                <p className="text-[#333333] leading-relaxed text-sm lg:text-base pr-0 lg:pr-4">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
