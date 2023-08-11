import { motion } from "framer-motion"

import { styles } from "../styles"
import { textVariant } from "../utils/motion"
import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"

const Tech = () => {
  return (
    <>
      <p className={styles.sectionSubText}>
        What I&apos;ve worked with
      </p>
      <h2 className={styles.sectionHeadText}>
        Technologies
      </h2>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-5">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "tech");