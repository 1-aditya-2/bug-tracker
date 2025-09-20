import React, {useEffect, useState} from 'react';
import API, {setToken} from '../lib/api';

export default function Dashboard(){
  const [bugs,setBugs]=useState([]);
  const [title,setTitle]=useState('');
  const [desc,setDesc]=useState('');
  const [severity,setSeverity]=useState('Low');

  const [filterStatus, setFilterStatus] = useState('');
  const [filterSeverity, setFilterSeverity] = useState('');
  const [search, setSearch] = useState('');

  useEffect(()=>{ const t = localStorage.getItem('token'); if(t){ setToken(t); load(); } },[]);

  async function load(){
    const params = {};
    if(filterStatus) params.status = filterStatus;
    if(filterSeverity) params.severity = filterSeverity;
    if(search) params.search = search;
    const res = await API.get('/bugs', { params });
    setBugs(res.data);
  }

  async function create(e){ e.preventDefault();
    await API.post('/bugs',{title,description:desc,severity});
    setTitle(''); setDesc(''); setSeverity('Low');
    load();
  }

  async function updateStatus(id, status){ await API.put('/bugs/'+id+'/status',{status}); load(); }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4 text-white glow-cyan">DASHBOARD_</h2>

      <div className="bg-[linear-gradient(90deg,#001219, #001833)] border border-[rgba(255,255,255,0.04)] p-4 mb-6 rounded-lg">
        <h3 className="font-semibold mb-2 text-cyan-300">REPORT BUG_</h3>
        <form onSubmit={create} className="grid gap-3">
          <input placeholder="Title" className="bg-black border border-cyan-600 px-3 py-2 text-cyan-200" value={title} onChange={e=>setTitle(e.target.value)} required/>
          <textarea placeholder="Description" className="bg-black border border-pink-600 px-3 py-2 text-pink-200" value={desc} onChange={e=>setDesc(e.target.value)}/>
          <select className="bg-black border border-green-600 px-3 py-2 text-green-200" value={severity} onChange={e=>setSeverity(e.target.value)}>
            <option>Low</option><option>Medium</option><option>High</option>
          </select>
          <button className="w-32 btn-neon text-white py-2 rounded hover:scale-105">SUBMIT</button>
        </form>
      </div>

      <div className="bg-[linear-gradient(90deg,#000814, #001219)] border border-[rgba(255,255,255,0.04)] p-4 mb-6 rounded-lg flex flex-wrap items-center gap-4">
        <select className="bg-black border border-cyan-600 px-3 py-2 text-cyan-200" value={filterStatus} onChange={e=>setFilterStatus(e.target.value)}>
          <option value="">All Status</option>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Closed">Closed</option>
        </select>
        <select className="bg-black border border-pink-600 px-3 py-2 text-pink-200" value={filterSeverity} onChange={e=>setFilterSeverity(e.target.value)}>
          <option value="">All Severity</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <input placeholder="Search by title..." className="bg-black border border-green-600 px-3 py-2 text-green-200 flex-1" value={search} onChange={e=>setSearch(e.target.value)} />
        <button onClick={load} className="btn-neon text-white px-4 py-2 rounded hover:scale-105">APPLY</button>
      </div>

      <div className="bg-[linear-gradient(90deg,#000814, #001219)] border border-[rgba(255,255,255,0.04)] p-4 rounded-lg">
        <h3 className="font-semibold mb-2 text-white">REPORTED BUGS_</h3>
        {bugs.length === 0 ? <p className="text-gray-400">No bugs found.</p> : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-white">
              <thead>
                <tr className="bg-[rgba(255,255,255,0.02)]">
                  <th className="px-4 py-2 text-left">Title</th>
                  <th className="px-4 py-2 text-left">Description</th>
                  <th className="px-4 py-2 text-left">Severity</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bugs.map(b=>(
                  <tr key={b._id} className="border-b border-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.02)]">
                    <td className="px-4 py-2">{b.title}</td>
                    <td className="px-4 py-2">{b.description}</td>
                    <td className="px-4 py-2">
                      <span className={`px-2 py-1 rounded text-xs ${
                        b.severity==='Low'?'bg-green-600 text-black':b.severity==='Medium'?'bg-yellow-400 text-black':'bg-red-500 text-white'
                      }`}>{b.severity}</span>
                    </td>
                    <td className="px-4 py-2">
                      <span className={`px-2 py-1 rounded text-xs ${
                        b.status==='Open'?'bg-cyan-500 text-black':b.status==='In Progress'?'bg-orange-400 text-black':'bg-gray-600 text-white'
                      }`}>{b.status}</span>
                    </td>
                    <td className="px-4 py-2">
                      <select value={b.status} onChange={e=>updateStatus(b._id,e.target.value)} className="bg-black border border-[rgba(255,255,255,0.04)] px-2 py-1 text-white">
                        <option>Open</option>
                        <option>In Progress</option>
                        <option>Closed</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
