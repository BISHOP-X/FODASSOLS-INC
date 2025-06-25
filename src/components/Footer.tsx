
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Business Sectors',
      links: [
        { name: 'Media & Entertainment', href: '#sectors' },
        { name: 'Technology Solutions', href: '#sectors' },
        { name: 'Real Estate', href: '#sectors' },
        { name: 'Agribusiness', href: '#sectors' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Global Presence', href: '#global' },
        { name: 'Leadership', href: '#leadership' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Subsidiaries',
      links: [
        { name: 'ShakaraSquare.ng', href: '#' },
        { name: 'SearchlightNews.ng', href: '#' },
        { name: 'AEI Technik Process Ltd', href: '#' }
      ]
    }
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent mb-4">
              Fadassols Group
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Redefining industries through innovation, technology, and sustainable practices across multiple sectors.
            </p>
            <Badge 
              variant="outline" 
              className="border-green-500/30 text-green-300 bg-green-500/10 text-xs"
            >
              Committed to Sustainability
            </Badge>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-slate-800/50 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-slate-400 text-sm">
            © {currentYear} Fadassols Group. All rights reserved.
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-slate-400">
            <span>Headquarters: Nigeria</span>
            <span className="hidden md:inline">•</span>
            <span>Operations: Nigeria, United Kingdom</span>
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
