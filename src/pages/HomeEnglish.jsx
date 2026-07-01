const bookingSections = [
  {
    title: 'Food and music in complete darkness',
    paragraphs: [
      'Synliga currently offers food and music in the dark at “Svartklubben” on Södermannagatan 27 in Stockholm.',
      'Tickets can be booked via ticnet or by phone at +46 70 644 20 21.',
      'Synliga also performs at “Svartkrogen”, located at Almåsa Konferens in Västerhaninge.',
      'Tickets for Svartkrogen can be booked by phone at +46 8 500 404 80.',
      'Gift cards are available for both “Svartklubben” and “Svartkrogen” if you want to give someone a memorable experience.',
      'The concept is also well suited for company events, kickoffs and conferences.',
      'Excellent food and warm, lively music in total darkness make this an unusual experience and a memory that stays with you.',
    ],
  },
  {
    title: 'Synliga in concert',
    paragraphs: [
      'Synliga live is an energetic and engaging experience. The band’s lyrics and sharp humor add depth, and Synliga always works hard to create a strong sense of togetherness with the audience. A Synliga concert rarely leaves anyone untouched.',
    ],
  },
  {
    title: 'Synliga for conferences',
    paragraphs: [
      'Let Synliga add a human dimension to statistics, lectures and discussions. Strong lyrics combined with good music can help participants connect with the subject on a more personal level. If needed, Synliga can also tailor one or more songs to your specific theme.',
      'Synliga can also be booked as a dance band, with a varied cover repertoire for parties and events.',
      'We may be very blind, but we are also very responsive. People say blind musicians are musical, so let us prove that this particular prejudice is true.',
    ],
  },
]

function HomeEnglish() {
  return (
    <section>
      <div className="max-w-4xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
          Book Synliga
        </p>
        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          Book Synliga
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-300">
          Synliga performs everything from quiet acoustic music to lively pop,
          rock and soul. The band can perform spoken parts and music in both
          Swedish and English. Here are a few occasions where Synliga can be a
          great fit.
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
                  'Tickets can be booked via ticnet or by phone at +46 70 644 20 21.' ? (
                    <>
                      Tickets can be booked via{' '}
                      <a
                        className="text-emerald-200 underline-offset-4 hover:underline"
                        href="http://m.ticnet.se/venue/405_BRS"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ticnet
                      </a>{' '}
                      or by phone at +46 70 644 20 21.
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
        <h2 className="text-2xl font-semibold text-white">Contact Synliga</h2>
        <div className="mt-5 grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="font-semibold text-emerald-200">Bookings</h3>
            <p className="mt-3 text-zinc-300">
              Email:{' '}
              <a
                className="text-emerald-200 underline-offset-4 hover:underline"
                href="mailto:boka@synliga.com"
              >
                boka@synliga.com
              </a>
            </p>
            <p className="mt-2 text-zinc-300">
              Phone:{' '}
              <a
                className="text-emerald-200 underline-offset-4 hover:underline"
                href="tel:+4686442022"
              >
                +46 8 644 20 22
              </a>
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-emerald-200">Other enquiries</h3>
            <p className="mt-3 text-zinc-300">
              Email:{' '}
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

export default HomeEnglish
