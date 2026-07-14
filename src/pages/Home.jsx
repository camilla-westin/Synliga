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

const archivePosts = [
  {
    date: 'Maj 09 2023',
    title:
      'Synliga is representing Sweden in The International Low-Vision Song Contest 2023',
    href: 'https://www.synliga.com/blog/2023/05/09/synliga-is-representing-sweden-in-the-international-low-vision-song-contest-2023/',
    excerpt:
      'Synliga representerade Sverige i The International Low-Vision Song Contest 2023 med låten “We’re Gonna Have A Party Tonight”.',
  },
  {
    date: 'Dec 13 2013',
    title: 'Synliga-medlem släpper bok.',
    href: 'https://www.synliga.com/blog/2013/12/13/synliga-medlem-slapper-bok/',
    excerpt:
      'Synligas sångare Sven debuterade som författare med boken “Se upp jag hör dig”.',
  },
  {
    date: 'Sep 28 2013',
    title: '30 år!',
    href: 'https://www.synliga.com/blog/2013/09/28/30-ar/',
    excerpt:
      'Synliga fyllde 30 år och mindes första spelningen under namnet Synliga den 28 september 1983.',
  },
  {
    date: 'Jun 26 2012',
    title: 'Synliga @ Kungsträdgården 14 Juni 2012',
    href: 'https://www.synliga.com/blog/2012/06/26/synliga-kungstradgarden-14-juni-2012/',
    excerpt:
      'Ett välrepeterat Synliga spelade på Kungsträdgårdens stora scen under ABF:s 100-årsfirande.',
  },
  {
    date: 'Maj 02 2012',
    title: 'Öppna barskåpet!',
    href: 'https://www.synliga.com/blog/2012/05/02/oppna-barskapet/',
    excerpt:
      'Ett Synminne från ett kombinerat bandmöte och trivselkväll hemma hos Ulf och Marie.',
  },
  {
    date: 'Apr 17 2012',
    title: 'Svårt att repa sig',
    href: 'https://www.synliga.com/blog/2012/04/17/svart-att-repa-sig/',
    excerpt:
      'Om konsten att få ihop repetitioner, matpauser och sju personers kalendrar inför ett gig.',
  },
  {
    date: 'Jan 26 2012',
    title: 'Kidnappad hemsida',
    href: 'https://www.synliga.com/blog/2012/01/26/kidnappad-hemsida/',
    excerpt:
      'Berättelsen om hur synliga.com kom tillbaka efter att domänen och sidan varit övertagna.',
  },
]

function Home() {
  return (
    <section>
      <div className="max-w-4xl">
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

      <section className="mt-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
          Historik
        </p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ur Synligas arkiv
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-300">
          Några utvalda nedslag från den gamla webbplatsen, sparade här för den
          som vill följa trådarna bakåt.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {archivePosts.map((post) => (
            <article
              key={post.href}
              className="flex min-h-56 flex-col rounded-lg border border-white/10 bg-white/[0.04] p-5"
            >
              <p className="text-sm font-medium text-emerald-300">
                {post.date}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">
                {post.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-6 text-zinc-300">
                {post.excerpt}
              </p>
              <a
                className="mt-5 w-fit rounded-md border border-emerald-300/30 px-3 py-2 text-sm font-medium text-emerald-200 transition hover:border-emerald-300 hover:bg-emerald-300 hover:text-zinc-950"
                href={post.href}
                target="_blank"
                rel="noreferrer"
              >
                Läs originalet
              </a>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}

export default Home
