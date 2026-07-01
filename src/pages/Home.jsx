const bookingSections = [
  {
    title: 'Mat och musik i mörker',
    paragraphs: [
      'Synliga är just nu aktuella med mat och musik i mörkret på ”Svartklubben” på Södermannagatan 27 i Stockholm.',
      'Biljetter bokar du via ticnet eller på telefon 070-644 2021',
      'Och på ”Svartkrogen” som är belägen på Almåsa Konferens, Västerhaninge.',
      'Biljetter dit bokar du på telefon, 08-500 404 80',
      'Till både ”Svartklubben” och ”Svartkrogen” kan du köpa presentkort till dig själv eller till någon du vill ge en stor upplevelse i present.',
      'Äventyret passar utmärkt som företagsevent eller på din kickoff aktivitet eller konferens.',
      'Fantastiskt god mat och härlig musik i det totala och sköna mörkret gör det här till en upplevelse utöver det vanliga och ett minne för livet.',
    ],
  },
  {
    title: 'Synliga Konsert',
    paragraphs: [
      'Synliga live är en fartfylld och engagerande upplevelse utöver det vanliga då bandets texter och bitande humor ger ett starkt mervärde. Bandet jobbar alltid hårt för att uppnå en stark “vi” känsla med sin publik och en Synliga konsert lämnar sällan någon oberörd.',
    ],
  },
  {
    title: 'Synliga till konferensen',
    paragraphs: [
      'Ta hjälp av Synliga med att färga statistik, föreläsningar och diskussioner med den mänskliga aspekten på frågorna. God musik i kombination med starka texter gör att deltagarna lättare kan sätta sig in i de aktuella frågorna med hjärtat. Vid behov kan Synliga även skräddarsy en eller flera låtar till just ert specialämne.',
      'Man kan även anlita Synliga till dans då vi med en mycket varierad cover-repertoar glatt tar oss an att få er att svänga era lurviga i en lustiger dans.',
      'Visst är vi synnerligen blinda men väldigt lyhörda och det har sagts oss att blinda är musikaliska, så låt oss bevisa att just den fördomen är sann.',
    ],
  },
]

function Home() {
  return (
    <section>
      <div className="max-w-4xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
          Boka Synliga
        </p>
        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          Boka Synliga
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-300">
          Synliga spelar allt från lugn akustisk musik till hårdsvängande pop,
          rock och soul. Bandet kan framföra prat och musik på både svenska och
          engelska. Nedan några olika förslag till bra tillfällen att anlita
          Synliga.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {bookingSections.map((section) => (
          <article
            key={section.title}
            className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
          >
            <h2 className="text-xl font-semibold text-white">
              {section.title}
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-6 text-zinc-300">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>
                  {paragraph ===
                  'Biljetter bokar du via ticnet eller på telefon 070-644 2021' ? (
                    <>
                      Biljetter bokar du via{' '}
                      <a
                        className="text-emerald-200 underline-offset-4 hover:underline"
                        href="http://m.ticnet.se/venue/405_BRS"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ticnet
                      </a>{' '}
                      eller på telefon 070-644 2021
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>

      <section className="mt-10 max-w-4xl rounded-lg border border-emerald-300/20 bg-emerald-300/10 p-6">
        <h2 className="text-2xl font-semibold text-white">Kontakta Synliga</h2>
        <div className="mt-5 grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="font-semibold text-emerald-200">
              Bokning av Synliga
            </h3>
            <p className="mt-3 text-zinc-300">
              E-post:{' '}
              <a
                className="text-emerald-200 underline-offset-4 hover:underline"
                href="mailto:boka@synliga.com"
              >
                boka@synliga.com
              </a>
            </p>
            <p className="mt-2 text-zinc-300">
              Telefon:{' '}
              <a
                className="text-emerald-200 underline-offset-4 hover:underline"
                href="tel:+4686442022"
              >
                08 - 644 20 22
              </a>
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-emerald-200">Andra ärenden</h3>
            <p className="mt-3 text-zinc-300">
              E-post:{' '}
              <a
                className="text-emerald-200 underline-offset-4 hover:underline"
                href="mailto:info@synliga.com"
              >
                info@synliga.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Home
