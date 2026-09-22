export interface DevProject {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const developmentProjects: DevProject[] = [
  {
    id: 1,
    title: 'Interactive Credit Card',
    description:
      'React frontend, Material UI framework, and captivating animations to elevate the user experience in credit card input forms.',
    image: '/CreditCardHomepageDark.jpg',
    link: '/credit-card-form',
  },
  {
    id: 2,
    title: 'Music Visualizer',
    description:
      'This project offers an interactive and engaging way to experience music through a simple yet effective visual representation.',
    image: '/MusicVizualizerDevProjectThumbnail.jpg',
    link: '/music-visualizer',
  },
  {
    id: 3,
    title: 'Password Generator',
    description: 'A Vue.js app for generating secure, customizable passwords.',
    image: '/PasswordGeneratorThumbnail.jpg',
    link: '/password-generator',
  },
];

export interface SelectedWork {
  id: number;
  company: string;
  role: string;
  status: string;
  tag: string;
  image: string;
  link: string;
}

export const selectedWorks: SelectedWork[] = [
  {
    id: 1,
    company: 'Gravie',
    role: 'Frontend Developer',
    status: 'Current',
    tag: 'Health Benefits Platform',
    image: '/GravieCover.jpg',
    link: 'https://www.gravie.com/',
  },
  {
    id: 2,
    company: 'Take Command',
    role: 'Frontend Developer',
    status: 'Previous',
    tag: 'HRA Administration Platform',
    image: '/TakeCommandCover.jpg',
    link: 'https://www.takecommandhealth.com/',
  },
];

export const designProjects = [
  {
    id: 1,
    title: 'Hu-manity.co',
    description: 'Data Privacy application',
    image: '/HumanitycoCover.jpg',
    link: '/humanityco',
  },
  {
    id: 2,
    title: 'Willspace',
    description: 'Fitness mobile application',
    image: '/WillspaceCoverOption2.jpg',
    link: '/willspace',
  },
  {
    id: 3,
    title: 'Website work',
    description: 'Build websites that encapsulate their brand and business.',
    image: '/WebsiteWorkCover.jpg',
    link: '/website-work',
  },
  {
    id: 4,
    title: 'Blueprint',
    description: 'Meetings and events application',
    image: '/BlueprintCover.jpg',
    link: '/blueprint',
  },
  {
    id: 5,
    title: 'Willspace',
    description: 'Fitness and lifestyle',
    image: '/WillspaceMarketingCover.jpg',
    link: '/willspace-marketing',
  },
];

export const websiteProjects = [
  {
    id: 1,
    title: 'Dola Media',
    description:
      'Dola Media is where story meets business objectives. The goal of the website was to connect talent, brand and story to help ensure the conversation never stops.',
    image: '/DolaMedia1.png',
    link: 'https://www.dolamedia.com/',
  },
  {
    id: 2,
    title: 'Gretna Green Designs',
    description:
      'Gretna Greeen enhances the interiors of a space or building to achieve a healthier and more aesthetically pleasing environment for the end user.',
    image: '/GretnaGreen1.png',
    link: 'https://www.gretnagreendesigns.com/interior-design',
  },
  {
    id: 3,
    title: 'Harkmark, LLC',
    description: 'Harkmark is a digital marketing agency that helps businesses grow their online presence.',
    image: '/Harkmark1.png',
    link: 'https://www.harkmark.com/',
  },
  {
    id: 4,
    title: 'WellNEST',
    description:
      'wellNEST is a members-only group integrating smart technology, personalized health guidance and world-class practitioners to access your highest self. wellNEST creates a data-rich picture with a customized action plan for each Member, connecting modalities from medicine to mediums.',
    image: '/WellNest1.png',
    link: 'https://www.wellnestnyc.com/',
  },
];
