import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
const ResultsVisualizations: React.FC = () => {
  // Sample data for visualizations
  const performanceByProvince = [{
    name: 'Western Cape',
    mathScore: 68,
    scienceScore: 65,
    overallPass: 82
  }, {
    name: 'Gauteng',
    mathScore: 65,
    scienceScore: 62,
    overallPass: 80
  }, {
    name: 'Free State',
    mathScore: 64,
    scienceScore: 60,
    overallPass: 78
  }, {
    name: 'KwaZulu-Natal',
    mathScore: 54,
    scienceScore: 52,
    overallPass: 72
  }, {
    name: 'Northern Cape',
    mathScore: 51,
    scienceScore: 48,
    overallPass: 70
  }, {
    name: 'Mpumalanga',
    mathScore: 56,
    scienceScore: 53,
    overallPass: 74
  }, {
    name: 'Limpopo',
    mathScore: 47,
    scienceScore: 44,
    overallPass: 67
  }, {
    name: 'North West',
    mathScore: 52,
    scienceScore: 49,
    overallPass: 71
  }, {
    name: 'Eastern Cape',
    mathScore: 46,
    scienceScore: 42,
    overallPass: 65
  }];
  const factorsImpact = [{
    name: 'Teacher Qualifications',
    impact: 24
  }, {
    name: 'School Resources',
    impact: 21
  }, {
    name: 'Socioeconomic Status',
    impact: 18
  }, {
    name: 'Student-Teacher Ratio',
    impact: 14
  }, {
    name: 'Parental Involvement',
    impact: 12
  }, {
    name: 'Nutrition Programs',
    impact: 7
  }, {
    name: 'Other Factors',
    impact: 4
  }];
  const COLORS = ['#2C3E50', '#1ABC9C', '#E67E22', '#3498DB', '#9B59B6', '#F1C40F', '#95A5A6'];
  return <section id="results" className="bg-ds-light">
      <div className="container-custom">
        <h2 className="section-title text-center">Key Findings</h2>
        <p className="section-subtitle text-center">
          Data-driven insights into South African educational outcomes
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-ds-primary mb-4">Performance by Province</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceByProvince} margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 70
                }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" angle={-45} textAnchor="end" height={70} />
                    <YAxis label={{
                    value: 'Score (%)',
                    angle: -90,
                    position: 'insideLeft'
                  }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="mathScore" name="Mathematics Score" fill="#2C3E50" />
                    <Bar dataKey="scienceScore" name="Science Score" fill="#1ABC9C" />
                    <Bar dataKey="overallPass" name="Overall Pass Rate" fill="#E67E22" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Provincial performance data shows significant disparities across regions, with Western Cape and Gauteng consistently outperforming other provinces in key metrics.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-ds-primary mb-4">Key Factors Influencing Outcomes</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={factorsImpact} cx="50%" cy="50%" labelLine={true} outerRadius={80} fill="#8884d8" dataKey="impact" label={({
                    name,
                    percent
                  }) => `${name}: ${(percent * 100).toFixed(0)}%`}>
                      {factorsImpact.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                    </Pie>
                    <Tooltip formatter={value => `${value}%`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-4 text-sm text-gray-600">This model identifies teacher qualifications, school resources, and socioeconomic status as the most influential factors affecting student performance.</p>
            </CardContent>
          </Card>
        </div>
        
        <Card className="shadow-md mt-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-ds-primary mb-4">Key Insights & Recommendations</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-l-ds-primary">
                  <h4 className="font-semibold text-ds-primary">Resource Disparity Impact</h4>
                  <p className="text-gray-700">
                    Schools in the bottom quartile for resources scored 32% lower on average in mathematics and science, demonstrating the critical impact of resource allocation.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-l-4 border-l-ds-primary">
                  <h4 className="font-semibold text-ds-primary">Teacher Qualification Effect</h4>
                  <p className="text-gray-700">
                    For every 10% increase in teachers with advanced qualifications, student performance improved by approximately 8.5%, controlling for other factors.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-l-4 border-l-ds-primary">
                  <h4 className="font-semibold text-ds-primary">Intervention Effectiveness</h4>
                  <p className="text-gray-700">
                    School nutrition programs showed a statistically significant impact on attendance and performance, with a 12% improvement in schools that implemented comprehensive programs.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-l-ds-accent">
                  <h4 className="font-semibold text-ds-accent">Policy Recommendation 1</h4>
                  <p className="text-gray-700">
                    Implement targeted resource allocation to schools in the bottom performance quartile with emphasis on laboratory equipment and learning materials for STEM subjects.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-l-4 border-l-ds-accent">
                  <h4 className="font-semibold text-gray-600">Policy Recommendation 2</h4>
                  <p className="text-gray-700">
                    Expand teacher development programs with focus on subject-specific pedagogical training, especially in rural and historically disadvantaged areas.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-l-4 border-l-ds-accent">
                  <h4 className="font-semibold text-ds-accent">Policy Recommendation 3</h4>
                  <p className="text-gray-700">
                    Scale up nutrition and support programs nationwide, prioritizing implementation in high-poverty areas to address the significant impact of these basic interventions.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default ResultsVisualizations;