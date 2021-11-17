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
