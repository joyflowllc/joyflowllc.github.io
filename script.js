// Tutorial for button by Web Dev Simplified on YouTube
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const toggleButtonBar = document.getElementsByClassName('bar')[0];
const toggleButtonBar2 = document.getElementsByClassName('bar2')[0];
const toggleButtonBar3 = document.getElementsByClassName('bar3')[0];
// no array index means all elements in class selected
const menuItems = document.getElementsByClassName('menuItems');
toggleButton.addEventListener('click', dropAnimation);

function dropAnimation(event) {
  //prevents scroll jump to top on closing menu
  event.preventDefault();
  navbarLinks.classList.toggle('active');
  toggleButtonBar.classList.toggle('active');
  toggleButtonBar3.classList.toggle('active');
  toggleButtonBar2.classList.toggle('active');
}
