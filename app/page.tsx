import FAQ from '@/components/sections/FAQ';
import FeaturesShowcase from '@/components/sections/FeaturesShowcase';
import Hero from '@/components/sections/Hero';
import LogosAndQuotes from '@/components/sections/LogosAndQuotes';
import Navbar from '@/components/sections/Navbar';
import Pricing from '@/components/sections/Pricing';
import StickyBottomBar from '@/components/sections/StickyBottomBar';
import StyleGallery from '@/components/sections/StyleGallery';
import Testimonials from '@/components/sections/Testimonials';

export default function HomePage() {
  return (
    <main className="overflow-x-hidden bg-black text-white">
      <Navbar />
      <Hero />
      <LogosAndQuotes />
      <FeaturesShowcase />
      <Testimonials />
      <StyleGallery />
      <Pricing />
      <FAQ />
      <div className="h-24" />
      <StickyBottomBar />
    </main>
  );
}
