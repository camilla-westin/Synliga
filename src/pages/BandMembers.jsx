const members = [
  {
    name: 'Christer Tull',
    role: 'Gitarr, bas, klaviatur & sång',
    paragraphs: [
      'En otrolig musikalisk talang med absolut gehör. Försöker ibland att använda sitt magiska musiköra på att lära sig främmande språk, men bara lagom främmande.',
      'Christer är en stor kattälskare och det är som alla vet ett mer nyttigt sätt att ta sig en jamare.',
      'Christer ackompanjerar med flyhänta fingrar på flygel en och annan gospelkör. Det är tveklöst så att av bandets medlemmar så är det Christer som har bäst kontakt med den stora killen på övervåningen.',
    ],
  },
  {
    name: 'Frank Skaret',
    role: 'Trummor',
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
    paragraphs: [
      'Var tidigare trumslagare i bandet, något han ivrigt försöker dölja, men ränderna går aldrig ur. Detta kan förklara varför ibland munnen är snabbare än huvudet.',
      'Sven har en stor komisk talang och hans mål i livet verkar vara att få resten av världen att se detta lika klart som han själv.',
      'Sven är en inbiten diskofil och lägger ned var intjänad slant på cd-skivor. Nya påfund som mp 3 och streaming ser han på med samma skepsis som en som bantar ser på en konditoriföreståndare.',
    ],
  },
  {
    name: 'Ulf Nordquist',
    role: 'Sång, bas, munspel, gitarr och klaviatur',
    paragraphs: [
      '”I ljudverkstan Ljudolf kan du förverkliga dina musikaliska drömmar”, lyder den slogan Ulf har på sin inspelningsstudio. Där kan man alltså hyra in sig och sitta och drömma.',
      'Ulf är en fantastiskt driven låtskrivare och kan i princip tota ihop en trudelutt om nästan vad som helst, men ibland borde han kanske låta bli.',
      'Ulf är så förtjust att gå på krogen att han startat sin egen svartklubb där han kan härja fritt. När han däremot fått nog av stadslivets fröjder beger han sig ut i grönsakerna och blir en sävlig lantjunker.',
    ],
  },
  {
    name: 'Ulrika Norelius',
    role: 'Sång & klaviatur',
    paragraphs: [
      'Ulrika är oavsett vad Johan säger med lätthet bandets fagraste uppenbarelse.',
      'Född i Värmland undanber hon sig skämt om koppar med kaffe. Numera en frejdig stockholmstjej har lantlollan börjat vittra bort och hon jobbar på SRF, som tyvärr inte betyder Sweden Rock Festival i det här fallet.',
    ],
  },
  {
    name: 'Johan Häglerud',
    role: 'Gitarr, bas, klaviatur & sång',
    paragraphs: [
      'Bandets absolut yngste medlem, och enligt honom själv den snyggaste.',
      'Johan är en lysande musiker och ljudtekniker men har en olycklig tendens att försvinna till sjöss månader i sträck och att bara sporadiskt svara i telefon.',
      'Johan har liksom skinnplågaren Frank en mycket sjuk dragning till gamla svenska dansbandslåtar. Ju sämre de är desto mer njuter de drabbade av denna åkomma.',
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
      'Jobbar på ”Funka Nu” där han kritiskt synar tillgängligheten på nätet för synskadade, så skärp er!',
      'Joakim är en stor talang vad gäller att härma dialekter och röster. I mörkret låter han därför en och annan kändis bara med på gigen.',
      'Det är också så att Joakim har ett minne som en gammal elefanthane och det är ofta som hans oändliga minnesbank är bandets sista utpost när det gäller någon händelse, tonart eller borttappad textsnutt.',
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
      'Eva var med i det allra första Synliga. Lämnade bandet redan i det tidiga 80-talet. Hon bor i Örebro och arbetar som Ombudsman på SRF Västmanland. (Det finns på samlings-LPn ”Ljudskap”)',
      'Eva återkom som gästmusiker på skivan, ”Sinnenas rum”, där hon lirade fantastiska flöjtar på en skabrös irländsk trudelutt.',
    ],
  },
  {
    name: 'Sara Backström',
    role: 'Tvärflöjt, keyboard och Sång',
    paragraphs: [
      'Sara ersatte Eva i uppställningen och var med något år. Hon har turnerat med egen pianotrio mm. ( Den här upplagan kan man höra på TV-upptagningen av ”Superbebis”)',
      'Sara har varit inhoppare i bandet vid några tillfällen och förekommer ofta vid spelningar på ”Svartkrogen” och ”Svartklubben.”',
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
    paragraphs: [
      'Vid hans sida sitter en av våra grundare, sångerskan och klaviaturspelaren:',
      'och tänker ut nya häftiga sångarrangemang åt samma orkester. Gud hjälpe den som inte håller sin stämma! Det lär vara fullt drag bland molnen sedan Marie kommit dit, det är vi helt säkra på.',
    ],
  },
]

function MemberCard({ member }) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
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
