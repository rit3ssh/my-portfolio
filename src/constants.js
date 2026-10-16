// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import Djangologo from './assets/tech_logo/django.svg';
import djangoRESTframeworklogo from './assets/tech_logo/djangorestframework.png';

// Education Section Logo's
import durgaschoollogo from './assets/education_logo/durgaschool.jpg';
import TUlogo from './assets/education_logo/TULogo.png';

// Project Section Logo's
import movierecommenderLogo from './assets/work_logo/movie-recommender.png';
import chatappLogo from './assets/work_logo/chatapp.png';
import sevabotLogo from './assets/work_logo/sevabot.png';
import imageColorizationLogo from './assets/work_logo/imagecolorizationresult.png';
import interviewprepLogo from './assets/work_logo/perfectpreparation.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },

      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },

      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'Django', logo: Djangologo },

      { name: 'REST', logo:djangoRESTframeworklogo}
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Docker', logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    ],
  },
];

export const experiences = [
    {
      id: 0,
      role: "Fullstack Developer",
      // company: "Webverse Digital",
      // date: "April 2024 - Present",
      // desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      role: "Fullstack Engineer",
      // company: "Agumentik Group of Companies",
      // date: "July 2023 - March 2024",
      // desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      role: "Frontend Intern",
      // company: "Newton School",
      // date: "September 2021 - August 2022",
      // desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
];

export const education = [
    {
      id: 0,
      img: TUlogo,
      school: "Purwanchal Engineering Campus,Dharan-08",
      location: "Dharan-08",
      date: "2083 BS | 2026 AD",
      status: "Graduated",
      grade: "73.08 %",
      desc: "I completed my Bachelor in Computer Engineering from Purwanchal Engineering Campus, Dharan-08, under Tribhuvan University.I've completed all the coursework and requirements for my degree, and I am currently awaiting the final results. My academic performance has been good.",
      degree: "Bachelor in Computer Engineering(B.E.)-Tribhuvan University",
      order: 3,
    },
    {
      id: 1,
      img: durgaschoollogo,
      school: "Shree Durga Model Secondary School, Kalaiya-08,Bara",
      location: "Kalaiya-08, Bara",
      date: "2077 BS | 2020 AD",
      grade: "3.54 GPA",
      desc: "I've completed my intermediate(+2) education from Shree Durga Model Secondary School, Kalaiya-08, Bara, under the NEB board.Completed all the coursework,practicals and assignments for my degree and graduated with a GPA of 3.54. My academic performance has been good.",
      degree: "NEB(TSLC), Computer Engineering",
      order: 2,
    },
    {
      id: 2,
      img: durgaschoollogo,
      school: "Shree Durga Model Secondary School, Kalaiya-08,Bara",
      location: "Kalaiya-08, Bara",
      date: "2074 BS | 2018 AD",
      grade: "3.56 GPA",
      desc: "I've taken my Secondary education Examination from Shree Durga Model Secondary School, Kalaiya-08, Bara, under the NEB board and laid the groundwork for my later studies in computer engineering.",
      degree: "NEB(TSEE),Computer Engineering",
      order: 1,
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "RAG-Based Chatbot for Nepali Language",
      description:
        "A Nepali-language RAG chatbot for semantic search and document retrieval, built with SentenceTransformer, ChromaDB, Django REST Framework, and React.",
      image: sevabotLogo,
      tags: ["Python", "Django", "REST Framework", "React JS", "ChromaDB", "SentenceTransformer"],
      github: "https://github.com/rit3ssh/SevaBot-A-RAG-based-nepali-chatbot",
      webapp: "https://seva-bot-a-rag-based-nepali-chatbot.vercel.app/login",
    },

    {
      id: 1,
      title: "KuraKani - Real Time Chat Application",
      description:
        "A real-time chat application with a modern React interface and Socket.IO messaging, powered by a Node.js, Express, and MongoDB backend.",
      image: chatappLogo,
      tags: ["React JS", "MongoDB", "Node JS", "Express JS", "tailwindcss","DaisyUI", "Socket.IO"],
      github: "https://github.com/rit3ssh/KuraKani-MERN",
      webapp: "https://kurakani-mern.onrender.com/",
    }, 
    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A personalized movie recommendation app that suggests films based on user preferences.",
      image: movierecommenderLogo,
      tags: ["Jupyter Notebook", "Python", "Pandas","numpy","huggingface_hub","streamlit"],
      github: "https://github.com/rit3ssh/movie-recommender-system",
      webapp: "https://findbestmovie.streamlit.app/",
    },
    {
      id: 3,
      title: "Image Colorizer",
      description:
        "A cGAN-based deep learning model that colorizes grayscale images using PyTorch.",
      image: imageColorizationLogo,
      tags: ["Python", "PyTorch", "pandas", "numpy", "matplotlib"],
      github: "https://github.com/rit3ssh/IMAGE-COLORIZATION-VIA-CGANS-USING-RESNET-18-BACKED-U-NET-ARCHITECTURE",
      // webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    },
    {
      id: 4,
      title: "Perfect Preparation - Interview Preparation Platform",
      description:
        "An interview preparation platform that uses job preferences and the Gemini API to generate CVs, interview questions, answers, and guided practice.",
      image: interviewprepLogo,
      tags: ["React JS","SCSS", "Node JS", "Express JS", "MongoDB", "Gemini API"],
      github: "https://github.com/rit3ssh/perfectpreparation",
    }
];