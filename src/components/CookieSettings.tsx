import React, { useState } from 'react';
import { useCookies } from '../contexts/CookieContext';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Switch } from './ui/switch';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Shield, BarChart3, Target, Wrench, Cookie, Trash2 } from 'lucide-react';
import Cookies from 'js-cookie';

interface CookieSettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CookieSettings: React.FC<CookieSettingsProps> = ({ isOpen, onClose }) => {
  const { preferences, updatePreferences, savePreferences } = useCookies();
  const [tempPreferences, setTempPreferences] = useState(preferences);

  const handlePreferenceChange = (key: keyof typeof preferences, value: boolean) => {
    if (key === 'necessary') return; // Les cookies nécessaires ne peuvent pas être désactivés
    setTempPreferences(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    updatePreferences(tempPreferences);
    savePreferences();
    onClose();
  };

  const handleReset = () => {
    setTempPreferences({
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    });
  };

  const clearAllCookies = () => {
    // Supprimer tous les cookies sauf les nécessaires
    const allCookies = document.cookie.split(';');
    allCookies.forEach(cookie => {
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();

      // Ne pas supprimer les cookies nécessaires
      if (!['cookie-consent', 'cookie-preferences'].includes(name)) {
        Cookies.remove(name);
        // Essayer avec différents paths et domaines
        Cookies.remove(name, { path: '/' });
        Cookies.remove(name, { path: '', domain: window.location.hostname });
      }
    });

    // Réinitialiser les préférences
    handleReset();
    alert('Tous les cookies non-nécessaires ont été supprimés.');
  };

  const cookieTypes = [
    {
      key: 'necessary' as const,
      icon: Shield,
      title: 'Cookies Nécessaires',
      description: 'Indispensables au bon fonctionnement du site (connexion, panier, sécurité, etc.)',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      required: true,
      examples: 'Cookies de session, authentification, panier d\'achat'
    },
    {
      key: 'functional' as const,
      icon: Wrench,
      title: 'Cookies Fonctionnels',
      description: 'Améliorent les fonctionnalités et permettent la personnalisation de votre expérience',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      required: false,
      examples: 'Sauvegarde de formulaires, préférences utilisateur, langue'
    },
    {
      key: 'analytics' as const,
      icon: BarChart3,
      title: 'Cookies d\'Analyse',
      description: 'Nous aident à comprendre comment vous utilisez notre site pour l\'améliorer',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      required: false,
      examples: 'Google Analytics, mesures d\'audience, statistiques de visite'
    },
    {
      key: 'marketing' as const,
      icon: Target,
      title: 'Cookies Marketing',
      description: 'Utilisés pour vous proposer des publicités et du contenu personnalisés',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      required: false,
      examples: 'Facebook Pixel, Google Ads, retargeting publicitaire'
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Cookie className="h-5 w-5" />
            Paramètres des Cookies
          </DialogTitle>
          <DialogDescription>
            Gérez vos préférences en matière de cookies. Vous pouvez modifier ces paramètres à tout moment.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cookieTypes.map((type) => (
              <Card key={type.key} className="border-2">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${type.bgColor}`}>
                        <type.icon className={`h-5 w-5 ${type.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-base">{type.title}</CardTitle>
                        {type.required && (
                          <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                            Requis
                          </span>
                        )}
                      </div>
                    </div>
                    <Switch
                      checked={tempPreferences[type.key]}
                      onCheckedChange={(checked: boolean) => handlePreferenceChange(type.key, checked)}
                      disabled={type.required}
                    />
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm mb-2">
                    {type.description}
                  </CardDescription>
                  <p className="text-xs text-gray-500">
                    <strong>Exemples :</strong> {type.examples}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Informations sur la durée de conservation */}
          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle className="text-sm">Durée de Conservation</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Cookies nécessaires :</strong> Session ou 1 an maximum
                </div>
                <div>
                  <strong>Cookies fonctionnels :</strong> 7 jours à 1 an
                </div>
                <div>
                  <strong>Cookies d'analyse :</strong> 2 ans maximum
                </div>
                <div>
                  <strong>Cookies marketing :</strong> 1 an maximum
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
            <Button
              variant="outline"
              onClick={clearAllCookies}
              className="text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Supprimer tous les cookies
            </Button>
            <Button
              variant="outline"
              onClick={handleReset}
            >
              Réinitialiser
            </Button>
            <div className="flex-1" />
            <Button variant="outline" onClick={onClose}>
              Annuler
            </Button>
            <Button onClick={handleSave}>
              Sauvegarder les préférences
            </Button>
          </div>

          {/* Informations légales */}
          <div className="text-xs text-gray-500 pt-4 border-t">
            <p>
              <strong>Vos droits :</strong> Conformément au RGPD, vous avez le droit d'accéder,
              de rectifier, de supprimer vos données personnelles et de vous opposer à leur traitement.
              Pour exercer ces droits, contactez-nous à{' '}
              <a href="mailto:privacy@eurekadev.fr" className="text-blue-600 hover:underline">
                privacy@eurekadev.fr
              </a>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
