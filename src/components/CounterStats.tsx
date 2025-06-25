
import React, { useState, useEffect, useRef } from 'react';

interface StatItem {
  number: number;
  label: string;
  suffix?: string;
}

const stats: StatItem[] = [
  { number: 4, label: 'Business Sectors' },
  { number: 2, label: 'Countries' },
  { number: 15, label: 'Subsidiaries', suffix: '+' },
];

export const CounterStats: React.FC = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      let current = 0;
      const increment = stat.number / 50; // Adjust speed
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.number) {
          current = stat.number;
          clearInterval(timer);
        }
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, 30);
    });
  };

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
      {stats.map((stat, index) => (
        <div key={index} className="text-center group">
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 transition-all duration-300 group-hover:bg-slate-800/50 group-hover:border-slate-600/50 group-hover:scale-105">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
                {counters[index]}{stat.suffix || ''}
              </span>
            </div>
            <div className="text-slate-400 font-medium">
              {stat.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
