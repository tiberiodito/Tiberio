import React, { useState, useEffect } from 'react';
import { ShoppingBag, Globe, Clock } from 'lucide-react';
import { CURRENCY_RATES, getCooudCheckoutUrl } from '../data/pricingConfig';

interface FloatingBottomBarProps {
  onBuyClick: () => void;
  selectedCurrency: string;
}

export const FloatingBottomBar: React.FC<FloatingBottomBarProps> = ({
  onBuyClick,
  selectedCurrency,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 41 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || window.scrollY || 0;
      if (scrollY > 70) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    // Check initial position on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 14, seconds: 41 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  const currentRate = CURRENCY_RATES[selectedCurrency] || CURRENCY_RATES.USD;
  const checkoutUrl = getCooudCheckoutUrl();
  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="fixed bottom-0 left-0 right-0 w-full z-50 bg-white/98 backdrop-blur-md border-t border-pink-100 py-2 sm:py-2.5 px-3 sm:px-6 shadow-[0_-6px_25px_rgba(0,0,0,0.12)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-3 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        
        {/* 1. Left: Oferta + Pago en tu moneda + PACK FIESTA LISTA */}
        <div className="hidden lg:flex flex-col text-left shrink-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-[#ff007f] font-black text-xs tracking-tight uppercase">
              OFERTA 81% OFF SOLO HOY
            </span>
            <span className="bg-[#dcfce7] text-[#166534] text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 border border-[#bbf7d0]">
              <Globe className="w-3 h-3 text-[#16a34a]" />
              <span>Pago en tu moneda</span>
            </span>
          </div>
          <h4 className="font-fredoka font-black text-slate-900 text-sm tracking-wide">
            PACK FIESTA LISTA + 10 REGALOS
          </h4>
        </div>

        {/* 2. Middle: OFERTA TERMINA EN: 14:41 (Pill suave) */}
        <div className="hidden md:flex items-center bg-[#fff1f5] border border-[#ffe4e6] rounded-full px-3.5 py-1 gap-2 shadow-2xs">
          <Clock className="w-3.5 h-3.5 text-[#ff007f]" />
          <span className="text-[#e11d48] font-black text-[11px] uppercase tracking-wider">
            OFERTA TERMINA EN:
          </span>
          <span className="bg-white text-[#be123c] font-mono font-black text-xs px-2 py-0.5 rounded shadow-2xs border border-pink-100">
            {formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}
          </span>
        </div>

        {/* 3. Right: Preço + Botão COMPRAR EN MI MONEDA */}
        <div className="flex items-center justify-between w-full md:w-auto gap-3 sm:gap-4 ml-auto">
          
          {/* Price breakdown */}
          <div className="flex flex-col items-end shrink-0">
            <div className="flex items-baseline gap-1 sm:gap-1.5">
              <span className="text-slate-400 line-through text-xs font-semibold">
                {currentRate.symbol} {currentRate.regular}
              </span>
              <span className="font-fredoka font-black text-xl sm:text-2xl text-[#ff007f] leading-none">
                {currentRate.symbol} {currentRate.promo}
              </span>
            </div>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-[10px] text-slate-500 font-bold uppercase">
                ({selectedCurrency})
              </span>
              {/* Mobile badge for local currency */}
              <span className="lg:hidden bg-[#dcfce7] text-[#166534] text-[9px] font-bold px-1.5 py-0.2 rounded-full flex items-center gap-0.5">
                <Globe className="w-2.5 h-2.5 text-[#16a34a]" />
                <span>Pago local</span>
              </span>
            </div>
          </div>

          {/* Big Pink CTA Button */}
          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (onBuyClick) {
                onBuyClick();
              }
            }}
            className="bg-[#ff007f] hover:bg-[#e60067] active:bg-[#cc0066] text-white font-fredoka font-black text-xs sm:text-sm px-4 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-md shadow-pink-500/25 hover:shadow-lg hover:shadow-pink-500/35 transition-all flex items-center justify-center gap-2 uppercase tracking-wide whitespace-nowrap cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
            title="Comprar en mi moneda"
          >
            <ShoppingBag className="w-4 h-4 text-white fill-white shrink-0" />
            <span>COMPRAR EN MI MONEDA</span>
          </a>

        </div>

      </div>
    </div>
  );
};

