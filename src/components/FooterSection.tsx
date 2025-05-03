import { Heart, Github, Linkedin, Mail, Phone } from "lucide-react";
import React from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-card relative overflow-hidden border-t border-muted">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 gradient-bg"></div>
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-accent/5 blur-3xl"></div>
      
      <div className="container max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="font-mono text-sm group cursor-default">
            <span className="group-hover:opacity-0 transition-opacity duration-300">&copy; {currentYear}</span>
            <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">Crafted with passion</span>
          </div>
          
          <div className="text-sm flex items-center gap-2 py-2 px-4 rounded-full bg-muted/50 backdrop-blur-sm">
            Made with <Heart size={14} className="text-accent fill-accent animate-pulse" /> using 
            <span className="font-bold gradient-text">React & Tailwind</span>
          </div>
          
          <a 
            href="#hero" 
            className="hover:text-accent transition-colors group flex items-center gap-1 bg-muted/50 hover:bg-muted/70 backdrop-blur-sm py-2 px-4 rounded-full"
          >
            <span>Back to top</span>
            <span className="group-hover:translate-y-[-4px] transition-transform duration-300">↑</span>
          </a>
        </div>
        
        <div className="flex justify-center gap-8 pt-6 border-t border-muted">
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
            className="text-muted-foreground hover:text-accent transition-colors p-2 hover:bg-accent/10 rounded-full"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:negiom777@gmail.com" 
            className="text-muted-foreground hover:text-accent transition-colors p-2 hover:bg-accent/10 rounded-full"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
