import React from 'react';
import { Navigation } from '@/components/Navigation';
import { AboutSection } from '@/components/AboutSection';
import { LeadershipSection } from '@/components/LeadershipSection';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { Badge } from '@/components/ui/badge';

const AboutPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <ScrollProgress />
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      {/* Page Header */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge 
            variant="outline" 
            className="border-blue-500/30 text-blue-300 bg-blue-500/10 px-4 py-2 text-sm backdrop-blur-sm mb-6"
          >
            About Us
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Fadassols Group
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Discover our journey, values, and the exceptional leadership driving our success across multiple industries.
          </p>
        </div>
      </section>        {/* About Content */}
      <AboutSection showHeader={false} />
      
      {/* Leadership */}
      <LeadershipSection />
      
      <Footer />
    </div>
  );
};

export default AboutPage;
