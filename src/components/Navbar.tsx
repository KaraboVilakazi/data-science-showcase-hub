
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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
    <nav className={`py-5 fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="font-heading font-bold text-ds-primary text-xl group">
          <span className="text-ds-secondary transition-all duration-300 group-hover:text-ds-primary">Data</span>
          <span className="transition-all duration-300 group-hover:text-ds-secondary">Sci</span>
        </Link>
        <div className="flex space-x-8">
          {['problem', 'dataset', 'methodology', 'results'].map((item, index) => (
            <a 
              key={item}
              href={`#${item}`} 
              className="text-ds-primary hover:text-ds-secondary transition-all duration-300 text-sm uppercase tracking-wider relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-ds-secondary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
