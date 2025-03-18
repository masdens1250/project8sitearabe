import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, X, HelpCircle, AlertTriangle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: isRTL ? "متوسطة بن عودة بن زرجب" : "CEM Benaouda Benzerdjeb",
      description: isRTL 
        ? "تركيب كامل لشبكة معلوماتية وإنشاء عقد صيانة سنوي."
        : "Installation complète d'un réseau informatique et mise en place d'un contrat de maintenance annuel.",
      image: "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      services: isRTL 
        ? ["تركيب شبكة", "صيانة معلوماتية", "تجهيز قاعة الإعلام الآلي"]
        : ["Installation de réseau", "Maintenance informatique", "Installation de salle informatique"],
      year: 2009,
      director: isRTL ? "السيد بن شنديخ نور الدين" : "Mr Benchendikh Noreddine"
    },
    {
      id: 2,
      title: isRTL ? "متوسطة بلعيد توفيق" : "CEM Belaid Toufik",
      description: isRTL
        ? "تجديد حظيرة الحواسيب وتركيب نظام الصيانة عن بعد."
        : "Rénovation du parc informatique et installation d'un système de télémaintenance.",
      image: "https://images.unsplash.com/photo-1521106047354-5a5b85e819ee?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      services: isRTL
        ? ["تجديد المعدات المعلوماتية", "تركيب نظام الصيانة عن بعد", "تجهيز قاعة الإعلام الآلي"]
        : ["Rénovation informatique", "Installation de télémaintenance", "Installation de salle informatique"],
      year: 2010,
      director: isRTL ? "السيد عفيف بوقدبة" : "Mr Affif Bouguedba"
    },
    {
      id: 3,
      title: isRTL ? "متوسطة العربي التبسي" : "CEM Laarbi Tebessi",
      description: isRTL
        ? "نشر شبكة واي فاي تغطي كامل المؤسسة وتأمين الوصول."
        : "Déploiement d'un réseau Wi-Fi couvrant l'ensemble de l'établissement et sécurisation des accès.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      services: isRTL
        ? ["تركيب الواي فاي", "تأمين الشبكة", "تجهيز قاعة الإعلام الآلي"]
        : ["Installation Wi-Fi", "Sécurisation réseau", "Installation de salle informatique"],
      year: 2009,
      director: isRTL ? "السيد ولد علي" : "Mr Ould ALI"
    },
    {
      id: 6,
      title: isRTL ? "متوسطة بوطشاشة" : "CEM Boutchatcha",
      description: isRTL
        ? "تركيب نظام النسخ الاحتياطي التلقائي وتدريب الطاقم الإداري."
        : "Installation d'un système de sauvegarde automatique et formation du personnel administratif.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      services: isRTL
        ? ["نظام النسخ الاحتياطي", "تجهيز قاعة الإعلام الآلي", "تأمين البيانات"]
        : ["Système de sauvegarde", "Installation de salle informatique", "Sécurisation des données"],
      year: 2014,
      director: isRTL ? "السيدة خديجة بن حلو" : "Mme Khadidja Benhalou"
    },
    {
      id: 7,
      title: isRTL ? "متوسطة عبد المجيد مزيان" : "CEM Abdelmadjid Meziane",
      description: isRTL
        ? "تحديث شامل للبنية التحتية للشبكة وتركيب نظام المراقبة."
        : "Modernisation complète de l'infrastructure réseau et mise en place d'un système de surveillance.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      services: isRTL
        ? ["تحديث الشبكة", "نظام المراقبة", "تجهيز قاعة الإعلام الآلي"]
        : ["Modernisation réseau", "Système de surveillance", "Installation de salle informatique"],
      year: 2010,
      director: isRTL ? "السيد محمدي عبد القادر" : "Mr Mhamdi Abdelkader"
    },
    {
      id: 5,
      title: isRTL ? "متوسطة ابن سينا" : "CEM Ibn Sina",
      description: isRTL
        ? "تدقيق شامل للبنية التحتية القائمة وتحديث الشبكة المعلوماتية."
        : "Audit complet de l'infrastructure existante et mise à niveau du réseau informatique.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      services: isRTL
        ? ["تدقيق معلوماتي", "تحديث الشبكة", "تجهيز قاعة الإعلام الآلي"]
        : ["Audit informatique", "Mise à niveau réseau", "Installation de salle informatique"],
      year: 2014,
      director: isRTL ? "السيدة خديجة بن حلو" : "Mme Khadidja Benhalou"
    },
    {
      id: 4,
      title: isRTL ? "متوسطة زدور محمد" : "CEM Zedour Mohamed",
      description: isRTL
        ? "إنشاء قاعة إعلام آلي كاملة مع 20 جهاز كمبيوتر وخادم مركزي."
        : "Mise en place d'une salle informatique complète avec 20 postes et serveur central.",
      image: "https://images.unsplash.com/photo-1529961172671-d48e8280f846?q=80&w=1427&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      services: isRTL
        ? ["تجهيز قاعة الإعلام الآلي", "إعداد الخادم", "تركيب الشبكة"]
        : ["Installation de salle informatique", "Configuration serveur", "Installation de réseau"],
      year: 2011,
      director: isRTL ? "السيد بلعربي عبد القادر" : "Mr Belarbi Abdelkader"
    }
  ];

  // Fonction pour organiser les projets dans l'ordre souhaité
  const organizeProjects = () => {
    // Créer un tableau pour stocker les projets dans l'ordre souhaité
    const organizedProjects = [];
    
    // Trouver les projets spécifiques
    const meziane = projects.find(p => p.id === 7);
    const zedour = projects.find(p => p.id === 4);
    
    // Filtrer les autres projets (exclure Meziane et Zedour)
    const otherProjects = projects.filter(p => p.id !== 7 && p.id !== 4);
    
    // Ajouter les 3 premiers projets
    organizedProjects.push(otherProjects[0], otherProjects[1], otherProjects[2]);
    
    // Ajouter Meziane en 4ème position
    if (meziane) organizedProjects.push(meziane);
    
    // Ajouter les 2 projets suivants
    organizedProjects.push(otherProjects[3], otherProjects[4]);
    
    // Ajouter Zedour en dernière position (position centrale)
    if (zedour) organizedProjects.push(zedour);
    
    return organizedProjects;
  };

  return (
    <div className={isRTL ? 'text-right' : 'text-left'}>
      {/* Hero Section */}
      <section className="bg-[#2c3e50] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{isRTL ? 'إنجازاتنا' : 'Nos Réalisations'}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            {isRTL
              ? 'اكتشف المؤسسات التعليمية التي استفادت من خدماتنا في منطقة مستغانم.'
              : 'Découvrez les établissements scolaires qui ont bénéficié de nos prestations dans la région de Mostaganem.'}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {organizeProjects().slice(0, 6).map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                    <span className="text-sm bg-primary-light text-white py-1 px-2 rounded">{project.year}</span>
                  </div>
                  <p className="text-gray-600 mb-2">{project.description}</p>
                  <p className="text-gray-700 mb-4">
                    <span className="text-primary font-medium">{isRTL ? 'المدير:' : 'Directeur:'}</span>
                    <span className="text-primary font-medium"> {project.director}</span>
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-800">
                      {isRTL ? 'الخدمات المقدمة:' : 'Services fournis :'}
                    </h4>
                    <ul className="space-y-1">
                      {project.services.map((service, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className={`text-primary ${isRTL ? 'ml-2' : 'mr-2'} mt-1 flex-shrink-0`} size={14} />
                          <span className="text-sm text-gray-600">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Zedour Mohamed au centre */}
          <div className="mt-8 flex justify-center">
            {organizeProjects().slice(6).map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300 overflow-hidden max-w-md">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                    <span className="text-sm bg-primary-light text-white py-1 px-2 rounded">{project.year}</span>
                  </div>
                  <p className="text-gray-600 mb-2">{project.description}</p>
                  <p className="text-gray-700 mb-4">
                    <span className="text-primary font-medium">{isRTL ? 'المدير:' : 'Directeur:'}</span>
                    <span className="text-primary font-medium"> {project.director}</span>
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-800">
                      {isRTL ? 'الخدمات المقدمة:' : 'Services fournis :'}
                    </h4>
                    <ul className="space-y-1">
                      {project.services.map((service, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className={`text-primary ${isRTL ? 'ml-2' : 'mr-2'} mt-1 flex-shrink-0`} size={14} />
                          <span className="text-sm text-gray-600">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evolution Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">
              {isRTL ? 'من حارون سوليوشن إلى نت سكولير-دي زد' : 'De HarounSolution à NetScolaire-DZ'}
            </h2>
            <div className="mb-8">
              <p className="text-gray-700 mb-4">
                {isRTL
                  ? 'تطورت شركتنا على مر السنين لتلبية الاحتياجات المحددة للمؤسسات التعليمية في منطقة مستغانم. ما بدأ تحت اسم حارون سوليوشن في عام 2011 تحول إلى نت سكولير-دي زد، كيان مكرس بالكامل للقطاع التعليمي.'
                  : 'Notre entreprise a évolué au fil des années pour mieux répondre aux besoins spécifiques des établissements scolaires de la région de Mostaganem. Ce qui a commencé sous le nom de HarounSolution en 2011 s\'est transformé en NetScolaire-DZ, une entité entièrement dédiée au secteur éducatif.'}
              </p>
              <p className="text-gray-700 mb-4">
                {isRTL
                  ? 'يعكس هذا التطور التزامنا المتزايد بتحسين البنية التحتية المعلوماتية في المدارس ورغبتنا في تقديم خدمات أكثر تكيفاً مع التحديات المحددة للوسط التعليمي.'
                  : 'Cette évolution reflète notre engagement croissant envers l\'amélioration des infrastructures informatiques dans les écoles et notre volonté de proposer des services toujours plus adaptés aux défis spécifiques du milieu éducatif.'}
              </p>
              <p className="text-gray-700">
                {isRTL
                  ? 'نحن فخورون بملاحظة أن ولاء عملائنا قد تبعنا في هذا الانتقال، مما يشهد على الجودة المستمرة لخدماتنا وعلاقة الثقة التي تمكنا من إنشائها مع المؤسسات التعليمية في المنطقة بين عامي 2011 و 2018.'
                  : 'Nous sommes fiers de constater que la fidélité de nos clients nous a suivis dans cette transition, témoignant de la qualité constante de nos services et de la relation de confiance que nous avons su établir avec les établissements scolaires de la région entre 2011 et 2018.'}
              </p>
            </div>
            
            <div className="bg-primary-light/10 p-6 rounded-lg border-l-4 border-primary">
              <h3 className="text-xl font-bold mb-3 text-primary-dark">
                {isRTL ? 'التزامنا تجاه التعليم' : 'Notre engagement envers l\'éducation'}
              </h3>
              <p className="text-gray-700">
                {isRTL
                  ? 'في نت سكولير-دي زد، نؤمن بقوة أن البنية التحتية المعلوماتية الموثوقة والفعالة ضرورية لتقديم تعليم عالي الجودة في العصر الرقمي. مهمتنا هي تمكين المؤسسات التعليمية من التركيز على مهمتها الأساسية - التعليم - من خلال ضمان بيئة تكنولوجية مثالية.'
                  : 'Chez NetScolaire-DZ, nous croyons fermement que des infrastructures informatiques fiables et performantes sont essentielles pour offrir une éducation de qualité à l\'ère du numérique. Notre mission est de permettre aux établissements scolaires de se concentrer sur leur cœur de métier - l\'enseignement - en leur garantissant un environnement technologique optimal.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">149</div>
              <p>{isRTL ? 'مؤسسة عميلة' : 'Établissements clients'}</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">+50</div>
              <p>{isRTL ? 'مشروع منجز' : 'Projets réalisés'}</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">+300</div>
              <p>{isRTL ? 'تدخل صيانة' : 'Interventions de maintenance'}</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <p>{isRTL ? 'رضا العملاء' : 'Satisfaction client'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            {isRTL ? 'هل تريد أن تكون مشروعنا الناجح القادم؟' : 'Vous souhaitez devenir notre prochain projet réussi ?'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            {isRTL
              ? 'اتصل بنا اليوم لمناقشة احتياجاتك واكتشاف كيف يمكننا مساعدتك.'
              : 'Contactez-nous dès aujourd\'hui pour discuter de vos besoins et découvrir comment nous pouvons vous aider.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <a 
              href="https://wa.me/213783328729" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center shadow-md"
            >
              <svg className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {isRTL ? 'تواصل عبر واتساب' : 'Contacter par WhatsApp'}
            </a>
            <div className="bg-transparent border-2 border-primary text-primary py-3 px-6 rounded-md inline-flex items-center justify-center">
              <svg className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              07.83.32.87.29
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;