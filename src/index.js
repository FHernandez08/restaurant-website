import "./style.css";

// tabs for logic switching
import { homePage } from "./homePage";
import { about } from "./about";
import { menu } from "./menu";
import { locations } from "./locations";

document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('#content');
    const homeBtn = document.querySelector('.home');
    const aboutBtn = document.querySelector('.about');
    const menuBtn = document.querySelector('.menu');
    const locationsBtn = document.querySelector('.locations');

    homeBtn.addEventListener('click', () => {
        content.innerHTML = ``;
        content.appendChild(homePage());
    });

    aboutBtn.addEventListener('click', () => {
        content.innerHTML = ``;
        content.appendChild(about());
    });
    
    menuBtn.addEventListener('click', () => {
        content.innerHTML = ``;
        content.appendChild(menu);
    })

    locationsBtn.addEventListener('click', () => {
        content.innerHTML = ``;
        content.appendChild(locations);
    })
})
