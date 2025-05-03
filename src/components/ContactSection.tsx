import { Mail, Phone, Github, Linkedin } from "lucide-react";
import React from "react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-accent/5 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      
      <div className="container max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        <h2 className="section-heading">Connect With Me</h2>
        
        <div className="mt-12 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 hover-lift">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-6 relative inline-block">
                Contact Information
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-accent"></span>
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group hover-lift p-3 rounded-lg">
                  <div className="bg-accent/10 p-3 rounded-full group-hover:bg-accent/20 transition-colors">
                    <Mail size={24} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="group-hover:text-accent transition-colors">example@email.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group hover-lift p-3 rounded-lg">
                  <div className="bg-accent/10 p-3 rounded-full group-hover:bg-accent/20 transition-colors">
                    <Phone size={24} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="group-hover:text-accent transition-colors">7018032001</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 relative inline-block">
                Professional Profiles
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-accent"></span>
              </h3>
              <div className="grid grid-cols-2 gap-6">
            <a
            href="tel:+15551234567" // Replace with your phone number
            className="text-muted-foreground hover:text-accent transition-colors p-2 hover:bg-accent/10 rounded-full"
            aria-label="Call me"
          >
            <Phone size={20} /> {/* Replaced Github with Phone */}
            </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100 dark:border-gray-600"
                >
                  <Linkedin size={32} className="text-gray-700 dark:text-gray-300 group-hover:text-accent transition-colors mb-2" />
                  <span className="font-medium group-hover:text-accent transition-colors">LinkedIn</span>
                  <span className="text-sm text-gray-500">Connect</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
