// src/components/BurgerCard.js
import React from 'react';
import Image from 'next/image';

const BurgerCard = ({ burger }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full">
      <Image src={burger.image} alt={burger.name} width={500} height={300} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold text-orange-500">{burger.name}</h2>
        <p className="text-gray-700 text-sm">{burger.description}</p>
        <p className="text-md font-semibold text-gray-900 mt-2">${burger.price}</p>
        <div className="flex justify-center mt-4">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default BurgerCard;
