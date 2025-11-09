import { useEffect } from 'react';
import { useCookies } from '../contexts/CookieContext';

// Gestion du chargement de Google Analytics en respectant le consentement
// (Utilise gtag uniquement si analytics accepté)
export function AnalyticsManager() {
  const { preferences } = useCookies();

  useEffect(() => {
    if (!preferences.analytics) return;

    // Éviter le double chargement
    if (document.getElementById('ga-script')) return;

    const script = document.createElement('script');
    script.id = 'ga-script';
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-YXLWWR34YE';
    document.head.appendChild(script);

    const inline = document.createElement('script');
    inline.innerHTML = `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-YXLWWR34YE');`;
    document.head.appendChild(inline);
  }, [preferences.analytics]);

  return null;
}

