import Work1 from '../../assets/work1.jpg';
import Work2 from '../../assets/work2.avif';
import Work3 from '../../assets/work3.jpg';
import Work4 from '../../assets/work4.webp';

export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: 'PAWFIT',
    category: 'web',
    framework: 'Full Stack',
    url: 'https://thawing-bastion-63318-3c68bfecd820.herokuapp.com/',
  },
  {
    id: 2,
    image: Work2,
    title: 'CHILDERS STORE',
    category: 'web',
    framework: 'Javascript',
    url: 'https://brandonlambrecht.github.io/e-com-store/',
  },
  {
    id: 3,
    image: Work3,
    title: 'LAMBRECHT ESTATE',
    category: 'web',
    framework: 'Currently under construction',
    url: '',
  },

  {
    id: 4,
    image: Work4,
    title: 'Fit Path',
    category: 'app',
    framework: 'Currently under construction',
    url: '',
  },
  // {
  //   id: 6,
  //   image: Work6,
  //   title: "CHILDERS STORE",
  //   category: "app",
  //   framework: "React Native",
  //   url: "https://brandonlambrecht.github.io/e-com-store/",
  // },
];

export const projectsNav = [{ name: 'all' }, { name: 'web' }, { name: 'app' }];
