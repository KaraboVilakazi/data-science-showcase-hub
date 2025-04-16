
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ds-primary text-white py-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About This Project</h3>
            <p className="text-sm text-gray-300">
              This data science project was created to demonstrate how to analyze educational data in South Africa
              and present findings in a professional portfolio-ready format.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Data Sources</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>
                <a href="https://www.education.gov.za" target="_blank" rel="noopener noreferrer" className="hover:text-ds-secondary">
                  Department of Basic Education
                </a>
              </li>
              <li>
                <a href="https://www.statssa.gov.za" target="_blank" rel="noopener noreferrer" className="hover:text-ds-secondary">
                  Statistics South Africa
                </a>
              </li>
              <li>
                <a href="https://www.datafirst.uct.ac.za" target="_blank" rel="noopener noreferrer" className="hover:text-ds-secondary">
                  DataFirst - University of Cape Town
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-ds-secondary">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-ds-secondary">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:your.email@example.com" className="hover:text-ds-secondary">
                  Email Me
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <p className="mt-2">
            Created as a demonstration project for data science portfolios.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
