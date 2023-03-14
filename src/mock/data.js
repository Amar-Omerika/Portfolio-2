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
  subtitle: 'I am the Frontend Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile2.jpg',
  paragraphOne:
    'I am a React and ReactNative developer who is always open for suggestion,and willing to learn.I have experience working as part of a team and individually in my company.I worked on multiple projects in my company and finished it successfully and with passion.',
  paragraphTwo:
    'I also love to solve problems, and in my free time,i love working out, hiiking, chill out with friends and discover new places to visit.',
  paragraphThree: 'Feel free to ask me questions',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'diet.png',
    title: 'Diet app',
    info: 'This is a simple app in React where you can type certain amount of calories and the app gives you back three meals that you can make in that range of calories. This app is good when you want to track your daily dose of calories but you don˝t know what to cook. For this App I used Api from spoonacular.com ',
    info2: '',
    url: 'https://amars-diet-app.netlify.app',
    repo: 'https://github.com/Amar-Omerika/Meal-Planing-App', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'recipe.png',
    title: 'Recipe app',
    info: 'Recipe app is a simple app where you can find your recipe for specific food.l use Api from Edamam.com to fetch the data.I deployed it using Netlify.Feel free to test the app and find your favourite recipe. ',
    info2: '',
    url: 'https://amar-recipe-app.netlify.app/',
    repo: 'https://github.com/Amar-Omerika/RecipeApp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fitness.jpg',
    title: 'High Fitness',
    info: 'High Fitness is an app where you can go through different types of workouts, and where you can track your progress and stats.Project was built using React Native framework.',
    info2: '',
    url: 'https://www.linkedin.com/posts/amar-omerika-4b7625208_design-react-project-activity-6915647469884194816-J3is?utm_source=share&utm_medium=member_desktop',
    repo: 'https://github.com/Amar-Omerika/FtinessApp', // if no repo, the button will not show up
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
