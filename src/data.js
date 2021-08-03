// skills icons
import javaIcon from "../src/assets/icons/java.svg";
import javaScriptIcon from "../src/assets/icons/javascript.svg";
import reactIcon from "../src/assets/icons/react.svg";
import nodeIcon from "../src/assets/icons/nodejs.svg";
import htmlIcon from "../src/assets/icons/html.svg";
import cssIcon from "../src/assets/icons/css.svg";
import sassIcon from "../src/assets/icons/sass.svg";
import tailWindIcon from "../src/assets/icons/tailwind.svg";
import bootStrapIcon from "../src/assets/icons/bootstrap.svg";
import npmIcon from "../src/assets/icons/npm.svg";
import jestIcon from "../src/assets/icons/jest.svg";
import postgresIcon from "../src/assets/icons/postgres.svg";

// project images
import softwareImg from "../src/assets/images/software-2.svg";
import techImg from "../src/assets/images/software.svg";
import taHubImg from "../src/assets/images/ta-hub.svg";

// social icons
import gitIcon from "../src/assets/icons/github.svg";
import linkedInIcon from "../src/assets/icons/linkedin.svg";
import instaIcon from "../src/assets/icons/instagram.svg";

const data = {
  // skills data
  skills: [
    {
      id: 1,
      img: javaIcon,
      info: "Java"
    },
    {
      id: 2,
      img: javaScriptIcon,
      info: "JavaScript"
    },
    {
      id: 3,
      img: reactIcon,
      info: "React"
    },
    {
      id: 4,
      img: nodeIcon,
      info: "NodeJS"
    },
    {
      id: 5,
      img: htmlIcon,
      info: "HTML-5"
    },
    {
      id: 6,
      img: cssIcon,
      info: "CSS-3"
    },
    {
      id: 7,
      img: sassIcon,
      info: "Sass"
    },
    {
      id: 8,
      img: tailWindIcon,
      info: "TailwindCSS"
    },
    {
      id: 9,
      img: bootStrapIcon,
      info: "Bootstrap"
    },
    {
      id: 10,
      img: npmIcon,
      info: "npm"
    },
    {
      id: 11,
      img: jestIcon,
      info: "Jest"
    },
    {
      id: 12,
      img: postgresIcon,
      info: "PostgreSQL"
    },
  ],

  // project data

  project: [
    {
      id: 0,
      title: "PF Nexus",
      img: softwareImg, // <a href="https://www.vecteezy.com/free-vector/computer">Computer Vectors by Vecteezy</a>
      info: "PF Nexus is a deal origination platform that connects owners, advisors, lenders and investors in energy & infrastructure projects across the world. Built with a variety of technologies, such as ReactJS, TypeScript, PostgreSQL, TailwindCSS",
      liveLink: "https://www.pfnexus.com/",
      gitLink: "",
    },
    {
      id: 1,
      title: "Personal portfolio",
      img: techImg,
      info: "Simple single page website for my personal portfolio created using ReactJS and Sass",
      liveLink: "https://www.google.com/",
      gitLink: "https://github.com/raymondpoon95/react-portfolio",
    },
    {
      id: 2,
      title: "TA-Hub",
      img: taHubImg,
      info: "Teaching assistant management web application using Python and Django framework and BootStrap. Allows Lecturers at university to be able to easily manage their teaching assistants",
      liveLink: "https://tahubapp.herokuapp.com/",
      gitLink: "https://github.com/raymondpoon95/teaching-Assistant-Management",
    }
  ],

  // social data
  social: [
    {
      id: 0,
      img: gitIcon,
      info: "Github",
      link: "https://github.com/raymondpoon95",
    },
    {
      id: 1,
      img: linkedInIcon,
      info: "LinkedIn",
      link: "https://www.linkedin.com/in/raymondwpoon/",
    },
    {
      id: 2,
      img: instaIcon,
      info: "Instagram",
      link: "https://www.instagram.com/raymondpoon_/"
    }
  ],
}

export default data;
