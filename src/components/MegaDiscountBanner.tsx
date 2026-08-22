import React from 'react';
import { Sparkles, Clock, ArrowDown, Gift, Lock, ShieldCheck, CheckCircle2, Globe } from 'lucide-react';
import { PRICING_CONFIG } from '../data/pricingConfig';

interface MegaDiscountBannerProps {
  onBuyClick: () => void;
}

export const MegaDiscountBanner: React.FC<MegaDiscountBannerProps> = ({ onBuyClick }) => {
  return (
    <section className="bg-gradient-to-b from-[#fff5f8] via-[#ffeef4] to-[#fef7f9] py-14 px-4 sm:px-6 relative overflow-hidden border-t-2 border-b-2 border-pink-200">
      {/* Background soft glow elements */}
      <div className="absolute -top-12 -left-12 w-48 h-48 bg-pink-300/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-amber-300/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white font-fredoka font-black text-xs sm:text-sm px-5 py-2 rounded-full uppercase tracking-wider shadow-lg shadow-pink-500/25 animate-pulse">
          <Sparkles className="w-4 h-4" />
          <span>¡OFERTA FLASH DE LANZAMIENTO EXCLUSIVA!</span>
          <Sparkles className="w-4 h-4" />
        </div>

        {/* Big Catchy Title */}
        <div className="space-y-2">
          <h2 className="font-fredoka text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 uppercase tracking-tight leading-none">
            ACCEDE HOY CON UN <span className="text-[#ff1493] drop-shadow-sm">81% DE DESCUENTO</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            No volverás a pagar por plantillas individuales. Llévate la colección completa de <strong>+10.000 plantillas</strong>, los <strong>10 Bonos VIP</strong> y las <strong>5 Herramientas IA</strong> por un único pago simbólico.
          </p>
        </div>

        {/* Pricing Comparison Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-pink-200 max-w-xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[#2dd4bf] text-white text-[11px] font-black uppercase px-4 py-1 rounded-bl-2xl shadow-xs">
            PAGO ÚNICO • ACCESO VITALICIO
          </div>

          <div className="space-y-4 pt-2">
            <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest block">
              PRECIO REGULAR TOTAL: <span className="line-through text-slate-500">${PRICING_CONFIG.baseUsdRegular.toFixed(2)} USD</span>
            </span>

            <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
              <span className="font-fredoka text-4xl sm:text-6xl font-black text-[#ff1493] tracking-tight">
                ${PRICING_CONFIG.baseUsdPromo.toFixed(2)}
              </span>
              <span className="text-xl sm:text-2xl font-black text-slate-700">
                USD
              </span>
            </div>

            {/* Local Currency Highlight Pill */}
            <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-2.5 flex items-center justify-center gap-2 text-emerald-900 font-extrabold text-xs sm:text-sm">
              <Globe className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>🌎 ¡PAGO EN TU MONEDA LOCAL DISPONIBLE! 🌎</span>
            </div>

            <p className="text-xs font-bold text-emerald-600 flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Ahorras más de $44.00 USD con esta promoción hoy</span>
            </p>
          </div>
        </div>

        {/* Urgency & Social Proof Note */}
        <div className="flex items-center justify-center gap-2 text-slate-700 font-bold text-xs sm:text-sm">
          <Clock className="w-4 h-4 text-pink-600 animate-spin" />
          <span>El precio subirá automáticamente al finalizar la cuenta regresiva.</span>
        </div>

        {/* Main CTA Trigger */}
        <div className="space-y-3 pt-2">
          <div>
            <button
              onClick={onBuyClick}
              className="bg-gradient-to-r from-[#ff1493] via-[#ff2d8d] to-[#ff40a1] hover:from-[#e0007d] hover:to-[#e6328f] text-white font-fredoka font-black text-base sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-full shadow-2xl shadow-pink-500/50 transform hover:scale-105 transition duration-300 cursor-pointer inline-flex items-center gap-2 border-2 border-white"
            >
              <span>📥 DESCARGAR AHORA EN MI MONEDA</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </button>
          </div>

          <p className="text-xs font-semibold text-slate-600 max-w-lg mx-auto leading-relaxed">
            🌎 <strong>Pagamento en tu propia moneda</strong> (México, Colombia, Chile, Perú, Argentina, España, etc.) con conversión automática y métodos locales garantizados.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 text-xs font-bold text-slate-600 pt-1">
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-emerald-600" /> Pago 100% Seguro
            </span>
            <span>•</span>
            <span>Sin mensualidades ni costes ocultos</span>
            <span>•</span>
            <span>Acceso Vitalicio por Email</span>
          </div>
        </div>

      </div>
    </section>
  );
};
