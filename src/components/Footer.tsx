import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Laptop } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <footer className="bg-secondary text-neutral pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <div className="flex items-center mb-4">
              <Laptop className={`text-primary ${isRTL ? 'ml-2' : 'mr-2'}`} size={24} />
              <h3 className="text-xl font-bold text-neutral">NetScolaire-DZ</h3>
            </div>
            <p className="text-neutral-dark mb-4">
              {t('footer.about')}
            </p>
            <div className="flex space-x-3 rtl:space-x-reverse">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-secondary-light p-2 rounded-full hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-secondary-light p-2 rounded-full hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-secondary-light p-2 rounded-full hover:bg-primary transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h3 className="text-xl font-bold mb-4 text-neutral">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-dark hover:text-primary transition-colors">
                  {t('header.menu.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-dark hover:text-primary transition-colors">
                  {t('header.menu.about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-dark hover:text-primary transition-colors">
                  {t('header.menu.services')}
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-neutral-dark hover:text-primary transition-colors">
                  {t('header.menu.projects')}
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-neutral-dark hover:text-primary transition-colors">
                  {t('header.menu.pricing')}
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-neutral-dark hover:text-primary transition-colors">
                  {t('header.menu.team')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-dark hover:text-primary transition-colors">
                  {t('header.menu.contact')}
                </Link>
              </li>
              <li>
                <Link to="/remote-support" className="text-neutral-dark hover:text-primary transition-colors">
                  {t('header.menu.remoteSupport')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h3 className="text-xl font-bold mb-4 text-neutral">{t('footer.ourServices')}</h3>
            <ul className="space-y-2">
              <li className="text-neutral-dark hover:text-primary transition-colors">
                <Link to="/services">{t('footer.services.maintenance')}</Link>
              </li>
              <li className="text-neutral-dark hover:text-primary transition-colors">
                <Link to="/services">{t('footer.services.network')}</Link>
              </li>
              <li className="text-neutral-dark hover:text-primary transition-colors">
                <Link to="/remote-support">{t('footer.services.remote')}</Link>
              </li>
              <li className="text-neutral-dark hover:text-primary transition-colors">
                <Link to="/services">{t('footer.services.repair')}</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h3 className="text-xl font-bold mb-4 text-neutral">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className={`text-primary ${isRTL ? 'ml-2 mt-1' : 'mr-2 mt-1'} flex-shrink-0`} />
                <span className="text-neutral-dark">{t('footer.address')}</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className={`text-primary ${isRTL ? 'ml-2' : 'mr-2'} flex-shrink-0`} />
                <span className="text-neutral-dark">{t('header.phone')}</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className={`text-primary ${isRTL ? 'ml-2' : 'mr-2'} flex-shrink-0`} />
                <span className="text-neutral-dark">{t('header.email')}</span>
              </li>
              <li className="flex items-center">
                <Clock size={18} className={`text-primary ${isRTL ? 'ml-2' : 'mr-2'} flex-shrink-0`} />
                <span className="text-neutral-dark">{t('header.hours')}</span>
              </li>
            </ul>
            <a 
              href="https://wa.me/213783328729" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`mt-4 inline-flex items-center bg-primary text-neutral px-4 py-2 rounded-md hover:bg-primary-dark transition-colors`}
            >
              <svg className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {t('footer.contactWhatsapp')}
            </a>
          </div>
        </div>
        
        <div className="border-t border-secondary-light mt-10 pt-6 text-center">
          <p className="text-neutral-dark">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;