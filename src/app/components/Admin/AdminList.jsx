'use client';

import React from 'react';
import { FaUserShield, FaTrashAlt } from 'react-icons/fa';

const AdminList = ({ admins }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-orange-500 mb-4">Lista de admins</h2>
      <ul>
        {admins.map((admin, index) => (
          <li key={index} className="flex items-center justify-between mb-2 p-2 border-b border-gray-200">
            <div className="flex items-center">
              <FaUserShield className="mr-2 text-xl text-gray-700" />
              <div>
                <span className="text-gray-700 font-semibold">{admin.name}</span>
                <p className="text-gray-500 text-sm">{admin.email}</p>
              </div>
            </div>
            <button className="text-red-500 hover:text-red-700">
              <FaTrashAlt />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminList;
