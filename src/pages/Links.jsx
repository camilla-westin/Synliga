const links = [
  {
    label: 'Ljudolf',
    href: 'http://www.ljudolf.se',
    description:
      'Boka Ulfs ljudverkstad i Stockholm och förverkliga era musikaliska drömmar, oavsett om ni är ett band eller en möhippa.',
  },
  {
    label: 'Svartklubben',
    href: 'http://www.svartklubben.nu/',
    description:
      'Mörkerkrog belägen i Stockholm. Här kan du avnjuta en måltid och underhållning av Synligas medlemmar i en ljusbefriad zon.',
  },
  {
    label: 'Svens blogg',
    href: 'http://svenwestin.blogg.se',
    description:
      'Vardagsbetraktelser, galenskaper, musik och allt vad som berör Synligas sångare Sven kan du läsa här på hans blogg.',
  },
  {
    label: 'Svartkrogen',
    href: 'http://almasakonferens.se/svartkrogen/',
    description:
      'Beläget utanför Stockholm vid Almåsa konferenscenter. Här kan du avnjuta en måltid och bli underhållen av Synligas medlemmar i en ljusbefriad zon.',
  },
  {
    label: 'Mr. Coil',
    href: 'http://www.mrcoil.se',
    description:
      'Svens coverband som är väl lämpat för fester, pubar och alla sorters tillställningar där det behövs ett bra band med bred repertoar och som älskar det de gör.',
  },
  {
    label: 'www.abcpianostämning.se',
    href: 'http://www.abcpianostämning.se',
    description:
      'Trumslagare Franks firma för dig som vill ha ditt piano välstämt och välljudande.',
  },
  {
    label: 'Camilla Westin',
    href: 'http://www.camillawestin.se',
    description:
      'Har designat vår fina hemsida, och kan även göra en åt dig!',
  },
]

function Links() {
  return (
    <section>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
        Länkar
      </p>
      <h1 className="text-4xl font-bold text-white sm:text-5xl">Länkar</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {links.map((link) => (
          <article
            key={link.href}
            className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
          >
            <h2 className="text-2xl font-semibold text-white">
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-emerald-200 underline-offset-4 transition hover:text-emerald-100 hover:underline"
              >
                {link.label}
              </a>
            </h2>
            <p className="mt-4 text-sm leading-6 text-zinc-300">
              {link.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Links
