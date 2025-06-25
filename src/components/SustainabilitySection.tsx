
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Leaf, Building, Microchip } from 'lucide-react';

const sustainabilityPillars = [
  {
    icon: Building,
    title: 'Eco-friendly Construction',
    description: 'Sustainable building practices and green architecture',
    progress: 85,
    sector: 'Real Estate'
  },
  {
    icon: Leaf,
    title: 'Sustainable Farming',
    description: 'Regenerative agriculture and eco-conscious practices',
    progress: 92,
    sector: 'Agribusiness'
  },
  {
    icon: Microchip,
    title: 'Green Technology Solutions',
    description: 'Energy-efficient tech and sustainable innovation',
    progress: 78,
    sector: 'Technology'
  }
];

export const SustainabilitySection: React.FC = () => {
  const [animatedProgress, setAnimatedProgress] = useState([0, 0, 0]);

  useEffect(() => {
    // Start progress bar animations immediately
    sustainabilityPillars.forEach((pillar, index) => {
      setTimeout(() => {
        let current = 0;
        const increment = pillar.progress / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= pillar.progress) {
            current = pillar.progress;
            clearInterval(timer);
          }
          setAnimatedProgress(prev => {
            const newProgress = [...prev];
            newProgress[index] = current;
            return newProgress;
          });
        }, 20);
      }, index * 300);
    });
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-slate-950 to-green-950/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge 
            variant="outline" 
            className="border-green-500/30 text-green-300 bg-green-500/10 px-4 py-2 text-sm backdrop-blur-sm mb-6"
          >
            Sustainability
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-green-400 via-green-300 to-green-200 bg-clip-text text-transparent">
              Committed to a Greener Future
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Leading sustainable practices across all our business sectors
          </p>
        </div>

        {/* Sustainability Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sustainabilityPillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <Card 
                key={index}
                className="bg-slate-800/30 backdrop-blur-sm border-slate-700/50 transition-all duration-300 hover:bg-slate-800/50 hover:border-green-500/30 hover:scale-105 group"
              >
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
                      <Badge variant="outline" className="text-xs text-green-400 border-green-500/30">
                        {pillar.sector}
                      </Badge>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 mb-6">{pillar.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-300">Progress</span>
                      <span className="text-sm font-medium text-green-400">
                        {Math.round(animatedProgress[index])}%
                      </span>
                    </div>
                    <Progress 
                      value={animatedProgress[index]} 
                      className="h-2 bg-slate-700"
                    />
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
