"use client";

import { useEffect, useState } from "react";
import { X, MessageCircle, ShieldCheck, Activity, Star } from "lucide-react";

export default function LandingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    // Show modal after 3 seconds on landing, only if it hasn't been closed this session
    const hasClosed = sessionStorage.getItem("landingModalClosed");
    if (!hasClosed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    sessionStorage.setItem("landingModalClosed", "true");
  };

  const handleWhatsAppRedirect = () => {
    // Replace with actual WhatsApp number and message
    const phoneNumber = "919999999999"; 
    const message = encodeURIComponent("Hi FitMe team! I'm interested in the medical weight loss and PCOS protocol.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    closeModal();
  };

  if (!hasMounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-md overflow-hidden bg-white rounded-3xl shadow-2xl animate-in zoom-in-95 duration-500">
        
        {/* Header Graphic */}
        <div className="relative h-32 bg-primary overflow-hidden flex items-center justify-center">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute top-0 left-0 -my-10 -ml-10 w-40 h-40 bg-secondary/20 rounded-full blur-2xl"></div>
            <h3 className="relative z-10 text-2xl font-bold text-white tracking-wide">FitMe By NHC</h3>
            
            <button 
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 p-2 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-colors"
                aria-label="Close modal"
            >
                <X className="w-5 h-5" />
            </button>
        </div>

        {/* Modal Content */}
        <div className="px-6 py-8 space-y-6 text-center">
          <div className="space-y-2">
            <h4 className="text-2xl font-extrabold text-gray-900 leading-tight">
              Doctor-Guided Fat Loss <br/> & PCOS Care
            </h4>
            <p className="text-gray-500 font-medium">
              Join 10,000+ Indians achieving real, sustainable health corrections. No magic pills.
            </p>
          </div>

          {/* Service Highlights */}
          <div className="grid grid-cols-1 gap-3 text-left bg-gray-50 rounded-2xl p-4">
             <div className="flex items-center gap-3">
               <div className="bg-green-100 p-2 rounded-full text-green-600"><ShieldCheck className="w-5 h-5" /></div>
               <span className="font-semibold text-gray-700 text-sm">100% Medically Safe & Natural</span>
             </div>
             <div className="flex items-center gap-3">
               <div className="bg-blue-100 p-2 rounded-full text-blue-600"><Activity className="w-5 h-5" /></div>
               <span className="font-semibold text-gray-700 text-sm">Fixes Root Cause (Insulin Resistance)</span>
             </div>
             <div className="flex items-center gap-3">
               <div className="bg-yellow-100 p-2 rounded-full text-yellow-600"><Star className="w-5 h-5" /></div>
               <span className="font-semibold text-gray-700 text-sm">Dedicated Dietitian Support</span>
             </div>
          </div>

          {/* WhatsApp CTA */}
          <button 
            onClick={handleWhatsAppRedirect}
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BE5A] text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-green-500/30 transition-transform active:scale-95"
          >
            <MessageCircle className="w-6 h-6" />
            Connect on WhatsApp Now
          </button>
          
          <p className="text-xs text-gray-400 mt-2 font-medium">100% Free Consultation • Speak directly to experts</p>
        </div>
      </div>
    </div>
  );
}
