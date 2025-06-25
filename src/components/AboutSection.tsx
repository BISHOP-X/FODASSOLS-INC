
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Leaf, Shield, Heart } from 'lucide-react';

const coreValues = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Pioneering cutting-edge solutions that transform industries and create new possibilities.'
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Committed to environmental responsibility and sustainable business practices.'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Operating with transparency, honesty, and ethical standards in all our endeavors.'
  },
  {
    icon: Heart,
    title: 'Community Impact',
    description: 'Creating positive change and empowering communities through our initiatives.'
  }
];

export const AboutSection: React.FC = () => {
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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge 
            variant="outline" 
            className="border-blue-500/30 text-blue-300 bg-blue-500/10 px-4 py-2 text-sm backdrop-blur-sm mb-6"
          >
            Our Foundation
          </Badge>
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
              About Fadassols Group
            </span>
          </h2>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className={`bg-slate-800/30 backdrop-blur-sm border-slate-700/50 transition-all duration-700 hover:bg-slate-800/50 hover:border-slate-600/50 hover:scale-105 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ animationDelay: '200ms' }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Our Vision</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                To redefine industries through innovation, technology, and sustainable practices
              </p>
            </CardContent>
          </Card>

          <Card className={`bg-slate-800/30 backdrop-blur-sm border-slate-700/50 transition-all duration-700 hover:bg-slate-800/50 hover:border-slate-600/50 hover:scale-105 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ animationDelay: '400ms' }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-amber-400 mb-4">Our Mission</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                To create value through strategic investments and forward-thinking solutions
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h3 className={`text-3xl font-bold text-white mb-12 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ animationDelay: '600ms' }}>
            Our Core Values
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card 
                key={index}
                className={`bg-slate-800/30 backdrop-blur-sm border-slate-700/50 transition-all duration-700 hover:bg-slate-800/50 hover:border-slate-600/50 hover:scale-105 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${800 + index * 200}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-amber-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
