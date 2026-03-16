import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { heroConfig } from '../config';
import { MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<HTMLDivElement>(null);
  const overlayTextRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  if (!heroConfig.backgroundText && !heroConfig.heroImage && heroConfig.navLinks.length === 0) return null;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Store ScrollTrigger instances for cleanup
      const triggers: ScrollTrigger[] = [];

      // Parallax effect for main text
      const textTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          if (textRef.current) {
            gsap.set(textRef.current, { yPercent: self.progress * 50 });
          }
        },
      });
      triggers.push(textTrigger);

      // Parallax effect for model (slower movement = appears closer)
      const modelTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          if (modelRef.current) {
            gsap.set(modelRef.current, { yPercent: self.progress * 20 });
          }
        },
      });
      triggers.push(modelTrigger);

      // Fade out overlay text faster
      const overlayTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '30% top',
        scrub: 1,
        onUpdate: (self) => {
          if (overlayTextRef.current) {
            gsap.set(overlayTextRef.current, { opacity: 1 - self.progress });
          }
        },
      });
      triggers.push(overlayTrigger);

      // Cleanup function
      return () => {
        triggers.forEach((trigger) => trigger.kill());
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCTAClick = () => {
    // Push event to dataLayer
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'button_click',
        button_name: 'hero_cta',
        button_text: 'Solicitar Orçamento Agora',
        button_location: 'hero_section'
      });
    }
    
    // Scroll to form
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Push event to dataLayer
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'button_click',
        button_name: 'nav_link',
        button_text: e.currentTarget.textContent,
        button_location: 'header_navigation'
      });
    }
    
    // Smooth scroll to section
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFaleConoscoClick = () => {
    // Push event to dataLayer
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'button_click',
        button_name: 'header_fale_conosco',
        button_text: 'Fale Conosco',
        button_location: 'header'
      });
    }
    
    // Open WhatsApp
    window.open(
      'https://wa.me/5561995167436?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Prime%20Lar%20Estofados%20e%20gostaria%20de%20um%20or%C3%A7amento%20!',
      '_blank'
    );
  };

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#504a3a]"
    >
      {/* Layer 1: Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#504a3a] via-[#504a3a] to-[#3d382b] opacity-95" />

      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Layer 2: Big Text */}
      <div
        ref={textRef}
        className="absolute inset-0 flex items-center justify-center z-10 will-change-transform"
      >
        <h1 className="text-[12vw] md:text-[14vw] lg:text-[16vw] font-sans font-extrabold text-[#fbf4e4]/10 tracking-tighter leading-none select-none whitespace-nowrap">
          {heroConfig.backgroundText}
        </h1>
      </div>

      {/* Layer 3: Hero Content */}
      <div
        ref={contentRef}
        className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#fbf4e4] leading-tight">
              Renove o Conforto e a Beleza dos Seus{' '}
              <span className="italic font-serif font-normal text-[#f5ecd8]">Estofados</span>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-[#fbf4e4]/80 max-w-xl mx-auto lg:mx-0">
              Especialistas em restauração. Qualidade premium para o seu lar.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleCTAClick}
                className="inline-flex items-center justify-center gap-2 bg-[#fbf4e4] text-[#504a3a] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#f5ecd8] transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Solicitar Orçamento Agora
              </button>
            </div>
          </div>

          {/* Right: Hero Image */}
          {heroConfig.heroImage && (
            <div ref={modelRef} className="relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <img
                  src={heroConfig.heroImage}
                  alt={heroConfig.heroImageAlt}
                  className="w-full h-auto object-contain rounded-2xl shadow-2xl"
                  loading="eager"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Layer 4: Overlay Text */}
      {heroConfig.overlayText && (
        <div
          ref={overlayTextRef}
          className="absolute bottom-[15%] right-[8%] md:right-[12%] z-30 will-change-transform hidden lg:block"
        >
          <p className="font-serif italic text-xl md:text-2xl lg:text-3xl text-[#fbf4e4]/70 tracking-wide">
            {heroConfig.overlayText}
          </p>
        </div>
      )}

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-40 px-6 md:px-12 py-6 flex items-center justify-between bg-gradient-to-b from-[#504a3a]/80 to-transparent">
        <div className="text-[#fbf4e4] font-sans font-bold text-xl tracking-tight">
          {heroConfig.brandName}
        </div>
        {heroConfig.navLinks.length > 0 && (
          <div className="hidden md:flex items-center gap-8 text-[#fbf4e4]/80 text-sm font-body">
            {heroConfig.navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#fbf4e4] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
        <button 
          onClick={handleFaleConoscoClick}
          className="hidden md:inline-flex items-center gap-2 border border-[#fbf4e4]/30 text-[#fbf4e4] px-4 py-2 rounded-lg text-sm hover:bg-[#fbf4e4]/10 transition-all duration-300"
        >
          <MessageCircle className="w-4 h-4" />
          Fale Conosco
        </button>
        <button className="md:hidden text-[#fbf4e4]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </section>
  );
}
