import React from 'react';
import { Sparkles } from 'lucide-react';

export const MintHighlightBanner: React.FC = () => {
  return (
    <section className="bg-[#a2ded6] py-8 px-4 text-center border-y-2 border-white">
      <div className="max-w-4xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 bg-white/80 text-teal-900 font-extrabold text-xs px-3 py-1 rounded-full uppercase shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>FÁCIL • RÁPIDO • ECONÓMICO</span>
        </div>
        <h2 className="font-fredoka text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight drop-shadow-sm">
          TODO LO QUE NECESITAS PARA TU FIESTA EN UN SOLO LUGAR
        </h2>
        <p className="text-teal-950 text-sm sm:text-base font-medium max-w-2xl mx-auto">
          No compres plantillas sueltas ni gastes de más. Nuestro ecosistema digital incluye todo organizado por temáticas.
        </p>
      </div>
    </section>
  );
};
