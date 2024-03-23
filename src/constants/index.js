import {salesforce, bolt } from "../assets/images";
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
    metaverse
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
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    }
];

export const experiences = [
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
    {
        title: "Salesforce Developer",
        company_name: "Salesforce",
        icon: salesforce,
        iconBg: "#99d8f2",
        date: "Oct 2022 - Dec 2023",
        points: [
            "Completed the Smart Bridge Salesforce Supported Virtual Internship Program, accredited by AICTE.",
            "Acquired comprehensive knowledge of Salesforce products and services through hands-on experience in Salesforce development.",
            "Successfully accomplished a Salesforce certification and earned super badges on the Salesforce Trailblazer Platform.",
            "Engaged in practical application of Salesforce skills during the internship, contributing to real-world projects and solutions.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/HP200421',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/haridas-pawar-025720246/',
    }
];

export const projects = [
    {
        iconUrl: zomato,
        theme: 'btn-back-red',
        name: 'Zomato Landing Page',
        description: 'A replica of the Zomato landing page, showcasing various restaurants and food options. This project focuses on the frontend implementation using HTML and CSS.',
        link: 'https://hp200421.github.io/Zomato_Landing_Page/',
    },
    {
        iconUrl: metaverse,
        theme: 'btn-back-green',
        name: 'Metaverse Explore',
        description: 'A captivating Metaverse-themed React application built using the Next.js framework, Tailwind CSS for responsive design, and Framer Motion library for stunning animations.',
        link: 'https://metaverseexplore.netlify.app/',
    },
    {
        iconUrl: assistant,
        theme: 'btn-back-yellow',
        name: 'Desktop Assistant',
        description: 'Desktop Assistant is a voice-controlled AI assistant that performs various tasks based on user voice commands. The OpenAI GPT-3.5 API for natural language understanding and generation.',
        link: 'https://github.com/HP200421/Desktop-Assistant',
    },
    {
        iconUrl: quiz,
        theme: 'btn-back-pink',
        name: 'Quiz Game',
        description: 'The simple quiz game created using HTML, CSS, and JavaScript. It allows users to test their knowledge by answering multiple-choice questions.',
        link: 'https://hp200421.github.io/Quiz_Game/',
    },
    {
        iconUrl: weather,
        theme: 'btn-back-blue',
        name: 'Weather Application',
        description: 'A one-page weather website providing temperature, humidity, wind information, and sunrise/sunset details for specified cities using Weather API.',
        link: 'https://hp200421.github.io/Weather_Application/',
    },
    {
        iconUrl: analysis,
        theme: 'btn-back-black',
        name: 'Hotel Booking Analysis',
        description: 'A Python project employing data visualization to analyze trends in hotel booking cancellations, offering valuable insights for informed decision-making by hotel managers and stakeholders.',
        link: 'https://github.com/HP200421/Analysis_of_Hotel_Booking_Cancellation',
    }
];