import React from 'react';
import { CookieSettings } from './CookieSettings';

interface ParametresCookiesPageProps {
  onNavigate?: (page: string) => void;
}

export function ParametresCookiesPage({ onNavigate }: ParametresCookiesPageProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-semibold mb-6">Paramètres des cookies</h1>
      <p className="text-sm text-gray-700 mb-6">Gérez vos préférences en matière de cookies ci-dessous.</p>

      {/* Affiche la modal de paramètres des cookies en mode ouvert */}
      <CookieSettings isOpen={true} onClose={() => { /* l'utilisateur peut fermer via le modal */ }} />

      <div className="mt-8">
        <p className="text-xs text-gray-500">Ce template ouvre la fenêtre de paramètres des cookies. Vous pouvez intégrer davantage de contenu ici si nécessaire.</p>
      </div>
    </div>
  );
}
