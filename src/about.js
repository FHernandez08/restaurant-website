// page tab for the about section of the restaurant
import latinFood from './assets/latin-food-about.jpg';
import dogAbout from './assets/dog-about.jpg';
import coffeeAbout from './assets/coffee-about.jpg';

function about() {
    const content = document.querySelector('#content');

    const container = document.createElement('div');
    container.classList.add('container');

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

    const foodImage = new Image();
    foodImage.src = latinFood;
    foodImage.style.width = '100px';
    foodImage.style.height = '100px';
    
    const foodText = document.createElement('p');
    foodText.classList.add('food-text');
    foodText.textContent = "We decided to add Latin cuisine like bunuelos and pupusas to our menu because we want to show our hispanic heritage. Our coffee shops have been run by latin people, and we believe that showing our latin culture would be best done by food.";

    foodRow.appendChild(foodImage);
    foodRow.appendChild(foodText);
    mainSection.appendChild(foodRow);

    const dogsRow = document.createElement('div');
    dogsRow.classList.add('dog-row');

    const dogImage = new Image();
    dogImage.src = dogAbout;
    dogImage.style.width = '100px';
    dogImage.style.height = '100px';

    const dogText = document.createElement('p');
    dogText.classList.add('dog-text');
    dogText.textContent = "Along with adding Latin Cuisine, we believed that dogs are our best friends. What's better than to bring them to your neighborhood coffee shop. We welcome all pets and encourage everyone to enjoy their experience with their best friends!";

    dogsRow.appendChild(dogImage);
    dogsRow.appendChild(dogText);
    mainSection.appendChild(dogsRow);

    const coffeeRow = document.createElement('div');
    coffeeRow.classList.add('coffee-row');

    const coffeeImage = new Image();
    coffeeImage.src = coffeeAbout;
    coffeeImage.style.width = '100px';
    coffeeImage.style.height = '100px';

    const coffeeText = document.createElement('div');
    coffeeText.classList.add('coffee-text');
    coffeeText.textContent = "Obviously, the most important thing about our shop! Coffee!!! We know that coffee can be had at any time, and here at this coffee shop, we want to provide the best coffee around town."

    coffeeRow.appendChild(coffeeImage);
    coffeeRow.appendChild(coffeeText);
    mainSection.appendChild(coffeeRow);

    container.appendChild(mainSection);

    content.appendChild(container);
};

export { about };