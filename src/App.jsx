import { NavLink, Outlet, useLocation } from 'react-router-dom'

const navigation = {
  sv: [
    { to: '/om-synliga', label: 'Om Synliga' },
    { to: '/bandmedlemmar', label: 'Bandmedlemmar' },
    { to: '/morkershow', label: 'Mörkershow' },
    { to: '/diskografi', label: 'Diskografi' },
    { to: '/lankar', label: 'Länkar' },
    { to: '/press', label: 'Press' },
  ],
  en: [
    { to: '/en/about', label: 'About' },
    { to: '/en/band-members', label: 'Band Members' },
    { to: '/en/shows-in-the-dark', label: 'Shows in the dark' },
    { to: '/en/discography', label: 'Discography' }
  ],
}

const languagePairs = {
  '/': '/en',
  '/om-synliga': '/en/about',
  '/about': '/en/about',
  '/bandmedlemmar': '/en/band-members',
  '/om-synliga/bandmedlemmar': '/en/band-members',
  '/morkershow': '/en/shows-in-the-dark',
  '/diskografi': '/en/discography',
  '/discography': '/en/discography',
  '/en': '/',
  '/en/about': '/om-synliga',
  '/en/band-members': '/bandmedlemmar',
  '/en/shows-in-the-dark': '/morkershow',
  '/en/discography': '/diskografi',
}

function App() {
  const { pathname } = useLocation()
  const isEnglish = pathname === '/en' || pathname.startsWith('/en/')
  const language = isEnglish ? 'en' : 'sv'
  const switchPath = languagePairs[pathname] ?? (isEnglish ? '/' : '/en')

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-white/10 bg-zinc-950/90">
        <nav className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-6 lg:flex-row lg:items-center lg:justify-between">
          <NavLink
            to={isEnglish ? '/en' : '/'}
            className="text-2xl font-semibold tracking-wide"
          >
            Synliga
          </NavLink>

          <div className="flex flex-wrap gap-2">
            {navigation[language].map((item) => (
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
            <NavLink
              to={switchPath}
              className="rounded-md border border-emerald-300/40 px-3 py-2 text-sm font-medium text-emerald-200 transition hover:border-emerald-300 hover:bg-emerald-300 hover:text-zinc-950"
            >
              {isEnglish ? 'På svenska' : 'In English'}
            </NavLink>
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
