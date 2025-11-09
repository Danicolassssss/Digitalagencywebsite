import React from 'react';

interface CGUProps {
  onNavigate?: (page: string) => void;
}

export function CGU({ onNavigate }: CGUProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-semibold mb-6">Conditions Générales d'Utilisation (CGU)</h1>

      <section className="mb-6">
        <h2 className="text-xl font-medium mb-2">Objet</h2>
        <p className="text-sm text-gray-700">Description de l'objet du service et des conditions d'utilisation du site.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-medium mb-2">Accès au site</h2>
        <p className="text-sm text-gray-700">Conditions générales d'accès, restrictions et responsabilités.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-medium mb-2">Responsabilités</h2>
        <p className="text-sm text-gray-700">Limitation de responsabilité, contenu tiers, liens externes.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-medium mb-2">Propriété intellectuelle</h2>
        <p className="text-sm text-gray-700">Utilisation et reproduction des contenus; droits d'auteur.</p>
      </section>

      <div className="mt-8">
        <p className="text-xs text-gray-500">Remplissez cette page avec les conditions spécifiques à votre service.</p>
      </div>
    </div>
  );
}
