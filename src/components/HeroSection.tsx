
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CounterStats } from '@/components/CounterStats';
import { PageExplorer } from '@/components/PageExplorer';
import { useNavigate } from 'react-router-dom';

interface HeroSectionProps {
  scrollY: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ scrollY }) => {
  const [isPageExplorerOpen, setIsPageExplorerOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24" id="home">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl will-change-transform"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl will-change-transform"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Badge */}
        <div className="animate-fade-in mb-8">
          <Badge 
            variant="outline" 
            className="border-blue-500/30 text-blue-300 bg-blue-500/10 px-4 py-2 text-sm backdrop-blur-sm"
          >
            Established Excellence
          </Badge>
        </div>

        {/* Logo */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <img 
            src="/logo.jpg" 
            alt="Fadassols Group Logo" 
            className="w-16 h-16 md:w-20 md:h-20 object-contain mx-auto opacity-90"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            Fadassols Group
          </span>
        </h1>

        {/* Tagline */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-4 text-slate-300 animate-fade-in" style={{ animationDelay: '400ms' }}>
          Redefining Industries Through Innovation
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '600ms' }}>
          Dynamic conglomerate spanning Media, Technology, Real Estate & Agribusiness
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-none px-6 py-3 sm:px-8 sm:py-4 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            onClick={() => setIsPageExplorerOpen(true)}
            aria-label="Open page navigation menu"
          >
            Explore Pages
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-slate-600 text-slate-300 hover:text-white hover:border-slate-500 px-6 py-3 sm:px-8 sm:py-4 text-lg font-medium transition-all duration-300 hover:scale-105 hover:bg-slate-800/50 focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            onClick={() => navigate('/contact')}
            aria-label="Navigate to contact page"
          >
            Contact Us
          </Button>
        </div>

        {/* Counter Stats */}
        <div className="animate-fade-in mt-16" style={{ animationDelay: '1000ms' }}>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
                Our Global Impact
              </span>
            </h3>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Driving growth and innovation across multiple industries worldwide
            </p>
          </div>
          <CounterStats />
        </div>
      </div>

      {/* Page Explorer Modal */}
      <PageExplorer 
        isOpen={isPageExplorerOpen} 
        onClose={() => setIsPageExplorerOpen(false)} 
      />
    </section>
  );
};
