import Link from "next/link";
import { ArrowRight } from "lucide-react";

const recentBlogs = [
    {
        id: 1,
        title: "PCOS Kya Hai? (PCOS in Hindi/English)",
        excerpt: "PCOS/PCOD ek common hormonal problem hai jo Indian women ko affect karta hai. Janiye iske mukhya lakshan (symptoms) jaise irregular periods aur hair fall.",
        date: "Oct 12, 2023",
        author: "Clinical Team",
        readTime: "5 min read",
    },
    {
        id: 2,
        title: "PCOS aur Obesity (Motapa) Ka Connection",
        excerpt: "PCOS mein pet ka fat kyun badhta hai? Insulin resistance aur high-carb Indian diet ka connection samjho.",
        date: "Nov 02, 2023",
        author: "Dr. FitMe",
        readTime: "7 min read",
    },
    {
        id: 3,
        title: "PCOS aur Infertility — Bachche Kaise Paayein?",
        excerpt: "PCOS India me infertility ka top cause ban chuka hai. Janiye safe, natural aur evidence-based tarike pregnancy plan karne ke liye.",
        date: "Nov 15, 2023",
        author: "Medical Panel",
        readTime: "4 min read",
    }
];

export default function HomepageBlogSection() {
    return (
        <section className="py-24 bg-white border-t border-border/30">
            <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                
                <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-serif text-primary tracking-tight">
                        Latest Clinical Insights
                    </h2>
                    <Link href="/blog" className="mt-4 md:mt-0 flex items-center text-primary font-medium hover:underline transition-all">
                        View All Articles <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                </div>

                <div className="flex flex-col gap-12">
                    {recentBlogs.map((post, idx) => (
                        <div key={post.id} className="group flex flex-col">
                            {idx !== 0 && <div className="w-full h-px bg-border/40 mb-12" />}
                            <div className="flex items-center gap-2 text-sm text-muted-foreground font-sans mb-3 font-medium">
                                <span>{post.author}</span>
                                <span>·</span>
                                <span>{post.date}</span>
                                <span>·</span>
                                <span>{post.readTime}</span>
                            </div>
                            <Link href="/blog">
                                <h3 className="text-2xl md:text-4xl font-bold font-serif text-foreground group-hover:text-primary transition-colors leading-[1.2] mb-3">
                                    {post.title}
                                </h3>
                            </Link>
                            <p className="text-lg text-muted-foreground font-sans leading-relaxed tracking-wide max-w-3xl">
                                {post.excerpt}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
