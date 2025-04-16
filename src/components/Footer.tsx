
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ds-dark border-t border-white/10 text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-lg font-semibold mb-5 text-ds-secondary">About This Research</h3>
            <p className="text-sm text-gray-400 max-w-md leading-relaxed">
              This data science project explores educational outcomes in South Africa,
              identifying key factors that influence student performance and proposing
              evidence-based interventions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-5 text-ds-secondary">Data Sources</h3>
            <ul className="text-sm text-gray-400 space-y-3">
              <li className="transition-all hover:text-ds-secondary">
                <a href="https://www.education.gov.za" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                  <span className="border-b border-transparent hover:border-ds-secondary">Department of Basic Education</span>
                </a>
              </li>
              <li className="transition-all hover:text-ds-secondary">
                <a href="https://www.statssa.gov.za" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                  <span className="border-b border-transparent hover:border-ds-secondary">Statistics South Africa</span>
                </a>
              </li>
              <li className="transition-all hover:text-ds-secondary">
                <a href="https://www.datafirst.uct.ac.za" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                  <span className="border-b border-transparent hover:border-ds-secondary">DataFirst - UCT</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-5 text-ds-secondary">Connect</h3>
            <ul className="text-sm text-gray-400 space-y-3">
              <li className="transition-all hover:text-ds-secondary">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                  <span className="border-b border-transparent hover:border-ds-secondary">GitHub</span>
                </a>
              </li>
              <li className="transition-all hover:text-ds-secondary">
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                  <span className="border-b border-transparent hover:border-ds-secondary">LinkedIn</span>
                </a>
              </li>
              <li className="transition-all hover:text-ds-secondary">
                <a href="mailto:your.email@example.com" className="inline-flex items-center">
                  <span className="border-b border-transparent hover:border-ds-secondary">Email Me</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-8 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Design by Karabo Vilakazi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
