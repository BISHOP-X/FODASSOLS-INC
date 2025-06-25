
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Award, Globe, Briefcase, Heart } from 'lucide-react';

const leadershipTeam = [
  {
    name: 'Executive Leadership',
    role: 'Strategic Vision',
    icon: Award,
    description: 'Driving innovation and sustainable growth across multiple industries'
  },
  {
    name: 'Operations Team',
    role: 'Global Operations',
    icon: Globe,
    description: 'Managing international business ventures and strategic partnerships'
  },
  {
    name: 'Innovation Leaders',
    role: 'Technology & Innovation',
    icon: Briefcase,
    description: 'Pioneering cutting-edge solutions in AI, blockchain, and IoT'
  },
  {
    name: 'Impact Directors',
    role: 'Social Responsibility',
    icon: Heart,
    description: 'Leading philanthropic initiatives and economic empowerment programs'
  }
];

export const LeadershipSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge 
            variant="outline" 
            className="border-amber-500/30 text-amber-300 bg-amber-500/10 px-4 py-2 text-sm backdrop-blur-sm mb-6"
          >
            Leadership
          </Badge>
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 bg-clip-text text-transparent">
              Visionary Leadership
            </span>
          </h2>
          <p className={`text-xl text-slate-400 max-w-3xl mx-auto transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ animationDelay: '200ms' }}>
            Driving social change through economic empowerment, philanthropic initiatives, and innovative solutions across multiple industries
          </p>
        </div>

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leadershipTeam.map((leader, index) => {
            const IconComponent = leader.icon;
            return (
              <Card 
                key={index}
                className={`bg-slate-800/30 backdrop-blur-sm border-slate-700/50 transition-all duration-700 hover:bg-slate-800/50 hover:border-amber-500/30 hover:scale-105 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${400 + index * 150}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-10 h-10 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{leader.name}</h3>
                  <Badge variant="outline" className="text-xs text-amber-400 border-amber-500/30 mb-3">
                    {leader.role}
                  </Badge>
                  <p className="text-slate-400 text-sm">{leader.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
