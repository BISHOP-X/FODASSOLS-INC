
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Camera, Microchip, Building, Leaf, Coffee, Heart, ExternalLink } from 'lucide-react';

const businessSectors = [
  {
    icon: Camera,
    title: 'Media Sector',
    subsidiaries: ['ShakaraSquare.ng', 'SearchlightNews.ng'],
    services: ['Event production', 'Digital media', 'Advertising', 'News distribution'],
    highlight: 'Entertainment & News Platforms',
    stat: '2 Active Platforms',
    gradient: 'from-purple-500 to-pink-500',
    achievements: 'Widely popular events and innovative digital campaigns that have reshaped audience engagement',
    links: [
      { name: 'ShakaraSquare.ng', url: 'https://shakarasquare.ng/' },
      { name: 'ShakaraSquare TV', url: 'https://www.instagram.com/shakarasquaretv1?igsh=MWR0ZXFkbGdvaTU5&utm_source=qr' },
      { name: 'Shakara Square Entertainment', url: 'https://www.facebook.com/share/1C7DyAH5RU/?mibextid=wwXIfr' },
      { name: 'SearchlightNews.ng', url: 'https://searchlightnews.ng/' }
    ]
  },
  {
    icon: Microchip,
    title: 'Technology Sector',
    subsidiaries: ['AEI Technik Process Ltd'],
    services: ['Fintech solutions', 'AI research', 'Blockchain', 'IoT solutions', 'Cloud services'],
    highlight: 'Computers, Software & Smart Devices',
    stat: 'Multiple Solutions',
    gradient: 'from-blue-500 to-cyan-500',
    achievements: 'Proprietary software platforms, cybersecurity tools, and smart device solutions',
    links: [
      { name: 'Facebook Page', url: 'https://www.facebook.com/share/18i6gKUShq/?mibextid=wwXIfr' },
      { name: 'Boomdim Shop', url: 'https://www.instagram.com/boomdim_shoponline?igsh=dDVtMHp2MndvenVx&utm_source=qr' }
    ]
  },
  {
    icon: Building,
    title: 'Real Estate Sector',
    subsidiaries: ['Sustainable Developments'],
    services: ['Residential complexes', 'Commercial hubs', 'Mixed-use projects', 'Urban planning'],
    highlight: 'Sustainable Luxury Living',
    stat: 'Prime Locations',
    gradient: 'from-green-500 to-emerald-500',
    achievements: 'Green buildings, smart infrastructure, and eco-friendly construction practices',
    links: []
  },
  {
    icon: Leaf,
    title: 'Agribusiness Sector',
    subsidiaries: ['Full Value Chain Operations'],
    services: ['Crop production', 'Fish farming', 'Palm oil production', 'Agricultural export'],
    highlight: 'Food Security & Export Excellence',
    stat: 'Full Value Chain',
    gradient: 'from-amber-500 to-orange-500',
    achievements: 'Empowering local farmers and ensuring food security through export of agricultural produce',
    links: [
      { name: 'SkyFish Farm', url: 'https://www.instagram.com/skyfishfarm?igsh=c2xobXhndm80MTh4&utm_source=qr' }
    ]
  },
  {
    icon: Coffee,
    title: 'Hospitality Sector',
    subsidiaries: ['Old Berrys Restaurant and Bar', 'Coastal View Shortlets'],
    services: ['Fine dining', 'Vibrant nightlife', 'Short-term accommodations', 'Extended stays'],
    highlight: 'Comfort & Elegance Redefined',
    stat: 'Premium Experience',
    gradient: 'from-rose-500 to-pink-500',
    achievements: 'The hospitality arm of Fadassols Group is redefining comfort and elegance, spearheaded by Old Berrys Restaurant and Bar, a hub for fine dining and vibrant nightlife. Also Coastal View Shortlets in Lekki, Eti Osa area of Lagos offering stylish and serene accommodations for both short and extended stays. Together, they reflect Fadassols Group\'s commitment to excellence in hospitality and guest satisfaction.',
    links: [
      { name: 'Old Berrys Bar', url: 'https://www.instagram.com/oldberrysbar?igsh=YXZmM3VjdTlwYWxy&utm_source=qr' }
    ]
  },
  {
    icon: Heart,
    title: 'Obinna Ude Foundation',
    subsidiaries: ['Youth Empowerment Programs', 'Skills Training Centers'],
    services: ['Entrepreneurship mentorship', 'Skills training', 'Community engagement', 'Leadership development'],
    highlight: 'Empowering Future Leaders',
    stat: 'Next Generation Focus',
    gradient: 'from-indigo-500 to-purple-500',
    achievements: 'The Obinna Ude Foundation is passionately committed to nurturing and empowering the next generation of entrepreneurs, skilled craftsmen, and visionary leaders. Through innovative programs, mentorship, skills training, and community engagement, the Foundation provides young people with the tools, opportunities, and support they need to realize their full potential, drive economic growth, and become agents of positive change in their communities and beyond.',
    links: [
      { name: 'Foundation Facebook Page', url: 'https://www.facebook.com/share/1EhCPMPkoR/?mibextid=wwXIfr' }
    ]
  }
];

interface BusinessSectionProps {
  showHeader?: boolean;
}

export const BusinessSectorsSection: React.FC<BusinessSectionProps> = ({ showHeader = true }) => {
  const [isVisible, setIsVisible] = useState(true); // Always visible
  const [animatedStats, setAnimatedStats] = useState(businessSectors.map(() => true)); // All stats visible
  const ref = useRef<HTMLDivElement>(null);

  // Remove intersection observer - everything loads instantly
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setIsVisible(true);
  //         // Faster stat animations
  //         businessSectors.forEach((_, index) => {
  //           setTimeout(() => {
  //             setAnimatedStats(prev => {
  //               const newStats = [...prev];
  //               newStats[index] = true;
  //               return newStats;
  //             });
  //           }, index * 50);
  //         });
  //       }
  //     },
  //     { threshold: 0.01, rootMargin: '150px 0px' }
  //   );

  //   if (ref.current) {
  //     observer.observe(ref.current);
  //   }

  //   return () => observer.disconnect();
  // }, []);

  return (
    <section id="sectors" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header - Only show if showHeader is true */}
        {showHeader && (
          <div className="text-center mb-16">
            <Badge 
              variant="outline" 
              className="border-blue-500/30 text-blue-300 bg-blue-500/10 px-4 py-2 text-sm backdrop-blur-sm mb-6"
            >
              Our Expertise
            </Badge>
            <h2 className={`text-4xl md:text-5xl font-bold mb-8 transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                Business Sectors
              </span>
            </h2>
            <p className={`text-xl text-slate-400 max-w-3xl mx-auto transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ animationDelay: '200ms' }}>
              Driving innovation across diverse industries with strategic focus and operational excellence
            </p>
          </div>
        )}

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {businessSectors.map((sector, index) => {
            const IconComponent = sector.icon;
            return (
              <Card 
                key={index}
                className={`bg-slate-800/30 backdrop-blur-sm border-slate-700/50 transition-all duration-700 hover:bg-slate-800/50 hover:border-slate-600/50 hover:scale-105 group relative overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${400 + index * 200}ms` }}
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${sector.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                
                <CardHeader className="relative">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${sector.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-white">{sector.title}</CardTitle>
                  </div>
                  <p className="text-slate-400 font-medium">{sector.highlight}</p>
                </CardHeader>

                <CardContent className="relative">
                  {/* Subsidiaries */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Subsidiaries</h4>
                    <div className="flex flex-wrap gap-2">
                      {sector.subsidiaries.map((subsidiary, subIndex) => (
                        <Badge 
                          key={subIndex}
                          variant="outline"
                          className="border-slate-600 text-slate-300 text-xs"
                        >
                          {subsidiary}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-amber-400 mb-2">Core Services</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {sector.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="text-sm text-slate-400 flex items-center">
                          <div className="w-1 h-1 bg-slate-500 rounded-full mr-2" />
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Key Achievements</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{sector.achievements}</p>
                  </div>

                  {/* External Links */}
                  {sector.links && sector.links.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Visit Our Platforms</h4>
                      <div className="space-y-2">
                        {sector.links.map((link, linkIndex) => (
                          <Button
                            key={linkIndex}
                            variant="outline"
                            size="sm"
                            className="w-full justify-between bg-slate-700/30 border-slate-600 text-slate-300 hover:bg-slate-600/50 hover:text-white"
                            onClick={() => window.open(link.url, '_blank')}
                          >
                            <span className="text-xs">{link.name}</span>
                            <ExternalLink className="w-3 h-3" />
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Animated Stat */}
                  <div className="text-center pt-4 border-t border-slate-700">
                    <div className={`text-2xl font-bold transition-all duration-500 ${
                      animatedStats[index] ? 'scale-110 opacity-100' : 'scale-100 opacity-70'
                    }`}>
                      <span className={`bg-gradient-to-r ${sector.gradient} bg-clip-text text-transparent`}>
                        {sector.stat}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
