import emailjs from '@emailjs/browser';

// Configuration des services EmailJS
const emailServices = [
  {
    serviceId: 'service_7v3jfyh',
    templateId: 'template_g9nzz7r',
    publicKey: 'Yfvsk5VmsV7NchsIG',
    emailAddress: 'harounsolution@gmail.com',
    usageCount: 0,
    maxUsage: 200
  },
  {
    serviceId: 'service_4m3a4cb',
    templateId: 'template_g0vo4rm',
    publicKey: '42Ppep9RZExMRE9sD',
    emailAddress: 'karimrouabeh915@gmail.com',
    usageCount: 0,
    maxUsage: 200
  },
  {
    serviceId: 'service_k4m2qoj',
    templateId: 'template_z1j2kwq',
    publicKey: 'HtItuUiDnatwZeoPZ',
    emailAddress: 'rouabehkarim125@gmail.com',
    usageCount: 0,
    maxUsage: 200
  }
];

// Fonction pour obtenir le service actif
const getActiveService = () => {
  // Récupérer les compteurs d'utilisation du localStorage
  const storedCounts = localStorage.getItem('emailServiceUsage');
  if (storedCounts) {
    const counts = JSON.parse(storedCounts);
    emailServices.forEach((service, index) => {
      if (counts[index] !== undefined) {
        service.usageCount = counts[index];
      }
    });
  }

  // Trouver le premier service qui n'a pas atteint sa limite
  const activeService = emailServices.find(service => service.usageCount < service.maxUsage);
  
  if (!activeService) {
    console.error('Tous les services ont atteint leur quota maximum');
    return null;
  }
  
  return activeService;
};

// Fonction pour mettre à jour le compteur d'utilisation
const updateServiceUsage = (serviceIndex: number) => {
  emailServices[serviceIndex].usageCount += 1;
  
  // Sauvegarder les compteurs dans localStorage
  const counts = emailServices.map(service => service.usageCount);
  localStorage.setItem('emailServiceUsage', JSON.stringify(counts));
};

// Fonction pour envoyer un email
export const sendEmail = async (templateParams: any) => {
  const activeService = getActiveService();
  
  if (!activeService) {
    throw new Error('Tous les services ont atteint leur quota maximum');
  }
  
  const serviceIndex = emailServices.indexOf(activeService);
  
  try {
    const response = await emailjs.send(
      activeService.serviceId,
      activeService.templateId,
      templateParams,
      activeService.publicKey
    );
    
    console.log('Email envoyé avec succès à:', activeService.emailAddress);
    
    // Mettre à jour le compteur d'utilisation
    updateServiceUsage(serviceIndex);
    
    return response;
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    throw error;
  }
};

// Fonction pour réinitialiser les compteurs (utile pour les tests)
export const resetServiceUsage = () => {
  emailServices.forEach(service => {
    service.usageCount = 0;
  });
  localStorage.setItem('emailServiceUsage', JSON.stringify(emailServices.map(() => 0)));
};

// Fonction pour obtenir les statistiques d'utilisation
export const getServiceStats = () => {
  // Récupérer les compteurs d'utilisation du localStorage pour s'assurer qu'ils sont à jour
  const storedCounts = localStorage.getItem('emailServiceUsage');
  if (storedCounts) {
    const counts = JSON.parse(storedCounts);
    emailServices.forEach((service, index) => {
      if (counts[index] !== undefined) {
        service.usageCount = counts[index];
      }
    });
  }
  
  return emailServices.map(service => ({
    email: service.emailAddress,
    usage: service.usageCount,
    maxUsage: service.maxUsage,
    remaining: service.maxUsage - service.usageCount
  }));
};