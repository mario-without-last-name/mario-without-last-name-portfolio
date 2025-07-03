import { motion } from "framer-motion"

import { styles } from "../styles"
import { ComputersCanvas } from "./canvas";

import downloadIcon from "../assets/download.png"

const Hero = () => {
  return (
    <section className="relative w-full h-[375px] sm:h-screen max-h-[1250px] mx-auto">
      <div className={`${styles.paddingX} z-10 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className="hidden sm:inline">Hi, </span> I&apos;m <span className="text-[#915eff]">Mario</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Computational analysis and digital designing is my forte. <br /> 
            Consistency is Key.
          </p>

          {/* Button for downloading the resume */}
          <div className="mt-4 z-10 relative">
            <a href="https://drive.google.com/file/d/1qxo0_68VDSZRRO2UemJbRfXOuOdy41cK/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block">
              <button className="px-6 py-3 bg-[#915eff] text-white rounded-md hover:bg-[#7a4ed6] transition duration-300 flex items-center">
                <img src={downloadIcon} alt="" className="w-5 h-5 mr-2"/> 
                <span className="hidden sm:inline">Download my resume</span>
                <span className="inline sm:hidden">My resume</span>
              </button>
            </a>
          </div>

          <p className={`block md:hidden mt-4 text-secondary text-[12px]`}>
            (It is recommended to view this website on a larger device)
          </p>
        </div>
      </div>
      
      <ComputersCanvas />

      {/* <div className="absolute xs:bottom-10 botom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary" mb-1
            />
          </div>
        </a>
      </div> */}
    </section>
  )
}

export default Hero