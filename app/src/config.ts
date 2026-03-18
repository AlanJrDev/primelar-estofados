// Site Configuration - Prime Lar Estofados
// Landing Page de Alta Conversão para Reforma e Fabricação de Estofados

export interface SiteConfig {
  language: string;
  siteTitle: string;
  siteDescription: string;
}

export const siteConfig: SiteConfig = {
  language: "pt-BR",
  siteTitle: "Prime Lar Estofados - Reforma e Fabricação Premium",
  siteDescription: "Especialistas em reforma, fabricação e restauração de estofados. Qualidade premium e acabamento impecável para o seu lar.",
};

// Hero Section
export interface HeroConfig {
  backgroundText: string;
  heroImage: string;
  heroImageAlt: string;
  overlayText: string;
  brandName: string;
  navLinks: { label: string; href: string }[];
}

export const heroConfig: HeroConfig = {
  backgroundText: "CONFORTO",
  heroImage: "/sofa-hero.png",
  heroImageAlt: "Sofá reformado e elegante",
  overlayText: "Qualidade Prime Lar",
  brandName: "Prime Lar Estofados",
  navLinks: [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Pronta Entrega", href: "#pronta-entrega" },
    { label: "Benefícios", href: "#beneficios" },
    { label: "Contato", href: "#contato" },
  ],
};

// Intro Grid Section - Sobre Nós
export interface PortfolioImage {
  src: string;
  alt: string;
}

export interface IntroGridConfig {
  titleLine1: string;
  titleLine2: string;
  description: string;
  portfolioImages: PortfolioImage[];
  accentText: string;
}

export const introGridConfig: IntroGridConfig = {
  titleLine1: "Transformamos seu",
  titleLine2: "estofado em arte",
  description: "Na Prime Lar Estofados, combinamos tradição artesanal com técnicas modernas para criar e reformar estofados que encantam. Nossa equipe especializada garante acabamento impecável em cada projeto.",
  portfolioImages: [
    { src: "/reforma-1.jpg", alt: "Reforma profissional de sofá" },
    { src: "/fabricacao-1.jpg", alt: "Fabricação de estofado sob medida" },
    { src: "/restauracao-1.jpg", alt: "Restauração de móveis antigos" },
    { src: "/acabamento-1.jpg", alt: "Acabamento premium em estofados" },
    { src: "/projeto-1.jpg", alt: "Sofá fabricado sob medida" },
  ],
  accentText: "Mais de 10 anos de experiência",
};

// Featured Projects Section - Nossos Trabalhos
export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
}

export interface FeaturedProjectsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  viewAllText: string;
  viewAllHref: string;
  viewProjectText: string;
  projects: Project[];
}

export const featuredProjectsConfig: FeaturedProjectsConfig = {
  subtitle: "NOSSOS TRABALHOS",
  titleRegular: "Resultados",
  titleItalic: "Impecáveis",
  viewAllText: "Ver Todos os Serviços",
  viewAllHref: "#servicos",
  viewProjectText: "Solicitar Orçamento",
  projects: [
    {
      id: 1,
      title: "Reforma Completa de Sofá",
      category: "Reforma",
      year: "2024",
      image: "/projeto-1.jpg",
      description: "Reforma total com troca de espuma, molas e revestimento. Seu sofá como novo!",
    },
    {
      id: 2,
      title: "Fabricação Sob Medida",
      category: "Fabricação",
      year: "2024",
      image: "/projeto-2.jpg",
      description: "Criamos o estofado dos seus sonhos com as medidas e tecidos que você escolher.",
    },
    {
      id: 3,
      title: "Restauração de Antiguidade",
      category: "Restauração",
      year: "2024",
      image: "/projeto-3.jpg",
      description: "Recuperamos móveis antigos preservando sua história com conforto moderno.",
    },
    {
      id: 4,
      title: "Troca de Revestimento",
      category: "Reforma",
      year: "2024",
      image: "/projeto-4.jpg",
      description: "Renovação do visual com tecidos premium e costura reforçada.",
    },
  ],
};

// Services Section - Nossos Serviços
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
}

export interface ServicesConfig {
  subtitle: string;
  titleLine1: string;
  titleLine2Italic: string;
  description: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  subtitle: "NOSSOS SERVIÇOS",
  titleLine1: "Soluções completas em",
  titleLine2Italic: "estofados",
  description: "Oferecemos uma gama completa de serviços de reforma e fabricação de estofados. Cada projeto é realizado com materiais de alta qualidade e acabamento artesanal impecável.",
  services: [
    {
      iconName: "Scissors",
      title: "Reforma Completa",
      description: "Troca de espuma, molas, elásticos e revestimento. Renovamos seu estofado do interior ao exterior.",
    },
    {
      iconName: "Hammer",
      title: "Fabricação Sob Medida",
      description: "Criamos estofados exclusivos conforme suas especificações de design, tamanho e conforto.",
    },
    {
      iconName: "Award",
      title: "Acabamento Premium",
      description: "Costura reforçada, acabamento perfeito e atenção aos mínimos detalhes em cada projeto.",
    },
    {
      iconName: "RefreshCw",
      title: "Restauração",
      description: "Recuperação de móveis antigos e vintage, preservando características originais com conforto moderno.",
    },
  ],
};

// Why Choose Me Section - Por Que Nos Escolher
export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface FeatureCard {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}

export interface WhyChooseMeConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  statsLabel: string;
  stats: StatItem[];
  featureCards: FeatureCard[];
  wideImage: string;
  wideImageAlt: string;
  wideTitle: string;
  wideDescription: string;
}

export const whyChooseMeConfig: WhyChooseMeConfig = {
  subtitle: "POR QUE NOS ESCOLHER",
  titleRegular: "Qualidade e",
  titleItalic: "excelência",
  statsLabel: "Nossos Números",
  stats: [
    { value: 5000, suffix: "+", label: "Clientes Atendidos" },
    { value: 10, suffix: "+", label: "Anos de Experiência" },
    { value: 98, suffix: "%", label: "Clientes Satisfeitos" },
    { value: 500, suffix: "+", label: "Projetos Entregues" },
  ],
  featureCards: [
    {
      image: "/qualidade.jpg",
      imageAlt: "Qualidade do serviço",
      title: "Qualidade Garantida",
      description: "Materiais premium e mão de obra especializada para resultados que superam expectativas.",
    },
    {
      image: "/fabricacao.jpg",
      imageAlt: "Fabricação artesanal",
      title: "Fabricação Artesanal",
      description: "Cada peça é feita com dedicação, seguindo padrões rigorosos de qualidade.",
    },
  ],
  wideImage: "/garantia.jpg",
  wideImageAlt: "Garantia de satisfação",
  wideTitle: "Garantia de Satisfação",
  wideDescription: "Confiamos tanto na qualidade do nosso trabalho que oferecemos garantia em todos os serviços. Se não ficar satisfeito, refazemos sem custo adicional.",
};

// Testimonials Section - Depoimentos
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface TestimonialsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  testimonials: Testimonial[];
}

export const testimonialsConfig: TestimonialsConfig = {
  subtitle: "DEPOIMENTOS",
  titleRegular: "O que nossos",
  titleItalic: "clientes dizem",
  testimonials: [
    {
      id: 1,
      name: "Maria Silva",
      role: "Cliente Residencial",
      image: "/cliente-1.jpg",
      quote: "Reformaram meu sofá antigo e ficou melhor do que quando comprei! O acabamento é impecável e o conforto incrível.",
    },
    {
      id: 2,
      name: "João Pereira",
      role: "Proprietário de Restaurante",
      image: "/cliente-2.jpg",
      quote: "Fabricaram todas as cadeiras do meu restaurante sob medida. Qualidade excepcional e entrega no prazo.",
    },
    {
      id: 3,
      name: "Ana Costa",
      role: "Cliente Residencial",
      image: "/cliente-3.jpg",
      quote: "Restauraram a poltrona da minha avó com tanto cuidado. Preservaram a história e deram conforto novo.",
    },
    {
      id: 4,
      name: "Carlos Mendes",
      role: "Arquiteto",
      image: "/cliente-4.jpg",
      quote: "Como arquiteto, indico a Prime Lar para todos os meus clientes. O acabamento é sempre impecável.",
    },
  ],
};

// FAQ Section - Perguntas Frequentes
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  ctaText: string;
  ctaButtonText: string;
  ctaHref: string;
  faqs: FAQItem[];
}

export const faqConfig: FAQConfig = {
  subtitle: "PERGUNTAS FREQUENTES",
  titleRegular: "Tire suas",
  titleItalic: "dúvidas",
  ctaText: "Ainda tem dúvidas?",
  ctaButtonText: "Falar no WhatsApp",
  ctaHref: "https://wa.me/5561995167436?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Prime%20Lar%20Estofados%20e%20gostaria%20de%20um%20or%C3%A7amento%20!",
  faqs: [
    {
      id: "1",
      question: "Quanto tempo leva uma reforma completa?",
      answer: "O prazo médio é de 7 a 15 dias úteis, dependendo da complexidade do projeto e da disponibilidade do tecido escolhido.",
    },
    {
      id: "2",
      question: "Vocês fabricam estofados sob medida?",
      answer: "Sim! Fabricamos sofás, poltronas, cabeceiras e puff conforme suas especificações de tamanho, design e conforto.",
    },
    {
      id: "3",
      question: "Quais tecidos vocês trabalham?",
      answer: "Trabalhamos com linho, couro, veludo, suede, sarja e diversos outros tecidos nacionais e importados de alta qualidade.",
    },
    {
      id: "4",
      "question": "Vocês fazem orçamento em domicílio?",
      "answer": "Sim, atendemos em toda a região do DF e entorno. Agende uma visita para avaliação gratuita no local."
    },
    {
      id: "5",
      question: "Qual a forma de pagamento?",
      answer: "Aceitamos dinheiro, PIX, cartão de crédito e débito. Para serviços acima de R$ 1000, oferecemos parcelamento em até 6x.",
    },
  ],
};

// Footer Section - Rodapé
export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  logoText: string;
  contactLabel: string;
  email: string;
  locationText: string;
  navigationLabel: string;
  navLinks: FooterLink[];
  socialLabel: string;
  socialLinks: SocialLink[];
  tagline: string;
  copyright: string;
  bottomLinks: FooterLink[];
}

export const footerConfig: FooterConfig = {
  logoText: "PRIME LAR",
  contactLabel: "Entre em Contato",
  email: "contato@primelarestofados.com.br",
  locationText: "Brasília - DF\nAtendemos DF e Entorno",
  navigationLabel: "Navegação",
  navLinks: [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Benefícios", href: "#beneficios" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "FAQ", href: "#faq" },
  ],
  socialLabel: "Redes Sociais",
  socialLinks: [
    { iconName: "Instagram", href: "https://instagram.com/primelarestofados", label: "Instagram" },
    { iconName: "Facebook", href: "https://facebook.com/primelarestofados", label: "Facebook" },
    { iconName: "Mail", href: "mailto:contato@primelarestofados.com.br", label: "Email" },
  ],
  tagline: "Transformando ambientes\ncom qualidade e cuidado",
  copyright: "© 2024 Prime Lar Estofados. Todos os direitos reservados.",
  bottomLinks: [
    { label: "Política de Privacidade", href: "#privacidade" },
    { label: "Termos de Uso", href: "#termos" },
  ],
};

// Lead Form Section Configuration
export interface LeadFormConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  description: string;
  buttonText: string;
  whatsappNumber: string;
}

export const leadFormConfig: LeadFormConfig = {
  subtitle: "SOLICITE SEU ORÇAMENTO",
  titleRegular: "Receba uma",
  titleItalic: "proposta especial",
  description: "Preencha o formulário abaixo e receba seu orçamento em minutos. É rápido, fácil e sem compromisso!",
  buttonText: "Solicitar Orçamento Agora",
  whatsappNumber: "5561995167436",
};

// Pronta Entrega Section
export interface ProdutoProntaEntrega {
  id: number;
  nome: string;
  categoria: string;
  imagem: string;
  descricao: string;
  disponibilidade: string;
  preco: string;
  precoOriginal?: string;
}

export interface ProntaEntregaConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  description: string;
  produtos: ProdutoProntaEntrega[];
  ctaText: string;
  ctaHref: string;
}

export const prontaEntregaConfig: ProntaEntregaConfig = {
  subtitle: "PRONTA ENTREGA",
  titleRegular: "Estofados",
  titleItalic: "Disponíveis",
  description: "Peças prontas para entrega imediata. Sofás, poltronas e puffs com qualidade Prime Lar, disponíveis para levar hoje mesmo!",
  produtos: [
    {
      id: 1,
      nome: "Sofá 3 Lugares Linho",
      categoria: "Sofá",
      imagem: "/projeto-1.jpg",
      descricao: "Sofá 3 lugares em linho bege, estrutura em madeira maciça.",
      disponibilidade: "1 unidade disponível",
      preco: "R$ 2.890",
      precoOriginal: "R$ 3.490"
    },
    {
      id: 2,
      nome: "Poltrona Decorativa Veludo",
      categoria: "Poltrona",
      imagem: "/projeto-2.jpg",
      descricao: "Poltrona em veludo verde musgo, pés palito em madeira natural.",
      disponibilidade: "2 unidades disponíveis",
      preco: "R$ 1.290"
    },
    {
      id: 3,
      nome: "Sofá Retrátil 2,40m",
      categoria: "Sofá Retrátil",
      imagem: "/projeto-3.jpg",
      descricao: "Sofá retrátil e reclinável 2,40m em suede cinza.",
      disponibilidade: "1 unidade disponível",
      preco: "R$ 3.490",
      precoOriginal: "R$ 4.190"
    },
    {
      id: 4,
      nome: "Cabeceira Queen Estofada",
      categoria: "Cabeceira",
      imagem: "/projeto-4.jpg",
      descricao: "Cabeceira Queen size em linho off-white com capitonê.",
      disponibilidade: "3 unidades disponíveis",
      preco: "R$ 890"
    }
  ],
  ctaText: "Ver Todos os Produtos",
  ctaHref: "#"
};
