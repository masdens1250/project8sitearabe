import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
  const { i18n, t } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    // Update the document direction based on language
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
  };

  return (
    <div className="flex items-center space-x-2 rtl:space-x-reverse">
      <button
        onClick={() => changeLanguage('fr')}
        className={`flex items-center px-2 py-1 rounded ${i18n.language === 'fr' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
      >
        <span className="mr-1 rtl:ml-1 rtl:mr-0">🇫🇷</span>
        <span className="text-xs">{t('languageSelector.fr')}</span>
      </button>
      <button
        onClick={() => changeLanguage('ar')}
        className={`flex items-center px-2 py-1 rounded ${i18n.language === 'ar' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
      >
        <span className="mr-1 rtl:ml-1 rtl:mr-0">🇩🇿</span>
        <span className="text-xs">{t('languageSelector.ar')}</span>
      </button>
    </div>
  );
};

export default LanguageSelector;