import { useEffect } from 'react';
import { useLenis } from './hooks/useLenis';
import { Hero } from './sections/Hero';
import { IntroGrid } from './sections/IntroGrid';
import { Services } from './sections/Services';
import { WhyChooseMe } from './sections/WhyChooseMe';
import { FeaturedProjects } from './sections/FeaturedProjects';
import { Testimonials } from './sections/Testimonials';
import { FAQ } from './sections/FAQ';
import { Footer } from './sections/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LeadForm } from './components/LeadForm';
import { siteConfig } from './config';
import { ProntaEntrega } from './sections/ProntaEntrega';
import './App.css';

// Extend Window interface for dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

function App() {
  // Initialize Lenis smooth scroll
  useLenis();

  useEffect(() => {
    if (siteConfig.siteTitle) {
      document.title = siteConfig.siteTitle;
    }
    if (siteConfig.siteDescription) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', siteConfig.siteDescription);
    }
    if (siteConfig.language) {
      document.documentElement.lang = siteConfig.language;
    }
  }, []);

  return (
    <main className="relative w-full overflow-x-hidden bg-[#fbf4e4]">
      {/* Hero Section - Main CTA */}
      <Hero />

      {/* Intro & Masonry Grid - About Section */}
      <IntroGrid />

      {/* Services Section */}
      <Services />

      {/* Why Choose Me & Stats - Benefits Section */}
      <WhyChooseMe />

      {/* Pronta Entrega Section */}
      <ProntaEntrega />

      {/* Featured Projects - Portfolio */}
      <FeaturedProjects />

      {/* Testimonials Carousel */}
      <Testimonials />

      {/* Lead Form Section - Capture Form */}
      <LeadForm />

      {/* FAQ Accordion */}
      <FAQ />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </main>
  );
}

export default App;
