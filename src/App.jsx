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
    { to: '/en/discography', label: 'Discography' },
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

const assetPath = (path) => `${import.meta.env.BASE_URL}assets/${path}`

function App() {
  const { pathname } = useLocation()
  const isEnglish = pathname === '/en' || pathname.startsWith('/en/')
  const language = isEnglish ? 'en' : 'sv'
  const switchPath = languagePairs[pathname] ?? (isEnglish ? '/' : '/en')

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <header className="border-b border-white/10 bg-zinc-950/90">
        <nav className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-6 lg:flex-row lg:items-center lg:justify-between">
          <NavLink
            to={isEnglish ? '/en' : '/'}
            className="text-2xl font-semibold tracking-wide"
          >
            <img src={assetPath('synliga-logga2.png')} alt="Synliga logotyp" className="h-10 w-auto" />
          </NavLink>

          <div className="flex flex-wrap gap-2">
            {navigation[language].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    'rounded-md px-3 py-2 text-sm font-medium uppercase transition',
                    isActive
                      ? 'bg-emerald-400 text-zinc-950'
                      : 'text-zinc-300 hover:bg-white/10 hover:text-white',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a href="http://open.spotify.com/artist/73dRBow7xrF4OWU5E1qXPu" title="Synliga på Spotify" className="w-8 h-8">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="white" d="M320 72C183 72 72 183 72 320C72 457 183 568 320 568C457 568 568 457 568 320C568 183 457 72 320 72zM420.7 436.9C416.5 436.9 413.9 435.6 410 433.3C347.6 395.7 275 394.1 203.3 408.8C199.4 409.8 194.3 411.4 191.4 411.4C181.7 411.4 175.6 403.7 175.6 395.6C175.6 385.3 181.7 380.4 189.2 378.8C271.1 360.7 354.8 362.3 426.2 405C432.3 408.9 435.9 412.4 435.9 421.5C435.9 430.6 428.8 436.9 420.7 436.9zM447.6 371.3C442.4 371.3 438.9 369 435.3 367.1C372.8 330.1 279.6 315.2 196.7 337.7C191.9 339 189.3 340.3 184.8 340.3C174.1 340.3 165.4 331.6 165.4 320.9C165.4 310.2 170.6 303.1 180.9 300.2C208.7 292.4 237.1 286.6 278.7 286.6C343.6 286.6 406.3 302.7 455.7 332.1C463.8 336.9 467 343.1 467 351.8C466.9 362.6 458.5 371.3 447.6 371.3zM478.6 295.1C473.4 295.1 470.2 293.8 465.7 291.2C394.5 248.7 267.2 238.5 184.8 261.5C181.2 262.5 176.7 264.1 171.9 264.1C158.7 264.1 148.6 253.8 148.6 240.5C148.6 226.9 157 219.2 166 216.6C201.2 206.3 240.6 201.4 283.5 201.4C356.5 201.4 433 216.6 488.9 249.2C496.7 253.7 501.8 259.9 501.8 271.8C501.8 285.4 490.8 295.1 478.6 295.1z"/></svg>
            </a>
            <a href="https://www.facebook.com/pages/Synliga/59279693447?fref=ts" title="Synliga på Facebook" className="w-8 h-8">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="white" d="M576 320c0-141.4-114.6-256-256-256S64 178.6 64 320c0 120 82.7 220.8 194.2 248.5V398.2h-52.8V320h52.8v-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4V236c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2V320h83.6l-14.4 78.2H351v175.9C477.8 558.8 576 450.9 576 320"/></svg>
            </a>
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
        <img src={assetPath('synliga2.jpg')} alt="Gruppbild på Synliga med Sven, Ulrika, Johan och Ulf" className="mb-8" />
        <Outlet />
      </main>
    </div>
  )
}

export default App
