import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

// Placeholder blog data for premium conversion aesthetics
const blogPosts = [
    {
        id: 1,
        title: "PCOS Kya Hai? (PCOS in Hindi/English)",
        excerpt: "PCOS/PCOD ek common hormonal problem hai jo Indian women ko affect karta hai. Janiye iske mukhya lakshan (symptoms) jaise irregular periods aur hair fall.",
        image: "/images/brand_img.jpg",
        category: "Women's Health",
        date: "Oct 12, 2023",
        author: "Clinical Team",
    },
    {
        id: 2,
        title: "PCOS aur Obesity (Motapa) Ka Connection",
        excerpt: "PCOS mein pet ka fat kyun badhta hai? Insulin resistance aur high-carb Indian diet ka connection samjho, aur metabolism theek karne ke simple tips jano.",
        image: "/images/cover/cover.jpeg",
        category: "Hormones & Weight",
        date: "Nov 02, 2023",
        author: "Dr. FitMe",
    },
    {
        id: 3,
        title: "PCOS aur Infertility — Bachche Kaise Paayein?",
        excerpt: "PCOS India me infertility ka top cause ban chuka hai. Janiye safe, natural aur evidence-based tarike pregnancy plan karne ke liye bina side effects ke.",
        image: "/images/brand_img.jpg",
        category: "Fertility",
        date: "Nov 15, 2023",
        author: "Medical Panel",
    },
    {
        id: 4,
        title: "Hamara Protocol Kitna Effective Hai?",
        excerpt: "Evidence-based solutions jo blood sugar, hormones aur PCOS cysts ko control karte hain. 1-3 mahine mein 10-30% proven improvement, expert guided.",
        image: "/images/cover/cover.jpeg",
        category: "Our Protocol",
        date: "Dec 05, 2023",
        author: "Dr. FitMe",
    },
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="pt-32 pb-24 max-w-4xl mx-auto px-6 lg:px-8">

                {/* Extremely Minimal Header */}
                <div className="py-12 mb-12 border-b border-gray-100">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground font-serif">
                        Clinical Insights.
                    </h1>
                    <p className="text-xl text-muted-foreground mt-6 font-sans max-w-2xl">
                        Evidence-based knowledge to help you understand your body, hormones, and the science of sustainable fat loss.
                    </p>
                </div>

                <div className="flex flex-col gap-16">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="group relative flex flex-col md:flex-row gap-8 items-start">
                            {/* Text Content */}
                            <div className="flex-1 order-2 md:order-1">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground font-sans mb-4">
                                    <span className="font-semibold text-secondary uppercase tracking-wider text-xs">
                                        {post.category}
                                    </span>
                                    <span>·</span>
                                    <span>{post.date}</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground group-hover:text-primary transition-colors leading-[1.25] mb-4">
                                    <Link href="/blog/blog1" className="before:absolute before:inset-0">
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className="text-lg text-muted-foreground font-sans leading-relaxed tracking-wide mb-6">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center gap-3 text-sm text-foreground font-medium">
                                    <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center bg-gray-50 text-gray-400">
                                        <User className="w-4 h-4" />
                                    </div>
                                    <span>{post.author}</span>
                                </div>
                            </div>
                            
                            {/* Image - Abstracted and Minimal */}
                            <div className="w-full md:w-48 lg:w-64 aspect-[4/3] md:aspect-square relative overflow-hidden rounded-xl bg-gray-50 order-1 md:order-2 shrink-0">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </article>
                    ))}
                </div>

            </main>
            <Footer />
        </div>
    );
}
