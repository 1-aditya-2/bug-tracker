import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import './index.css';

function Navbar() {
  const [user,setUser]=useState(null);
  const nav = useNavigate();
  useEffect(()=>{
    const u = localStorage.getItem('user');
    if(u) setUser(JSON.parse(u));
  },[]);
  function logout(){
    localStorage.clear();
    setUser(null);
    nav('/');
  }
  return (
    <nav className="bg-black/60 backdrop-blur border-b border-[rgba(255,255,255,0.04)] mb-6">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold glow-pink glitch-wrap" data-text="BUG TRACKER_">BUG TRACKER_</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-white/90">Home</Link>
          {user ? (
            <>
              <Link to="/dashboard" className="hover:text-white/90">Dashboard</Link>
              <button onClick={logout} className="text-red-400 hover:underline">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-white/90">Login</Link>
              <Link to="/register" className="hover:text-white/90">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

function App(){
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(<App/>);
