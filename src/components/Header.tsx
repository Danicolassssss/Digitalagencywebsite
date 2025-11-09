import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Accueil', page: 'home', href: '#/' },
    { label: 'Services', page: 'services', href: '#/services' },
    { label: 'À propos', page: 'about', href: '#/a-propos' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#/"
            onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white">D</span>
            </div>
            <span className="text-gray-900">Eurekadev</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Navigation principale">
            {navItems.map((item) => (
              <a
                key={item.page}
                href={item.href}
                onClick={(e) => { e.preventDefault(); onNavigate(item.page); }}
                className={`transition-colors ${
                  currentPage === item.page
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
                aria-current={currentPage === item.page ? 'page' : undefined}
                title={item.label}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button
              onClick={() => onNavigate('contact')}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Demander un devis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200" role="dialog" aria-label="Menu mobile">
            <nav className="flex flex-col space-y-4" aria-label="Navigation mobile">
              {navItems.map((item) => (
                <a
                  key={item.page}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.page);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2 rounded-lg transition-colors ${
                    currentPage === item.page
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  aria-current={currentPage === item.page ? 'page' : undefined}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button
                  onClick={() => {
                    onNavigate('contact');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Demander un devis
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
