// page tab for the homepage
export default function homePage() {
    const container = document.createElement('div');
    container.classList.add('container');

    const homepageHeader = document.createElement('h1');
    homepageHeader.classList.add('homepage-header');
    homepageHeader.textContent = "Welcome to La Doña Lola's Cafe";

    const headerSubtext = document.createElement('p');
    headerSubtext.classList.add('header-subtext');
    headerSubtext.textContent = "We combine the love of coffee with your love of dogs!";

    container.appendChild(homepageHeader);
    container.appendChild(headerSubtext);
}