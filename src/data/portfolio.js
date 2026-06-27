export const personal = {
  name: 'Hiba Altaee',
  title: 'Computer Engineer & Fullstack Developer',
  tagline: 'Backend - Frontend - Networking & Security',
  email: 'hiba.waad1@gmail.com',
  github: 'https://github.com/hibaltaee',
  linkedin: 'https://linkedin.com/in/hibaltaee',
  bio: [
    'I\'m a Computer Engineer and Web Developer who builds complete digital products - from secure REST APIs to polished, robust, secure, and scalable backend web applications and APIs.',
    'My backend expertise spans Node.js, Express, and PostgreSQL, as well as Python, Django, and Django REST Framework. On the frontend I am familiar with React and its modern ecosystem including Vite, Tailwind, and i18next for internationalization.',
    'Beyond web development I\'ve built embedded AI systems - combining a Raspberry Pi with Python and the OpenAI API to create a voice assistant running on Linux.',
  ],
  stats: [
    { value: '2+', label: 'Projects Shipped' },
    { value: '5+', label: 'Tech Stacks' },
    { value: 'CEH', label: 'Cisco Certified' },
  ],
}

export const stack = [
  {
    category: 'Backend',
    color: 'accent',
    items: [
      { name: 'Node.js', note: 'Runtime' },
      { name: 'Express.js', note: 'Framework' },
      { name: 'Django', note: 'Python framework' },
      { name: 'Django REST Framework', note: 'API' },
      { name: 'JWT Auth', note: 'Security' },
      { name: 'REST API Design', note: 'Architecture' },
    ],
  },
  {
    category: 'Database & Infra',
    color: 'accent3',
    items: [
      { name: 'PostgreSQL', note: 'Database' },
      { name: 'Docker', note: 'Containerization' },
      { name: 'Git / GitHub', note: 'Version control' },
      { name: 'Netlify', note: 'Deployment' },
      { name: 'Linux', note: 'OS' },
    ],
  },
]

export const projects = [
  {
    id: '01',
    featured: true,
    title: 'SecureScope',
    subtitle: 'Web security audit platform',
    description:
      'A production-grade web security audit platform that scans any public URL and generates a comprehensive security report graded A to F. Built with an async job queue architecture so scans run in the background without blocking the API.',
    highlights: [
      'Security reports graded A to F with readable, actionable results',
      'Async scan processing with BullMQ and Redis',
      'Modules for HTTP headers, SSL/TLS, DNS, ports, and cookies',
      'Session-based history with no account required',
    ],
    tags: ['Node.js', 'Express', 'BullMQ', 'Redis', 'PostgreSQL', 'React', 'Vite', 'Tailwind', 'Docker', 'Nginx'],
    githubUrl: 'https://github.com/hibaaltaee/securescope',
    featurePreview: {
      request: 'POST /api/scans',
      response: '202 Accepted - queued',
      items: [
        ['target', '"https://example.com"'],
        ['grade', '"A"'],
        ['headers', '"HSTS, CSP, X-Frame-Options"'],
        ['tls', '"valid certificate"'],
        ['dns', '"SPF, DMARC, DKIM"'],
        ['queue', '"BullMQ + Redis"'],
      ],
      note: '# Async scan completed and stored in PostgreSQL',
    },
    status: 'Completed',
    statusColor: 'accent',
  },
  {
    id: '02',
    featured: true,
    title: 'Restaurant Menu App',
    subtitle: 'Full-stack production application',
    description:
      'A production-ready restaurant management platform with role-based access control, an admin dashboard for staff management, and full Arabic/English bilingual support. Built with JWT auth, Dockerized for reliable deployment, and auto-deploys on git push.',
    highlights: [
      'JWT authentication + role-based access control',
      'Admin dashboard with full staff management',
      'Arabic / English UI via i18next',
      'Dockerized for production, auto-deploy on git push',
    ],
    tags: ['Node.js', 'Express', 'PostgreSQL', 'React', 'Vite', 'Tailwind', 'Docker', 'JWT', 'i18next'],
    liveUrl: 'https://myrestaurantapp1.netlify.app/',
    featurePreview: {
      request: 'POST /api/auth/login',
      response: '200 OK - JWT issued',
      items: [
        ['user', '"staff.manager"'],
        ['role', '"manager"'],
        ['permissions', '"orders:write"'],
        ['session', '"secure"'],
        ['locale', '"ar/en"'],
        ['dashboard', '"enabled"'],
      ],
      note: '# Role-based dashboard access',
    },
    status: 'Live',
    statusColor: 'accent',
  },
  {
    id: '03',
    featured: false,
    title: 'E-Commerce Cosmetics Store Backend',
    subtitle: '',
    description:
      'E-Commerce Cosmetics Store platform with role-based access control. Designed and built a complete e-commerce backend - product catalog, cart system, order management, user authentication, and admin staff management. Built with JWT auth.',
    highlights: [
      'Authentication system with JWT',
      'Admin dashboard with full staff management',
      'Pagination and filtering',
      'Error handling',
    ],
    tags: ['Node.js', 'Express', 'PostgreSQL', 'React', 'Vite', 'Tailwind', 'JWT'],
    githubUrl: 'https://github.com/hibaaltaee/cosmetic-store-backend',
    status: 'Final stage development',
    statusColor: 'accent',
  },
  {
    id: '04',
    featured: false,
    title: 'AI Voice Assistant',
    subtitle: 'Hardware + Software project',
    description:
      'An embedded AI voice assistant built on a Raspberry Pi running Linux. Combines Python speech recognition with the OpenAI API for natural language understanding and real-time spoken responses - a fully autonomous, local AI system.',
    highlights: [
      'Raspberry Pi + Python - runs on Linux',
      'OpenAI API for NLU and response generation',
      'Real-time speech-to-text input pipeline',
      'Fully autonomous, no cloud dependency for hardware',
    ],
    tags: ['Python', 'OpenAI API', 'Raspberry Pi', 'Linux', 'Speech Recognition'],
    liveUrl: null,
    status: 'Completed',
    statusColor: 'accent2',
  },
]
