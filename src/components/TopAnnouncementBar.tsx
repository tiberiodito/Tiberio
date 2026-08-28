import React, { useState, useEffect } from 'react';
import { Sparkles, Clock, Zap } from 'lucide-react';

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
  const [timeLeft, setTimeLeft] = useState({ minutes: 7, seconds: 12 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 7, seconds: 12 }; // loop
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <aside 
      aria-label="Anuncio promocional" 
      className="sticky top-0 z-50 bg-gradient-to-r from-[#ff007f] via-[#e60067] to-[#ff5e00] text-white py-1 sm:py-1.5 px-3 sm:px-6 shadow-sm border-b border-pink-400/30 flex items-center min-h-[36px] sm:min-h-[38px]"
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-2 text-xs sm:text-sm">
        
        {/* Left / Center Message: Oferta Flash */}
        <div className="flex items-center gap-2 min-w-0 font-sans">
          <span className="bg-white/20 hover:bg-white/30 backdrop-blur-xs text-white text-[10px] sm:text-xs font-black uppercase px-2.5 py-0.5 rounded-full flex items-center gap-1 shrink-0 border border-white/30 shadow-2xs">
            <Zap className="w-3 h-3 text-yellow-300 fill-yellow-300" />
            <span>{isEs ? 'OFERTA FLASH 81% OFF' : 'OFERTA FLASH 81% OFF'}</span>
          </span>
          
          <span className="text-[11px] sm:text-xs md:text-sm tracking-tight font-medium text-white/95 truncate">
            {isEs ? (
              <>
                ¡Últimos <span className="text-yellow-300 font-black underline underline-offset-2">17 accesos</span> con 81% de Descuento + 10 Regalos Exclusivos!
              </>
            ) : (
              <>
                Últimas <span className="text-yellow-300 font-black underline underline-offset-2">17 vagas</span> com 81% de Desconto + 10 Presentes Exclusivos!
              </>
            )}
          </span>
        </div>

        {/* Right side: Countdown in warm orange pill */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="bg-[#e65100]/80 sm:bg-[#e65100]/90 backdrop-blur-xs text-yellow-200 border border-amber-300/40 px-2.5 py-0.5 rounded-full flex items-center gap-1.5 text-[11px] sm:text-xs font-bold shadow-2xs">
            <Clock className="w-3.5 h-3.5 text-yellow-300" />
            <span className="text-white/90 hidden xs:inline">{isEs ? 'Termina en:' : 'Termina em:'}</span>
            <span className="font-mono font-black text-yellow-300 tracking-wider">
              {formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}
            </span>
          </div>

          {/* Producer Quick Button (quando desbloqueado) */}
          {isProducerUnlocked && onOpenProducerModal && (
            <button
              onClick={onOpenProducerModal}
              className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/40 hover:bg-black/60 text-white text-[10px] font-black border border-white/30 shadow-xs cursor-pointer transition active:scale-95"
              title="Painel do Produtor"
            >
              <span>👑</span>
            </button>
          )}
        </div>

      </div>
    </aside>
  );
};




