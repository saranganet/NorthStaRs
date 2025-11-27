import React from 'react';

function Footer() {
    return (
        <footer className="border-t border-zinc-800 bg-zinc-950 py-12 px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                <div>
                    <h4 className="font-sans font-bold text-2xl uppercase text-white mb-4">NorthStaRs</h4>
                    <div className="flex gap-4 font-mono text-xs text-zinc-500">
                        <a href="#" className="hover:text-lime-400 transition-colors">Terms</a>
                        <a href="#" className="hover:text-lime-400 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-lime-400 transition-colors">System Status</a>
                    </div>
                </div>
                <div className="text-right">
                    <p className="font-mono text-xs text-zinc-600 mb-1">DESIGN SYSTEM: NOIR SWISS V1</p>
                    <p className="font-mono text-xs text-zinc-600">© 2025</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
