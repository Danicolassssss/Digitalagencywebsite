import { useState } from 'react';
import { ExternalLink, Globe, TrendingUp, Target, Award } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PortfolioPageProps {
  onNavigate: (page: string) => void;
}

export function PortfolioPage({ onNavigate }: PortfolioPageProps) {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'web', label: 'Sites web' },
    { id: 'seo', label: 'SEO' },
    { id: 'sea', label: 'SEA' },
    { id: 'marketing', label: 'Marketing' },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Fashion Luxe',
      category: 'web',
      tags: ['E-commerce', 'Design', 'SEO'],
      description: 'Refonte complète d\'une boutique en ligne avec augmentation de 150% des ventes.',
      image: 'https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMTk0ODk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      results: [
        '+150% de ventes',
        '+200% de trafic',
        'Taux de conversion 4.2%',
      ],
    },
    {
      id: 2,
      title: 'Campagne SEO Restaurant',
      category: 'seo',
      tags: ['SEO Local', 'Content', 'Analytics'],
      description: 'Stratégie SEO locale ayant propulsé le restaurant en première page Google.',
      image: 'https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzYyMTk0NzA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      results: [
        'Position #1 sur 12 mots-clés',
        '+300% de visibilité',
        '+85% de réservations',
      ],
    },
    {
      id: 3,
      title: 'Google Ads SaaS B2B',
      category: 'sea',
      tags: ['Google Ads', 'Lead Gen', 'B2B'],
      description: 'Campagne Google Ads générant des leads qualifiés pour un logiciel B2B.',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYyMTg3ODk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      results: [
        '150+ leads qualifiés/mois',
        'CPA réduit de 40%',
        'ROI de 320%',
      ],
    },
    {
      id: 4,
      title: 'Stratégie Marketing Cabinet Avocat',
      category: 'marketing',
      tags: ['Stratégie', 'Content', 'Social Media'],
      description: 'Stratégie digitale complète pour un cabinet d\'avocats prestigieux.',
      image: 'https://images.unsplash.com/photo-1751898371012-30a2896b3a06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb2ZmZWUlMjBkZXNrfGVufDF8fHx8MTc2MjE1Mzg3MHww&ixlib=rb-4.1.0&q=80&w=1080',
      results: [
        '+180% d\'engagement',
        '50+ nouveaux clients',
        'Notoriété x3',
      ],
    },
    {
      id: 5,
      title: 'Site Vitrine Architecte',
      category: 'web',
      tags: ['Design', 'Portfolio', 'Responsive'],
      description: 'Site web élégant mettant en valeur les réalisations d\'un cabinet d\'architecture.',
      image: 'https://images.unsplash.com/photo-1758691737045-3ece61135061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGJ1c2luZXNzJTIwcGVvcGxlfGVufDF8fHx8MTc2MjIzNDg4OXww&ixlib=rb-4.1.0&q=80&w=1080',
      results: [
        'Design award-winning',
        '+250% de demandes',
        'Temps de chargement < 1s',
      ],
    },
    {
      id: 6,
      title: 'SEO E-learning Platform',
      category: 'seo',
      tags: ['SEO', 'Technical', 'Content'],
      description: 'Optimisation SEO technique et contenu pour une plateforme de formation en ligne.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVhbXxlbnwxfHx8fDE3NjIxNTE1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      results: [
        '+400% de trafic organique',
        '20 000+ inscriptions',
        'Top 3 sur 50+ mots-clés',
      ],
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Génération JSON-LD dynamique (liste de projets)
  const projectJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: filteredProjects.map((p, idx) => ({
      '@type': 'CreativeWork',
      position: idx + 1,
      name: p.title,
      description: p.description,
      keywords: p.tags.join(', ')
    }))
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="bg-white/20 text-white mb-4">Portfolio</Badge>
            <h1 className="text-4xl md:text-5xl mb-6">
              Nos réalisations qui parlent d'elles-mêmes
            </h1>
            <p className="text-lg md:text-xl text-blue-100">
              Découvrez comment nous avons aidé nos clients à atteindre leurs objectifs digitaux 
              et à développer leur activité en ligne.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '350+', label: 'Projets réalisés' },
              { value: '200+', label: 'Clients satisfaits' },
              { value: '98%', label: 'Taux de satisfaction' },
              { value: '15', label: 'Prix & distinctions' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-gray-50 py-8 sticky top-16 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setFilter(category.id)}
                variant={filter === category.id ? 'default' : 'outline'}
                className={filter === category.id ? 'bg-blue-600' : ''}
                aria-label={`Filtrer par la catégorie ${category.label}`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">Liste des projets réalisés</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={`Projet: ${project.title}`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-blue-600"
                    >
                      <ExternalLink className="mr-2 w-4 h-4" />
                      Voir le projet
                    </Button>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-blue-100 text-blue-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-gray-900 text-xl mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <div className="space-y-2">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        {result}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }} />
        </div>
      </section>

      {/* Expertise Badges */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Notre expertise reconnue</h2>
            <p className="text-lg text-gray-600">Certifications et partenariats</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: 'Google Partner' },
              { icon: TrendingUp, title: 'SEO Certified' },
              { icon: Target, title: 'Meta Partner' },
              { icon: Award, title: 'Awwwards' },
            ].map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    <Icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <span className="text-gray-700">{badge.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Votre projet sera le prochain ?</h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            Discutons ensemble de vos objectifs et transformons votre vision en réalité
          </p>
          <Button
            onClick={() => onNavigate('contact')}
            size="lg"
            className="bg-white text-blue-700 hover:bg-blue-50"
          >
            Démarrer mon projet
          </Button>
        </div>
      </section>
    </div>
  );
}
