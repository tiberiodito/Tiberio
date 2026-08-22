import React, { useState, useEffect } from 'react';
import { Clock, Flame } from 'lucide-react';

interface UrgencyCountdownWidgetProps {
  variant?: 'compact' | 'full';
}

export const UrgencyCountdownWidget: React.FC<UrgencyCountdownWidgetProps> = ({ variant = 'compact' }) => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 14, seconds: 59 }; // loop
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  if (variant === 'compact') {
    return (
      <div className="inline-flex items-center gap-1.5 bg-rose-50 text-rose-700 border border-rose-200 px-3 py-1 rounded-full text-xs font-bold font-fredoka shadow-xs animate-pulse">
        <Clock className="w-3.5 h-3.5 text-rose-600" />
        <span>OFERTA TERMINA EN:</span>
        <span className="font-mono font-black text-rose-800 bg-white px-1.5 py-0.5 rounded shadow-inner">
          {formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}
        </span>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white p-3 rounded-2xl flex items-center justify-between gap-3 shadow-md">
      <div className="flex items-center gap-2">
        <Flame className="w-5 h-5 text-yellow-300 animate-bounce" />
        <span className="text-xs sm:text-sm font-extrabold font-fredoka uppercase">
          ¡Últimos 17 accesos con descuento + 10 Bonos Gratis!
        </span>
      </div>
      <div className="flex items-center gap-1 font-mono font-black text-sm bg-slate-900/80 px-3 py-1 rounded-xl border border-white/20">
        <span>{formatNumber(timeLeft.minutes)}</span>
        <span>:</span>
        <span>{formatNumber(timeLeft.seconds)}</span>
      </div>
    </div>
  );
};
