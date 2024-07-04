function about() {
    const pageContainer = document.createElement('div');
    pageContainer.classList.add('about-container');

    // page heading
    const aboutHeading = document.createElement('h2');
    aboutHeading.classList.add('about-heading');
    aboutHeading.textContent = 'How and Why we were created?';
    pageContainer.appendChild(aboutHeading);

    // images for the section under the heading
    const imageSection = document.createElement('div');
    imageSection.classList.add('image-section');

    // dessert image
    const dessertImage = document.createElement('img');
    dessertImage.classList.add('about-image');
    dessertImage.src = 'assets/latin_dessert.jpg';
    imageSection.appendChild(dessertImage);

    // dog image
    const dogImage = document.createElement('img');
    dogImage.classList.add('about-image');
    dogImage.src = 'assets/puppy_about.jpg';
    imageSection.appendChild(dogImage);

    // coffee image
    const coffeeImage = document.createElement('img');
    coffeeImage.classList.add('about-image');
    coffeeImage.src = 'assets/coffee_about.jpg';
    imageSection.appendChild(coffeeImage);

    pageContainer.appendChild(imageSection);

    // about paragraph
    const aboutParagraph = document.createElement('p');
    aboutParagraph.classList.add('about-paragraph');
    aboutParagraph.textContent = 'Created in 1999, we started as a coffee shop based out of south Houston. We wanted to first bring an atmosphere to our customers that not only allows them to bring their dogs, but also give a great experience to those pets. We since built locations all around the major cities, from Houston, all the way to New York. We keep on finding ways to improve to provide better experiences to our customers. We appreciate you stopping by and looking forward to seeing you in the future!';

    // section about why we were created
    const sectionOne = document.createElement('div');
    sectionOne.classList.add('question-one-section');

    const questionOne = document.createElement('p');
    questionOne.classList.add('qone-question');
    questionOne.textContent = 'Why were we created?';
    sectionOne.appendChild(questionOne);

    const questionOneAnswer = document.createElement('p');
    questionOneAnswer.classList.add('question-one-answer');
    questionOneAnswer.textContent = 'We were created to to bring the best experience when coming to a coffee shop, having your pet and coffee! Ever since we opened, we wanted to bring a great atmosphere where you can relax, have great coffee, and even bring your best companion!';
    sectionOne.classList.add(questionOneAnswer);

    pageContainer.appendChild(sectionOne);

    document.body.appendChild(pageContainer);
}
export { about };