'use client';

import { useState } from 'react';

const plans = [
  {
    name: 'Pro',
    monthly: 29,
    yearly: 24,
    details: ['1,000 designs', 'Fast model', 'Realistic interiors'],
    featured: false,
    button: 'Get Pro',
  },
  {
    name: 'Premium',
    monthly: 49,
    yearly: 39,
    details: ['5,000 designs', 'Hyper Realism', 'Edit designs', 'Virtual staging', 'Change lighting'],
    featured: true,
    button: 'Subscribe ->',
  },
  {
    name: 'Ultra',
    monthly: 199,
    yearly: 99,
    details: ['25,000 designs', 'Photorealistic model', 'Dedicated servers'],
    featured: false,
    button: 'Choose Ultra',
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="scroll-mt-28 bg-zinc-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-4xl font-black text-white sm:text-5xl">Pricing for every creator</h2>
          <button
            onClick={() => setIsYearly((prev) => !prev)}
            className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-black/60 px-4 py-2 text-sm text-white"
          >
            <span className={!isYearly ? 'text-white' : 'text-white/55'}>Monthly</span>
            <span className={`relative h-6 w-11 rounded-full ${isYearly ? 'bg-pink-500' : 'bg-zinc-700'}`}>
              <span
                className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition ${isYearly ? 'left-[22px]' : 'left-0.5'}`}
              />
            </span>
            <span className={isYearly ? 'text-white' : 'text-white/55'}>Yearly: get 2+ months free</span>
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-3xl border p-7 ${
                plan.featured
                  ? 'border-pink-400/50 bg-gradient-to-b from-zinc-900 to-black shadow-2xl shadow-pink-500/20'
                  : 'border-white/10 bg-black/60'
              }`}
            >
              <h3 className="mb-3 text-2xl font-bold text-white">{plan.name}</h3>
              <p className="mb-5 text-4xl font-black text-white">
                ${isYearly ? plan.yearly : plan.monthly}
                <span className="text-base font-medium text-white/65">/mo</span>
              </p>
              <ul className="mb-7 space-y-2 text-sm text-white/80">
                {plan.details.map((detail) => (
                  <li key={detail}>• {detail}</li>
                ))}
              </ul>
              <button
                className={`w-full rounded-xl px-4 py-3 text-sm font-semibold ${
                  plan.featured
                    ? 'bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-white'
                    : 'border border-white/20 text-white'
                }`}
              >
                {plan.button}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
