import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"

import 'react-vertical-timeline-component/style.min.css'

import { styles } from "../styles"
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex items-center justify-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60]% h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>{experience.company_name}</p>
    </div>

    <ul className="mt-5 ml-5 space-y-2 list-disc">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}


          {/* Special: add a text for Inatrade link */}
          {point === "Assisted in developing the FrontEnd and BackEnd of a web application project: " && (
            <a 
              href="https://inatrade.kemendag.go.id/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              <u>Inatrade</u>
            </a>
          )}


          {/* ICADEIS conference paper link */}
          {point === "1 conference proceeding and 1 thesis, both based of adaptive game design: " && (
            <a 
              href="https://ieeexplore.ieee.org/document/10933478" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              <u>Research Link</u>
            </a>
          )}


        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <p className={styles.sectionSubText}>
        My professional journey
      </p>
      <h2 className={styles.sectionHeadText}>
        Work and Education
      </h2>

      <div className="flex flex-col mt-5">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")