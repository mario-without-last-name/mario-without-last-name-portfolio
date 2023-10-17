import {
  fullstack,
  graphic,
  teach,
  math,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  kumon,
  tutor,
  prosia,
  btb,
  binus,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Logical Mathematics",
    icon: math,
  },
  {
    title: "Full Stack Web Developer",
    icon: fullstack,
  },
  {
    title: "Graphic Designer",
    icon: graphic,
  },
  {
    title: "Teaching and Tutoring",
    icon: teach,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Math Tuition Teacher",
    company_name: "Kumon",
    icon: kumon,
    iconBg: "#383E56",
    date: "Jul 2016 - Jun 2017",
    points: [
      "Understood high school and even university level mathematics at only middle school",
      "Worked with various students and other teachers, both younger and older than me",
      "Utilized strategies to simplify and explain complex math problems",
      "Practiced time management between being a student and a teacher"
    ],
  },
  {
    title: "Private Tuition Teacher",
    company_name: "Self-Employed",
    icon: tutor,
    iconBg: "#E6DEDD",
    date: "Sep 2018 - Present",
    points: [
      "Handled several younger students from my school, 1 or 2 students at a time",
      "Managed most of their school subjects, from homework completion to exam preparation",
      "Monitored student progress to facilitate improvement and independence",
      "Combining the perspectives of my students and their teachers to deliver easy-to-understand lessons"
    ],
  },
  {
    title: "High School Graduate",
    company_name: "Bina Tunas Bangsa International School",
    icon: btb,
    iconBg: "#383E56",
    date: "Jun 2020",
    points: [
      "Graduated from the IB High School Diploma Program, with 38/45 points",
      "Subjects: English, Indonesian, Computer Science, Information Technology in a Global Society, Mathematics, Economics",
      "Conducted Community Service, Mock-Thesis (Extended Essay), Theory of Knowledge",
      "Competed and won in several competitions, especially mathematics and computer science"
    ],
  },
  {
    title: "Full Stack Developer (Internship)",
    company_name: "Prosia",
    icon: prosia,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Aug 2023",
    points: [
      "Assisted in developing the FrontEnd and BackEnd of a web application project: InaTrade",
      "Contributed in troubleshooting bugs, creating documentation, and communicating with clients",
      "Learnt how to manipulate databases, design UI/UX, generate reports, and more",
      "Completed several side projects to further leverage my IT skills"
    ],
  },
  {
    title: "Master of Information Technology",
    company_name: "Bina Nusantara University",
    icon: binus,
    iconBg: "#383E56",
    date: "Feb 2025",
    points: [
      "???",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a math developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };