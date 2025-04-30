import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";


export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. 
With some months of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as
back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions
that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile junior full stack developer with a passion for creating efficient and 
user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React,
Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work,
and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments
and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies,
and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
      year: "2023 - present",
    role: "Senior Frontend Developer",
    company: "Larkit",
    description: `Designed and developed user interfaces for web applications using Typescript and React.
    Worked closely with my colleagues to integrate frontend components with REST APIs.
    Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "ReactJs", "Typescript", "Javascript"],
  },
  {
    year: "2022 - 2023",
    role: "Intermediate Frontend Developer",
    company: "Larkit",
    description: `Designed and developed user interfaces for web applications using Next.js and React. 
    Worked closely with backend developers to integrate frontend components with Node.js APIs.
    Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "ReactJs", "Typescript"],
  },
  {
    year: "2021 - 2022",
    role: "Junior Frontend Developer",
    company: "University",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. 
    Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional
    teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Javascript", "Tailwind css"],
  },
  {
    year: "2020 - 2021",
    role: "Network Analyst",
    company: "Jamvi Ventures",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. 
    Managed databases and implemented data storage solutions using MongoDB. Worked closely with product
    managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "OCR image scanner",
    image: project1,
    description:
      "A fully functional OCR mobile app with features like taking photos and uploading them for scanning process.",
    technologies: ["HTML", "CSS", "React Native", "Flask", "Firebase"],
  },
  {
    title: "To-do list App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, task addition, deletion, sorting, and progress tracking.",
    technologies: ["HTML", "CSS", "Javascript" ],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information of how to reach me.",
    technologies: ["HTML", "CSS", "React", "Bootstrap", "Typescript"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "University Rd, Murang'a town, 10208 ",
  phoneNo: "+254 717 717 529 ",
  email: "phinixkaranja6@gmail.com",
};
