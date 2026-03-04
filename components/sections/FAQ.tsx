'use client';

import { useState } from 'react';

const questions = [
  {
    q: 'How does Darkor.ai work?',
    a: 'Upload a room photo, choose your style, and Darkor.ai generates premium redesigns in seconds using our AI render engine.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit cards, debit cards, and secure online billing through Stripe-powered checkout.',
  },
  {
    q: 'Can I use this for empty rooms?',
    a: 'Yes. Virtual staging is one of our core features and works perfectly for unfurnished rooms and listings.',
  },
  {
    q: 'Do I get a receipt?',
    a: 'Absolutely. Every payment generates an automatic invoice and receipt sent directly to your account email.',
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="bg-black px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-4xl font-black text-white sm:text-5xl">Frequently asked questions</h2>
        <div className="space-y-4">
          {questions.map((item, idx) => {
            const isOpen = active === idx;
            return (
              <article key={item.q} className="rounded-2xl border border-white/10 bg-zinc-900/70 px-5 py-4">
                <button
                  onClick={() => setActive(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="text-lg font-semibold text-white">{item.q}</span>
                  <span className="text-xl text-white/80">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && <p className="pt-4 text-sm leading-relaxed text-white/75">{item.a}</p>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
