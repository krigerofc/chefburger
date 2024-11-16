// src/components/TopBurgers.js
import React from 'react';
import BurgerCard from './CardBurger';


const burgers = [
  {
    name: 'Classic Cheeseburger',
    description: 'A timeless classic with cheddar cheese, lettuce, tomato, and our special sauce.',
    image: '/images/xburguer.png',
    price: 8.99,
  },
  {
    name: 'Bacon BBQ Burger',
    description: 'Smoky BBQ sauce, crispy bacon, cheddar cheese, and onion rings.',
    image: '/images/xburguer.png',
    price: 9.99,
  },
  {
    name: 'Mushroom Swiss Burger',
    description: 'Sautéed mushrooms, Swiss cheese, and garlic aioli.',
    image: '/images/xburguer.png',
    price: 10.99,
  },
  {
    name: 'Spicy Jalapeño Burger',
    description: 'Pepper jack cheese, jalapeños, and spicy mayo.',
    image: '/images/xburguer.png',
    price: 9.49,
  },
  {
    name: 'Veggie Delight Burger',
    description: 'A delicious veggie patty with avocado, lettuce, tomato, and vegan mayo.',
    image: '/images/xburguer.png',
    price: 8.49,
  },
];

const TopBurgers = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 p-6">
      {burgers.map((burger, index) => (
        <BurgerCard key={index} burger={burger} />
      ))}
    </div>
  );
};

export default TopBurgers;
