const releases = [
  {
    title: 'Synliga i mörker',
    year: '2012',
    type: 'Album',
    description:
      'Includes all the songs from the bands stage show with the same name. The title is a game with words and can mean visible in the dark. This album is in Swedish.',
    links: [
      {
        label: 'Listen on Spotify',
        href: 'http://open.spotify.com/album/0TzvpbmrJBXdgbKDOvC2Cm',
      },
      {
        label: 'Buy on iTunes',
        href: 'https://itunes.apple.com/us/artist/synliga/id377209464',
      },
    ],
  },
  {
    title: 'Råkk ‘n’ råll',
    year: '2007',
    type: 'Single',
    description:
      '“There’s no need to be stupid just because you want to play some rock’ n’ roll, but it’s helpful”. A single with the same song in a Swedish and an English version.',
    links: [
      {
        label: 'Listen on Spotify',
        href: 'http://open.spotify.com/track/3PkUGmecT8syfYq5FWpVWD',
      },
    ],
  },
  {
    title: 'Sinnenas rum/Room of Senses',
    year: '2006',
    type: 'Album',
    description:
      'Includes most of the songs from the stage show with the same name. Two of the songs are in English.',
    links: [
      {
        label: 'Listen on Spotify',
        href: 'http://open.spotify.com/album/3qJdynmBSnaxFI7z8AP605',
      },
      {
        label: 'Buy on iTunes',
        href: 'https://itunes.apple.com/us/artist/synliga/id377209464',
      },
    ],
  },
  {
    title: 'Ett slimmat sparpaket/Barking at The Moon',
    year: '2004',
    type: 'Single',
    description:
      'Includes the Songs, ”Ett slimmat sparpaket”, ”Kärleken är blind idag” and ”Blindaste bandet i landet.”',
    links: [
      {
        label: 'Listen on Spotify',
        href: 'http://open.spotify.com/track/5uhRhyaXFfqhG7kl847Vds',
      },
    ],
  },
  {
    title: 'Synskadades Melodifestival 2004',
    year: '2004',
    type: 'Feature',
    description:
      'Various artists. Played and produced by Synliga and some of the members of the band has also written music and lyrics to some of the songs.',
  },
  {
    title: 'Energi från kulturkraft',
    year: '2004',
    type: 'Feature',
    description:
      'Various artists. Synligas song on this album is, “Kärleken är blind idag/Love Can’t See a Thing Today.”',
  },
  {
    title: 'Konsten att åka färdtjänst',
    year: '2003',
    type: 'Feature',
    description:
      'Various artists. The song by Synliga on this album is called, “Ett slimmat sparpaket/Barking at The Moon.”',
  },
  {
    title: 'All over the world',
    year: '2000',
    type: 'Single',
    description:
      'Released as a single to coincide with the groups concerts in Japan 2000.',
    links: [
      {
        label: 'Listen on Spotify',
        href: 'http://open.spotify.com/track/6N2GdFmYh07BrvGycToOBU',
      },
    ],
  },
  {
    title: 'Out of sight',
    year: '1998',
    type: 'Album',
  },
  {
    title: 'Blindträff/Blind Date',
    year: '1997',
    type: 'Album',
    description: 'Material, live and studio, from the bands stage show 1997.',
    links: [
      {
        label: 'Listen on Spotify',
        href: 'http://open.spotify.com/album/32nhrqVAQ67nnER7qYuV71',
      },
      {
        label: 'Buy on iTunes',
        href: 'https://itunes.apple.com/us/artist/synliga/id377209464',
      },
    ],
  },
  {
    title: 'Jul hos Ljudolf/Christmas at Ljudolf',
    year: '1995',
    type: 'Feature',
    description:
      'Various artists.“I Believe Blindly in Father Christmas/Jag tror på tomten blint”, is the song by Synliga on this album recorded at bass player Ulfs studio Ljudolf. Several of the members also appear on other tracks.',
  },
  {
    title: 'Gå på/Go On',
    year: '1991',
    type: 'Album',
    description:
      'Includes 4 tracks, two songs both in Swedish and in English. Recorded in Cuba in November of 1991 by the band and the local musicians Alejandro Pu Bles, Amando de Jesus Dedu Hernandez, Rogelio Ernesto Gatell Coto and Julian Gil Oropesa.',
  },
  {
    title: 'Kallebalik',
    year: '1990',
    type: 'Cassette',
    description: 'A musical by the band released only on cassette.',
  },
  {
    title: 'Urval',
    year: '1990',
    type: 'Album',
    description:
      'Various artists. The song by the band on this one is, “Blind.”',
  },
  {
    title: 'Festival',
    year: '1986',
    type: 'Album',
    description:
      'Various artists. “Finns där ej människa ändå” is the bands contribution to this album.',
  },
  {
    title: 'Ljudskap',
    year: '1984',
    type: 'Album',
    description:
      'Various artists. First thing released by the group and the song on this one is, “Blind.”',
  },
]

function DiscographyEnglish() {
  return (
    <section>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
        Discography
      </p>
      <h1 className="text-4xl font-bold text-white">Discography</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {releases.map((release) => (
          <article
            key={release.title}
            className="flex min-h-64 flex-col rounded-lg border border-white/10 bg-white/[0.04] p-5"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-medium text-emerald-300">
                {release.type}
              </p>
              <p className="text-sm text-zinc-400">{release.year}</p>
            </div>
            <h2 className="mt-2 text-xl font-semibold text-white">
              {release.title}
            </h2>
            {release.description ? (
              <p className="mt-4 flex-1 text-sm leading-6 text-zinc-300">
                {release.description}
              </p>
            ) : (
              <div className="flex-1" />
            )}
            {release.links?.length ? (
              <div className="mt-5 flex flex-wrap gap-2">
                {release.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border border-emerald-300/30 px-3 py-2 text-sm font-medium text-emerald-200 transition hover:border-emerald-300 hover:bg-emerald-300 hover:text-zinc-950"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}

export default DiscographyEnglish
