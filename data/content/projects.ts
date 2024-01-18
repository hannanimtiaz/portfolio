import { kebabCase } from "@/utils/utils";

const projects = [
  {
    id: 0,
    title: "Breshna",
    desc: "Breshna empowers users to create their own video games with no-code and at lightning speed..",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/breshna.jpg`,
    link: "https://breshna.io/",
    tags: [
      "React",
      "NextJS",
      "SCSS",
      "Redux",
      "Javascript",
      "Leaflet",
      "Material UI",
      "ChartJS",
      "ThreeJS",
      "Mixpanel",
    ],
  },
  {
    id: 1,
    title: "Blackmores",
    desc: "Blackmores Limited is an Australian health supplements company founded in 1938 by naturopath Maurice Blackmore, when Blackmore opened the first health food shop in Australia in Brisbane.",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/blackmores.png`,
    link: "https://www.blackmores.com.au/",
    tags: ["React", "HTML", "SASS", "Javascript"],
  },
  {
    id: 2,
    title: "The Swimstarter",
    desc: "Structured swimming lessons to get your child to swim in 6 months. Progressive classes for young beginners.",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/swimstarter.png`,
    link: "https://www.theswimstarter.com/",
    tags: [
      "EJS",
      "HTML",
      "SASS",
      "Javascript",
      "NodeJS",
      "ExpressJS",
      "Animate",
      "Bootsrap",
    ],
  },
  {
    id: 3,
    title: "The Swimstarter Admin Panel",
    desc: "An Admin Panel to manage Swim School Students",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/swimstart-admin.png`,
    tags: [
      "EJS",
      "HTML",
      "SASS",
      "Javascript",
      "NodeJS",
      "ExpressJS",
      "Animate",
      "Bootsrap",
    ],
  },
  {
    id: 4,
    title: "The Swimstarter App",
    desc: "Swimstarter Mobile app for coaches and parents for both android and IOS",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/swimstarter-app.png`,
    link: "https://apps.apple.com/sg/app/the-swim-starter-app/id1643884651",
    tags: ["React Native", "Redux", "Stripe", "Expo"],
  },
  {
    id: 5,
    title: "Sensuri Coffee",
    desc: "Sensuri offers best coffee bean in Indonesia and Singapore named as Panama, Guatemala, Costa Rica and Colombia at wholesale rates.",
    link: "https://www.sensuricoffee.com",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/sensuri.png`,
    tags: ["React", "Javascript", "Bootsrap", "PWA", "HTML"],
  },
  {
    id: 6,
    title: "Absord Learning Management System",
    desc: "A learning management system built and distributed to multiple schools during the pandemic to help schools continue functioning.",
    link: "http://lms.martonomily.com",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/absorb.png`,
    tags: [
      "NodeJS",
      "Javascript",
      "ExpressJS",
      "Bootstrap",
      "Stripe",
      "Dropzone",
    ],
  },
  {
    id: 7,
    title: "HapPhi",
    desc: "HapPhi is a brand-able playground of microservices centered around the most sophisticated search, document management and channel chat tool the private sector has ever seen.",
    img: `${process.env.NEXT_PUBLIC_BASE_URL}static/projects/happhi.png`,
    link: "https://www.happhi.com",
    tags: [
      "VueJS",
      "Javascript",
      "PWA",
      "Vuex",
      "Socket io",
      "Stripe",
      "ChartJS",
      "NodeJS",
      "AWS S3",
    ],
  },
];

export const allTags = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
