function Contact() {
  return (
    <section className="max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
        Contact
      </p>
      <h1 className="text-4xl font-bold text-white">Contact</h1>
      <form className="mt-8 grid gap-5">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-zinc-300">Name</span>
          <input
            className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-emerald-300"
            placeholder="Your name"
            type="text"
          />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-medium text-zinc-300">Email</span>
          <input
            className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-emerald-300"
            placeholder="you@example.com"
            type="email"
          />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-medium text-zinc-300">Message</span>
          <textarea
            className="min-h-36 rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-emerald-300"
            placeholder="Write your message"
          />
        </label>
        <button
          className="w-fit rounded-md bg-emerald-400 px-5 py-3 font-semibold text-zinc-950 transition hover:bg-emerald-300"
          type="submit"
        >
          Send message
        </button>
      </form>
    </section>
  )
}

export default Contact
