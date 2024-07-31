// where we will output the pages and have each functionality for each tab

// importing tabs for the content
import { homePage } from './homePage.js';
import { about } from './about.js';
import { menu } from './menu.js';
import { contact } from './contact.js';

document.addEventListener('DOMContentLoaded', () => {
  // selecting elements from html
  const homeBtn = document.querySelector(".home");
  const aboutBtn = document.querySelector(".about");
  const menuBtn = document.querySelector(".menu");
  const contactBtn = document.querySelector(".contact");

  const content = document.querySelector("#content");

  homeBtn.addEventListener('click', () => {
    content.innerHTML = "";
    content.appendChild(homePage());
  });

  aboutBtn.addEventListener('click', () => {
    content.innerHTML = "";
    content.appendChild(about());
  });

  menuBtn.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(menu());
  });

  contactBtn.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(contact());
  });

  homePage();
});
