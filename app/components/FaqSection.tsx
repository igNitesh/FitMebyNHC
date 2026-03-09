import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FaqSection() {
    const faqs = [
        {
            question: "Is this a crash diet program?",
            answer: "No. Crash diets destroy your metabolism. We use medically-approved nutritional science to feed your body what it needs while reducing what it doesn't, creating sustainable fat loss without starving."
        },
        {
            question: "Do I have to buy your supplements?",
            answer: "Absolutely not. Nutrition and lifestyle correction drive 80% of our results. Supplements are entirely optional and only recommended if your blood work shows specific clinical deficiencies."
        },
        {
            question: "Is the consultation really with a doctor?",
            answer: "Yes. Your consultation and weekly monitoring are conducted by verified Medical Doctors and clinical experts, not basic fitness trainers or salespeople."
        },
        {
            question: "I have PCOD/Thyroid. Will this work for me?",
            answer: "Yes. Our Root Cause Approach is specifically designed for metabolic conditions like PCOD, Hypothyroidism, and Pre-diabetes. We treat the hormonal imbalance causing the weight gain."
        },
        {
            question: "What happens after my plan ends?",
            answer: "Our goal is to make you independent. The 'Sustainable Maintenance' phase of our program teaches you how to manage your own metabolism so you don't need us forever."
        },
        {
            question: "Are there any hidden charges?",
            answer: "Zero hidden charges. The price you see for the 1, 2, or 3-month plans covers your entire program: diets, workouts, and doctor consultations."
        },
        {
            question: "Can I do the workouts at home?",
            answer: "Yes. All workout protocols are designed to be done at home with minimal to no equipment, focusing on biomechanics and metabolic activation."
        },
        {
            question: "How much weight will I lose?",
            answer: "Healthy, medical fat loss averages 3-4 kg per month. Anything faster implies muscle and water loss, which causes immediate weight bounce-back. We focus on permanent fat loss."
        },
        {
            question: "Do I have to give up my favorite foods?",
            answer: "No. We believe in portion control and timing, not total deprivation. We'll show you how to incorporate your favorite Indian meals safely into your plan."
        },
        {
            question: "Can I get a refund if I'm not happy?",
            answer: "We offer a 100% transparent process. If you follow the medical protocol completely and see absolutely no results, we will review your case for a full refund."
        }
    ];

    return (
        <section id="faq" className="py-24 bg-white relative">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-[#6B7280] text-lg font-medium">
                        Clear, honest answers. No medical jargon.
                    </p>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 md:p-8">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, idx) => (
                            <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-gray-100 px-2">
                                <AccordionTrigger className="text-left font-bold text-lg text-[#333333] hover:text-primary transition-colors py-6">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-[#6B7280] leading-relaxed text-base pb-6 pr-8">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                {/* Conversion Booster */}
                <div className="mt-16 bg-[#F8FAFC] rounded-2xl p-8 md:p-12 text-center border border-secondary/20">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                        Still Have Questions?
                    </h3>
                    <p className="text-[#333333] mb-8 max-w-lg mx-auto">
                        Our medical coordination team is available on WhatsApp to answer any specific queries about your health condition.
                    </p>
                    <Link href="https://wa.me/919876543210" target="_blank">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-lg px-8 h-14 rounded-full shadow-lg transition-transform hover:scale-105">
                            Chat on WhatsApp
                        </Button>
                    </Link>
                </div>

            </div>
        </section>
    );
}
