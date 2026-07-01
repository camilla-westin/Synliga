const releases = [
  { title: 'First Light', year: '2026', type: 'Single' },
  { title: 'Northern Signals', year: '2025', type: 'EP' },
  { title: 'Static Bloom', year: '2024', type: 'Album' },
]

function Discography() {
  return (
    <section>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
        Discography
      </p>
      <h1 className="text-4xl font-bold text-white">Discography</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {releases.map((release) => (
          <article
            key={release.title}
            className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
          >
            <p className="text-sm text-zinc-400">{release.type}</p>
            <h2 className="mt-2 text-xl font-semibold text-white">
              {release.title}
            </h2>
            <p className="mt-4 text-zinc-300">{release.year}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Discography
