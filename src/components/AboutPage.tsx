import { Users, Target, Award, Zap, Heart, TrendingUp, CheckCircle, Quote } from 'lucide-react';
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
      description: 'Nous visons l\'excellence dans chaque projet en utilisant les meilleures pratiques.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Notre passion pour le digital se reflète dans chaque réalisation.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Nous travaillons main dans la main avec nos clients pour leur réussite.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Nous restons à la pointe des technologies et tendances digitales.',
    },
  ];

  const team = [
    {
      name: 'Sophie Martin',
      role: 'CEO & Fondatrice',
      image: 'https://images.unsplash.com/photo-1758691737045-3ece61135061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGJ1c2luZXNzJTIwcGVvcGxlfGVufDF8fHx8MTc2MjIzNDg4OXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Marc Dubois',
      role: 'Directeur Technique',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVhbXxlbnwxfHx8fDE3NjIxNTE1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Julie Leroy',
      role: 'Directrice Marketing',
      image: 'https://images.unsplash.com/photo-1751898371012-30a2896b3a06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb2ZmZWUlMjBkZXNrfGVufDF8fHx8MTc2MjE1Mzg3MHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Thomas Bernard',
      role: 'Expert SEO',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYyMTg3ODk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const milestones = [
    { year: '2015', title: 'Création', description: 'Lancement de DigitalAgency' },
    { year: '2017', title: 'Croissance', description: '50+ clients accompagnés' },
    { year: '2019', title: 'Reconnaissance', description: 'Premier prix Awwwards' },
    { year: '2021', title: 'Expansion', description: 'Ouverture à l\'international' },
    { year: '2023', title: 'Innovation', description: 'Lancement de services IA' },
    { year: '2025', title: 'Leadership', description: '200+ clients, 25 collaborateurs' },
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
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Notre mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Accompagner les entreprises dans leur transformation digitale en leur offrant 
              des solutions innovantes, performantes et sur-mesure. Nous croyons que chaque 
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

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Notre histoire</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une décennie d'innovation et de croissance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-3xl text-blue-600 mb-2">{milestone.year}</div>
                  <h3 className="text-gray-900 text-xl mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Notre équipe</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des experts passionnés à votre service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-none shadow-lg overflow-hidden group">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <CardContent className="pt-6 text-center">
                  <h3 className="text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sm text-blue-600">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">
                Pourquoi travailler avec nous ?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Nous combinons expertise technique, créativité et stratégie pour vous offrir 
                des solutions qui font vraiment la différence.
              </p>
              <ul className="space-y-4">
                {[
                  'Une équipe d\'experts certifiés et en formation continue',
                  'Des solutions personnalisées adaptées à vos besoins',
                  'Un suivi et un support client exceptionnel',
                  'Des résultats mesurables et un ROI optimisé',
                  'Une transparence totale sur nos méthodes et tarifs',
                  'Des outils et technologies de pointe',
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Card className="border-none shadow-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8">
                <Quote className="w-12 h-12 mb-6 opacity-50" />
                <p className="text-lg mb-6 italic">
                  "DigitalAgency a transformé notre présence en ligne. Leur expertise et leur 
                  dévouement ont dépassé toutes nos attentes. Je recommande vivement leurs services."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div>Pierre Durand</div>
                    <div className="text-sm text-blue-200">CEO, TechStart</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Nos certifications</h2>
            <p className="text-lg text-gray-600">Reconnus par les leaders du secteur</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Google Partner' },
              { icon: TrendingUp, title: 'Bing Ads Certified' },
              { icon: Target, title: 'Meta Business Partner' },
              { icon: Award, title: 'Awwwards Winner' },
            ].map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-3 shadow-lg">
                    <Icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <span className="text-gray-700 text-center">{cert.title}</span>
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
              className="border-white text-white hover:bg-white/10"
            >
              Voir nos réalisations
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
