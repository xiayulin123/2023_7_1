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
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  jobit,
  tripguide,
  threejs,
  zack,
  Yi,
  cafe,
  university,
  starChat,
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
    name: "figma",
    icon: figma,
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
    date: "May 1 2023 - August 31 2023",
    points: [
      // 待修改
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "Social App",
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
        color: "brown-text-gradient",
      },
    ],
    image: starChat,
    source_code_link: "https://github.com/xiayulin123/StarChat_frontend",
  },

  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
]

export { services, technologies, experiences, testimonials, projects }
