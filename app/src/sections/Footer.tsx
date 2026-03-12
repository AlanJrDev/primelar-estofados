import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram, Facebook, Mail, type LucideIcon } from 'lucide-react';
import { footerConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, LucideIcon> = {
  Instagram,
  Facebook,
  Mail,
};

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  if (!footerConfig.logoText && !footerConfig.email && footerConfig.navLinks.length === 0) return null;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logo — scale up + fade
      ScrollTrigger.create({
        trigger: logoRef.current,
        start: 'top 88%',
        onEnter: () => {
          gsap.fromTo(
            logoRef.current,
            { y: 80, opacity: 0, scale: 0.9 },
            { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' }
          );
        },
        once: true,
      });

      // Content — fade up
      ScrollTrigger.create({
        trigger: contentRef.current,
        start: 'top 88%',
        onEnter: () => {
          gsap.fromTo(
            contentRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
          );
        },
        once: true,
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      id="contato"
      className="relative w-full bg-[#fbf4e4] pt-24 md:pt-32 pb-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Massive Logo */}
        {footerConfig.logoText && (
          <div ref={logoRef} className="opacity-0 mb-16 md:mb-24">
            <svg
              viewBox="0 0 600 100"
              className="w-full h-auto max-h-[25vh]"
              preserveAspectRatio="xMidYMid meet"
            >
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                className="fill-[#504a3a] font-sans font-extrabold"
                style={{
                  fontSize: '90px',
                  letterSpacing: '-0.03em',
                }}
              >
                {footerConfig.logoText}
              </text>
            </svg>
          </div>
        )}

        {/* Footer Content */}
        <div ref={contentRef} className="opacity-0">
          <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-16">
            {/* Contact Info */}
            <div>
              {footerConfig.contactLabel && (
                <p className="text-[#504a3a]/50 text-sm font-body uppercase tracking-widest mb-4">
                  {footerConfig.contactLabel}
                </p>
              )}
              {footerConfig.email && (
                <a
                  href={`mailto:${footerConfig.email}`}
                  className="text-xl md:text-2xl font-sans font-semibold text-[#504a3a] hover:text-[#504a3a]/70 transition-colors duration-300"
                >
                  {footerConfig.email}
                </a>
              )}
              {footerConfig.locationText && (
                <p className="mt-4 text-[#504a3a]/60 font-body text-sm whitespace-pre-line">
                  {footerConfig.locationText}
                </p>
              )}
              {/* CNPJ */}
              <p className="mt-4 text-[#504a3a]/40 font-body text-xs">
                CNPJ: 12.345.678/0001-90
              </p>
            </div>

            {/* Navigation */}
            {footerConfig.navLinks.length > 0 && (
              <div>
                {footerConfig.navigationLabel && (
                  <p className="text-[#504a3a]/50 text-sm font-body uppercase tracking-widest mb-4">
                    {footerConfig.navigationLabel}
                  </p>
                )}
                <nav className="space-y-3">
                  {footerConfig.navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        const target = document.querySelector(link.href);
                        if (target) {
                          target.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="block text-[#504a3a]/80 hover:text-[#504a3a] font-body transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Social Links */}
            <div>
              {footerConfig.socialLabel && (
                <p className="text-[#504a3a]/50 text-sm font-body uppercase tracking-widest mb-4">
                  {footerConfig.socialLabel}
                </p>
              )}
              {footerConfig.socialLinks.length > 0 && (
                <div className="flex items-center gap-4">
                  {footerConfig.socialLinks.map((social) => {
                    const Icon = iconMap[social.iconName] || Mail;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-[#f5ecd8] flex items-center justify-center text-[#504a3a]/70 hover:bg-[#504a3a] hover:text-[#fbf4e4] transition-all duration-300"
                      >
                        <Icon className="w-5 h-5" strokeWidth={1.5} />
                      </a>
                    );
                  })}
                </div>
              )}
              {footerConfig.tagline && (
                <p className="mt-6 text-[#504a3a]/40 font-body text-sm whitespace-pre-line">
                  {footerConfig.tagline}
                </p>
              )}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-[#504a3a]/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#504a3a]/40 font-body text-sm">
              {footerConfig.copyright || `© ${new Date().getFullYear()} All rights reserved.`}
            </p>
            {footerConfig.bottomLinks.length > 0 && (
              <div className="flex items-center gap-6 text-[#504a3a]/40 font-body text-sm">
                {footerConfig.bottomLinks.map((link) => (
                  <a key={link.label} href={link.href} className="hover:text-[#504a3a] transition-colors duration-300">
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
          
          {/* LGPD Notice */}
          <div className="mt-6 pt-4 border-t border-[#504a3a]/5">
            <p className="text-[#504a3a]/30 font-body text-xs text-center">
              Este site utiliza cookies e tecnologias similares para melhorar sua experiência. 
              Ao continuar navegando, você concorda com nossa{' '}
              <a href="#privacidade" className="underline hover:text-[#504a3a]/50">
                Política de Privacidade
              </a>.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f5ecd8] to-transparent pointer-events-none" />
    </footer>
  );
}
