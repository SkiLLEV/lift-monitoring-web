const Sidebar = () => {
    return (
        <aside className="w-full md:w-64 bg-primaryBlue text-white md:h-screen p-8 flex flex-col sticky top-0 shadow-xl z-10">
            <header className="mb-10">
                <h1 className="text-2xl font-black tracking-tighter">ELEVATOR SYS</h1>
                <p className="text-[10px] opacity-70 uppercase tracking-widest">Control Panel</p>
            </header>

            <nav className="flex-1">
                <ul className="space-y-4">
                    <li><a href="#" className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/10 transition-colors"><span>📊</span> Dashboard</a></li>
                    <li><a href="#" className="flex items-center gap-4 p-3 rounded-lg bg-white/20 font-bold shadow-sm"><span>🛗</span> Lifts</a></li>
                    <li><a href="#" className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/10 transition-colors"><span>📡</span> Monitoring</a></li>
                    <li><a href="#" className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/10 transition-colors"><span>📈</span> Statistics</a></li>
                    <li><a href="#" className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/10 transition-colors"><span>⚙️</span> Settings</a></li>
                </ul>
            </nav>

            <footer className="pt-6 border-t border-white/20 text-[10px] opacity-60">
                <p>Developer: Davenport</p>
            </footer>
        </aside>
    );
};

export default Sidebar;