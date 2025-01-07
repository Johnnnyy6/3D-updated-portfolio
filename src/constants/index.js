import { micro, lowes, usaa } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    sql,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    python,
    snapgram,
    summiz,
    tailwindcss,
    cSharp,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
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
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
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
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: cSharp,
        name: "C#",
        type: "Backend"
    }
];

export const experiences = [
    {
        title: "FullStack Software Engineer intern",
        company_name: "Microsoft",
        icon: micro,
        iconBg: "#ffffff",
        date: "June 2021 - August 2021",
        points: [
            "Led team in design thinking, delivering React prototype with measurable user engagement.",
            "Ensured data integrity by testing and validating over 10 database connections.",
            "Developed Agile React features, creating test cases in Jest for robust performance.",
        ],
    },
    {
        title: "Backend Software Engineer intern",
        company_name: "Lowes",
        icon: lowes,
        iconBg: "#004990",
        date: "June 2022 - August 2022",
        points: [
            "Automated order republishing using Python, enhancing transaction efficiency via Kafka.",
            "Engineered a Python file transfer system with Docker, optimizing data flow between cloud and SFTP.",
            "Boosted processing speed and reliability in transaction handling through automation.",
            "Implemented innovative solutions for seamless data transfer and system integration.",
            "Achieved measurable improvements in data processing and system efficiency.",
        ],
    },
    {
        title: "FullStack Software Engineer Intern",
        company_name: "Microsoft",
        icon: micro,
        iconBg: "#ffffff",
        date: "June 2023 - August 2023",
        points: [
            "Implemented search feature in Power BI, enhancing data access and usability.",
            "Developed C# API endpoint, optimizing backend efficiency and data retrieval.",
            "Integrated React search in UI, boosting user interaction and experience.",
            "Authored Jest tests for React components, ensuring robust functionality.",
        ],
    },
    {
        title: "Backend Software Engineer",
        company_name: "USAA",
        icon: usaa,
        iconBg: "#1A3258",
        date: "February 2024 - Present",
        points: [
            "Develop backend solutions with Java and Spring Boot to boost system performance and scalability.",
            "Design and implement Kafka killswitch for controlled app shutdown during system issues.",
            "Integrate killswitch across apps for consistent Kafka topic management.",
            "Collaborate with teams to enhance Kafka error handling and system stability.",
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
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];