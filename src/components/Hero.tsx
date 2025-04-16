
import React from 'react';
import { Image } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-ds-primary to-ds-dark text-white py-20 md:py-28 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              South African Education Outcomes Analysis
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-ds-light/90 animate-slide-up">
              Exploring the factors that influence student performance in South African schools
              and identifying interventions for educational equity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8 animate-slide-up">
              <a href="#problem" className="btn-secondary">
                Explore the Project
              </a>
              <a 
                href="https://github.com/yourusername/sa-education-analysis" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary bg-white text-ds-primary hover:bg-ds-light"
              >
                View on GitHub
              </a>
            </div>
            <p className="mt-4 text-sm text-ds-light/70 italic">
              Design by Karabo Vilakazi
            </p>
          </div>
          
          <div className="hidden md:block animate-scale-in">
            <div className="rounded-lg overflow-hidden shadow-2xl border-4 border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                alt="Students working on computers" 
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-ds-primary/20 to-ds-dark/20 opacity-30 z-0"></div>
    </section>
  );
};

export default Hero;
