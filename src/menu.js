// page tab for the menu tab

// images
import americano from './assets/americano.jpg';
import espresso from './assets/espresso.jpg';
import cappuccino from './assets/cappuccino.jpg';
import latte from './assets/latte.jpg';

import empanadas from './assets/empanadas.jpg';
import tamales from './assets/tamales.jpg';
import bunuelos from './assets/bunuelos.jpg';
import bandejaPaisa from './assets/bandeja-paisa.jpg';

menuItems = [
    {
        name: 'Americano',
        image: americano,
        price: 4.99,
        description: 'The ideal hot drink when you want to have a delicious espresso.'
    },
    {
        name: 'Espresso',
        image: espresso,
        price: 4.50,
        description: 'A single shot of coffee, served into a small demitasse cup.'
    },
    {
        name: 'Cappuccino',
        image: cappuccino,
        price: 5.99,
        description: 'The combination of an espresso and the choice of your milk - almond, whole or soy.'
    },
    {
        name: 'Latte',
        image: latte,
        price: 5.50,
        description: 'A milk coffee made up of one shot of espresso, steamed milk and a thin layer of frothed milk on top.'
    },
    {
        name: 'Empanandas',
        image: empanadas,
        price: 8.99,
        description: 'A baked or fried pastry stuffed with meat, cheese and vegetables, a cuisine from Mexico.'
    },
    {
        name: 'Tamales',
        image: tamales,
        price: 9.99,
        description: 'Mexican dish made up of cornmeal dough around a filling of minced meat and red peppers.'
    },
    {
        name: 'Bunuelos',
        image: bunuelos,
        price: 3.99,
        description: 'Fritters made with a mix of cheese, corn starch and yuca flour from the country of Colombia.'
    },
    {
        name: 'Bandeja Paisa',
        image: bandejaPaisa,
        price: 17.99,
        description: 'Full of flavors that include red beans, rice, chicharron, fried egg, plantains, chorizo sausage, morcilla, avocado with an arepa.'
    }
]

function createCard(menuItem) {
    const cardDiv = document.createElement('div');
    const imgDiv = document.createElement('div');
    const img = document.createElement('img');
    const itemName = document.createElement('p');
    const itemPrice = document.createElement('p');
    const itemDescription = document.createElement('p');

    cardDiv.classList.add('item-card');
    imgDiv.classList.add('card-image');

    itemName = menuItem.name;
    img.src = menuItem.src;
    itemPrice = menuItem.price;
    itemDescription = menuItem.description;

    imgDiv.appendChild(img);

    cardDiv.appendChild(itemName);
    cardDiv.appendChild(imgDiv);
    cardDiv.appendChild(itemPrice);
    cardDiv.appendChild(itemDescription);

}

// main function
function menu() {
    const content = document.querySelector('#content');

    const container = document.createElement('div');
    container.classList.add('container');

    const menuHeading = document.createElement('h2');
    menuHeading.classList.add('menu-heading');
    menuHeading.textContent = 'Our Menu';
    container.appendChild(menuHeading);

    const headingUnderline = document.createElement('p');
    headingUnderline.classList.add('heading-underline');
    headingUnderline.textContent = 'We provide the best coffee in town, along with some of the most popular latin cuisine foods to pair with our coffee. Makes the perfect combination to start your day or to dine during your lunch hour!'
    container.appendChild(headingUnderline);

    const cardSection = document.createElement('div');
    cardSection.classList.add('card-section');

    menuItems.forEach(item => {
        const card = createCard(item);
        cardSection.append(card);
    });

    container.appendChild(cardSection);
    content.appendChild(container);
};

export { menu };