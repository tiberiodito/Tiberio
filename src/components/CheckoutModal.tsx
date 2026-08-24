import React, { useState } from 'react';
import { X, CheckCircle2, Lock, ShieldCheck, Sparkles, Globe, ArrowRight, CreditCard } from 'lucide-react';
import { CURRENCY_RATES, PRICING_CONFIG, getCooudCheckoutUrl } from '../data/pricingConfig';
import { trackInitiateCheckout } from '../utils/pixel';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCurrency: string;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  selectedCurrency,
}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const currentRate = CURRENCY_RATES[selectedCurrency] || CURRENCY_RATES.USD;

  const handleProceedToCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    trackInitiateCheckout(6.9, selectedCurrency);
    const checkoutUrl = getCooudCheckoutUrl();
    window.location.href = checkoutUrl;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-pink-200 overflow-hidden max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-5">
          <span className="inline-flex items-center gap-1 bg-pink-100 text-pink-700 font-extrabold text-[11px] px-3 py-1 rounded-full uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            CHECKOUT 100% SEGURO
          </span>
          <h3 className="font-fredoka text-2xl font-extrabold text-slate-900 uppercase">
            COMPLETAR TU ACCESO VIP
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Recibirás el acceso de por vida en tu correo electrónico al instante.
          </p>
        </div>

        {/* 🌟 BANNER DE DESTAQUE: PAGAMENTO NA SUA MOEDA LOCAL */}
        <div className="mb-5 bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border-2 border-emerald-300 rounded-2xl p-3.5 text-center shadow-sm">
          <div className="inline-flex items-center justify-center gap-2 text-emerald-950 font-fredoka font-extrabold text-xs sm:text-sm tracking-wide">
            <Globe className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>🌎 ¡PAGAMENTO EN TU MONEDA LOCAL ({selectedCurrency})! 🌎</span>
          </div>
          <p className="text-[11px] text-emerald-800 font-semibold mt-1">
            {currentRate.flag} Disponibles: {currentRate.payMethods.es} (Conversión automática oficial en tu moneda).
          </p>
        </div>

        {/* Price Card */}
        <div className="bg-gradient-to-r from-pink-50 to-teal-50 border-2 border-pink-200 rounded-2xl p-4 mb-5 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-slate-500 uppercase block">Total a pagar:</span>
            <div className="font-fredoka text-2xl sm:text-3xl font-extrabold text-pink-600 flex items-center gap-1.5">
              <span>{currentRate.symbol}{currentRate.promo}</span>
              <span className="text-xs text-slate-600 uppercase">({selectedCurrency})</span>
            </div>
            <span className="text-[10px] text-emerald-600 font-bold">
              ✅ Ahorro de más del {PRICING_CONFIG.discountPercentage}% aplicado
            </span>
          </div>

          <div className="text-right">
            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2.5 py-1 rounded-full uppercase">
              PAGO ÚNICO
            </span>
            <p className="text-[10px] text-slate-400 mt-1">Sin mensualidades</p>
          </div>
        </div>

        {/* Checkout Form */}
        <form onSubmit={handleProceedToCheckout} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Tu Nombre Completo:
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej. Maria Perez"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Tu Correo Electrónico (para recibir el acceso):
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tuemail@ejemplo.com"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
          </div>

          <div className="pt-1">
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:to-rose-600 text-white font-fredoka font-extrabold text-base sm:text-lg shadow-xl shadow-pink-300/80 transition cursor-pointer flex items-center justify-center gap-2 border-2 border-white transform hover:scale-[1.01]"
            >
              <Lock className="w-5 h-5" />
              <span>PAGAR EN MI MONEDA ({currentRate.symbol}{currentRate.promo} {selectedCurrency})</span>
            </button>
            <p className="text-[10px] text-center font-bold text-emerald-700 mt-2 flex items-center justify-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Transacción encriptada con cobro en {selectedCurrency}</span>
            </p>
          </div>
        </form>

        {/* Security badges */}
        <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-center gap-4 text-[11px] text-slate-400 font-semibold">
          <span className="flex items-center gap-1">
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            Encriptación 256-Bit SSL
          </span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
            Garantía de 7 Días
          </span>
        </div>

      </div>
    </div>
  );
};
