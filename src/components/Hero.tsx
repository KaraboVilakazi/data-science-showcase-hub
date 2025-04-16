import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";

const Hero: React.FC = () => {
  return <section className="bg-white text-ds-primary py-28 md:py-36 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-[fadeIn_0.8s_ease-out]">
              South African <span className="text-ds-secondary">Education</span> Outcomes
            </h1>
            <p className="text-lg md:text-xl text-ds-primary/80 leading-relaxed max-w-xl animate-[slideUp_0.8s_ease-out_0.2s_forwards] opacity-0">
              Exploring the factors that influence student performance and identifying 
              interventions for educational equity.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 animate-[slideUp_0.8s_ease-out_0.3s_forwards] opacity-0">
              <Button className="group bg-ds-secondary text-white hover:bg-ds-secondary/90 shadow-lg hover:shadow-ds-secondary/30 transition-all duration-300 transform hover:-translate-y-1 py-6 px-8" onClick={() => document.getElementById('problem')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Explore Research
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="bg-transparent border-2 border-ds-secondary text-ds-secondary hover:bg-ds-secondary/10 transition-all duration-300 py-6 px-8 transform hover:-translate-y-1 shadow-lg hover:shadow-ds-secondary/20" onClick={() => window.open("https://github.com/KaraboVilakazi/data-science-showcase-hub", "_blank")}>
                <Github className="mr-2" />
                View Repository
              </Button>
            </div>
            <p className="mt-6 text-sm text-ds-primary/70 italic">
              Design by Karabo Vilakazi
            </p>
          </div>
          
          <div className="animate-[fadeIn_1.2s_ease-out_0.4s_forwards] opacity-0">
            <div className="rounded-xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-ds-secondary/50 group">
              <img alt="African school children in classroom" className="w-full h-[500px] object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-105" src="/lovable-uploads/4976a075-b586-4f10-be82-f876492e7507.jpg" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-ds-secondary/5 to-white opacity-70"></div>
    </section>;
};

export default Hero;
