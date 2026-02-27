"use client";

import { Play, Volume2, VolumeX, CheckCircle2 } from "lucide-react";
import { useState, useRef } from "react";
import Image from 'next/image';

interface Story {
    id: string;
    videoThumbnail: string; // Using simple colored placeholders for now
    name: string;
    result: string;
    duration: string;
    tag: string;
}

export default function SuccessStoriesSection() {
    const stories: Story[] = [
        {
            id: "1",
            videoThumbnail: "bg-slate-800",
            name: "Priya S.",
            result: "-12 kg",
            duration: "3 Months",
            tag: "PCOS Reversal"
        },
        {
            id: "2",
            videoThumbnail: "bg-teal-900",
            name: "Rahul M.",
            result: "-18 kg",
            duration: "5 Months",
            tag: "Belly Fat"
        },
        {
            id: "3",
            videoThumbnail: "bg-blue-900",
            name: "Anjali K.",
            result: "-8 kg",
            duration: "2 Months",
            tag: "Post-Partum"
        },
        {
            id: "4",
            videoThumbnail: "bg-indigo-900",
            name: "Vikram R.",
            result: "-15 kg",
            duration: "4 Months",
            tag: "Diabetes Mgmt"
        },
        {
            id: "5",
            videoThumbnail: "bg-slate-700",
            name: "Neha G.",
            result: "-10 kg",
            duration: "3 Months",
            tag: "Hypothyroid"
        }
    ];

    return (
        <section id="stories" className="py-20 bg-black text-white overflow-hidden">
            <div className="container mx-auto px-4 mb-10">
                <div className="flex items-end justify-between">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">Real Medical Results</h2>
                        <p className="text-slate-400">Watch verified patient journeys.</p>
                    </div>
                    {/* Optional: Add navigation buttons here if needed */}
                </div>
            </div>

            {/* Video Carousel */}
            <div className="flex overflow-x-auto gap-4 px-4 pb-8 snap-x snap-mandatory scrollbar-hide md:px-[calc(50%-150px)]">
                {stories.map((story) => (
                    <div
                        key={story.id}
                        className="relative shrink-0 snap-center w-[280px] h-[500px] rounded-2xl overflow-hidden cursor-pointer group border border-white/10"
                    >
                        {/* Fake Video/Thumbnail Placeholder */}
                        <div className={`absolute inset-0 ${story.videoThumbnail} flex items-center justify-center`}>
                            <Play className="w-16 h-16 text-white/50 fill-white/50 group-hover:scale-110 transition-transform" />
                        </div>

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                        {/* Content Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-white/20 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-md text-white border border-white/10">
                                    {story.tag}
                                </span>
                            </div>

                            <div className="flex items-end justify-between">
                                <div>
                                    <h3 className="font-bold text-lg flex items-center gap-1">
                                        {story.name}
                                        <CheckCircle2 className="w-4 h-4 text-teal-400" />
                                    </h3>
                                    <p className="text-sm text-slate-300">Transformation in {story.duration}</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-3xl font-bold text-teal-400 leading-none">{story.result}</div>
                                </div>
                            </div>
                        </div>

                        {/* Top Right Controls/Badges */}
                        <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md p-2 rounded-full">
                            <VolumeX className="w-4 h-4 text-white" />
                        </div>
                    </div>
                ))}
            </div>
            <style jsx global>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
