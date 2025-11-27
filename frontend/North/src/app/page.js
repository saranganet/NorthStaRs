'use client';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import ModuleCard from '@/components/ModuleCard';

export default function HomePage() {
  return (
    <div className="w-full max-w-[1920px] mx-auto border-x border-zinc-800">
      <Hero />
      <div className="grid grid-cols-12 border-b border-zinc-800">
        <Stats label="TOTAL_HOURS" value="42.5" trend="+12% vs last week" positive={true} />
        <Stats label="MODULES_ACTIVE" value="03" trend="Optimal Load" positive={true} />
        <Stats label="GLOBAL_RANK" value="#842" trend="-4 Positions" positive={false} />
        <Stats label="SYSTEM_STATUS" value="ONLINE" trend="Latency 12ms" positive={true} />
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 p-4 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Active Curriculum</span>
          <div className="flex gap-2">
            <div className="w-1 h-1 bg-lime-400 rounded-full animate-ping"></div>
            <span className="font-mono text-xs text-lime-400">LIVE</span>
          </div>
        </div>
        <ModuleCard span="col-span-12 md:col-span-8 lg:col-span-6" title="Advanced Algorithms" sub="Module_04" progress={75} />
        <ModuleCard span="col-span-12 md:col-span-4 lg:col-span-3" title="System Design" sub="Module_02" progress={30} />
        <ModuleCard span="col-span-12 md:col-span-6 lg:col-span-3" title="React Patterns" sub="Module_09" progress={12} />
        <ModuleCard span="col-span-12 md:col-span-6 lg:col-span-3" title="Data Structures" sub="Module_01" progress={100} />
        <div className="col-span-12 md:col-span-6 lg:col-span-9 bg-zinc-950 border-r border-b border-zinc-800 p-8 flex flex-col md:flex-row items-center justify-between gap-8 group hover:bg-zinc-900 transition-colors cursor-pointer">
          <div>
            <h3 className="font-sans font-bold text-xl md:text-2xl text-white uppercase mb-2">Daily Challenge: <span className="text-lime-400">Binary Inversion</span></h3>
            <p className="font-mono text-xs text-zinc-500 max-w-md">Complete the daily challenge to maintain your streak and earn a 2x XP multiplier.</p>
          </div>
          <div className="w-12 h-12 border border-lime-400 flex items-center justify-center rounded-none group-hover:bg-lime-400 group-hover:text-black transition-all shrink-0">
            <span className="font-bold text-xl">→</span>
          </div>
        </div>
      </div>
    </div>
  );
}