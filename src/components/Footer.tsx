import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Cookie } from 'lucide-react';
import { useState } from 'react';
import { CookieSettings } from './CookieSettings';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const [showCookieSettings, setShowCookieSettings] = useState(false);

  return (
    <>
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">D</span>
                </div>
                <span className="text-white font-semibold text-lg">DigitalAgency</span>
              </div>
              <p className="text-sm mb-4">
                Votre partenaire digital pour propulser votre présence en ligne et développer votre activité.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => onNavigate('home')}
                    className="hover:text-blue-400 transition-colors text-sm"
                  >
                    Accueil
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('services')}
                    className="hover:text-blue-400 transition-colors text-sm"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('portfolio')}
                    className="hover:text-blue-400 transition-colors text-sm"
                  >
                    Portfolio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('blog')}
                    className="hover:text-blue-400 transition-colors text-sm"
                  >
                    Blog
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="hover:text-blue-400 transition-colors text-sm"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>Création de sites web</li>
                <li>Référencement SEO</li>
                <li>Marketing digital</li>
                <li>E-commerce</li>
                <li>Applications mobiles</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>contact@digitalagency.fr</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Paris, France</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm">
                © {new Date().getFullYear()} DigitalAgency. Tous droits réservés.
              </div>

              <div className="flex items-center space-x-6 text-sm gap-3">
                <button
                  onClick={() => onNavigate('mentions')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Mentions légales
                </button>
                <button
                  onClick={() => onNavigate('privacy')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Politique de confidentialité
                </button>
                <button
                  onClick={() => onNavigate('cgu')}
                  className="hover:text-blue-400 transition-colors"
                >
                  CGU
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <CookieSettings
        isOpen={showCookieSettings}
        onClose={() => setShowCookieSettings(false)}
      />
    </>
  );
}
