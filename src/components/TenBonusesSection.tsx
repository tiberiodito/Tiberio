import React from 'react';
import { BONUSES } from '../data/kitData';
import { Sparkles, Gift, ArrowRight } from 'lucide-react';
import { PRICING_CONFIG, getCooudCheckoutUrl } from '../data/pricingConfig';

interface TenBonusesSectionProps {
  onBuyClick?: () => void;
}

export const TenBonusesSection: React.FC<TenBonusesSectionProps> = ({ onBuyClick }) => {
  return (
    <section className="bg-[#a2ded6] py-14 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Title Header */}
        <div className="text-center mb-10 max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-yellow-300 text-slate-900 text-xs font-extrabold px-4 py-1.5 rounded-full uppercase shadow-md border border-yellow-400">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>VALOR TOTAL DE REGALOS: +${PRICING_CONFIG.bonusValueUsd.toFixed(2)} USD</span>
          </div>

          <h2 className="font-fredoka text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-wide uppercase flex items-center justify-center gap-2">
            <span>🎉</span>
            <span>10 BONOS GRATIS</span>
            <span>🎉</span>
          </h2>

          <p className="text-slate-900 text-base sm:text-lg leading-relaxed font-medium">
            Si accedes al Kit Fiesta Mágica hoy, te llevas también 🎁 <strong>10 bonos exclusivos</strong> que harán que tu experiencia sea aún más poderosa. <strong>Más herramientas, más facilidad, más ingresos para ti.</strong>
          </p>
        </div>

        {/* 10 Bonus Banners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BONUSES.map((bonus) => (
            <div key={bonus.id} className="flex flex-col items-center group">
              <div className="w-full aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-2 border-white/80 bg-white transform transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-2xl relative">
                <img
                  src={bonus.image}
                  alt={bonus.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />

                {/* Individual Price Anchoring Tag on Image Corner */}
                <div className="absolute top-3 right-3 bg-slate-900/85 backdrop-blur-md px-2.5 py-1 rounded-xl shadow-lg border border-white/30 flex items-center gap-1 text-[11px] font-fredoka font-bold text-white">
                  <span className="line-through text-slate-300 opacity-80 text-[10px]">{bonus.originalPrice}</span>
                  <span className="text-yellow-300 font-extrabold ml-0.5">➔ HOY: $0</span>
                </div>
              </div>

              {/* Bonus Tag and Price Anchoring below card */}
              <div className="mt-3.5 flex flex-col items-center gap-1 text-center">
                <div className="flex items-center gap-2 flex-wrap justify-center">
                  <span className="font-fredoka font-extrabold text-white text-xl sm:text-2xl uppercase tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    {bonus.tag}
                  </span>
                  <span className="bg-rose-500 text-white font-fredoka font-extrabold text-xs sm:text-sm px-2.5 py-0.5 rounded-full shadow-md uppercase tracking-wide inline-flex items-center gap-1 border border-white/40">
                    <span className="line-through opacity-75 font-normal">{bonus.originalPrice}</span>
                    <span className="text-yellow-200">GRATIS</span>
                  </span>
                </div>
                <span className="text-teal-950 font-bold text-xs uppercase tracking-tight">
                  {bonus.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 🎯 BOTÃO 3: Stack de Bônus (+10 Bonos Gratis) */}
        <div className="mt-12 text-center max-w-2xl mx-auto space-y-3">
          <a
            href={getCooudCheckoutUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (onBuyClick) {
                e.preventDefault();
                onBuyClick();
              }
            }}
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 rounded-full bg-slate-900 hover:bg-slate-800 text-yellow-300 font-fredoka font-black text-base sm:text-lg uppercase tracking-wider shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.4)] transform hover:scale-[1.03] active:scale-95 transition-all duration-300 cursor-pointer border-2 border-yellow-400"
          >
            <span>🎁 ¡QUIERO EL PACK + LOS 10 BONOS POR $6.90!</span>
            <ArrowRight className="w-5 h-5 text-yellow-300 animate-pulse" />
          </a>
          <p className="text-xs sm:text-sm text-teal-950 font-bold">
            🔒 Pago 100% seguro • Garantía incondicional de 7 días • Acceso de por vida
          </p>
        </div>
      </div>
    </section>
  );
};
