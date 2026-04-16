'use client'; // This directive makes it a Client Component in Next.js

import { useState, useEffect } from "react";
// Import the Next.js Link component for client-side navigation optimization
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu, Leaf } from "lucide-react";

import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "Why Us" },
  { href: "#plans", label: "Plans" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Effect to handle scroll-based state changes
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Ensure window is defined before adding the event listener (for good measure, 
    // although 'use client' handles this)
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // Function to handle navigation and smooth scrolling
  const handleNavClick = (href: string) => {
    // Close mobile menu on click
    setMobileOpen(false);

    // If it's a hash link on the same page, scroll to it
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm"
      data-testid="navbar"
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo/Home Link */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-primary font-serif"
          data-testid="link-logo"
        >
          <Image
            src="/logo.jpg"
            alt="FitMeByNHC Logo"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <span className="text-foreground">FitMe</span>
          <span className="text-primary font-extrabold">ByNHC</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              data-testid={`link-nav-${link.label.toLowerCase().replace(" ", "-")}`}
              onClick={(e) => {
                if (link.href.startsWith("#")) {
                  e.preventDefault();
                  handleNavClick(link.href);
                } else {
                  setMobileOpen(false);
                }
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button
            className="hidden sm:flex bg-primary text-white hover:bg-[#1B365D] rounded-full transition-colors font-bold px-6"
            onClick={() => {
              window.location.href = '/book-consultation';
            }}
          >
            Book Consultation
          </Button>
          <Button
            size="sm"
            className="flex sm:hidden text-xs px-4 h-9 bg-primary text-white hover:bg-[#1B365D] rounded-full font-bold"
            onClick={() => {
              window.location.href = '/book-consultation';
            }}
          >
            Book Consultation
          </Button>

          {/* Mobile Sheet/Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button size="icon" variant="ghost" data-testid="button-mobile-menu">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-white flex flex-col justify-center">
              <VisuallyHidden>
                <SheetTitle>Mobile Navigation Menu</SheetTitle>
              </VisuallyHidden>
              <div className="flex flex-col gap-6 items-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-2xl font-semibold text-foreground hover:text-primary transition-colors text-center w-full py-2"
                    data-testid={`link-mobile-${link.label.toLowerCase().replace(" ", "-")}`}
                    onClick={(e) => {
                      if (link.href.startsWith("#")) {
                        e.preventDefault();
                        handleNavClick(link.href);
                      } else {
                        setMobileOpen(false);
                      }
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  className="mt-8 w-full max-w-[200px] bg-primary text-white hover:bg-[#1B365D] rounded-full font-bold"
                  size="lg"
                  onClick={() => {
                    setMobileOpen(false);
                    window.location.href = '/book-consultation';
                  }}
                >
                  Book Consultation
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav >
    </header >
  );
}