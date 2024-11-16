'use client';

import React from 'react';
import { FaBoxOpen } from 'react-icons/fa';

const ProductList = ({ products }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-green-500 mb-4">Products</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index} className="flex items-center mb-2">
            <FaBoxOpen className="mr-2 text-xl text-gray-700" />
            <span className="text-gray-700">{product.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
