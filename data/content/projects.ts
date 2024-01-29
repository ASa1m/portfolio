import { kebabCase } from "@/utils/utils";

const projects = [
  {
    id: 0,
    title: "Wasalt",
    desc: "Find properties For Sale and Rent, The Platform offering reliable real estate brokerage services.",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static\\projects\\wasalt.jpg`,
    link: "https://wasalt.com/",
    tags: ["React", "NextJS", "CSS", "Context", "Socket.io"]
  },
  {
    id: 1,
    title: "Etihaas",
    desc: "Healthcare near you, World's first Digital Healthcare Marketplace! If you own a healthcare establishment, you can claim your business for free",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/etihaas.jpg`,
    link: "https://www.etihaas.com/",
    tags: [
      "React",
      "NextJS",
      "Context",
      "HTML",
      "CSS",
      "Javascript",
      "AWS Cognito"
    ]
  },
  {
    id: 2,
    title: "Equitidex",
    desc: "Buy & Sell Digital Assets in minutes",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/equitidex.jpg`,
    link: "https://www.equitidex.com/",
    tags: ["React", "CSS", "Javascript", "Redux", "Groomet", "Bulma"]
  },
  {
    id: 3,
    title: "Macwin Solar Energy",
    desc: "Macwin Solar PV Module is the flagship company of Unique Sun Power LLP, which supplies solar panels used for green energy generation",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/macwin.jpg`,
    link: "https://macwinsolarenergy.com/",
    tags: ["React", "TailwindCSS", "Javascript"]
  }
];

export const allTags = [];

projects.forEach(project => {
  project.tags.forEach(tag => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map(tag => kebabCase(tag));

export default projects;
