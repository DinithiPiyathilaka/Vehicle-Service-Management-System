import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email === 'user@gmail.com' && password === 'user123') {
      window.location.href = '/cusdetails';
    } else if (email === 'vehicle@gmail.com' && password === 'vehicle123') {
      window.location.href = '/vehicles/dashboard';
    } else if (email === 'inventory@gmail.com' && password === 'inventory123') {
      window.location.href = '/InventoryHome';
    } else if (email === 'booking@gmail.com' && password === 'booking123') {
      window.location.href = '/mbooking';
    } else if (email === 'employee@gmail.com' && password === 'employee123') {
      window.location.href = '/employee/maindash';
    } else if (email === 'payment@gmail.com' && password === 'payment123') {
      window.location.href = '/payment/dashboard';
    } else {
      
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover" style={{ backgroundImage: 'url("../src/images/login.jpg")', backgroundPosition: 'right 25%' }}>
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6" style={{ marginLeft: '50rem' }}>
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Manager Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-600">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" name="email" value={email} onChange={onChange} required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-600">Password</label>
            <input type="password" id="password" placeholder="Enter your password" name="password" value={password} onChange={onChange} required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="remember_me" className="h-4 w-4 text-blue-u500 focs:ring-blue-400 border-gray-300 rounded" />
              <label htmlFor="remember_me" className="ml-2 text-sm text-gray-800">Remember me</label>
            </div>
            <Link className="text-sm text-blue-500 hover:underline" to="/forgotpassword">Forgot password?</Link>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300">Login</button>
        </form>
        <p className="text-sm mt-4 text-center text-gray-600">Don't have an account? <Link to="/register" className="font-medium text-blue-500 hover:underline">Sign up</Link></p>
      </div>
    </div>
  );
};

export default Login;
