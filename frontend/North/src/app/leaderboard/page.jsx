'use client';
import { useEffect, useState } from "react";

// --- Real API Integration ---
import { getLeaderboard } from '@/app/utils/api';

// --- Swiss Grid Components ---

// Rank 1: The Dominant Module
const ChampionSwiss = ({ data, onAnalyze }) => (
  <div className="col-span-12 lg:col-span-8 bg-zinc-950 p-6 md:p-12 border-b lg:border-b-0 lg:border-r border-zinc-800 flex flex-col justify-between min-h-[400px] relative group hover:bg-zinc-900 transition-colors">
    <div className="absolute top-4 right-6 font-sans font-bold text-[10rem] md:text-[14rem] leading-none text-zinc-900 group-hover:text-lime-900/20 select-none transition-colors">
      1
    </div>

    <div className="z-10 relative">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-lime-400"></div>
          <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">Current Leader</span>
        </div>
        <button
          onClick={() => onAnalyze(data, 1)}
          className="bg-zinc-800 hover:bg-lime-400 hover:text-black text-zinc-400 px-3 py-1 font-mono text-xs border border-zinc-700 transition-all flex items-center gap-2"
        >
          <span>✨ ANALYZE</span>
        </button>
      </div>
      <h2 className="font-sans font-bold text-6xl md:text-8xl text-zinc-100 tracking-tighter uppercase leading-[0.9]">
        {data?.name || "VOID"}
      </h2>
    </div>

    <div className="z-10 flex items-end justify-between border-t border-zinc-800 pt-6 mt-12">
      <div>
        <span className="block font-mono text-xs text-zinc-500 mb-1">OPERATIVE_ID</span>
        <span className="block font-mono text-lime-400">{data?.username}</span>
      </div>
      <div className="text-right">
        <span className="block font-mono text-xs text-zinc-500 mb-1">TOTAL_XP</span>
        <span className="block font-sans font-bold text-4xl md:text-5xl text-white">
          {data?.score ? data.score.toLocaleString() : "0"}
        </span>
      </div>
    </div>
  </div>
);

// Rank 2 & 3: The Stacked Column
const RunnerUpSwiss = ({ data, rank, onAnalyze }) => (
  <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-zinc-950 p-6 border-b border-zinc-800 lg:last:border-b-0 flex flex-col justify-center hover:bg-zinc-900 transition-colors h-[200px] lg:h-auto relative group">
    <div className="flex justify-between items-start mb-2">
      <span className="font-mono text-xs text-zinc-500">RANK_0{rank}</span>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onAnalyze(data, rank)}
          className="opacity-0 group-hover:opacity-100 bg-zinc-800 text-lime-400 hover:bg-lime-400 hover:text-black px-2 py-0.5 font-mono text-[10px] transition-all"
        >
          ✨
        </button>
        <div className={`w-2 h-2 ${rank === 2 ? 'bg-zinc-600' : 'bg-zinc-800'}`}></div>
      </div>
    </div>
    <h3 className="font-sans font-bold text-3xl md:text-4xl text-zinc-200 uppercase tracking-tight truncate">
      {data?.name || "EMPTY"}
    </h3>
    <p className="font-mono text-lime-400 text-lg mt-2 text-right border-t border-zinc-800/50 pt-2">
      {data?.score ? data.score.toLocaleString() : "0"} XP
    </p>
  </div>
);

// The List: Strict Horizontal Alignment
const ListRowSwiss = ({ data, rank, onAnalyze }) => (
  <div className="col-span-12 grid grid-cols-12 border-b border-zinc-800 hover:bg-lime-400 group transition-colors duration-0">
    <div className="col-span-2 md:col-span-1 p-4 flex items-center justify-center font-sans font-bold text-xl text-zinc-600 group-hover:text-black border-r border-zinc-800 group-hover:border-black/20">
      {rank < 10 ? `0${rank}` : rank}
    </div>
    <div className="col-span-6 md:col-span-8 p-4 flex items-center justify-between border-r border-zinc-800 group-hover:border-black/20 pl-6">
      <span className="font-sans font-bold text-lg uppercase tracking-tight text-zinc-300 group-hover:text-black">
        {data?.name || "UNKNOWN"}
      </span>
      <button
        onClick={(e) => { e.stopPropagation(); onAnalyze(data, rank); }}
        className="opacity-0 group-hover:opacity-100 mr-4 text-black border border-black px-2 hover:bg-black hover:text-lime-400 font-mono text-xs font-bold uppercase"
      >
        ✨ Analyze
      </button>
    </div>
    <div className="col-span-4 md:col-span-3 p-4 flex items-center justify-end font-mono text-sm text-zinc-500 group-hover:text-black font-bold">
      {data?.score ? data.score.toLocaleString() : 0} XP
    </div>
  </div>
);

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        const response = await getLeaderboard();
        // Transform backend data to match frontend component structure
        // Backend returns: { id, username, operativeName, xp, level, streakCount, lastLogin }
        // Frontend expects: { id, name, score, username }
        const transformedData = response.map((user) => ({
          id: user.id,
          name: user.operativeName || user.username, // Use operativeName if available, else username
          username: user.username, // Keep username for OPERATIVE_ID display
          score: user.xp,
        }));
        setLeaderboard(transformedData);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchLeaderboard();
  }, []);

  const handleAnalyze = async (user, rank) => {
    console.log('Analyzing user:', user, 'Rank:', rank);
    // TODO: Make backend API call here
    // Example:
    // try {
    //   const response = await fetch(`http://localhost:3005/analyze/${user.id}`, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ rank })
    //   });
    //   const analysis = await response.json();
    //   console.log('Analysis result:', analysis);
    // } catch (error) {
    //   console.error('Analysis failed:', error);
    // }
  };

  const topThree = leaderboard.slice(0, 3);
  const restOfList = leaderboard.slice(3);

  return (
    <div className="bg-zinc-950 w-full min-h-screen text-zinc-100 font-sans selection:bg-lime-400 selection:text-black">
      {/* SWISS GRID CONTAINER */}
      <div className="w-full max-w-7xl mx-auto border-x border-zinc-800">
        {/* HEADER */}
        <header className="border-b border-zinc-800 bg-zinc-950 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <div className="grid grid-cols-3 gap-1 w-24 h-24">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="bg-zinc-700 w-full h-full"></div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-lime-400"></div>
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">International Ranking Sys.</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter uppercase leading-[0.85] text-white mix-blend-difference">
              Leader<br />Board
            </h1>
          </div>
        </header>

        {/* LOADING STATE */}
        {loading && (
          <div className="border-b border-zinc-800 p-24 text-center font-mono text-lime-400">
            LOADING DATA MODULE...
          </div>
        )}

        {/* MAIN GRID LAYOUT */}
        {!loading && (
          <div className="grid grid-cols-12 border-b border-zinc-800">
            {/* RANK 1 */}
            <ChampionSwiss data={topThree[0]} onAnalyze={handleAnalyze} />

            {/* RANK 2 & 3 */}
            <div className="col-span-12 lg:col-span-4 grid grid-cols-12 lg:block">
              <RunnerUpSwiss data={topThree[1]} rank={2} onAnalyze={handleAnalyze} />
              <RunnerUpSwiss data={topThree[2]} rank={3} onAnalyze={handleAnalyze} />
            </div>
          </div>
        )}

        {/* DATA LIST HEADER */}
        {!loading && (
          <div className="grid grid-cols-12 border-b border-zinc-800 bg-zinc-900 py-4">
            <div className="col-span-2 md:col-span-1 text-center font-mono text-xs text-zinc-500">POS</div>
            <div className="col-span-6 md:col-span-8 pl-6 font-mono text-xs text-zinc-500">OPERATIVE</div>
            <div className="col-span-4 md:col-span-3 text-right pr-4 font-mono text-xs text-zinc-500">PERFORMANCE</div>
          </div>
        )}

        {/* RANKING LIST */}
        {!loading && restOfList.map((user, index) => (
          <ListRowSwiss key={user.id || index} data={user} rank={index + 4} onAnalyze={handleAnalyze} />
        ))}

        {/* FOOTER */}
        <div className="p-12 border-t border-zinc-800 bg-zinc-950 flex justify-between items-end">
          <div className="font-mono text-xs text-zinc-600">
            System v2.4<br />
            Zurich / Grid
          </div>
          <div className="w-8 h-8 border border-zinc-800 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}