import { kebabCase } from "@/utils/utils";

const projects = [
  {
    id: 0,
    title: "JanWhere",
    desc: "JANWHERE, is designed to harness the power of technology and community participation to raise awareness and conserve the indigenous animal species of Pakistan and aims to provide a recreational experience for users",
    img: "/static/projects/janwhere.webp",
    link: "https://github.com/ASa1m/JanWhere",
    tags: ["React", "Express", "CSS", "MongoDB", "MERN", " Web App"]
  },
  {
    id: 1,
    title: "Shuttle Service App",
    desc: "Shuttle Tracking System in Java and JavaFX for real-time shuttle tracking.",
    img: "/static/projects/shuttleJ.webp",
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
    img: "/static/projects/tower.webp",
    link: "https://github.com/ASa1m/Tower-of-Hanoi",
    tags: ["x86", "Assembly", "Python", "Automation", "Game", "Desktop App"]
  },
  {
    id: 3,
    title: "SAMS - Clothing Store Management System.",
    desc: "Python-based Clothing Store Management System.",
    img: "/static/projects/sams.webp",
    link: "https://github.com/MehranSangrasi/Database-Project-Clothin--Management-Sysytem",
    tags: ["Python", "PyQt", "MySQL", "Desktop App"]
  },
  {
    id: 4,
    title: "Timetable Generator",
    desc: "Python-based Time Table Generator project, automates the scheduling of classes. The project features a graphical user interface (GUI) developed using Tkinter and includes randomization and scheduling constraints along with csv export and makeup class scheduling.",
    img: "/static/projects/timetable.webp",
    link: "https://github.com/ASa1m/Timetable-Generator",
    tags: ["Python", "CSV", "Tkinter", "Desktop App"]
  },
  {
    id: 5,
    title: "Sign Language Recognition",
    desc: "A project to recognize sign language using OpenCV and Python using yolo based object detection and deep learning.",
    img: "/static/projects/sign.webp",
    link: "https://github.com/MehranSangrasi/Sign-Language-Detection",
    tags: ["Python", "Yolo v8", "ML", "OpenCV", "Object Detection", "Deep Learning", "Desktop App"]
  },
  {
    id: 6,
    title: "AI Ludo",
    desc: "A Ludo game with AI, made in Python using Pygame and reinforcement learning.",
    img: "/static/projects/ludo.webp",
    link: "https://github.com/MehranSangrasi/AI-Ludo",
    tags: ["Python", "Pygame", "ML", "Reinforcement Learning", "Game", "Deep Learning", "Desktop App"]
  },
  {
    id: 7,
    title: "C/C++ Shell",
    desc: "A simple shell written in C/C++ that can execute commands and pipe them based on basic operating system concepts.",
    img: "/static/projects/shell.webp",
    link: "https://github.com/MehranSangrasi/Shell-OS-Project",
    tags: ["C/C++", "OS", "Shell", "CLI", "Desktop App"]
  },
  {
    id: 8,
    title: "Car Sales search",
    desc: "A simple car sales search engine made in C/C++ incorporating basic data structures and algorithms.",
    img: "/static/projects/dsa.webp",
    link: "https://github.com/MehranSangrasi/DSA-Project---Car-Sales-By-Location-C--",
    tags: ["C/C++", "DSA", "Data Structures", "CLI", "Desktop App"]
  }



];

export const allTags = [];

projects.forEach(project => {
  project.tags.forEach(tag => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map(tag => kebabCase(tag));

export default projects;
