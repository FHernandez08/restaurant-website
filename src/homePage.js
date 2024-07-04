function homePage() {
    const content = document.getElementById('content');
    const container = document.createElement('div');
    container.classList.add('container');

    const section = document.createElement('div');
    section.classList.add('section-header');

    // the heading of the page
    const pageHeader = document.createElement('h1');
    pageHeader.textContent = "Welcome to the Doña Lola's Cafe!!!";
    section.appendChild(pageHeader);

    // the underline of the homepage
    const subline = document.createElement('h3');
    subline.textContent = "Pawsitively fueled by coffee and puppy love!";
    section.appendChild(subline);

    container.appendChild(section);

    content.appendChild(container);
}

export { homePage };