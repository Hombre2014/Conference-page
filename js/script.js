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

openCloseMenu();

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

showMore();

// Generate speakers section
const speakers = [{
  speakerPhoto: './images/tejas.jpg',
  bio: ['Anjana Vakil', 'ObservableHQ, USA', 'Anjana suffers from a chronic case of curiosity, which led her from philosophy to English teaching to computational linguistics to software development. As a developer advocate at Observable, these days she codes & teaches from her home base in San Francisco.'],
  value: 1,
},
{
  speakerPhoto: './images/Tanner Linsley.jpg',
  bio: ['Tanner Linsley', 'Nozzle.io, USA', 'Tanner Linsley is an entrepreneur and open source creator who loves React and JavaScript. He has built and still maintain several well-known open source libraries like React Query, React Table, React Virtual, React Form, etc.'],
  value: 2,
},
{
  speakerPhoto: './images/saravieira.jpg',
  bio: ['Sara Vieira', 'Remote, Germany', 'Sara is a developer at Remote. Author of <a href="https://opinionatedreact.com/"><strong class="speaker-link">The Opinionated Guide to React</strong></a>. GraphQL and Open Source enthusiast. Conference Speaker and Airport expert. She is also a fan of horror movies, has talents such as banging sticks into a drum kit and saying the wrong thing at the wrong time.'],
  value: 3,
},
{
  speakerPhoto: './images/Ken_Wheeler.jpg',
  bio: ['Ken Wheeler', 'React Artist, USA', 'Core Architecture @[REDACTED], ReactJS Advocate, Speaker, Producer, Synthwave Artist, Google Dev Expert.'],
  value: 4,
},
{
  speakerPhoto: './images/Sunil_Pai.jpg',
  bio: ['Sunil Pai', 'Cloudflare, UK', 'Sunil works on the Workers Developer Productivity team at Cloudflare. Previously, he has worked on the React team in Facebook, built out the Javascript stack at Myntra, and a whole list of other product and infrastructure teams in his career. He can be found on twitter as @threepointone, or annoying his neighbors in London playing his Les Paul a little too loud.'],
  value: 5,
},
{
  speakerPhoto: './images/Anjana_Vakil.jpg',
  bio: ['Anjana Vakil', 'ObservableHQ, USA', 'Anjana suffers from a chronic case of curiosity, which led her from philosophy to English teaching to computational linguistics to software development. As a developer advocate at Observable, these days she codes & teaches from her home base in San Francisco.'],
  value: 6,
}];

