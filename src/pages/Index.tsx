
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemStatement from '@/components/ProblemStatement';
import Dataset from '@/components/Dataset';
import Methodology from '@/components/Methodology';
import ResultsVisualizations from '@/components/ResultsVisualizations';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <ProblemStatement />
        <Dataset />
        <Methodology />
        <ResultsVisualizations />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
