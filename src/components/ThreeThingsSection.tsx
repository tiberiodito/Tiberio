import React from 'react';
import { Check } from 'lucide-react';

export const ThreeThingsSection: React.FC = () => {
  return (
    <section className="bg-[#fff6f8] py-12 px-4 border-b border-pink-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-fredoka text-center text-2xl sm:text-3xl font-extrabold text-[#6b21a8] uppercase tracking-tight mb-8">
          3 COSAS QUE LOGRARÁS CON ESTE KIT:
        </h2>

        <div className="space-y-4">
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-pink-100 flex items-start gap-4 transform transition-transform hover:-translate-y-0.5">
            <div className="bg-[#22c55e] text-white p-2 rounded-lg shrink-0 mt-0.5 shadow-xs">
              <Check className="w-5 h-5 stroke-[3]" />
            </div>
            <p className="text-slate-800 text-base sm:text-lg leading-relaxed font-medium">
              <strong className="text-slate-900 font-extrabold">Resolver la decoración de la fiesta en minutos</strong>, con plantillas listas para imprimir.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm border border-pink-100 flex items-start gap-4 transform transition-transform hover:-translate-y-0.5">
            <div className="bg-[#22c55e] text-white p-2 rounded-lg shrink-0 mt-0.5 shadow-xs">
              <Check className="w-5 h-5 stroke-[3]" />
            </div>
            <p className="text-slate-800 text-base sm:text-lg leading-relaxed font-medium">
              <strong className="text-slate-900 font-extrabold">Lograr un cumpleaños inolvidable</strong> con diseños únicos y profesionales.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm border border-pink-100 flex items-start gap-4 transform transition-transform hover:-translate-y-0.5">
            <div className="bg-[#22c55e] text-white p-2 rounded-lg shrink-0 mt-0.5 shadow-xs">
              <Check className="w-5 h-5 stroke-[3]" />
            </div>
            <p className="text-slate-800 text-base sm:text-lg leading-relaxed font-medium">
              <strong className="text-slate-900 font-extrabold">Sorprender a tu hijo y a todos los invitados</strong> con una celebración digna de Pinterest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
