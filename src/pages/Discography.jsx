const releases = [
  {
    title: 'Synliga i mörker',
    year: '2012',
    type: 'Album',
    description: 'Innehåller alla låtarna från krogshowen med samma namn.',
    image: 'synligaimorker150x150.jpg',
    links: [
      {
        label: 'Lyssna på Spotify',
        href: 'http://open.spotify.com/album/0TzvpbmrJBXdgbKDOvC2Cm',
      },
      {
        label: 'Köp på iTunes',
        href: 'https://itunes.apple.com/us/artist/synliga/id377209464',
      },
    ],
  },
  {
    title: 'Råkk ‘n’ råll',
    year: '2007',
    type: 'Singel',
    description:
      'Du behöver inte vara dum i huvudet för att spela Råkk ‘N’ Råll, men det hjälper!',
    image: 'rakknrollomslag2-150x150.jpg',
    links: [
      {
        label: 'Lyssna på Spotify',
        href: 'http://open.spotify.com/track/3PkUGmecT8syfYq5FWpVWD',
      },
    ],
  },
  {
    title: 'Sinnenas Rum',
    year: '2006',
    type: 'Album',
    description:
      'Innehåller de flesta låtarna ur krogshowen BlindDate, singelspåren All over the world och Slimmat sparpaket samt annat ur Synligas repertoar.',
    image: 'sinne150.jpg',
    links: [
      {
        label: 'Lyssna på Spotify',
        href: 'http://open.spotify.com/album/3qJdynmBSnaxFI7z8AP605',
      },
      {
        label: 'Köp på iTunes',
        href: 'https://itunes.apple.com/us/artist/synliga/id377209464',
      },
    ],
  },
  {
    title: 'Ett slimmat sparpaket',
    year: '2004',
    type: 'Singel',
    description:
      'Med Ett slimmat sparpaket, Kärleken är blind idag och Blindaste bandet i landet.',
    image: "image075-150x150.jpg",
    links: [
      {
        label: 'Lyssna på Spotify',
        href: 'http://open.spotify.com/track/5uhRhyaXFfqhG7kl847Vds',
      },
    ],
  },
  {
    title: 'Synskadades Melodifestival 2004',
    year: '2004',
    type: 'Feature',
    description:
      'Synliga har producerat skivan och kompat artisterna i Synskadades Melodifestival 2004. Många av bandets personer medverkar också som låtskrivare.',
    image: 'image016-150x150.jpg'
  },
  {
    title: 'Energi från kulturkraft',
    year: '2004',
    type: 'Feature',
    description:
      'Samlingsskivan Energi från Kulturkraft, utgiven av SRF, där 19 synskadade artister presenteras och Synliga medverkar med låten Kärleken är blind idag.',
    image: 'image062-150x150.jpg'
  },
  {
    title: 'Konsten att åka färdtjänst',
    year: '2003',
    type: 'Feature',
    description:
      'Utgiven av Unga Synskadade Stockholm & Gotland. Synliga medverkar med låten Ett slimmat sparpaket.',
    image: 'image064-150x150.png'
  },
  {
    title: 'All over the world',
    year: '2000',
    type: 'Singel',
    description:
      'Singel som släpptes i samband med att Synliga var i Japan 2000.',
    image: 'image070-150x150.jpg',
    links: [
      {
        label: 'Lyssna på Spotify',
        href: 'http://open.spotify.com/track/6N2GdFmYh07BrvGycToOBU',
      },
    ],
  },
  {
    title: 'Out of sight',
    year: '1998',
    type: 'Kassett',
    image: 'kallebalik-150x150.jpg',
  },
  {
    title: 'Blindträff',
    year: '1997',
    type: 'Album',
    description: 'Resultatet av Synligas krogshow på Mossebacke och Brukarhuset.',
    image: 'image058-150x150.jpg',
    links: [
      {
        label: 'Lyssna på Spotify',
        href: 'http://open.spotify.com/album/32nhrqVAQ67nnER7qYuV71',
      },
      {
        label: 'Köp på iTunes',
        href: 'https://itunes.apple.com/us/artist/synliga/id377209464',
      },
    ],
  },
  {
    title: 'Jul hos Ljudolf',
    year: '1995',
    type: 'Album',
    description: 'Synligas spår heter Jag tror på tomten blint.',
    image: 'image066-150x150.png',
  },
  {
    title: 'Gå På',
    year: '1991',
    type: 'Album',
    description:
      'I november 1991 var Synliga på Kuba och spelade in singeln Gå på/Lite på Calle? tillsammans med slagverkarna Alejandro Pu Bles, Amando de Jesus Dedu Hernandez, Rogelio Ernesto Gatell Coto och trumpetaren Julian Gil Oropesa.',
    image: 'ga_pa-150x150.jpg',
  },
  {
    title: 'Kallebalik',
    year: '1990',
    type: 'Album',
    image: 'kallebalik-150x150.jpg',
  },
  {
    title: 'Urval',
    year: '1990',
    type: 'Album',
    description:
      'Skivans namn är Urval och på samlings-LP:n medverkar Synliga med Blind.',
    image: 'ingenbild1501.jpg'
  },
  {
    title: 'Festival',
    year: '1986',
    type: 'Album',
    description:
      'Skivans namn är Festival och det är en samlings-LP. Synliga medverkar med Finns där ej människa ändå.',
    image: 'ingenbild1501.jpg'
  },
  {
    title: 'Ljudskap',
    year: '1984',
    type: 'Album',
    description:
      'Skivans namn är Ljudskap och det är en samlings-LP. Synliga medverkar med spåret Blind.',
    image: 'ingenbild1501.jpg'
  },
]

const assetPath = (path) => `${import.meta.env.BASE_URL}assets/${path}`

function Discography() {
  return (
    <section>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
        Hela samlingen
      </p>
      <h1 className="text-4xl font-bold text-white">Discografi</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {releases.map((release) => (
          <article
            key={release.title}
            className="flex min-h-64 rounded-lg border border-white/10 bg-white/[0.04] p-5"
          >
            {release.image ? (
              <img
                src={assetPath(release.image)}
                alt={release.title}
                className="mb-5 rounded-lg w-[150px] h-[150px] object-cover object-center mr-5"
              />
            ) : null}
            <div>
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
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Discography
