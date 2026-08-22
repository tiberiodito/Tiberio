import React from 'react';
import { 
  Sparkles, 
  Gift, 
  Video, 
  Clock, 
  CheckCircle2, 
  HelpCircle,
  FolderDown,
  ExternalLink,
  Laptop,
  Mail,
  Box,
  ShoppingBag,
  Cake,
  PartyPopper,
  Crown,
  FileText,
  DollarSign
} from 'lucide-react';
import logoImg from '../assets/images/pack_fiesta_logo_1787101845875.jpg';
import heroImg from '../assets/images/fiesta_mega_mockup_1787102747278.jpg';

interface WelcomeBannerProps {
  language: 'es' | 'pt';
  activeFilter?: string;
  onQuickFilter: (tag: string) => void;
  onOpenVideos: () => void;
  onOpenCalculator: () => void;
  onOpenPricingCalculator?: () => void;
  onOpenPrintableGuide?: () => void;
}

export const WelcomeBanner: React.FC<WelcomeBannerProps> = ({
  language,
  activeFilter = '',
  onQuickFilter,
  onOpenVideos,
  onOpenCalculator,
  onOpenPricingCalculator,
  onOpenPrintableGuide,
}) => {
  const isEs = language === 'es';

  const quickTags = isEs
    ? [
        { id: 'cajitas', label: 'Cajitas Milk', query: 'cajitas' },
        { id: 'toppers', label: 'Cake Toppers', query: 'toppers' },
        { id: 'letras3d', label: 'Letras 3D', query: 'letras 3d' },
        { id: 'papitas', label: 'Bolsa Papitas', query: 'papitas' },
        { id: 'etiquetas', label: 'Etiquetas Escolares', query: 'etiquetas' },
        { id: 'invitaciones', label: 'Invitaciones WhatsApp', query: 'invitaciones' },
        { id: 'libritos', label: 'Libritos Colorear', query: 'colorear' },
      ]
    : [
        { id: 'cajitas', label: 'Caixinhas Milk', query: 'caixinhas' },
        { id: 'toppers', label: 'Topos de Bolo', query: 'topos' },
        { id: 'letras3d', label: 'Letras 3D', query: 'letras 3d' },
        { id: 'papitas', label: 'Sacos de Batatinha', query: 'batatinha' },
        { id: 'etiquetas', label: 'Etiquetas Escolares', query: 'etiquetas' },
        { id: 'invitaciones', label: 'Convites WhatsApp', query: 'convites' },
        { id: 'libritos', label: 'Livros de Colorir', query: 'colorir' },
      ];

  const categoryHighlights = [
    { icon: Mail, label: isEs ? 'Invitaciones Digitales' : 'Convites Digitais', query: 'invitaciones', color: 'bg-pink-100 text-pink-700 border-pink-200 hover:bg-pink-200' },
    { icon: Box, label: isEs ? 'Cajas y Envoltorios' : 'Caixas & Embalagens', query: 'cajitas', color: 'bg-teal-100 text-teal-700 border-teal-200 hover:bg-teal-200' },
    { icon: ShoppingBag, label: isEs ? 'Recuerditos Personalizados' : 'Lembrancinhas', query: 'recuerdos', color: 'bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-200' },
    { icon: Cake, label: isEs ? 'Toppers para Pastel' : 'Topos para Bolo', query: 'toppers', color: 'bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-200' },
    { icon: PartyPopper, label: isEs ? '¡Y Mucho Más!' : 'E Muito Mais!', query: 'todos', color: 'bg-rose-100 text-rose-700 border-rose-200 hover:bg-rose-200' },
  ];

  return (
    <div className="bg-gradient-to-b from-pink-50/70 via-amber-50/40 to-teal-50/20 py-8 border-b border-pink-100/60 relative overflow-hidden">
      
      {/* Playful Floating Confetti Dots */}
      <div className="absolute top-4 left-10 w-3 h-3 rounded-full bg-pink-400 opacity-60 animate-bounce" />
      <div className="absolute top-12 right-20 w-4 h-4 rounded-full bg-amber-400 opacity-50" />
      <div className="absolute bottom-6 left-1/4 w-3 h-3 rounded-full bg-teal-400 opacity-60" />
      <div className="absolute top-1/3 right-1/12 w-2.5 h-2.5 rounded-full bg-purple-400 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Welcome Hero Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-pink-200/80 shadow-lg shadow-pink-100/50 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content Column (8 cols) */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Header Pill */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white text-xs font-black tracking-wide shadow-xs">
                  <Crown className="w-3.5 h-3.5 fill-amber-300 text-amber-200" />
                  <span>{isEs ? '🎈 ¡GRACIAS POR TU COMPRA! PACK OFICIAL' : '🎈 OBRIGADO PELA COMPRA! KIT OFICIAL'}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-semibold bg-slate-100 px-3 py-1 rounded-full">
                  <Clock className="w-3.5 h-3.5 text-teal-600" />
                  <span>{isEs ? 'Acceso de por Vida' : 'Acesso Vitalício'}</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight text-slate-900">
                {isEs ? (
                  <>
                    ¡Bienvenida a tu <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">Pack Fiesta Lista!</span> 🎂✨
                  </>
                ) : (
                  <>
                    Bem-vinda ao seu <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">Kit Festa Pronta!</span> 🎂✨
                  </>
                )}
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {isEs
                  ? 'Estamos muy felices de acompañarte a crear fiestas inolvidables o hacer crecer tu emprendimiento. Aquí tienes acceso inmediato y organizado con 1-clic a todas tus plantillas editables en Canva, moldes de cajitas, topos de pastel y 18 bonos exclusivos.'
                  : 'Estamos muito felizes em te ajudar a criar eventos inesquecíveis ou fazer seu negócio criativo crescer. Acesse todos os seus moldes editáveis no Canva, caixas, topos de bolo e 18 bônus exclusivos com 1 clique.'}
              </p>

              {/* 5 Category Highlights matching Logo banner - Clickable */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                {categoryHighlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={idx}
                      id={`welcome-cat-highlight-${idx}`}
                      onClick={() => onQuickFilter(item.query)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border shadow-2xs cursor-pointer transition active:scale-95 ${item.color}`}
                      title={isEs ? `Filtrar por ${item.label}` : `Filtrar por ${item.label}`}
                    >
                      <Icon className="w-3.5 h-3.5 shrink-0" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Crucial Instructions Cards */}
              <div className="pt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
                
                {/* Canva Free */}
                <div className="flex items-start gap-3 p-3 bg-teal-50/80 border border-teal-200 rounded-2xl">
                  <div className="w-7 h-7 rounded-lg bg-teal-500 text-white flex items-center justify-center shrink-0 shadow-xs font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-teal-950">
                      {isEs ? '100% Canva Gratis' : '100% Canva Grátis'}
                    </h4>
                    <p className="text-[11px] text-teal-800 mt-0.5 leading-snug">
                      {isEs ? 'No necesitas suscripción Pro.' : 'Não precisa pagar Canva Pro.'}
                    </p>
                  </div>
                </div>

                {/* Drive Recommendation */}
                <div className="flex items-start gap-3 p-3 bg-amber-50/80 border border-amber-200 rounded-2xl">
                  <div className="w-7 h-7 rounded-lg bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Laptop className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-amber-950">
                      {isEs ? 'Descargas Drive' : 'Downloads Drive'}
                    </h4>
                    <p className="text-[11px] text-amber-800 mt-0.5 leading-snug">
                      {isEs ? 'Abre los ZIP en tu PC / Laptop.' : 'Baixe os ZIPs no Computador.'}
                    </p>
                  </div>
                </div>

                {/* Lifetime Access */}
                <div className="flex items-start gap-3 p-3 bg-purple-50/80 border border-purple-200 rounded-2xl">
                  <div className="w-7 h-7 rounded-lg bg-purple-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Gift className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-purple-950">
                      {isEs ? 'Sin Vencimiento' : 'Acesso Ilimitado'}
                    </h4>
                    <p className="text-[11px] text-purple-800 mt-0.5 leading-snug">
                      {isEs ? 'Guarda este link y vuelve siempre.' : 'Salve o link nos favoritos.'}
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Visual Image Column (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-gradient-to-tr from-pink-400 via-purple-400 to-teal-400 p-1">
                <img 
                  src={heroImg} 
                  alt="Pack Fiesta Lista Mockup" 
                  className="w-full h-auto rounded-[22px] object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Logo Badge over Hero */}
                <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-2xl bg-white p-1 shadow-xl border-2 border-pink-200 rotate-[-6deg] hover:rotate-0 transition duration-300">
                  <img 
                    src={logoImg} 
                    alt="Logo Badge" 
                    className="w-full h-full object-cover rounded-xl"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-black text-pink-600 shadow-sm">
                  ⭐ +1.500 {isEs ? 'Plantillas' : 'Moldes'}
                </div>
              </div>

              {/* Fast Action Buttons under image */}
              <div className="mt-6 space-y-2 w-full max-w-sm">
                {onOpenPricingCalculator && (
                  <button
                    id="banner-pricing-calculator-btn"
                    onClick={onOpenPricingCalculator}
                    className="w-full py-3 px-4 rounded-2xl text-xs font-black text-emerald-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 border-2 border-emerald-500/80 shadow-lg shadow-emerald-200/80 transition flex items-center justify-center gap-2 cursor-pointer active:scale-95 animate-pulse hover:animate-none"
                  >
                    <DollarSign className="w-4 h-4 text-emerald-950 stroke-[3]" />
                    <span>{isEs ? '💰 Abrir Calculadora de Ganancia (Kits Básico & Luxo)' : '💰 Abrir Calculadora de Lucro (Kits Básico & Luxo)'}</span>
                  </button>
                )}

                <div className="flex flex-col sm:flex-row items-center gap-2 w-full">
                  <button
                    id="banner-watch-videos-btn"
                    onClick={onOpenVideos}
                    className="w-full sm:flex-1 py-2.5 px-3 rounded-2xl text-xs font-extrabold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-md shadow-pink-200 transition flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <Video className="w-3.5 h-3.5" />
                    <span>{isEs ? '10 Videos de Ayuda' : '10 Vídeos de Ajuda'}</span>
                  </button>

                  <button
                    id="banner-paper-guide-btn"
                    onClick={onOpenCalculator}
                    className="w-full sm:flex-1 py-2.5 px-3 rounded-2xl text-xs font-extrabold text-teal-900 bg-teal-100 hover:bg-teal-200 border border-teal-300 transition flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <HelpCircle className="w-3.5 h-3.5 text-teal-700" />
                    <span>{isEs ? '¿Qué Papel Comprar?' : 'Guia de Papéis'}</span>
                  </button>
                </div>
              </div>

              {onOpenPrintableGuide && (
                <button
                  id="banner-printable-guide-btn"
                  onClick={onOpenPrintableGuide}
                  className="mt-2 w-full max-w-sm py-2 px-3 rounded-2xl text-xs font-bold text-rose-800 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                >
                  <FileText className="w-3.5 h-3.5 text-rose-600" />
                  <span>{isEs ? '📄 Descargar Guía Rápida en PDF (Imprimible)' : '📄 Baixar Guia de Bolso em PDF (Imprimir)'}</span>
                </button>
              )}

            </div>

          </div>

          {/* Quick tags row */}
          <div className="mt-6 pt-5 border-t border-pink-100/80 flex flex-wrap items-center gap-2">
            <span className="text-xs font-black text-slate-700 flex items-center gap-1.5 mr-1">
              <Sparkles className="w-4 h-4 text-pink-500 fill-pink-300 animate-pulse" />
              <span>{isEs ? 'Atajos Rápidos:' : 'Atalhos Rápidos:'}</span>
            </span>
            {quickTags.map((tag) => {
              const isActive = activeFilter.toLowerCase() === tag.query.toLowerCase();
              return (
                <button
                  key={tag.id}
                  id={`quick-tag-btn-${tag.id}`}
                  onClick={() => onQuickFilter(tag.query)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all duration-200 cursor-pointer active:scale-95 flex items-center gap-1.5 shadow-2xs ${
                    isActive
                      ? 'bg-pink-600 text-white border-2 border-pink-600 shadow-sm shadow-pink-200 scale-105 font-black'
                      : 'bg-pink-50/70 hover:bg-pink-500 hover:text-white text-slate-700 border border-pink-200/80'
                  }`}
                  title={isEs ? `Ver plantillas de ${tag.label}` : `Ver moldes de ${tag.label}`}
                >
                  <span>{tag.label}</span>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
};
