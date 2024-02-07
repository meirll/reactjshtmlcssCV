import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-1.jpeg";
import Work2 from "./assets/project-2.jpg";
import Work3 from "./assets/project-3.jpeg";
import Work4 from "./assets/project-4.jpeg";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Oleksii",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Buinovych",
  },

  {
    id: 3,
    title: "Age : ",
    description: "18 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Ukraine",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Unavailable",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Osterode am Harz",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "not working",
  },

  {
    id: 8,
    title: "Email : ",
    description: "kadoshieari@gmail.com",
  },

  {
    id: 9,
    title: "Discord : ",
    description: "pornwebsite",
  },

  {
    id: 10,
    title: "Languages : ",
    description: "German, English, Polish, Ukrainian, Russian, Japanese",
  },
];

export const stats = [
  {
    id: 1,
    no: "3+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "40+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "36+",
    title: "Happy <br /> Customers",
  },

  {
    id: 4,
    no: "2+",
    title: " Awards <br /> Won",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2020 - 2024",
    title: "Web Developer <span> Fiverr </span>",
    desc: "Embarked on the path of web development with a focus on React.js and Node.js. Delved into the intricacies of front-end and back-end development to enhance the quality of my work.",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2018 - 2024",
    title: "Web Designer <span> Fiverr </span>",
    desc: "Explored the realms of graphic design using Figma. Delved into the intricacies of layout design, prototyping, and collaboration using the platform.",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2018 - 2019",
    title: "Graphic designer <span> Fiverr </span>",
    desc: "Explored graphic design techniques utilizing Adobe Photoshop. Delved into photo editing, digital illustration, and graphic manipulation. ",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2018 - PRESENT",
    title: "Self-learning <span> Google, Youtube etc. </span>",
    desc: "Delicately pursued learning in HTML, CSS, and JavaScript. Developed a strong understanding of front-end web development principles and techniques.",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "75",
  },

  {
    id: 2,
    title: "Css",
    percentage: "70",
  },

  {
    id: 3,
    title: "JavaScript",
    percentage: "65",
  },

  {
    id: 4,
    title: "React",
    percentage: "50",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "none",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.none.com",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Website Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "None",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.none.com",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "None",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.none.com",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Website Development",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "None",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS, Node JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.none.com",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Landing Page",
    details: [
      {
        title: "Project : ",
        desc: "Website",
      },
      {
        title: "Client : ",
        desc: "None",
      },
      {
        title: "Language : ",
        desc: "React JS, Node JS",
      },
      {
        title: "Preview : ",
        desc: "www.none.com",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "None",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.none.com",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
