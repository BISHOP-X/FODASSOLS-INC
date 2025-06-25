
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Menu, X } from 'lucide-react';
import { CounterStats } from '@/components/CounterStats';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { BusinessSectorsSection } from '@/components/BusinessSectorsSection';
import { GlobalPresenceSection } from '@/components/GlobalPresenceSection';
import { SustainabilitySection } from '@/components/SustainabilitySection';
import { FutureOutlookSection } from '@/components/FutureOutlookSection';
import { LeadershipSection } from '@/components/LeadershipSection';
import { NewsTicker } from '@/components/NewsTicker';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Set loaded state after component mounts
    setIsLoaded(true);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      {/* Loading overlay for smoother initial render */}
      {!isLoaded && (
        <div className="fixed inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 z-50 flex items-center justify-center">
          <div className="animate-pulse text-blue-400">Loading...</div>
        </div>
      )}
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `radial-gradient(circle at 25% 25%, #1e40af 0%, transparent 50%),
                                radial-gradient(circle at 75% 75%, #f59e0b 0%, transparent 50%)`
             }}>
        </div>
      </div>

      {/* Navigation */}
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <HeroSection scrollY={scrollY} />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-blue-400" />
      </div>

      {/* News Ticker */}
      <NewsTicker />

      {/* About Section */}
      <AboutSection />

      {/* Business Sectors Section */}
      <BusinessSectorsSection />

      {/* Sustainability Section */}
      <SustainabilitySection />

      {/* Global Presence Section */}
      <GlobalPresenceSection />

      {/* Future Outlook Section */}
      <FutureOutlookSection />

      {/* Leadership Section */}
      <LeadershipSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
