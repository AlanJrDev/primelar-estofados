import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  const handleClick = () => {
    // Push event to dataLayer
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'whatsapp_click',
        button_location: 'floating_button',
        timestamp: new Date().toISOString()
      });
    }
    
    // Open WhatsApp
    window.open(
      'https://wa.me/5561995167436?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Prime%20Lar%20Estofados%20e%20gostaria%20de%20um%20or%C3%A7amento%20!',
      '_blank'
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg whatsapp-pulse hover:scale-110 transition-transform duration-300 cursor-pointer"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white fill-white" />
    </button>
  );
}
