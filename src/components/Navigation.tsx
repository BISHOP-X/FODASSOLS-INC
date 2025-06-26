
import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();
  
  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Sectors', href: '/sectors' },
    { name: 'Global Presence', href: '/global' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-amber-400 to-amber-300 bg-clip-text text-transparent">
                Fadassols
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-slate-800/50 rounded-md ${
                      location.pathname === item.href 
                        ? 'text-blue-400 bg-slate-800/50' 
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-white hover:bg-slate-800/50 active:bg-slate-700/50 focus:bg-slate-800/50 flex items-center space-x-2 px-3 py-2"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                <span className="text-sm font-medium">
                  {isMenuOpen ? 'Close' : 'Menu'}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-md" />
        <div className={`relative flex flex-col items-center justify-center h-full space-y-8 transition-transform duration-300 ${
          isMenuOpen ? 'translate-y-0' : 'translate-y-full'
        }`}>
          {menuItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={handleMenuClick}
              className={`text-2xl transition-all duration-300 ${
                location.pathname === item.href 
                  ? 'text-blue-400' 
                  : 'text-slate-300 hover:text-white'
              } ${isMenuOpen ? 'animate-fade-in' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
