import React from 'react';
import { Star, Heart, CheckCircle2, Sparkles, ShieldCheck, Quote } from 'lucide-react';

export const TestimonialBanner: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#fef7f9] via-white to-[#fef7f9] border-y border-pink-100">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-pink-200 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left: Prominent & Large Photo Showcase */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-4 ring-pink-100/80 w-full group">
                <img
                  src="https://res.cloudinary.com/xjvdljmn/image/upload/v1787270263/depoimento_real_mama_1786839915039_dxzehy.jpg"
                  alt="Caso Real de Fiesta Infantil - Mariana Gómez"
                  className="w-full h-auto min-h-[300px] sm:min-h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Verified Badge */}
                <div className="absolute top-3.5 left-3.5 bg-slate-900/85 backdrop-blur-md text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-white/20">
                  <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  <span>CASO REAL VERIFICADO</span>
                </div>

                {/* Bottom Overlay Pill on Image */}
                <div className="absolute bottom-3.5 inset-x-3.5 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-pink-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-fredoka font-black text-sm">
                      MG
                    </div>
                    <div>
                      <p className="text-xs font-extrabold text-slate-900 leading-tight">
                        Fiesta de Emma (4 años)
                      </p>
                      <p className="text-[11px] font-bold text-emerald-600">
                        💰 Ahorró +$350 USD en decoraciones
                      </p>
                    </div>
                  </div>
                  <span className="bg-pink-100 text-pink-700 text-[10px] font-black uppercase px-2 py-1 rounded-md">
                    Foto Real
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Testimonial Story & Details */}
            <div className="lg:col-span-6 space-y-4 text-left">
              
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="bg-pink-100 text-pink-700 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider border border-pink-200">
                  💖 EXPERIENCIA REAL DE CLIENTA
                </span>
                <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-slate-800 text-xs font-black ml-1">5.0 / 5.0</span>
                </div>
              </div>

              <h3 className="font-fredoka text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                No lo decimos nosotros, <span className="text-[#ff4097]">lo dicen ellas</span> 🌈
              </h3>

              <div className="relative pl-4 border-l-4 border-pink-400 space-y-3 my-2">
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic font-medium">
                  “Antes gastaba cientos de dólares contratando decoradores y siempre terminaba con el estrés de que algo faltara a última hora. Con este <strong className="text-pink-600 font-extrabold not-italic">Pack Fiesta Lista</strong>, en menos de una tarde edité todo en Canva sin saber nada de diseño, imprimí en papel fotográfico y la fiesta de mi hijo quedó <strong className="underline decoration-pink-400 decoration-2 text-slate-900 not-italic font-black">¡como sacada de Pinterest!</strong>”
                </p>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic font-medium">
                  “Me ahorré más de <strong className="text-emerald-700 font-extrabold not-italic bg-emerald-50 px-1.5 py-0.5 rounded-md">$350 USD</strong> en una sola fiesta y todas las mamás del colegio me preguntaban quién me había hecho la decoración. ¡Ya hasta me están pidiendo que les arme sus eventos! Es la mejor inversión que he hecho.”
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <div>
                  <strong className="text-slate-900 font-fredoka text-sm block">Mariana Gómez</strong>
                  <span className="text-[12px] text-slate-500 font-medium">Mamá de Emma • Bogotá, Colombia</span>
                </div>
                <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1.5 rounded-full text-xs font-extrabold flex items-center gap-1.5 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Compradora Verificada</span>
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
