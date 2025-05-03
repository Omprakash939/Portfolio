import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import React from "react";
import { useState, useRef, useEffect } from "react";

export const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const projects = [
    {
      title: "UI Component Library",
      description: "Built and maintained a comprehensive UI Kit using Storybook, ensuring consistent design and reusable components across web and mobile platforms.",
      tech: ["TypeScript", "React", "Storybook", "Tailwind CSS", "React Native"],
      highlight: "Used by all company products"
    },
    {
      title: "Real-time Chat System",
      description: "Developed real-time chat functionality with Socket.IO, supporting dynamic user messaging with typing indicators and delivery statuses.",
      tech: ["Socket.IO", "React", "TypeScript", "CSS"],
      highlight: "Improved user engagement"
    },
    {
      title: "Authentication System",
      description: "Created full auth and onboarding flows with integrated APIs, form validation, and secure token handling.",
      tech: ["TypeScript", "React", "Form Validation", "API Integration"],
      highlight: "Enhanced security"
    },
    {
      title: "Analytics Dashboard",
      description: "Designed and implemented a dynamic reports dashboard with filters, date selectors, and responsive layout for data visualization.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Charts"],
      highlight: "Better data insights"
    },
    {
      title: "Help Center Module",
      description: "Built mobile-friendly help center with accordions and Intercom support for immediate user assistance.",
      tech: ["React", "Tailwind CSS", "Intercom API"],
      highlight: "Improved support"
    },
    {
      title: "Mobile App UI",
      description: "Implemented PropIQ mobile app UI with custom animations and led the app release to Play Store and App Store.",
      tech: ["React Native", "Tamagui", "Lottie"],
      highlight: "App Store published"
    }
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/5 via-background to-background"></div>
      <div className="absolute top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/5 blur-3xl"></div>
      
      <div className="container max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        <h2 className="section-heading">Projects & Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden border border-muted transition-all duration-500 bg-card ${
                hoveredIndex === index 
                  ? 'scale-[1.03] shadow-xl z-10' 
                  : 'hover:-translate-y-2 hover:shadow-md z-0'
              } ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                transition: 'opacity 0.5s ease-out, transform 0.5s ease-out, scale 0.3s ease-out, shadow 0.3s ease-out'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`h-1.5 transition-all duration-500 ${hoveredIndex === index ? 'bg-gradient-to-r from-primary to-accent' : 'bg-gradient-to-r from-primary/50 to-accent/50'}`}></div>
              <CardHeader className={`transition-all duration-500 ${hoveredIndex === index ? 'bg-gradient-to-b from-muted/80 to-transparent' : ''}`}>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>
                  <span className="text-accent font-medium">
                    {project.highlight}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className={`px-3 py-1 rounded-full transition-all duration-300 text-xs font-medium ${
                        hoveredIndex === index 
                          ? 'bg-accent text-accent-foreground' 
                          : 'bg-muted/70 text-muted-foreground'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
