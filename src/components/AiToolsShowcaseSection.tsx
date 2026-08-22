import React, { useRef, useState } from 'react';
import { 
  Bot, 
  Calculator, 
  CalendarCheck, 
  Video, 
  FileText, 
  Crown, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft,
  DollarSign
} from 'lucide-react';
import logoImg from '../assets/images/pack_fiesta_logo_vector_1787315893546.jpg';

interface AiToolsShowcaseSectionProps {
  onOpenTool: (toolId: string) => void;
  language: 'es' | 'pt';
}

export const AiToolsShowcaseSection: React.FC<AiToolsShowcaseSectionProps> = ({
  onOpenTool,
  language,
}) => {
  const isEs = language === 'es';
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const tools = [
    {
      id: 'pricing',
      title: isEs ? 'Calculadora de Precios' : 'Calculadora de Preços',
      desc: isEs
        ? 'Calcula el costo exacto de materiales, mano de obra y define tu ganancia ideal para vender.'
        : 'Calcule o custo exato de materiais, mão de obra e defina seu lucro ideal para vender.',
      tag: isEs ? '💰 Lucro & Ventas' : '💰 Lucro & Vendas',
      actionText: isEs ? 'Calcular Precios' : 'Calcular Preços',
      borderColor: 'border-emerald-300 hover:border-emerald-400',
      iconBg: 'bg-[#10b981] text-white',
      arrowHover: 'group-hover:bg-[#10b981] group-hover:text-white',
      icon: DollarSign,
    },
    {
      id: 'ai-assistant',
      title: isEs ? 'Asistente de Ideas con IA' : 'Assistente de Ideias com IA',
      desc: isEs
        ? 'Paletas de colores, temáticas mágicas y textos para invitaciones en segundos.'
        : 'Paletas de cores, temas mágicos e frases para convites em segundos.',
      tag: isEs ? '✨ 100% Mágico' : '✨ 100% Mágico',
      actionText: isEs ? 'Crear Ideas Ahora' : 'Criar Ideias Agora',
      borderColor: 'border-amber-300 hover:border-amber-400',
      iconBg: 'bg-[#f59e0b] text-slate-900',
      arrowHover: 'group-hover:bg-[#f59e0b] group-hover:text-slate-950',
      icon: Bot,
    },
    {
      id: 'paper',
      title: isEs ? 'Calculadora de Papeles' : 'Calculadora de Papéis',
      desc: isEs
        ? 'Aprende qué papel comprar (Glossy, Kraft, Matte) y cuántas hojas imprimir.'
        : 'Saiba qual papel comprar (Glossy, Kraft, Matte) e quantas folhas imprimir.',
      tag: isEs ? '🖨️ Ahorra Dinero' : '🖨️ Economize Dinheiro',
      actionText: isEs ? 'Calcular Papel' : 'Calcular Papel',
      borderColor: 'border-teal-300 hover:border-teal-400',
      iconBg: 'bg-[#0d9488] text-white',
      arrowHover: 'group-hover:bg-[#0d9488] group-hover:text-white',
      icon: Calculator,
    },
    {
      id: 'checklist',
      title: isEs ? 'Organizador & Checklist' : 'Organizador & Checklist',
      desc: isEs
        ? 'Planifica tareas semana a semana para no olvidar ningún detalle de la fiesta.'
        : 'Planeje tarefas semana a semana para não esquecer nenhum detalhe da festa.',
      tag: isEs ? '📅 Paso a Paso' : '📅 Passo a Passo',
      actionText: isEs ? 'Ver Cronograma' : 'Ver Cronograma',
      borderColor: 'border-purple-300 hover:border-purple-400',
      iconBg: 'bg-[#9333ea] text-white',
      arrowHover: 'group-hover:bg-[#9333ea] group-hover:text-white',
      icon: CalendarCheck,
    },
    {
      id: 'videos',
      title: isEs ? '10 Video Tutoriales' : '10 Tutoriais em Vídeo',
      desc: isEs
        ? 'Aprende a editar en Canva, imprimir sin bordes y armar cajitas con tijeras o regla.'
        : 'Aprenda a editar no Canva, imprimir sem bordas e montar caixinhas com tesoura ou régua.',
      tag: isEs ? '🎥 Clases Rápidas' : '🎥 Aulas Rápidas',
      actionText: isEs ? 'Ver Tutoriales' : 'Ver Tutoriais',
      borderColor: 'border-pink-300 hover:border-pink-400',
      iconBg: 'bg-[#ec4899] text-white',
      arrowHover: 'group-hover:bg-[#ec4899] group-hover:text-white',
      icon: Video,
    },
    {
      id: 'guide-pdf',
      title: isEs ? 'Guía PDF de Impresión' : 'Guia PDF de Impressão',
      desc: isEs
        ? 'Manual práctico con tipos de papel, gramajes, corte y trucos de armado paso a paso.'
        : 'Manual prático com tipos de papel, gramaturas, corte e truques de montagem passo a passo.',
      tag: isEs ? '📄 Manual VIP' : '📄 Manual VIP',
      actionText: isEs ? 'Ver Guía PDF' : 'Ver Guia PDF',
      borderColor: 'border-rose-300 hover:border-rose-400',
      iconBg: 'bg-[#ef4444] text-white',
      arrowHover: 'group-hover:bg-[#ef4444] group-hover:text-white',
      icon: FileText,
    },
  ];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth = 270;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), tools.length - 1));
    }
  };

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = 270;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
      });
      setActiveIndex(index);
    }
  };

  const scrollNext = () => {
    const nextIdx = Math.min(activeIndex + 1, tools.length - 1);
    scrollToCard(nextIdx);
  };

  const scrollPrev = () => {
    const prevIdx = Math.max(activeIndex - 1, 0);
    scrollToCard(prevIdx);
  };

  return (
    <section className="py-8 sm:py-12 px-3 sm:px-6 lg:px-8 bg-gradient-to-b from-[#fff5f8] via-white to-[#fff5f8]">
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
        
        {/* Top Navigation Bar - All 6 buttons clearly visible & fully wrapping */}
        <div className="bg-white/95 backdrop-blur-xs rounded-2xl sm:rounded-3xl p-3 sm:p-4 border-2 border-pink-100 shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          
          {/* Logo & Subtitle */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl overflow-hidden shadow-xs shrink-0 border-2 border-pink-200 bg-white">
              <img 
                src={logoImg} 
                alt="Pack Fiesta Lista" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-fredoka font-extrabold text-slate-900 text-xs sm:text-base">
                  Pack Fiesta Lista
                </span>
                <span className="bg-teal-100 text-teal-800 font-black text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">
                  100% CANVA
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium">
                👑 {isEs ? 'Portal de Entregables VIP & 18 Bonos' : 'Portal de Entregáveis VIP & 18 Bônus'}
              </p>
            </div>
          </div>

          {/* Quick Action Navigation Pills (All 6 items visible, wrapping gracefully) */}
          <div className="flex flex-wrap items-center justify-start lg:justify-end gap-1.5 sm:gap-2">
            
            {/* 1. Pricing Calculator Pill */}
            <button
              onClick={() => onOpenTool('pricing')}
              className="bg-[#10b981] hover:bg-emerald-600 text-white font-bold text-[11px] sm:text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 transition cursor-pointer shadow-xs active:scale-95 whitespace-nowrap"
            >
              <DollarSign className="w-3.5 h-3.5" />
              <span>Precios & Ganancia</span>
            </button>

            {/* 2. AI Pill */}
            <button
              onClick={() => onOpenTool('ai-assistant')}
              className="bg-[#f59e0b] hover:bg-amber-500 text-slate-950 font-bold text-[11px] sm:text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 transition cursor-pointer shadow-xs active:scale-95 whitespace-nowrap"
            >
              <Bot className="w-3.5 h-3.5" />
              <span>Ideas IA</span>
            </button>

            {/* 3. Paper Calculator Pill */}
            <button
              onClick={() => onOpenTool('paper')}
              className="bg-[#0d9488] hover:bg-teal-600 text-white font-bold text-[11px] sm:text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 transition cursor-pointer shadow-xs active:scale-95 whitespace-nowrap"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Guía de Papel</span>
            </button>

            {/* 4. Checklist Pill */}
            <button
              onClick={() => onOpenTool('checklist')}
              className="bg-[#9333ea] hover:bg-purple-600 text-white font-bold text-[11px] sm:text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 transition cursor-pointer shadow-xs active:scale-95 whitespace-nowrap"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Checklist</span>
            </button>

            {/* 5. Video Tutorials Pill */}
            <button
              onClick={() => onOpenTool('videos')}
              className="bg-[#ec4899] hover:bg-pink-600 text-white font-bold text-[11px] sm:text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 transition cursor-pointer shadow-xs active:scale-95 whitespace-nowrap"
            >
              <Video className="w-3.5 h-3.5" />
              <span>Videos</span>
            </button>

            {/* 6. PDF Guide Pill */}
            <button
              onClick={() => onOpenTool('guide-pdf')}
              className="bg-[#ef4444] hover:bg-red-600 text-white font-bold text-[11px] sm:text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 transition cursor-pointer shadow-xs active:scale-95 whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Guía PDF</span>
            </button>

          </div>

        </div>

        {/* Main Central Container */}
        <div className="bg-[#fff9fb] rounded-2xl sm:rounded-3xl p-4 sm:p-7 border-2 border-pink-200 shadow-lg relative">
          
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 mb-4 sm:mb-6">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-amber-500 to-pink-500 flex items-center justify-center text-white shadow-sm shrink-0">
                <Crown className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-200 text-amber-200" />
              </div>
              <div>
                <h2 className="font-fredoka text-base sm:text-xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {isEs ? 'Central de Herramientas Exclusivas' : 'Central de Ferramentas Exclusivas'}
                </h2>
                <p className="text-[11px] sm:text-xs text-slate-600 font-medium">
                  {isEs
                    ? '6 asistentes y recursos incluidos para que la fiesta y tu negocio sean un éxito total'
                    : '6 assistentes e recursos inclusos para que a festa e seu negócio sejam um sucesso total'}
                </p>
              </div>
            </div>

            {/* Mobile Navigation Arrows & Desktop Badge */}
            <div className="flex items-center justify-between sm:justify-end gap-2">
              
              {/* Mobile Arrows Controls */}
              <div className="flex lg:hidden items-center gap-1.5 bg-white px-2 py-1 rounded-full border border-pink-200 shadow-2xs">
                <button 
                  onClick={scrollPrev}
                  disabled={activeIndex === 0}
                  aria-label="Anterior"
                  className={`w-6 h-6 rounded-full flex items-center justify-center transition ${activeIndex === 0 ? 'text-slate-300' : 'text-pink-600 bg-pink-50 active:scale-90'}`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-[10px] font-black text-slate-600 px-1">
                  {activeIndex + 1}/{tools.length}
                </span>
                <button 
                  onClick={scrollNext}
                  disabled={activeIndex === tools.length - 1}
                  aria-label="Siguiente"
                  className={`w-6 h-6 rounded-full flex items-center justify-center transition ${activeIndex === tools.length - 1 ? 'text-slate-300' : 'text-pink-600 bg-pink-50 active:scale-90'}`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Desktop Badge */}
              <div className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-black text-pink-600 bg-white px-3 py-1 rounded-full border border-pink-200 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                <span>{isEs ? '6 Recursos Exclusivos' : '6 Recursos Exclusivos'}</span>
              </div>
            </div>
          </div>

          {/* Cards Track with Full Touch & Scroll Support */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            style={{ WebkitOverflowScrolling: 'touch', scrollSnapType: 'x mandatory' }}
            className="flex lg:grid lg:grid-cols-3 xl:grid-cols-6 overflow-x-auto pb-3 lg:pb-0 gap-3 sm:gap-3.5 w-full touch-pan-x"
          >
            {tools.map((tool) => {
              const IconComponent = tool.icon;
              return (
                <div
                  key={tool.id}
                  onClick={() => onOpenTool(tool.id)}
                  style={{ scrollSnapAlign: 'start' }}
                  className={`bg-white rounded-2xl sm:rounded-3xl p-4 border-2 ${tool.borderColor} shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group transform hover:-translate-y-1 w-[78vw] max-w-[260px] lg:w-auto lg:max-w-none shrink-0 lg:shrink`}
                >
                  <div>
                    {/* Top Row: Icon on left, Pill Tag on right */}
                    <div className="flex items-center justify-between gap-1.5 mb-3">
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl ${tool.iconBg} flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300 shrink-0`}>
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                      </div>
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 shrink-0">
                        {tool.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-fredoka text-sm sm:text-[15px] font-extrabold text-slate-900 leading-snug mb-1.5 group-hover:text-pink-600 transition-colors">
                      {tool.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[11px] text-slate-600 leading-relaxed line-clamp-3">
                      {tool.desc}
                    </p>
                  </div>

                  {/* Bottom Action Link */}
                  <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs font-extrabold text-slate-900 group-hover:text-pink-600 transition-colors">
                    <span>{tool.actionText}</span>
                    <div className={`w-6 h-6 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center transition-colors shadow-2xs ${tool.arrowHover}`}>
                      <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Dot Indicators */}
          <div className="flex lg:hidden items-center justify-center gap-1.5 pt-2">
            {tools.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToCard(idx)}
                aria-label={`Ir para recurso ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'w-6 bg-pink-600' : 'w-1.5 bg-pink-200'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
