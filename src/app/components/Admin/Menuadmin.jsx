'use client';

import React from 'react';
import { FaUserShield, FaBox, FaClipboardList, FaTachometerAlt } from 'react-icons/fa';
import Link from 'next/link';

const AdminMenu = () => {
  return (
    <div className="bg-white min-h-screen w-64 flex flex-col p-4 shadow-lg rounded-r-lg">
      <h1 className="text-2xl font-bold text-orange-500 mb-6">Admin Painel</h1>
      <nav className="flex flex-col space-y-4">
        <Link href="/admins" className="flex items-center text-gray-700 hover:text-orange-500 transition-colors duration-200">
          <FaUserShield className="mr-2 text-xl" />
          <span className="font-semibold">Admins</span>
        </Link>
        <Link href="/products" className="flex items-center text-gray-700 hover:text-orange-500 transition-colors duration-200">
          <FaBox className="mr-2 text-xl" />
          <span className="font-semibold">Products</span>
        </Link>
        <Link href="/pedidos" className="flex items-center text-gray-700 hover:text-orange-500 transition-colors duration-200">
          <FaClipboardList className="mr-2 text-xl" />
          <span className="font-semibold">Pedidos</span>
        </Link>
        <Link href="/dashboard" className="flex items-center text-gray-700 hover:text-orange-500 transition-colors duration-200">
          <FaTachometerAlt className="mr-2 text-xl" />
          <span className="font-semibold">Dashboard</span>
        </Link>
      </nav>
    </div>
  );
};

export default AdminMenu;