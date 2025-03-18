import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, X, HelpCircle, AlertTriangle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Pricing = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div className={isRTL ? 'text-right' : 'text-left'}>
      {/* Hero Section */}
      <section className="bg-[#2c3e50] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{t('pricing.hero.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            {t('pricing.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Main Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Maintenance Contract */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
              <div className="bg-secondary text-white p-6 text-center">
                <h2 className="text-2xl font-bold">{t('pricing.maintenanceContract.title')}</h2>
                <div className="mt-4 flex items-center justify-center">
                  <span className="text-4xl font-bold">{isRTL ? '35700 دج/سنة' : '35700 Dzd/an'}</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className={`text-primary ${isRTL ? 'ml-3' : 'mr-3'} mt-1 flex-shrink-0`} size={20} />
                    <span className="font-medium">{t('pricing.maintenanceContract.features.visits')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className={`text-primary ${isRTL ? 'ml-3' : 'mr-3'} mt-1 flex-shrink-0`} size={20} />
                    <span className="font-medium">{t('pricing.maintenanceContract.features.report')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className={`text-primary ${isRTL ? 'ml-3' : 'mr-3'} mt-1 flex-shrink-0`} size={20} />
                    <span className="font-medium">{t('pricing.maintenanceContract.features.remote')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className={`text-primary ${isRTL ? 'ml-3' : 'mr-3'} mt-1 flex-shrink-0`} size={20} />
                    <span className="font-medium">{t('pricing.maintenanceContract.features.preventive')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className={`text-primary ${isRTL ? 'ml-3' : 'mr-3'} mt-1 flex-shrink-0`} size={20} />
                    <span className="font-medium">{t('pricing.maintenanceContract.features.support')}</span>
                  </li>
                </ul>
                <div className="mt-8 text-center">
                  <Link to="/contact" className="inline-block bg-secondary hover:bg-secondary-light text-white font-bold py-3 px-6 rounded-md transition-colors">
                    {t('pricing.maintenanceContract.cta')}
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Network Installation */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-secondary text-white p-6 text-center">
                <h2 className="text-2xl font-bold">{t('pricing.networkInstallation.title')}</h2>
                <div className="mt-4 flex items-center justify-center">
                  <span className="text-xl font-bold">{t('pricing.networkInstallation.price')}</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6 text-center">
                  {t('pricing.networkInstallation.description')}
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className={`text-primary ${isRTL ?'ml-3' : 'mr-3'} mt-1 flex-shrink-0`} size={20} />
                    <span className="font-medium">{t('pricing.networkInstallation.features.study')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className={`text-primary ${isRTL ? 'ml-3' : 'mr-3'} mt-1 flex-shrink-0`} size={20} />
                    <span className="font-medium">{t('pricing.networkInstallation.features.quote')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className={`text-primary ${isRTL ? 'ml-3' : 'mr-3'} mt-1 flex-shrink-0`} size={20} />
                    <span className="font-medium">{t('pricing.networkInstallation.features.installation')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className={`text-primary ${isRTL ? 'ml-3' : 'mr-3'} mt-1 flex-shrink-0`} size={20} />
                    <span className="font-medium">{t('pricing.networkInstallation.features.config')}</span>
                  </li>
                </ul>
                <div className="mt-8 text-center">
                  <Link to="/contact" className="inline-block bg-secondary hover:bg-secondary-light text-white font-bold py-3 px-6 rounded-md transition-colors">
                    {t('pricing.networkInstallation.cta')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-md">
            <div className="flex items-start">
              <AlertTriangle className={`text-yellow-500 ${isRTL ? 'ml-3' : 'mr-3'} mt-1 flex-shrink-0`} size={24} />
              <div>
                <h3 className="text-xl font-bold text-yellow-700 mb-2">{t('pricing.notice.title')}</h3>
                <p className="text-gray-700">
                  {t('pricing.notice.content')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('pricing.comparison.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('pricing.comparison.subtitle')}
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="py-4 px-6 text-left">{t('header.menu.services')}</th>
                  <th className="py-4 px-6 text-center">{t('pricing.maintenanceContract.title')}</th>
                  <th className="py-4 px-6 text-center">{t('pricing.networkInstallation.title')}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">{t('pricing.comparison.features.preventiveMaintenance')}</td>
                  <td className="py-4 px-6 text-center"><CheckCircle className="text-primary mx-auto" size={20} /></td>
                  <td className="py-4 px-6 text-center"><X className="text-red-500 mx-auto" size={20} /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">{t('pricing.comparison.features.curativeMaintenance')}</td>
                  <td className="py-4 px-6 text-center"><CheckCircle className="text-primary mx-auto" size={20} /></td>
                  <td className="py-4 px-6 text-center"><X className="text-red-500 mx-auto" size={20} /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">{t('pricing.comparison.features.interventionReport')}</td>
                  <td className="py-4 px-6 text-center"><CheckCircle className="text-primary mx-auto" size={20} /></td>
                  <td className="py-4 px-6 text-center"><CheckCircle className="text-primary mx-auto" size={20} /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">{t('pricing.comparison.features.remoteMaintenance')}</td>
                  <td className="py-4 px-6 text-center"><CheckCircle className="text-primary mx-auto" size={20} /></td>
                  <td className="py-4 px-6 text-center"><X className="text-red-500 mx-auto" size={20} /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">{t('pricing.comparison.features.phoneSupport')}</td>
                  <td className="py-4 px-6 text-center"><CheckCircle className="text-primary mx-auto" size={20} /></td>
                  <td className="py-4 px-6 text-center"><CheckCircle className="text-primary mx-auto" size={20} /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">{t('pricing.comparison.features.interventionDelay')}</td>
                  <td className="py-4 px-6 text-center"><span className="font-medium text-primary">{t('pricing.comparison.values.delay24h')}</span></td>
                  <td className="py-4 px-6 text-center"><span className="font-medium text-primary">{t('pricing.comparison.values.planned')}</span></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">{t('pricing.comparison.features.purchaseOrder')}</td>
                  <td className="py-4 px-6 text-center"><CheckCircle className="text-primary mx-auto" size={20} /></td>
                  <td className="py-4 px-6 text-center"><CheckCircle className="text-primary mx-auto" size={20} /></td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">{t('pricing.comparison.features.price')}</td>
                  <td className="py-4 px-6 text-center"><span className="font-medium">{isRTL ? '35700 دج/سنة' : '35700 Dzd/an'}</span></td>
                  <td className="py-4 px-6 text-center"><span className="font-medium">{t('pricing.comparison.values.onQuote')}</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('pricing.faq.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('pricing.faq.subtitle')}
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <HelpCircle className={`text-primary ${isRTL ? 'ml-2' : 'mr-2'}`} size={20} />
                {t('pricing.faq.questions.contract.question')}
              </h3>
              <p className="text-gray-600">
                {t('pricing.faq.questions.contract.answer')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <HelpCircle className={`text-primary ${isRTL ? 'ml-2' : 'mr-2'}`} size={20} />
                {t('pricing.faq.questions.networkPrice.question')}
              </h3>
              <p className="text-gray-600">
                {t('pricing.faq.questions.networkPrice.answer')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <HelpCircle className={`text-primary ${isRTL ? 'ml-2' : 'mr-2'}`} size={20} />
                {t('pricing.faq.questions.contractCustomization.question')}
              </h3>
              <p className="text-gray-600">
                {t('pricing.faq.questions.contractCustomization.answer')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <HelpCircle className={`text-primary ${isRTL ? 'ml-2' : 'mr-2'}`} size={20} />
                {t('pricing.faq.questions.extraVisits.question')}
              </h3>
              <p className="text-gray-600">
                {t('pricing.faq.questions.extraVisits.answer')}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <HelpCircle className={`text-primary ${isRTL ? 'ml-2' : 'mr-2'}`} size={20} />
                {t('pricing.faq.questions.preventiveMethods.question')}
              </h3>
              <p className="text-gray-600">
                {t('pricing.faq.questions.preventiveMethods.answer')}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <HelpCircle className={`text-primary ${isRTL ? 'ml-2' : 'mr-2'}`} size={20} />
                {t('pricing.faq.questions.securityBenefits.question')}
              </h3>
              <p className="text-gray-600">
                {t('pricing.faq.questions.securityBenefits.answer')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('pricing.cta.title')}</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            {t('pricing.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <Link to="/contact" className="bg-white text-secondary hover:bg-gray-100 font-bold py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center">
              {t('pricing.cta.contact')}
            </Link>
            <a 
              href="https://wa.me/213783328729" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-secondary-light border-2 border-white py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center"
            >
              <svg className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {t('pricing.cta.whatsapp')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;