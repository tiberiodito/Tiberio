import React from 'react';
import { Eye, Sparkles } from 'lucide-react';

interface StickyDeliverableBarProps {
  language: 'es' | 'pt';
  onExploreDeliverable: () => void;
}

export const StickyDeliverableBar: React.FC<StickyDeliverableBarProps> = ({
  language,
  onExploreDeliverable,
}) => {
  const isEs = language === 'es';

  return (
    <div className="sticky top-[38px] sm:top-[42px] z-40 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 text-white py-1.5 sm:py-2 px-3 sm:px-6 shadow-md border-b border-pink-300/40">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Left Side Highlight Text */}
        <div className="hidden sm:flex items-center gap-2 font-fredoka font-bold text-xs sm:text-sm text-yellow-200">
          <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
          <span>
            {isEs 
              ? '✨ ¡Mira todo el material listo para usar antes de comprar!'
              : '✨ Veja todo o material pronto para usar antes de comprar!'}
          </span>
        </div>

        {/* Action Button: Full Width on Mobile, Sleek on Desktop */}
        <button
          type="button"
          onClick={onExploreDeliverable}
          className="w-full sm:w-auto px-4 sm:px-6 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl bg-white hover:bg-yellow-300 text-[#d81b60] hover:text-slate-950 font-fredoka font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg active:scale-95 border-2 border-white/90"
          title={isEs ? 'Ver entregable y contenidos por dentro' : 'Ver entregável e conteúdos por dentro'}
        >
          <Eye className="w-4 h-4 text-[#d81b60] group-hover:scale-110 transition-transform animate-bounce" />
          <span className="tracking-wide">
            {isEs ? '👁️ VER ENTREGABLE EN VIVO' : '👁️ VER ENTREGÁVEL AO VIVO'}
          </span>
        </button>

      </div>
    </div>
  );
};
