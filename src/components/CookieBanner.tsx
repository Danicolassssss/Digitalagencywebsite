import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useCookies } from '../contexts/CookieContext';
import { Button } from './ui/button';

import { Switch } from './ui/switch';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Label } from './ui/label';
import { X, Settings, Shield, BarChart3, Target, Wrench } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const { showBanner, preferences, updatePreferences, acceptAll, rejectAll, savePreferences, hideBanner } = useCookies();
  const [showSettings, setShowSettings] = useState(false);
  const bannerRef = useRef<HTMLDivElement | null>(null);

  const handlePreferenceChange = (key: keyof typeof preferences, value: boolean) => {
    if (key === 'necessary') return;
    updatePreferences({ [key]: value });
  };

  if (!showBanner) return null;

  const banner = (
    <div
      ref={bannerRef}
      role="region"
      aria-label="Bannière de gestion des cookies"
      aria-hidden={showSettings}
      className="border shadow-lg bg-white dark:bg-gray-900 rounded-lg"
      style={{
        position: 'fixed',
        bottom: '32px',
        left: '32px',
        right: '32px',
        zIndex: 20,
        pointerEvents: showSettings ? 'none' : 'auto',
        opacity: showSettings ? 0.6 : 1,
        transition: 'opacity 150ms ease',
        maxWidth: 'calc(100% - 64px)'
      }}
    >
      <div className="max-w-7xl mx-auto px-10 py-4 sm:px-12">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-5 w-5 text-blue-600" />
              <h3 className="font-semibold text-lg">Gestion des Cookies</h3>
            </div>
            <p className="text-sm text-gray-600">
              Nous utilisons des cookies pour améliorer votre expérience. Les nécessaires sont toujours actifs.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 items-center pr-4">
            <Dialog open={showSettings} onOpenChange={setShowSettings}>
              <DialogTrigger asChild>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto z-50">
                <DialogHeader>
                  <DialogTitle>Préférences des Cookies</DialogTitle>
                  <DialogDescription>
                    Choisissez quels types de cookies autoriser.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-5 w-5 text-green-600" />
                      <div>
                        <Label className="text-base font-medium">Nécessaires</Label>
                        <p className="text-sm text-gray-500">Indispensables au fonctionnement du site.</p>
                      </div>
                    </div>
                    <Switch checked={true} disabled />
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="h-5 w-5 text-blue-600" />
                      <div>
                        <Label className="text-base font-medium">Analyse</Label>
                        <p className="text-sm text-gray-500">Mesure de l'utilisation (Analytics).</p>
                      </div>
                    </div>
                    <Switch checked={preferences.analytics} onCheckedChange={(checked: boolean) => handlePreferenceChange('analytics', checked)} />
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Target className="h-5 w-5 text-purple-600" />
                      <div>
                        <Label className="text-base font-medium">Marketing</Label>
                        <p className="text-sm text-gray-500">Publicités personnalisées.</p>
                      </div>
                    </div>
                    <Switch checked={preferences.marketing} onCheckedChange={(checked: boolean) => handlePreferenceChange('marketing', checked)} />
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Wrench className="h-5 w-5 text-orange-600" />
                      <div>
                        <Label className="text-base font-medium">Fonctionnels</Label>
                        <p className="text-sm text-gray-500">Améliorations & personnalisation.</p>
                      </div>
                    </div>
                    <Switch checked={preferences.functional} onCheckedChange={(checked: boolean) => handlePreferenceChange('functional', checked)} />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setShowSettings(false)}>Annuler</Button>
                  <Button onClick={() => { savePreferences(); setShowSettings(false); }}>Sauvegarder</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Button variant="outline" size="sm" onClick={rejectAll} className="ml-1 text-sm">Refuser tout</Button>
            <Button size="sm" onClick={acceptAll} className="ml-1 text-sm">Accepter tout</Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={hideBanner}
              className="p-1"
              aria-label="Fermer la bannière"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  // Retourne la bannière via portal. La dialog du radial s'affichera au-dessus (z-50) et sera scrollable.
  return createPortal(banner, document.body);
};
