// EFF5EF
// EB644D
// D37194
// 875949
// 2C2C3C
import {
  gmail,
  linkedin,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  google,
  honeywell,
  gt,
  resume,
  vantage,
  github,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experiences",
  },
  {
    id: "project",
    title: "Projects",
  },
];

const services = [
  {
    title: "GitHub",
    icon: github,
    link: "https://github.com/ssaniya-dev",
  },
  {
    title: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/saniya-savla/",
  },
  {
    title: "Resume",
    icon: resume,
    link: "https://drive.google.com/file/d/1-obUDyotvCOmLJuTenWTJpyWsBkvq85T/view?usp=sharing",
  },
  {
    title: "Email",
    icon: gmail,
    link: "mailto:saniyavsavla@gmail.com",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "STEP Intern",
    company_name: "Google",
    icon: google,
    iconBg: "#FFFFFF",
    date: "May 2024 - Present",
    points: [
      "Incoming Intern for Summer 2024 on the Workspace AI team using C++ and Python.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Honeywell",
    icon: honeywell,
    iconBg: "#FFFFFF",
    date: "May 2023 - Aug 2023",
    points: [
      "Synchronized data by creating a TypeScript REST API to pull 33k+ assets from an Oracle table to local storage.",
      "Streamlined airbase asset retrieval by 42% with Python large language models for text-to-SQL generation.",
      "Facilitated the visualization of engine data through a paginated React table with an integrated export feature.",
      "Rectified 10+ critical bugs in a React app, ensuring accurate defense equipment data display from MySQL.",
    ],
  },
  {
    title: "Undergraduate Researcher",
    company_name: "Georgia Tech Financial Services Innovation Lab",
    icon: gt,
    iconBg: "#FFFFFF",
    date: "Jan 2023 - Present",
    points: [
      "Co-engineered a Python-based model to predict projected earnings for 500+ firms, achieving a precision rate of 71.43% with random forests and 66.98% using gradient boosting techniques.",
      "Prepped XBRL 10-K, I/B/E/S, and CRSP data with Pandas by handling inconsistencies and removing outliers.",
      "Revealed the top 10 earnings predictors by calculating summary statistics for factors in financial statements.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Vantage Risk",
    icon: vantage,
    iconBg: "#FFFFFF",
    date: "June 2022 - Aug 2022",
    points: [
      "Developed React Dashboard with a Python backend for API-driven license access across eight developer tools.",
      "Reduced license tracking time by 55% by hosting the dashboard with Microsoft Azure and a PostgreSQL database.",
      "Identified a security breach during a CTF event, discerning hacker activity and implementing countermeasures.",
      "Strengthened a deal analysis application by encrypting 30+ secrets and optimizing for multiple virtual machines.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Syntaxia Compiler",
    description:
      "A compiler for a custom language capable of handling arithmetic operations, loops, and conditionals with lexical analysis, semantic analysis, and more.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "C",
        color: "green-text-gradient",
      },
      {
        name: "x86",
        color: "pink-text-gradient",
      },
    ],
    image: gmail,
    source_code_link: "https://github.com/ssaniya-dev/Syntaxia",
  }, 
  {
    name: "AllerGEN",
    description:
      "A React web app that leverages Tesseract OCR to analyze food labels and alert users to potential allergens with 72% accuracy, powered by a custom Flask REST API.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "TesseractOCR",
        color: "pink-text-gradient",
      },
    ],
    image: gmail,
    source_code_link: "https://github.com/ssaniya-dev/allergen",
  },
  {
    name: "Dressify",
    description:
      "A Java mobile app with image recognition to manage clothing inventory using MongoDB and TensorFlow for personalized styling suggestions.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: gmail,
    source_code_link: "https://github.com/ssaniya-dev/Dressify",
  },
  {
    name: "PandemicPal",
    description:
      "A chatbot that is aimed at assisting businesses during COVID-19. It automatically answers a user's question about a store by leverging natural language processing.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "PyTorch",
        color: "green-text-gradient",
      },
      {
        name: "AI/ML",
        color: "pink-text-gradient",
      },
    ],
    image: gmail,
    source_code_link: "https://github.com/ssaniya-dev/ai-chatbot",
  },
  {
    name: "CelestiaOS",
    description:
      "Built an operating system kernel with system calls for ELF programs, including preemptive scheduling, page cache, virtual memory, and a TLB.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "C",
        color: "green-text-gradient",
      },
      {
        name: "Makefile",
        color: "pink-text-gradient",
      },
    ],
    image: gmail,
    source_code_link: "https://github.com/ssaniya-dev/",
  }, 
  {
    name: "TravelHaven",
    description:
      "A React-based travel application that recommends tourists attractions based on a set of parameters such as rating and price point.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: gmail,
    source_code_link: "https://github.com/ssaniya-dev/fbla-travelapp",
  },
];

export { services, technologies, experiences, testimonials, projects };
