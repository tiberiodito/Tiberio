import React from 'react';
import { Sparkles, Heart, Smartphone, Scissors, PartyPopper } from 'lucide-react';
import step1Img from '../assets/images/canva_download_customization_1787273076274.jpg';
import step2Img from '../assets/images/step2_craft_print_1787273174130.jpg';
import step3Img from '../assets/images/step3_party_decor_1787272784238.jpg';

export const ThreeStepsSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-[#a7eadb] via-[#94e4d3] to-[#80ddcb] py-16 px-4 text-center relative overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Title Header matching the reference print */}
        <div className="space-y-1">
          <h2 className="font-fredoka text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#0c4a45] uppercase tracking-wide leading-tight">
            LOS 3 PASOS SIMPLES <br />
            <span className="font-script text-3xl sm:text-5xl md:text-6xl text-[#0d9488] capitalize font-bold lowercase">
              para que tu fiesta luzca
            </span>{' '}
            <span className="text-[#0c4a45]">increíble 🥳</span>
          </h2>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          {/* Step 1 */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-2xl border-2 border-teal-100/80 flex flex-col justify-between transform hover:-translate-y-2 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="bg-[#ff4097] text-white font-fredoka font-black text-xs px-3.5 py-1.5 rounded-full uppercase shadow-md shadow-pink-200">
                  PASO 1
                </span>
                <span className="text-[11px] font-extrabold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                  100% Gratis en Canva
                </span>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-inner border border-slate-100 aspect-4/3 bg-slate-50">
                <img
                  src={step1Img}
                  alt="Paso 1: Descarga y personaliza tu diseño en Canva"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <h3 className="font-fredoka text-base sm:text-lg font-extrabold text-slate-900 leading-snug uppercase">
                DESCARGA Y PERSONALIZA TU DISEÑO EN CANVA GRATIS.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Escribe el nombre del cumpleañero y ajusta colores o textos en minutos desde tu celular o computadora.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-2xl border-2 border-teal-100/80 flex flex-col justify-between transform hover:-translate-y-2 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="bg-[#14b8a6] text-white font-fredoka font-black text-xs px-3.5 py-1.5 rounded-full uppercase shadow-md shadow-teal-200">
                  PASO 2
                </span>
                <span className="text-[11px] font-extrabold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                  Sin impresoras caras
                </span>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-inner border border-slate-100 aspect-4/3 bg-slate-50">
                <img
                  src={step2Img}
                  alt="Paso 2: Imprime y recorta en minutos"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <h3 className="font-fredoka text-base sm:text-lg font-extrabold text-slate-900 leading-snug uppercase">
                IMPRIME Y RECORTA EN MINUTOS.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Sin necesidad de experiencia ni materiales especiales. Usa tu impresora de casa o una imprenta local.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-2xl border-2 border-teal-100/80 flex flex-col justify-between transform hover:-translate-y-2 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="bg-[#f59e0b] text-white font-fredoka font-black text-xs px-3.5 py-1.5 rounded-full uppercase shadow-md shadow-amber-200">
                  PASO 3
                </span>
                <span className="text-[11px] font-extrabold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                  Resultado Profesional
                </span>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-inner border border-slate-100 aspect-4/3 bg-slate-50">
                <img
                  src={step3Img}
                  alt="Paso 3: Decora y sorprende a todos los invitados"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <h3 className="font-fredoka text-base sm:text-lg font-extrabold text-slate-900 leading-snug uppercase">
                DECORA Y SORPRENDE A TU HIJO Y A TODOS LOS INVITADOS.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Monta tu mesa de dulces, toppers y souvenirs en tiempo récord y con un acabado digno de Pinterest.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Tip Box */}
        <div className="bg-white/95 backdrop-blur-xs rounded-2xl p-4 sm:p-5 shadow-xl border-2 border-teal-200 max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm font-extrabold text-teal-950 uppercase flex items-center justify-center gap-2">
            <span>💡 Y LO MEJOR DE TODO: NO NECESITAS EXPERIENCIA:</span>
          </p>
          <p className="text-xs sm:text-sm font-extrabold text-pink-600 mt-1">
            Solo sigue los tutoriales y en minutos tendrás una fiesta mágica lista 💖
          </p>
        </div>

      </div>
    </section>
  );
};
