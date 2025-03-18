import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, Zap, Calendar, Monitor, Wifi, Headset, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div className={isRTL ? 'text-right' : 'text-left'}>
      {/* Hero Section */}
      <section className="relative bg-secondary text-neutral py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('home.hero.title')}
            </h1>
            <p className="text-xl mb-8">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
              <Link to="/contact" className="bg-primary hover:bg-primary-dark text-neutral font-bold py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center shadow-custom">
                {t('home.hero.contactButton')}
              </Link>
              <Link to="/services" className="bg-transparent hover:bg-secondary-light border-2 border-primary text-primary py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center">
                {t('home.hero.servicesButton')}
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://www.eldigital.media/images/showid2/6784305?w=1200&zc=4" 
              alt="Technicien informatique" 
              className="rounded-lg shadow-xl w-full h-auto object-cover animate-float"
            />
          </div>
        </div>
      </section>

      {/* Info Bar */}
      <section className="bg-neutral py-6 shadow-md">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`flex items-center p-4 ${isRTL ? 'border-r-4' : 'border-l-4'} border-primary bg-neutral rounded`}>
              <Clock className={`text-primary ${isRTL ? 'ml-3' : 'mr-3'}`} size={24} />
              <div>
                <h3 className="font-bold text-secondary">{t('home.infoBar.visits')}</h3>
                <p className="text-sm text-secondary-light">{t('home.infoBar.included')}</p>
              </div>
            </div>
            <div className={`flex items-center p-4 ${isRTL ? 'border-r-4' : 'border-l-4'} border-secondary bg-neutral rounded`}>
              <Zap className={`text-primary ${isRTL ? 'ml-3' : 'mr-3'}`} size={24} />
              <div>
                <h3 className="font-bold text-secondary">{t('home.infoBar.speed')}</h3>
                <p className="text-sm text-secondary-light">{t('home.infoBar.reactive')}</p>
              </div>
            </div>
            <div className={`flex items-center p-4 ${isRTL ? 'border-r-4' : 'border-l-4'} border-primary bg-neutral rounded`}>
              <Calendar className={`text-primary ${isRTL ? 'ml-3' : 'mr-3'}`} size={24} />
              <div>
                <h3 className="font-bold text-secondary">{t('home.infoBar.tracking')}</h3>
                <p className="text-sm text-secondary-light">{t('home.infoBar.remaining')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-secondary">{t('home.services.title')}</h2>
            <p className="text-secondary-light max-w-2xl mx-auto">
              {t('home.services.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-neutral-light p-6 rounded-lg shadow-custom hover:shadow-custom-lg transition-shadow transform hover:-translate-y-1 duration-300">
              <Monitor className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2 text-secondary">{t('home.services.maintenance.title')}</h3>
              <p className="text-secondary-light mb-4">
                {t('home.services.maintenance.description')}
              </p>
              <ul className="space-y-2 mb-4">
                {t('home.services.maintenance.features', { returnObjects: true }).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className={`text-primary ${isRTL ? 'ml-2' : 'mr-2'} flex-shrink-0 mt-1`} size={16} />
                    <span className="text-secondary-light">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/services" className="text-primary font-medium hover:text-primary-dark inline-flex items-center">
                {t('home.services.moreLink')}
                <svg className={`w-4 h-4 ${isRTL ? 'mr-1 rotate-180' : 'ml-1'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            
            {/* Service 2 */}
            <div className="bg-neutral-light p-6 rounded-lg shadow-custom hover:shadow-custom-lg transition-shadow transform hover:-translate-y-1 duration-300">
              <Wifi className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2 text-secondary">{t('home.services.network.title')}</h3>
              <p className="text-secondary-light mb-4">
                {t('home.services.network.description')}
              </p>
              <ul className="space-y-2 mb-4">
                {t('home.services.network.features', { returnObjects: true }).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className={`text-primary ${isRTL ? 'ml-2' : 'mr-2'} flex-shrink-0 mt-1`} size={16} />
                    <span className="text-secondary-light">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/services" className="text-primary font-medium hover:text-primary-dark inline-flex items-center">
                {t('home.services.moreLink')}
                <svg className={`w-4 h-4 ${isRTL ? 'mr-1 rotate-180' : 'ml-1'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            
            {/* Service 3 */}
            <div className="bg-neutral-light p-6 rounded-lg shadow-custom hover:shadow-custom-lg transition-shadow transform hover:-translate-y-1 duration-300">
              <Headset className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2 text-secondary">{t('home.services.remote.title')}</h3>
              <p className="text-secondary-light mb-4">
                {t('home.services.remote.description')}
              </p>
              <ul className="space-y-2 mb-4">
                {t('home.services.remote.features', { returnObjects: true }).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className={`text-primary ${isRTL ? 'ml-2' : 'mr-2'} flex-shrink-0 mt-1`} size={16} />
                    <span className="text-secondary-light">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/remote-support" className="text-primary font-medium hover:text-primary-dark inline-flex items-center">
                {t('home.services.moreLink')}
                <svg className={`w-4 h-4 ${isRTL ? 'mr-1 rotate-180' : 'ml-1'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Remote Support Section */}
      <section className="py-16 bg-secondary text-neutral">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('home.remoteSupport.title')}</h2>
            <p className="max-w-2xl mx-auto">
              {t('home.remoteSupport.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-neutral text-secondary p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/90/TeamViewer_logo.svg" alt="TeamViewer Logo" className={`h-10 ${isRTL ? 'ml-3' : 'mr-3'}`} />
                <h3 className="text-xl font-bold">TeamViewer</h3>
              </div>
              <p className="text-secondary-light mb-4">
                {t('home.remoteSupport.teamviewer.description')}
              </p>
              <a 
                href="https://www.teamviewer.com/fr/telecharger/windows/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-primary text-neutral px-4 py-2 rounded-md hover:bg-primary-dark transition-colors shadow-custom"
              >
                <Download className={isRTL ? 'ml-2' : 'mr-2'} size={18} />
                {t('home.remoteSupport.teamviewer.downloadButton')}
              </a>
            </div>
            
            <div className="bg-neutral text-secondary p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src="https://sparwan.com/cdn/shop/articles/RustDesk.webp?v=1718634087&width=487" alt="RustDesk Logo" className={`h-10 w-10 ${isRTL ? 'ml-3' : 'mr-3'}`} />
                <h3 className="text-xl font-bold">RustDesk</h3>
              </div>
              <p className="text-secondary-light mb-4">
                {t('home.remoteSupport.rustdesk.description')}
              </p>
              <a 
                href="https://github.com/rustdesk/rustdesk/releases/download/1.3.8/rustdesk-1.3.8-x86_64.exe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-primary text-neutral px-4 py-2 rounded-md hover:bg-primary-dark transition-colors shadow-custom"
              >
                <Download className={isRTL ? 'ml-2' : 'mr-2'} size={18} />
                {t('home.remoteSupport.rustdesk.downloadButton')}
              </a>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/remote-support" className="inline-flex items-center bg-primary hover:bg-primary-dark text-neutral font-bold py-3 px-6 rounded-md transition-colors shadow-custom">
              {t('home.remoteSupport.moreLink')}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-neutral">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('home.cta.title')}</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            {t('home.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <Link to="/contact" className="bg-primary hover:bg-primary-dark text-neutral font-bold py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center shadow-custom">
              {t('home.cta.quoteButton')}
            </Link>
            <a 
              href="https://wa.me/213783328729" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-secondary-light text-neutral hover:bg-secondary font-bold py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center shadow-custom"
            >
              <svg className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {t('home.cta.whatsappButton')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;