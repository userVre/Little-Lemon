const featureBlocks = [
  {
    title: 'Transform empty spaces into stunning interiors',
    subtitle: 'Virtual Staging',
    before:
      'https://images.unsplash.com/photo-1616594039964-3f2b7f6e6b8d?auto=format&fit=crop&w=1200&q=80',
    after:
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Walk inside your interior designs in 3D',
    subtitle: 'Immersive visualization',
    before:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
    after:
      'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Transform your sketches and SketchUp into photorealistic renders',
    subtitle: 'AI render engine',
    before:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
    after:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Design gardens and outdoor spaces',
    subtitle: 'Outdoor AI',
    before:
      'https://images.unsplash.com/photo-1560185007-5f0bb1866cab?auto=format&fit=crop&w=1200&q=80',
    after:
      'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Virtual Staging AI: fill empty homes for real estate listings',
    subtitle: 'Real estate suite',
    before:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
    after:
      'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function FeaturesShowcase() {
  return (
    <section className="space-y-20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {featureBlocks.map((item, index) => (
          <article key={item.title} className="mb-20 last:mb-0">
            <div className="mb-8 max-w-3xl">
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-pink-300/90">{item.subtitle}</p>
              <h2 className="text-3xl font-black leading-tight text-white sm:text-5xl">{item.title}</h2>
            </div>

            <div className={`grid gap-6 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <div className="rounded-3xl border border-white/10 bg-zinc-900 p-4">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/60">Before</p>
                <img src={item.before} alt={`${item.title} before`} className="h-[360px] w-full rounded-2xl object-cover" />
              </div>
              <div className="rounded-3xl border border-pink-400/30 bg-gradient-to-br from-zinc-900 to-zinc-800 p-4">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-pink-200">After</p>
                <img src={item.after} alt={`${item.title} after`} className="h-[360px] w-full rounded-2xl object-cover" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
