import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X, Home, Users, Building2, Globe, Mail, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PageExplorerProps {
  isOpen: boolean;
  onClose: () => void;
}

const pages = [
  {
    path: '/',
    title: 'Home',
    description: 'Welcome to Fadassols Group',
    icon: Home,
    color: 'from-blue-400 to-cyan-400'
  },
  {
    path: '/about',
    title: 'About Us',
    description: 'Our journey, values & leadership',
    icon: Users,
    color: 'from-purple-400 to-pink-400'
  },
  {
    path: '/sectors',
    title: 'Business Sectors',
    description: 'Explore our diverse portfolio',
    icon: Building2,
    color: 'from-green-400 to-emerald-400'
  },
  {
    path: '/global',
    title: 'Global Presence',
    description: 'Our worldwide operations',
    icon: Globe,
    color: 'from-blue-400 to-indigo-400'
  },
  {
    path: '/contact',
    title: 'Contact Us',
    description: 'Get in touch with us',
    icon: Mail,
    color: 'from-orange-400 to-red-400'
  }
];

export const PageExplorer: React.FC<PageExplorerProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handlePageClick = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <Card className="bg-slate-900/95 backdrop-blur-md border-slate-700/50 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <CardContent className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <Badge 
                variant="outline" 
                className="border-blue-500/30 text-blue-300 bg-blue-500/10 px-3 py-1 text-sm mb-3"
              >
                Site Navigation
              </Badge>
              <h2 className="text-3xl font-bold">
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Explore Pages
                </span>
              </h2>
              <p className="text-slate-400 mt-2">
                Navigate to any section of our website
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
              className="border-slate-600 text-slate-400 hover:text-white hover:border-slate-500"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Page Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pages.map((page, index) => {
              const IconComponent = page.icon;
              return (
                <Card
                  key={page.path}
                  className="bg-slate-800/30 backdrop-blur-sm border-slate-700/50 transition-all duration-300 hover:bg-slate-800/50 hover:border-slate-600/50 hover:scale-105 cursor-pointer group"
                  onClick={() => handlePageClick(page.path)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${page.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white mb-1">
                            {page.title}
                          </h3>
                          <p className="text-sm text-slate-400">
                            {page.description}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-slate-700/50 text-center">
            <p className="text-slate-500 text-sm">
              Click any page above to navigate directly
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
