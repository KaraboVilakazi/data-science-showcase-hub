
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Dataset: React.FC = () => {
  return (
    <section id="dataset" className="bg-ds-light">
      <div className="container-custom">
        <h2 className="section-title text-center">Dataset</h2>
        <p className="section-subtitle text-center">
          Comprehensive educational and socioeconomic data from South African schools
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <Card className="shadow-md border-t-4 border-t-ds-primary">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-ds-primary mb-4">Dataset Overview</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <span className="font-semibold">Source:</span> South African Department of Basic Education
                </p>
                <p>
                  <span className="font-semibold">Time Period:</span> 2018-2022
                </p>
                <p>
                  <span className="font-semibold">Coverage:</span> Nationwide, all 9 provinces
                </p>
                <p>
                  <span className="font-semibold">Size:</span> ~26,000 schools with ~12 million students
                </p>
                <p>
                  <span className="font-semibold">Format:</span> CSV files, cleaned and preprocessed
                </p>
                <p>
                  <span className="font-semibold">Access:</span>{' '}
                  <a 
                    href="https://www.education.gov.za/Resources/Reports.aspx" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-ds-secondary hover:underline"
                  >
                    Department of Basic Education
                  </a>{' '}
                  and{' '}
                  <a 
                    href="https://www.datafirst.uct.ac.za/dataportal/index.php/catalog/central" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-ds-secondary hover:underline"
                  >
                    DataFirst Portal (UCT)
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md border-t-4 border-t-ds-accent">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-ds-primary mb-4">Key Variables</h3>
              <div className="space-y-3 text-gray-700">
                <div>
                  <p className="font-semibold">Student Outcomes:</p>
                  <ul className="list-disc pl-5">
                    <li>Matric (Grade 12) examination results</li>
                    <li>Subject-specific scores</li>
                    <li>Grade progression rates</li>
                    <li>Dropout rates</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-semibold">School Characteristics:</p>
                  <ul className="list-disc pl-5">
                    <li>School resources and infrastructure</li>
                    <li>Student-teacher ratios</li>
                    <li>Teacher qualifications</li>
                    <li>School type (public/private, urban/rural)</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-semibold">Socioeconomic Factors:</p>
                  <ul className="list-disc pl-5">
                    <li>Household income levels by district</li>
                    <li>Parental education levels</li>
                    <li>Community unemployment rates</li>
                    <li>Access to basic services</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-semibold">Intervention Programs:</p>
                  <ul className="list-disc pl-5">
                    <li>School nutrition programs</li>
                    <li>Teacher development initiatives</li>
                    <li>Infrastructure improvement projects</li>
                    <li>Technology integration programs</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Dataset;
