const links = [
  { label: 'Spotify', href: 'https://spotify.com' },
  { label: 'Bandcamp', href: 'https://bandcamp.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
]

function Links() {
  return (
    <section className="max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
        Länkar
      </p>
      <h1 className="text-4xl font-bold text-white">Links</h1>
      <div className="mt-8 divide-y divide-white/10 rounded-lg border border-white/10">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between px-5 py-4 text-zinc-200 transition hover:bg-white/[0.06] hover:text-white"
          >
            <span>{link.label}</span>
            <span aria-hidden="true">-&gt;</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Links
