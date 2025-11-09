import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useCookies } from '../contexts/CookieContext';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  service: string;
}

const defaultFormData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
  service: '',
};

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>(defaultFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { preferences, hasConsented } = useCookies();

  // Charger les données sauvegardées depuis les cookies au montage
  useEffect(() => {
    if (hasConsented && preferences.functional) {
      const savedData = Cookies.get('contact-form-data');
      if (savedData) {
        try {
          const parsedData = JSON.parse(savedData);
          setFormData({ ...defaultFormData, ...parsedData });
        } catch (error) {
          console.error('Erreur lors du chargement des données du formulaire:', error);
        }
      }
    }
  }, [hasConsented, preferences.functional]);

  // Sauvegarder les données du formulaire dans les cookies (si autorisé)
  const saveFormData = (data: Partial<ContactFormData>) => {
    const newFormData = { ...formData, ...data };
    setFormData(newFormData);

    // Sauvegarder uniquement si les cookies fonctionnels sont autorisés
    if (hasConsented && preferences.functional) {
      // Sauvegarder pour 7 jours
      Cookies.set('contact-form-data', JSON.stringify(newFormData), { expires: 7 });
    }
  };

  // Vider les données sauvegardées
  const clearSavedData = () => {
    setFormData(defaultFormData);
    Cookies.remove('contact-form-data');
  };

  // Simuler l'envoi du formulaire
  const submitForm = async (data: ContactFormData): Promise<boolean> => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulation d'un appel API
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Ici vous pourriez ajouter votre logique d'envoi réelle
      console.log('Données du formulaire envoyées:', data);

      // Si l'envoi réussit, vider les données sauvegardées
      clearSavedData();
      setSubmitStatus('success');

      // Sauvegarder l'historique des soumissions si les cookies d'analyse sont autorisés
      if (hasConsented && preferences.analytics) {
        const submissions = JSON.parse(Cookies.get('form-submissions') || '[]');
        submissions.push({
          timestamp: new Date().toISOString(),
          service: data.service,
        });
        Cookies.set('form-submissions', JSON.stringify(submissions), { expires: 30 });
      }

      return true;
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire:', error);
      setSubmitStatus('error');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  // Vérifier si des données sont sauvegardées
  const hasSavedData = () => {
    return Object.values(formData).some(value => typeof value === 'string' && value.trim() !== '');
  };

  return {
    formData,
    setFormData: saveFormData,
    isSubmitting,
    submitStatus,
    submitForm,
    clearSavedData,
    hasSavedData: hasSavedData(),
    canSaveData: hasConsented && preferences.functional,
  };
};
