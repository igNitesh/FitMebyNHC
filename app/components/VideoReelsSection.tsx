"use client";

import { Play, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";

const videos = [
  { id: 1, src: "/video/infertility fit me(1).mp4", title: "Infertility & PCOS Guide", category: "Medical Brief" },
  { id: 2, src: "/video/pcos affect.mp4", title: "How PCOS Affects You", category: "Symptom Check" },
  { id: 3, src: "/video/pcos_story.mp4", title: "Real PCOS Transformation", category: "Patient Case Study" },
];

export default function VideoReelsSection() {
    return (
        <section className="py-24 bg-white border-b border-gray-100">
            <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
                
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#111827]">
                        Straight from our Clinics.
                    </h2>
                    <p className="text-xl text-gray-500 font-medium">
                        Real clinical case studies and medical explanations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {videos.map((vid) => (
                        <div key={vid.id} className="group relative rounded-3xl overflow-hidden bg-gray-50 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
                            
                            {/* Medical Label */}
                            <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-gray-700 shadow-sm">
                                {vid.category}
                            </div>

                            <div className="aspect-[9/16] relative pt-[177.77%] bg-black">
                                <video 
                                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                    controls
                                    preload="metadata"
                                >
                                    <source src={vid.src} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            
                            <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none">
                                <h3 className="font-bold text-xl text-white drop-shadow-md leading-tight">{vid.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <Link
                        href="https://wa.me/919718476787?text=Hi, I watched your medical videos and want to discuss my case."
                        target="_blank"
                        className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-green-600 text-white font-bold text-lg hover:bg-green-700 shadow-[0_10px_25px_rgba(22,163,74,0.25)] transition-all hover:-translate-y-1"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Ask a Doctor on WhatsApp
                    </Link>
                </div>

            </div>
        </section>
    );
}
