import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

interface CookieContextType {
  preferences: CookiePreferences;
  hasConsented: boolean;
  showBanner: boolean;
  updatePreferences: (prefs: Partial<CookiePreferences>) => void;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: () => void;
  hideBanner: () => void;
}

const defaultPreferences: CookiePreferences = {
  necessary: true, // Toujours true car nécessaires
  analytics: false,
  marketing: false,
  functional: false,
};

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export const useCookies = () => {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error('useCookies must be used within a CookieProvider');
  }
  return context;
};

interface CookieProviderProps {
  children: ReactNode;
}

export const CookieProvider: React.FC<CookieProviderProps> = ({ children }) => {
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [hasConsented, setHasConsented] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà donné son consentement
    const cookieConsent = Cookies.get('cookie-consent');
    const cookiePrefs = Cookies.get('cookie-preferences');

    if (cookieConsent === 'given') {
      setHasConsented(true);
      setShowBanner(false);

      if (cookiePrefs) {
        try {
          const savedPrefs = JSON.parse(cookiePrefs);
          setPreferences({ ...defaultPreferences, ...savedPrefs });
        } catch (error) {
          console.error('Erreur lors du parsing des préférences de cookies:', error);
        }
      }
    } else {
      setShowBanner(true);
    }
  }, []);

  const updatePreferences = (prefs: Partial<CookiePreferences>) => {
    setPreferences(prev => ({ ...prev, ...prefs }));
  };

  const acceptAll = () => {
    const allAcceptedPrefs: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    setPreferences(allAcceptedPrefs);
    saveConsent(allAcceptedPrefs);
  };

  const rejectAll = () => {
    const rejectedPrefs: CookiePreferences = {
      necessary: true, // Toujours nécessaires
      analytics: false,
      marketing: false,
      functional: false,
    };
    setPreferences(rejectedPrefs);
    saveConsent(rejectedPrefs);
  };

  const savePreferences = () => {
    saveConsent(preferences);
  };

  const saveConsent = (prefs: CookiePreferences) => {
    // Sauvegarder le consentement pour 1 an
    Cookies.set('cookie-consent', 'given', { expires: 365 });
    Cookies.set('cookie-preferences', JSON.stringify(prefs), { expires: 365 });

    setHasConsented(true);
    setShowBanner(false);

    // Nettoyer les cookies non autorisés
    if (!prefs.analytics) {
      // Supprimer les cookies d'analytics
      Cookies.remove('_ga');
      Cookies.remove('_gid');
      Cookies.remove('_gat');
    }

    if (!prefs.marketing) {
      // Supprimer les cookies de marketing
      Cookies.remove('_fbp');
      Cookies.remove('_fbc');
    }
  };

  const hideBanner = () => {
    setShowBanner(false);
  };

  const contextValue: CookieContextType = {
    preferences,
    hasConsented,
    showBanner,
    updatePreferences,
    acceptAll,
    rejectAll,
    savePreferences,
    hideBanner,
  };

  return (
    <CookieContext.Provider value={contextValue}>
      {children}
    </CookieContext.Provider>
  );
};

