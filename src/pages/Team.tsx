import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Facebook, User, Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Team = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  // Sample team data
  const teamMembers = [
    {
      id: 1,
      name: isRTL ? t('team.team_members.founder.name') : "Haroun Karim",
      role: isRTL ? t('team.team_members.founder.role') : "Fondateur & Directeur",
      bio: isRTL ? t('team.team_members.founder.bio') : "Ingénieur en informatique avec plus de 10 ans d'expérience dans le domaine de la maintenance informatique et l'installation de réseaux. Passionné par les nouvelles technologies et l'éducation.",
      contact: {
        email: "harounsolution@gmail.com",
        phone: "(+213) 07.83.32.87.29",
        linkedin: "https://linkedin.com/in/harounkarim",
        facebook: "https://facebook.com/harounkarim"
      }
    },
    {
      id: 2,
      name: isRTL ? t('team.team_members.tech_lead.name') : "Mohamed Kadri",
      role: isRTL ? t('team.team_members.tech_lead.role') : "Responsable technique",
      bio: isRTL ? t('team.team_members.tech_lead.bio') : "Technicien supérieur en réseaux informatiques avec une expertise particulière dans la configuration et la sécurisation des réseaux pour les établissements scolaires.",
      contact: {
        email: "karimrouabeh915@gmail.com",
        phone: "(+213) 07.83.32.87.29",
        linkedin: "https://linkedin.com/in/karimrouabeh",
        facebook: "https://facebook.com/karimrouabeh"
      }
    },
    {
      id: 3,
      name: isRTL ? t('team.team_members.technician.name') : "Ahmed Benali",
      role: isRTL ? t('team.team_members.technician.role') : "Technicien informatique",
      bio: isRTL ? t('team.team_members.technician.bio') : "Spécialiste en maintenance informatique avec 5 ans d'expérience dans le dépannage et la réparation de matériel informatique. Expert en diagnostic et résolution de problèmes techniques.",
      contact: {
        email: "ahmed.benali@netscolaire-dz.com",
        phone: "(+213) 07.83.32.87.29",
        linkedin: "https://linkedin.com/in/ahmedbenali",
        facebook: "https://facebook.com/ahmedbenali"
      }
    },
    {
      id: 4,
      name: isRTL ? t('team.team_members.admin.name') : "Fatima Zahra",
      role: isRTL ? t('team.team_members.admin.role') : "Responsable administrative",
      bio: isRTL ? t('team.team_members.admin.bio') : "En charge de la gestion administrative et de la relation client. Assure le suivi des contrats et la planification des interventions pour garantir un service de qualité.",
      contact: {
        email: "fatima.zahra@netscolaire-dz.com",
        phone: "(+213) 07.83.32.87.29",
        linkedin: "https://linkedin.com/in/fatimazahra",
        facebook: "https://facebook.com/fatimazahra"
      }
    }
  ];

  // Fonction pour générer une couleur de fond aléatoire mais cohérente pour chaque membre
  const getBackgroundColor = (id) => {
    const colors = [
      'bg-blue-500',
      'bg-green-500',
      'bg-purple-500',
      'bg-orange-500',
      'bg-pink-500',
      'bg-teal-500'
    ];
    return colors[(id - 1) % colors.length];
  };

  // Fonction pour obtenir les initiales d'un nom
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('');
  };

  // Fonction pour afficher les étoiles de notation
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <Star 
        key={index} 
        size={16} 
        className={`${index < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className={isRTL ? 'text-right' : 'text-left'}>
      {/* Hero Section */}
      <section className="bg-[#2c3e50] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{t('team.hero.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            {t('team.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('team.intro.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('team.intro.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`w-full h-64 flex items-center justify-center ${getBackgroundColor(member.id)}`}>
                  <div className="text-white text-center">
                    <div className="mx-auto mb-4 bg-white/20 w-32 h-32 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <User size={64} className="text-white" />
                    </div>
                    <div className="text-2xl font-bold">{getInitials(member.name)}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a 
                      href={`mailto:${member.contact.email}`} 
                      className="text-gray-600 hover:text-primary transition-colors"
                      title="Email"
                    >
                      <Mail size={18} />
                    </a>
                    <a 
                      href={`tel:${member.contact.phone}`} 
                      className="text-gray-600 hover:text-primary transition-colors"
                      title="Téléphone"
                    >
                      <Phone size={18} />
                    </a>
                    <a 
                      href={member.contact.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-600 hover:text-primary transition-colors"
                      title="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a 
                      href={member.contact.facebook} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-600 hover:text-primary transition-colors"
                      title="Facebook"
                    >
                      <Facebook size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('team.values.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('team.values.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('team.values.expertise.title')}</h3>
              <p className="text-gray-600">
                {t('team.values.expertise.description')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('team.values.reactivity.title')}</h3>
              <p className="text-gray-600">
                {t('team.values.reactivity.description')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('team.values.commitment.title')}</h3>
              <p className="text-gray-600">
                {t('team.values.commitment.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Contract Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-secondary text-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8">
                <h2 className="text-3xl font-bold mb-4">{t('team.maintenance.title')}</h2>
                <p className="mb-6">
                  {t('team.maintenance.subtitle')}
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-white text-secondary w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold">✓</span>
                    </div>
                    <p>{t('team.maintenance.features.visits')}</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white text-secondary w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold">✓</span>
                    </div>
                    <p>{t('team.maintenance.features.report')}</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white text-secondary w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold">✓</span>
                    </div>
                    <p>{isRTL ? 'سعر ثابت: 35700 دج/سنة' : 'Tarif fixe : 35700 Dzd/an'}</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Link 
                    to="/contact" 
                    className="inline-block bg-white text-secondary hover:bg-gray-100 font-bold py-3 px-6 rounded-md transition-colors"
                  >
                    {t('team.maintenance.cta')}
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 bg-secondary-light flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="mx-auto mb-6 bg-white/20 w-40 h-40 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white text-5xl font-bold">{isRTL ? '35700' : '35700'}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{isRTL ? 'دج/سنة' : 'Dzd/an'}</h3>
                  <p className="text-white/80">
                    {t('team.maintenance.price.note')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('team.testimonials.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('team.testimonials.subtitle')}
            </p>
          </div>
          
          <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-center">{t('team.testimonials.evolution.title')}</h3>
            <p className="text-gray-700 mb-4">
              {t('team.testimonials.evolution.description')}
            </p>
            <p className="text-gray-700 font-medium text-center">
              {t('team.testimonials.evolution.conclusion')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;