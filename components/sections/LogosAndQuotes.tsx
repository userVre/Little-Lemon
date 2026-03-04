const quotes = [
  '“The app produced new renderings in seconds and saved us weeks.”',
  '“We staged 60+ listings in one afternoon using Darkor.ai.”',
  '“Finally, an interior design workflow that feels effortless.”',
];

export default function LogosAndQuotes() {
  return (
    <section className="relative z-20 -mt-20 pb-16">
      <div className="mx-auto mb-10 grid w-full max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        {quotes.map((quote) => (
          <article
            key={quote}
            className="rounded-2xl border border-white/10 bg-zinc-900/80 p-5 text-sm text-white/85 shadow-2xl shadow-black/60 backdrop-blur-xl"
          >
            {quote}
          </article>
        ))}
      </div>

      <div className="border-y border-white/10 bg-black/90">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center gap-8 px-4 py-6 text-white/80 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.35em] text-white/50">used by</span>
          <span className="text-2xl font-semibold">NETFLIX</span>
          <span className="text-2xl font-semibold">Berkeley</span>
          <span className="text-2xl font-semibold">TechCrunch</span>
        </div>
      </div>
    </section>
  );
}
