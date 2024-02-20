import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  dBeaver,
  Cpp,
  aws,
  androidstudio,
  AI_micro,
  mysql,
  postman,
  python,
  wordpress,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  docker,
  zack,
  Yi,
  cafe,
  university,
  starChat,
  about01,
  about02,
  about03,
  about04,
  about05,
  AI,
  yulinnote,
  house,
  faceDetection,
  characterAI,
  ford,

} from "../assets"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
]

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
]

const technologies = [


  // {
  //   name: "dBeaver",
  //   icon: dBeaver
  // },
  // {
  //   name: "AI_micro",
  //   icon: AI_micro
  // },
  {
    name: "mysql",
    icon: mysql
  },
  {
    name: "python",
    icon: python
  },
  {
    name: "postman",
    icon: postman
  },


  // {
  //   name: "wordpress",
  //   icon: wordpress
  // },


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
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "docker",
    icon: docker,
  },
]

const experiences = [
  {
    title: "Computer Engineering",
    company_name: "University of Waterloo",
    icon: university,
    iconBg: "#E6DEDD",
    date: "Sept 1 2023 - Present",
    points: [
      // 待修改
      "Broad knowledge from diverse courses: University of Waterloo offers a wide curriculum, enhancing students' knowledge across various subjects and enriching their learning experience.",
      "C++ programming: Students learn C++ and utilize it to implement various functionalities and features.",
      "Comprehensive Computer Engineering program: University of Waterloo offers a comprehensive program covering computer architecture, software development, digital systems, networking, and more.",
      "Code writing for Hardware: Students learn how to write code for Hardware using Quartus VHDL, specifically in the context of designing projects for FPGA.",
    ]
  },

  {
    title: "Software Developer",
    company_name: "Caerulean AI Inc.",
    icon: reactjs,
    iconBg: "#383E56",
    date: "May 1 2024 - August 31 2023",
    points: [
      // 待修改
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborated with diverse teams, delivering innovative AI‑driven solutions using Azure services, and applying Design Thinking methodologies to address intricate challenges.",
      "Achieved certifications in Azure Fundamentals and Azure AI Fundamentals, acquiring practical skills in deploying, managing, and configuring Azure resources and AI services.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer SYNC HMI",
    company_name: "Ford Motor Company of Canada, Limited",
    icon: ford,
    iconBg: "#00095B",
    date: "Jan 8 2024 - Apr 19 2024",
    points: [
      // 待修改
      "Engineered advanced analytics functionality within the SYNC system's Human-Machine Interface, enhancing user interaction data collection and assessment.",
      "Fostered cross-functional collaboration to drive innovative solution development with React, leveraging Design Thinking approaches for complex problem-solving.",
      "Proficient in utilizing Linux for the modification and enhancement of SYNC system components in a bench testing environment.",
      "Actively engaged in peer code reviews, offering valuable and constructive feedback to promote continuous improvement and collaborative development.",
    ],
  }
  
]

const testimonials = [
  {
    testimonial:
      "Yulin's talent, persistence, thirty of knowledge, and faith of commitment compose his fast learning ability, and remarkable productivity that is above and beyond his peers asides his academic achievements.",
    name: "Zack Liu",
    designation: "Full Stack Engineer/Development Manager",
    company: "Aurora Tech Development",
    image: zack,
  },
  {
    testimonial:
      "I highly recommend Yulin for his exceptional work ethic and extensive knowledge in our software project. His dedication, expertise, and proactive approach were instrumental in its success. Yulin's technical proficiency and excellent communication skills made him an invaluable asset to our team. It was a pleasure working with him.",
    name: "Yi Luo",
    designation: "Senior software architect",
    company: "Caerulean AI",
    image: Yi,
  },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
]

const projects = [
  {
    name: "Cafe Website",
    type: "Fullstack",
    description:
      "Developed a responsive website using Node.js as the backend framework, along with HTML, CSS, and MySQL for the frontend. Implemented a user reservation system and an admin panel for efficient management.",
    tags: [
      {
        name: "Node js",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: cafe,
    source_code_link: "https://github.com/xiayulin123/user_back_end.git",
  },
  {
    name: "character-ai.digital",
    type: "AI",
    description: "It's tailored chatbot, built with Next.js and Clerk for authentication, seamlessly integrates AI capabilities through openai edge. It scales using Prisma, planetscale, and cloudinary, and strong security via langchain and zod.",
    tags: [
      {
        name: "Next js",
        color: "purple-text-gradient",
      },
      {
        name: "Prisma",
        color: "pink-text-gradient",
      },
      {
        name: "Typescript",
        color: "yellow-text-gradient",
      },
    ],
    image: characterAI,
    source_code_link: "https://github.com/xiayulin123/Character-AI"
  },
  {
    name: "yulinnote.online",
    type: "Fullstack",
    description:
      "YulinNote is a notes website with both front-end and back-end deployed on Oracle Cloud, connected to a Mongo database. It allows users to record notes and includes authentication functionality.",
    tags: [
      {
        name: "MongoDB",
        color: "brown-text-gradient",
      },
      {
        name: "Typescript",
        color: "purple-text-gradient",
      },
      {
        name: "Oracle",
        color: "blue-text-gradient",
      },
    ],
    image: yulinnote,
    source_code_link: "https://github.com/xiayulin123/NoteBook",
  },
  {
    name: "Facial Detect",
    type: "AI",
    description:
      "FaceSim Detect is an advanced facial recognition system utilizing Siamese network architecture. It offers real-time facial verification and detection, capturing images from webcams and computing similarity distances. Securely designed with TensorFlow and OpenCV, it ensures user confidence through robust authentication.",
    tags: [
      {
        name: "TensorFlow",
        color: "yellow-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "Security",
        color: "blue-text-gradient",
      },
    ],
    image: faceDetection,
    source_code_link: "https://github.com/xiayulin123/Facial_Recognition",
  },

  {
    name: "Social App",
    type: "Fullstack",
    description:
      "Star Chat is a lightweight messaging application designed for seamless communication between users. It provides a delightful user experience and has been optimized to maximize its effectiveness.",
    tags: [
      {
        name: "Socket",
        color: "yellow-text-gradient",
      },
      {
        name: "Javascript",
        color: "purple-text-gradient",
      },
      {
        name: "Android Studio",
        color: "blue-text-gradient",
      },
    ],
    image: starChat,
    source_code_link: "https://github.com/xiayulin123/StarChat_frontend",
  },
  {
    name: "Prediction Model",
    type: "AI",
    description:
      "This repository houses two AI models, one for movie rating prediction (Movie_Rate) and the other for California housing price estimation (California_Housing), utilizing Python libraries like Pandas, NumPy, Matplotlib, and Seaborn, along with datasets from Kaggle, to train and optimize these models, resulting in highly efficient and accurate predictions.",
    tags: [
      {
        name: "Pandas",
        color: "yellow-text-gradient",
      },
      {
        name: "NumPy",
        color: "blue-text-gradient",
      },
      {
        name: "Matplotlib",
        color: "green-text-gradient",
      },
    ],
    image: house,
    source_code_link: "https://github.com/xiayulin123/MovieRate_and_CaliforniaHousing_AI_Model",
  },
  {
    name: "Object Detection",
    type: "AI",
    description:
      "The AI project is an object recognition model developed in Jupyter Notebook using PyTorch, OpenCV, and NumPy to identify AirPods and water bottles in images with detailed instructions provided to retrain and extend the model's capabilities. The project also incorporates YOLOv5 for real-time object detection and an image labeling tool for data preparation.",
    tags: [
      {
        name: "Node js",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "purple-text-gradient",
      },
    ],
    image: AI,
    source_code_link: "https://github.com/xiayulin123/Object_Detection",
  },

]
const images =
  { about1: about01, about2: about02, about3: about03, about4: about04, about5: about05 }

export { services, technologies, experiences, testimonials, projects, images }
