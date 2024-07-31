// where we will output the pages and have each functionality for each tab

// importing tabs for the content
import { homePage } from './homePage';
import { about } from './about';
import { menu } from './menu';

// importing style
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  // selecting elements from html
  const homeBtn = document.querySelector(".home");
  const aboutBtn = document.querySelector(".about");
  const menuBtn = document.querySelector(".menu");

  const content = document.querySelector("#content");

  homeBtn.addEventListener("click", homePage);

  aboutBtn.addEventListener("click", about);

  menuBtn.addEventListener("click", menu);

  homePage();
});
