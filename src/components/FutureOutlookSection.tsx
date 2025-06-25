
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Rocket, Globe, TrendingUp, Target } from 'lucide-react';

const outlookAreas = [
  {
    icon: Rocket,
    title: 'Scaling Operations',
    description: 'Expanding our presence across existing sectors while maintaining excellence',
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    icon: Globe,
    title: 'New Markets',
    description: 'Exploring emerging markets and strategic geographical expansion',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    icon: TrendingUp,
    title: 'Emerging Technologies',
    description: 'Investing in AI, blockchain, IoT, and next-generation solutions',
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    icon: Target,
    title: 'Global Leadership',
    description: 'Becoming a global leader while maintaining sustainability focus',
    gradient: 'from-pink-500 to-red-500'
  }
];

export const FutureOutlookSection: React.FC = () => {

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-slate-950 to-blue-950/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge 
            variant="outline" 
            className="border-blue-500/30 text-blue-300 bg-blue-500/10 px-4 py-2 text-sm backdrop-blur-sm mb-6"
          >
            Future Vision
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Future Outlook
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Fadassols Group is focused on scaling operations, exploring new markets, and investing in emerging technologies to become a global leader across sectors
          </p>
        </div>

        {/* Outlook Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {outlookAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <Card 
                key={index}
                className="bg-slate-800/30 backdrop-blur-sm border-slate-700/50 transition-all duration-300 hover:bg-slate-800/50 hover:border-slate-600/50 hover:scale-105 group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${area.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <CardContent className="p-6 text-center relative">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${area.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{area.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{area.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Commitment Statement */}
        <Card className="mt-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border-slate-700/50">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Our Commitment to Excellence
            </h3>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              By leveraging our diverse portfolio and expertise, we aim to maintain our commitment 
              to sustainability and social responsibility while driving transformative change across industries.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
