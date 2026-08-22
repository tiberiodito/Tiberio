import React from 'react';
import { Sparkles, Check, X, ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';
import { PRICING_CONFIG } from '../data/pricingConfig';

interface RealComparisonSectionProps {
  onBuyClick: () => void;
  language: 'es' | 'pt';
}

export const RealComparisonSection: React.FC<RealComparisonSectionProps> = ({
  onBuyClick,
  language,
}) => {
  const isEs = language === 'es';

  return (
    <section className="py-14 sm:py-20 px-4 bg-gradient-to-b from-[#fef7f9] via-white to-[#fef7f9]">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="bg-pink-100 text-pink-700 text-xs sm:text-sm font-extrabold uppercase px-4 py-1.5 rounded-full border border-pink-200 shadow-xs">
            {isEs ? 'COMPARACIÓN REAL' : 'COMPARAÇÃO REAL'}
          </span>
          <h2 className="font-fredoka text-2xl sm:text-4xl font-extrabold text-slate-900 uppercase tracking-tight mt-3">
            {isEs ? '¿HACERLO TODO SOLA O CON EL PACK FIESTA LISTA?' : 'FAZER TUDO SOZINHA OU COM O PACK FIESTA LISTA?'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium max-w-xl mx-auto mt-2">
            {isEs 
              ? 'Mira la diferencia de tiempo, dinero y estrés entre empezar desde cero y tener todo listo.'
              : 'Veja a diferença de tempo, dinheiro e dor de cabeça entre começar do zero e ter tudo pronto.'}
          </p>
        </div>

        {/* 2-Columns Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* Column 1: Hacerlo Sola (Red / Frustration) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-rose-200 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-lg shrink-0">
                  <X className="w-6 h-6 stroke-[3]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-rose-500 uppercase tracking-wider block">OPCIÓN TRADICIONAL</span>
                  <h3 className="font-fredoka text-xl font-extrabold text-slate-800">
                    {isEs ? 'Hacerlo Todo Sola desde Cero' : 'Fazer Tudo Sozinha do Zero'}
                  </h3>
                </div>
              </div>

              <div className="bg-rose-50/60 rounded-2xl p-4 border border-rose-100">
                <span className="text-xs font-bold text-rose-800 block">💸 Costo real estimado:</span>
                <span className="font-fredoka text-2xl sm:text-3xl font-black text-rose-600">$85 - $200 USD</span>
                <p className="text-[11px] text-rose-700 mt-1 font-medium">
                  {isEs ? 'Comprando kits individuales de $5-$15 cada vez que tu hijo cambia de gusto.' : 'Comprando kits avulsos toda vez que tem aniversário.'}
                </p>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-600 font-medium pt-2">
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold shrink-0">✗</span>
                  <span>{isEs ? 'Horas perdidas buscando imágenes sin fondo en Google de mala calidad.' : 'Horas perdidas caçando imagens borradas sem fundo no Google.'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold shrink-0">✗</span>
                  <span>{isEs ? 'Medidas incorrectas que desperdician papel, tinta y tiempo en la impresora.' : 'Medidas erradas que gastam papel e tinta da impressora à toa.'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold shrink-0">✗</span>
                  <span>{isEs ? 'Sin herramientas ni textos automáticos para redactar invitaciones rápido.' : 'Sem textos automáticos para os convites.'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold shrink-0">✗</span>
                  <span>{isEs ? 'Inseguridad sobre qué precio cobrar a tus clientes para no perder dinero.' : 'Dúvida se está cobrando o preço certo e perdendo lucro.'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold shrink-0">✗</span>
                  <span>{isEs ? 'Estrés de última hora antes de la fiesta.' : 'Estresse e correria na véspera da festa.'}</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-rose-100 text-center">
              <span className="text-xs font-bold text-rose-500">❌ Mucho trabajo, poco tiempo y gasto constante</span>
            </div>
          </div>

          {/* Column 2: Pack Fiesta Lista (Teal / Winner) */}
          <div className="bg-gradient-to-b from-[#0d9488] to-[#0f766e] rounded-3xl p-6 sm:p-8 text-white shadow-2xl flex flex-col justify-between relative overflow-hidden border-4 border-[#2dd4bf] transform md:-translate-y-2">
            
            {/* Winner Badge */}
            <div className="absolute top-0 right-0 bg-yellow-300 text-slate-950 text-[10px] sm:text-xs font-black uppercase px-4 py-1 rounded-bl-2xl shadow-md flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
              <span>{isEs ? 'RECOMENDADO' : 'RECOMENDADO'}</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white/20 text-white flex items-center justify-center font-bold text-lg shrink-0">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold text-teal-200 uppercase tracking-wider block">SOLUCIÓN INTELIGENTE</span>
                  <h3 className="font-fredoka text-xl font-extrabold text-white">
                    Pack Fiesta Lista + 10 Bonos
                  </h3>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-4 border border-white/20">
                <span className="text-xs font-bold text-teal-200 block">✨ Inversión única con 80% OFF:</span>
                <div className="flex items-baseline gap-2">
                  <span className="font-fredoka text-3xl sm:text-4xl font-black text-yellow-300">
                    ${PRICING_CONFIG.baseUsdPromo.toFixed(2)} USD
                  </span>
                  <span className="text-xs line-through text-teal-200 font-bold">
                    ${PRICING_CONFIG.baseUsdRegular.toFixed(2)} USD
                  </span>
                </div>
                <p className="text-[11px] text-teal-100 mt-1 font-medium">
                  {isEs ? 'Pago único y acceso vitalicio para todos los cumpleaños de tus hijos o negocio.' : 'Pagamento único com acesso vitalício para todas as festas.'}
                </p>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-teal-50 font-medium pt-2">
                <li className="flex items-start gap-2.5">
                  <span className="text-yellow-300 font-bold shrink-0">✓</span>
                  <span>{isEs ? '+10.000 Plantillas 100% listas y medidas exactas para recortar y armar.' : '+10.000 Modelos prontos com linhas de corte e vinco exatas.'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-yellow-300 font-bold shrink-0">✓</span>
                  <span>{isEs ? 'Suite de 5 Herramientas IA (Generador de Invitaciones, Textos y Temas).' : '5 Ferramentas com IA (Gerador de Textos, Temas e Ideias).'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-yellow-300 font-bold shrink-0">✓</span>
                  <span>{isEs ? 'Calculadora de Ganancias que te dice exactamente cuánto cobrar por cada kit.' : 'Calculadora de Lucro que diz exatamente quanto cobrar por kit.'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-yellow-300 font-bold shrink-0">✓</span>
                  <span>{isEs ? '10 Bonos VIP de regalo (Cake toppers, libritos, sublimación, etc.).' : '10 Bônus VIP de presente (Topos de bolo, livrinhos, sublimação, etc.).'}</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-teal-400/40 space-y-2">
              <button
                onClick={onBuyClick}
                className="w-full py-4 px-4 bg-yellow-300 hover:bg-yellow-400 text-slate-950 font-fredoka font-black text-sm sm:text-base uppercase rounded-2xl shadow-xl transition transform hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer border-2 border-white/60"
              >
                <span>{isEs ? `¡QUIERO EL PACK POR $${PRICING_CONFIG.baseUsdPromo.toFixed(2)} USD!` : `QUERO O PACK POR $${PRICING_CONFIG.baseUsdPromo.toFixed(2)} USD!`}</span>
                <ArrowRight className="w-5 h-5 stroke-[3]" />
              </button>
              <div className="text-center">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-teal-200 bg-white/10 px-3 py-1 rounded-full">
                  <Globe className="w-3.5 h-3.5 text-yellow-300" />
                  <span>{isEs ? 'Pagamento en tu moneda local al momento del checkout' : 'Pagamento na sua moeda local no checkout'}</span>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
