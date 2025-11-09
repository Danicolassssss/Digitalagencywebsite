import React from 'react';

interface MentionsLegalesProps {
  onNavigate?: (page: string) => void;
}

export function MentionsLegales({ onNavigate }: MentionsLegalesProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-semibold mb-6">Mentions légales</h1>

      <section className="mb-6">
        <h2 className="text-xl font-medium mb-2">Éditeur du site</h2>
        <p className="text-sm text-gray-700">Nom de l'entreprise, adresse, forme juridique, numéro SIRET, responsable de la publication.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-medium mb-2">Hébergement</h2>
        <p className="text-sm text-gray-700">Détails de l'hébergeur (nom, adresse, téléphone).</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-medium mb-2">Propriété intellectuelle</h2>
        <p className="text-sm text-gray-700">Informations sur les droits d'auteur, marques et utilisation des contenus du site.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-medium mb-2">Contact</h2>
        <p className="text-sm text-gray-700">Pour toute question, contactez-nous à : <a href="mailto:contact@eurekadev.fr" className="text-blue-600">contact@eurekadev.fr</a></p>
      </section>

      <div className="mt-8">
        <p className="text-xs text-gray-500">Remplissez ces sections avec vos informations légales.</p>
      </div>
    </div>
  );
}

