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
          <div className="w-28 h-28 relative group" key={technology.name}>
            {/* BallCanvas for the icon */}
            <BallCanvas icon={technology.icon} />
            {/* Tooltip */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-700 text-white text-xs rounded-md p-2 mt-2 whitespace-nowrap">
              {technology.name}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-10 text-secondary text-[17px] max-w-3xl leading-[30px]">
        And still so much more...
      </p>
    </>
  );
};

export default SectionWrapper(Tech, "tech");