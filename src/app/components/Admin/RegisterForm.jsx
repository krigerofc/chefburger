'use client';

import React, { useState } from 'react';
import   Link from 'next/link';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [hashScrete, setHashScrete] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirm] = useState('')
  const [error, setError] = useState('');
  const [register, setRegister] = useState('')

  const SubmitForm = async(e) =>{
    e.preventDefault()

    const response = await fetch('http://localhost:3000/api/user/register', {
      method:'POST',
      body:JSON.stringify({name, email, hashScrete, password, confirmPassword}),
      headers: {'Content-Type':'application/json'},
    });

    const data = await response.json()

    if(data.error){
      setError(data.error);
      setRegister('')
    }
    else{
      if(data.create === true){
        setRegister('Conta criada com sucesso')
        setError('')
      }else{
        setError('Falha ao criar o usuário, verifique as informações de cadastro')}
    }
  };

  return (
    <div className="bg-yellow-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-orange-500 mb-6">Chef Burger Registro</h1>
        <form onSubmit={SubmitForm}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Nome
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hashScrete">
              Codigo de inscrição
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="hashScrete"
              type="text"
              placeholder="Digite o Codigo de inscrição"
              value={hashScrete}
              onChange={(e) => setHashScrete(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Senha
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Confirmar senha
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Digite sua senha"
              value={confirmPassword}
              onChange={(e) => setconfirm(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-xs italic">{error}</p>}
          {register && <p className="text-green-500 text-xs italic">{register}</p>}
          <div className="flex items-center justify-center">
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Registrar
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <Link href="/pages/admin/login" className="text-orange-500 underline">
            Já tem uma conta? Faça login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
