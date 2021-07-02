import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Hello, my name is Gang', // e.g: 'Name | Developer'
  lang: 'en, th', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Gang',
  subtitle: `I'm the Developer you need.`,
  cta: 'Hire Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'crop_329235.jpg',
  paragraphOne: 'Hello !! Thank you for visiting my personal portfolio page ',
  paragraphTwo: `Currently I'm a student at Zero To Mastery Academy and I'm taking an online course "Complete Web Developer 2021", where I've learned in both Front-End(HTML, CSS, Javascript, Node.js, React.js and Back-End(Express.js, PostgreSQL) development.)`,
  paragraphThree: 'if you are interest in hiring, you can review my resume below to learn more abouy my experience and background',
  resume: 'https://github.com/ganggbp/resume/raw/main/Burit_Boonkorn.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'smartbrain.jpg',
    title: 'Smart-Brain',
    info: 'Face detection website. put your image here, we will automatically recognize faces',
    // info2: '',
    url: 'https://smart-brain133.herokuapp.com/',
    repo: 'https://github.com/ganggbp/smart-brain', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'robofriend.jpg',
    title: 'Robofriends',
    info: 'Find your favourite Robot here.',
    // info2: '',
    url: 'https://ganggbp.github.io/robofriends/',
    repo: 'https://github.com/ganggbp/robofriends/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'backgroundgen.jpg',
    title: 'Background-Generator',
    info: 'Select your favourite color, turn it into nice gradient background.',
    // info2: '',
    url: 'https://ganggbp.github.io/background-generator',
    repo: 'https://github.com/ganggbp/background-generator',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Burit Boonkorn',

  // btn: '',
  // email: 'burit_bk@hotmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/burit-boonkorn-82b9191a5/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ganggbp',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
