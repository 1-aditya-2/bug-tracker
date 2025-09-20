import React, { useState } from "react";
import API, { setToken } from "../lib/api";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  async function submit(e) {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", { email, password });
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      nav("/dashboard");
    } catch (err) {
      alert(err?.response?.data?.msg || "Error");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-[linear-gradient(135deg,#001219, #000814)] border border-[rgba(255,255,255,0.04)] p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-white glow-cyan">LOGIN_</h2>
        <form onSubmit={submit} className="space-y-4">
          <input type="email" placeholder="Email" className="w-full bg-black border border-cyan-600 rounded px-3 py-2 text-cyan-200" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
          <input type="password" placeholder="Password" className="w-full bg-black border border-pink-600 rounded px-3 py-2 text-pink-200" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
          <button className="w-full btn-neon text-white py-2 rounded hover:scale-105">LOGIN</button>
        </form>
        <p className="text-sm text-center mt-4 text-gray-400">Don’t have an account? <Link to="/register" className="text-cyan-300 hover:underline">Register</Link></p>
      </div>
    </div>
  );
}
