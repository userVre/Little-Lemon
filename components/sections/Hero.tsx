const interiorImages = [
  'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1600573472591-ee6981cf35b6?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1600607688066-890987f18a86?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1616594039964-3f2b7f6e6b8d?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=900&q=80',
];

const steps = [
  '📸 Take a photo',
  '🎨 Choose style',
  '✏️ Transform sketches',
  '🏠 Virtual staging',
  '🕶️ 3d flythrough',
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center pt-24">
      <div className="pointer-events-none absolute inset-0 columns-2 gap-2 p-2 md:columns-4 lg:columns-5 lg:gap-4 lg:p-4">
        {interiorImages.map((src, index) => (
          <div key={`${src}-${index}`} className="mb-2 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 lg:mb-4">
            <img src={src} alt="Interior" className="w-full object-cover opacity-65" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.2),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.22),transparent_40%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-14 px-4 pb-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur">
            Top #1 AI Interior App
          </span>
          <h1 className="text-5xl font-black leading-[0.94] tracking-tight text-white sm:text-6xl lg:text-7xl">
            🔥 Fire your interior designer
          </h1>
          <p className="max-w-xl text-lg text-white/85 sm:text-xl">
            Upload photos and instantly redesign any space with AI. Reimagine rooms, gardens, sketches, and staging visuals in less than a minute with premium photorealistic results.
          </p>
          <ul className="space-y-3 text-base font-semibold text-white/90 sm:text-lg">
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </div>

        <div className="relative flex items-center lg:justify-end">
          <span className="absolute -top-4 right-2 z-20 rounded-full bg-emerald-400 px-4 py-2 text-sm font-bold text-emerald-950 shadow-xl shadow-emerald-400/40">
            ✨ Get your first redesigns in less than a minute!
          </span>
          <div className="w-full max-w-md rounded-3xl border border-white/15 bg-zinc-900/80 p-6 shadow-2xl shadow-black/60 backdrop-blur-xl">
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-white/15 bg-white px-4 py-3 text-black outline-none placeholder:text-zinc-500"
              />
              <button className="w-full rounded-xl bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 px-5 py-3 text-base font-bold text-white shadow-lg shadow-pink-500/30 transition hover:brightness-110">
                Redesign your interior now -&gt;
              </button>
              <button className="w-full rounded-xl border border-white/20 bg-white/95 px-5 py-3 text-base font-semibold text-zinc-900 transition hover:bg-white">
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
