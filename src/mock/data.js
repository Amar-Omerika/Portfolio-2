/* eslint-disable prettier/prettier */
import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Amar Omerika',
  subtitle: 'I am a Frontend Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile2.jpg',
  paragraphOne:
    'I am a React and React Native developer who is always open to suggestions, and willing to learn. I have experience working as part of a team and individually in my company.I worked on multiple projects in my company and finished it successfully and with passion.',
  paragraphTwo:
    'I also love to solve problems, and in my free time, I love working out, hiking, chilling out with friends, and discovering new places to visit.',
  paragraphThree: 'Feel free to ask me questions.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'menea.png',
    title: 'Menea Website',
    info: 'This is a website for a Swedish client for whom I worked. The technologies that I used to build this website are React.js and Tailwind. After finishing the website, I hosted it on loopia.com. You can check the website at this URL: https://menea.se/.',
    info2: '',
    url: 'https://menea.se/',
    repo: 'https://github.com/Amar-Omerika/MeneaWebsite',
  },
  {
    id: nanoid(),
    img: 'diet.png',
    title: 'Diet app',
    info: 'This is a simple app in React where you can type a certain amount of calories and the app gives you back three meals you can make in that range of calories. This app is good when you want to track your daily dose of calories but you don˝t know what to cook. For this App, I used Api from spoonacular.com',
    info2: '',
    url: 'https://amars-diet-app.netlify.app',
    repo: 'https://github.com/Amar-Omerika/Meal-Planing-App', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'recipe.png',
    title: 'Recipe app',
    info: 'The recipe app is a simple app where you can find your recipe for a specific food.l, use Api from Edamam.com to fetch the data. I deployed it using Netlify. Feel free to test the app and find your favorite recipe.',
    info2: '',
    url: 'https://amar-recipe-app.netlify.app/',
    repo: 'https://github.com/Amar-Omerika/RecipeApp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fitness.jpg',
    title: 'High Fitness',
    info: 'High Fitness is an app where you can go through different types of workouts, and where you can track your progress and stats. The project was built using React Native framework.',
    info2: '',
    url: 'https://www.linkedin.com/posts/amar-omerika-4b7625208_design-react-project-activity-6915647469884194816-J3is?utm_source=share&utm_medium=member_desktop',
    repo: 'https://github.com/Amar-Omerika/FtinessApp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'keeper.png',
    title: 'Keeper App',
    info: 'Keeper App is an app where you can add your notes and delete them.This app was made usinG React framework.',
    info2: '',
    url: 'https://visionary-chimera-800cf2.netlify.app',
    repo: 'https://github.com/Amar-Omerika/Keeper-App', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/amaromerika/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/posts/amar-omerika-4b7625208_design-react-project-activity-6915647469884194816-J3is?utm_source=share&utm_medium=member_desktop',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Amar-Omerika',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
