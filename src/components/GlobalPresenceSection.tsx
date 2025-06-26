
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Globe, Users, Building } from 'lucide-react';

const locations = [
  {
    country: 'Nigeria',
    flag: '🇳🇬',
    description: 'Headquarters & Primary Operations',
    highlights: ['Media & Entertainment Hub', 'Agribusiness Centers', 'Technology Innovation'],
    icon: Building
  },
  {
    country: 'United Kingdom',
    flag: '🇬🇧',
    description: 'International Operations & Partnerships',
    highlights: ['Strategic Partnerships', 'Investment Opportunities', 'Global Expansion'],
    icon: Globe
  }
];

interface GlobalPresenceSectionProps {
  showHeader?: boolean;
}

export const GlobalPresenceSection: React.FC<GlobalPresenceSectionProps> = ({ showHeader = true }) => {
  const [isVisible, setIsVisible] = useState(true); // Always visible
  const ref = useRef<HTMLDivElement>(null);

  // Remove intersection observer - everything loads instantly
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setIsVisible(true);
  //       }
  //     },
  //     { threshold: 0.01, rootMargin: '100px 0px' }
  //   );

  //   if (ref.current) {
  //     observer.observe(ref.current);
  //   }

  //   return () => observer.disconnect();
  // }, []);

  return (
    <section id="global" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header - Only show if showHeader is true */}
        {showHeader && (
          <div className="text-center mb-16">
            <Badge 
              variant="outline" 
              className="border-blue-500/30 text-blue-300 bg-blue-500/10 px-4 py-2 text-sm backdrop-blur-sm mb-6"
            >
              Global Reach
            </Badge>
            <h2 className={`text-4xl md:text-5xl font-bold mb-8 transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                Operating Globally, Impacting Locally
              </span>
            </h2>
            <p className={`text-xl text-slate-400 max-w-3xl mx-auto transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ animationDelay: '200ms' }}>
              Building bridges across continents through strategic partnerships and collaborative innovation
            </p>
          </div>
        )}

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {locations.map((location, index) => {
            const IconComponent = location.icon;
            return (
              <Card 
                key={index}
                className={`bg-slate-800/30 backdrop-blur-sm border-slate-700/50 transition-all duration-700 hover:bg-slate-800/50 hover:border-slate-600/50 hover:scale-105 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${400 + index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-4xl">{location.flag}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white flex items-center space-x-2">
                        <span>{location.country}</span>
                        <IconComponent className="w-5 h-5 text-blue-400" />
                      </h3>
                      <p className="text-slate-400">{location.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {location.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center space-x-3">
                        <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                        <span className="text-slate-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Partnership Message */}
        <Card className={`bg-slate-800/30 backdrop-blur-sm border-slate-700/50 transition-all duration-800 hover:bg-slate-800/50 hover:border-slate-600/50 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ animationDelay: '800ms' }}>
          <CardContent className="p-8 text-center">
            <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Strategic Partnerships & Collaboration
            </h3>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              We believe in the power of collaboration to drive innovation and create lasting impact. 
              Our global network enables us to leverage diverse expertise and deliver exceptional value 
              across all our business sectors.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
