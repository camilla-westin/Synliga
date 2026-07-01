import { NavLink, Outlet } from 'react-router-dom'

const navigation = [
  { to: '/om-synliga', label: 'Om Synliga' },
  { to: '/bandmedlemmar', label: 'Bandmedlemmar' },
  { to: '/diskografi', label: 'Diskografi' },
  { to: '/lankar', label: 'Länkar' },
  { to: '/press', label: 'Press' },
]

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-white/10 bg-zinc-950/90">
        <nav className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <NavLink to="/" className="text-2xl font-semibold tracking-wide">
            Synliga
          </NavLink>

          <div className="flex flex-wrap gap-2">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    'rounded-md px-3 py-2 text-sm font-medium transition',
                    isActive
                      ? 'bg-emerald-400 text-zinc-950'
                      : 'text-zinc-300 hover:bg-white/10 hover:text-white',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12">
        <Outlet />
      </main>
    </div>
  )
}

export default App
