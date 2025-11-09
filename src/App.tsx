import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { PortfolioPage } from './components/PortfolioPage';
import { BlogPage } from './components/BlogPage';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { CookieProvider } from './contexts/CookieContext';
import { MentionsLegales } from './components/MentionsLegales';
import { PolitiqueConfidentialite } from './components/PolitiqueConfidentialite';
import { CGU } from './components/CGU';

type Page = 'home' | 'about' | 'services' | 'contact' | 'mentions' | 'privacy' | 'cgu' ;

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigation = (page: string) => {
    setCurrentPage(page as Page);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Remonte en haut de la page lorsqu'on clique sur un lien <a>
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest && target.closest('a') as HTMLAnchorElement | null;
      if (anchor) {
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigation} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigation} />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigation} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigation} />;
      case 'mentions':
        return <MentionsLegales onNavigate={handleNavigation} />;
      case 'privacy':
        return <PolitiqueConfidentialite onNavigate={handleNavigation} />;
      case 'cgu':
        return <CGU onNavigate={handleNavigation} />;
      default:
        return <HomePage onNavigate={handleNavigation} />;
    }
  };

  return (
    <CookieProvider>
      <div className="min-h-screen bg-white">
        <Header currentPage={currentPage} onNavigate={handleNavigation} />
        <main>
          {renderCurrentPage()}
        </main>
        <Footer onNavigate={handleNavigation} />
        <CookieBanner />
      </div>
    </CookieProvider>
  );
}
