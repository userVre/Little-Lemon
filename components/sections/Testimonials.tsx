const reviews = [
  {
    name: 'Isabelle',
    quote: 'Darkor.ai helped me redesign my apartment in one night. The results looked like expensive architect renders.',
  },
  {
    name: 'Patrick',
    quote: 'The virtual staging mode increased engagement on our listings instantly. Buyers finally could visualize the space.',
  },
  {
    name: 'Sophia',
    quote: 'I uploaded rough sketches and got photorealistic concepts ready for clients the same day.',
  },
  {
    name: 'Noah',
    quote: 'The style presets are incredible. We quickly tested minimal, luxury, and modern concepts with no design bottlenecks.',
  },
  {
    name: 'Alicia',
    quote: 'The lighting controls made our renders feel cinematic. It is now part of our core design workflow.',
  },
  {
    name: 'Marco',
    quote: 'Fast, beautiful, and consistent outputs. Darkor.ai is the first AI tool our whole team adopted.',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-zinc-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl">
          Customers can&apos;t stop raving about their AI interior designs
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur">
              <p className="mb-3 text-yellow-300">★★★★★</p>
              <h3 className="mb-3 text-lg font-semibold text-white">{review.name}</h3>
              <p className="text-sm leading-relaxed text-white/75">{review.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
