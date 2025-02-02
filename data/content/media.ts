import { kebabCase } from "@/utils/utils";

const media = [
  {
    id: 0,
    title: "SGA Photography",
    desc: "JANWHERE, is designed to harness the power of technology and community participation to raise awareness and conserve the indigenous animal species of Pakistan and aims to provide a recreational experience for users",
    link: "https://www.instagram.com/p/CaScQ7PL5S0/",
    type: "instagram",
    tags: ["React", "Express", "CSS", "MongoDB", "MERN", " Web App"]
  },
  {
    id: 1,
    title: "Welcome 2023",
    desc: "JANWHERE, is designed to harness the power of technology and community participation to raise awareness and conserve the indigenous animal species of Pakistan and aims to provide a recreational experience for users",
    link: "https://www.instagram.com/reel/Cqssg5JOXdb/",
    type: "instagram",
    tags: ["React", "Express", "CSS", "MongoDB", "MERN", " Web App"]
  },
  {
    id: 1,
    title: "Independence Day",
    desc: "JANWHERE, is designed to harness the power of technology and community participation to raise awareness and conserve the indigenous animal species of Pakistan and aims to provide a recreational experience for users",
    link: "https://www.instagram.com/reel/ChY9aS9MWbB/",
    type: "instagram",
    tags: ["React", "Express", "CSS", "MongoDB", "MERN", " Web App"]
  },

];

export const allTags = [];

media.forEach(med => {
  med.tags.forEach(tag => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map(tag => kebabCase(tag));

export default media;
