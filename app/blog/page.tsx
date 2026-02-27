import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

// Placeholder blog data for premium conversion aesthetics
const blogPosts = [
    {
        id: 1,
        title: "Why Crash Diets Fail (And What to Do Instead)",
        excerpt: "Discover the metabolic consequences of extreme calorie restriction and how our medical approach ensures sustainable fat loss.",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop",
        category: "Medical Science",
        date: "Oct 12, 2023",
        author: "Dr. FitMe",
    },
    {
        id: 2,
        title: "Understanding Insulin Resistance in Weight Gain",
        excerpt: "Learn how hormones play a bigger role than calories when it comes to stubborn belly fat and metabolic slowdown.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
        category: "Hormones",
        date: "Oct 28, 2023",
        author: "Clinical Team",
    },
    {
        id: 3,
        title: "The Truth About 'Fat Burner' Supplements",
        excerpt: "We break down the science behind popular supplements and why 90% of them are just expensive marketing gimmicks.",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop",
        category: "Nutrition",
        date: "Nov 05, 2023",
        author: "Nutrition Experts",
    },
    {
        id: 4,
        title: "How Sleep Affects Your Weight Loss Journey",
        excerpt: "Cortisol, recovery, and metabolic adaptation: why tracking your sleep is just as important as tracking your nutrition.",
        image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=800&auto=format&fit=crop",
        category: "Lifestyle",
        date: "Nov 18, 2023",
        author: "Dr. FitMe",
    },
    {
        id: 5,
        title: "Managing PCOS-Related Weight Gain Effectively",
        excerpt: "A comprehensive medical guide to overcoming the challenges of weight loss when dealing with Polycystic Ovary Syndrome.",
        image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=800&auto=format&fit=crop",
        category: "Women's Health",
        date: "Dec 02, 2023",
        author: "Clinical Team",
    },
    {
        id: 6,
        title: "Building Sustainable Habits for Maintenance",
        excerpt: "Losing weight is only part of the journey. Here is how our lifestyle correction protocols help you keep the weight off permanently.",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop",
        category: "Habits",
        date: "Dec 15, 2023",
        author: "Dr. FitMe",
    },
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-32 pb-20 max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                        Medical Insights & <span className="text-primary">Articles</span>
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Evidence-based knowledge to help you understand your body, hormones, and the science of sustainable fat loss.
                    </p>
                </div>

                {/* Featured Post (First one) */}
                <div className="mb-16">
                    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-sm border border-border flex flex-col lg:flex-row transition-all hover:shadow-md">
                        <div className="relative w-full lg:w-1/2 min-h-[300px] lg:min-h-[400px] overflow-hidden">
                            <Image
                                src={blogPosts[0].image}
                                alt={blogPosts[0].title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-8 lg:p-12 w-full lg:w-1/2 flex flex-col justify-center space-y-6">
                            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold w-fit">
                                {blogPosts[0].category}
                            </span>
                            <h2 className="text-3xl font-bold group-hover:text-primary transition-colors">
                                <Link href="#">{blogPosts[0].title}</Link>
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                {blogPosts[0].excerpt}
                            </p>
                            <div className="flex items-center gap-6 text-sm text-muted-foreground pt-4 border-t border-border">
                                <div className="flex items-center gap-2">
                                    <User className="w-4 h-4" />
                                    <span>{blogPosts[0].author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>{blogPosts[0].date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.slice(1).map((post) => (
                        <div key={post.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-border flex flex-col transition-all hover:shadow-md">
                            <div className="relative w-full h-56 overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary">
                                    {post.category}
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                    <Link href="#">{post.title}</Link>
                                </h3>
                                <p className="text-muted-foreground text-sm flex-1 mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto">
                                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
                                    <Link href="#" className="flex items-center gap-1 text-primary font-medium hover:underline">
                                        Read <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </main>
            <Footer />
        </div>
    );
}
