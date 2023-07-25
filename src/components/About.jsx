import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import './css/About.css'
import { styles } from '../styles'
import { images } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
// const ServiceCard = ({ index, title, icon }) => {
//   return (
//     <Tilt className="xs:w-[250px] w-full">
//       <motion.div
//         variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
//         className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
//         <div
//           options={{
//             max: 45,
//             scale: 1,
//             speed: 450,
//           }}
//           className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
//           <img src={icon} alt={title} className="w-16 h-16 object-contain" />
//           <h3 className="text-white text-[20px] font-bold text-center">
//             {title}
//           </h3>
//         </div>
//       </motion.div>
//     </Tilt>
//   )
// }

const About = () => {
  const abouts = [
    {
      title: 'Web Development',
      description: 'I am a good web developer',
      imgUrl: images.about1,
    },
    {
      title: 'Backend Development',
      description: 'I am a good backend developer',
      imgUrl: images.about2,
    },
    {
      title: 'Frontend Development',
      description: 'I am a good frontend developer',
      imgUrl: images.about3,
    },
    {
      title: 'UI/UX Development',
      description: 'I am a good UI/UX developer',
      imgUrl: images.about4,
    },
  ]
  return (
    <>
      <motion.div variants={textVariant()} id="introduction">
        <br className="sm:block hidden"></br>
        <br className="sm:block hidden"></br>
        <br className="sm:block hidden"></br>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px]
      max=2-3xl leading-[30px]">
        I'm a skilled full-stack developer with experience in TypeScript,
        JavaScript, C++, Python, Kotlin, and frameworks like React and Node.js.
        I collaborate closely with clients to create efficient, scalable, and
        user-friendly solutions that solve real-world problems.
      </motion.p>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}>
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
