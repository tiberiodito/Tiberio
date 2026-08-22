import React from 'react';
import { Eye } from 'lucide-react';
import logoImg from '../assets/images/pack_fiesta_logo_vector_1787315893546.jpg';

interface SalesHeaderProps {
  language: 'es' | 'pt';
}

export const SalesHeader: React.FC<SalesHeaderProps> = ({
  language,
}) => {
  const isEs = language === 'es';

  return (
    <header className="relative z-20 bg-white border-b border-pink-100 shadow-2xs transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-3">
        
        {/* Brand Info (Logo + Nome + Texto da Oferta Junto) */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl overflow-hidden shadow-xs shrink-0 border-2 border-pink-200 bg-white flex items-center justify-center p-0.5">
            <img 
              src={logoImg} 
              alt="Pack Fiesta Lista" 
              className="w-full h-full object-cover rounded-lg sm:rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="min-w-0">
            <h1 className="font-fredoka font-black text-base sm:text-xl lg:text-2xl text-[#ff4d8d] leading-none tracking-wide drop-shadow-2xs truncate">
              PACK FIESTA LISTA
            </h1>
            
            {/* Texto da Oferta ao lado do Título */}
            <p className="text-[11px] sm:text-xs text-slate-600 font-bold truncate mt-0.5 flex items-center gap-1">
              <span className="text-pink-600 font-extrabold">
                {isEs ? '+1.500 Plantillas' : '+1.500 Modelos'}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-purple-600 font-extrabold">
                {isEs ? '+10 Bonos' : '+10 Bônus'}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-teal-600 font-extrabold">
                {isEs ? '+6 Herramientas' : '+6 Ferramentas'}
              </span>
            </p>
          </div>
        </div>

      </div>
    </header>
  );
};

