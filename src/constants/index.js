import { bolt, touchmedia, metron } from "../assets/images";
import {
  contact,
  css,
  quiz,
  git,
  github,
  html,
  javascript,
  linkedin,
  nodejs,
  zomato,
  react,
  redux,
  weather,
  assistant,
  tailwindcss,
  mysql,
  c,
  cpp,
  analysis,
  metaverse,
  express,
  mongodb,
  todo,
  remix,
  docker,
  bids,
  building,
} from "../assets/icons";



export const skills = [
  {
    imageUrl: c,
    name: "c",
    type: "Programming Language",
  },
  {
    imageUrl: cpp,
    name: "cpp",
    type: "Programming Language",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: mysql,
    name: "MySQL",
    type: "Database",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: remix,
    name: "Remix",
    type: "Web Framework",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "Tool",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Backend",
  },
];

export const experiences = [
  {
    title: "Software Engineer",
    company_name: "Metron Security",
    icon: metron,
    iconBg: "#fa8269",
    date: "Jan 2025 - Present",
    points: [
      "Built a Jira Forge app to automate project tracking, improving on-time delivery through real-time monitoring.",
      "Optimized Jira API integrations and built reusable React components, cutting load times by 40% and improving UI performance.",
      "Developed a custom ServiceNow application to efficiently manage network incidents for MSP and enterprise-level customers.",
      "Leveraged ServiceNow dashboards to track Incidents, Alerts, and Licenses per customer.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Touchmedia Ads Software",
    icon: touchmedia,
    iconBg: "#99c5ff",
    date: "Dec 2023 - Jan 2025",
    points: [
      "Developed a dynamic admin panel with React.js, implementing secure user authentication and efficient CRUD operations with Axios.",
      "Built the VIT Architecture College website and admin panel, focusing on session management, CRUD operations, and automating data processes.",
      "Created reusable UI components, integrated Firebase push notifications, and managed state using Redux for Bids On Motor website.",
      "Enhanced user experience across projects with React Hook Form, Yup validation, and Toast messaging for seamless interaction.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Bolt IOT",
    icon: bolt,
    iconBg: "#d7f7b0",
    date: "Feb 2023 - Mar 2023",
    points: [
      "Proficient in HTML, CSS, and JavaScript, with a focus on developing interactive and responsive web applications.",
      "Specialized expertise in React.js, demonstrating the ability to build efficient and dynamic user interfaces for web projects.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Experienced in implementing responsive design principles, ensuring optimal user experiences across various devices and screen sizes.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/HP200421",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/haridas-pawar/",
  },
];

export const projects = [
  {
    iconUrl: todo,
    theme: "btn-back-blue",
    projectType: "Professional",
    name: "Doctor Appointment",
    description:
      "Developed a website for booking doctor appointments and Implemented features for OTP via WhatsApp, mobile number, and email confirmation to enhance user experience.",
    link: "https://appointment.touchmediaads.com/drshibli",
  },
  {
    iconUrl: building,
    theme: "btn-back-yellow",
    projectType: "Professional",
    name: "Archtype",
    description:
      "Built an architecture portfolio website with a custom admin panel for content management, enabling seamless updates for projects, blogs, and media.",
    link: "https://www.archtype.in/",
  },
  {
    iconUrl: bids,
    theme: "btn-back-orange",
    projectType: "Professional",
    name: "Bids On Motor Admin Panel",
    description:
      "Developed an interactive website and user-friendly admin panel, leveraging ReactJS for dynamic and reusable UI component. Integrated Firebase push notifications for Admin Panel.",
  },
   {
    iconUrl: zomato,
    theme: "btn-back-red",
    projectType: "Personal",
    name: "Zomato Landing Page",
    description:
      "A replica of the Zomato landing page, showcasing various restaurants and food options. This project focuses on the frontend implementation using HTML and CSS.",
    link: "https://hp200421.github.io/Zomato_Landing_Page/",
  },
  {
    iconUrl: assistant,
    theme: "btn-back-yellow",
    projectType: "Personal",
    name: "Desktop Assistant",
    description:
      "Desktop Assistant is a voice-controlled AI assistant that performs various tasks based on user voice commands. The OpenAI GPT-3.5 API for natural language understanding and generation.",
    link: "https://github.com/HP200421/Desktop-Assistant",
  }
];

export const githubData = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};