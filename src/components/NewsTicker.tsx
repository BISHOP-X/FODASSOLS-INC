
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Zap, Globe, Leaf } from 'lucide-react';

const newsItems = [
  {
    icon: Zap,
    text: "AEI Technik launches innovative fintech and AI solutions"
  },
  {
    icon: Leaf,
    text: "Agribusiness achieves record export of agricultural produce"
  },
  {
    icon: Globe,
    text: "ShakaraSquare.ng and SearchlightNews.ng reshape audience engagement"
  },
  {
    icon: TrendingUp,
    text: "Real estate division completes sustainable luxury developments"
  },
  {
    icon: Zap,
    text: "Strategic partnerships established with UK technology firms"
  },
  {
    icon: Leaf,
    text: "Palm oil and fish farming operations expand across Nigeria"
  }
];

export const NewsTicker: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-8 bg-slate-900/50 border-t border-b border-slate-800/50 overflow-hidden">
      <div className="flex items-center space-x-4 mb-4 px-4 sm:px-6 lg:px-8">
        <Badge 
          variant="outline" 
          className="border-blue-500/30 text-blue-300 bg-blue-500/10 px-3 py-1 text-xs backdrop-blur-sm flex-shrink-0"
        >
          Latest Updates
        </Badge>
      </div>
      
      <div 
        className={`flex space-x-8 ${isPaused ? '' : 'animate-[scroll_45s_linear_infinite]'}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          width: 'fit-content',
        }}
      >
        {/* Triple the items for seamless loop and immediate start */}
        {[...newsItems, ...newsItems, ...newsItems].map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div 
              key={index}
              className="flex items-center space-x-3 flex-shrink-0 px-4 py-2 bg-slate-800/30 rounded-lg backdrop-blur-sm border border-slate-700/30 hover:border-slate-600/50 transition-colors duration-300"
            >
              <IconComponent className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span className="text-slate-300 text-sm whitespace-nowrap">{item.text}</span>
            </div>
          );
        })}
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
};
