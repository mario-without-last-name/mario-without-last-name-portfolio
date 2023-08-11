import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-32 h-32 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a versatile and driven individual with a passion for excellence in <b><u>mathematics</u></b>, <b><u>programming</u></b>, <b><u>creative design</u></b>, and <b><u>teaching</u></b>.
        With a solid foundation in Olympiad-level mathematics, I bring a unique problem-solving perspective to every challenge.
        As a seasoned full-stack web developer, I&apos;ve honed my skills in the PERN stack through immersive internships, crafting seamless digital experiences.
        My creative flair extends to 2D asset manipulation, adding a visually engaging touch to projects.
        Sharing knowledge is my forte; I take pride in mentoring and teaching subjects like mathematics and computer science to aspiring minds. My portfolio reflects a journey of innovation, expertise, and a commitment to continuous growth.
      </motion.p>

      <div className="mt-10 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")