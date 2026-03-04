import Link from 'next/link';

const links = [
  { label: 'Pricing', href: '#pricing' },
  { label: 'Log in', href: '#' },
  { label: 'Billing', href: '#' },
  { label: 'Gallery', href: '#gallery' },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#" className="group flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 text-lg font-black text-white shadow-lg shadow-pink-500/30">
            D
          </span>
          <span className="text-xl font-black tracking-tight text-white transition group-hover:text-white/90">Darkor.ai</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-white/80 transition hover:text-white">
              {link.label}
            </a>
          ))}
          <a
            href="#"
            className="rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:brightness-110"
          >
            Redesign yours -&gt;
          </a>
        </div>
      </nav>
    </header>
  );
}
