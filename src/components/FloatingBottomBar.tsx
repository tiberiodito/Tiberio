import React, { useState, useEffect } from 'react';
import { ShoppingBag, Sparkles, Globe } from 'lucide-react';
import { CURRENCY_RATES, PRICING_CONFIG } from '../data/pricingConfig';
import { UrgencyCountdownWidget } from './UrgencyCountdownWidget';

interface FloatingBottomBarProps {
  onBuyClick: () => void;
  selectedCurrency: string;
}

export const FloatingBottomBar: React.FC<FloatingBottomBarProps> = ({
  onBuyClick,
  selectedCurrency,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const currentRate = CURRENCY_RATES[selectedCurrency] || CURRENCY_RATES.USD;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t-2 border-pink-200 py-2.5 sm:py-3 px-3 sm:px-4 shadow-2xl transition-all duration-300 transform translate-y-0">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-2 sm:gap-3">
        
        {/* Left text on Desktop */}
        <div className="hidden sm:flex items-center gap-2.5">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-fredoka text-[11px] text-pink-600 font-extrabold uppercase block">
                OFERTA {PRICING_CONFIG.discountPercentage}% OFF SOLO HOY
              </span>
              <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.2 rounded-full flex items-center gap-0.5">
                <Globe className="w-3 h-3" /> Pago en tu moneda
              </span>
            </div>
            <h4 className="font-fredoka font-extrabold text-slate-900 text-sm leading-tight">
              PACK FIESTA LISTA + 10 REGALOS
            </h4>
          </div>
          <UrgencyCountdownWidget variant="compact" />
        </div>

        {/* Price & CTA Button */}
        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <div className="text-left sm:text-right">
            <span className="line-through text-slate-400 text-xs font-bold block sm:inline mr-1">
              {currentRate.symbol} {currentRate.regular}
            </span>
            <span className="font-fredoka text-lg sm:text-2xl font-extrabold text-[#ff1493] block sm:inline">
              {currentRate.symbol} {currentRate.promo} <span className="text-xs text-slate-600">({selectedCurrency})</span>
            </span>
            <span className="text-[10px] text-emerald-600 font-bold block sm:hidden">
              🌎 Pagamento em {selectedCurrency}
            </span>
          </div>

          <button
            onClick={onBuyClick}
            className="bg-gradient-to-r from-[#ff1493] to-[#ff40a1] hover:from-[#e0007d] hover:to-[#e6328f] text-white font-fredoka font-extrabold text-xs sm:text-base px-4 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-lg shadow-pink-300/80 cursor-pointer flex items-center gap-1.5 border border-white transform hover:scale-105 transition-transform shrink-0"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>COMPRAR EN MI MONEDA</span>
          </button>
        </div>
      </div>
    </div>
  );
};
