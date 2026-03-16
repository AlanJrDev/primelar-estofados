import { useState, useEffect } from 'react';
import { Phone, User, ChevronDown, Send } from 'lucide-react';
import { leadFormConfig } from '../config';

interface UTMData {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
}

export function LeadForm() {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    servico: ''
  });
  
  const [utmData, setUtmData] = useState<UTMData>({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load UTM data from localStorage on mount
  useEffect(() => {
    const utms: UTMData = {
      utm_source: localStorage.getItem('utm_source') || '',
      utm_medium: localStorage.getItem('utm_medium') || '',
      utm_campaign: localStorage.getItem('utm_campaign') || '',
      utm_term: localStorage.getItem('utm_term') || '',
      utm_content: localStorage.getItem('utm_content') || ''
    };
    setUtmData(utms);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const formatWhatsApp = (value: string) => {
    // Remove non-numeric characters
    const numeric = value.replace(/\D/g, '');
    
    // Format as (XX) XXXXX-XXXX
    if (numeric.length <= 2) return numeric;
    if (numeric.length <= 7) return `(${numeric.slice(0, 2)}) ${numeric.slice(2)}`;
    return `(${numeric.slice(0, 2)}) ${numeric.slice(2, 7)}-${numeric.slice(7, 11)}`;
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsApp(e.target.value);
    setFormData(prev => ({ ...prev, whatsapp: formatted }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Push generate_lead event to dataLayer
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'generate_lead',
        form_name: 'lead_capture_form',
        form_location: 'landing_page',
        servico_interesse: formData.servico,
        utm_source: utmData.utm_source,
        utm_medium: utmData.utm_medium,
        utm_campaign: utmData.utm_campaign,
        timestamp: new Date().toISOString()
      });
    }

    // Build WhatsApp message with form data
    const whatsappNumber = leadFormConfig.whatsappNumber;
    const message = encodeURIComponent(
      `Olá! Me chamo ${formData.nome} e gostaria de solicitar um orçamento.\n\n` +
      `Serviço de interesse: ${formData.servico}\n` +
      `Meu WhatsApp: ${formData.whatsapp}\n\n` +
      `Aguardo retorno!`
    );

    // Redirect to WhatsApp after a short delay
    setTimeout(() => {
      window.open(
        `https://wa.me/${whatsappNumber}?text=${message}`,
        '_blank'
      );
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <section id="contato" className="py-20 md:py-32 bg-[#f5ecd8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium tracking-wider text-[#504a3a]/70 uppercase">
            {leadFormConfig.subtitle}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-[#504a3a]">
            {leadFormConfig.titleRegular}{' '}
            <span className="italic font-serif font-normal">{leadFormConfig.titleItalic}</span>
          </h2>
          <p className="mt-4 text-lg text-[#504a3a]/80 max-w-2xl mx-auto">
            {leadFormConfig.description}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Nome */}
            <div className="space-y-2">
              <label htmlFor="nome" className="block text-sm font-medium text-[#504a3a]">
                Nome completo
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#504a3a]/50" />
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  placeholder="Digite seu nome"
                  required
                  className="form-input pl-12"
                />
              </div>
            </div>

            {/* WhatsApp */}
            <div className="space-y-2">
              <label htmlFor="whatsapp" className="block text-sm font-medium text-[#504a3a]">
                WhatsApp
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#504a3a]/50" />
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleWhatsAppChange}
                  placeholder="(61) 99999-9999"
                  required
                  maxLength={16}
                  className="form-input pl-12"
                />
              </div>
            </div>

            {/* Serviço */}
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="servico" className="block text-sm font-medium text-[#504a3a]">
                O que você precisa?
              </label>
              <div className="relative">
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#504a3a]/50 pointer-events-none" />
                <select
                  id="servico"
                  name="servico"
                  value={formData.servico}
                  onChange={handleInputChange}
                  required
                  className="form-input appearance-none cursor-pointer"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="Reforma de Estofados">Reforma de Estofados</option>
                  <option value="Restauração">Restauração</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>
            </div>

            {/* Hidden UTM fields */}
            <input type="hidden" name="utm_source" value={utmData.utm_source} />
            <input type="hidden" name="utm_medium" value={utmData.utm_medium} />
            <input type="hidden" name="utm_campaign" value={utmData.utm_campaign} />
            <input type="hidden" name="utm_term" value={utmData.utm_term} />
            <input type="hidden" name="utm_content" value={utmData.utm_content} />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-8 btn-primary flex items-center justify-center gap-3 text-lg py-4"
            onClick={() => {
              if (window.dataLayer) {
                window.dataLayer.push({
                  event: 'button_click',
                  button_name: 'submit_lead_form',
                  button_text: leadFormConfig.buttonText
                });
              }
            }}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Enviando...
              </span>
            ) : (
              <>
                <Send className="w-5 h-5" />
                {leadFormConfig.buttonText}
              </>
            )}
          </button>

          {/* Privacy Note */}
          <p className="mt-4 text-center text-sm text-[#504a3a]/60">
            Seus dados estão seguros. Não compartilhamos suas informações com terceiros.
          </p>
        </form>
      </div>
    </section>
  );
}
