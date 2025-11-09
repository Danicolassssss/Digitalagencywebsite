import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { CookieProvider } from './contexts/CookieContext';
import { MentionsLegales } from './components/MentionsLegales';
import { PolitiqueConfidentialite } from './components/PolitiqueConfidentialite';
import { CGU } from './components/CGU';
import { AnalyticsManager } from './components/AnalyticsManager.tsx';

// Pages supportées et mapping vers chemins hash
export type Page =
  | 'home'
  | 'about'
  | 'services'
  | 'contact'
  | 'mentions'
  | 'privacy'
  | 'cgu';

const pageToHash: Record<Page, string> = {
  home: '#/',
  services: '#/services',
  about: '#/a-propos',
  contact: '#/contact',
  mentions: '#/mentions-legales',
  privacy: '#/politique-confidentialite',
  cgu: '#/cgu',
};

const hashToPage = (hash: string): Page => {
  switch (hash.replace(/#/, '')) {
    case '/services':
      return 'services';
    case '/a-propos':
      return 'about';
    case '/contact':
      return 'contact';
    case '/mentions-legales':
      return 'mentions';
    case '/politique-confidentialite':
      return 'privacy';
    case '/cgu':
      return 'cgu';
    case '/':
    default:
      return 'home';
  }
};

const SEO_META: Record<Page, { title: string; description: string; path: string }> = {
  home: {
    title: 'Eurekadev — Agence digitale: création de sites web, SEO & SEA',
    description:
      "Eurekadev accompagne PME et entrepreneurs: sites web performants, SEO/SEA et marketing digital pour attirer plus de clients.",
    path: '/',
  },
  services: {
    title: 'Services — Création de sites, SEO, SEA & marketing | Eurekadev',
    description:
      'Solutions digitales complètes: développement web, référencement naturel, Google Ads, social media et analytics.',
    path: '/services',
  },
  about: {
    title: 'À propos — Expertise digitale au service de votre succès | Eurekadev',
    description:
      "Expert indépendant passionné, j'unis technicité et stratégie pour des résultats concrets.",
    path: '/a-propos',
  },
  contact: {
    title: 'Contact — Demander un devis gratuit | Eurekadev',
    description: 'Expliquez votre projet et recevez un devis rapide et personnalisé.',
    path: '/contact',
  },
  mentions: {
    title: 'Mentions légales | Eurekadev',
    description: 'Informations légales et éditeur du site.',
    path: '/mentions-legales',
  },
  privacy: {
    title: 'Politique de confidentialité | Eurekadev',
    description: 'Données personnelles, cookies et respect de la vie privée.',
    path: '/politique-confidentialite',
  },
  cgu: {
    title: 'Conditions générales d’utilisation (CGU) | Eurekadev',
    description: "Règles d'utilisation du site et responsabilités.",
    path: '/cgu',
  },
};

function updateHeadForPage(page: Page) {
  const meta = SEO_META[page] ?? SEO_META.home;
  const baseUrl = 'https://www.eurekadev.fr';
  const url = `${baseUrl}${meta.path}`;

  // Title
  document.title = meta.title;

  // Description
  const ensureMeta = (selector: string, attr: 'content', value: string) => {
    let el = document.head.querySelector<HTMLMetaElement>(selector);
    if (!el) {
      el = document.createElement('meta');
      const [nameAttr, nameValue] = selector.replace(/^[^\[]+\[|]$/g, '').split('=');
      el.setAttribute(nameAttr, nameValue.replace(/(^"|"$)/g, ''));
      document.head.appendChild(el);
    }
    el.setAttribute(attr, value);
  };

  ensureMeta('meta[name="description"]', 'content', meta.description);
  ensureMeta('meta[property="og:title"]', 'content', meta.title);
  ensureMeta('meta[property="og:description"]', 'content', meta.description);
  ensureMeta('meta[property="og:url"]', 'content', url);
  ensureMeta('meta[name="twitter:title"]', 'content', meta.title);
  ensureMeta('meta[name="twitter:description"]', 'content', meta.description);

  // Canonical
  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', url);
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigation = (page: string) => {
    const p = (page as Page) || 'home';
    setCurrentPage(p);
    // Met à jour le hash pour des URLs partageables
    const targetHash = pageToHash[p];
    if (typeof window !== 'undefined' && targetHash) {
      if (window.location.hash !== targetHash) {
        window.location.hash = targetHash;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Sync avec le hash au chargement et sur changement
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const initial = hashToPage(window.location.hash || '#/');
    setCurrentPage(initial);
    updateHeadForPage(initial);

    const onHashChange = () => {
      const p = hashToPage(window.location.hash || '#/');
      setCurrentPage(p);
      updateHeadForPage(p);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Met à jour les metas si currentPage change par interaction directe
  useEffect(() => {
    if (typeof window !== 'undefined') {
      updateHeadForPage(currentPage);
    }
  }, [currentPage]);

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
        <AnalyticsManager />
      </div>
    </CookieProvider>
  );
}
