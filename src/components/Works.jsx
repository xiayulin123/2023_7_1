import React, { useEffect } from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, onValue } from "firebase/database";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_APP_DATABASE_URL,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_APP_ID,
  measurementId: import.meta.env.VITE_APP_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const Works = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const [selectedType, setSelectedType] = useState(null);
  const [db_projects, setDB_Projects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const db = getDatabase(app);
    const projectsRef = ref(db, 'projects'); // 'projects' should be the path to your data in the database

    onValue(projectsRef, (snapshot) => {
      const data = snapshot.val();
      const projectsArray = Object.values(data);
      const filteredProjects = selectedType
        ? projectsArray.filter(project => project.type.includes(selectedType))
        : projectsArray.slice(0,9);

      setDB_Projects(filteredProjects);
    });


  }, [selectedType]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          My portfolio showcases my skills and experience through real-world
          projects, demonstrating my ability to solve complex problems, project
          with diverse technologies, and effectively manage projects. Each
          project is accompanied by a brief description, along with links to the
          corresponding code repositories and live demos. This collection serves
          as a testament to my practical expertise and highlights my capability
          to deliver high-quality solutions.
        </motion.p>
      </div>
      <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-4">
      <button
          className={`bg-slate-800 hover:bg-slate-500 text-white px-4 py-2 rounded ${selectedType === 'AI' ? 'bg-slate-500' : ''
            }`}
          onClick={() => setSelectedType('')}>
          Quick View
        </button>
        <button
          className={`bg-slate-800 hover:bg-slate-500 text-white px-4 py-2 rounded ${selectedType === 'CI/CD' ? 'bg-slate-500' : ''
            }`}
          onClick={() => setSelectedType('CI/CD')}>
          CI/CD
        </button>
        <button
          className={`bg-slate-800 hover:bg-slate-500 text-white px-4 py-2 rounded ${selectedType === 'AI' ? 'bg-slate-500' : ''
            }`}
          onClick={() => setSelectedType('AI')}>
          AI
        </button>
        <button
          className={`bg-slate-800 hover:bg-slate-500 text-white px-4 py-2 rounded ${selectedType === 'AI' ? 'bg-slate-500' : ''
            }`}
          onClick={() => setSelectedType('Game')}>
          Game
        </button>
        <button
          className={`bg-slate-800 hover:bg-slate-500 text-white px-4 py-2 rounded ${selectedType === 'AI' ? 'bg-slate-500' : ''
            }`}
          onClick={() => setSelectedType('GO')}>
          GO
        </button>
        <button
          className={`bg-slate-800 hover:bg-slate-500 text-white px-4 py-2 rounded ${selectedType === 'Fullstack' ? 'bg-slate-500' : ''
            }`}
          onClick={() => setSelectedType('Fullstack')}>
          Full Stack
        </button>
      </div>
      <div className="mt-20 flex flex-wrap gap-7" style={{ justifyContent: 'space-between' }}>
        {db_projects.map((project, index) => (
          <div key={index} className="project-item">
            <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
              <div className="relative w-full h-[230px]">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover rounded-2xl" />
                <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                  <div onClick={() => window.open(project.source_code_link, '_blank')} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                    <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
                <p className="mt-2 text-secondary text-[14px]">{project.description}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                    #{tag.name}
                  </p>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Works, '')
