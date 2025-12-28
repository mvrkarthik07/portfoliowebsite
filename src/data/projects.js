export const projects = [
  {
    id: 'studyhavn',
    title: 'StudyHavn.',
    type: 'App Prototype',
    projectType: 'product',
    description: 'A modern study management platform designed for students. Features intuitive UI/UX with clean, minimalist aesthetics and seamless navigation.',
    problemStatement: 'Students struggle to find available study spaces on campus, leading to wasted time and frustration.',
    role: 'UI/UX + Frontend',
    detailedDescription: 'New to your university? Libraries and benches too crowded? Here\'s StudyHavn. Your one stop application that lets students find various study spots around their university that are often hidden or unknown.',
    image: '/Images/studyhavn..png',
    link: '/work/studyhavn',
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
    projectType: 'product',
    description: 'Urban lifestyle app blending streetwear culture with modern design principles. Showcases dynamic layouts and interactive elements.',
    problemStatement: 'Fashion shoppers waste time visiting multiple stores and websites to find products, often discovering items are out of stock.',
    role: 'UI/UX + Frontend',
    detailedDescription: 'Tired of visiting malls that do not have all the stores you need? or finding an outlet almost 20km away from you just to hear the "sorry it\'s out of stock"? Introducing CityDrip. A one stop app that provides you with all the information about a certain product, it\'s availability on e-commerce platforms or retail outlets. Not only that also provides you insights and suggestions on various malls or shopping locations so that you can find Everything, EveryWEAR, all at once.',
    image: '/Images/citydrip.png',
    link: '/work/citydrip',
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
    projectType: 'technical',
    description: 'A fully responsive portfolio website built with modern web technologies. Features smooth animations and clean design.',
    technicalChallenge: 'Building a performant, accessible React SPA with smooth animations and optimal loading strategies.',
    technologies: ['React', 'TailwindCSS', 'Framer Motion', 'React Router', 'Vite'],
    githubLink: 'https://github.com/mvrkarthik07',
    detailedDescription: 'Personal portfolio project displaying my skills, certifications, education and social links. (The current website that you are viewing).',
    image: '/Images/portfolio.png',
    link: '/work/portfolio',
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
  {
    id: 'fullstack-app',
    title: 'ParkLah!',
    type: 'Full-Stack Web Application',
    projectType: 'technical',
    description: 'Location-based parking finder with authentication and real-time data',
    technicalChallenge: 'Coordinating multiple APIs with different response patterns, managing location-based filtering efficiently, designing database schemas for users and vehicles, implementing two-factor authentication correctly, and handling deployment and environment configuration across platforms.',
    technologies: ['React', 'TypeScript', 'PostgreSQL', 'JavaScript', 'REST API', 'JWT', 'Google Authenticator', 'Geolocation API', 'Weather API', 'Google Maps API'],
    githubLink: 'https://github.com/mvrkarthik07/Parklah',
    projectLink: 'https://parklah.vercel.app', // Update with actual Vercel link
    category: 'Full Stack Development',
    tags: ['React', 'TypeScript', 'PostgreSQL', 'Full Stack'],
    // Custom sections for ParkLah! technical project
    overview: 'ParkLah! is a full-stack web application that helps users find nearby parking lots based on their current location. The app integrates geolocation, external APIs, authentication, and real-time data to provide a practical parking discovery experience tailored to urban use in Singapore.',
    coreFunctionality: [
      'Detect their current location using browser geolocation',
      'View nearby parking lots with distance-based filtering',
      'Open selected parking locations directly in Google Maps',
      'Check real-time weather conditions before parking',
      'Create an account and log in securely',
      'Add and manage personal vehicle details',
      'Use two-factor authentication via Google Authenticator'
    ],
    technicalArchitecture: {
      frontend: 'React with TypeScript, client-side routing and state handling, responsive layout for desktop and mobile use',
      backend: 'RESTful JSON APIs, PostgreSQL database for persistent storage, authentication and authorization logic, two-factor authentication implementation',
      deployment: 'Backend deployed on Railway, frontend deployed on Vercel, environment-based configuration for APIs and secrets'
    },
    dataIntegrations: 'The app integrates multiple external services, including browser geolocation APIs for location detection, HDB carpark availability APIs and HDB carparks list APIs from data.gov.sg for parking lot availability and metadata, weather APIs to surface environmental conditions, and Google Maps deep links for navigation. The system is designed to coordinate multiple asynchronous data sources reliably.',
    securityAuthentication: 'Security considerations include user authentication with hashed credentials, two-factor authentication using Google Authenticator, secure session handling, and separation of frontend and backend responsibilities. These decisions were made to balance usability with real-world security requirements.',
    keyTechnicalChallenges: [
      'Coordinating multiple APIs with different response patterns',
      'Managing location-based filtering efficiently',
      'Designing database schemas for users and vehicles',
      'Implementing two-factor authentication correctly',
      'Handling deployment and environment configuration across platforms'
    ],
    learnings: [
      'Full-stack applications require careful coordination between frontend and backend',
      'Geolocation-based features introduce edge cases around permissions and accuracy',
      'Security features such as 2FA significantly affect system design',
      'Deployment workflows are as important as application logic'
    ],
    featured: true,
  },
  {
    id: 'java-cli-system',
    title: 'Internship Placement Management System (CLI)',
    type: 'Java Command-Line Application (Team Project)',
    projectType: 'technical',
    description: 'Java-based CLI system for managing student internships',
    technicalChallenge: 'Designing an efficient CLI system with proper data structures, file I/O operations, and user interaction handling.',
    technologies: ['Java', 'OOP', 'File I/O', 'Data Structures', 'CLI', 'Javadoc'],
    githubLink: 'https://github.com/lyxyxl/SC2002-Project',
    projectLink: null,
    category: 'Backend Development',
    tags: ['Java', 'CLI', 'OOP', 'Team Project'],
    featured: true,
    // Custom sections for CLI Java system
    overview: 'This project is a Java-based command-line application designed to manage the internship placement process between students and internship providers. The system supports structured workflows for student applications, company listings, and administrative management through a role-based CLI interface.',
    myContribution: 'I contributed to the implementation of student user workflows and internship company representative functionality, focusing on writing and integrating core methods for student-related operations, implementing company representative actions and data handling, producing comprehensive Javadoc documentation for maintainability, and ensuring method-level clarity and correctness within the team codebase. This contribution focused on code quality, structure, and clarity rather than UI.',
    systemStructure: 'Key technical aspects of the system include role-based access for students and company representatives, menu-driven CLI interaction, file-based or in-memory data handling (as implemented in the project), and modular class design to separate concerns. The CLI format prioritises logical correctness and maintainability over presentation.',
    technicalFocus: 'This project emphasised object-oriented design in Java, method-level responsibility and clarity, team-based code integration, and documentation and readability through Javadocs.',
    learnings: [
      'Writing maintainable code is critical in team environments',
      'Clear method boundaries reduce integration issues',
      'Documentation is essential for collaborative development',
      'CLI applications still require thoughtful system design'
    ],
  },
  {
  id: 'roleaudit',
  title: 'RoleAudit',
  type: 'AI-Assisted Resume-to-Role Analysis Tool',
  projectType: 'technical',
  description: 'A resume analysis tool that evaluates candidate fit against job roles and highlights strengths, gaps, and improvement areas.',
  technicalChallenge: 'Designing a transparent, rule-based evaluation system that mirrors how roles assess resumes, while providing explainable scoring and actionable feedback instead of opaque pass/fail outcomes.',
  technologies: ['JavaScript', 'React', 'Logic-Based Scoring', 'Resume Parsing', 'Rule Systems'],
  githubLink: 'https://github.com/mvrkarthik07/RoleAudit', // update if different
  projectLink: null,
  category: 'Product & Backend Logic',
  tags: ['Resume Analysis', 'ATS Logic', 'Product Thinking', 'Rule-Based Systems'],
  featured: true,

  // Custom sections for RoleAudit
  overview: 'RoleAudit is a candidate-facing resume evaluation tool designed to assess how well a resume aligns with a specific role or role category. Instead of acting as an employer-side ATS, the system exposes the underlying evaluation logic to help users understand where their resume performs well and where it falls short.',

  myContribution: 'I designed the evaluation logic and product flow end-to-end, focusing on translating role requirements into structured scoring criteria. This included defining skill categories, weighting mechanisms, and gap detection logic, as well as shaping the output to be clear, interpretable, and actionable for users. The emphasis was on product clarity and explainability rather than black-box AI.',

  systemStructure: 'The system parses resume inputs, maps extracted skills and experiences against predefined role criteria, and computes both overall and category-level scores. Results are surfaced as strengths, weaknesses, and missing signals, allowing users to diagnose resume fit in a structured manner. The architecture is intentionally modular to allow future expansion into multi-role comparison and recommendation.',

  technicalFocus: 'This project focused on logic-driven evaluation systems, product-oriented backend design, explainable scoring mechanisms, and translating abstract hiring criteria into concrete, inspectable rules.',

  learnings: [
    'Transparency builds more trust than opaque automation',
    'Hiring logic can be approximated effectively without black-box ML',
    'Clear scoring frameworks are more valuable than raw accuracy',
    'Product framing is as important as technical correctness'
  ],
},

  {
    id: 'scdf-dashboard',
    title: 'SCDF Dashboard.',
    type: 'Dashboard Prototype',
    projectType: 'product',
    description: 'A comprehensive dashboard prototype for emergency response visualization. Features real-time simulation data, population movement tracking, and evacuation coordination tools.',
    problemStatement: 'During hazardous gas leak incidents, responders must make rapid decisions under uncertainty. Key challenges include understanding how gas spreads across a dense urban environment, predicting civilian movement during evacuations, identifying safe zones that can absorb displaced populations, and coordinating response with existing public infrastructure systems. Traditional static maps and reports do not provide sufficient situational awareness during fast-evolving emergencies.',
    role: 'I designed the dashboard and interaction flows, focusing on translating complex simulation outputs into readable visual analytics, designing an interface for rapid interpretation under time pressure, and structuring data views to support decision-making rather than raw inspection. This was a prototype-level project focused on clarity, feasibility, and system thinking.',
    detailedDescription: 'This project explores how simulation data and real-time analytics can support emergency response during a gas leak incident in Singapore. The dashboard visualizes simulated gas dispersion, population movement, and evacuation toward designated safe zones, helping responders assess risk and response effectiveness.',
    image: '/Images/scdf_logo.png',
    link: '/work/scdf-dashboard',
    figmaLink: 'https://www.figma.com/proto/dn5Q2qB9QsxbcBmBIrXzmn/HackX?node-id=0-1&t=lTAQCmmc1peGs2PR-1',
    projectLink: null,
    category: 'UI/UX Design',
    tags: ['Figma', 'Dashboard Design', 'Data Visualization'],
    resources: ['Figma', 'UI/UX Design Principles', 'Data Visualization', 'Simulation Design', 'Systems Thinking'],
    functions: [
      {
        title: 'Geographic visualization:',
        description: 'Gas spread over time with temporal controls'
      },
      {
        title: 'Population heatmaps:',
        description: 'Density and movement patterns during evacuation'
      },
      {
        title: 'Safe zone indicators:',
        description: 'Capacity and occupancy tracking for designated zones'
      },
      {
        title: 'Timeline controls:',
        description: 'Scrubbing through simulation states to analyze progression'
      },
      {
        title: 'Summary analytics:',
        description: 'Risk zones and congestion point identification'
      },
      {
        title: 'NParks integration:',
        description: 'Conceptual flow for public-facing evacuation guidance'
      }
    ],
    // Custom sections for SCDF project
    systemLogic: 'The dashboard visualizes simulated scenarios that include a gas leak occurring at a specific location in Singapore, gas dispersion over time based on environmental assumptions, simulated population movement away from affected zones, and routing civilians toward predefined safe zones. The system emphasizes scenario-based analysis rather than real-time prediction.',
    dashboardFeatures: 'Key features include geographic visualization of gas spread over time, heatmaps indicating population density and movement, safe zone capacity and occupancy indicators, timeline-based controls to scrub through simulation states, and summary analytics highlighting risk zones and congestion points. The interface prioritizes clarity and hierarchy to avoid overwhelming operators.',
    nparksIntegration: 'The project includes a conceptual integration with the NParks mobile app. In this flow, affected park areas are flagged within NParks, civilians receive evacuation guidance and safe zone directions, and public-facing information is aligned with responder-side analytics. This demonstrates how emergency systems could integrate with existing public platforms instead of operating in isolation.',
    learnings: [
      'Emergency dashboards must optimize for speed and comprehension, not data volume',
      'Simulation outputs require careful abstraction to be actionable',
      'Integrating public-facing platforms can reduce panic and improve coordination',
      'Designing for edge cases is critical in safety-critical systems'
    ],
    statusScope: 'This project is a conceptual and prototype exploration, not a deployed operational system. Its value lies in system design thinking, dashboard structuring, and simulation-driven analytics visualization.',
    screenshots: [
      { title: 'Dashboard Overview', image: '/Images/Frame 28.png' },
      {title: 'Nparks Integration Screens', image: '/Images/Nparks_screenshot.png'}
      // Add more screenshots: simulation maps, NParks integration screens, etc.
    ],
    featured: true,
  },
  {
    id: 'senior-community-app',
    title: 'SeniorConnect™.',
    type: 'App Prototype',
    projectType: 'product',
    description: 'A mobile app concept designed to help socially isolated seniors discover, join, and stay engaged with community activities in Singapore.',
    problemStatement: 'Singapore faces a rapidly ageing population, with a growing number of seniors living alone. Despite the availability of community programmes and events, many seniors remain disconnected due to lack of awareness of nearby activities, fragmented information spread across platforms, social hesitation to attend events alone, and limited motivation to sustain participation. Existing solutions do not adequately address both discovery and long-term engagement in a way that feels accessible and rewarding to seniors.',
    role: 'I designed the end-to-end product concept and interface screens, focusing on translating research insights into clear product features, designing an age-friendly interface with low cognitive load, structuring user flows to reduce friction and hesitation, and exploring how incentives and social features could support sustained engagement. This project was developed as a prototype and design exploration.',
    detailedDescription: 'SeniorConnect™ is a mobile app concept designed to help socially isolated seniors discover, join, and stay engaged with community activities in Singapore. The app acts as a central portal for seniors to access official Community Club (CC) events, informal community gatherings, and incentives that encourage continued participation and social connection.',
    image: '/Images/Seniorconnect_logo.png', // Placeholder - replace with actual image
    link: '/work/senior-community-app',
    figmaLink: null,
    projectLink: null,
    category: 'UI/UX Design',
    tags: ['Figma', 'Mobile App Design', 'Accessibility'],
    resources: ['Figma', 'User Research', 'Accessibility Guidelines', 'UI/UX Design Principles'],
    functions: [
      {
        title: 'Events Page:',
        description: 'View official Community Club events and informal user-hosted gatherings. See event details clearly, including location and incentives. Register using a simplified, low-friction flow. The design prioritises large text, clear hierarchy, and minimal steps.'
      },
      {
        title: 'Redemption Center:',
        description: 'Users earn points by attending events, which can be redeemed for vouchers from government-partnered organisations such as NTUC FairPrice or ActiveSG. This feature draws inspiration from incentive-based public health programmes, using rewards to encourage both initial adoption and continued participation.'
      },
      {
        title: 'Chat Center:',
        description: 'Communicate with other seniors, coordinate attendance at events together, and reduce the barrier of attending activities alone. This social layer is designed to support peer connection rather than replace in-person interaction.'
      }
    ],
    // Custom sections for SeniorConnect project
    keyChallenge: 'Singapore faces a rapidly ageing population, with a growing number of seniors living alone. The number of residents aged 65 and above living alone has increased significantly over the past decade and is projected to rise further as household sizes shrink. This trend is concerning because prolonged social isolation has been linked to poorer physical health, cognitive decline, and increased mortality risk among older adults. Research shows that loneliness can negatively impact immunity, mental health, and the ability to perform daily activities, making it a critical public health issue rather than a purely social one.',
    designRationale: 'The interface is intentionally simple and age-friendly, featuring large text and clear contrast, straightforward navigation, and minimal on-screen choices. The app also includes an AI voice assistant concept with multilingual support, improving accessibility for seniors with varying language preferences and digital confidence levels.',
    feasibilityAlignment: 'SeniorConnect™ is designed to align with Singapore\'s broader ageing-in-place strategy. Government initiatives such as Age Well SG demonstrate strong institutional support for programmes that help seniors stay socially connected and active within their communities. By working with existing infrastructure, community centres, and public partners, the app concept is positioned as operationally feasible rather than standalone or duplicative.',
    learnings: [
      'Social isolation is a systems problem, not just a user interface problem',
      'Simplicity and confidence-building are critical for senior-facing products',
      'Incentives can encourage engagement, but community connection sustains it',
      'Designing for older adults requires restraint, clarity, and empathy'
    ],
    statusScope: 'SeniorConnect™ is a conceptual product and UI prototype, not a deployed application. Its value lies in product reasoning, UX decision-making, public-sector design thinking, and accessibility-focused interface design.',
    screenshots: [
      { title: 'Events Page', image: '/SeniorConnect/events.png' },
      { title: 'Redemption Center', image: '/SeniorConnect/redemption.png' },
      { title: 'Chat Center', image: '/SeniorConnect/chat.png' },
      { title: 'Home Screen', image: '/SeniorConnect/home.png' },
      { title: 'Event Details', image: '/SeniorConnect/event-details.png' },
      { title: 'Voucher Details', image: '/SeniorConnect/voucher-details.png' }
    ],
    featured: true,
  },
];

export const getAllProjects = () => projects;
export const getFeaturedProjects = () => projects.filter(project => project.featured);
export const getProjectById = (id) => projects.find(project => project.id === id);
export const getProductProjects = () => projects.filter(project => project.projectType === 'product');
export const getTechnicalProjects = () => projects.filter(project => project.projectType === 'technical');

// Get next and previous projects for navigation (only within same project type)
export const getNextProject = (currentId) => {
  const currentProject = projects.find(p => p.id === currentId);
  if (!currentProject) return null;
  
  const sameTypeProjects = projects.filter(p => p.projectType === currentProject.projectType);
  const currentIndex = sameTypeProjects.findIndex(p => p.id === currentId);
  if (currentIndex === -1) return null;
  
  const nextIndex = (currentIndex + 1) % sameTypeProjects.length;
  return sameTypeProjects[nextIndex];
};

export const getPreviousProject = (currentId) => {
  const currentProject = projects.find(p => p.id === currentId);
  if (!currentProject) return null;
  
  const sameTypeProjects = projects.filter(p => p.projectType === currentProject.projectType);
  const currentIndex = sameTypeProjects.findIndex(p => p.id === currentId);
  if (currentIndex === -1) return null;
  
  const prevIndex = currentIndex === 0 ? sameTypeProjects.length - 1 : currentIndex - 1;
  return sameTypeProjects[prevIndex];
};

