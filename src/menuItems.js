import espresso from './assets/espresso.jpg';
import cappuccino from './assets/cappuccino.jpg';
import latte from './assets/latte.jpg';
import macchiato from './assets/macchiato.jpg';
import chocolateSantaferano from './assets/chocolate-santafereno.jpg';
import flanNapolitano from './assets/flan-napolitano.jpg';
import bunuelos from './assets/bunuelos.jpg';
import pupcakes from './assets/pupcakes.jpg'
import dogBiscuits from './assets/dog-biscuits.jpg';

const menuItems = [
    {
        src: espresso,
        name: 'Espresso',
        description: 'Have a bitter, rich espresso shot with a layer of foamy crema.'
    },
    {
        src: cappuccino,
        name: 'Cappuccino',
        description: 'The perfect combination of steamed milk, espresso, and frothy foam.'
    },
    {
        src: latte,
        name: 'Latte',
        description: 'A combination of espresso, steamed milk and layer of foam to finish it up at the top.'
    },
    {
        src: macchiato,
        name: 'Macchiato',
        description: 'If you want a jolt of caffeine without all the extra calories, this is your drink. Comes with expresso with a generous spoonful of frothy milk at the top.'
    },
    {
        src: chocolateSantaferano,
        name: 'Chocolate Santafereno',
        description: 'Hot chocolate with melted cheese inside. A stable of Colombian cuisine and a true local favorite.'
    },
    {
        src: flanNapolitano,
        name: 'Flan Napolitano',
        description: 'Egg-based custard that is sweet and creamy, served with a layer of caramel sauce on the bottom.'
    },
    {
        src: bunuelos,
        name: 'Bunuelos',
        description: 'Fried dough balls that are filled with different kinds of fillings, covered with caramel or sugar.'
    },
    {
        src: pupcakes,
        name: 'Pupcakes',
        description: 'Sweet treats that your dog will enjoy that comes sugar-free with yogurt as the topping.'
    },
    {
        src: dogBiscuits,
        name: 'biscuits',
        description: 'A nice treat your pet will enjoy.'
    }

]

export { menuItems };