
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">Portfolio Guide</h2>
        <p className="section-subtitle text-center">
          How to build and showcase your data science project for maximum impact
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card className="shadow-md">
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-ds-primary rounded-full flex items-center justify-center mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-ds-primary mt-4">Documentation</h3>
              </div>
              
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Create a comprehensive README.md with project overview, objectives, and findings</li>
                <li>Include detailed installation and setup instructions</li>
                <li>Document data sources, preprocessing steps, and methodology</li>
                <li>Explain your modeling approach and evaluation metrics</li>
                <li>Add visualizations with interpretations</li>
                <li>Include references and acknowledgments</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="shadow-md">
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-ds-secondary rounded-full flex items-center justify-center mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-ds-primary mt-4">Code Organization</h3>
              </div>
              
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Structure your repository with clear directories (data, notebooks, src, reports)</li>
                <li>Create modular, well-commented code with docstrings</li>
                <li>Include Jupyter notebooks for exploratory analysis and results</li>
                <li>Separate data processing, modeling, and evaluation code</li>
                <li>Add requirements.txt or environment.yml for dependencies</li>
                <li>Implement Git best practices (branching, meaningful commits)</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="shadow-md">
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-ds-accent rounded-full flex items-center justify-center mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-ds-primary mt-4">Presentation</h3>
              </div>
              
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Create an interactive dashboard or web application (like this one)</li>
                <li>Develop a slide deck summarizing the project and findings</li>
                <li>Record a video demonstration or walkthrough</li>
                <li>Share on platforms like LinkedIn, Medium, or Dev.to</li>
                <li>Present at meetups, conferences, or online communities</li>
                <li>Include your project in your data science portfolio website</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <Card className="shadow-md mt-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-ds-primary mb-4">GitHub Repository Template</h3>
            <div className="bg-gray-100 p-4 rounded-md font-mono text-sm overflow-x-auto">
<pre>{`
# South African Education Outcomes Analysis
## Data Science Project by [Your Name]

### Overview
Analysis of factors influencing educational outcomes in South African schools.

### Repository Structure
├── README.md              # Project overview and documentation
├── data/                  # Data directory
│   ├── raw/               # Original, immutable data
│   ├── processed/         # Cleaned, transformed data
│   └── external/          # External data from third party sources
├── notebooks/             # Jupyter notebooks
│   ├── 01_data_exploration.ipynb
│   ├── 02_data_preprocessing.ipynb
│   ├── 03_feature_engineering.ipynb
│   ├── 04_modeling.ipynb
│   └── 05_evaluation.ipynb
├── src/                   # Source code
│   ├── data/              # Scripts for data processing
│   ├── features/          # Scripts for feature engineering
│   ├── models/            # Scripts for model training and testing
│   └── visualization/     # Scripts for creating visualizations
├── reports/               # Generated analysis reports
│   ├── figures/           # Generated graphics and figures
│   └── final_report.pdf   # Final analysis report
└── requirements.txt       # Dependencies

### Installation
\`\`\`bash
git clone https://github.com/yourusername/sa-education-analysis.git
cd sa-education-analysis
pip install -r requirements.txt
\`\`\`

### Usage
[Include examples of how to run your analysis]

### Results and Findings
[Summarize key findings and insights]

### License
[Specify your project license]

### Acknowledgments
[Give credit to data sources and inspirations]
`}</pre>
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center mt-12">
          <a href="https://github.com/yourusername/sa-education-analysis" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Get Started with This Template
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
