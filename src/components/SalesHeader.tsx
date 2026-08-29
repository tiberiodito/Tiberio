import React from 'react';
import { Sparkles } from 'lucide-react';
import logoImg from '../assets/images/pack_fiesta_logo_vector_1787315893546.jpg';
import { getCooudCheckoutUrl } from '../data/pricingConfig';

interface SalesHeaderProps {
  language: 'es' | 'pt';
  onExploreDeliverable?: () => void;
  onBuyClick?: () => void;
}

export const SalesHeader: React.FC<SalesHeaderProps> = ({
  language,
  onExploreDeliverable,
  onBuyClick,
}) => {
  const isEs = language === 'es';

  return (
    <header className="sticky top-[36px] sm:top-[38px] z-40 bg-white/95 backdrop-blur-md border-b border-pink-100 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Brand Info (Logo + MEGA PACK DIGITAL + subtítulo clean) */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden shadow-2xs shrink-0 border border-pink-200 bg-white flex items-center justify-center p-0.5">
            <img 
              src={logoImg} 
              alt="Pack Fiesta Lista" 
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="min-w-0">
            <h1 className="font-fredoka font-black text-sm sm:text-base lg:text-lg text-[#ff3385] leading-tight tracking-wide truncate uppercase">
              PACK FIESTA LISTA
            </h1>
            
            {/* Subtítulo clean com especificações */}
            <p className="text-[10px] sm:text-xs font-bold truncate flex items-center gap-1">
              <span className="text-[#ff007f]">{isEs ? '+1.500 Plantillas' : '+1.500 Modelos'}</span>
              <span className="text-slate-300">•</span>
              <span className="text-[#9333ea]">{isEs ? '+10 Bonos' : '+10 Bônus'}</span>
              <span className="text-slate-300">•</span>
              <span className="text-[#0d9488]">{isEs ? '+6 Herramientas' : '+6 Ferramentas'}</span>
            </p>
          </div>
        </div>

        {/* Right CTA: Único botão de conversão direta */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Botão: ACCEDER POR $6.90! (Verde chamativo com link direto e clique) */}
          <a
            href={getCooudCheckoutUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (onBuyClick) {
                onBuyClick();
              }
            }}
            className="px-3.5 sm:px-6 py-1.5 sm:py-2 rounded-full bg-[#00c853] hover:bg-[#00b248] active:scale-95 text-white font-black text-xs sm:text-sm flex items-center gap-1.5 transition-all cursor-pointer shadow-md hover:shadow-lg whitespace-nowrap tracking-wide uppercase font-fredoka"
            title={isEs ? 'Acceder ahora a la oferta' : 'Acessar agora a oferta'}
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white fill-white animate-pulse" />
            <span>
              {isEs ? '¡ACCEDER POR $6.90!' : '¡ACESSAR POR $6.90!'}
            </span>
          </a>
        </div>

      </div>
    </header>
  );
};


