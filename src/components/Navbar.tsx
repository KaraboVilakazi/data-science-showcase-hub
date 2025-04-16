
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="font-heading font-bold text-ds-primary text-xl">
          DataSci Showcase
        </Link>
        <div className="flex space-x-6">
          <a href="#problem" className="text-ds-dark hover:text-ds-secondary transition-colors">
            Problem
          </a>
          <a href="#dataset" className="text-ds-dark hover:text-ds-secondary transition-colors">
            Dataset
          </a>
          <a href="#methodology" className="text-ds-dark hover:text-ds-secondary transition-colors">
            Methodology
          </a>
          <a href="#results" className="text-ds-dark hover:text-ds-secondary transition-colors">
            Results
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
