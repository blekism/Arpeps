export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white border-r border-slate-800 relative">
      <div className="p-6">
        <h1 className="text-2xl font-bold">My App</h1>
        <p className="text-sm text-slate-400">Navigation</p>
      </div>

      <nav className="px-4">
        <ul className="space-y-2">
          <li>
            <a
              href="/"
              className="block rounded-lg px-4 py-3 hover:bg-slate-800 transition"
            >
              🏠 Home
            </a>
          </li>

          <li>
            <a
              href="/dashboard"
              className="block rounded-lg px-4 py-3 hover:bg-slate-800 transition"
            >
              📊 Dashboard
            </a>
          </li>

          <li>
            <a
              href="/projects"
              className="block rounded-lg px-4 py-3 hover:bg-slate-800 transition"
            >
              📁 Projects
            </a>
          </li>

          <li>
            <a
              href="/settings"
              className="block rounded-lg px-4 py-3 hover:bg-slate-800 transition"
            >
              ⚙️ Settings
            </a>
          </li>
        </ul>
      </nav>

      <div className="absolute bottom-0 w-64 border-t border-slate-800 p-4">
        <p className="text-sm text-slate-400">Logged in as</p>
        <p className="font-medium">John Doe</p>
      </div>
    </aside>
  );
}
