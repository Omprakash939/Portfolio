import { Button } from "../components/ui/button";
import { ChevronDown } from "lucide-react";
import React from "react";
import { useState, useEffect, useRef } from "react";

export const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [animateTitle, setAnimateTitle] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setLoaded(true);
    const timer = setTimeout(() => setAnimateTitle(true), 500);
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const titles = ["Om Prakash" , "Frontend Developer", "UI/UX Enthusiast", "React Expert"];
  const [titleIndex, setTitleIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Calculate the position of the gradient orbs based on mouse position
  const orb1Style = {
    transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
  };
  
  const orb2Style = {
    transform: `translate(${-mousePosition.x * 30}px, ${-mousePosition.y * 30}px)`,
  };

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center relative pt-20 pb-10 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 right-0 h-full bg-background"></div>
      <div className="absolute top-40 -right-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse" style={{...orb1Style, animationDuration: '8s'}}></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-pulse" style={{...orb2Style, animationDuration: '12s'}}></div>
      
      <div className="container max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className={`transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-accent font-mono mb-4 text-lg">Hi there, I'm</p>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transition-all duration-1000 ${animateTitle ? 'opacity-100' : 'opacity-0'}`}>
              <span className="gradient-text relative">
                {titles[titleIndex]}
                <span className="absolute -right-3 top-0 h-full w-[2px] bg-accent animate-pulse"></span>
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Results-driven developer with expertise in building scalable, 
              maintainable, and performant user interfaces across web and mobile.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1" 
                asChild
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-accent text-accent hover:bg-accent/10 hover:text-accent shadow-lg transition-all duration-300 hover:-translate-y-1" 
                asChild
              >
                <a href="#skills">Explore Skills</a>
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex justify-end">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/30 rounded-full animate-pulse" style={{animationDuration: '3s'}}></div>
              <div className="absolute inset-4 bg-gradient-to-tr from-primary/30 to-accent/20 rounded-full animate-spin" style={{animationDuration: '15s'}}></div>
              <div className="absolute inset-8 glass-card animated-border rounded-full shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="font-mono text-sm text-primary">
                    {`Om Prakash`}
                  </div>
                  <div className="font-bold text-2xl">
                    Frontend
                  </div>
                  <div className="font-bold text-2xl gradient-text">
                    Developer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a 
            href="#about" 
            className="bg-white/5 p-3 rounded-full backdrop-blur-sm inline-block hover:bg-accent/20 transition-colors border border-white/10"
          >
            <ChevronDown className="text-accent" />
          </a>
        </div>
      </div>
    </section>
  );
};
