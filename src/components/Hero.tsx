
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-ds-dark text-white py-28 md:py-36 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
              South African <span className="text-ds-secondary">Education</span> Outcomes
            </h1>
            <p className="text-lg md:text-xl text-ds-light/80 leading-relaxed max-w-xl animate-slide-up delay-100">
              Exploring the factors that influence student performance and identifying 
              interventions for educational equity.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 animate-slide-up delay-200">
              <a href="#problem" className="btn-primary transition-all duration-300 hover:translate-y-[-2px]">
                Explore Research
              </a>
              <a 
                href="https://github.com/yourusername/sa-education-analysis" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-transparent border border-white/30 text-white hover:bg-white/10 transition-all duration-300 px-6 py-3 rounded-md font-medium hover:translate-y-[-2px]"
              >
                View Repository
              </a>
            </div>
            <p className="mt-6 text-sm text-ds-light/70 italic">
              Design by Karabo Vilakazi
            </p>
          </div>
          
          <div className="animate-fade-in delay-300">
            <div className="rounded-md overflow-hidden shadow-2xl border border-white/10 transition-all duration-500 hover:shadow-blue-500/30">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Student using laptop in modern classroom" 
                className="w-full h-[500px] object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-ds-dark via-ds-primary/50 to-ds-dark opacity-50"></div>
    </section>
  );
};

export default Hero;
