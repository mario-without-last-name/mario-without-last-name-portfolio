import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser';

import { styles } from "../styles"
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc"
import { slideIn, textVariant } from "../utils/motion"

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Don't want to refresh browser when clicking "Send"

    // Check if any of the fields are blank
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all 3 fields before sending the message.");
      return; // Stop the function from proceeding
    }

    setLoading(true); // show the "Sending..." button text

    emailjs.send(
      'service_59ewfsb',
      'template_g0fb04t',
      {
        from_name: form.name,
        to_name: 'Mario',
        from_email: form.email,
        to_email: 'mario.without.last.name@gmail.com',
        message: form.message,
      },
      'uaQxu6bXG0JSazMAh'
    )
      .then(() => {
        setLoading(false);
        alert('Thank you. I will get back to you as soon as possible.');

        setForm({
          name: '',
          email: '',
          message: ''
        })
      }, (error) => {
        setLoading(false);

        console.log(error);

        alert("Sorry for the inconvenience, an unknown error occured. If you don't mind, please send the email message directly to mario.without.last.name@gmail.com   Thanks for your cooperation!")
      })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Business Inquiries?</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-7"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              style={{ backgroundColor: '#1d1836' }}
              className="py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              style={{ backgroundColor: '#1d1836' }}
              className="py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="4"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to discuss with me?"
              style={{ backgroundColor: '#1d1836' }}
              className="py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            style={{ backgroundColor: '#2d2854' }}
            className=" py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
        <p className="mt-10 text-white font-medium">Alternatively, you can contact me at:</p>
        <p className="mt-2 ml-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          (+62) 085 7280 3076 <br/>
          <span className="block sm:inline-block">mario.without.last.name</span><span className="block sm:inline-block">@gmail.com</span>
        </p>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        // className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] canvas-container' // chatgpt
      >
        <EarthCanvas />
      </motion.div>
    </div>


  )
}

export default SectionWrapper(Contact, "contact");