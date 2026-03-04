const interiorImages = [
  'https://images.unsplash.com/photo-1616594039964-3f2b7f6e6b8d?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1617104551722-3b2d5134f30e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1600047509782-20d39509f26d?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1617104551722-3b2d5134f30e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1616593969747-4797dc75033e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1616593969741-4797dc75033d?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=900&q=80',
];

const features = [
  '📸 Take a photo of your current interior and let AI redesign it in seconds',
  '🎨 Choose an interior style from Modern, Minimalist to Contemporary',
  '⚡ Transform your sketches into photorealistic renders',
  '🏠 Use Virtual Staging AI to furnish empty homes',
  '📹 Turn your renders into 3d flythrough videos',
];

const testimonials = [
  '“Darkor.ai is an app that taps generative AI to restyle images of spaces.” — TechCrunch',
  '“The app produced new renderings in seconds and made staging ideas feel effortless.” — The New York Times',
  '“Snap a photo of your living room and get a polished concept in under a minute.” — Fast Company',
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-black text-white">
      <div className="pointer-events-none absolute inset-0 columns-2 gap-2 p-2 md:columns-4 lg:columns-5 lg:gap-4 lg:p-4">
        {interiorImages.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="mb-2 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 lg:mb-4"
          >
            <img
              src={src}
              alt="Interior inspiration"
              className="h-full w-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,114,182,0.15),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(251,146,60,0.15),transparent_40%)]" />

      <section className="relative z-10 mx-auto flex min-h-[80vh] w-full max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid w-full gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium backdrop-blur-sm">
              <span>★★★★★</span>
              <span>Top #1 AI Interior App</span>
            </div>

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              🔥 Fire your interior designer
            </h1>

            <p className="max-w-2xl text-lg text-white/90 sm:text-xl">
              Upload a photo of your interior and transform it completely. Instantly redesign, furnish,
              reimagine any home interior, exterior or garden. Darkor.ai brings the expertise of an
              interior designer right into your pocket!
            </p>

            <ul className="space-y-3 text-base font-medium text-white/95 sm:text-lg">
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="relative flex items-center lg:justify-end">
            <span className="absolute -top-4 right-0 z-10 rotate-2 rounded-full bg-emerald-400 px-4 py-2 text-sm font-bold text-emerald-950 shadow-xl shadow-emerald-500/30 sm:right-6">
              ✨ Get your first redesigns in less than a minute!
            </span>

            <div className="w-full max-w-md rounded-2xl border border-white/10 bg-black/80 p-6 shadow-2xl shadow-black/60 backdrop-blur-md">
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Type your email..."
                  className="w-full rounded-xl border border-white/15 bg-white px-4 py-3 text-base text-black placeholder:text-zinc-500 outline-none"
                />

                <button className="w-full rounded-xl bg-gradient-to-r from-orange-400 via-pink-500 to-fuchsia-500 px-5 py-3 text-base font-bold text-white shadow-lg shadow-pink-500/30 transition hover:brightness-110">
                  Redesign your interior now -&gt;
                </button>

                <div className="flex items-center gap-3 text-sm text-white/60">
                  <span className="h-px flex-1 bg-white/20" />
                  <span>or</span>
                  <span className="h-px flex-1 bg-white/20" />
                </div>

                <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-white px-5 py-3 text-base font-semibold text-zinc-900 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-5 w-5">
                    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303C33.655 32.657 29.217 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
                    <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
                    <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.143 35.091 26.715 36 24 36c-5.196 0-9.625-3.33-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
                    <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.053 12.053 0 01-4.084 5.571h.003l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
                  </svg>
                  Continue with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/10 bg-black/85 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center gap-x-8 gap-y-3 px-4 py-5 text-white/85 sm:px-6 lg:px-8">
          <span className="text-sm uppercase tracking-[0.24em] text-white/50">used by</span>
          <span className="text-2xl font-semibold">NETFLIX</span>
          <span className="text-2xl font-semibold">Berkeley</span>
          <span className="text-2xl font-semibold">accenture</span>
          <span className="text-2xl font-semibold">TechCrunch</span>
          <span className="text-2xl font-semibold">The New York Times</span>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-4 w-full max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((quote) => (
            <article
              key={quote}
              className="rounded-2xl border border-white/10 bg-black/65 p-5 text-base leading-relaxed text-white/90 shadow-xl shadow-black/50 backdrop-blur-md"
            >
              {quote}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
