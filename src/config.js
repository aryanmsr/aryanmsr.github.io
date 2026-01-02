module.exports = {
  siteTitle: 'Aryan Mishra',
  siteDescription:
    'Aryan Mishra is a Forward Deployed Engineer specializing in data-driven solutions for complex problems.',
  siteKeywords:
    'Aryan Mishra, Aryan, Mishra, aryanmsr, data scientist, forward deployed engineer, fde, columbia',
  siteUrl: 'https://aryanmsr.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Aryan Mishra',
  location: 'New York, NY',
  email: 'aryanmsr@gmail.com',
  github: 'https://github.com/aryanmsr',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/aryanmsr',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/mishraaryan/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/aryanmsr',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
