import React from 'react'

function Stats({ label, value, trend, positive }) {
  return (
    
  <div className="col-span-12 sm:col-span-6 md:col-span-3 border-r border-b border-zinc-800 p-6 bg-zinc-950 hover:bg-zinc-900 transition-colors">
    <span className="font-mono text-xs text-zinc-500 block mb-2">{label}</span>
    <div className="text-3xl font-sans font-bold text-white mb-2">{value}</div>
    <div className={`font-mono text-xs ${positive ? 'text-lime-400' : 'text-red-400'}`}>
      {trend}
    </div>
  </div>
    )   
}

export default Stats