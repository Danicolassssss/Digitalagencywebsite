import { Globe, TrendingUp, Target, Award, Smartphone, PenTool, BarChart, Megaphone, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const mainServices = [
    {
      icon: Globe,
      title: 'Création de sites web',
      description: 'Sites vitrine, e-commerce et applications web sur-mesure',
      features: [
        'Design responsive et moderne',
        'Optimisation des performances',
        'CMS facile à gérer',
        'Sécurité renforcée',
        'Hébergement et maintenance',
      ],
      pricing: 'À partir de 2 500€',
    },
    {
      icon: TrendingUp,
      title: 'Référencement SEO',
      description: 'Optimisation pour les moteurs de recherche',
      features: [
        'Audit SEO complet',
        'Optimisation on-page',
        'Stratégie de contenu',
        'Link building',
        'Suivi et reporting mensuel',
      ],
      pricing: 'À partir de 800€/mois',
    },
    {
      icon: Target,
      title: 'Publicité SEA',
      description: 'Campagnes Google Ads et publicités ciblées',
      features: [
        'Stratégie de campagne',
        'Création des annonces',
        'Ciblage précis',
        'Optimisation continue',
        'Reporting détaillé',
      ],
      pricing: 'À partir de 500€/mois + budget ads',
    },
    {
      icon: Award,
      title: 'Marketing Digital',
      description: 'Stratégies marketing complètes',
      features: [
        'Stratégie digitale',
        'Gestion réseaux sociaux',
        'Email marketing',
        'Content marketing',
        'Analyse des performances',
      ],
      pricing: 'À partir de 1 200€/mois',
    },
  ];

  const additionalServices = [
    {
      icon: Smartphone,
      title: 'Applications mobiles',
      description: 'Développement d\'apps iOS et Android',
    },
    {
      icon: PenTool,
      title: 'Design & Branding',
      description: 'Identité visuelle et charte graphique',
    },
    {
      icon: BarChart,
      title: 'Analytics & Data',
      description: 'Analyse de données et insights',
    },
    {
      icon: Megaphone,
      title: 'Social Media',
      description: 'Gestion de communautés en ligne',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="bg-white/20 text-white mb-4">Mes Services</Badge>
            <h1 className="text-4xl md:text-5xl mb-6">
              Solutions digitales complètes pour votre réussite
            </h1>
            <p className="text-lg md:text-xl text-blue-100">
                De la conception de votre site web à l’acquisition de nouveaux clients, je vous accompagne à chaque étape de votre transformation digitale.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Mes services principaux</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des solutions complètes et personnalisées pour répondre à tous vos besoins digitaux
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-2 hover:border-blue-600 transition-colors">
                  <CardHeader>
                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <CardTitle className="text-gray-900 text-2xl">{service.title}</CardTitle>
                    <p className="text-gray-600">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-blue-600">{service.pricing}</span>
                      <Button
                        onClick={() => onNavigate('contact')}
                        variant="outline"
                        className="border-blue-600 text-blue-600 hover:bg-blue-50"
                      >
                        En savoir plus
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Services complémentaires</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Élargissez vos possibilités avec mes services additionnels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Mon processus</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une méthode éprouvée en 5 étapes pour garantir le succès de votre projet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: '01', title: 'Découverte', description: 'Analyse de vos besoins' },
              { step: '02', title: 'Stratégie', description: 'Définition du plan d\'action' },
              { step: '03', title: 'Création', description: 'Développement de la solution' },
              { step: '04', title: 'Lancement', description: 'Mise en ligne et tests' },
              { step: '05', title: 'Optimisation', description: 'Suivi et amélioration' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">{item.step}</span>
                </div>
                <h3 className="text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Discutons de votre projet</h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            Obtenez un devis gratuit et personnalisé adapté à vos besoins
          </p>
          <Button
            onClick={() => onNavigate('contact')}
            size="lg"
            className="bg-white text-blue-700 hover:bg-blue-50"
          >
            Demander un devis gratuit
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
