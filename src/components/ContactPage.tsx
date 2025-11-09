import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Trash2, AlertCircle, Cookie, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Badge } from './ui/badge';
import { Alert, AlertDescription } from './ui/alert';
import { useContactForm } from '../hooks/useContactForm';
import { useCookies } from '../contexts/CookieContext';

export function ContactPage() {
  const {
    formData,
    setFormData,
    isSubmitting,
    submitStatus,
    submitForm,
    clearSavedData,
    hasSavedData,
    canSaveData
  } = useContactForm();
  const { hasConsented } = useCookies();
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) {
      alert('Veuillez accepter les conditions générales');
      return;
    }
    await submitForm(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ [field]: value });
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
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl text-gray-900">
                        Demander un devis gratuit
                      </CardTitle>
                      <p className="text-gray-600">
                        Remplissez ce formulaire et nous vous recontacterons dans les 24 heures
                      </p>
                    </div>
                    {hasSavedData && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={clearSavedData}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Vider
                      </Button>
                    )}
                  </div>

                  {/* Cookie Status Alerts */}
                  {hasConsented && (
                    <div className="space-y-2 mt-4">
                      {canSaveData && (
                        <Alert className="border-green-200 bg-green-50">
                          <Cookie className="h-4 w-4 text-green-600" />
                          <AlertDescription className="text-green-800">
                            <strong>Sauvegarde automatique activée</strong> - Vos données sont sauvegardées automatiquement pendant que vous tapez.
                          </AlertDescription>
                        </Alert>
                      )}

                      {!canSaveData && (
                        <Alert className="border-blue-200 bg-blue-50">
                          <Shield className="h-4 w-4 text-blue-600" />
                          <AlertDescription className="text-blue-800">
                            <strong>Mode privé</strong> - Vos données ne sont pas sauvegardées. Activez les cookies fonctionnels pour la sauvegarde automatique.
                          </AlertDescription>
                        </Alert>
                      )}
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  {submitStatus === 'success' ? (
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
                      {submitStatus === 'error' && (
                        <Alert className="border-red-200 bg-red-50">
                          <AlertCircle className="h-4 w-4 text-red-600" />
                          <AlertDescription className="text-red-800">
                            Une erreur s'est produite lors de l'envoi. Veuillez réessayer.
                          </AlertDescription>
                        </Alert>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name">Nom complet *</Label>
                          <Input
                            id="name"
                            type="text"
                            placeholder="Jean Dupont"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="jean.dupont@exemple.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="phone">Téléphone *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+33 1 23 45 67 89"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="company">Entreprise</Label>
                          <Input
                            id="company"
                            type="text"
                            placeholder="Mon Entreprise SARL"
                            value={formData.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="service">Service souhaité *</Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value: string) => handleInputChange('service', value)}
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Sélectionnez un service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Décrivez votre projet en détail..."
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          required
                          rows={5}
                          className="mt-1"
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="terms"
                          checked={agreedToTerms}
                          onCheckedChange={setAgreedToTerms}
                        />
                        <Label htmlFor="terms" className="text-sm">
                          J'accepte les{' '}
                          <a href="#" className="text-blue-600 hover:underline">
                            conditions générales
                          </a>{' '}
                          et la{' '}
                          <a href="#" className="text-blue-600 hover:underline">
                            politique de confidentialité
                          </a>
                          *
                        </Label>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        disabled={isSubmitting || !agreedToTerms}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Envoyer la demande
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-none shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    Nos coordonnées
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{info.title}</h3>
                        <p className="text-gray-700">{info.content}</p>
                        <p className="text-sm text-gray-500">{info.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-none shadow-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Besoin d'aide ?
                  </h3>
                  <p className="text-blue-100 mb-6">
                    Notre équipe est disponible pour répondre à toutes vos questions sur nos services et vous accompagner dans votre projet.
                  </p>
                  <Button
                    variant="secondary"
                    className="w-full bg-white text-blue-600 hover:bg-gray-100"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Nous appeler
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

