import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5"></div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#73c7ff]">Yulin Xia</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 `}>
            developing integrated <br className="sm:block hidden"></br>systems
            with both backend
            <br className="sm:block hidden"></br> and frontend components
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#introduction">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              initial={{
                y: '-100%',
                opacity: 0,
              }}
              animate={{
                y: ['0%', '100%'],
                opacity: [1, 0],
                scale: [1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'linear',
              }}
              className="w-3 h-3 bg-secondary mb-1"
              style={{
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
              }}
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
