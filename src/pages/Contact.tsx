import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send, AlertCircle, CheckCircle, Loader } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { sendEmail, getServiceStats } from '../utils/emailService';
import { isAuthorizedEmail } from '../utils/authorizedEmails';

const Contact = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  // State pour le formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    establishment: '',
    serviceType: 'maintenance', // Default value
    desktopCount: '',
    laptopCount: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
    loading: false
  });

  const [emailStats, setEmailStats] = useState<any[]>([]);

  // Charger les statistiques d'utilisation des services email
  useEffect(() => {
    setEmailStats(getServiceStats());
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Format message based on language
  const formatMessage = () => {
    const getServiceTypeName = () => {
      if (i18n.language === 'ar') {
        switch(formData.serviceType) {
          case 'maintenance': return 'عقد صيانة';
          case 'network': return 'تركيب شبكة';
          case 'remote': return 'دعم عن بعد';
          case 'repair': return 'إصلاح';
          default: return formData.serviceType;
        }
      } else {
        switch(formData.serviceType) {
          case 'maintenance': return 'Contrat de maintenance';
          case 'network': return 'Installation réseau';
          case 'remote': return 'Assistance à distance';
          case 'repair': return 'Dépannage';
          default: return formData.serviceType;
        }
      }
    };

    if (i18n.language === 'ar') {
      return `
الاسم الكامل: ${formData.name}
البريد الإلكتروني: ${formData.email}
رقم الهاتف: ${formData.phone}
اسم المؤسسة: ${formData.establishment}
نوع الخدمة: ${getServiceTypeName()}
عدد أجهزة الكمبيوتر المكتبية: ${formData.desktopCount}
عدد أجهزة الكمبيوتر المحمولة: ${formData.laptopCount}

الرسالة:
${formData.message}`;
    } else {
      return `
Nom complet: ${formData.name}
Email: ${formData.email}
Téléphone: ${formData.phone}
Établissement: ${formData.establishment}
Type de service: ${getServiceTypeName()}
Nombre d'ordinateurs de bureau: ${formData.desktopCount}
Nombre d'ordinateurs portables: ${formData.laptopCount}

Message:
${formData.message}`;
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Réinitialiser le statut
    setFormStatus({
      ...formStatus,
      loading: true
    });
    
    // Vérifier si l'email est autorisé
    if (!isAuthorizedEmail(formData.email)) {
      setFormStatus({
        submitted: true,
        success: false,
        message: t('contact.form.error'),
        loading: false
      });
      return;
    }
    
    try {
      // Préparer les paramètres pour EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        establishment: formData.establishment,
        service_type: formData.serviceType,
        desktop_count: formData.desktopCount,
        laptop_count: formData.laptopCount,
        message: formatMessage()
      };
      
      // Envoyer l'email
      await sendEmail(templateParams);
      
      // Mettre à jour les statistiques
      setEmailStats(getServiceStats());
      
      // Mettre à jour le statut
      setFormStatus({
        submitted: true,
        success: true,
        message: t('contact.form.success'),
        loading: false
      });
      
      // Réinitialiser le formulaire après envoi réussi
      setFormData({
        name: '',
        email: '',
        phone: '',
        establishment: '',
        serviceType: 'maintenance',
        desktopCount: '',
        laptopCount: '',
        message: ''
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi du message:", error);
      setFormStatus({
        submitted: true,
        success: false,
        message: t('contact.form.error'),
        loading: false
      });
    }
  };

  return (
    <div className={isRTL ? 'text-right' : 'text-left'}>
      {/* Hero Section */}
      <section className="bg-[#2c3e50] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{t('contact.hero.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            {t('contact.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('contact.info.title')}</h2>
              <p className="text-gray-600 mb-8">
                {t('contact.info.description')}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Phone className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{t('contact.info.phone')}</h3>
                    <p className="text-gray-600">{t('header.phone')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Mail className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{t('contact.info.email')}</h3>
                    <p className="text-gray-600">{t('header.email')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <MapPin className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{t('contact.info.address')}</h3>
                    <p className="text-gray-600">{t('footer.address')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Clock className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{t('contact.info.hours')}</h3>
                    <p className="text-gray-600">{t('contact.info.workingDays')}</p>
                    <p className="text-gray-600">{t('contact.info.weekendDays')}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-bold text-lg mb-4">{t('contact.info.followUs')}</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772.94.555.342 1.023.791 1.364 1.347.347.556.607 1.111.86 1.772.248.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.217 1.79-.465 2.428a5.565 5.565 0 01-.86 1.772c-.341.556-.809 1.023-1.364 1.364-.556.347-1.111.607-1.772.86-.637.248-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.217-2.428-.465a5.565 5.565 0 01-1.772-.86c-.556-.341-1.023-.809-1.364-1.364a5.565 5.565 0 01-.86-1.772c-.248-.637-.415-1.363-.465-2.428C3.012 15.056 3 14.717 3 12c0-2.717.01-3.056.06-4.122.05-1.065.217-1.79.465-2.428.254-.66.599-1.216.86-1.772.341-.556.809-1.023 1.364-1.364a5.565 5.565 0 011.772-.86c.637-.248 1.363-.415 2.428-.465C8.944 3.012 9.283 3 12 3z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://wa.me/213783328729" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('contact.form.title')}</h2>
              
              {formStatus.submitted && (
                <div className={`p-4 mb-6 rounded-md ${formStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  <div className="flex items-start">
                    {formStatus.success ? (
                      <CheckCircle className={`${isRTL ? 'ml-2' : 'mr-2'} mt-0.5 flex-shrink-0`} size={18} />
                    ) : (
                      <AlertCircle className={`${isRTL ? 'ml-2' : 'mr-2'} mt-0.5 flex-shrink-0`} size={18} />
                    )}
                    <p>{formStatus.message}</p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.fullName')} *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.schoolEmail')} *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder={t('contact.form.schoolEmailPlaceholder')}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      {t('contact.form.schoolEmailNote')}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.phone')} *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="establishment" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.establishment')} *</label>
                    <input
                      type="text"
                      id="establishment"
                      name="establishment"
                      value={formData.establishment}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.serviceType')} *</label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="maintenance">{t('contact.form.serviceTypes.maintenance')}</option>
                    <option value="network">{t('contact.form.serviceTypes.network')}</option>
                    <option value="remote">{t('contact.form.serviceTypes.remote')}</option>
                    <option value="repair">{t('contact.form.serviceTypes.repair')}</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="desktopCount" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.desktopCount')} *</label>
                    <input
                      type="number"
                      id="desktopCount"
                      name="desktopCount"
                      value={formData.desktopCount}
                      onChange={handleChange}
                      required
                      min="0"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="laptopCount" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.laptopCount')} *</label>
                    <input
                      type="number"
                      id="laptopCount"
                      name="laptopCount"
                      value={formData.laptopCount}
                      onChange={handleChange}
                      required
                      min="0"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.message')} *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder={t('contact.form.messagePlaceholder')}
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={formStatus.loading}
                    className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors disabled:bg-green-400 disabled:cursor-not-allowed"
                  >
                    {formStatus.loading ? (
                      <>
                        <Loader className={`animate-spin ${isRTL ? 'ml-2' : 'mr-2'}`} size={18} />
                        {t('contact.form.sending')}
                      </>
                    ) : (
                      <>
                        <Send className={isRTL ? 'ml-2' : 'mr-2'} size={18} />
                        {t('contact.form.submit')}
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('contact.map.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('contact.map.description')}
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103859.59098151365!2d0.0494791!3d35.9311354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1281f60275a55b67%3A0xc981c6ec5a4505ef!2sMostaganem!5e0!3m2!1sfr!2sdz!4v1620000000000!5m2!1sfr!2sdz" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Carte de Mostaganem"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('contact.cta.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            {t('contact.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <a 
              href="https://wa.me/213783328729" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-100 text-green-800 hover:bg-green-200 font-bold py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center"
            >
              <svg className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {t('contact.cta.whatsapp')}
            </a>
          </div>
          <div className="mt-4 text-gray-600">
            <p>{t('contact.cta.phone')} <span className="font-semibold">{t('header.phone')}</span></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;