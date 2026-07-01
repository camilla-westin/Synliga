const blindDateBand = [
  'Marie Häglerud, vocals & keyboard',
  'Ulrika Norelius, vocals & keyboard',
  'Ulf Nordquist, vocals & bass',
  'Sven Westin, vocals & percussion',
  'Christer Tull, guitar',
  'Johan Häglerud, guitar, bass & vocals',
  'Joakim Lundberg, keyboard & vocals',
  'Frank Skaret, drums',
]

const synligaInTheDarkBand = [
  'Marie Häglerud, vocals & keyboard',
  'Ulrika Norelius, vocals & keyboard',
  'Ulf Nordquist, vocals, bass, harmonica & keyboard',
  'Sven Westin, vocals & percussion',
  'Christer Tull, acoustic guitar, electric guitar & vocals',
  'Johan Häglerud, acoustic guitar, electric guitar, bass, keyboard & vocals',
  'Pär Hedtjärn, drums',
]

const sections = [
  {
    title: 'Blind Date',
    paragraphs: [
      'It was in 2005 that Synliga finally realized their ideas about a show in the dark. In cooperation With the producer Håkan Sterner and directed by Mia Adolphson and Lotta Malmhester the show premiered later the same year.',
      'Through humor and entertainment the band took a serious look at the subject of blindness and it was written by Sven Westin and Ulf Nordquist.',
      'When the visitors had all arrived and placed the lights were turned off and the warm embracing dark ruled. The meal could now be started and the members of the band walked among the guests at their tables and helped out and made small talk.',
      'When the meal was near completion the show started, still in the dark.',
      'Music written by Ulf Nordquist and with lyrics by Ulf, Sven Westin and Marika lindkvist made for a strong experience.',
      'For the second part of the show the lights were turned on and the tempo was put up another notch. Dancing and movements not really expected from blind musicians and finally some tap-dancing made the second half of the show full of surprises.',
      'The choreography was handled by the fantastic South African Graham Tainton. He even had to invent new ways of teaching his blind pupils how to do the movements and the tap-dancing. He round ways and a deep and heartfelt relationship formed between Graham and Synliga.',
      'Graham Tainton has previously worked with most Swedish artist of any importance including ABBA.',
      'The full output of the artists and the careful handling of the subject matter brought the audiences to laughter and sometimes moved them to tears.',
      '“Blind date” was played all over Sweden and sometimes even in English to international audiences. This was made possible through Sven Westins translation of the lyrics and the spoken word passages.',
      'An album with the music from the show and more was released to coincide with the premiere and was called, “Sinnenas rum.”',
    ],
    bandIntro: 'The members of the band for the “Blind Date” shows,',
    band: blindDateBand,
    afterBand: [
      'In 2011 the show was reworked to suite a frontline of three after the tragic death of Marie Häglerud in 2010.',
      'The part of the show in the dark has been extended but the exiting finish with the tap-dancing still ends the whole affair in the light and with flying colors.',
      '“Blind Date” is performed as a full band effort or in a sing back version that ends by the four members performing a couple of numbers live.',
    ],
  },
  {
    title: 'Svartkrogen & Svartklubben',
    paragraphs: [
      'Since 2005 the members of”Synliga” has worked with a smaller and more intimate concept of entertainment and a meal in the dark than the two shows above.',
      'Two, three or more members of the band serve a meal, drinks and play the music of the band in the dark at two clubs in the Stockholm area. The size of the constellation depends on how many guests there are.',
      'The singing and playing is performed acoustically and the contact between the artist/waiter is very close. Interesting, nice and very personal talks usually ends these warm friendly nights in the dark.',
      'These happenings are sold out year after year and there are no signs of things slowing down.',
    ],
  },
  {
    title: 'Synliga In the Dark',
    paragraphs: [
      'In 2009 a follow-up to “Blind Date” was launched.',
      'The band had great ideas for the new show but due to differences of opinion within the band, bad direction and the economic state of the world made, “Synliga I mörker”, a short lived affair. It was only played for two months and almost broke the bands economy.',
      'The only really positive thing that came out of the bands efforts was a new album, with the same title as the show that is by far the best album the group had done to date.',
    ],
    bandIntro: 'The members of Synliga for the show was,',
    band: synligaInTheDarkBand,
  },
]

function MorkershowEnglish() {
  return (
    <section>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
        Shows in the dark
      </p>
      <h1 className="text-4xl font-bold text-white sm:text-5xl">
        Shows in the dark
      </h1>
      <div className="mt-8 space-y-8">
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-lg border border-white/10 bg-white/[0.04] p-5 sm:p-6"
          >
            <h2 className="text-2xl font-semibold text-white">
              {section.title}
            </h2>
            <div className="mt-5 space-y-4 text-base leading-7 text-zinc-300">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {section.band ? (
              <div className="mt-6 rounded-lg border border-emerald-300/20 bg-emerald-300/10 p-5">
                <p className="font-semibold text-emerald-200">
                  {section.bandIntro}
                </p>
                <ul className="mt-4 grid gap-2 text-sm text-zinc-300 sm:grid-cols-2">
                  {section.band.map((member) => (
                    <li key={member}>{member}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            {section.afterBand ? (
              <div className="mt-5 space-y-4 text-base leading-7 text-zinc-300">
                {section.afterBand.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}

export default MorkershowEnglish
