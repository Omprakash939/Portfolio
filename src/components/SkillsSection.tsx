import { Progress } from "../components/ui/progress";
import { useState, useEffect, useRef } from "react";

export const SkillsSection = () => {
  const [isInView, setIsInView] = useState(false);
  const [hoverSkill, setHoverSkill] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const skills = [
    {
      category: "Languages",
      items: [
        { name: "TypeScript", value: 95 },
        { name: "JavaScript", value: 95 },
      ],
    },
    {
      category: "Web Technologies",
      items: [
        { name: "React", value: 95 },
        { name: "Next.js", value: 90 },
        { name: "Tailwind CSS", value: 90 },
        { name: "shadcn/ui", value: 85 },
      ],
    },
    {
      category: "Mobile Technologies",
      items: [
        { name: "React Native", value: 85 },
        { name: "Tamagui", value: 80 },
      ],
    },
    {
      category: "Other Technologies",
      items: [
        { name: "Socket.IO", value: 75 },
        { name: "Storybook", value: 85 },
        { name: "Lottie", value: 80 },
      ],
    },
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>
      
      <div className="container max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        <h2 className="section-heading">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {skills.map((skillGroup, index) => (
            <div
              key={skillGroup.category}
              className="glass-card rounded-lg p-6 shadow-lg hover-lift"
              style={{ 
                transitionDelay: `${index * 100}ms`,
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' 
              }}
            >
              <h3 className="text-xl font-bold mb-6 relative inline-block">
                {skillGroup.category}
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-accent"></span>
              </h3>
              <div className="space-y-6">
                {skillGroup.items.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="space-y-2"
                    onMouseEnter={() => setHoverSkill(skill.name)}
                    onMouseLeave={() => setHoverSkill(null)}
                  >
                    <div className="flex justify-between">
                      <span className={`font-medium transition-colors duration-300 ${hoverSkill === skill.name ? 'text-accent' : ''}`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm transition-colors duration-300 ${hoverSkill === skill.name ? 'text-accent' : 'text-muted-foreground'}`}>
                        {skill.value}%
                      </span>
                    </div>
                    <Progress 
                      value={skill.value}
                      animateOnView={isInView} 
                      className="h-2.5 rounded-xl" 
                      indicatorClassName={`bg-gradient-to-r ${hoverSkill === skill.name ? 'from-accent via-primary to-accent' : 'from-primary to-accent/80'}`} 
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div 
          className="mt-12"
          style={{ 
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease-out 0.4s, transform 0.6s ease-out 0.4s' 
          }}
        >
          <div className="glass-card rounded-lg p-6 shadow-lg hover-lift">
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Tools & Other Skills
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-accent"></span>
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Git", "GitHub", "Play Store", "App Store", "Intercom", "UI Kit Development", "Responsive Design", "API Integration", "Form Validation", "Authentication Flows"].map(
                (tool, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 rounded-full bg-muted/80 text-foreground text-sm font-medium hover:bg-accent/20 hover:text-accent transition-all duration-300 cursor-default"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {tool}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
