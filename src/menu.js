// page tab for the menu tab

const menuItems = [
    {
        name: 'Americano',
        price: 4.99,
        description: 'The ideal hot drink when you want to have a delicious espresso.'
    },
    {
        name: 'Espresso',
        price: 4.50,
        description: 'A single shot of coffee, served into a small demitasse cup.'
    },
    {
        name: 'Cappuccino',
        price: 5.99,
        description: 'The combination of an espresso and the choice of your milk - almond, whole or soy.'
    },
    {
        name: 'Latte',
        price: 5.49,
        description: 'A milk coffee made up of one shot of espresso, steamed milk and a thin layer of frothed milk on top.'
    },
    {
        name: 'Empanandas',
        price: 8.99,
        description: 'A baked or fried pastry stuffed with meat, cheese and vegetables, a cuisine from Mexico.'
    },
    {
        name: 'Tamales',
        price: 9.99,
        description: 'Mexican dish made up of cornmeal dough around a filling of minced meat and red peppers.'
    },
    {
        name: 'Bunuelos',
        price: 3.99,
        description: 'Fritters made with a mix of cheese, corn starch and yuca flour from the country of Colombia.'
    },
    {
        name: 'Bandeja Paisa',
        price: 17.99,
        description: 'Full of flavors that include red beans, rice, chicharron, fried egg, plantains, chorizo sausage, morcilla, avocado with an arepa.'
    }
]

// main function
function menu() {
    const content = document.querySelector('#content');

    const container = document.createElement('div');
    container.classList.add('menu-container');

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

    for (let i = 0; i < menuItems.length; i++) {
        let card = document.createElement('div');
        card.classList.add('card');

        let itemName = document.createElement('p');
        let itemPrice = document.createElement('p');
        let itemDescription = document.createElement('p');

        itemName.textContent = menuItems[i].name;
        itemPrice.textContent = `$${Math.abs(menuItems[i].price)}`;
        itemDescription.textContent = menuItems[i].description;

        card.append(itemName);
        card.append(itemPrice);
        card.append(itemDescription);

        cardSection.append(card);
    }

    container.appendChild(cardSection);
    content.appendChild(container);
};

export { menu };