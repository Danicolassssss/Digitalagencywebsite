import { ArrowRight, Globe, TrendingUp, Target, Award, CheckCircle, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const services = [
    {
      icon: Globe,
      title: 'Création de sites web',
      description: 'Des sites web modernes, performants et sur-mesure pour votre activité.',
    },
    {
      icon: TrendingUp,
      title: 'Référencement SEO',
      description: 'Optimisez votre visibilité sur les moteurs de recherche et attirez plus de clients.',
    },
    {
      icon: Target,
      title: 'Publicité SEA',
      description: 'Campagnes Google Ads et publicités ciblées pour des résultats immédiats.',
    },
    {
      icon: Award,
      title: 'Marketing Digital',
      description: 'Stratégies marketing complètes pour développer votre présence en ligne.',
    },
  ];

  const testimonials = [
    {
      name: 'Sophie Martin',
      company: 'E-commerce Fashion',
      content: 'DigitalAgency a transformé notre présence en ligne. Nos ventes ont augmenté de 150% en 6 mois.',
      rating: 5,
    },
    {
      name: 'Pierre Dubois',
      company: 'Restaurant Le Gourmet',
      content: 'Service exceptionnel ! Notre site web attire maintenant beaucoup plus de réservations.',
      rating: 5,
    },
    {
      name: 'Marie Leroy',
      company: 'Cabinet Avocat',
      content: 'Professionnels, réactifs et créatifs. Je recommande vivement leurs services.',
      rating: 5,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                  Eurekadev — <span className="text-blue-200">L’expertise digitale au service de votre succès</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8">
                Je suis auto‑entrepreneur spécialisé en création de sites web, SEO, SEA et marketing digital.
                J'accompagne les petites entreprises et entrepreneurs pour transformer leurs objectifs en résultats concrets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => onNavigate('contact')}
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-blue-50"
                >
                  Demander un devis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  onClick={() => onNavigate('portfolio')}
                  size="lg"
                  variant="outline"
                  className="border-white bg-blue-700  text-white hover:bg-white/10"
                >
                  Voir nos réalisations
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative z-10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVhbXxlbnwxfHx8fDE3NjIxNTE1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Digital Marketing Team"
                  className="rounded-lg shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-blue-500/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Mes services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Services digitaux adaptés aux besoins des petites entreprises et entrepreneurs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Button
              onClick={() => onNavigate('services')}
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              Découvrir tous nos services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMTk0ODk2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern Office"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Pourquoi me choisir ?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Je combine expertise technique et créativité pour offrir des solutions digitales
                qui génèrent de vrais résultats pour votre entreprise.
              </p>
              <ul className="space-y-4">
                {[
                  'Expert indépendant certifié',
                  'Solutions sur-mesure',
                  'Accompagnement personnalisé',
                  'Résultats mesurables',
                  'Transparence totale',
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Prêt à démarrer votre projet ?</h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            Contactez-moi dès aujourd'hui pour un devis gratuit et personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => onNavigate('contact')}
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50"
            >
              Demander un devis gratuit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => onNavigate('about')}
              size="lg"
              variant="outline"
              className="border-white bg-blue-700 text-white hover:bg-white/10"
            >
              En savoir plus
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
