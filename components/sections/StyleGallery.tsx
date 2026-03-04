const styles = [
  { name: 'Modern', image: 'https://images.unsplash.com/photo-1600607687644-c7f34b5063ec?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Luxury', image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Minimalist', image: 'https://images.unsplash.com/photo-1617104551722-3b2d5134f30e?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Cyberpunk', image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Tropical', image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Bohemian', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Rustic', image: 'https://images.unsplash.com/photo-1600566752227-8f3b1f2e5f9a?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Scandinavian', image: 'https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Mid-Century', image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Japandi', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Industrial', image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Coastal', image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80' },
];

export default function StyleGallery() {
  return (
    <section id="gallery" className="scroll-mt-28 bg-black px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-4xl font-black text-white sm:text-5xl">Choose from 55+ interior design styles</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {styles.map((style) => (
            <article key={style.name} className="group relative overflow-hidden rounded-2xl border border-white/10">
              <img src={style.image} alt={style.name} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <p className="absolute bottom-4 left-4 text-lg font-semibold text-white">{style.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
