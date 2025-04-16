
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ProblemStatement: React.FC = () => {
  return (
    <section id="problem" className="bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">Problem Statement</h2>
        <p className="section-subtitle text-center">
          Understanding the educational landscape in South Africa to address inequity
        </p>
        
        <Card className="mt-8 shadow-lg border-t-4 border-t-ds-secondary">
          <CardContent className="p-6 md:p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-ds-primary mb-3">Background</h3>
                <p className="text-gray-700">
                  South Africa continues to face significant educational challenges with disparities in student performance 
                  across different regions, socioeconomic backgrounds, and school types. Despite substantial investments, 
                  educational outcomes remain uneven, with many students struggling to achieve basic proficiency in core subjects.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-ds-primary mb-3">Research Questions</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>What are the key factors that influence student academic performance in South African schools?</li>
                  <li>How do socioeconomic factors correlate with educational outcomes across different provinces?</li>
                  <li>Which interventions are most strongly associated with improved student performance?</li>
                  <li>Can we predict which schools are most at risk of poor performance to target interventions?</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-ds-primary mb-3">Project Goals</h3>
                <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                  <li>Analyze the relationship between resources, socioeconomic factors, and student outcomes</li>
                  <li>Identify patterns and trends in educational performance across different regions</li>
                  <li>Build predictive models to identify at-risk schools and students</li>
                  <li>Provide data-driven recommendations for educational policy and intervention strategies</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProblemStatement;
