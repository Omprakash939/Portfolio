import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { useRef, useState, useEffect } from "react";
import React from "react";

export const ExperienceSection = () => {
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

  const responsibilities = [
    "Delivered frontend across three core products: RetailIQ (web), Market Connect (webapp), PropIQ (mobile).",
    "Developed in TypeScript using React/Next.js and React Native with Tamagui.",
    "Built and documented reusable components through a UI Kit using shadcn/ui and Storybook.",
    "Integrated complete authentication flows, including login, logout, and onboarding.",
    "Implemented real-time chat UI with Socket.IO for Market Connect.",
    "Led setup and release of PropIQ mobile app to the Play Store and App Store."
  ];

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent/5 via-background to-background"></div>
      
      <div className="container max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        <h2 className="section-heading">Professional Experience</h2>
        <div 
          className="mt-12"
          style={{ 
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' 
          }}
        >
          <Card className="border-l-4 border-l-accent overflow-hidden glass-card shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-10"></div>
            <CardHeader className="bg-muted/30">
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <CardTitle className="text-2xl">Frontend Developer</CardTitle>
                  <div className="text-lg font-medium text-accent">
                    Quantduo Technologies Pvt Ltd
                  </div>
                </div>
                <div className="bg-accent/10 text-accent text-sm font-medium rounded-full px-4 py-1">
                  Sep 2023 - Present
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {responsibilities.map((responsibility, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-3 group"
                    style={{ 
                      opacity: isInView ? 1 : 0,
                      transform: isInView ? 'translateX(0)' : 'translateX(-10px)',
                      transition: `opacity 0.5s ease-out ${0.2 + index * 0.1}s, transform 0.5s ease-out ${0.2 + index * 0.1}s` 
                    }}
                  >
                    <CheckCircle 
                      size={18} 
                      className="text-accent shrink-0 mt-0.5 group-hover:scale-110 transition-transform" 
                    />
                    <span className="group-hover:text-accent transition-colors">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
