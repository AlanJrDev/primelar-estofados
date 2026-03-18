import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prontaEntregaConfig, siteConfig } from '../config';
import { ShoppingCart, Check, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function ProntaEntrega() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  if (!prontaEntregaConfig.titleRegular && prontaEntregaConfig.produtos.length === 0) return null;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Cards animation
      const cards = cardsRef.current?.querySelectorAll('.produto-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleProdutoClick = (produtoNome: string) => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'button_click',
        button_name: 'produto_interesse',
        produto_nome: produtoNome,
      });
    }
  };

  const handleVerTodosClick = () => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'button_click',
        button_name: 'ver_todos_produtos',
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="pronta-entrega"
      className="relative w-full py-24 md:py-32"
      style={{ backgroundColor: 'var(--creme)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span 
            className="inline-block text-xs font-sans font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: 'var(--marrom)', opacity: 0.7 }}
          >
            {prontaEntregaConfig.subtitle}
          </span>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span style={{ color: 'var(--marrom)' }}>{prontaEntregaConfig.titleRegular}</span>{' '}
            <span className="font-serif italic" style={{ color: 'var(--marrom)' }}>
              {prontaEntregaConfig.titleItalic}
            </span>
          </h2>
          <p 
            className="max-w-2xl mx-auto text-base md:text-lg font-body"
            style={{ color: 'var(--marrom)', opacity: 0.8 }}
          >
            {prontaEntregaConfig.description}
          </p>
        </div>

        {/* Products Grid */}
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {prontaEntregaConfig.produtos.map((produto) => (
            <div
              key={produto.id}
              className="produto-card group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
              style={{ 
                backgroundColor: 'var(--creme-light)',
                boxShadow: '0 4px 20px rgba(80, 74, 58, 0.08)'
              }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Badge */}
                <div 
                  className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-sans font-semibold"
                  style={{ backgroundColor: 'var(--dourado)', color: 'var(--marrom)' }}
                >
                  {produto.categoria}
                </div>
                {/* Discount Badge */}
                {produto.precoOriginal && (
                  <div 
                    className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-sans font-semibold"
                    style={{ backgroundColor: '#e74c3c', color: 'white' }}
                  >
                    PROMO
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 
                  className="font-sans text-lg font-semibold mb-2"
                  style={{ color: 'var(--marrom)' }}
                >
                  {produto.nome}
                </h3>
                <p 
                  className="text-sm font-body mb-3 line-clamp-2"
                  style={{ color: 'var(--marrom)', opacity: 0.7 }}
                >
                  {produto.descricao}
                </p>
                
                {/* Availability */}
                <div 
                  className="flex items-center gap-1 text-xs font-body mb-4"
                  style={{ color: 'var(--whatsapp)' }}
                >
                  <Check className="w-3 h-3" />
                  {produto.disponibilidade}
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span 
                    className="font-sans text-xl font-bold"
                    style={{ color: 'var(--marrom)' }}
                  >
                    {produto.preco}
                  </span>
                  {produto.precoOriginal && (
                    <span 
                      className="text-sm line-through"
                      style={{ color: 'var(--marrom)', opacity: 0.5 }}
                    >
                      {produto.precoOriginal}
                    </span>
                  )}
                </div>

                {/* CTA Button */}
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                    `Olá! Tenho interesse no ${produto.nome} - ${produto.preco}. Gostaria de mais informações.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleProdutoClick(produto.nome)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-sans font-semibold text-sm transition-all duration-300 hover:scale-[1.02]"
                  style={{ backgroundColor: 'var(--marrom)', color: 'var(--creme)' }}
                >
                  <ShoppingCart className="w-4 h-4" />
                  Tenho Interesse
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href={prontaEntregaConfig.ctaHref}
            onClick={handleVerTodosClick}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-sans font-semibold transition-all duration-300 hover:scale-105"
            style={{ 
              backgroundColor: 'transparent', 
              color: 'var(--marrom)',
              border: '2px solid var(--marrom)'
            }}
          >
            {prontaEntregaConfig.ctaText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
