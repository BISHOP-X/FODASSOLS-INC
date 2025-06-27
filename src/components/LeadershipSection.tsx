
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { User, Award, Globe, Briefcase, Heart, Linkedin, ExternalLink } from 'lucide-react';

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

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge 
            variant="outline" 
            className="border-amber-500/30 text-amber-300 bg-amber-500/10 px-4 py-2 text-sm backdrop-blur-sm mb-6"
          >
            Leadership
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 bg-clip-text text-transparent">
              Visionary Leadership
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Driving social change through economic empowerment, philanthropic initiatives, and innovative solutions across multiple industries
          </p>
        </div>

        {/* Founder Profile Section */}
        <div className="mb-20">
          <Card className="bg-slate-800/30 backdrop-blur-sm border-slate-700/50 max-w-4xl mx-auto overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-80 md:h-96 bg-gradient-to-br from-amber-500/20 to-amber-600/20 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/obinna.jpg" 
                    alt="Obinna Ude - Founder & CEO of Fadassols Group" 
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge 
                      variant="outline" 
                      className="border-amber-500/50 text-amber-200 bg-amber-500/20 backdrop-blur-sm px-3 py-1 text-sm"
                    >
                      Founder & CEO
                    </Badge>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col justify-center">
                  <Badge 
                    variant="outline" 
                    className="border-amber-500/30 text-amber-300 bg-amber-500/10 px-3 py-1 text-sm mb-4 w-fit"
                  >
                    Founder & CEO
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Obinna Ude
                  </h3>
                  <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                    Visionary entrepreneur and philanthropist leading Fadassols Group's mission to create sustainable impact across multiple industries while empowering communities through innovative solutions and social responsibility.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-amber-400" />
                      <span className="text-slate-400 text-sm">Strategic Leadership</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Heart className="w-4 h-4 text-amber-400" />
                      <span className="text-slate-400 text-sm">Community Impact</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Globe className="w-4 h-4 text-amber-400" />
                      <span className="text-slate-400 text-sm">Global Vision</span>
                    </div>
                  </div>
                  
                  {/* LinkedIn Button */}
                  <div className="mt-6">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open('https://www.linkedin.com/in/dr-sir-obinna-ude-ksm-bsc-mba-mnim-dfilmmd-47440b7b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank')}
                      className="bg-slate-800/50 text-amber-300 hover:text-white hover:bg-slate-700/70 border border-amber-500/30 hover:border-amber-400 transition-all duration-300"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      Connect on LinkedIn
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leadershipTeam.map((leader, index) => {
            const IconComponent = leader.icon;
            return (
              <Card 
                key={index}
                className="bg-slate-800/30 backdrop-blur-sm border-slate-700/50 transition-all duration-300 hover:bg-slate-800/50 hover:border-amber-500/30 hover:scale-105 group"
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
