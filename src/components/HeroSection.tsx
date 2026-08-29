import React from 'react';
import { Sparkles, Megaphone, Star, ArrowDown, Globe, MonitorPlay, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { heroMockupTop } from '../data/kitData';
import { PRICING_CONFIG } from '../data/pricingConfig';

interface HeroSectionProps {
  onBuyClick: () => void;
  onExploreDeliverable: () => void;
  language: 'es' | 'pt';
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onBuyClick, 
  onExploreDeliverable,
  language 
}) => {
  const isEs = language === 'es';

  return (
    <section className="relative bg-gradient-to-b from-[#fce7ed] via-[#fff0f4] to-[#fef7f9] pt-6 pb-12 px-4 overflow-hidden">
      {/* Decorative Pastel Bunting / Garland Circles */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-start opacity-90 pointer-events-none px-2 sm:px-12 pt-1">
        <div className="flex gap-1.5 sm:gap-3 mx-auto">
          {['#ff9ebb', '#4de0c0', '#ffd166', '#a78bfa', '#ff85a1', '#70e0d0', '#ffd166', '#ff9ebb', '#4de0c0', '#a78bfa'].map((color, i) => (
            <div
              key={i}
              className="w-5 h-7 sm:w-8 sm:h-11 rounded-b-full shadow-sm animate-bounce"
              style={{
                backgroundColor: color,
                animationDelay: `${i * 0.15}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center pt-8 relative z-10">
        {/* WE LIKE TO PARTY Stamp Badge */}
        <div className="absolute top-2 right-2 sm:right-6 rotate-12 hidden xs:flex flex-col items-center justify-center w-20 h-20 sm:w-28 sm:h-28 rounded-full border-2 border-dashed border-[#2dd4bf] text-[#0f766e] font-extrabold text-[9px] sm:text-[11px] leading-tight text-center p-2 bg-white/80 backdrop-blur-xs shadow-md">
          <Sparkles className="w-4 h-4 text-pink-400 mb-0.5" />
          <span>WE LIKE TO PARTY</span>
          <span className="text-[8px] text-pink-500 font-normal">WE LIKE TO PARTY</span>
        </div>

        {/* Hero Headline */}
        <div className="mb-2">
          <h2 className="font-fredoka text-2xl sm:text-4xl text-[#0f766e] tracking-widest uppercase font-extrabold">
            {isEs ? 'TU FIESTA' : 'SUA FESTA'}
          </h2>
          <h1 className="font-fredoka text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-none my-2 drop-shadow-sm">
            <span className="text-[#ff4d8d] drop-shadow-[0_2px_4px_rgba(255,100,160,0.25)]">
              {isEs ? 'Lista ' : 'Pronta '}
            </span>
            <span className="text-[#3b82f6] drop-shadow-[0_2px_4px_rgba(59,130,246,0.2)]">
              {isEs ? 'en ' : 'em '}
            </span>
            <span className="text-[#f59e0b] drop-shadow-[0_2px_4px_rgba(245,158,11,0.2)]">
              {isEs ? 'un ' : 'um '}
            </span>
            <span className="text-[#0d9488] bg-teal-50 px-3.5 py-0.5 rounded-2xl border-2 border-[#2dd4bf] inline-block shadow-sm">
              kit
            </span>
          </h1>
          <p className="font-script text-3xl sm:text-5xl md:text-6xl text-[#e11d48] font-bold mt-1 tracking-wide -rotate-1 inline-block drop-shadow-2xs">
            {isEs ? 'la magia comienza aquí' : 'a magia começa aqui'}
          </p>
        </div>

        {/* Central Clean 3D Product Mockup Showcase */}
        <div className="my-8 relative max-w-3xl mx-auto rounded-3xl p-3 sm:p-5 bg-white/95 shadow-2xl border-4 border-pink-200/90 backdrop-blur-xs group">
          <div className="relative rounded-2xl overflow-hidden shadow-inner bg-gradient-to-tr from-pink-100 via-sky-50 to-teal-50">
            {/* Visual party mockup image */}
            <img
              src={heroMockupTop}
              alt="Pack Fiesta Lista (+10.000 Plantillas)"
              className="w-full h-auto max-h-[420px] object-cover rounded-xl transform group-hover:scale-[1.02] transition-transform duration-500"
              loading="eager"
              fetchPriority="high"
              referrerPolicy="no-referrer"
            />
            {/* Overlay Badges */}
            <div className="absolute top-3 left-3 bg-white/95 text-pink-600 font-extrabold text-xs sm:text-sm px-3.5 py-1.5 rounded-full shadow-lg border border-pink-200 flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>{isEs ? '+10.000 Plantillas Editables' : '+10.000 Modelos Editáveis'}</span>
            </div>
            <div className="absolute bottom-3 right-3 bg-[#2dd4bf] text-white font-extrabold text-xs sm:text-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>{isEs ? 'Acceso Inmediato y Descarga' : 'Acesso Imediato e Download'}</span>
            </div>
          </div>

          {/* Decorative floating stickers on bottom edge */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 -mt-4 relative z-10">
            <span className="bg-amber-100 border-2 border-amber-300 text-amber-800 text-xs font-bold px-3 py-1 rounded-full shadow-md">
              🎈 {isEs ? 'Invitaciones' : 'Convites'}
            </span>
            <span className="bg-pink-100 border-2 border-pink-300 text-pink-800 text-xs font-bold px-3 py-1 rounded-full shadow-md">
              🧁 {isEs ? 'Toppers & Cajitas' : 'Toppers & Caixas'}
            </span>
            <span className="bg-teal-100 border-2 border-teal-300 text-teal-800 text-xs font-bold px-3 py-1 rounded-full shadow-md">
              🍿 {isEs ? 'Envoltorios Candy' : 'Embalagens Doces'}
            </span>
            <span className="bg-purple-100 border-2 border-purple-300 text-purple-800 text-xs font-bold px-3 py-1 rounded-full shadow-md">
              🎁 {isEs ? '10 Bonos Gratis' : '10 Bônus Grátis'}
            </span>
          </div>
        </div>

        {/* Hero Callout Box */}
        <div className="bg-white rounded-2xl p-5 sm:p-7 shadow-xl border-2 border-pink-200 text-left relative overflow-hidden mt-6">
          <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-pink-100 rounded-full opacity-50 blur-xl pointer-events-none" />
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="p-3 bg-pink-100 text-pink-600 rounded-2xl shrink-0 mt-1 shadow-xs">
              <Megaphone className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <h3 className="font-fredoka text-lg sm:text-xl font-extrabold text-slate-800 leading-snug uppercase tracking-tight">
                {isEs
                  ? 'CONVIERTE EL CUMPLEAÑOS DE TU HIJO EN UNA FIESTA MÁGICA... SIN ESTRÉS Y EN MINUTOS DESDE CASA.'
                  : 'TRANSFORME O ANIVERSÁRIO DO SEU FILHO EM UMA FESTA MÁGICA... SEM ESTRESSE E EM MINUTOS DIRETO DE CASA.'}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
                {isEs ? (
                  <>
                    El kit imprimible con <strong>+10.000 diseños personalizables</strong>, listos para descargar y montar. Todo lo que necesitas para una fiesta espectacular o para iniciar tu negocio de decoración.
                  </>
                ) : (
                  <>
                    O kit imprimível com <strong>+10.000 designs personalizáveis</strong>, prontos para baixar e montar. Tudo o que você precisa para uma festa espetacular ou para começar seu negócio de papelaria criativa.
                  </>
                )}
              </p>
            </div>
          </div>

          <div className="mt-5 text-center sm:text-right">
            <button
              onClick={onBuyClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-fredoka font-extrabold text-base sm:text-lg px-8 py-4 rounded-full shadow-lg shadow-pink-300/60 transform hover:-translate-y-0.5 transition-all cursor-pointer border border-white"
            >
              <span>{isEs ? `¡QUIERO MI PACK POR SOLO $${PRICING_CONFIG.baseUsdPromo.toFixed(2)}!` : `SIM, QUERO MEU PACK POR APENAS $${PRICING_CONFIG.baseUsdPromo.toFixed(2)}!`}</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </button>
            
            {/* 🌟 Destaque de Pagamento na Moeda Local */}
            <div className="mt-2.5 inline-flex items-center justify-center sm:justify-end gap-1.5 bg-emerald-50 border border-emerald-300 text-emerald-900 px-3 py-1 rounded-full text-[11px] sm:text-xs font-extrabold shadow-2xs">
              <Globe className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>{isEs ? '🌎 Pagamento 100% en tu Moneda Local (México, Colombia, Chile, Perú, etc.)' : '🌎 Pagamento 100% na sua Moeda Local (PIX, Cartão, Boleto, etc.)'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
