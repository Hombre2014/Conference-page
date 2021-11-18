/*  eslint linebreak-style: ["error", "unix"]    */

// Hamburger menu open close
const hamburger = document.querySelector('.hamburger');
const closeButton = document.querySelector('.close-button');
const hamburgerMenu = document.querySelector('.navigation-small');
const menuItem = document.querySelectorAll('.link');

function openCloseMenu() {
  closeButton.addEventListener('click', () => {
    hamburgerMenu.classList.remove('hamburger-menu');
    hamburgerMenu.classList.add('hide-on-small');
  });
  hamburger.addEventListener('click', () => {
    hamburgerMenu.classList.remove('hide-on-small');
    hamburgerMenu.classList.add('hamburger-menu');
  });
  menuItem.forEach(
    (menuItem) => {
      menuItem.addEventListener('click', () => {
        hamburgerMenu.classList.remove('hamburger-menu');
        hamburgerMenu.classList.add('hide-on-small');
      });
    },
  );
}

// Show me more button
const more = document.querySelector('.more');
const secondSpeakers = document.querySelector('.second-speakers');
const thirdSpeakers = document.querySelector('.third-speakers');
const partners = document.querySelector('.partners');
const footerHome = document.querySelector('.footer-home');

function showMore() {
  more.addEventListener('click', () => {
    more.remove();
    secondSpeakers.classList.remove('hide-on-small');
    thirdSpeakers.classList.remove('hide-on-small');
    partners.classList.remove('hide-on-small');
    footerHome.classList.remove('hide-on-small');
  });
}

// Generate speakers section
const speakers = [{
  photo: './images/tejas.jpg',
  bio: {
    speakerName: 'Anjana Vakil',
    speakerCompany: 'ObservableHQ, USA',
    description: 'Anjana suffers from a chronic case of curiosity, which led her from philosophy to English teaching to computational linguistics to software development. As a developer advocate at Observable, these days she codes & teaches from her home base in San Francisco.',
  },
  value: 1,
},
{
  photo: './images/Tanner Linsley.jpg',
  bio: {
    speakerName: 'Tanner Linsley',
    speakerCompany: 'Nozzle.io, USA',
    description: 'Tanner Linsley is an entrepreneur and open source creator who loves React and JavaScript. He has built and still maintain several well-known open source libraries like React Query, React Table, React Virtual, React Form, etc.',
  },
  value: 2,
},
{
  photo: './images/saravieira.jpg',
  bio: {
    speakerName: 'Sara Vieira',
    speakerCompany: 'Remote, Germany',
    description: 'Sara is a developer at Remote. Author of The Opinionated Guide to React. GraphQL and Open Source enthusiast. Conference Speaker and Airport expert. She is also a fan of horror movies, has talents such as banging sticks into a drum kit and saying the wrong thing at the wrong time.',
  },
  value: 3,
},
{
  photo: './images/Ken_Wheeler.jpg',
  bio: {
    speakerName: 'Ken Wheeler',
    speakerCompany: 'React Artist, USA',
    description: 'Core Architecture @[REDACTED], ReactJS Advocate, Speaker, Producer, Synthwave Artist, Google Dev Expert.',
  },
  value: 4,
},
{
  photo: './images/Sunil_Pai.jpg',
  bio: {
    speakerName: 'Sunil Pai',
    speakerCompany: 'Cloudflare, UK',
    description: 'Sunil works on the Workers Developer Productivity team at Cloudflare. Previously, he has worked on the React team in Facebook, built out the Javascript stack at Myntra, and a whole list of other product and infrastructure teams in his career. He can be found on twitter as @threepointone, or annoying his neighbors in London playing his Les Paul a little too loud.',
  },
  value: 5,
},
{
  photo: './images/Anjana_Vakil.jpg',
  bio: {
    speakerName: 'Anjana Vakil',
    speakerCompany: 'ObservableHQ, USA',
    description: 'Anjana suffers from a chronic case of curiosity, which led her from philosophy to English teaching to computational linguistics to software development. As a developer advocate at Observable, these days she codes & teaches from her home base in San Francisco.',
  },
  value: 6,
}];

const speakerPhoto = document.querySelectorAll('.speaker-photo');
const speakerName = document.querySelectorAll('.speaker-name');
const company = document.querySelectorAll('.company');
const speakerText = document.querySelectorAll('.speaker-text');

function showSpeakers() {
  for (let i = 0; i < 6; i += 1) {
    speakerPhoto[i].setAttribute('src', speakers[i].photo);
    speakerName[i].innerText = speakers[i].bio.speakerName;
    company[i].innerText = speakers[i].bio.speakerCompany;
    speakerText[i].innerText = speakers[i].bio.description;
  }
}

function main() {
  openCloseMenu();
  showMore();
  showSpeakers();
}

window.onload = main();
