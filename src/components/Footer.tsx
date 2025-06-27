
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface FooterLink {
  name: string;
  href: string;
  external?: boolean;
}

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections: { title: string; links: FooterLink[] }[] = [
    {
      title: 'Business Sectors',
      links: [
        { name: 'Media & Entertainment', href: '#sectors' },
        { name: 'Technology Solutions', href: '#sectors' },
        { name: 'Real Estate', href: '#sectors' },
        { name: 'Agribusiness', href: '#sectors' },
        { name: 'Hospitality', href: '#sectors' }
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
        { name: 'ShakaraSquare.ng', href: 'https://shakarasquare.ng/', external: true },
        { name: 'SearchlightNews.ng', href: 'https://searchlightnews.ng/', external: true },
        { name: 'AEI Technik Process Ltd', href: 'https://www.facebook.com/share/18i6gKUShq/?mibextid=wwXIfr', external: true },
        { name: 'Old Berrys Restaurant and Bar', href: 'https://www.instagram.com/oldberrysbar?igsh=YXZmM3VjdTlwYWxy&utm_source=qr', external: true },
        { name: 'Coastal View Shortlets', href: '#sectors', external: false }
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
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo.jpg" 
                alt="Fadassols Group Logo" 
                className="w-10 h-10 object-contain"
              />
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
                Fadassols Group
              </div>
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
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
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
