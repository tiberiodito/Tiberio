import React, { useState } from 'react';
import { Star, Search, ShieldCheck, Lock, ShoppingBag, Globe, Sparkles, CheckCircle2, Clock, Flame } from 'lucide-react';
import { CURRENCIES, heroMockupTop } from '../data/kitData';
import { CURRENCY_RATES, PRICING_CONFIG } from '../data/pricingConfig';
import { UrgencyCountdownWidget } from './UrgencyCountdownWidget';

interface CheckoutSectionProps {
  onBuyClick: () => void;
  selectedCurrency: string;
  onCurrencyChange: (code: string) => void;
}

export const CheckoutSection: React.FC<CheckoutSectionProps> = ({
  onBuyClick,
  selectedCurrency,
  onCurrencyChange,
}) => {
  const currentRate = CURRENCY_RATES[selectedCurrency] || CURRENCY_RATES.USD;

  return (
    <section id="checkout-section" className="py-12 px-4 bg-gradient-to-b from-[#fef7f9] to-[#fff0f5]">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-pink-200">
        
        {/* 🌎 Currency Selector & Native Methods Widget */}
        <div className="mb-6 bg-pink-50 p-4 rounded-2xl border border-pink-200 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-pink-900">
              <Globe className="w-4 h-4 text-pink-600" />
              <span>Selecciona tu País / Moneda de Pago:</span>
            </div>
            <select
              value={selectedCurrency}
              onChange={(e) => onCurrencyChange(e.target.value)}
              aria-label="Seleccionar moneda de pago"
              className="bg-white border border-pink-300 text-slate-800 text-xs font-bold rounded-xl px-3 py-1.5 focus:ring-2 focus:ring-pink-400 focus:outline-none cursor-pointer"
            >
              {CURRENCIES.map((curr) => (
                <option key={curr.code} value={curr.code}>
                  {curr.flag} {curr.name}
                </option>
              ))}
            </select>
          </div>

          {/* Quick buttons for top currencies */}
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5 pt-1">
            {Object.keys(CURRENCY_RATES).map((currCode) => {
              const item = CURRENCY_RATES[currCode];
              const isSelected = selectedCurrency === currCode;
              return (
                <button
                  key={currCode}
                  onClick={() => onCurrencyChange(currCode)}
                  className={`py-1.5 px-1 rounded-xl text-[11px] font-fredoka font-bold flex flex-col items-center justify-center transition cursor-pointer border ${
                    isSelected
                      ? 'bg-pink-600 text-white border-pink-600 shadow-sm'
                      : 'bg-white text-slate-700 border-pink-100 hover:border-pink-300'
                  }`}
                >
                  <span>{item.flag}</span>
                  <span className="text-[9px]">{currCode}</span>
                </button>
              );
            })}
          </div>

          {/* Payment methods available banner */}
          <div className="bg-white p-2.5 rounded-xl border border-pink-200/80 text-[11px] text-slate-700 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 truncate">
              <span className="text-emerald-600 font-bold">✅ Medios locales:</span>
              <span className="font-medium truncate">{currentRate.payMethods.es}</span>
            </div>
            {currentRate.badge && (
              <span className="bg-pink-100 text-pink-700 text-[9px] font-extrabold px-2 py-0.5 rounded-full shrink-0">
                {currentRate.badge}
              </span>
            )}
          </div>
        </div>

        {/* Product Visual Card Stack */}
        <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-pink-50 to-white border-2 border-pink-200/80 mb-6 shadow-lg">
          <div className="relative overflow-hidden group bg-slate-900/5">
            <img
              src={heroMockupTop}
              alt="Kit Fiesta Mágica - Pack Fiesta Lista + 10 Bonos Entregable Premium"
              className="w-full h-auto block group-hover:scale-102 transition-transform duration-500 max-h-72 object-cover object-top"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-pink-600 font-extrabold text-[11px] uppercase shadow-md flex items-center gap-1 border border-pink-100">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>ENTREGABLE DIGITAL PREMIUM</span>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 bg-white border-t border-pink-100 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-1.5">
              <span className="text-pink-600 font-extrabold text-sm sm:text-base font-fredoka uppercase tracking-wide">
                PACK FIESTA LISTA + 10 BONOS + IA
              </span>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
                ACCESO DE POR VIDA
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5 text-[10px] sm:text-[11px] text-slate-700 font-medium">
              <span className="bg-pink-100 text-pink-700 px-2.5 py-0.5 rounded-md font-extrabold">+10.000 Plantillas</span>
              <span className="bg-teal-100 text-teal-800 px-2.5 py-0.5 rounded-md font-extrabold">10 Bonos VIP</span>
              <span className="bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-md font-bold">5 Apps IA</span>
              <span className="bg-purple-100 text-purple-800 px-2.5 py-0.5 rounded-md font-bold">Listo para Imprimir</span>
            </div>
          </div>
        </div>

        {/* Downloads & Rating */}
        <div className="flex items-center justify-between text-xs sm:text-sm text-slate-600 border-b border-slate-100 pb-4 mb-4">
          <span className="font-bold text-slate-500 uppercase tracking-wide">+7.145 DESCARGAS</span>
          <div className="flex items-center gap-1">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="font-bold text-slate-700 text-xs">(47 RESEÑAS)</span>
          </div>
        </div>

        {/* Product Title */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <h2 className="font-fredoka text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
            PACK FIESTA LISTA + 10 Regalos + IA
          </h2>
          <UrgencyCountdownWidget variant="compact" />
        </div>

        {/* Pricing */}
        <div className="flex items-baseline gap-3 mb-4">
          <span className="line-through text-slate-400 text-lg font-bold">
            {currentRate.symbol} {currentRate.regular} {selectedCurrency}
          </span>
          <span className="font-fredoka text-3xl sm:text-4xl font-extrabold text-[#ff1493]">
            {currentRate.symbol} {currentRate.promo} {selectedCurrency}
          </span>
          <span className="bg-teal-100 text-teal-800 text-xs font-extrabold px-2.5 py-1 rounded-full uppercase border border-teal-300">
            {PRICING_CONFIG.discountPercentage}% OFF
          </span>
        </div>

        {/* Buttons */}
        <div className="space-y-3 mb-4">
          <button
            onClick={onBuyClick}
            className="w-full bg-gradient-to-r from-[#ff1493] via-[#ff2d8d] to-[#ff40a1] hover:from-[#e0007d] hover:to-[#e6328f] text-white font-fredoka font-extrabold text-lg sm:text-xl py-4.5 rounded-full shadow-xl shadow-pink-300/80 transform hover:-translate-y-0.5 transition-all cursor-pointer border-2 border-white flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>COMPRAR EN MI MONEDA ({currentRate.symbol}{currentRate.promo} {selectedCurrency})</span>
          </button>
        </div>

        {/* Local Currency Payment Notice directly under buttons */}
        <div className="mb-6 bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border-2 border-emerald-300 rounded-2xl p-4 text-center shadow-sm">
          <div className="flex items-center justify-center gap-2 text-emerald-950 font-fredoka font-extrabold text-sm sm:text-base">
            <Globe className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>🌎 ¡PAGO 100% EN TU MONEDA LOCAL ({selectedCurrency})! 🌎</span>
          </div>
          <p className="text-xs sm:text-sm text-emerald-800 font-semibold mt-1.5 leading-snug">
            {currentRate.flag} Disponibles: <strong>{currentRate.payMethods.es}</strong>. La pasarela oficial procesa el pago seguro en tu moneda de origen sin comisiones ocultas.
          </p>
        </div>

        {/* Bottom Tagline */}
        <div className="bg-[#bdf2e5] p-3 rounded-2xl text-center border border-teal-200">
          <p className="font-fredoka text-xs sm:text-sm font-extrabold text-teal-950 uppercase tracking-wide">
            📣 LO COMPRAS UNA VEZ, LO USAS PARA TODA LA VIDA 🐝
          </p>
        </div>

        {/* Trust Guarantees */}
        <div className="mt-6 flex flex-wrap justify-center items-center gap-4 text-slate-500 text-xs pt-4 border-t border-slate-100">
          <span className="flex items-center gap-1 font-semibold">
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            Pago 100% Seguro
          </span>
          <span className="flex items-center gap-1 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
            Acceso Inmediato
          </span>
        </div>
      </div>
    </section>
  );
};
