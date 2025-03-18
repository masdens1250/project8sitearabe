import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Clock, Facebook, Instagram, Youtube, Laptop, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Set the document direction based on language
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language, isRTL]);

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-secondary text-neutral py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="flex items-center">
              <Phone size={16} className={`${isRTL ? 'ml-1' : 'mr-1'}`} />
              <span className="text-sm">{t('header.phone')}</span>
            </div>
            <div className="flex items-center">
              <Mail size={16} className={`${isRTL ? 'ml-1' : 'mr-1'}`} />
              <span className="text-sm">{t('header.email')}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="flex items-center">
              <Clock size={16} className={`${isRTL ? 'ml-1' : 'mr-1'}`} />
              <span className="text-sm">{t('header.hours')}</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Facebook size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram size={16} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Youtube size={16} />
              </a>
            </div>
            <LanguageSelector />
          </div>
        </div>
      </div>
      
      {/* Main header with logo and navigation */}
      <div className={`${isScrolled ? 'bg-neutral/95 backdrop-blur-sm shadow-md py-2' : 'bg-neutral shadow-md py-4'} transition-all duration-300`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Laptop className={`text-primary ${isRTL ? 'ml-2' : 'mr-2'}`} size={32} />
            <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
              <h1 className="text-2xl font-black text-secondary">NetScolaire-DZ</h1>
              <p className="text-xs text-secondary-light">{t('header.slogan')}</p>
            </div>
          </Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-secondary hover:text-primary">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 rtl:space-x-reverse">
              <li>
                <Link to="/" className={`relative py-2 px-1 font-medium ${location.pathname === '/' ? 'text-primary' : 'text-secondary-light'} hover:text-primary transition-colors group`}>
                  {t('header.menu.home')}
                  <span className={`absolute bottom-0 ${isRTL ? 'right-0' : 'left-0'} w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform ${location.pathname === '/' ? 'scale-x-100' : ''}`}></span>
                </Link>
              </li>
              <li>
                <Link to="/about" className={`relative py-2 px-1 font-medium ${location.pathname === '/about' ? 'text-primary' : 'text-secondary-light'} hover:text-primary transition-colors group`}>
                  {t('header.menu.about')}
                  <span className={`absolute bottom-0 ${isRTL ? 'right-0' : 'left-0'} w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform ${location.pathname === '/about' ? 'scale-x-100' : ''}`}></span>
                </Link>
              </li>
              <li>
                <Link to="/services" className={`relative py-2 px-1 font-medium ${location.pathname === '/services' ? 'text-primary' : 'text-secondary-light'} hover:text-primary transition-colors group`}>
                  {t('header.menu.services')}
                  <span className={`absolute bottom-0 ${isRTL ? 'right-0' : 'left-0'} w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform ${location.pathname === '/services' ? 'scale-x-100' : ''}`}></span>
                </Link>
              </li>
              <li>
                <Link to="/projects" className={`relative py-2 px-1 font-medium ${location.pathname === '/projects' ? 'text-primary' : 'text-secondary-light'} hover:text-primary transition-colors group`}>
                  {t('header.menu.projects')}
                  <span className={`absolute bottom-0 ${isRTL ? 'right-0' : 'left-0'} w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform ${location.pathname === '/projects' ? 'scale-x-100' : ''}`}></span>
                </Link>
              </li>
              <li>
                <Link to="/pricing" className={`relative py-2 px-1 font-medium ${location.pathname === '/pricing' ? 'text-primary' : 'text-secondary-light'} hover:text-primary transition-colors group`}>
                  {t('header.menu.pricing')}
                  <span className={`absolute bottom-0 ${isRTL ? 'right-0' : 'left-0'} w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform ${location.pathname === '/pricing' ? 'scale-x-100' : ''}`}></span>
                </Link>
              </li>
              <li>
                <Link to="/team" className={`relative py-2 px-1 font-medium ${location.pathname === '/team' ? 'text-primary' : 'text-secondary-light'} hover:text-primary transition-colors group`}>
                  {t('header.menu.team')}
                  <span className={`absolute bottom-0 ${isRTL ? 'right-0' : 'left-0'} w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform ${location.pathname === '/team' ? 'scale-x-100' : ''}`}></span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`relative py-2 px-1 font-medium ${location.pathname === '/contact' ? 'text-primary' : 'text-secondary-light'} hover:text-primary transition-colors group`}>
                  {t('header.menu.contact')}
                  <span className={`absolute bottom-0 ${isRTL ? 'right-0' : 'left-0'} w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform ${location.pathname === '/contact' ? 'scale-x-100' : ''}`}></span>
                </Link>
              </li>
              <li>
                <Link to="/remote-support" className="bg-primary hover:bg-primary-dark text-neutral py-2 px-4 rounded-md transition-colors">
                  {t('header.menu.remoteSupport')}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-neutral shadow-lg">
          <ul className={`py-2 px-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            <li className="py-2 border-b border-gray-100">
              <Link to="/" className={`block ${location.pathname === '/' ? 'text-primary' : 'text-secondary-light'}`}>
                {t('header.menu.home')}
              </Link>
            </li>
            <li className="py-2 border-b border-gray-100">
              <Link to="/about" className={`block ${location.pathname === '/about' ? 'text-primary' : 'text-secondary-light'}`}>
                {t('header.menu.about')}
              </Link>
            </li>
            <li className="py-2 border-b border-gray-100">
              <Link to="/services" className={`block ${location.pathname === '/services' ? 'text-primary' : 'text-secondary-light'}`}>
                {t('header.menu.services')}
              </Link>
            </li>
            <li className="py-2 border-b border-gray-100">
              <Link to="/projects" className={`block ${location.pathname === '/projects' ? 'text-primary' : 'text-secondary-light'}`}>
                {t('header.menu.projects')}
              </Link>
            </li>
            <li className="py-2 border-b border-gray-100">
              <Link to="/pricing" className={`block ${location.pathname === '/pricing' ? 'text-primary' : 'text-secondary-light'}`}>
                {t('header.menu.pricing')}
              </Link>
            </li>
            <li className="py-2 border-b border-gray-100">
              <Link to="/team" className={`block ${location.pathname === '/team' ? 'text-primary' : 'text-secondary-light'}`}>
                {t('header.menu.team')}
              </Link>
            </li>
            <li className="py-2 border-b border-gray-100">
              <Link to="/contact" className={`block ${location.pathname === '/contact' ? 'text-primary' : 'text-secondary-light'}`}>
                {t('header.menu.contact')}
              </Link>
            </li>
            <li className="py-2">
              <Link to="/remote-support" className="block bg-primary text-neutral py-2 px-4 rounded-md mt-2">
                {t('header.menu.remoteSupport')}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;