import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"

import hyperlink from "../assets/hyperlink.png"

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    // <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <div>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        style={{ backgroundColor: '#1d1836' }}
        className="p-5 rounded-2xl sm:w-[300px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div> */}
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <a 
              href={source_code_link}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 inline-flex items-center space-x-1"
            >
              <b><u>Find out more</u></b>
              <img src={hyperlink} alt="Hyperlink" className="w-4 h-4" />
            </a>
          <p className="mt-2 text-secondary textx-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
    // </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <p className={styles.sectionSubText}>
        My creations
      </p>
      <h2 className={styles.sectionHeadText}>
        Projects
      </h2>

      <div className="w-full flex">
        {/* <motion.p
          variants={fadeIn("", "", 0.1, 1)} */}
        <p
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Promises and claims alone won&apos;t cut it.
          What better way to prove practical skills than to showcase actual projects?
          Here, I unveil a collection of my IT endeavors that highlight both my passion and proficiency.
          From coding challenges to visual design, each project reflects my dedication to crafting practical and creative solutions.
          Explore my portfolio and discover the fusion of creativity and technical expertise.
          See more of my projects on my&nbsp;
          <a
            href="https://github.com/mario-without-last-name?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 inline-flex items-center space-x-1"
          >
            <b><u>GitHub page</u></b>
            <img src={hyperlink} alt="Hyperlink" className="w-4 h-4" />
          </a>
        </p>
        {/* </motion.p> */}
      </div>

      <div className="mt-10 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "works");