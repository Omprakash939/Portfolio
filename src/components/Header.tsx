import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Github, Linkedin, Mail, Menu, Phone, X } from "lucide-react";
import React from "react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10 ${
        scrolled
          ? "blur-bg shadow-md backdrop-blur-lg bg-background/70"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-6xl mx-auto flex justify-between items-center">
        <a href="#hero" className="font-mono font-medium text-lg group">
          <span className="text-accent">&lt;</span>
          <span className="group-hover:text-accent transition-colors duration-200">
            Om Prakash
          </span>
          <span className="text-accent">/&gt;</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <a
            href="#about"
            className="hover:text-accent transition-colors duration-200 relative group px-3 py-2"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#skills"
            className="hover:text-accent transition-colors duration-200 relative group px-3 py-2"
          >
            Skills
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#experience"
            className="hover:text-accent transition-colors duration-200 relative group px-3 py-2"
          >
            Experience
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#projects"
            className="hover:text-accent transition-colors duration-200 relative group px-3 py-2"
          >
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:7018032001" // Replace with your phone number
            className="text-muted-foreground hover:text-accent transition-colors p-2 hover:bg-accent/10 rounded-full"
            aria-label="Call me"
          >
            <Phone size={20} /> {/* Replaced Github with Phone */}
          </a>
          <a
            href="https://www.linkedin.com/in/omprakash939"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-accent transition-colors p-2 hover:bg-accent/10 rounded-full"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <Button
            variant="outline"
            size="sm"
            className="hover:bg-accent/10 hover:text-accent hover:border-accent"
            onClick={() => {
              window.location.href = "mailto:negiom777@gmail.com";
            }}
          >
            <Mail size={16} className="mr-1" />
            <span className="hidden sm:inline">Get in touch</span>
          </Button>
        </div>
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="hover:bg-accent/20"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden pt-16 bg-background/90 backdrop-blur-lg">
          <div className="container mx-auto px-6 py-8">
            <nav className="flex flex-col items-center gap-8 font-medium text-lg">
              <a
                href="#about"
                className="hover:text-accent transition-colors duration-200 py-2 px-4 rounded-md hover:bg-accent/10 w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#skills"
                className="hover:text-accent transition-colors duration-200 py-2 px-4 rounded-md hover:bg-accent/10 w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Skills
              </a>
              <a
                href="#experience"
                className="hover:text-accent transition-colors duration-200 py-2 px-4 rounded-md hover:bg-accent/10 w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Experience
              </a>
              <a
                href="#projects"
                className="hover:text-accent transition-colors duration-200 py-2 px-4 rounded-md hover:bg-accent/10 w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </a>
              <div className="flex gap-6 mt-4">
                <a
                  href="tel:7018032001" // Replace with your phone number
                  className="text-muted-foreground hover:text-accent transition-colors p-2 hover:bg-accent/10 rounded-full"
                  aria-label="Call me"
                >
                  <Phone size={20} /> {/* Replaced Github with Phone */}
                </a>
                <a
                  href="https://www.linkedin.com/in/omprakash939"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-accent transition-colors p-3 hover:bg-accent/10 rounded-full"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:negiom777@gmail..com"
                  className="text-foreground/70 hover:text-accent transition-colors p-3 hover:bg-accent/10 rounded-full"
                >
                  <Mail size={24} />
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};