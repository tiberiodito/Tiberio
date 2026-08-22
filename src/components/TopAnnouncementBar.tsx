import React from 'react';
import { Flame, Sparkles } from 'lucide-react';
import { UrgencyCountdownWidget } from './UrgencyCountdownWidget';

interface TopAnnouncementBarProps {
  language: 'es' | 'pt';
  isProducerUnlocked?: boolean;
  onOpenProducerModal?: () => void;
}

export const TopAnnouncementBar: React.FC<TopAnnouncementBarProps> = ({
  language,
  isProducerUnlocked = false,
  onOpenProducerModal,
}) => {
  const isEs = language === 'es';

  return (
    <aside 
      aria-label="Anuncio promocional" 
      className="sticky top-0 z-50 bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 text-white py-1.5 sm:py-2 px-2.5 sm:px-4 shadow-md border-b border-pink-400/40 h-[38px] sm:h-[42px] flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-2 text-xs sm:text-sm">
        
        {/* Scarcity message */}
        <div className="flex items-center gap-1.5 sm:gap-2 font-fredoka font-bold min-w-0">
          <span className="bg-yellow-300 text-slate-950 text-[10px] sm:text-xs font-black uppercase px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs shrink-0">
            <Flame className="w-3 h-3 text-red-500 fill-red-500" />
            <span>{isEs ? '81% DESCUENTO' : '81% DESCONTO'}</span>
          </span>
          <span className="text-[11px] sm:text-xs md:text-sm tracking-wide font-extrabold truncate">
            {isEs
              ? '🔥 ¡ÚLTIMOS CUPOS CON 10 BONOS GRATIS! 🔥'
              : '🔥 ÚLTIMAS VAGAS COM 10 BÔNUS GRÁTIS! 🔥'}
          </span>
        </div>

        {/* Right side: Countdown & Producer Indicator */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Countdown visible on both mobile and desktop */}
          <div className="scale-90 sm:scale-100 origin-right">
            <UrgencyCountdownWidget variant="compact" />
          </div>

          {/* Producer Quick Button (Only shown when Producer is unlocked) */}
          {isProducerUnlocked && onOpenProducerModal && (
            <button
              onClick={onOpenProducerModal}
              className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-purple-900/90 hover:bg-purple-950 text-white text-[10px] font-black border border-purple-300/50 shadow-xs cursor-pointer transition active:scale-95"
              title="Painel do Produtor"
            >
              <span>👑</span>
              <span className="hidden sm:inline">{isEs ? 'ES' : 'PT'}</span>
            </button>
          )}
        </div>

      </div>
    </aside>
  );
};



