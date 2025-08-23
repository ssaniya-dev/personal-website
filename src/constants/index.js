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
  amazon,
  honeywell,
  gt,
  resume,
  vantage,
  github,
  meta,
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
    title: "Software Engineer Intern",
    company_name: "Meta",
    icon: meta,
    iconBg: "#FFFFFF",
    date: "May 2025 - Aug 2025",
    points: [
      "Built an access control list (ACL) analyzer in Hack (PHP) to flag risks, preventing unauthorized system access.",
      "Created analyzer objects to encapsulate alert conditions (e.g., grant limits) and query ACL state for evaluation.",
      "Onboarded ∼6K ACLs into the analyzer via bulk ingestion scripts in Hack (PHP) for automated monitoring.",
      "Delivered a React-based dashboard with filtering and pagination, cutting time-to-diagnosis for risks by ∼50%.",
    ],
  },
  {
    title: "Software Development Engineer Intern",
    company_name: "Amazon",
    icon: amazon,
    iconBg: "#FFFFFF",
    date: "Sept 2024 - Dec 2024",
    points: [
      "Built dashboards to view eMMC flash usage with Python alerts, boosting anomaly detection accuracy by ∼32%.",
      "Optimized SQL queries with partitioning/indexing, slashing data aggregation times from ≤ 90s to ≤ 5s.",
    ],
  },
  {
    title: "STEP Intern",
    company_name: "Google",
    icon: google,
    iconBg: "#FFFFFF",
    date: "May 2024 - Aug 2024",
    points: [
      "Leveraged C++ to collaboratively set a basis for tone-based text generation within Gemini for Google Docs.",
      "Created Python configs to streamline action pipelines and tone updates, cutting deployment from days to hours.",
      "Utilized prompt engineering to enhance LLM inputs to generate text with a given tone for 2k+ daily active users.",
      "Wrote an extension design document draft for detecting a tone from a document, allowing for contextual accuracy."
    ]
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
      "Increased earning prediction accuracy for 500 firms by 20% with gradient boosting and random forests in Python.",
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

const projects = [
  {
    name: "iloveemail.lol",
    description:
      "An AI email agent using NestJS, Python, and YOLOv8 to automate meeting scheduling, Delta flight check-ins, and form autofill with real-time data extraction (HackMIT 2024 - 1st Place Interaction Sponsor Challenge, 3rd Overall).",
    tags: [
      {
        name: "NestJS",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "YOLO",
        color: "pink-text-gradient",
      },
    ],
    image: gmail,
    source_code_link: "https://github.com/ssaniya-dev/hackmit-2024",
  },
  {
    name: "Iris",
    description:
      "An AI-driven navigation system with PyTorch, CUDA, and React Native, enabling real-time hazard detection, multi-modal agents, and 100ms optimized response times (TreeHacks 2025 - 3rd for Most Creative On-Device AI Deployment).",
    tags: [
      {
        name: "PyTorch",
        color: "blue-text-gradient",
      },
      {
        name: "CUDA",
        color: "green-text-gradient",
      },
      {
        name: "React Native",
        color: "pink-text-gradient",
      },
    ],
    image: gmail,
    source_code_link: "https://github.com/RoyceAroc/iris",
  },
  {
    name: "Lunar FLARES",
    description:
      "An autonomous lunar rover navigation system built with C++, Python, and ROS, leveraging custom ROS nodes for terrain analysis and hazard detection to improve navigation safety (Affiliated with the Johns Hopkins Applied Physics Laboratory).",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "ROS",
        color: "pink-text-gradient",
      },
    ],
    // image: gmail,
    // source_code_link: "https://github.com/RoyceAroc/iris",
  },
  {
    name: "GitFile",
    description:
      "A Git wrapper for flat files like PDFs and DOCX, cutting storage costs by 500x with a Next.js frontend and Azure backend (HackUTD 2024 - Best Use of Terraform).",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Azure",
        color: "green-text-gradient",
      },
      {
        name: "C",
        color: "pink-text-gradient",
      },
    ],
    image: gmail,
    source_code_link: "https://github.com/ssaniya-dev/GitFile",
  },
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
];

export { services, technologies, experiences, projects };
