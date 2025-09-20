import React, { useState } from "react";
import API from "../lib/api";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [name,setName]=useState(""); const [email,setEmail]=useState(""); const [password,setPassword]=useState("");
  const nav = useNavigate();

  async function submit(e){ e.preventDefault();
    try{
      await API.post('/auth/register',{name,email,password});
      alert('Registered. Please login.');
      nav('/login');
    }catch(err){ alert(err?.response?.data?.msg || 'Error'); }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-[linear-gradient(135deg,#050816, #001833)] border border-[rgba(255,255,255,0.04)] p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-white glow-pink">REGISTER_</h2>
        <form onSubmit={submit} className="space-y-4">
          <input placeholder="Name" className="w-full bg-black border border-cyan-600 rounded px-3 py-2 text-cyan-200" value={name} onChange={(e)=>setName(e.target.value)} required/>
          <input type="email" placeholder="Email" className="w-full bg-black border border-pink-600 rounded px-3 py-2 text-pink-200" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
          <input type="password" placeholder="Password" className="w-full bg-black border border-green-600 rounded px-3 py-2 text-green-200" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
          <button className="w-full btn-neon text-white py-2 rounded hover:scale-105">REGISTER</button>
        </form>
        <p className="text-sm text-center mt-4 text-gray-400">Already have an account? <Link to="/login" className="text-cyan-300 hover:underline">Login</Link></p>
      </div>
    </div>
  );
}
