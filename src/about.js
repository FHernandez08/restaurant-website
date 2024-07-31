// page tab for the about section of the restaurant

function about() {
    const content = document.querySelector('#content');

    const container = document.createElement('div');
    container.classList.add('about-container');

    const aboutHeader = document.createElement('h2');
    aboutHeader.classList.add('about-header');
    aboutHeader.textContent = 'About us!';
    container.appendChild(aboutHeader);

    const aboutText = document.createElement('p');
    aboutText.classList.add('about-text');
    aboutText.textContent = "We were created back in 1997, when our founder decided to open up a coffee shop in the suburbs of Houston. Combining the love of coffee also with the love of pets, created what is now the coffee shop that has been brought to many places around the United States. We combined the latin cuisine with some of the most popular coffee known."
    container.appendChild(aboutText);

    // 3 row section about dogs, food, and coffee
    const mainSection = document.createElement('div');
    mainSection.classList.add('main-section');

    // food section row
    const foodRow = document.createElement('div');
    foodRow.classList.add('food-row');

    const latinFood = new Image();
    latinFood.src = './assets/latin-food-about.jpg';
    latinFood.style.width = '150px';
    latinFood.style.height = '150px';
    
    const foodText = document.createElement('p');
    foodText.classList.add('food-text');
    foodText.textContent = "We decided to add Latin cuisine like bunuelos and pupusas to our menu because we want to show our hispanic heritage. Our coffee shops have been run by latin people, and we believe that showing our latin culture would be best done by food.";

    foodRow.appendChild(latinFood);
    foodRow.appendChild(foodText);
    mainSection.appendChild(foodRow);

    const dogsRow = document.createElement('div');
    dogsRow.classList.add('dog-row');

    const dogAbout = new Image();
    dogAbout.src = './assets/dog-about.jpg';
    dogAbout.style.width = '150px';
    dogAbout.style.height = '150px';

    const dogText = document.createElement('p');
    dogText.classList.add('dog-text');
    dogText.textContent = "Along with adding Latin Cuisine, we believed that dogs are our best friends. What's better than to bring them to your neighborhood coffee shop. We welcome all pets and encourage everyone to enjoy their experience with their best friends!";

    dogsRow.appendChild(dogAbout);
    dogsRow.appendChild(dogText);
    mainSection.appendChild(dogsRow);

    const coffeeRow = document.createElement('div');
    coffeeRow.classList.add('coffee-row');

    const coffeeAbout = new Image();
    coffeeAbout.src = './assets/coffee-about.jpg';
    coffeeAbout.style.width = '150px';
    coffeeAbout.style.height = '150px';

    const coffeeText = document.createElement('div');
    coffeeText.classList.add('coffee-text');
    coffeeText.textContent = "Obviously, the most important thing about our shop! Coffee!!! We know that coffee can be had at any time, and here at this coffee shop, we want to provide the best coffee around town."

    coffeeRow.appendChild(coffeeAbout);
    coffeeRow.appendChild(coffeeText);
    mainSection.appendChild(coffeeRow);

    container.appendChild(mainSection);

    content.appendChild(container);
};

export { about };