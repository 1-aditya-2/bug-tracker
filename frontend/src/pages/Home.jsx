import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(){
  return (
    <div className="flex flex-col items-center justify-center text-center py-24">
      <h1 className="text-5xl font-bold text-white glow-pink glitch-wrap mb-4" data-text="BUG TRACKER_">BUG TRACKER_</h1>
      <p className="text-lg text-cyan-300 mb-6 hue-shift">Retro-futuristic bug tracking system with neon glitches.</p>
      <div className="flex gap-4">
        <Link to='/register' className='btn-neon text-sm px-5 py-2 rounded border-[1px] border-cyan-400 glow-cyan'>Get Started</Link>
        <Link to='/dashboard' className='btn-neon text-sm px-5 py-2 rounded border-[1px] border-pink-400 glow-pink'>Open Dashboard</Link>
      </div>
    </div>
  );
}
