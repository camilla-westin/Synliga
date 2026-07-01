const blindDateBand = [
  'Marie Häglerud, sång & klaviatur',
  'Ulrika Norelius, sång & klaviatur',
  'Ulf Nordquist, sång & bas',
  'Sven Westin, sång & slagverk',
  'Christer tull, Gitarr,',
  'Johan Häglerud, gitarr, bas & sång',
  'Joakim Lundberg, klaviatur & sång',
  'Frank Skaret, trummor',
]

const synligaIMorkerBand = [
  'Marie Häglerud, sång & klaviatur',
  'Ulrika Norelius, sång & klaviatur',
  'Ulf Nordquist, sång, bas, munspel & klaviatur',
  'Sven Westin, sång & slagverk',
  'Christer Tull, akustisk gitarr, elektrisk gitarr & sång',
  'Johan Häglerud, akustisk gitarr, elektrisk gitarr, bas, klaviatur & sång',
]

const sections = [
  {
    title: 'Blind Date',
    paragraphs: [
      'Det var någon gång under 2005 som iden med en show i mörker slutligen genomfördes av Synliga. En rad olika tankar och vägval hade skvalpat omkring under en längre period men det var i samarbete med producenten Håkan Sterner som bandet detta år presenterade sin show, ”Blind Date.”',
      'I regi av Mia Adolphson och Lotta Malmhester och skriven av Sven Westin och Ulf Nordquist tog sig Synliga an att guida sina besökare in och igenom det sköna trygga mörkret.',
      'Besökarna, på ”Golden Hits” och på de företag runtom i som i Sverige som köpte föreställningen, fick avnjuta en måltid i totalt mörker och bandets medlemmar agerade bordsvärdar. Även goda råd serverades, eventuellt nervösa besökare lugnades och roliga och stimulerande konversationer uppstod.',
      'När måltiden närmade sig sin fullbordan började själva showen.',
      'Den första delen av föreställningen var i mörker och musik och talade inslag blandades med tonvikten lagd på underhållning och humor men med en allvarlig och underfundig underton om livet som synskadad. Detta budskap gick mycket väl fram och mottogs väl eftersom alla i lokalen just då var helt, om än tillfälligt, blinda.',
      'I showens andra del blev Synliga synliga då ljusen tändes. Tempot gick även upp en extra växel och dans och rörelse koreograferat av Graham Tainton resulterade i en sevärd scenbild som avslutades med ett rafflande steppnummer av bandets fyra sångare.',
      'Den av Ulf Nordquist specialskrivna musiken och texterna av Ulf, Sven Westin och Marika Lindman gjorde Blind date till en mycket stark upplevelse som lockade till både skratt, gråt och eftertanke.',
      'Showen spelades även vid ett flertal tillfällen på engelska och var översatt av Sven Westin.',
      'En cd inehållande musiken från föreställningen och mer släpptes lagom till premiären och fick titeln, ”Sinnenas rum.”',
    ],
    bandIntro: 'Bandet bestod under dessa föreställningar av:',
    band: blindDateBand,
    afterBand: [
      '2011 omarbetades ”Blind Date” och mörkerdelen förlängdes på bekostnad av ljusdelen. Bandet ville behålla magin med mörkret längre än tidigare men samtidigt behålla det fartfyllda slutet med det överraskande steppnumret. Resultatet har blivit mycket väl mottaget och föreställningen finns som både en show med fullt band och som en mindre singbackversion.',
      'En annan förändring sedan 2011 är att det nu är en sångtrio som leder bandet efter Marie Hägleruds tragiska bortgång 2010.',
    ],
  },
  {
    title: 'Svartklubben & Svartkrogen',
    paragraphs: [
      '2006 började Synliga i samarbete med Almåsa kursgård att ge små intima mörkerupplevelser under namnet, ”Svartkrogen.”',
      'Bandets medlemmar serverade en trerätters måltid i totalt mörker och underhöll med musik och prat. Även i detta koncept var det bandets egen specialskrivna musik som gällde och det hela var en mycket stark och varm upplevelse där de andra sinnena fick regera i synens frånvaro.',
      'Antalet bandmedlemmar per gång var beroende på antalet besökare och konstellationen varierade från gång till gång.',
      'Publiktillströmningen har genom åren inte visat någon tendens till att avta men en viss frustration över det inte alltid smärtfria samarbetet med Almåsa gjorde att Marie Häglerud & Ulf Nordquist 2009 startade sin egen mörkerkrog kallad, ”Svartklubben.” I olika lokaler i Stockholm försökte man där vidareutveckla konceptet. Efter Maries bortgång 2010 driver Ulf klubben vidare men arbetar även då och då på ”Svartkrogen.”',
      'Det respons som detta koncept har gett är överväldigande och gör var kväll till en stor upplevelse för både besökare och band. De spontana dialoger som var och varannan kväll uppstår mellan dessa efter showens fullbordan är en källa till stor glädje och inspiration för Synliga.',
    ],
  },
  {
    title: 'Synliga i mörker',
    paragraphs: [
      '2009 hade uppföljaren till ”Blind Date” kallad, ”Synliga i mörker” premiär.',
      'Denna produktion drogs med stora svårigheter redan från början och blev aldrig som bandet visualiserat den. Interna stridigheter i bandet om innehålet, dålig regi och ekonomiska svårigheter gjorde att denna uppföljare aldrig lyfte.',
      'Efter två månader på Göta Källare i Stockholm lades föreställningen ner. Musikaliskt var dock detta det absolut starkaste bandet presterat och skivan med samma namn är en milstolpe i bandets produktion.',
    ],
    bandIntro: 'Bandet bestod under dessa föreställningar av,',
    band: synligaIMorkerBand,
  },
]

function Morkershow() {
  return (
    <section>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
        Mörkershow
      </p>
      <h1 className="text-4xl font-bold text-white sm:text-5xl">
        Mörkershow
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

export default Morkershow
