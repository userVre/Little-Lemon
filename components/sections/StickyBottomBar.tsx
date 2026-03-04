export default function StickyBottomBar() {
  return (
    <div className="fixed bottom-0 z-50 w-full border-t border-white/10 bg-black/90 p-4 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-3 sm:flex-row">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full rounded-xl border border-white/15 bg-white px-4 py-3 text-black outline-none placeholder:text-zinc-500"
        />
        <button className="rounded-xl bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-pink-500/30">
          Redesign your interior now -&gt;
        </button>
      </div>
    </div>
  );
}
