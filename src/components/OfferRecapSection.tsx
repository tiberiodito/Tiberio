import React from 'react';
import { Gift, CheckCircle, Sparkles, ShieldCheck, Download, Smartphone, Monitor, Palette } from 'lucide-react';
import { heroMockupTop } from '../data/kitData';

export const OfferRecapSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white via-[#fff5f8] to-white py-14 px-4 sm:px-6 border-b border-pink-100">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Deliverable Showcase Box */}
        <div className="bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 rounded-3xl p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden border-4 border-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left Cover Mockup Image */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-300 via-pink-300 to-teal-300 rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition duration-500" />
                <div className="relative w-64 sm:w-72 aspect-square rounded-2xl overflow-hidden shadow-2xl border-2 border-white/90 bg-white">
                  <img
                    src={heroMockupTop}
                    alt="Capa do Entregável Premium - Pack Fiesta Lista"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* Right Information */}
            <div className="md:col-span-7 space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 bg-yellow-300 text-slate-900 text-xs font-extrabold px-3 py-1 rounded-full uppercase shadow-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ENTREGABLE DIGITAL DE LUJO</span>
              </div>

              <h3 className="font-fredoka text-2xl sm:text-3xl font-extrabold uppercase leading-tight tracking-wide text-white drop-shadow-md">
                TODO TU PACK FIESTA LISTA EN UN SOLO LUGAR
              </h3>

              <p className="text-pink-100 text-sm sm:text-base leading-relaxed">
                Recibe acceso instantáneo y de por vida a la biblioteca completa de <strong>+10.000 plantillas premium</strong>, listas para editar en Canva gratis y mandar a imprimir en 1 clic.
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs font-bold pt-1">
                <div className="bg-white/15 backdrop-blur-xs rounded-xl p-2.5 flex items-center gap-2">
                  <Download className="w-4 h-4 text-yellow-300 shrink-0" />
                  <span>Descarga Directa</span>
                </div>
                <div className="bg-white/15 backdrop-blur-xs rounded-xl p-2.5 flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-yellow-300 shrink-0" />
                  <span>Edita desde el Móvil</span>
                </div>
                <div className="bg-white/15 backdrop-blur-xs rounded-xl p-2.5 flex items-center gap-2">
                  <Palette className="w-4 h-4 text-yellow-300 shrink-0" />
                  <span>Canva 100% Gratis</span>
                </div>
                <div className="bg-white/15 backdrop-blur-xs rounded-xl p-2.5 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-yellow-300 shrink-0" />
                  <span>Acceso Vitalicio</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Value Bullet Points */}
        <div className="text-center space-y-4">
          <div className="bg-[#fff0f5] p-6 rounded-3xl border-2 border-pink-200 shadow-sm space-y-3">
            <Gift className="w-9 h-9 text-pink-500 mx-auto animate-bounce" />
            <p className="text-slate-800 text-base sm:text-lg font-medium leading-relaxed">
              🎁 Un solo kit con <strong>TODO lo que necesitas</strong>: +10.000 plantillas, invitaciones, decoración, mesita de dulces, packaging, <strong>Suite de 5 Herramientas IA</strong> y 10 bonos exclusivos.
            </p>
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-900 px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold border border-purple-300">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>INCLUYE GENERADORES DE IA & CALCULADORA DE PRECIOS VIP</span>
            </div>
          </div>

          <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-200 shadow-xs">
            <p className="font-fredoka text-slate-900 text-sm sm:text-base font-extrabold uppercase">
              DEJA DE GASTAR CADA AÑO: <span className="text-emerald-700 font-normal lowercase">un solo kit que crece con tu hijo y sus personajes favoritos 👧👦</span>
            </p>
            <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-emerald-800 font-bold bg-white px-3 py-1 rounded-full border border-emerald-300">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>ACTUALIZACIONES INCLUIDAS: NUEVOS PERSONAJES Y DISEÑOS CADA MES</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
