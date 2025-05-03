
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge"
import { useRef, useState, useEffect } from "react";
import React from "react";

export const AboutSection = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>
      
      <div className="container max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        <h2 className="section-heading">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
          <div 
            className={`col-span-1 lg:col-span-2 glass-card p-8 rounded-lg shadow-lg border border-muted transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              I'm a passionate Frontend Developer specialized in building exceptional digital experiences. With a focus on creating clean, efficient, and user-friendly interfaces, I bring designs to life with modern technologies.
            </p>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              My expertise spans across both web and mobile application development, with strong skills in TypeScript, React/Next.js for web applications, and React Native with Tamagui for mobile platforms.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I enjoy creating reusable UI components, implementing real-time features, and ensuring seamless user experiences across all devices and platforms.
            </p>
          </div>
          <div 
            className={`col-span-1 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <Card className="h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-muted overflow-hidden animated-border">
              <div className="h-2 bg-gradient-to-r from-accent to-primary"></div>
              <CardContent className="p-6">
                <h3 className="font-medium text-lg mb-5 relative pb-2">
                  Professional Summary
                  <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent rounded-full"></span>
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start group">
                    <Badge variant="outline" className="mt-1 mr-3 border-accent text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      Web
                    </Badge>
                    <span className="group-hover:text-accent transition-colors">React, Next.js, Tailwind CSS</span>
                  </li>
                  <li className="flex items-start group">
                    <Badge variant="outline" className="mt-1 mr-3 border-accent text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      Mobile
                    </Badge>
                    <span className="group-hover:text-accent transition-colors">React Native, Tamagui</span>
                  </li>
                  <li className="flex items-start group">
                    <Badge variant="outline" className="mt-1 mr-3 border-accent text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      Tools
                    </Badge>
                    <span className="group-hover:text-accent transition-colors">Git, GitHub, Storybook</span>
                  </li>
                  <li className="flex items-start group">
                    <Badge variant="outline" className="mt-1 mr-3 border-accent text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      UI/UX
                    </Badge>
                    <span className="group-hover:text-accent transition-colors">Reusable components, animations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};