const members = [
  {
    name: 'Christer Tull',
    role: 'Gitarr, bas, klaviatur & sång',
    image: 'christer1.jpg',
    paragraphs: [
      'En otrolig musikalisk talang med absolut gehör. Försöker ibland att använda sitt magiska musiköra på att lära sig främmande språk, men bara lagom främmande.',
      'Christer är en stor kattälskare och det är som alla vet ett mer nyttigt sätt att ta sig en jamare.',
      'Christer ackompanjerar med flyhänta fingrar på flygel en och annan gospelkör. Det är tveklöst så att av bandets medlemmar så är det Christer som har bäst kontakt med den stora killen på övervåningen.',
    ],
  },
  {
    name: 'Frank Skaret',
    role: 'Trummor',
    image: 'frank.jpg',
    paragraphs: [
      'Är en idog idrottare och håller sig trots sin höga ålder i fin form.',
      'Jobbar som en ivrig bäver på ”Insyn” och tycker att fritid är för blekfisar och arbetsskygga.',
      'Frank tar sig även an pianostämningar och har absolut gehör. Att han valt trummor som sitt huvudinstrument säger en hel del om både idrottare och trumslagare.',
      'Frank är under sitt imposanta yttre en oerhört generös och vänlig själ, för att vara trumslagare.',
    ],
  },
  {
    name: 'Sven Westin',
    role: 'Sång & slagverk',
    image: 'sven.jpg',
    paragraphs: [
      'Var tidigare trumslagare i bandet, något han ivrigt försöker dölja, men ränderna går aldrig ur. Detta kan förklara varför ibland munnen är snabbare än huvudet.',
      'Sven har en stor komisk talang och hans mål i livet verkar vara att få resten av världen att se detta lika klart som han själv.',
      'Sven är en inbiten diskofil och lägger ned var intjänad slant på cd-skivor. Nya påfund som mp 3 och streaming ser han på med samma skepsis som en som bantar ser på en konditoriföreståndare.',
    ],
  },
  {
    name: 'Ulf Nordquist',
    role: 'Sång, bas, munspel, gitarr och klaviatur',
    image: 'ulf.jpg',
    paragraphs: [
      'Ulf är en oerhört driven låtskrivare som på nolltid kan skapa en låt i världsklass.',
      'Att gå på krogen verkar vara ett starkt intresse eftersom han skaffat sig en egen. Den liggr på söder och är utan tvivel stadens mörkaste restaurant.',
      'När kroglivet blir för mycket drar Ulf gärna till Grekland eller Kanarieöarna för att få lite sol istället för mörker och lite värme på sin basker.'
    ],
  },
  {
    name: 'Ulrika Norelius',
    role: 'Sång & klaviatur',
    image: 'ulrika.jpg',
    paragraphs: [
      'Ulrika är en sångfågel från Värmland som numer kan räkna sig som Stockholmare och därför undanber sig skämt om koppar med kaffe.',
      'I likhet med Frank och Johan tar hon gärna på sig löparskorna och det vill nog till att man håller sig i form om man som Ulrika har en chefsposition på jobbet.',
      'Ulrika må se ut som en ängel men låt er icke luras för hon kan en oändlig massa djupt omoraliska visor som hon med stor glädje framför flerstämmigt med vänner.'
    ],
  },
  {
    name: 'Johan Häglerud',
    role: 'Gitarr, bas, klaviatur & sång',
    image: 'johan.jpg',
    paragraphs: [
      'Johan är en lysande musiker, ljudtekniker och liksom Frank i sitt jobb på Insyn väl insatt modern teknik.',
      'Johan är en härlig person men mer än lovligt svår att få tag i ibland då han bara sporadiskt svarar i telefon eller på sms.',
      'Johan liksom några andra i bandet har en sjuklig dragning till gamla svenska dansbandslåtar. Ju värre de är desto mer njuts det!',
      'Under sina resor när och fjärran i jobbet lär Johan ha tid att vaska fram sådana ”pärlor” för spridning till de andra fantasterna.'
    ],
  },
  {
    name: 'Sara Backström',
    role: 'Tvärflöjt, klaviatur och Sång',
    image: 'sara.jpg',
    paragraphs: [
      'Sara ersatte Eva Nilsson uppställningen och var med i något år.',
      'Sara är en flitig musiker och har turnerat med en egen trio och har varit med i otaliga konstellationer där hon spelat allt från jazz till afrikansk musik.',
      'Sara har av och till vikarierat i både Synliga och på mörkerrestauranterna. Sedan 2023 har hon varit fast personal med Johan, Ulrika och Sven på Svartkrogen.',
      '2026 ersatte Sara Ulf på bandets turné i Brasilien och bidrog till stor del till att bandet lät så bra.'
    ],
  },
]

const formerMembersIntro =
  'Är du intresserad av historia har du kommit helt rätt. Här kan du läsa lite om Synligas vilande och före detta medlemmar.'

const formerMembers = [
  {
    name: 'Joakim ”Jocke” Centervik',
    role: 'Klaviatur & sång',
    paragraphs: [
      'Joakim lämnade jordelivet 2026.',
      'Joakim jobbade många år på Funka Nu där han synade tillgängligheten för synskadade på nätet.',
      'Han var en oerhörd begåvning på att härma röster och dialekter. På detta vis gästades Svartkrogen av mången kändis i mörkret . Ett par av hans paradnummer var Peps och DiLeva och den sistnämnda kom ofta, med Joakims benägna bistånd, som bocken från Gävle för att sprida kärlek och glädje.',
      'I Synliga hade vi ofta stor nytta av Joakims minne då han påfallande ofta var den ende som kunde komma ihåg tonarter eller textrader på låtar vi inte spelat på länge.'
    ],
  },
  {
    name: 'Kaj Nordquist',
    role: 'elgitarr (vilande medlem)',
    paragraphs: [
      'Kaj har under de senaste åren haft en hel del att stå i. Men har egentligen aldrig lämnat Synliga. Han är Ulfs storebror. Kaj har suttit i Sveriges Riksdag och ägnar merparten av sin tid åt sin politiska karriär.',
    ],
  },
  {
    name: 'Eva Nilsson',
    role: 'Tvärflöjt och Sång',
    paragraphs: [
      'Eva var med i Synliga redan från början men slutade i bandet redan på tidigt 80-tal.',
      'Hon återkom som gästmusiker på skivan ”sinnenas rum” där Eva spelade fantastiska flöjtar på en skabrös Irländsk låt.',
    ],
  },
  {
    name: 'Jan Boström',
    role: 'trummor',
    paragraphs: [
      'Janne äntrade bandet som trummis 1986 och ersatte Frank. Han var med ca ett år. Jan är pianostämmare och den enda fullt seende fasta medlem som bandet haft. (Den här upplagan av Synliga gjorde två liveradioprogram för P3 – lunchmusik och onsdagsbiten)',
    ],
  },
  {
    name: 'Lotta Enhorn',
    role: 'Sång',
    paragraphs: [
      'Lotta var med som extra inkallad resurs vid inspelandet av och turnerandet på Synligas minimusikal ”Kallebalik” och jobbade så hårt att hon bröt benet.',
      'Snacka om att ta till sig uttrycket ”Break a leg” och hon har sedan dess aldrig vågat uppträda med bandet.',
    ],
  },
  {
    name: 'Anders Hector',
    role: '',
    paragraphs: [
      'Två av våra kära har fått gig i himlen och begett sig dit före oss andra.',
      'som var vår Ljudmixare, Chaffis och mycket mycket mer, som lämnat oss och jordelivet för många år sedan. Nu för tiden kör han säkert runt i sin Cheva med himlens stora blindorkester.',
    ],
  },
  {
    name: 'Marie Häglerud',
    role: '',
    image: 'marie.jpg',
    paragraphs: [
      'Vid hans sida sitter en av våra grundare, sångerskan och klaviaturspelaren:',
      'och tänker ut nya häftiga sångarrangemang åt samma orkester. Gud hjälpe den som inte håller sin stämma! Det lär vara fullt drag bland molnen sedan Marie kommit dit, det är vi helt säkra på.',
    ],
  },
]

const assetPath = (path) => `${import.meta.env.BASE_URL}assets/${path}`

function MemberCard({ member }) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.04] p-5 flex flex-col sm:flex-row sm:items-start sm:gap-5">
      {member.image ? (
        <img
          src={assetPath(member.image)}
          alt={member.name}
          className="mb-5 rounded-lg"
          width="150"
        />
      ) : null}
      <div>
        <h2 className="text-2xl font-semibold text-white">{member.name}</h2>
        {member.role ? (
          <p className="mt-2 text-sm font-medium text-emerald-300">
            {member.role}
          </p>
        ) : null}
        <div className="mt-5 space-y-4 text-sm leading-6 text-zinc-300">
          {member.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  )
}

function BandMembers() {
  return (
    <section>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
        Om Synliga
      </p>
      <h1 className="text-4xl font-bold text-white sm:text-5xl">
        Bandmedlemmar
      </h1>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {members.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </div>

      <section className="mt-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
          Historia
        </p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Forna hjältar
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-300">
          {formerMembersIntro}
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {formerMembers.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </section>
    </section>
  )
}

export default BandMembers
