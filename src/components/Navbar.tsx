
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`py-5 fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-ds-dark/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="font-heading font-bold text-white text-xl">
          <span className="text-ds-secondary">Data</span>Sci
        </Link>
        <div className="flex space-x-8">
          <a href="#problem" className="text-white/80 hover:text-ds-secondary transition-colors text-sm uppercase tracking-wider">
            Problem
          </a>
          <a href="#dataset" className="text-white/80 hover:text-ds-secondary transition-colors text-sm uppercase tracking-wider">
            Dataset
          </a>
          <a href="#methodology" className="text-white/80 hover:text-ds-secondary transition-colors text-sm uppercase tracking-wider">
            Methodology
          </a>
          <a href="#results" className="text-white/80 hover:text-ds-secondary transition-colors text-sm uppercase tracking-wider">
            Results
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
