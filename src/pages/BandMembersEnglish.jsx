const members = [
  {
    name: 'Christer Tull',
    role: 'Guitar, Bass, Keyboard & Vocals',
    paragraphs: [
      'Gifted with a magical musical sense and perfect pitch this lover of cats is an enormous asset to the band.',
      'Christer also plays a mean gospel piano with his choir. There is no doubt that he is the one in the band that has the best connection with the big guy upstairs.',
    ],
  },
  {
    name: 'Frank Skaret',
    role: 'Drums',
    paragraphs: [
      'Frank does a lot of sports and is in good shape, for an old geezer. Frank works hard and feels that free time is for weaklings and the lazy.',
      'Just like Christer, Frank has perfect pitch and works extra, like he needs it, with tuning pianos. The fact that he’s chosen the drums as his main instrument says a lot about drummers and sportsmen.',
    ],
  },
  {
    name: 'Sven Westin',
    role: 'Vocals & Percussion',
    paragraphs: [
      'Tries hard to hide the fact that he used to be the drummer of the band, but this is very obvious when his mouth much too often is faster than his brain. Sven feels that he is a talent in humor but the rest of the band laughs at that.',
      'Every dime Sven makes is put into his large record collection and he looks upon new “rubbish” like mp3 and streaming with a total lack of understanding.',
    ],
  },
  {
    name: 'Ulf Nordquist',
    role: 'Vocals, Guitar, Bass, Keyboard & Harmonica',
    paragraphs: [
      'Ulf is the main songwriter of the band and can very quickly write a magnificent tune.',
      'Ulf has his own nightclub where you can eat in the dark and the waiters are probably real ugly.',
      'When he tires of nightclubbing he runs off to Greece or the Canary Islands. He is trying to learn Greek but claims that, “it all sounds like Greek to me!”',
    ],
  },
  {
    name: 'Ulrika Norelius',
    role: 'Vocals, Keyboard',
    paragraphs: [
      'Ulrika used to be a countrygirl but is now deeply rooted in Stockholm.',
      'Ulrika might look like an angel but don’t let that fool you. She knows some of the most immoral lyrics you can ever imagine and after one or two Caipirinha she will sing songs that will make your face turn red.',
    ],
  },
  {
    name: 'Johan Häglerud',
    role: 'Bass, Guitar, Keyboard & Vocals',
    paragraphs: [
      'Johan is a brilliant musician and sound technician.',
      'Johan is as lovely as he is hard to get hold off and is almost impossible to reach by phone or sms.',
      'Like a few other members of Synliga Johan has a very unhealthy love for old horrible Swedish songs. A shrink could be helpful but those with this persuasion claim that they feel fine.',
    ],
  },
]

function BandMembersEnglish() {
  return (
    <section>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
        Synliga in English
      </p>
      <h1 className="text-4xl font-bold text-white sm:text-5xl">Members</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {members.map((member) => (
          <article
            key={member.name}
            className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
          >
            <h2 className="text-2xl font-semibold text-white">
              {member.name}
            </h2>
            <p className="mt-2 text-sm font-medium text-emerald-300">
              {member.role}
            </p>
            <div className="mt-5 space-y-4 text-sm leading-6 text-zinc-300">
              {member.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default BandMembersEnglish
