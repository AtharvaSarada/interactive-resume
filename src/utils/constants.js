// ============================================
// RESUME DATA CONSTANTS
// ============================================

export const PERSONAL_INFO = {
  name: "Atharva Sarada",
  title: "Web Developer and AI Generalist",
  location: "Sangli, Maharashtra, India",
  phone: "9022664540",
  email: "atharva.sarada@example.com", // Update with your actual email
  linkedin: "https://www.linkedin.com/in/atharva-sarada", // Update with your actual LinkedIn
  github: "https://github.com/atharva-sarada", // Update with your actual GitHub
};

export const ROTATING_TITLES = [
  "Full-Stack Developer",
  "AI Specialist",
  "Problem Solver",
  "Tech Enthusiast",
];

export const PROFILE_SUMMARY =
  "Results-driven Full-Stack Developer & AI Specialist skilled in React, Next.js, Node.js, Express, TypeScript, Tailwind, MongoDB/PostgreSQL. Experienced in adding intelligence with OpenAI APIs, LangChain, Hugging Face, TensorFlow, and PyTorch.";

export const PROFILE_EXTENDED =
  "Knowledgeable in Model Context Protocol (MCP) for secure, standardized tool integration, with exposure to MCP-Bench and agent evaluation techniques. Proficient in cloud platforms (AWS, GCP) and Docker for scalable deployments.";

export const STATISTICS = [
  {
    value: "2+",
    label: "Years Experience",
    icon: "calendar"
  },
  {
    value: "10+",
    label: "Projects Completed",
    icon: "briefcase"
  },
  {
    value: "25+",
    label: "Technologies",
    icon: "code"
  },
  {
    value: "4",
    label: "Certifications",
    icon: "award"
  }
];

// ============================================
// SKILLS DATA
// ============================================

export const SKILLS = {
  "Programming Languages": [
    { name: "Java", proficiency: 85, icon: "☕" },
    { name: "C++", proficiency: 80, icon: "⚙️" },
    { name: "Python", proficiency: 90, icon: "🐍" },
    { name: "Bash", proficiency: 60, icon: "💻" },
    { name: "TypeScript", proficiency: 85, icon: "📘" },
  ],
  "Frontend Technologies": [
    { name: "HTML/CSS", proficiency: 95, icon: "🎨" },
    { name: "JavaScript", proficiency: 90, icon: "⚡" },
    { name: "React.js", proficiency: 90, icon: "⚛️" },
    { name: "Angular", proficiency: 75, icon: "🅰️" },
    { name: "Bootstrap", proficiency: 85, icon: "🅱️" },
    { name: "Tailwind CSS", proficiency: 90, icon: "🎐" },
  ],
  "Backend Technologies": [
    { name: "Node.js", proficiency: 85, icon: "🟢" },
    { name: "Express.js", proficiency: 85, icon: "🚂" },
    { name: "RESTful APIs", proficiency: 90, icon: "🔌" },
    { name: "Next.js", proficiency: 70, icon: "▲" },
  ],
  "Databases": [
    { name: "MongoDB", proficiency: 85, icon: "🍃" },
    { name: "MySQL", proficiency: 80, icon: "🐬" },
    { name: "Firebase", proficiency: 70, icon: "🔥" },
  ],
  "AI & Machine Learning": [
    { name: "RAG", proficiency: 85, icon: "🔍" },
    { name: "AI Agents", proficiency: 80, icon: "🤖" },
    { name: "Prompt Engineering", proficiency: 90, icon: "✍️" },
    { name: "LLM Integrations", proficiency: 85, icon: "🧠" },
    { name: "Generative AI", proficiency: 85, icon: "✨" },
    { name: "Model Context Protocol", proficiency: 75, icon: "🔗" },
    { name: "Fine-tuning", proficiency: 70, icon: "⚡" },
    { name: "Embeddings", proficiency: 80, icon: "📊" },
    { name: "Vector Databases", proficiency: 75, icon: "🗃️" },
  ],
  "Cloud & DevOps": [
    { name: "AWS", proficiency: 70, icon: "☁️" },
    { name: "GCP", proficiency: 65, icon: "🌐" },
    { name: "Docker", proficiency: 75, icon: "🐳" },
    { name: "Git/GitHub", proficiency: 90, icon: "📦" },
  ],
};

// ============================================
// EDUCATION DATA
// ============================================

export const EDUCATION = [
  {
    id: 1,
    institution: "HOF University of Applied Sciences",
    degree: "Computer Science",
    type: "Exchange Semester",
    duration: "March 2024 - August 2024",
    location: "Germany",
    description: "International exchange program focused on advanced computer science topics and cultural immersion.",
    highlights: [
      "International exposure",
      "Advanced CS curriculum",
      "Cross-cultural collaboration"
    ]
  },
  {
    id: 2,
    institution: "DKTE Society's Textile & Engineering Institute",
    degree: "B.Tech in Computer Science",
    type: "Bachelor's Degree",
    duration: "November 2021 – June 2025",
    location: "Ichalkaranji, India",
    cgpa: "8.03/10",
    description: "Comprehensive computer science education with focus on software development and emerging technologies.",
    highlights: [
      "Strong academic performance",
      "Multiple projects completed",
      "Active in technical clubs"
    ]
  }
];

// ============================================
// PROJECTS DATA
// ============================================

export const PROJECTS = [
  {
    id: 1,
    name: "Gram Panchayat Services Website",
    tagline: "Digital India Initiative",
    description: "Developed a live, fully responsive website providing Panchayat services as part of a Digital India initiative. Integrated a RAG-based AI chatbot answering user queries using real-time data. Added regional language support to make the platform more accessible to rural users.",
    longDescription: "A comprehensive platform for rural governance digitization, featuring real-time service delivery, multilingual support, and an intelligent AI assistant powered by RAG technology. The system handles user queries efficiently and provides accurate information based on government data.",
    techStack: ["React.js", "Firebase", "Tailwind CSS", "RAG AI", "NLP"],
    features: [
      "RAG-based AI chatbot for instant query resolution",
      "Regional language support (Hindi, Marathi)",
      "Real-time service updates",
      "Secure Firebase deployment",
      "Responsive design for all devices"
    ],
    image: "/projects/gram-panchayat.jpg",
    liveDemo: "#",
    repository: "#",
    category: "Full-Stack",
    year: "2024"
  },
  {
    id: 2,
    name: "DripNest – E-commerce Platform",
    tagline: "Modern Shopping Experience",
    description: "Full-stack e-commerce platform with seller dashboard for product CRUD operations. Real-time product updates with MongoDB + REST APIs. Modern, responsive UI for smooth shopping experience.",
    longDescription: "A complete e-commerce solution featuring a customer-facing storefront and a comprehensive seller dashboard. Built with modern web technologies to ensure scalability, performance, and an exceptional user experience.",
    techStack: ["HTML", "CSS", "Bootstrap", "JavaScript", "Node.js", "MongoDB"],
    features: [
      "Seller dashboard with CRUD operations",
      "Real-time inventory management",
      "Shopping cart and checkout system",
      "Product search and filtering",
      "Order tracking system"
    ],
    image: "/projects/dripnest.jpg",
    liveDemo: "#",
    repository: "#",
    category: "E-commerce",
    year: "2023"
  },
  {
    id: 3,
    name: "AI Customer Support Chatbot",
    tagline: "Intelligent Assistance",
    description: "Built an AI chatbot using NLTK and TensorFlow for accurate, context-aware intent classification. Developed a responsive chat interface with real-time messaging and typing indicators. Integrated SQLite with basic usage alerts.",
    longDescription: "An intelligent customer support solution powered by machine learning. The chatbot understands user intent, provides contextual responses, and learns from interactions to improve accuracy over time.",
    techStack: ["Python", "TensorFlow", "Flask", "NLTK", "SQLite"],
    features: [
      "NLP-powered intent classification",
      "Context-aware responses",
      "Real-time messaging interface",
      "Typing indicators",
      "Usage analytics and alerts"
    ],
    image: "/projects/chatbot.jpg",
    liveDemo: null,
    repository: "#",
    category: "AI/ML",
    year: "2023"
  }
];

// ============================================
// CERTIFICATIONS DATA
// ============================================

export const CERTIFICATIONS = [
  {
    id: 1,
    name: "The Complete Full-Stack Web Development Bootcamp",
    issuer: "Dr. Angela Yu",
    platform: "Udemy",
    date: "2023",
    description: "Comprehensive full-stack development course covering HTML, CSS, JavaScript, Node.js, React, and databases.",
    skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    credentialUrl: "#"
  },
  {
    id: 2,
    name: "Ultimate Web Development Course 2025",
    issuer: "Haris Ali Khan",
    platform: "Udemy",
    date: "2024",
    description: "Advanced web development techniques including modern frameworks and best practices.",
    skills: ["Web Development", "Modern Frameworks", "Best Practices"],
    credentialUrl: "#"
  },
  {
    id: 3,
    name: "Learn Ethical Hacking From Scratch",
    issuer: "Zaid Sabih (z-Security)",
    platform: "Udemy",
    date: "2023",
    description: "Comprehensive ethical hacking and cybersecurity fundamentals course.",
    skills: ["Cybersecurity", "Penetration Testing", "Network Security"],
    credentialUrl: "#"
  },
  {
    id: 4,
    name: "Generative AI Mastermind",
    issuer: "Outskill",
    platform: "Outskill",
    date: "2024",
    description: "In-depth exploration of generative AI technologies, LLMs, and practical applications.",
    skills: ["Generative AI", "LLMs", "Prompt Engineering", "AI Applications"],
    credentialUrl: "#"
  }
];

// ============================================
// LANGUAGES
// ============================================

export const LANGUAGES = [
  { name: "English", level: "Fluent", proficiency: 95 },
  { name: "Hindi", level: "Native", proficiency: 100 },
  { name: "Marathi", level: "Native", proficiency: 100 }
];

// ============================================
// ANIMATION TIMING CONSTANTS
// ============================================

export const ANIMATION_TIMINGS = {
  instant: 0.1,
  fast: 0.3,
  normal: 0.6,
  slow: 1.2,
  verySlow: 2.0
};

export const EASING_FUNCTIONS = {
  easeOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
  easeIn: 'cubic-bezier(0.7, 0, 0.84, 0)',
  easeInOut: 'cubic-bezier(0.87, 0, 0.13, 1)',
  spring: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  smooth: 'cubic-bezier(0.4, 0, 0.2, 1)'
};

export const STAGGER_DELAYS = {
  list: 0.1,
  grid: 0.15,
  letters: 0.05,
  sections: 0.2
};

// ============================================
// OBSERVER OPTIONS
// ============================================

export const OBSERVER_OPTIONS = {
  threshold: 0.2,
  rootMargin: '-50px'
};

// ============================================
// NAVIGATION LINKS
// ============================================

export const NAV_LINKS = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'certifications', label: 'Certifications', href: '#certifications' },
  { id: 'contact', label: 'Contact', href: '#contact' }
];

// ============================================
// SOCIAL LINKS
// ============================================

export const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/atharva-sarada",
    icon: "linkedin"
  },
  {
    name: "GitHub",
    url: "https://github.com/atharva-sarada",
    icon: "github"
  },
  {
    name: "Email",
    url: "mailto:atharva.sarada@example.com",
    icon: "mail"
  }
];

// ============================================
// COLOR CONSTANTS
// ============================================

export const AURORA_COLORS = ['#667eea', '#764ba2', '#f093fb', '#4facfe'];

export const SKILL_CATEGORY_COLORS = {
  "Programming Languages": "#667eea",
  "Frontend Technologies": "#f093fb",
  "Backend Technologies": "#764ba2",
  "Databases": "#4facfe",
  "AI & Machine Learning": "#00d4ff",
  "Cloud & DevOps": "#667eea"
};
