import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Badge } from './ui/badge';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+33 1 23 45 67 89',
      subtitle: 'Lun-Ven 9h-18h',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@digitalagency.fr',
      subtitle: 'Réponse sous 24h',
    },
    {
      icon: MapPin,
      title: 'Adresse',
      content: '123 Avenue des Champs-Élysées',
      subtitle: '75008 Paris, France',
    },
  ];

  const services = [
    'Création de site web',
    'Refonte de site existant',
    'Référencement SEO',
    'Publicité Google Ads',
    'Marketing digital',
    'Stratégie digitale',
    'Autre',
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="bg-white/20 text-white mb-4">Contact</Badge>
            <h1 className="text-4xl md:text-5xl mb-6">
              Parlons de votre projet
            </h1>
            <p className="text-lg md:text-xl text-blue-100">
              Obtenez un devis gratuit et personnalisé. Notre équipe d'experts est à votre écoute 
              pour comprendre vos besoins et vous proposer la meilleure solution.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">
                    Demander un devis gratuit
                  </CardTitle>
                  <p className="text-gray-600">
                    Remplissez ce formulaire et nous vous recontacterons dans les 24 heures
                  </p>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="py-12 text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl text-gray-900 mb-2">Merci pour votre demande !</h3>
                      <p className="text-gray-600">
                        Nous avons bien reçu votre message et nous vous recontacterons très bientôt.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="firstName">Prénom *</Label>
                          <Input
                            id="firstName"
                            type="text"
                            required
                            placeholder="Jean"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Nom *</Label>
                          <Input
                            id="lastName"
                            type="text"
                            required
                            placeholder="Dupont"
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            placeholder="jean.dupont@exemple.fr"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Téléphone</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+33 6 12 34 56 78"
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="company">Entreprise</Label>
                        <Input
                          id="company"
                          type="text"
                          placeholder="Nom de votre entreprise"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="service">Service souhaité *</Label>
                        <Select required>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Sélectionnez un service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service, index) => (
                              <SelectItem key={index} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="budget">Budget estimé</Label>
                        <Select>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Sélectionnez une fourchette" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">Moins de 5 000€</SelectItem>
                            <SelectItem value="2">5 000€ - 10 000€</SelectItem>
                            <SelectItem value="3">10 000€ - 25 000€</SelectItem>
                            <SelectItem value="4">Plus de 25 000€</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="message">Décrivez votre projet *</Label>
                        <Textarea
                          id="message"
                          required
                          placeholder="Parlez-nous de votre projet, vos objectifs, vos contraintes..."
                          className="mt-1 min-h-32"
                        />
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox id="terms" required />
                        <Label htmlFor="terms" className="text-sm cursor-pointer">
                          J'accepte que mes données soient utilisées pour me recontacter concernant 
                          ma demande. *
                        </Label>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-blue-600 hover:bg-blue-700"
                      >
                        <Send className="mr-2 w-5 h-5" />
                        Envoyer ma demande
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Contact Cards */}
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="border-none shadow-lg">
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-gray-900 mb-1">{info.title}</h3>
                          <p className="text-gray-900">{info.content}</p>
                          <p className="text-sm text-gray-500 mt-1">{info.subtitle}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              {/* Why Choose Us */}
              <Card className="border-none shadow-lg bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
                <CardContent className="pt-6">
                  <h3 className="text-xl mb-4">Pourquoi nous choisir ?</h3>
                  <ul className="space-y-3">
                    {[
                      'Devis gratuit sous 24h',
                      'Experts certifiés',
                      'Support dédié',
                      'Garantie satisfaction',
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <h3 className="text-gray-900 mb-4">Horaires d'ouverture</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Lundi - Vendredi</span>
                      <span className="text-gray-900">9h00 - 18h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Samedi</span>
                      <span className="text-gray-900">Sur rendez-vous</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Dimanche</span>
                      <span className="text-gray-900">Fermé</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-200 h-96">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-600">Carte interactive</p>
            <p className="text-sm text-gray-500">123 Avenue des Champs-Élysées, 75008 Paris</p>
          </div>
        </div>
      </section>
    </div>
  );
}
