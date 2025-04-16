
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-ds-primary to-ds-dark text-white py-20 md:py-28">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            South African Education Outcomes Analysis
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-ds-light/90 animate-slide-up">
            Exploring the factors that influence student performance in South African schools
            and identifying interventions for educational equity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-slide-up">
            <a href="#problem" className="btn-secondary">
              Explore the Project
            </a>
            <a href="https://github.com/yourusername/sa-education-analysis" target="_blank" rel="noopener noreferrer" className="btn-primary bg-white text-ds-primary hover:bg-ds-light">
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
