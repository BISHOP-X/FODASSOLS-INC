import React from 'react';
import { Navigation } from '@/components/Navigation';
import { BusinessSectorsSection } from '@/components/BusinessSectorsSection';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { Badge } from '@/components/ui/badge';

const SectorsPage: React.FC = () => {
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
            className="border-green-500/30 text-green-300 bg-green-500/10 px-4 py-2 text-sm backdrop-blur-sm mb-6"
          >
            Our Sectors
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Business Sectors
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Explore our diverse portfolio spanning mining, real estate, technology, and agricultural sectors.
          </p>
        </div>
      </section>
        {/* Sectors Content */}
      <BusinessSectorsSection showHeader={false} />
      
      <Footer />
    </div>
  );
};

export default SectorsPage;
