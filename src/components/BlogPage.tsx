import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogPageProps {
  onNavigate: (page: string) => void;
}

export function BlogPage({ onNavigate }: BlogPageProps) {
  const featuredPost = {
    title: 'Les tendances SEO à suivre en 2025',
    excerpt: 'Découvrez les dernières évolutions du référencement naturel et comment adapter votre stratégie pour rester compétitif.',
    image: 'https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzYyMTk0NzA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'SEO',
    date: '3 novembre 2025',
    readTime: '8 min',
  };

  const posts = [
    {
      title: 'Comment optimiser la vitesse de votre site web',
      excerpt: 'Les meilleures pratiques pour améliorer les performances de votre site et l\'expérience utilisateur.',
      image: 'https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMTk0ODk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Développement Web',
      date: '1 novembre 2025',
      readTime: '6 min',
    },
    {
      title: 'Google Ads : 10 erreurs à éviter absolument',
      excerpt: 'Évitez les pièges courants et optimisez vos campagnes publicitaires pour un meilleur ROI.',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYyMTg3ODk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'SEA',
      date: '29 octobre 2025',
      readTime: '7 min',
    },
    {
      title: 'Marketing de contenu : stratégies gagnantes',
      excerpt: 'Comment créer du contenu qui engage votre audience et génère des conversions.',
      image: 'https://images.unsplash.com/photo-1751898371012-30a2896b3a06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb2ZmZWUlMjBkZXNrfGVufDF8fHx8MTc2MjE1Mzg3MHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Marketing',
      date: '25 octobre 2025',
      readTime: '10 min',
    },
    {
      title: 'UX Design : les principes essentiels',
      excerpt: 'Apprenez à créer des interfaces qui ravissent vos utilisateurs et boostent vos conversions.',
      image: 'https://images.unsplash.com/photo-1758691737045-3ece61135061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGJ1c2luZXNzJTIwcGVvcGxlfGVufDF8fHx8MTc2MjIzNDg4OXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Design',
      date: '22 octobre 2025',
      readTime: '5 min',
    },
    {
      title: 'Réseaux sociaux : quelle plateforme choisir ?',
      excerpt: 'Guide complet pour sélectionner les meilleurs réseaux sociaux selon votre activité.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVhbXxlbnwxfHx8fDE3NjIxNTE1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Social Media',
      date: '18 octobre 2025',
      readTime: '9 min',
    },
    {
      title: 'Analytics : mesurer ce qui compte vraiment',
      excerpt: 'Les KPIs essentiels pour suivre la performance de votre stratégie digitale.',
      image: 'https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMTk0ODk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Analytics',
      date: '15 octobre 2025',
      readTime: '7 min',
    },
  ];

  const categories = [
    'Tous',
    'SEO',
    'SEA',
    'Marketing',
    'Développement Web',
    'Design',
    'Social Media',
    'Analytics',
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="bg-white/20 text-white mb-4">Blog</Badge>
            <h1 className="text-4xl md:text-5xl mb-6">
              Actualités & conseils en marketing digital
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Restez informé des dernières tendances et découvrez nos conseils d'experts 
              pour réussir votre transformation digitale.
            </p>
            <div className="flex gap-4 max-w-md">
              <Input
                type="email"
                placeholder="Votre email"
                className="bg-white text-gray-900"
              />
              <Button className="bg-white text-blue-700 hover:bg-blue-50 whitespace-nowrap">
                S'abonner
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Badge className="bg-blue-600">Article à la une</Badge>
          </div>
          <Card className="border-none shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <ImageWithFallback
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 w-fit mb-4">
                  {featuredPost.category}
                </Badge>
                <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 w-fit">
                  Lire l'article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-50 py-8 border-y sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Tag className="w-5 h-5 text-gray-600 flex-shrink-0" />
            {categories.map((category, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden group cursor-pointer">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge
                    variant="secondary"
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm"
                  >
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-gray-900 text-xl mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Charger plus d'articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Recevez nos meilleurs conseils</h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            Inscrivez-vous à notre newsletter et recevez chaque semaine nos derniers articles 
            et conseils en marketing digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Votre adresse email"
              className="bg-white text-gray-900"
            />
            <Button className="bg-white text-blue-700 hover:bg-blue-50 whitespace-nowrap">
              S'inscrire
            </Button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            Pas de spam, désinscription possible à tout moment
          </p>
        </div>
      </section>
    </div>
  );
}
