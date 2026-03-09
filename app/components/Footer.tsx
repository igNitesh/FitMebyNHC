'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Leaf,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ShieldCheck,
  Beaker,
  Award,
} from "lucide-react";
import { useToast } from "../hooks/use-toast";


const quickLinks = [
  { label: "Our Medical Process", href: "#process" },
  { label: "Why Trust Us", href: "#about" },
  { label: "Pricing & Plans", href: "#plans" },
  { label: "FAQ", href: "#faq" },
  { label: "Book Consultation", href: "/book-consultation" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Refund Policy", href: "#" },
  { label: "Shipping Info", href: "#" },
];

const trustBadges = [
  { icon: ShieldCheck, label: "GMP Certified" },
  { icon: Beaker, label: "Lab Tested" },
  { icon: Award, label: "ISO 9001" },
];

export default function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast({
        title: "Please enter your email",
        variant: "destructive",
      });
      return;
    }
    // todo: remove mock functionality
    toast({
      title: "Subscribed!",
      description: "You'll receive updates about FitMeByNHC and wellness tips.",
    });
    setEmail("");
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-white border-t border-primary/20" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-2xl font-bold mb-4 text-white"
              data-testid="link-footer-logo"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <Leaf className="w-8 h-8 text-secondary" />
              <span>FitMe<span className="text-secondary">ByNHC</span></span>
            </a>
            <p className="text-sm text-gray-300 mb-8 leading-relaxed">
              Doctor-guided fat correction system combining medical science with sustainable lifestyle changes. Safe. Transparent. Affordable.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary hover:text-primary transition-colors"
                  data-testid={`link-social-${index}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                    data-testid={`link-${link.label.toLowerCase().replace(" ", "-")}`}
                    onClick={(e) => {
                      if (link.href.startsWith("#")) {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-secondary" />
                <span data-testid="text-email">sanskargupta23@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-secondary" />
                <span data-testid="text-phone">+91 97184 76787</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-secondary" />
                <span data-testid="text-address" className="leading-relaxed">
                  Nutrition and Health Care Hub,
                  <br />
                  Mumbai, Maharashtra 400001
                </span>
              </li>
            </ul>
            <p className="text-xs text-gray-500 mt-6 font-medium">
              Medical Team: Mon - Sat: 9:00 AM - 6:00 PM IST
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Subscribe for medical fat-loss tips and exclusive clinic offers.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12"
                data-testid="input-newsletter-email"
              />
              <Button type="submit" size="lg" className="w-full bg-secondary text-primary font-bold hover:bg-white" data-testid="button-subscribe">
                Subscribe Now
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-12 bg-white/10" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap justify-center gap-6">
            {trustBadges.map((badge, index) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 text-sm text-gray-400 font-medium"
                data-testid={`badge-trust-${index}`}
              >
                <badge.icon className="w-5 h-5 text-secondary" />
                <span>{badge.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 font-medium">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors"
                data-testid={`link-legal-${link.label.toLowerCase().replace(" ", "-")}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 text-sm text-gray-600 font-medium">
          <p data-testid="text-copyright">
            © {new Date().getFullYear()} FitMe by Nutrition and Health Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
