import React from 'react';
import { Sparkles } from 'lucide-react';

export const WaitMoreBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-[#4ade80] via-[#2dd4bf] to-[#4ade80] py-6 px-4 text-slate-950 text-center shadow-md">
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-2">
        <Sparkles className="w-5 h-5 text-white animate-spin" style={{ animationDuration: '6s' }} />
        <h2 className="font-fredoka text-xl sm:text-3xl font-extrabold text-white uppercase tracking-wider drop-shadow-sm">
          ✨ ¡PERO ESPERA... ¡HAY MÁS! ✨
        </h2>
        <Sparkles className="w-5 h-5 text-white animate-spin" style={{ animationDuration: '6s' }} />
      </div>
    </section>
  );
};
