import React from 'react';
import { 
  Bot, 
  Calculator, 
  CalendarCheck, 
  Video, 
  Sparkles, 
  Crown, 
  ChevronRight,
  Printer,
  DollarSign,
  TrendingUp
} from 'lucide-react';

interface ToolsHubProps {
  language: 'es' | 'pt';
  onOpenAIAssistant: () => void;
  onOpenCalculator: () => void;
  onOpenPricingCalculator: () => void;
  onOpenPlanner: () => void;
  onOpenVideos: () => void;
}

export const ToolsHub: React.FC<ToolsHubProps> = ({
  language,
  onOpenAIAssistant,
  onOpenCalculator,
  onOpenPricingCalculator,
  onOpenPlanner,
  onOpenVideos,
}) => {
  const isEs = language === 'es';

  const tools = [
    {
      id: 'pricing-calc',
      icon: DollarSign,
      title: isEs ? 'Calculadora de Precio & Ganancia' : 'Calculadora de Preço de Venda & Lucro',
      description: isEs
        ? 'Calcula costo de papel, insumos, tu mano de obra y define el precio ideal de venta para fiestas.'
        : 'Calcule o custo de papel, laços, sua mão de obra e descubra quanto cobrar com lucro garantido.',
      badge: isEs ? '💰 Vende con Ganancia' : '💰 Venda com Lucro',
      actionText: isEs ? 'Calcular Precios' : 'Calcular Preço de Venda',
      color: 'from-emerald-500 to-teal-500',
      iconBg: 'bg-gradient-to-tr from-emerald-600 to-teal-500 text-white',
      border: 'border-emerald-300 hover:border-emerald-500',
      bgHover: 'hover:bg-emerald-50/40',
      shadow: 'shadow-emerald-100',
      onClick: onOpenPricingCalculator,
      featured: true
    },
    {
      id: 'paper-simulator',
      icon: Printer,
      title: isEs ? 'Simulador de Papel & Impresión' : 'Simulador de Papéis & Impressão',
      description: isEs
        ? 'Aprende qué papel comprar (Glossy 230g, 115g, Kraft) y cómo calibrar tu impresora sin errores.'
        : 'Saiba qual papel comprar (Glossy 230g, 115g, Kraft) e calibre sua impressora com cores vivas.',
      badge: isEs ? '🖨️ Cero Errores' : '🖨️ Cores Perfeitas',
      actionText: isEs ? 'Abrir Simulador' : 'Abrir Simulador',
      color: 'from-teal-500 to-cyan-500',
      iconBg: 'bg-gradient-to-tr from-teal-600 to-cyan-500 text-white',
      border: 'border-teal-300 hover:border-teal-500',
      bgHover: 'hover:bg-teal-50/40',
      shadow: 'shadow-teal-100',
      onClick: onOpenCalculator,
      featured: true
    },
    {
      id: 'ai-assistant',
      icon: Bot,
      title: isEs ? 'Asistente de Ideas con IA' : 'Assistente de Ideias com IA',
      description: isEs
        ? 'Gera paletas de colores, temáticas mágicas y textos para invitaciones en segundos.'
        : 'Gere paletas de cores, temas infantis e frases para convites em segundos com IA.',
      badge: isEs ? '✨ 100% Mágico' : '✨ Grátis & Ilimitado',
      actionText: isEs ? 'Crear Ideas Ahora' : 'Criar Ideias Agora',
      color: 'from-amber-400 to-yellow-400',
      iconBg: 'bg-gradient-to-tr from-amber-500 to-yellow-400 text-amber-950',
      border: 'border-amber-200 hover:border-amber-400',
      bgHover: 'hover:bg-amber-50/40',
      shadow: 'shadow-amber-100',
      onClick: onOpenAIAssistant,
      featured: false
    },
    {
      id: 'planner',
      icon: CalendarCheck,
      title: isEs ? 'Organizador & Checklist' : 'Organizador & Checklist da Festa',
      description: isEs
        ? 'Planifica tareas semana a semana para que no te falte ningún detalle en la fiesta.'
        : 'Cronograma semana a semana para planejar tudo sem estresse e sem esquecer nada.',
      badge: isEs ? '📅 Paso a Paso' : '📅 Passo a Passo',
      actionText: isEs ? 'Ver Cronograma' : 'Abrir Cronograma',
      color: 'from-purple-500 to-indigo-500',
      iconBg: 'bg-gradient-to-tr from-purple-600 to-indigo-500 text-white',
      border: 'border-purple-200 hover:border-purple-400',
      bgHover: 'hover:bg-purple-50/40',
      shadow: 'shadow-purple-100',
      onClick: onOpenPlanner,
      featured: false
    },
    {
      id: 'videos',
      icon: Video,
      title: isEs ? '10 Video Tutoriales' : '10 Tutoriais em Vídeo',
      description: isEs
        ? 'Aprende a editar en Canva, imprimir sin bordes y armar cajitas con tijeras o regla.'
        : 'Aprenda a editar no Canva, imprimir sem bordas e montar as caixinhas passo a passo.',
      badge: isEs ? '🎥 Clases Rápidas' : '🎥 Aulas Rápidas',
      actionText: isEs ? 'Ver Tutoriales' : 'Assistir Aulas',
      color: 'from-pink-500 to-rose-500',
      iconBg: 'bg-gradient-to-tr from-pink-600 to-rose-500 text-white',
      border: 'border-pink-200 hover:border-pink-400',
      bgHover: 'hover:bg-pink-50/40',
      shadow: 'shadow-pink-100',
      onClick: onOpenVideos,
      featured: false
    },
  ];

  return (
    <section id="tools-hub-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-6">
      
      {/* Tools Container Header */}
      <div className="bg-gradient-to-r from-pink-50/80 via-emerald-50/50 to-teal-50/60 p-6 sm:p-7 rounded-3xl border-2 border-pink-200/80 shadow-sm">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-pink-200/60">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-pink-500 to-amber-400 flex items-center justify-center text-white shadow-xs">
                <Crown className="w-4 h-4 fill-amber-200 text-amber-200" />
              </div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                {isEs ? 'Central de Herramientas Exclusivas' : 'Central de Ferramentas Exclusivas'}
              </h2>
            </div>
            <p className="text-xs text-slate-600 font-medium mt-1">
              {isEs 
                ? 'Todo lo que necesitas para armar recuerdos impecables, calcular precios y triunfar en tus eventos' 
                : 'Tudo o que você precisa para produzir lembrancinhas perfeitas, precificar com lucro e encantar seus clientes'}
            </p>
          </div>

          <span className="inline-flex items-center gap-1 text-xs font-black text-pink-700 bg-white px-3.5 py-1.5 rounded-2xl border border-pink-200 shadow-2xs self-start sm:self-auto">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
            <span>{isEs ? '5 Herramientas VIP Incluidas' : '5 Ferramentas VIP Inclusas'}</span>
          </span>
        </div>

        {/* 5 Highlighted Tool Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <button
                key={tool.id}
                id={`tool-hub-btn-${tool.id}`}
                onClick={tool.onClick}
                className={`p-5 rounded-3xl bg-white border-2 transition-all duration-300 flex flex-col justify-between text-left cursor-pointer group shadow-sm hover:shadow-xl hover:-translate-y-1 ${tool.border} ${tool.bgHover} ${tool.shadow} active:scale-98 relative overflow-hidden`}
              >
                {tool.featured && (
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-emerald-400/10 rounded-full blur-xl pointer-events-none"></div>
                )}

                <div>
                  {/* Card Top: Large Icon Badge & Pill */}
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <div className={`w-12 h-12 rounded-2xl ${tool.iconBg} flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300 shrink-0`}>
                      <Icon className="w-6 h-6 stroke-[2.5]" />
                    </div>
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {tool.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-black text-slate-900 text-sm sm:text-base leading-snug group-hover:text-pink-600 transition">
                    {tool.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {tool.description}
                  </p>
                </div>

                {/* Bottom CTA Bar */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-black text-slate-800 group-hover:text-pink-600 transition">
                  <span className="truncate pr-1">{tool.actionText}</span>
                  <div className="w-7 h-7 rounded-xl bg-slate-100 group-hover:bg-pink-500 group-hover:text-white flex items-center justify-center transition shadow-2xs shrink-0">
                    <ChevronRight className="w-4 h-4 stroke-[3]" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

      </div>

    </section>
  );
};
