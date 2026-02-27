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
  { label: "Our Story", href: "#brand" },
  { label: "Product Details", href: "#product" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "Order Now", href: "#order" },
  { label: "Track Order", href: "#track" },
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
    <footer className="bg-card border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-xl font-bold mb-4"
              data-testid="link-footer-logo"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <Leaf className="w-6 h-6 text-primary" />
              <span>FitMeByNHC</span>
            </a>
            <p className="text-sm text-muted-foreground mb-6">
              Doctor-guided fat correction system combining medical science with sustainable lifestyle changes.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 rounded-md bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                  data-testid={`link-social-${index}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-${link.label.toLowerCase().replace(" ", "-")}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span data-testid="text-email">support@fitmebynhc.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span data-testid="text-phone">+91 67890567890</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span data-testid="text-address">
                  123 Wellness Street,
                  <br />
                  Mumbai, Maharashtra 400001
                </span>
              </li>
            </ul>
            <p className="text-xs text-muted-foreground mt-4">
              Mon - Sat: 9:00 AM - 6:00 PM IST
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe for wellness tips and exclusive offers.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                data-testid="input-newsletter-email"
              />
              <Button type="submit" size="sm" data-testid="button-subscribe">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap justify-center gap-6">
            {trustBadges.map((badge, index) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 text-sm text-muted-foreground"
                data-testid={`badge-trust-${index}`}
              >
                <badge.icon className="w-5 h-5 text-primary" />
                <span>{badge.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-foreground transition-colors"
                data-testid={`link-legal-${link.label.toLowerCase().replace(" ", "-")}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p data-testid="text-copyright">
            © {new Date().getFullYear()} FitMeByNHC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
