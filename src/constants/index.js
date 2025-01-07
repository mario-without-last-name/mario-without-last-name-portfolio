import {
  fullstack,
  graphic,
  teach,
  game,
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
  hagi,
  cisco,
  davinci,
  dbeaver,
  postgresql,
  postman,
  python,
  unity,
  photoshop,
  yulyani,
  android,
  c,
  aws,
  louie,
  knightslaststand,
  visualdesigns,
  inatrade,
  computervision,
  ahmad,
  eoutsourceasia,
  flutter,
  sap,
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
    title: "Game Developer",
    icon: game,
  },
  {
    title: "Teaching and Tutoring",
    icon: teach,
  },
];

const technologies = [
  {
    name: "Python (Deep Learning, etc)",
    icon: python,
  },
  {
    name: "Unity (Game Development)",
    icon: unity,
  },
  {
    name: "C / C++ / C# / GoLang",
    icon: c,
  },
  {
    name: "HTML + CSS + Javascript",
    icon: html,
  },
  {
    name: "React JS (PERN stack)",
    icon: reactjs,
  },
  {
    name: "postgreSQL (PERN stack)",
    icon: postgresql,
  },
  {
    name: "SAP",
    icon: sap,
  },
  {
    name: "DaVinci Resolve (Video Editing)",
    icon: davinci,
  },
  {
    name: "Photoshop (Graphic Manipulation)",
    icon: photoshop,
  },
  {
    name: "Git (GitHub and GitLab)",
    icon: git,
  },
  {
    name: "Figma (UI/UX Design)",
    icon: figma,
  },
  {
    name: "Flutter (Mobile Development)",
    icon: flutter,
  },
];

const experiences = [
  {
    title: "IT Consultant Trainee",
    company_name: "E-Outsource Asia",
    icon: eoutsourceasia,
    iconBg: "#383E56",
    date: "Jan 2025 - Present",
    points: [
      "A new hire. Quickly learning the skills required to be an IT consultant"
    ],
  },
  {
    title: "Master of Information Technology",
    company_name: "Bina Nusantara University",
    icon: binus,
    iconBg: "#383E56",
    date: "Sep 2020 - Feb 2025",
    points: [
      "Bachelors GPA: 3.92 - Masters GPA: 3.99 (current)", // CHANGE THIS GPA LATER WHEN THE SCORE COMES OUT
      "1 conference proceeding and 1 thesis in adaptive game design", // ADD THE LINKS LATER TO THOSE PUBLICATIONS (maybe not for thesis)
      "Experienced many programming languages: C, Java, Python, SQL, C# (Unity), HTML, etc",
      "Consistent self-practice (Leetcode) and joining  IT Workshops (UI/UX, Mobile, etc)"
    ],
  },
  {
    title: "Full Stack Developer (Internship)",
    company_name: "Prosia",
    icon: prosia,
    iconBg: "#383E56",
    date: "Feb 2023 - Aug 2023",
    points: [
      "Assisted in developing the FrontEnd and BackEnd of a web application project: ",
      "Contributed in troubleshooting bugs, creating documentation, and communicating with clients",
      "Learnt how to manipulate databases, design UI/UX, generate reports, and more",
      "Completed several side projects to further leverage my IT skills"
    ],
  },
  {
    title: "High School Graduate",
    company_name: "Bina Tunas Bangsa International School",
    icon: btb,
    iconBg: "#383E56",
    date: "Jul 2008 - Jun 2020",
    points: [
      "Graduated from the IB High School Diploma Program, with 38/45 points",
      "Subjects: English, Indonesian, Computer Science, Information Technology in a Global Society, Mathematics, Economics",
      "Part of the Student Council in the arts division. Digitally designing various banners, brochures, yearbooks, tickets, etc",
      "Competed and won in several competitions, especially mathematics and computer science"
    ],
  },
  {
    title: "Private Tuition Teacher",
    company_name: "Self-Employed",
    icon: tutor,
    iconBg: "#383E56",
    date: "Sep 2018 - Present",
    points: [
      "Handled several younger students from my school, 1 or 2 students at a time",
      "Managed most of their school subjects, from homework completion to exam preparation",
      "Monitored student progress to facilitate improvement and independence",
      "Combining the perspectives of my students and their teachers to deliver easy-to-understand lessons"
    ],
  },
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
];

// no full stops at the end, as seen in Feedback.jsx
const testimonials = [
  {
    testimonial:
      "Mario was of great help to our company during his intership; quickly adapting to any needs and fulfilling clients' requests with interesting solutions",
    name: "Hagi Agfayuniar",
    designation: "Web Developer",
    company: "PROSIA",
    image: hagi,
  },
  {
    testimonial:
      "Mario is a diligent student who pays attention to detail. With the amount of effort he puts into his work, I believe he will have a succeessful IT career",
    name: "Yulyani Arifin",
    designation: "Lecturer",
    company: "BINUS university",
    image: yulyani,
  },
  {
    testimonial:
      "While Mario can be strict, I know he really cares about me. He has helped me boost my school grades as my tutor for several years",
    name: "Louie Liu",
    designation: "Tutee",
    company: "My Private Tuition",
    image: louie,
  },
  {
    testimonial:
      "Mario is a creative mind that is capable of relaying his creativity through graphic design. He created captivating thumbnails and overlays that helped bolster retention on my ", // Youtube channel (in feedback.jsx)
    name: "Ahmad Hijazi",
    designation: "Content Creator",
    company: "Youtube",
    image: ahmad,
  },
];

const projects = [
  {
    name: "Knight's Last Stand",
    description:
      "A game prototype that explores how dynamic game balancing systems can automatically adjust the game's difficulty to the player's skill seamlessly in a turn-based survival roguelike.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "gamedesign",
        color: "green-text-gradient",
      },
      {
        name: "c-sharp",
        color: "pink-text-gradient",
      },
    ],
    image: knightslaststand,
    source_code_link: "https://github.com/mario-without-last-name/Thesis-Game",
  },
  {
    name: "Visual Designs",
    description:
      "A collection of many mini-projects I've made from high school until now. Ranging from Youtube thumbnails to websites.",
    tags: [
      {
        name: "photoshop",
        color: "blue-text-gradient",
      },
      {
        name: "figma",
        color: "green-text-gradient",
      },
      {
        name: "ui-ux",
        color: "pink-text-gradient",
      },
    ],
    image: visualdesigns,
    source_code_link: "https://github.com/mario-without-last-name/collection-of-self-made-arts",
  },
  {
    name: "InaTrade",
    description:
      "An industrial-grade web application project I contributed to during my internship, which includes many features for Indonesia's import-export management.",
    tags: [
      {
        name: "react-js",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "ui-ux",
        color: "pink-text-gradient",
      },
    ],
    image: inatrade,
    source_code_link: "https://inatrade.kemendag.go.id/",
  },
  {
    name: "Who Is This?",
    description:
      "A class group project that trains an AI to identify and recognize the identity of faces detected through a live video footage.",
    tags: [
      {
        name: "computervision",
        color: "blue-text-gradient",
      },
      {
        name: "machinelearning",
        color: "green-text-gradient",
      },
      {
        name: "jupyter",
        color: "pink-text-gradient",
      },
    ],
    image: computervision,
    source_code_link: "https://github.com/mario-without-last-name/computer-vision-group-project",
  },
];

// For the social medias (LinkedIn, Github, Leetcode, Instagram), check About.jsx

export { services, technologies, experiences, testimonials, projects };