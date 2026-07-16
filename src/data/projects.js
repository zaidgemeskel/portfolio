import netflixImg from "../assets/netflix.png";
import chatgptImg from "../assets/chatgpt.png";
import evangadiImg from "../assets/evangadi.png";

export const projects = [
  {
    id: 1,
    title: "AI-Powered Evangadi Forum",
    description:
      "Developed a full-stack AI-powered discussion platform where users can register, log in, ask questions, answer community discussions, and receive AI-assisted responses. The application combines traditional forum functionality with AI features to help users get intelligent answers while encouraging community interaction.",
    keyFeatures: [
      "Secure User Authentication (Register & Login)",
      "AI-Powered Question Answering",
      "Intelligent Conversation Interface",
      "Ask & Answer Community Questions",
      "CRUD Operations",
      "Responsive Design",
      "RESTful API",
      "MySQL Database",
      "Clean and Modern User Interface",
    ],
    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MySQL",
      "REST API",
      "Git",
      "GitHub",
      "AI API Integration",
    ],
    image: evangadiImg,
    liveDemo: "https://evangadif.netlify.app/",
    github: "https://github.com/zaidgemeskel/Evangadi_Forum.git",
    featured: true,
    aiPowered: true,
  },
  {
    id: 2,
    title: "ChatGPT Clone",
    description:
      "A full-stack AI-inspired chat application featuring user authentication, conversation management, responsive design, and a clean modern interface. The project demonstrates frontend-backend integration using React, Node.js, Express.js, and MySQL.",
    keyFeatures: [
      "Intelligent Conversation Interface",
      "CRUD Operations",
      "Responsive Design",
      "RESTful API",
      "MySQL Database",
      "Clean and Modern User Interface",
    ],

    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MySQL",
      "REST API",
    ],
    image: chatgptImg,
    liveDemo: "https://gptclone-ui.netlify.app/",
    github: "https://github.com/zaidgemeskel/Gptclone.git",
    featured: true,
  },
  {
    id: 3,
    title: "Netflix Clone",
    description:
      "A responsive Netflix-inspired landing page built using React. The project focuses on modern UI design, reusable components, and responsive layouts while providing an engaging user experience.",
 keyFeatures: [
     "Reusable components",
      "Responsive Design",
      "Providing an engaging user experience",
      "Clean and Modern User Interface",
    ],

    technologies: ["React", "JavaScript", "CSS"],
    image: netflixImg,
    liveDemo: "https://movietb.netlify.app/",
    github: "https://github.com/zaidgemeskel/movieTb.git",
    featured: true,
  },
];
