export const projects = [
  {
    id: 'studyhavn',
    title: 'StudyHavn.',
    type: 'App Prototype',
    description: 'A modern study management platform designed for students. Features intuitive UI/UX with clean, minimalist aesthetics and seamless navigation.',
    detailedDescription: 'New to your university? Libraries and benches too crowded? Here\'s StudyHavn. Your one stop application that lets students find various study spots around their university that are often hidden or unknown.',
    image: '/Images/studyhavn..png',
    link: '/studyhavn',
    figmaLink: 'https://www.figma.com/proto/tcVIUaOnfg7n9GoExO9GTI/StudyHavn-Prototype.?node-id=0-1&t=k3gbhfkPQRgndNoL-1',
    projectLink: null,
    category: 'UI/UX Design',
    tags: ['Figma', 'Prototyping', 'App Design'],
    resources: ['Figma', 'Balsamiq (wireframing)', 'Visual Design', 'UI/UX Design Principles'],
    functions: [
      {
        title: 'Search bar:',
        description: 'The app lets you search for various locations or names of specific study rooms etc.'
      },
      {
        title: 'Filters:',
        description: 'The search bar also features a filter section to filter for your desired search result based on noise level, amenities, other student reviews and crowdedness.'
      },
      {
        title: 'Geolocation:',
        description: 'Trouble finding the results? The app also has a map feature to locate the place on platforms like google maps etc.'
      },
      {
        title: 'See it. Save it.:',
        description: 'Like a place for future visits? The app lets you save it/bookmark it so that you wont have to search up or remember for that location ever again.'
      },
      {
        title: 'See it. Post it.:',
        description: 'The app also lets you to post study spots that you think more people should know or kind of is like a hidden gem a lot of people do not know. Also has a feedback portal if something goes wrong or any inconvenience is observed.'
      }
    ],
    colorsImage: '/Images/COLOR-GRID.png',
    typefaces: ['Playfair Display', 'Playfair'],
    screenshots: [
      { title: 'Login/Signup Page', image: '/Studyhavn/Screenshot 2025-06-13 172019.png' },
      { title: 'Home Page', image: '/Studyhavn/Screenshot 2025-06-12 175332.png' },
      { title: 'Map Page', image: '/Studyhavn/Screenshot 2025-06-13 150125.png' },
      { title: 'Results Page', image: '/Studyhavn/Screenshot 2025-06-13 150509.png' },
      { title: 'Posting Page', image: '/Studyhavn/Screenshot 2025-06-13 150522.png' },
      { title: 'Filters and Option Page', image: '/Studyhavn/Screenshot 2025-06-13 150730.png' },
      { title: 'Search Page', image: '/Studyhavn/Screenshot 2025-06-13 150743.png' }
    ],
    featured: true,
  },
  {
    id: 'citydrip',
    title: 'CityDrip.',
    type: 'App Prototype',
    description: 'Urban lifestyle app blending streetwear culture with modern design principles. Showcases dynamic layouts and interactive elements.',
    detailedDescription: 'Tired of visiting malls that do not have all the stores you need? or finding an outlet almost 20km away from you just to hear the "sorry it\'s out of stock"? Introducing CityDrip. A one stop app that provides you with all the information about a certain product, it\'s availability on e-commerce platforms or retail outlets. Not only that also provides you insights and suggestions on various malls or shopping locations so that you can find Everything, EveryWEAR, all at once.',
    image: '/Images/citydrip.png',
    link: '/citydrip',
    figmaLink: 'https://www.figma.com/proto/DkgZMcbOSu8oyCvFTs13ZI/CItyDrip.?node-id=0-1&t=gFgIlnN2COoNI6RI-1',
    projectLink: null,
    category: 'UI/UX Design',
    tags: ['Figma', 'Streetwear Design', 'App Design'],
    resources: ['Figma', 'Balsamiq (wireframing)', 'Visual Design', 'UI/UX Design Principles', 'Canva'],
    functions: [
      {
        title: 'Search bar:',
        description: 'The app lets you search for various locations or names of products or any fashion apparel available on the market.'
      },
      {
        title: 'Filters:',
        description: 'The search bar also features a filter section to filter for your desired product/location with multiple aesthetic options like "old money", "streetwear" etc.'
      },
      {
        title: 'DripMap:',
        description: 'Trouble finding the results? The app also has a map feature to locate the places or stores on platforms like google maps etc.'
      },
      {
        title: 'DripGuru:',
        description: 'Need suggestions on where and what to buy in a new country or a place? DripGuru is an search algorithm searching based on keywords like streetwear etc that filter out locations and gives you the best place to shop for all your apparel.'
      },
      {
        title: 'E-commerce functionality:',
        description: 'The app also lets you choose an E-commerce option with direct product links embedded within the icons to get immediate product links with a tap on the screen.'
      }
    ],
    colorsImage: '/Images/citydripgrid.png',
    typefaces: ['BEBAS NEUE', 'Playfair Display', 'Roboto'],
    screenshots: [
      { title: 'Login/Signup Page', image: '/citydrip/Screenshot 2025-06-14 152951.png' },
      { title: 'Landing Page', image: '/citydrip/Screenshot 2025-06-14 153006.png' },
      { title: 'Home Page', image: '/citydrip/Screenshot 2025-06-14 153018.png' },
      { title: 'Search and Filters Page', image: '/citydrip/Screenshot 2025-06-14 153035.png' },
      { title: 'Product results and Product Page', image: '/citydrip/Screenshot 2025-06-14 153047.png' },
      { title: 'Map Page', image: '/citydrip/Screenshot 2025-06-14 153057.png' },
      { title: 'Community and Events Page (Coming Soon)', image: '/Images/citydrip.png' }
    ],
    featured: true,
  },
  {
    id: 'portfolio',
    title: 'My Portfolio',
    type: 'Website',
    description: 'A fully responsive portfolio website built with modern web technologies. Features smooth animations and clean design.',
    detailedDescription: 'Personal portfolio project displaying my skills, certifications, education and social links. (The current website that you are viewing).',
    image: '/Images/portfolio.png',
    link: '/portfolio',
    figmaLink: null,
    projectLink: 'https://karthikmanda.netlify.app/',
    category: 'Web Development',
    tags: ['React', 'TailwindCSS', 'Framer Motion'],
    resources: ['Figma', 'VS Code', 'Visual Design', 'UI/UX Design Principles', 'Canva', 'HTML5', 'CSS3', 'JavaScript', 'Netlify', 'Github'],
    functions: [
      {
        title: 'Navigation Bar:',
        description: 'Navigation bar to help in navigating through different parts of the website.'
      },
      {
        title: 'Back to Top Buttons:',
        description: 'Buttons helping to refresh back to the top after scrolling.'
      },
      {
        title: 'Eye Comfort Gradients:',
        description: 'Comforting and contrast colors suitable for viewing easily.'
      }
    ],
    colorsImage: '/Images/GRID.png',
    typefaces: ['Panchang', 'Special Gothic Expanded One', 'Sans Serif', 'Clash Display'],
    screenshots: [
      { title: 'Landing Page', image: '/portfolio/Screenshot 2025-06-14 163914.png' },
      { title: 'Loading Page', image: '/portfolio/Screenshot 2025-06-14 163928.png' },
      { title: 'Home Page', image: '/portfolio/Screenshot 2025-06-14 163941.png' },
      { title: 'Showcase Page', image: '/portfolio/Screenshot 2025-06-14 163955.png' },
      { title: 'Project Page', image: '/portfolio/Screenshot 2025-06-14 164012.png' },
      { title: 'Contact and Footer Page', image: '/portfolio/Screenshot 2025-06-14 164029.png' }
    ],
    featured: true,
  },
];

export const getAllProjects = () => projects;
export const getFeaturedProjects = () => projects.filter(project => project.featured);
export const getProjectById = (id) => projects.find(project => project.id === id);

// Get next and previous projects for navigation
export const getNextProject = (currentId) => {
  const currentIndex = projects.findIndex(p => p.id === currentId);
  if (currentIndex === -1) return null;
  const nextIndex = (currentIndex + 1) % projects.length;
  return projects[nextIndex];
};

export const getPreviousProject = (currentId) => {
  const currentIndex = projects.findIndex(p => p.id === currentId);
  if (currentIndex === -1) return null;
  const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
  return projects[prevIndex];
};

