import { kebabCase } from "@/utils/utils";

const projects = [
  {
    id: 0,
    title: "JanWhere",
    desc: "JANWHERE, is designed to harness the power of technology and community participation to raise awareness and conserve the indigenous animal species of Pakistan and aims to provide a recreational experience for users",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static\\projects\\janwhere.jpeg`,
    link: "https://github.com/ASa1m/JanWhere",
    tags: ["React", "Express", "CSS", "MongoDB", "MERN", " Web App"]
  },
  {
    id: 1,
    title: "Shuttle Service App",
    desc: "Shuttle Tracking System in Java and JavaFX for real-time shuttle tracking.",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/shuttleJ.png`,
    link: "https://github.com/ASa1m/Shuttle-Service",
    tags: [
      "JavaFX",
      "Java",
      "Desktop App",
      "MySQL"
    ]
  },
  {
    id: 2,
    title: "Tower of Hanoi",
    desc: "A classic game made in assembly language",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/tower.png`,
    link: "https://github.com/ASa1m/Tower-of-Hanoi",
    tags: ["x86", "Assembly", "Python", "Automation", "Desktop Game"]
  },
  {
    id: 3,
    title: "SAMS - Clothing Store Management System.",
    desc: "Python-based Clothing Store Management System.",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/sams.png`,
    link: "https://github.com/MehranSangrasi/Database-Project-Clothin--Management-Sysytem",
    tags: ["Python", "PyQt", "MySQL", "Desktop App"]
  }
];

export const allTags = [];

projects.forEach(project => {
  project.tags.forEach(tag => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map(tag => kebabCase(tag));

export default projects;
