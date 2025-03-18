import React from 'react';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div className={isRTL ? 'text-right' : 'text-left'}>
      {/* Hero Section */}
      <section className="bg-[#2c3e50] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{isRTL ? 'من نحن' : 'Qui sommes-nous'}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            {isRTL 
              ? 'نت سكولير-دي زد هو شريكك الموثوق به في صيانة أجهزة الكمبيوتر وتركيب شبكات الإنترنت في المؤسسات التعليمية.'
              : "NetScolaire-DZ est votre partenaire de confiance pour la maintenance informatique et l'installation de réseaux dans les établissements scolaires."}
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt={isRTL ? 'فريقنا' : 'Notre équipe'} 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">{isRTL ? 'مهمتنا' : 'Notre mission'}</h2>
              <p className="text-gray-600 mb-6">
                {isRTL 
                  ? 'نت سكولير-دي زد، المعروف سابقاً باسم حارون سوليوشن، تأسست في عام 2009. اكتسبت حارون سوليوشن سمعة قوية بفضل احترافيتها في القطاع المدرسي وساهمت في تطوير البنية التحتية المعلوماتية للعديد من المؤسسات التعليمية في منطقة مستغانم.'
                  : "NetScolaire-DZ, autrefois connue sous le nom de HarounSolution, a été fondée en 2009. HarounSolution s'était déjà forgé une solide réputation grâce à son professionnalisme dans le milieu scolaire et avait contribué à l'implantation de l'infrastructure informatique de nombreux établissements scolaires de la région de Mostaganem."}
              </p>
              <p className="text-gray-600 mb-6">
                {isRTL
                  ? 'اليوم، تعود نت سكولير-دي زد بحلول أكثر تكيفاً لضمان حسن سير الأجهزة المعلوماتية لهذه المؤسسات. لقد تطورت مهمتنا لتلبية احتياجات القطاع التعليمي بشكل خاص، من خلال تقديم خدمات مخصصة تضمن بيئة تكنولوجية مثالية للتعلم والتعليم.'
                  : "Aujourd'hui, NetScolaire-DZ revient avec des solutions encore plus adaptées pour assurer la bonne marche des parcs informatiques de ces établissements. Notre mission s'est affinée pour répondre spécifiquement aux besoins du secteur éducatif, en offrant des services sur mesure qui garantissent un environnement technologique optimal pour l'apprentissage et l'enseignement."}
              </p>
              <p className="text-gray-600 mb-6">
                {isRTL
                  ? 'يمتلك فريقنا من التقنيين المؤهلين خبرة عميقة في صيانة أجهزة الكمبيوتر وتركيب الشبكات. نحن نعمل بشكل وثيق مع المؤسسات التعليمية لضمان بيئة تكنولوجية مثالية للتعلم والتعليم.'
                  : "Notre équipe de techniciens qualifiés possède une expertise approfondie dans la maintenance informatique et l'installation de réseaux. Nous travaillons en étroite collaboration avec les établissements scolaires pour garantir un environnement technologique optimal pour l'apprentissage et l'enseignement."}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className={`text-primary ${isRTL ? 'ml-2' : 'mr-2'} mt-1`} size={20} />
                  <div>
                    <h3 className="font-bold">{isRTL ? 'خبرة تقنية' : 'Expertise technique'}</h3>
                    <p className="text-sm text-gray-600">{isRTL ? 'تقنيون معتمدون' : 'Techniciens certifiés'}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className={`text-primary ${isRTL ? 'ml-2' : 'mr-2'} mt-1`} size={20} />
                  <div>
                    <h3 className="font-bold">{isRTL ? 'خدمة مخصصة' : 'Service personnalisé'}</h3>
                    <p className="text-sm text-gray-600">{isRTL ? 'مكيفة لكل مدرسة' : 'Adapté à chaque école'}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className={`text-primary ${isRTL ? 'ml-2' : 'mr-2'} mt-1`} size={20} />
                  <div>
                    <h3 className="font-bold">{isRTL ? 'سرعة الاستجابة' : 'Réactivité'}</h3>
                    <p className="text-sm text-gray-600">{isRTL ? 'تدخل سريع' : 'Intervention rapide'}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className={`text-primary ${isRTL ? 'ml-2' : 'mr-2'} mt-1`} size={20} />
                  <div>
                    <h3 className="font-bold">{isRTL ? 'متابعة منتظمة' : 'Suivi régulier'}</h3>
                    <p className="text-sm text-gray-600">{isRTL ? 'صيانة وقائية' : 'Maintenance préventive'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{isRTL ? 'لماذا تختارنا' : 'Pourquoi nous choisir'}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isRTL
                ? 'نت سكولير-دي زد تتميز بخبرتها وموثوقيتها والتزامها بالتميز في الخدمة.'
                : "NetScolaire-DZ se distingue par son expertise, sa fiabilité et son engagement envers l'excellence du service."}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary-light/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">{isRTL ? 'خبرة متخصصة' : 'Expertise dédiée'}</h3>
              <p className="text-gray-600">
                {isRTL
                  ? 'فريقنا متخصص في احتياجات المؤسسات التعليمية، مع معرفة عميقة بالبيئات التعليمية.'
                  : "Notre équipe est spécialisée dans les besoins spécifiques des établissements scolaires, avec une connaissance approfondie des environnements éducatifs."}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary-light/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">{isRTL ? 'خدمة مخصصة' : 'Service personnalisé'}</h3>
              <p className="text-gray-600">
                {isRTL
                  ? 'نكيف خدماتنا وفقاً للاحتياجات الخاصة لكل مؤسسة، مع مراعاة حجمها وميزانيتها ومتطلباتها الخاصة.'
                  : "Nous adaptons nos services aux besoins spécifiques de chaque établissement, en tenant compte de leur taille, de leur budget et de leurs exigences particulières."}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary-light/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">{isRTL ? 'سرعة الاستجابة' : 'Réactivité'}</h3>
              <p className="text-gray-600">
                {isRTL
                  ? 'نحن ندرك أهمية نظام معلوماتي فعال في البيئة التعليمية ونلتزم بالتدخل السريع في حالة وجود مشكلة.'
                  : "Nous comprenons l'importance d'un système informatique fonctionnel dans un environnement éducatif et nous nous engageons à intervenir rapidement en cas de problème."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">{isRTL ? 'رؤيتنا وقيمنا' : 'Notre vision et nos valeurs'}</h2>
              <p className="text-gray-600 mb-6">
                {isRTL
                  ? 'في نت سكولير-دي زد، نؤمن بأن التكنولوجيا يجب أن تكون أداة مساعدة للتعليم، وليست عائقاً. رؤيتنا هي إنشاء بيئات معلوماتية موثوقة وآمنة وفعالة تسمح للمعلمين بالتركيز على مهمتهم التعليمية وللطلاب بالتعلم في أفضل الظروف.'
                  : "Chez NetScolaire-DZ, nous croyons que la technologie doit être un facilitateur de l'éducation, et non un obstacle. Notre vision est de créer des environnements informatiques fiables, sécurisés et efficaces qui permettent aux enseignants de se concentrer sur leur mission éducative et aux élèves d'apprendre dans les meilleures conditions."}
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary-light/20 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{isRTL ? 'التميز' : 'Excellence'}</h3>
                    <p className="text-gray-600">
                      {isRTL
                        ? 'نسعى جاهدين لتقديم خدمة عالية الجودة لجميع عملائنا.'
                        : "Nous nous efforçons d'offrir un service de la plus haute qualité à tous nos clients."}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-light/20 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{isRTL ? 'النزاهة' : 'Intégrité'}</h3>
                    <p className="text-gray-600">
                      {isRTL
                        ? 'نتصرف بصدق وشفافية في جميع تعاملاتنا.'
                        : "Nous agissons avec honnêteté et transparence dans toutes nos interactions."}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-light/20 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{isRTL ? 'الابتكار' : 'Innovation'}</h3>
                    <p className="text-gray-600">
                      {isRTL
                        ? 'نواكب أحدث التقنيات لتقديم أفضل الحلول لعملائنا.'
                        : "Nous restons à la pointe de la technologie pour offrir les meilleures solutions à nos clients."}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-light/20 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{isRTL ? 'الالتزام' : 'Engagement'}</h3>
                    <p className="text-gray-600">
                      {isRTL
                        ? 'نلتزم بشكل كامل في كل مشروع ونسعى جاهدين لتجاوز توقعات عملائنا.'
                        : "Nous nous engageons pleinement dans chaque projet et nous nous efforçons de dépasser les attentes de nos clients."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <img 
                src="https://plus.unsplash.com/premium_photo-1661559046208-0cef1cbf7b0b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt={isRTL ? 'رؤيتنا' : 'Notre vision'} 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;