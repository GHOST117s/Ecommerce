import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import NavbarSecondary from './Components/NavbarSecondary';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    localStorage.removeItem('user');
  }, []);

  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find((user) => user.email === email && user.name === password);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      router.push('/categories');
    } else {
      setError('Invalid email or password');
    }
  }

  return (
    <div>
      <NavbarSecondary />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <p className="text-center text-2xl font-bold mb-6">Login Page</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="block text-gray-700 font-bold mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="block text-gray-700 font-bold mb-2">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <div className="flex justify-center">
              <button
                type="submit"
                className="group relative inline-block focus:outline-none focus:ring border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75 hover:bg-sky-200"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
