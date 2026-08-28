import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

interface WhatsAppFloatingButtonProps {
  phoneNumber?: string;
  language?: 'es' | 'pt';
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({
  phoneNumber = '5581991657711',
  language = 'es',
}) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const cleanNumber = phoneNumber.replace(/\D/g, '');

  const defaultMessage =
    language === 'es'
      ? '¡Hola! Tengo una duda sobre el Pack Fiesta Lista antes de realizar mi compra.'
      : 'Olá! Tenho uma dúvida sobre o Pack Festa Pronta antes de realizar minha compra.';

  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-20 sm:bottom-24 right-3.5 sm:right-6 z-40 flex flex-col items-end pointer-events-auto">
      {/* Balãozinho de ajuda / Tooltip com botão fechar */}
      {showTooltip && (
        <div className="mb-2 bg-white text-slate-800 text-xs font-semibold py-1.5 px-3 rounded-2xl shadow-lg border border-emerald-100 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300 max-w-[210px] sm:max-w-[240px]">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span className="text-[11px] sm:text-xs leading-tight text-slate-700">
            {language === 'es' ? '¿Tienes dudas? ¡Escríbenos!' : 'Tem dúvidas? Fale conosco!'}
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-slate-600 ml-1 p-0.5 rounded-full hover:bg-slate-100 transition cursor-pointer"
            title="Cerrar"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Botão Flutuante Circular do WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.6)] transition-all duration-300 transform hover:scale-105"
        title={language === 'es' ? 'Hablar por WhatsApp' : 'Falar pelo WhatsApp'}
        aria-label="WhatsApp"
      >
        {/* Efeito Onda de Pulso */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        {/* Ícone Oficial WhatsApp em SVG de Alta Fidelidade */}
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 fill-current relative z-10"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.97.54 1.761.815 2.796.815 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm9.969 5.766c0 5.519-4.481 10-10 10-1.748 0-3.385-.45-4.814-1.242l-5.186 1.358 1.383-5.056c-.886-1.488-1.383-3.217-1.383-5.06 0-5.519 4.481-10 10-10s10 4.481 10 10zm-5.021 3.557c-.198-.1-1.172-.578-1.354-.644-.182-.066-.314-.1-.446.1-.132.198-.512.644-.628.777-.116.132-.231.149-.429.05-1.054-.533-1.756-.957-2.454-2.155-.184-.317.184-.294.529-.982.066-.132.033-.248-.017-.347-.05-.1-.446-1.074-.611-1.471-.161-.387-.326-.335-.446-.341-.116-.006-.248-.007-.38-.007-.132 0-.347.05-.529.248-.182.198-.694.678-.694 1.653 0 .975.711 1.917.81 2.05.1.132 1.397 2.133 3.384 2.99.473.204.842.326 1.129.417.475.151.907.13 1.249.079.381-.057 1.172-.479 1.337-.942.165-.463.165-.86.116-.942-.049-.082-.181-.132-.379-.231z" />
        </svg>

        {/* Badge 'Online' */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full z-20" />
      </a>
    </div>
  );
};
