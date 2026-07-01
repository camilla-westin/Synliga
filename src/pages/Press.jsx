const pressSections = [
  {
    title: 'Dagstidningar:',
    items: [
      {
        text: 'DN på stan, 13 april 2008, Erik Gripenholm',
        href: 'http://www.dn.se/pa-stan/scen/ljust-budskap-i-morkret/',
      },
      { text: 'Jönköpingsposten, Nina Marjavaara, mars 2008' },
      { text: 'Aftonbladet' },
      { text: 'DN, Markus Boldemann' },
      { text: 'Sydsvenskan, Lena Reiner' },
      { text: 'Norra Skåne, Sophie Lossing' },
      { text: 'Kristianstadsbladet, Karin Hallengren' },
      { text: 'Blekinge Läns tidning' },
      { text: 'Tidningen Dagen' },
      { text: 'Säffletidningen' },
      { text: 'Nacka Värmdöposten' },
      { text: 'Svenska Dagbladet' },
      { text: 'Metro' },
      {
        text: 'Mitti Södermalm',
        href: 'http://arkiv.mitti.se:4711/2009/15/sodermalm/MIIS19A20090407ISV1.pdf',
      },
      {
        text: 'Aftonbladet, Miranda Sigander',
        href: 'http://www.aftonbladet.se/nyheter/article10761187.ab?partner=www',
      },
      { text: 'Nerikes allehanda, Kristoffer Moberg' },
    ],
  },
  {
    title: 'Radio:',
    items: [
      { text: 'Radio Stockholm P5 idag, Erik Clarén' },
      { text: 'P4 Radio Stockholm, Björn Jansson' },
      { text: 'P3/P4 Vakna, Marika Rennerfeldt' },
      { text: 'Radio Kristianstad, Bosse Klaar' },
      { text: 'Fredagsfräs, Kjell Eriksson' },
      { text: 'P4 Kulturriket' },
      { text: 'P4 Radio Västmanland, Terje Lund' },
      { text: 'P3 Morgonpasset' },
      { text: 'Rix Morronzoo' },
      { text: 'P4 Radio Västernorrland, Skivsläppet' },
      { text: 'Radio DV, Clas-Erik Zivre' },
      { text: 'P4 Radio Göteborg, Anneli Malmborg' },
      { text: 'P4 Kalas, Mats Ingels' },
      { text: 'P5 Helg, Erik Clarén' },
      { text: 'P4 Radio Stockholm Anna Boman' },
      { text: 'P1 Tendens Christer Söderqvist' },
      { text: 'Radio Suecia, Cissie Burhagen' },
      { text: 'Radio Örebro' },
      { text: 'Svensktoppen, Annika Jankell' },
    ],
  },
  {
    title: 'TV:',
    items: [
      { text: 'Rapport' },
      { text: 'Sverige, Tina Thunander' },
      { text: 'ABC-Nytt, Jonas Engmark' },
      { text: 'Lokal TV, Expressen-TV' },
      { text: 'SVT Väst-Nytt, Jörgen Knutsson' },
      { text: 'Veckotidningar och tidsskrifter:' },
      { text: 'Perspektiv, Sune Olsson' },
      { text: 'Tidningen LEVA, Lotta Hellman' },
      { text: 'Musikern, Anna Bergholtz' },
      { text: 'Ungdomstidningen, Göteborg' },
      { text: 'SAS-tidningen, Tomas Sjöberg' },
      { text: 'Hemmets Journal' },
      { text: 'Allt om Mat' },
      { text: 'I-City' },
    ],
  },
  {
    title: 'Taltidningar:',
    items: [
      { text: 'På tal om Stockholm, Annika Collin' },
      { text: 'Läns och riksnytt, Johan Rosengren' },
      { text: 'Taltidningen Västra Götaland, Sandra Klasson' },
      { text: 'Värmlands taltidning, Mikael Dunder' },
      { text: 'Skånes taltidning' },
    ],
  },
  {
    title: 'Annat:',
    items: [
      {
        text: 'Nöjesguiden',
        href: 'http://nojestorget.se/Synliga_12230.html',
      },
    ],
  },
]

function Press() {
  return (
    <section>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
        Press
      </p>
      <h1 className="text-4xl font-bold text-white sm:text-5xl">Press</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {pressSections.map((section) => (
          <section
            key={section.title}
            className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
          >
            <h2 className="text-xl font-semibold text-white">
              {section.title}
            </h2>
            <ul className="mt-4 space-y-2 text-zinc-300">
              {section.items.map((item) => (
                <li key={item.text}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-emerald-200 underline-offset-4 transition hover:text-emerald-100 hover:underline"
                    >
                      {item.text}
                    </a>
                  ) : (
                    item.text
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  )
}

export default Press
