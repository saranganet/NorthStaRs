"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBar() {
    const pathname = (usePathname() || "").toLowerCase();
    const isActive = (key) => {
        if (key === 'home') return pathname === '/' || pathname.includes('home');
        return pathname.includes(key);
    };

    return (
        <nav className="border-b border-zinc-800 bg-zinc-950 py-4 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center sticky top-0 z-50 gap-4 md:gap-0">
            <Link href="/" className="flex items-center gap-2 w-full md:w-auto">
                <div className="w-3 h-3 bg-lime-400"></div>
                <span className="font-mono text-sm tracking-widest text-zinc-100 uppercase">Nexus_Grid</span>
            </Link>

            <div className="flex gap-6 md:gap-8 font-mono text-xs text-zinc-500 uppercase tracking-wider w-full md:w-auto overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                <Link href="/" className={`hover:text-lime-400 transition-colors whitespace-nowrap ${isActive('home') ? 'text-lime-400' : ''}`}>
                    Home
                </Link>
                <Link href="/leaderboard" className={`hover:text-lime-400 transition-colors whitespace-nowrap ${isActive('leaderboard') ? 'text-lime-400' : ''}`}>
                    Leaderboard
                </Link>
                <span className="text-zinc-700 cursor-not-allowed whitespace-nowrap">Profile [LOCKED]</span>
            </div>
        </nav>
    )
};

export default NavBar;