import { Users, Target, Award, Zap, Heart, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Je vise l’excellence dans chaque projet en utilisant les meilleures pratiques.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Ma passion pour le digital se reflète dans chaque réalisation.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Je travaille main dans la main avec nos clients pour leur réussite.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Je reste à la pointe des technologies et tendances digitales.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-4">À propos</Badge>
              <h1 className="text-4xl md:text-5xl mb-6">
                Votre partenaire digital de confiance depuis 2015
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8">
                Nous sommes une équipe passionnée d'experts digitaux dédiée à la réussite 
                de votre entreprise en ligne.
              </p>
              <Button
                onClick={() => onNavigate('contact')}
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50"
              >
                Nous contacter
              </Button>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVhbXxlbnwxfHx8fDE3NjIxNTE1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Notre équipe"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '10+', label: 'Années d\'expérience' },
              { value: '200+', label: 'Clients satisfaits' },
              { value: '350+', label: 'Projets réalisés' },
              { value: '25', label: 'Experts passionnés' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Ma mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Accompagner les entreprises dans leur transformation digitale en leur offrant 
              des solutions innovantes, performantes et sur-mesure. Je crois que chaque
              entreprise mérite une présence en ligne qui reflète son excellence et génère 
              de vrais résultats commerciaux.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-none shadow-lg text-center">
                  <CardContent className="pt-6">
                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">
                Pourquoi travailler avec moi ?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Je combine expertise technique, créativité et stratégie pour vous offrir
                des solutions qui font vraiment la différence.
              </p>
              <ul className="space-y-4">
                {[
                  'Expert certifié et en formation continue',
                  'Des solutions personnalisées adaptées à vos besoins',
                  'Un suivi et un support client exceptionnel',
                  'Des résultats mesurables et un ROI optimisé',
                  'Une transparence totale sur mes méthodes et tarifs',
                  'Des outils et technologies de pointe',
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

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Mes certifications</h2>
            <p className="text-lg text-gray-600">Certifications et attestations personnelles</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Google Partner', link: 'https://skillshop.exceedlms.com/student/collection/1830744-les-principes-fondamentaux-du-marketing-digital' },
              { icon: Award, title: 'Semrush Certification', link: 'https://static.semrush.com/academy/certificates/9d8269365c/danny-grangeot_2.pdf' },
            ].map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-3 shadow-lg">
                    <Icon className="w-10 h-10 text-blue-600" />
                  </div>
                  {cert.link ? (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-center">
                      {cert.title}
                    </a>
                  ) : (
                    <span className="text-gray-700 text-center">{cert.title}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Rejoignez nos clients satisfaits</h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            Commencez votre transformation digitale dès aujourd'hui
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => onNavigate('contact')}
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50"
            >
              Demander un devis
            </Button>
            <Button
              onClick={() => onNavigate('portfolio')}
              size="lg"
              variant="outline"
              className="border-white bg-blue-700 text-white hover:bg-white/10"
            >
              Voir nos réalisations
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
