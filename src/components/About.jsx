import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

import mario from '../assets/mario.png';
import linkedinIcon from '../assets/socialmedialinkedin.png';
import githubIcon from '../assets/socialmediagithub.png';
import leetcodeIcon from '../assets/socialmedialeetcode.png';
import youtubeIcon from '../assets/socialmediayoutube.png';
import instagramIcon from '../assets/socialmediainstagram.png';
import upArrowIcon from '../assets/uparrow.png';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      {/* <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)} */}
      <div
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
      </div>
      {/* </motion.div> */}
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      {/* <img
        src={mario}
        alt="Mario"
      /> */}
      <div className="mb-0">
        <motion.img
          src={mario}
          alt="Mario"
          variants={fadeIn("", "", 0.2, 3)} // Adjust direction, easing, delay, duration as needed
          initial="hidden"
          animate="show"
          className="mx-auto h-[20rem] sm:h-[30rem] md:h-[35rem] lg:h-[40rem] object-contain" // Responsive height classes
        />
      </div>

      <p className=" mb-5 text-center text-white text-[17px] sm:text-[20px] md:text-[25px] lg:text-[30px] leading-[30px]">
          Check me out at:
      </p>

      {/* Social Media Links */}
      <div className="mb-24">
        <div className="flex justify-center gap-2 sm:gap-5 mb-1">
          <div className="group relative">
            <a href="https://www.linkedin.com/in/mario-without-last-name/" target="_blank" rel="noopener noreferrer">
              <img 
                src={linkedinIcon} 
                alt="LinkedIn" 
                className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] lg:w-[110px] lg:h-[110px] object-contain" 
              />
            </a>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-700 text-white text-xs rounded-md p-2 mt-2 whitespace-nowrap">
              LinkedIn
            </div>
          </div>

          <div className="group relative">
            <a href="https://github.com/mario-without-last-name" target="_blank" rel="noopener noreferrer">
              <img 
                src={githubIcon} 
                alt="GitHub" 
                className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] lg:w-[110px] lg:h-[110px] object-contain" 
              />
            </a>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-700 text-white text-xs rounded-md p-2 mt-2 whitespace-nowrap">
              GitHub
            </div>
          </div>

          <div className="group relative">
            <a href="https://leetcode.com/u/mario-without-last-name/" target="_blank" rel="noopener noreferrer">
              <img 
                src={leetcodeIcon} 
                alt="LeetCode" 
                className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] lg:w-[110px] lg:h-[110px] object-contain" 
              />
            </a>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-700 text-white text-xs rounded-md p-2 mt-2 whitespace-nowrap">
              LeetCode
            </div>
          </div>

          <div className="group relative">
            <a href="https://www.youtube.com/@mariomario2728" target="_blank" rel="noopener noreferrer">
              <img 
                src={youtubeIcon} 
                alt="Youtube" 
                className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] lg:w-[110px] lg:h-[110px] object-contain" 
              />
            </a>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-700 text-white text-xs rounded-md p-2 mt-2 whitespace-nowrap">
              Youtube
            </div>
          </div>

          <div className="group relative">
            <a href="https://www.instagram.com/mario_no_last_name/?igsh=eGhsZnQ0bW84dWNy" target="_blank" rel="noopener noreferrer">
              <img 
                src={instagramIcon} 
                alt="Instagram" 
                className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] lg:w-[110px] lg:h-[110px] object-contain" 
              />
            </a>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-700 text-white text-xs rounded-md p-2 mt-2 whitespace-nowrap">
              Instagram
            </div>
          </div>

        </div>

        <div className="flex justify-center">
          <img 
            src={upArrowIcon} 
            className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] lg:w-[110px] lg:h-[110px] object-contain" 
          />
        </div>
        <p className='text-secondary text-[17px] leading-[20px] text-center'>
          Over <b className='text-[30px]'>500</b> LeetCode <br /> questions solved!
        </p>

      </div>




      <p className={styles.sectionSubText}>So who am I?</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>

      <div className="w-full flex">
      {/* <motion.p
        variants={fadeIn("", "", 0.1, 1)} */}
<p
  className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
>
  I am a versatile and driven individual with a passion for excellence in{" "}
  <b><u>SAP ABAP</u></b>, <b><u>mathematics</u></b>,{" "}
  <b><u>general programming</u></b>, <b><u>creative design</u></b>,{" "}
  <b><u>teaching</u></b>, and <b><u>game development</u></b>.

  <ul className="mt-8 ml-6 list-disc space-y-2">
    <li> With effective communication, I can deliver satisfactory results as a technical developer in SAP for business analysts. </li>
    <li> With a solid foundation in Olympiad-level mathematics, I bring a unique problem-solving perspective to every challenge. </li>
    <li> Through immersive internship experiences, I&apos;ve crafted business-grade websites and routinely sharpen my algorithmic thinking skills with Python. </li>
    <li> My creative flair extends to 2D asset manipulation, adding a visually engaging touch to projects. </li>
    <li> Sharing knowledge is a strength of mine; I take pride in mentoring and teaching subjects like mathematics and computer science to aspiring minds. </li>
    <li> Finally, I challenged myself by conducting video game research for my thesis, gaining a deep understanding of game design nuances along the way. </li>
  </ul>
</p>

      {/* </motion.p> */}
      </div>

      <div className="mt-10 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")