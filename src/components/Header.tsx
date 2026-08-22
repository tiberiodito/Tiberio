import React, { useState, useRef } from 'react';
import { 
  Sparkles, 
  Search, 
  Heart, 
  Calculator, 
  CalendarCheck, 
  Bot, 
  Share2, 
  Video,
  Languages,
  Crown,
  Gift,
  FileText,
  DollarSign,
  X,
  KeyRound,
  Unlock,
  Lock
} from 'lucide-react';
import logoImg from '../assets/images/pack_fiesta_logo_vector_1787315893546.jpg';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  favoritesCount: number;
  showFavoritesOnly: boolean;
  onToggleFavorites: () => void;
  onOpenVideos: () => void;
  onOpenCalculator: () => void;
  onOpenPricingCalculator: () => void;
  onOpenPlanner: () => void;
  onOpenAIAssistant: () => void;
  onOpenDeliveryTool: () => void;
  onOpenPrintableGuide: () => void;
  onOpenSalesPage?: () => void;
  onOpenVipExpansions?: () => void;
  isVipUnlocked?: boolean;
  language: 'es' | 'pt';
  onToggleLanguage: () => void;
  isCreatorMode: boolean;
  onLogoClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  favoritesCount,
  showFavoritesOnly,
  onToggleFavorites,
  onOpenVideos,
  onOpenCalculator,
  onOpenPricingCalculator,
  onOpenPlanner,
  onOpenAIAssistant,
  onOpenDeliveryTool,
  onOpenPrintableGuide,
  onOpenSalesPage,
  onOpenVipExpansions,
  isVipUnlocked = false,
  language,
  onToggleLanguage,
  isCreatorMode,
  onLogoClick,
}) => {
  const isEs = language === 'es';
  const [isDesktopFocused, setIsDesktopFocused] = useState(false);
  const [isMobileFocused, setIsMobileFocused] = useState(false);
  const desktopInputRef = useRef<HTMLInputElement>(null);
  const mobileInputRef = useRef<HTMLInputElement>(null);

  const scrollToCatalog = () => {
    const el = document.getElementById('catalog-heading');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-pink-100 shadow-sm">
      
      {/* Top Colorful Festivity Ticker */}
      <div className="bg-gradient-to-r from-teal-500 via-pink-500 via-purple-500 to-amber-400 text-white text-[11px] font-extrabold py-1 px-4 text-center tracking-wide flex items-center justify-center gap-2 shadow-2xs">
        <Crown className="w-3.5 h-3.5 fill-amber-300 text-amber-200 animate-bounce" />
        <span>
          {isEs 
            ? '🎈 ¡Bienvenida a tu Portal Oficial de Plantillas Canva y Recuerdos de Fiesta!'
            : '🎈 Bem-vinda ao seu Portal Oficial de Moldes Canva e Lembrancinhas de Festa!'}
        </span>
        <Sparkles className="w-3.5 h-3.5 text-yellow-200 hidden sm:inline" />
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-2 sm:gap-4">
          
          {/* Logo & Brand Identity (Triple Click opens Creator Mode) */}
          <div 
            onClick={onLogoClick}
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group shrink-0 select-none"
            title={isCreatorMode ? (isEs ? 'Modo Creador Activo' : 'Modo Produtor Ativo') : undefined}
          >
            <div className="relative">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden shadow-md shadow-pink-200/60 border-2 border-pink-200 bg-amber-50 group-hover:scale-105 transition duration-300">
                <img 
                  src={logoImg} 
                  alt="Pack Fiesta Lista Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
            </div>
            
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-lg sm:text-xl tracking-tight bg-gradient-to-r from-pink-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                  Pack Fiesta Lista
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-teal-100 text-teal-800 border border-teal-200">
                  100% CANVA
                </span>
                {isCreatorMode && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-purple-100 text-purple-800 border border-purple-300 animate-pulse">
                    PRODUTOR
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-500 font-bold hidden md:flex items-center gap-1">
                <span className="text-amber-500">👑</span>
                {isEs ? 'Portal de Entregables VIP & 18 Bonos' : 'Portal de Entregáveis VIP & 18 Bônus'}
              </p>
            </div>
          </div>

          {/* Search Bar (Desktop - Prominently Highlighted & Generous Size) */}
          <div className="flex-1 max-w-md xl:max-w-xl hidden lg:block mx-4">
            <div 
              id="header-search-container"
              onClick={() => desktopInputRef.current?.focus()}
              className={`relative flex items-center rounded-2xl transition-all duration-300 cursor-text ${
                isDesktopFocused || searchQuery
                  ? 'ring-4 ring-pink-400/70 border-2 border-pink-500 bg-white shadow-xl shadow-pink-200/80'
                  : 'border-2 border-pink-200/90 bg-pink-50/70 hover:bg-white hover:border-pink-400 shadow-xs'
              }`}
            >
              <button
                type="button"
                id="search-icon-btn-desktop"
                onClick={(e) => {
                  e.stopPropagation();
                  desktopInputRef.current?.focus();
                  scrollToCatalog();
                }}
                className={`pl-3.5 pr-2 py-2 flex items-center justify-center transition-all cursor-pointer ${
                  isDesktopFocused || searchQuery 
                    ? 'text-pink-600 scale-110' 
                    : 'text-pink-500 hover:text-pink-700'
                }`}
                title={isEs ? 'Buscar moldes' : 'Pesquisar moldes'}
              >
                <Search className={`w-5 h-5 transition-all ${isDesktopFocused || searchQuery ? 'stroke-[2.8]' : 'stroke-[2.2]'}`} />
              </button>
              
              <input
                ref={desktopInputRef}
                id="search-input-header"
                type="text"
                value={searchQuery}
                onFocus={() => setIsDesktopFocused(true)}
                onBlur={() => setIsDesktopFocused(false)}
                onChange={(e) => {
                  onSearchChange(e.target.value);
                  if (e.target.value.length === 1) scrollToCatalog();
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') scrollToCatalog();
                }}
                placeholder={isEs ? 'Buscar cajitas, letras 3D, toppers, bonos...' : 'Buscar caixinhas, topos, letras 3D, bônus...'}
                className="w-full py-2 pr-3 text-sm text-slate-900 font-semibold bg-transparent focus:outline-none placeholder:text-slate-400 placeholder:font-normal"
              />
              
              {searchQuery && (
                <button
                  id="clear-search-btn"
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSearchChange('');
                    desktopInputRef.current?.focus();
                  }}
                  className="mr-3 p-1 rounded-full bg-pink-100 hover:bg-pink-200 text-pink-700 text-xs font-bold transition cursor-pointer active:scale-95 shrink-0"
                  title={isEs ? 'Limpiar búsqueda' : 'Limpar pesquisa'}
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Desktop Right Quick Actions (Sales Page, Favorites & Creator Tools) */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            {/* VIP Expansions Button */}
            {onOpenVipExpansions && (
              <button
                id="header-vip-expansions-btn"
                onClick={onOpenVipExpansions}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-black rounded-2xl transition cursor-pointer active:scale-95 shadow-md ${
                  isVipUnlocked
                    ? 'bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 text-slate-950 border-2 border-amber-400 shadow-amber-200'
                    : 'bg-gradient-to-r from-purple-800 via-indigo-800 to-purple-900 text-white border-2 border-purple-400/80 shadow-purple-200 hover:scale-[1.02]'
                }`}
                title={isEs ? 'Módulos VIP & Expansiones (Order Bumps)' : 'Módulos VIP & Expansões'}
              >
                {isVipUnlocked ? (
                  <Crown className="w-4 h-4 fill-slate-950 text-slate-950" />
                ) : (
                  <KeyRound className="w-4 h-4 text-amber-300" />
                )}
                <span className="font-extrabold whitespace-nowrap">
                  {isVipUnlocked 
                    ? (isEs ? '💎 Módulos VIP' : '💎 Módulos VIP')
                    : (isEs ? '💎 Expansiones VIP' : '💎 Expansões VIP')}
                </span>
                <span className={`text-[10px] font-black px-1.5 py-0.2 rounded-full ${
                  isVipUnlocked ? 'bg-slate-950 text-amber-300' : 'bg-amber-400 text-slate-950'
                }`}>
                  {isVipUnlocked ? '✓' : '4 Packs'}
                </span>
              </button>
            )}

            {/* Sales Page Switcher Button */}
            {onOpenSalesPage && (
              <button
                id="header-sales-page-btn"
                onClick={onOpenSalesPage}
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-black text-white bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 hover:from-pink-500 hover:to-rose-500 rounded-2xl transition cursor-pointer active:scale-95 shadow-md shadow-pink-200"
                title={isEs ? 'Ver Página de Ventas (Anuncios)' : 'Ver Página de Vendas (Anúncios)'}
              >
                <Gift className="w-4 h-4" />
                <span className="font-extrabold whitespace-nowrap">
                  {isEs ? 'Página de Ventas' : 'Página de Vendas'}
                </span>
              </button>
            )}

            {/* Favorites Toggle */}
            <button
              id="header-favorites-btn"
              onClick={onToggleFavorites}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-2xl border-2 transition relative cursor-pointer active:scale-95 shadow-2xs hover:shadow-sm ${
                showFavoritesOnly
                  ? 'bg-pink-600 text-white border-pink-600 shadow-md shadow-pink-200'
                  : 'bg-rose-50 text-pink-700 border-pink-200 hover:bg-pink-100 hover:border-pink-300'
              }`}
              title={isEs ? 'Ver Favoritos Guardados' : 'Ver Meus Favoritos'}
            >
              <Heart className={`w-4 h-4 shrink-0 ${showFavoritesOnly ? 'fill-white stroke-[2.5]' : 'fill-pink-500 stroke-[2.5]'}`} />
              <span className="font-extrabold text-xs whitespace-nowrap">
                {isEs ? 'Favoritos' : 'Favoritos'}
              </span>
              <span className={`text-[10px] font-black px-1.5 py-0.5 rounded-full ${
                showFavoritesOnly 
                  ? 'bg-white text-pink-700' 
                  : favoritesCount > 0 
                    ? 'bg-pink-600 text-white' 
                    : 'bg-pink-200 text-pink-800'
              }`}>
                {favoritesCount}
              </span>
            </button>

            {/* Language Toggle (Only for Creator/Admin Mode) */}
            {isCreatorMode && (
              <button
                id="header-lang-toggle-btn"
                onClick={onToggleLanguage}
                className="flex items-center gap-1 px-2.5 py-2 text-xs font-black text-slate-700 bg-slate-100 hover:bg-slate-200 border-2 border-slate-200 rounded-2xl transition cursor-pointer active:scale-95 animate-in fade-in"
                title={isEs ? 'Cambiar a Português / Español' : 'Cambiar a Português / Español'}
              >
                <Languages className="w-3.5 h-3.5 text-slate-600" />
                <span>{isEs ? 'ES' : 'PT'}</span>
              </button>
            )}

            {/* Creator / Export Tool (Only visible in Creator/Admin Mode) */}
            {isCreatorMode && (
              <button
                id="header-delivery-tool-btn"
                onClick={onOpenDeliveryTool}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-black text-purple-950 bg-gradient-to-r from-purple-200 to-pink-200 hover:from-purple-300 hover:to-pink-300 border-2 border-purple-400 rounded-2xl transition cursor-pointer active:scale-95 shadow-sm shadow-purple-200"
                title={isEs ? 'Modo Creador / Exportar Entregables' : 'Modo Produtor / Exportar Entregáveis'}
              >
                <Share2 className="w-3.5 h-3.5 text-purple-900 stroke-[2.5]" />
                <span className="hidden xl:inline">{isEs ? 'Entregables' : 'Área Produtor'}</span>
              </button>
            )}
          </div>

          {/* Mobile & Tablet Right Controls (Language & Favorites Quick Access) */}
          <div className="flex lg:hidden items-center gap-1.5 shrink-0">
            {/* Mobile VIP Expansions Button */}
            {onOpenVipExpansions && (
              <button
                id="mobile-header-vip-btn"
                onClick={onOpenVipExpansions}
                className={`flex items-center gap-1 px-2.5 py-2 rounded-xl border-2 transition relative cursor-pointer active:scale-95 ${
                  isVipUnlocked
                    ? 'bg-amber-400 text-slate-950 border-amber-500 font-black'
                    : 'bg-purple-900 text-white border-purple-400 font-bold'
                }`}
                title={isEs ? 'Módulos VIP' : 'Módulos VIP'}
              >
                <Crown className={`w-3.5 h-3.5 shrink-0 ${isVipUnlocked ? 'fill-slate-950' : 'text-amber-300'}`} />
                <span className="text-[10px] font-black">{isVipUnlocked ? 'VIP ✓' : 'VIP'}</span>
              </button>
            )}

            {/* Mobile Favorites Toggle */}
            <button
              id="mobile-header-favorites-btn"
              onClick={onToggleFavorites}
              className={`flex items-center gap-1 px-2.5 py-2 rounded-xl border-2 transition relative cursor-pointer active:scale-95 ${
                showFavoritesOnly
                  ? 'bg-pink-600 text-white border-pink-600'
                  : 'bg-rose-50 text-pink-700 border-pink-200'
              }`}
              title={isEs ? 'Favoritos' : 'Favoritos'}
            >
              <Heart className={`w-4 h-4 shrink-0 ${showFavoritesOnly ? 'fill-white stroke-[2.5]' : 'fill-pink-500 stroke-[2.5]'}`} />
              <span className={`text-[10px] font-black px-1.5 py-0.2 rounded-full ${
                showFavoritesOnly 
                  ? 'bg-white text-pink-700' 
                  : favoritesCount > 0 
                    ? 'bg-pink-600 text-white' 
                    : 'bg-pink-200 text-pink-800'
              }`}>
                {favoritesCount}
              </span>
            </button>

            {/* Mobile Language Toggle (Only for Creator/Admin Mode) */}
            {isCreatorMode && (
              <button
                id="mobile-header-lang-toggle-btn"
                onClick={onToggleLanguage}
                className="flex items-center gap-1 px-2.5 py-2 text-xs font-black text-slate-700 bg-slate-100 border-2 border-slate-200 rounded-xl transition cursor-pointer active:scale-95 animate-in fade-in"
              >
                <Languages className="w-3.5 h-3.5 text-slate-600" />
                <span>{isEs ? 'ES' : 'PT'}</span>
              </button>
            )}

            {/* Mobile Creator Tool (If unlocked) */}
            {isCreatorMode && (
              <button
                id="mobile-header-delivery-tool-btn"
                onClick={onOpenDeliveryTool}
                className="p-2 text-purple-950 bg-purple-200 border-2 border-purple-400 rounded-xl transition cursor-pointer active:scale-95"
                title={isEs ? 'Modo Creador' : 'Modo Produtor'}
              >
                <Share2 className="w-3.5 h-3.5 text-purple-900 stroke-[2.5]" />
              </button>
            )}
          </div>

        </div>

        {/* 🌟 Desktop 2nd Row: Dedicated VIP Tools & Calculators Toolbar */}
        <div className="hidden lg:flex items-center justify-between py-2 border-t border-pink-100/80 gap-2">
          
          <div className="flex items-center gap-1.5 text-xs text-pink-700 font-extrabold shrink-0">
            <span className="bg-pink-100 text-pink-700 text-[10px] uppercase font-black px-2.5 py-0.5 rounded-full border border-pink-200">
              {isEs ? '✨ HERRAMIENTAS & CALCULADORAS VIP' : '✨ FERRAMENTAS & CALCULADORAS VIP'}
            </span>
          </div>

          <div className="flex items-center justify-end flex-wrap gap-2">
            {/* 1. Pricing Calculator Button (High-conversion Emerald) */}
            <button
              id="header-pricing-btn"
              onClick={onOpenPricingCalculator}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-black text-emerald-950 bg-emerald-50 hover:bg-emerald-100 border-2 border-emerald-300 rounded-xl transition cursor-pointer active:scale-95 shadow-2xs hover:shadow-sm"
              title={isEs ? 'Calculadora de Precio y Ganancia' : 'Calculadora de Preço de Venda & Lucro'}
            >
              <div className="w-5 h-5 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
                <DollarSign className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span className="font-extrabold whitespace-nowrap">
                {isEs ? 'Precios & Ganancia' : 'Preço & Lucro'}
              </span>
            </button>

            {/* 2. AI Assistant Button (Highlighted Amber) */}
            <button
              id="header-ai-assistant-btn"
              onClick={onOpenAIAssistant}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-black text-amber-950 bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-500 rounded-xl transition shadow-2xs hover:shadow-sm active:scale-95 cursor-pointer border-2 border-amber-400"
              title={isEs ? 'Asistente IA de Ideas Mágicas' : 'Assistente IA de Ideias'}
            >
              <div className="w-5 h-5 rounded-lg bg-white/40 flex items-center justify-center shrink-0">
                <Bot className="w-3.5 h-3.5 text-amber-900 stroke-[2.5]" />
              </div>
              <span className="font-extrabold whitespace-nowrap">
                {isEs ? 'Ideas con IA' : 'Ideias com IA'}
              </span>
            </button>

            {/* 3. Paper Calculator Button (Highlighted Turquoise) */}
            <button
              id="header-calculator-btn"
              onClick={onOpenCalculator}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-black text-teal-950 bg-teal-50 hover:bg-teal-100 border-2 border-teal-300 rounded-xl transition cursor-pointer active:scale-95 shadow-2xs hover:shadow-sm"
              title={isEs ? 'Simulador de Papeles e Impresión' : 'Simulador de Papéis & Impressão'}
            >
              <div className="w-5 h-5 rounded-lg bg-teal-500 text-white flex items-center justify-center shrink-0 shadow-2xs">
                <Calculator className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span className="font-extrabold whitespace-nowrap">
                {isEs ? 'Guía de Papel' : 'Guia de Papel'}
              </span>
            </button>

            {/* 4. Party Planner / Checklist Button (Highlighted Purple) */}
            <button
              id="header-planner-btn"
              onClick={onOpenPlanner}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-black text-purple-950 bg-purple-50 hover:bg-purple-100 border-2 border-purple-300 rounded-xl transition cursor-pointer active:scale-95 shadow-2xs hover:shadow-sm"
              title={isEs ? 'Organizador y Checklist de Fiesta' : 'Organizador da Festa'}
            >
              <div className="w-5 h-5 rounded-lg bg-purple-500 text-white flex items-center justify-center shrink-0 shadow-2xs">
                <CalendarCheck className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span className="font-extrabold whitespace-nowrap">
                {isEs ? 'Checklist' : 'Checklist'}
              </span>
            </button>

            {/* 5. Video Tutorials Button (Highlighted Pink) */}
            <button
              id="header-videos-btn"
              onClick={onOpenVideos}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-black text-pink-950 bg-pink-50 hover:bg-pink-100 border-2 border-pink-300 rounded-xl transition cursor-pointer active:scale-95 shadow-2xs hover:shadow-sm"
              title={isEs ? 'Ver 10 Video Tutoriales' : 'Ver 10 Tutoriais em Vídeo'}
            >
              <div className="w-5 h-5 rounded-lg bg-pink-500 text-white flex items-center justify-center shrink-0 shadow-2xs">
                <Video className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span className="font-extrabold whitespace-nowrap">
                {isEs ? 'Videos' : 'Vídeos'}
              </span>
            </button>

            {/* 6. Printable Guide PDF Button */}
            <button
              id="header-printable-guide-btn"
              onClick={onOpenPrintableGuide}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-black text-rose-950 bg-rose-50 hover:bg-rose-100 border-2 border-rose-300 rounded-xl transition cursor-pointer active:scale-95 shadow-2xs hover:shadow-sm"
              title={isEs ? 'Descargar Guía de Papeles en PDF' : 'Baixar Guia em PDF / Imprimir'}
            >
              <div className="w-5 h-5 rounded-lg bg-rose-500 text-white flex items-center justify-center shrink-0 shadow-2xs">
                <FileText className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span className="font-extrabold whitespace-nowrap">
                {isEs ? 'Guía PDF' : 'Guia PDF'}
              </span>
            </button>
          </div>

        </div>

        {/* Mobile & Tablet Tools (Organized in balanced 3x2 grid so all 6 tools are 100% visible) */}
        <div className="lg:hidden pt-2 pb-2.5 border-t border-pink-100/80 space-y-1.5">
          
          {/* Row 1: Top 3 Tools */}
          <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-3">
            {/* 1. Pricing Calculator Button */}
            <button
              id="mobile-tool-pricing-btn"
              onClick={onOpenPricingCalculator}
              className="flex items-center justify-center gap-1 px-1.5 py-1.5 text-[11px] font-black text-emerald-950 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl transition active:scale-95 shadow-2xs"
            >
              <DollarSign className="w-3.5 h-3.5 text-emerald-700 shrink-0 stroke-[2.5]" />
              <span className="truncate">{isEs ? 'Precios' : 'Preços & Lucro'}</span>
            </button>

            {/* 2. Paper Simulator Button */}
            <button
              id="mobile-tool-calc-btn"
              onClick={onOpenCalculator}
              className="flex items-center justify-center gap-1 px-1.5 py-1.5 text-[11px] font-black text-teal-950 bg-teal-50 hover:bg-teal-100 border border-teal-300 rounded-xl transition active:scale-95"
            >
              <Calculator className="w-3.5 h-3.5 text-teal-700 shrink-0 stroke-[2.5]" />
              <span className="truncate">{isEs ? 'Guía Papel' : 'Guia Papel'}</span>
            </button>

            {/* 3. AI Assistant Button */}
            <button
              id="mobile-tool-ai-btn"
              onClick={onOpenAIAssistant}
              className="flex items-center justify-center gap-1 px-1.5 py-1.5 text-[11px] font-black text-amber-950 bg-gradient-to-r from-amber-300 to-yellow-400 rounded-xl transition active:scale-95 border border-amber-400 shadow-2xs"
            >
              <Bot className="w-3.5 h-3.5 text-amber-900 shrink-0 stroke-[2.5]" />
              <span className="truncate">{isEs ? 'Ideas IA' : 'Ideias IA'}</span>
            </button>
          </div>

          {/* Row 2: Bottom 3 Tools */}
          <div className="grid grid-cols-3 gap-1.5">
            {/* 4. Planner / Checklist Button */}
            <button
              id="mobile-tool-planner-btn"
              onClick={onOpenPlanner}
              className="flex items-center justify-center gap-1 px-1.5 py-1.5 text-[11px] font-black text-purple-950 bg-purple-50 hover:bg-purple-100 border border-purple-300 rounded-xl transition active:scale-95"
            >
              <CalendarCheck className="w-3.5 h-3.5 text-purple-700 shrink-0 stroke-[2.5]" />
              <span className="truncate">{isEs ? 'Checklist' : 'Checklist'}</span>
            </button>

            {/* 5. Videos Button */}
            <button
              id="mobile-tool-videos-btn"
              onClick={onOpenVideos}
              className="flex items-center justify-center gap-1 px-1.5 py-1.5 text-[11px] font-black text-pink-950 bg-pink-50 hover:bg-pink-100 border border-pink-300 rounded-xl transition active:scale-95"
            >
              <Video className="w-3.5 h-3.5 text-pink-700 shrink-0 stroke-[2.5]" />
              <span className="truncate">{isEs ? 'Tutoriales' : 'Vídeos'}</span>
            </button>

            {/* 6. Printable PDF Button */}
            <button
              id="mobile-tool-pdf-btn"
              onClick={onOpenPrintableGuide}
              className="flex items-center justify-center gap-1 px-1.5 py-1.5 text-[11px] font-black text-rose-950 bg-rose-50 hover:bg-rose-100 border border-rose-300 rounded-xl transition active:scale-95"
            >
              <FileText className="w-3.5 h-3.5 text-rose-700 shrink-0 stroke-[2.5]" />
              <span className="truncate">{isEs ? 'Guía PDF' : 'Guia PDF'}</span>
            </button>
          </div>

        </div>

        {/* Mobile & Tablet Search Bar (Highlighted & Interactive) */}
        <div className="pb-2.5 lg:hidden">
          <div 
            id="mobile-search-container"
            onClick={() => mobileInputRef.current?.focus()}
            className={`relative flex items-center rounded-2xl transition-all duration-300 cursor-text ${
              isMobileFocused || searchQuery
                ? 'ring-4 ring-pink-400/70 border-2 border-pink-500 bg-white shadow-lg shadow-pink-200/60 scale-[1.01]'
                : 'border-2 border-pink-200/90 bg-pink-50/70 hover:bg-white hover:border-pink-400'
            }`}
          >
            <button
              type="button"
              id="search-icon-btn-mobile"
              onClick={(e) => {
                e.stopPropagation();
                mobileInputRef.current?.focus();
                scrollToCatalog();
              }}
              className={`pl-3.5 pr-2.5 py-2.5 flex items-center justify-center transition-all cursor-pointer ${
                isMobileFocused || searchQuery 
                  ? 'text-pink-600 scale-110' 
                  : 'text-pink-500 hover:text-pink-700'
              }`}
              title={isEs ? 'Buscar moldes' : 'Pesquisar moldes'}
            >
              <Search className={`w-5 h-5 transition-all ${isMobileFocused || searchQuery ? 'stroke-[2.8]' : 'stroke-[2.2]'}`} />
            </button>
            
            <input
              ref={mobileInputRef}
              id="search-input-header-mobile"
              type="text"
              value={searchQuery}
              onFocus={() => setIsMobileFocused(true)}
              onBlur={() => setIsMobileFocused(false)}
              onChange={(e) => {
                onSearchChange(e.target.value);
                if (e.target.value.length === 1) scrollToCatalog();
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') scrollToCatalog();
              }}
              placeholder={isEs ? 'Buscar cajitas, letras, toppers, bonos...' : 'Buscar caixinhas, topos, bônus...'}
              className="w-full py-2.5 pr-3 text-sm text-slate-900 font-semibold bg-transparent focus:outline-none placeholder:text-slate-400 placeholder:font-normal"
            />
            
            {searchQuery && (
              <button
                id="clear-search-btn-mobile"
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSearchChange('');
                  mobileInputRef.current?.focus();
                }}
                className="mr-3 p-1 rounded-full bg-pink-100 hover:bg-pink-200 text-pink-700 text-xs font-bold transition cursor-pointer active:scale-95 shrink-0"
                title={isEs ? 'Limpiar búsqueda' : 'Limpar pesquisa'}
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

      </div>
    </header>
  );
};
