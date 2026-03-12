import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Scissors, Hammer, Award, RefreshCw, type LucideIcon } from 'lucide-react';
import { servicesConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, LucideIcon> = {
  Scissors,
  Hammer,
  Award,
  RefreshCw,
};

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  if (!servicesConfig.titleLine1 && servicesConfig.services.length === 0) return null;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading — slide up
      ScrollTrigger.create({
        trigger: headingRef.current,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(
            headingRef.current,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
          );
        },
        once: true,
      });

      // Service cards — staggered slide up
      const cards = gridRef.current?.querySelectorAll('.service-card');
      if (cards) {
        ScrollTrigger.create({
          trigger: gridRef.current,
          start: 'top 78%',
          onEnter: () => {
            gsap.fromTo(
              cards,
              { y: 60, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.9,
                ease: 'power3.out',
                stagger: 0.12,
              }
            );
          },
          once: true,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="servicos"
      className="relative w-full py-24 md:py-32 bg-[#504a3a]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left Column - Heading */}
          <div ref={headingRef} className="opacity-0">
            {servicesConfig.subtitle && (
              <p className="text-[#fbf4e4]/50 text-sm font-body uppercase tracking-widest mb-4">
                {servicesConfig.subtitle}
              </p>
            )}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-[#fbf4e4] tracking-tight leading-tight">
              {servicesConfig.titleLine1}
              <br />
              <span className="font-serif italic font-normal text-[#fbf4e4]/80">
                {servicesConfig.titleLine2Italic}
              </span>
            </h2>
            {servicesConfig.description && (
              <p className="mt-6 text-[#fbf4e4]/60 font-body text-base md:text-lg max-w-md leading-relaxed">
                {servicesConfig.description}
              </p>
            )}
          </div>

          {/* Right Column - Services Grid */}
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {servicesConfig.services.map((service, index) => {
              const Icon = iconMap[service.iconName] || Scissors;
              return (
                <div
                  key={index}
                  className="service-card group bg-[#3d382b]/50 backdrop-blur-sm p-6 md:p-8 rounded-xl opacity-0 transition-all duration-500 hover:bg-[#3d382b] cursor-pointer border border-[#fbf4e4]/10"
                >
                  <div className="mb-4">
                    <Icon className="w-8 h-8 text-[#fbf4e4]/70 group-hover:text-[#fbf4e4] transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg md:text-xl font-sans font-semibold text-[#fbf4e4] mb-3 group-hover:translate-x-1 transition-transform duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#fbf4e4]/50 font-body leading-relaxed group-hover:text-[#fbf4e4]/70 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Arrow indicator */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-5 h-5 text-[#fbf4e4]/60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#fbf4e4]/10 to-transparent" />
    </section>
  );
}
