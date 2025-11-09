import React from 'react';

interface PolitiqueConfidentialiteProps {
  onNavigate?: (page: string) => void;
}

export function PolitiqueConfidentialite({ onNavigate }: PolitiqueConfidentialiteProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-semibold mb-6">Politique de confidentialité</h1>

      <section className="mb-6">
        <h2 className="text-xl font-medium mb-2">Introduction</h2>
        <p className="text-sm text-gray-700">Description générale des pratiques de traitement des données personnelles.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-medium mb-2">Données collectées</h2>
        <p className="text-sm text-gray-700">Types de données collectées (identifiants, usage, cookies, etc.).</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-medium mb-2">Finalités et bases légales</h2>
        <p className="text-sm text-gray-700">Explication des finalités du traitement et des bases légales (consentement, exécution de contrat, etc.).</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-medium mb-2">Durée de conservation</h2>
        <p className="text-sm text-gray-700">Périodes de conservation des différentes catégories de données.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-medium mb-2">Vos droits</h2>
        <p className="text-sm text-gray-700">Droit d'accès, rectification, suppression, limitation, opposition et portabilité. Coordonnées du DPO si existant.</p>
      </section>

      <div className="mt-8">
        <p className="text-xs text-gray-500">Complétez cette page avec vos informations et contacts spécifiques.</p>
      </div>
    </div>
  );
}
