import npmLogo from '../images/npm-logo.png'
import amptron from '../images/amptron.png'
import shootTheBreeze from '../images/shoot-the-breeze.png'

export default {
  projects:[
    {
      id: 1,
      name: 'NPM Package',
      img: npmLogo,
      alt: 'NPM Logo',
      technologies: 'ES6, Node.js, and Babel'
    },
    {
      id: 2,
      name: 'Amptron Music Player',
      img: amptron,
      alt: 'A music player built in Vue and Electron',
      technologies: 'HTML5 Audio, Electron, Vue.js, Node.js'
    },
    {
      id: 3,
      name: 'Shoot The Breeze',
      img: shootTheBreeze,
      alt: 'A chat application.',
      technologies: 'React & Firebase'
    },
    {
      id: 4,
      name: 'Lights Out',
      img: '',
      alt: 'A game pad for Lights Out',
      technologies: 'jQuery'
    },
  ]
}
