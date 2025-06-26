import React from 'react';
import { Navigation } from '@/components/Navigation';
import { GlobalPresenceSection } from '@/components/GlobalPresenceSection';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { Badge } from '@/components/ui/badge';

export const GlobalPresence: React.FC = () => {
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
            Global Reach
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
              Global Presence
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Building bridges across continents through strategic partnerships and collaborative innovation.
          </p>
        </div>
      </section>
      
      {/* Global Presence Content */}
      <GlobalPresenceSection showHeader={false} />
      
      <Footer />
    </div>
  );
};
