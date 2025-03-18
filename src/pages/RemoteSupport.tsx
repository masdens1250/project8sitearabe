import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, Monitor, Shield, CheckCircle, HelpCircle, AlertTriangle, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const RemoteSupport = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const [activeTab, setActiveTab] = useState('teamviewer');
  const [sessionId, setSessionId] = useState('');
  const [sessionPassword, setSessionPassword] = useState('');
  const [requestSent, setRequestSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!sessionId.trim()) {
      setError(isRTL ? 'الرجاء إدخال معرف الجلسة' : 'Veuillez entrer un ID de session');
      return;
    }
    
    if (!sessionPassword.trim()) {
      setError(isRTL ? 'الرجاء إدخال كلمة المرور' : 'Veuillez entrer un mot de passe');
      return;
    }
    
    setRequestSent(true);
    setError('');
    
    console.log('Demande d\'assistance envoyée:', {
      tool: activeTab,
      sessionId,
      sessionPassword
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{isRTL ? 'الدعم عن بعد' : 'Assistance à distance'}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            {isRTL 
              ? 'استفد من دعم فني سريع وفعال بفضل حلول الصيانة عن بعد.'
              : 'Bénéficiez d\'un support technique rapide et efficace grâce à nos solutions de télémaintenance.'}
          </p>
        </div>
      </section>

      {/* Remote Support Request Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">
              {isRTL ? 'طلب المساعدة عن بعد' : 'Demander une assistance à distance'}
            </h2>
            
            {requestSent ? (
              <div className="bg-green-100 text-green-700 p-4 rounded-md mb-6">
                <div className="flex items-start">
                  <CheckCircle className={`${isRTL ? 'ml-2' : 'mr-2'} mt-0.5 flex-shrink-0`} size={20} />
                  <div>
                    <p className="font-bold">
                      {isRTL ? 'تم إرسال الطلب بنجاح!' : 'Demande envoyée avec succès!'}
                    </p>
                    <p>
                      {isRTL 
                        ? 'سيتصل بك فني في أقرب وقت ممكن لمساعدتك.'
                        : 'Un technicien va vous contacter dans les plus brefs délais pour vous assister.'}
                    </p>
                    <button 
                      onClick={() => {
                        setRequestSent(false);
                        setSessionId('');
                        setSessionPassword('');
                      }}
                      className="mt-2 text-secondary hover:text-secondary-dark font-medium"
                    >
                      {isRTL ? 'إرسال طلب جديد' : 'Envoyer une nouvelle demande'}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <p className="text-gray-600 mb-4">
                    {isRTL
                      ? 'للاستفادة من المساعدة عن بعد، يرجى اتباع هذه الخطوات:'
                      : 'Pour bénéficier d\'une assistance à distance, veuillez suivre ces étapes :'}
                  </p>
                  <ol className={`list-decimal ${isRTL ? 'pr-5' : 'pl-5'} space-y-2 text-gray-600`}>
                    <li>
                      {isRTL
                        ? 'قم بتحميل وتثبيت أحد أدوات الصيانة عن بعد أدناه'
                        : 'Téléchargez et installez l\'un des outils de télémaintenance ci-dessous'}
                    </li>
                    <li>
                      {isRTL
                        ? 'قم بتشغيل التطبيق وتدوين معرف الجلسة وكلمة المرور'
                        : 'Lancez l\'application et notez l\'ID et le mot de passe de session'}
                    </li>
                    <li>
                      {isRTL
                        ? 'املأ النموذج أدناه بهذه المعلومات'
                        : 'Remplissez le formulaire ci-dessous avec ces informations'}
                    </li>
                    <li>
                      {isRTL
                        ? 'سيتصل بك فني في أقرب وقت ممكن لمساعدتك'
                        : 'Un technicien vous contactera rapidement pour vous assister'}
                    </li>
                  </ol>
                </div>
                
                {/* Tabs for choosing remote support tool */}
                <div className="mb-6">
                  <div className="flex border-b">
                    <button 
                      className={`px-4 py-2 font-medium ${activeTab === 'teamviewer' ? 'text-secondary border-b-2 border-secondary' : 'text-gray-500 hover:text-secondary'}`}
                      onClick={() => setActiveTab('teamviewer')}
                    >
                      TeamViewer
                    </button>
                    <button 
                      className={`px-4 py-2 font-medium ${activeTab === 'rustdesk' ? 'text-secondary border-b-2 border-secondary' : 'text-gray-500 hover:text-secondary'}`}
                      onClick={() => setActiveTab('rustdesk')}
                    >
                      RustDesk
                    </button>
                  </div>
                </div>
                
                {/* Download section */}
                <div className="mb-8 p-4 bg-gray-50 rounded-md">
                  {activeTab === 'teamviewer' ? (
                    <div className="flex items-center">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/9/90/TeamViewer_logo.svg" alt="TeamViewer Logo" className={`h-10 ${isRTL ? 'ml-4' : 'mr-4'}`} />
                      <div className="flex-grow">
                        <h3 className="font-bold mb-1">TeamViewer</h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {isRTL
                            ? 'برنامج صيانة عن بعد آمن'
                            : 'Logiciel de télémaintenance sécurisé'}
                        </p>
                      </div>
                      <a 
                        href="https://www.teamviewer.com/fr/telecharger/windows/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary-dark transition-colors"
                      >
                        <Download className={isRTL ? 'ml-2' : 'mr-2'} size={16} />
                        {isRTL ? 'تحميل' : 'Télécharger'}
                      </a>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <img src="https://sparwan.com/cdn/shop/articles/RustDesk.webp?v=1718634087&width=487" alt="RustDesk Logo" className={`h-10 w-10 ${isRTL ? 'ml-4' : 'mr-4'}`} />
                      <div className="flex-grow">
                        <h3 className="font-bold mb-1">RustDesk</h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {isRTL
                            ? 'بديل مفتوح المصدر للمساعدة عن بعد'
                            : 'Alternative open-source pour l\'assistance à distance'}
                        </p>
                      </div>
                      <a 
                        href="https://github.com/rustdesk/rustdesk/releases/download/1.3.8/rustdesk-1.3.8-x86_64.exe" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary-dark transition-colors"
                      >
                        <Download className={isRTL ? 'ml-2' : 'mr-2'} size={16} />
                        {isRTL ? 'تحميل' : 'Télécharger'}
                      </a>
                    </div>
                  )}
                </div>
                
                {/* Form */}
                {error && (
                  <div className="bg-red-100 text-red-700 p-3 rounded-md mb-4">
                    <div className="flex items-center">
                      <AlertTriangle className={`${isRTL ? 'ml-2' : 'mr-2'} flex-shrink-0`} size={18} />
                      <p>{error}</p>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="sessionId" className="block text-sm font-medium text-gray-700 mb-1">
                      {isRTL 
                        ? `معرف جلسة ${activeTab === 'teamviewer' ? 'TeamViewer' : 'RustDesk'} *`
                        : `ID de session ${activeTab === 'teamviewer' ? 'TeamViewer' : 'RustDesk'} *`}
                    </label>
                    <input
                      type="text"
                      id="sessionId"
                      value={sessionId}
                      onChange={(e) => setSessionId(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder={activeTab === 'teamviewer' ? 'Ex: 123 456 789' : 'Ex: 123456789'}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="sessionPassword" className="block text-sm font-medium text-gray-700 mb-1">
                      {isRTL ? 'كلمة المرور *' : 'Mot de passe *'}
                    </label>
                    <input
                      type="text"
                      id="sessionPassword"
                      value={sessionPassword}
                      onChange={(e) => setSessionPassword(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="Ex: abc123"
                      required
                    />
                  </div>
                  
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-6 rounded-md transition-colors inline-flex items-center"
                    >
                      {isRTL ? 'طلب المساعدة' : 'Demander une assistance'}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {isRTL ? 'كيف يعمل' : 'Comment ça fonctionne'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isRTL
                ? 'تتيح لك خدمة الصيانة عن بعد الاستفادة من المساعدة التقنية السريعة والفعالة دون الحاجة إلى التنقل.'
                : 'Notre service de télémaintenance vous permet de bénéficier d\'une assistance technique rapide et efficace sans déplacement.'}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-secondary-light"></div>
              
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className={`md:w-1/2 ${isRTL ? 'md:pl-12 md:text-right' : 'md:pr-12 md:text-left'}`}>
                    <h3 className="text-xl font-bold mb-2">
                      {isRTL ? 'تحميل الأداة' : 'Téléchargez l\'outil'}
                    </h3>
                    <p className="text-gray-600">
                      {isRTL
                        ? 'قم بتحميل وتثبيت TeamViewer أو RustDesk على جهاز الكمبيوتر الخاص بك باستخدام الروابط أعلاه.'
                        : 'Téléchargez et installez TeamViewer ou RustDesk sur votre ordinateur en utilisant les liens ci-dessus.'}
                    </p>
                  </div>
                  <div className="md:w-12 flex justify-center my-4 md:my-0">
                    <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xl z-10">1</div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
                
                {/* Step 2 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2"></div>
                  <div className="md:w-12 flex justify-center my-4 md:my-0">
                    <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xl z-10">2</div>
                  </div>
                  <div className={`md:w-1/2 ${isRTL ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <h3 className="text-xl font-bold mb-2">
                      {isRTL ? 'ملء النموذج' : 'Remplissez le formulaire'}
                    </h3>
                    <p className="text-gray-600">
                      {isRTL
                        ? 'أدخل معرف وكلمة مرور الجلسة التي تم إنشاؤها بواسطة التطبيق في النموذج أعلاه.'
                        : 'Entrez l\'ID et le mot de passe générés par l\'application dans le formulaire ci-dessus.'}
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className={`md:w-1/2 ${isRTL ? 'md:pl-12 md:text-right' : 'md:pr-12 md:text-left'}`}>
                    <h3 className="text-xl font-bold mb-2">
                      {isRTL ? 'انتظر مكالمتنا' : 'Attendez notre appel'}
                    </h3>
                    <p className="text-gray-600">
                      {isRTL
                        ? 'سيتصل بك فني في أقرب وقت ممكن لتأكيد طلبك وبدء جلسة المساعدة.'
                        : 'Un technicien vous contactera rapidement pour confirmer votre demande et commencer la session d\'assistance.'}
                    </p>
                  </div>
                  <div className="md:w-12 flex justify-center my-4 md:my-0">
                    <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xl z-10">3</div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
                
                {/* Step 4 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2"></div>
                  <div className="md:w-12 flex justify-center my-4 md:my-0">
                    <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xl z-10">4</div>
                  </div>
                  <div className={`md:w-1/2 ${isRTL ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <h3 className="text-xl font-bold mb-2">
                      {isRTL ? 'حل المشكلة' : 'Résolution du problème'}
                    </h3>
                    <p className="text-gray-600">
                      {isRTL
                        ? 'يتصل الفني بجهاز الكمبيوتر الخاص بك ويحل مشكلتك في الوقت الفعلي، مع شرح الإجراءات المتخذة.'
                        : 'Notre technicien se connecte à votre ordinateur et résout votre problème en temps réel, tout en vous expliquant les actions entreprises.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {isRTL ? 'الأمن والخصوصية' : 'Sécurité et confidentialité'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isRTL
                ? 'أمن بياناتك هو أولويتنا. إليك كيف نحمي خصوصيتك أثناء جلسات الصيانة عن بعد.'
                : 'La sécurité de vos données est notre priorité. Voici comment nous protégeons votre confidentialité lors des sessions de télémaintenance.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-secondary-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">
                {isRTL ? 'اتصال آمن' : 'Connexion sécurisée'}
              </h3>
              <p className="text-gray-600 text-center">
                {isRTL
                  ? 'جميع الاتصالات مشفرة من طرف إلى طرف لضمان سرية بياناتك.'
                  : 'Toutes les connexions sont chiffrées de bout en bout pour garantir la confidentialité de vos données.'}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-secondary-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">
                {isRTL ? 'تحكم كامل' : 'Contrôle total'}
              </h3>
              <p className="text-gray-600 text-center">
                {isRTL
                  ? 'تحتفظ بالتحكم الكامل في الجلسة ويمكنك إنهاؤها في أي وقت إذا لزم الأمر.'
                  : 'Vous gardez le contrôle total de la session et pouvez l\'interrompre à tout moment si nécessaire.'}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-secondary-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">
                {isRTL ? 'الشفافية' : 'Transparence'}
              </h3>
              <p className="text-gray-600 text-center">
                {isRTL
                  ? 'يمكنك رؤية جميع الإجراءات التي يقوم بها الفني في الوقت الفعلي على شاشتك.'
                  : 'Vous voyez toutes les actions effectuées par notre technicien en temps réel sur votre écran.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {isRTL ? 'الأسئلة الشائعة' : 'Questions fréquentes'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isRTL
                ? 'اعثر على إجابات للأسئلة الأكثر شيوعًا حول خدمة الصيانة عن بعد.'
                : 'Retrouvez les réponses aux questions les plus courantes concernant notre service de télémaintenance.'}
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <HelpCircle className={`text-secondary ${isRTL ? 'ml-2' : 'mr-2'}`} size={20} />
                {isRTL
                  ? 'هل الصيانة عن بعد مشمولة في عقد الصيانة؟'
                  : 'La télémaintenance est-elle incluse dans le contrat de maintenance ?'}
              </h3>
              <p className="text-gray-600">
                {isRTL
                  ? 'نعم، الصيانة عن بعد مشمولة في عقد الصيانة السنوي. بالنسبة للمؤسسات التي ليست لديها عقد، يتم تحصيل رسوم على كل تدخل.'
                  : 'Oui, la télémaintenance est incluse dans notre contrat de maintenance annuel. Pour les établissements qui ne sont pas sous contrat, ce service est facturé à l\'intervention.'}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <HelpCircle className={`text-secondary ${isRTL ? 'ml-2' : 'mr-2'}`} size={20} />
                {isRTL
                  ? 'ما هي أنواع المشاكل التي يمكن حلها عن بعد؟'
                  : 'Quels types de problèmes peuvent être résolus à distance ?'}
              </h3>
              <p className="text-gray-600">
                {isRTL
                  ? 'تسمح الصيانة عن بعد بحل العديد من المشاكل البرمجية: تكوين البرامج، حل مشاكل نظام التشغيل، إزالة الفيروسات والبرامج الضارة، تحديث برامج التشغيل، إلخ. ومع ذلك، تتطلب المشاكل المادية عادةً تدخلاً في الموقع.'
                  : 'La télémaintenance permet de résoudre de nombreux problèmes logiciels : configuration de logiciels, résolution de problèmes de système d\'exploitation, suppression de virus et logiciels malveillants, mise à jour de pilotes, etc. Cependant, les problèmes matériels nécessitent généralement une intervention sur site.'}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <HelpCircle className={`text-secondary ${isRTL ? 'ml-2' : 'mr-2'}`} size={20} />
                {isRTL
                  ? 'هل يجب أن أكون حاضراً أثناء جلسة الصيانة عن بعد؟'
                  : 'Dois-je être présent pendant la session de télémaintenance ?'}
              </h3>
              <p className="text-gray-600">
                {isRTL
                  ? 'من الأفضل أن تكون حاضراً في بداية الجلسة لشرح المشكلة وتوفير الوصول اللازم. يمكنك بعد ذلك البقاء لمراقبة الإجراءات المتخذة أو الانصراف إلى أعمالك، حسب تفضيلك.'
                  : 'Il est préférable que vous soyez présent au début de la session pour expliquer le problème et fournir les accès nécessaires. Vous pouvez ensuite rester pour observer les actions effectuées ou vaquer à vos occupations, selon votre préférence.'}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <HelpCircle className={`text-secondary ${isRTL ? 'ml-2' : 'mr-2'}`} size={20} />
                {isRTL
                  ? 'ما هو الفرق بين TeamViewer و RustDesk؟'
                  : 'Quelle est la différence entre TeamViewer et RustDesk ?'}
              </h3>
              <p className="text-gray-600">
                {isRTL
                  ? 'TeamViewer هو برنامج تجاري يستخدم على نطاق واسع، بينما RustDesk هو بديل مجاني مفتوح المصدر. كلاهما يوفر وظائف مماثلة، لكن RustDesk لا يتطلب تسجيلاً ويمكن أن يكون خياراً جيداً إذا كنت تفضل الحلول مفتوحة المصدر.'
                  : 'TeamViewer est un logiciel commercial largement utilisé, tandis que RustDesk est une alternative open-source gratuite. Les deux offrent des fonctionnalités similaires, mais RustDesk ne nécessite pas d\'inscription et peut être une bonne option si vous préférez les solutions open-source.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Warning */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-yellow-50 border-l-4 border-primary p-6 rounded-md">
            <div className="flex items-start">
              <AlertTriangle className={`text-primary ${isRTL ? 'ml-3' : 'mr-3'} mt-1 flex-shrink-0`} size={24} />
              <div>
                <h3 className="text-xl font-bold text-primary-dark mb-2">
                  {isRTL ? 'هام' : 'Important'}
                </h3>
                <p className="text-gray-700">
                  {isRTL
                    ? 'لأسباب أمنية، لا تشارك أبداً معرفات TeamViewer أو RustDesk الخاصة بك مع أشخاص مجهولين أو غير مصرح لهم. لن تطلب NetScolaire-DZ أبداً معرفاتك عبر البريد الإلكتروني أو الهاتف دون أن تكون قد طلبت تدخلاً مسبقاً.'
                    : 'Pour des raisons de sécurité, ne partagez jamais vos identifiants TeamViewer ou RustDesk avec des personnes inconnues ou non autorisées. NetScolaire-DZ ne vous demandera jamais vos identifiants par email ou par téléphone sans que vous n\'ayez préalablement sollicité une intervention.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {isRTL ? 'بحاجة إلى مساعدة تقنية؟' : 'Besoin d\'assistance technique ?'}
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            {isRTL
              ? 'قم بتحميل أحد أدوات الصيانة عن بعد واتصل بنا للحصول على مساعدة سريعة وفعالة.'
              : 'Téléchargez l\'un de nos outils de télémaintenance et contactez-nous pour bénéficier d\'une assistance rapide et efficace.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <Link to="/contact" className="bg-white text-secondary hover:bg-gray-100 font-bold py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center">
              {isRTL ? 'اتصل بنا' : 'Nous contacter'}
            </Link>
            <a 
              href="tel:+213783328729" 
              className="bg-transparent hover:bg-secondary-dark border-2 border-white py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center"
            >
              <Phone className={isRTL ? 'ml-2' : 'mr-2'} size={18} />
              {isRTL ? 'اتصل الآن' : 'Appeler maintenant'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RemoteSupport;