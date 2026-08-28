import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { WelcomeBanner } from './WelcomeBanner';
import { QuickStartGuide } from './QuickStartGuide';
import { ToolsHub } from './ToolsHub';
import { ResourceCatalog } from './ResourceCatalog';
import { Footer } from './Footer';
import { DemoLockModal } from './DemoLockModal';
import { AIPartyAssistantModal } from './AIPartyAssistantModal';
import { PaperCalculatorModal } from './PaperCalculatorModal';
import { PartyPricingCalculatorModal } from './PartyPricingCalculatorModal';
import { PartyPlannerModal } from './PartyPlannerModal';
import { VideoTutorialsModal } from './VideoTutorialsModal';
import { PrintableGuideModal } from './PrintableGuideModal';
import { DeliveryGeneratorModal } from './DeliveryGeneratorModal';
import { VipExpansionsSection } from './VipExpansionsSection';
import { VipUnlockModal } from './VipUnlockModal';
import { VIP_SECRET_KEY } from '../data/vipBumpsData';
import { RESOURCES_DATA } from '../data/resources';
import { ResourceItem } from '../types';
import { ArrowLeft, Sparkles, CheckCircle2, ShieldCheck, Gift, KeyRound, Crown } from 'lucide-react';
import { getCooudCheckoutUrl } from '../data/pricingConfig';

interface DeliverablePortalViewProps {
  onBackToSales: () => void;
  language: 'es' | 'pt';
  onToggleLanguage: () => void;
  isProducerUnlocked?: boolean;
  onOpenProducerAccess?: () => void;
  isDemoMode?: boolean;
}

export const DeliverablePortalView: React.FC<DeliverablePortalViewProps> = ({
  onBackToSales,
  language,
  onToggleLanguage,
  isProducerUnlocked = false,
  onOpenProducerAccess,
  isDemoMode = false,
}) => {
  const isEs = language === 'es';

  // Demo Lock Modal State (only active if isDemoMode is true)
  const [isLockModalOpen, setIsLockModalOpen] = useState(false);
  const [lockedResource, setLockedResource] = useState<ResourceItem | null>(null);
  const [lockedInfo, setLockedInfo] = useState<{ title: string; type?: string } | null>(null);

  // VIP Interactive Modals State (100% functional for buyers)
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const [isPaperModalOpen, setIsPaperModalOpen] = useState(false);
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const [isPlannerModalOpen, setIsPlannerModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isPrintGuideModalOpen, setIsPrintGuideModalOpen] = useState(false);
  const [isDeliveryModalOpen, setIsDeliveryModalOpen] = useState(false);

  // VIP Expansions Unlock State (Key: claravip100k)
  const [isVipUnlocked, setIsVipUnlocked] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const vipParam = urlParams.get('vip')?.toLowerCase();
      const keyParam = urlParams.get('key')?.toLowerCase();
      const bumpParam = urlParams.get('bump')?.toLowerCase();
      const orderParam = urlParams.get('orderbump')?.toLowerCase();
      
      const isParamVip = 
        vipParam === VIP_SECRET_KEY.toLowerCase() ||
        keyParam === VIP_SECRET_KEY.toLowerCase() ||
        vipParam === '1' ||
        vipParam === 'true' ||
        bumpParam === '1' ||
        bumpParam === 'true' ||
        orderParam === '1' ||
        orderParam === 'true';

      if (isParamVip) {
        localStorage.setItem('pfl_vip_unlocked', 'true');
        return true;
      }
      return localStorage.getItem('pfl_vip_unlocked') === 'true';
    } catch {
      return false;
    }
  });
  const [isVipModalOpen, setIsVipModalOpen] = useState(false);

  // Search & Catalog Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('pfl_favorites');
      return saved ? JSON.parse(saved) : ['res-canva-main', 'res-letras-3d'];
    } catch {
      return ['res-canva-main', 'res-letras-3d'];
    }
  });
  const [completed, setCompleted] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('pfl_completed');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  // Creator / Producer Mode Trigger
  const [logoClickCount, setLogoClickCount] = useState(0);
  const [isCreatorMode, setIsCreatorMode] = useState(false);

  // Save favorites to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('pfl_favorites', JSON.stringify(favorites));
    } catch {
      // Ignore localStorage errors
    }
  }, [favorites]);

  // Save completed to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('pfl_completed', JSON.stringify(completed));
    } catch {
      // Ignore localStorage errors
    }
  }, [completed]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleCompleted = (id: string) => {
    setCompleted((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleQuickFilter = (tag: string) => {
    if (tag === 'todos') {
      setSearchQuery('');
      setShowFavoritesOnly(false);
    } else {
      setSearchQuery(tag);
      setShowFavoritesOnly(false);
    }
    const el = document.getElementById('resource-catalog-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleLogoClick = () => {
    const newCount = logoClickCount + 1;
    setLogoClickCount(newCount);
    if (newCount >= 3) {
      setIsCreatorMode(true);
      setLogoClickCount(0);
    }
  };

  // Handlers for Tools (Opens real modals if unlocked, or trigger demo lock if in demo mode)
  const handleOpenVideos = () => {
    if (isDemoMode) {
      setLockedResource(null);
      setLockedInfo({
        title: isEs ? '10 Video Tutoriales de Armado y Canva' : '10 Tutoriais em Vídeo de Montagem e Canva',
        type: isEs ? 'Video Tutoriales' : 'Tutoriais em Vídeo'
      });
      setIsLockModalOpen(true);
    } else {
      setIsVideoModalOpen(true);
    }
  };

  const handleOpenCalculator = () => {
    if (isDemoMode) {
      setLockedResource(null);
      setLockedInfo({
        title: isEs ? 'Calculadora de Papeles y Hojas' : 'Calculadora de Papéis e Folhas',
        type: isEs ? 'Herramienta VIP' : 'Ferramenta VIP'
      });
      setIsLockModalOpen(true);
    } else {
      setIsPaperModalOpen(true);
    }
  };

  const handleOpenPricingCalculator = () => {
    if (isDemoMode) {
      setLockedResource(null);
      setLockedInfo({
        title: isEs ? 'Calculadora de Precios y Ganancia' : 'Calculadora de Preços e Lucro',
        type: isEs ? 'Herramienta VIP' : 'Ferramenta VIP'
      });
      setIsLockModalOpen(true);
    } else {
      setIsPricingModalOpen(true);
    }
  };

  const handleOpenPlanner = () => {
    if (isDemoMode) {
      setLockedResource(null);
      setLockedInfo({
        title: isEs ? 'Organizador de Fiestas & Checklist' : 'Organizador de Festas & Checklist',
        type: isEs ? 'Herramienta VIP' : 'Ferramenta VIP'
      });
      setIsLockModalOpen(true);
    } else {
      setIsPlannerModalOpen(true);
    }
  };

  const handleOpenAIAssistant = () => {
    if (isDemoMode) {
      setLockedResource(null);
      setLockedInfo({
        title: isEs ? 'Asistente de Ideas con Inteligencia Artificial' : 'Assistente de Ideias com IA',
        type: isEs ? 'Inteligencia Artificial' : 'Inteligência Artificial'
      });
      setIsLockModalOpen(true);
    } else {
      setIsAIModalOpen(true);
    }
  };

  const handleOpenPrintableGuide = () => {
    if (isDemoMode) {
      setLockedResource(null);
      setLockedInfo({
        title: isEs ? 'Guía PDF de Impresión y Gramajes' : 'Guia PDF de Impressão e Gramaturas',
        type: isEs ? 'Manual PDF' : 'Manual PDF'
      });
      setIsLockModalOpen(true);
    } else {
      setIsPrintGuideModalOpen(true);
    }
  };

  const handleOpenDeliveryTool = () => {
    setIsDeliveryModalOpen(true);
  };

  const handleTriggerLockResource = (item: ResourceItem) => {
    setLockedResource(item);
    setLockedInfo({
      title: item.title,
      type: isEs ? 'Molde & Recurso Editable' : 'Molde & Recurso Editável'
    });
    setIsLockModalOpen(true);
  };

  // Dynamic Sales Page URL detection (supports partner links like ?sales=https://... or ?back=https://...)
  const getCustomSalesUrl = (): string | null => {
    if (typeof window === 'undefined') return null;
    try {
      const params = new URLSearchParams(window.location.search);
      const url = params.get('sales') || params.get('back') || params.get('ref') || params.get('redirect');
      if (url && (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('/'))) {
        return url;
      }
      return null;
    } catch {
      return null;
    }
  };

  const handleBackToSales = () => {
    onBackToSales();
  };

  const handleUnlockAndBuy = () => {
    setIsLockModalOpen(false);
    const checkoutUrl = getCooudCheckoutUrl();
    try {
      const newWin = window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
      if (!newWin || newWin.closed || typeof newWin.closed === 'undefined') {
        window.location.href = checkoutUrl;
      }
    } catch {
      window.location.href = checkoutUrl;
    }
  };

  const handleOpenVipExpansions = () => {
    const el = document.getElementById('vip-expansions-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      setIsVipModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#fef7f9] text-slate-800 font-sans selection:bg-pink-300 selection:text-pink-900 animate-in fade-in duration-300 pb-20">
      
      {/* Top Buyer VIP Welcome Header (When Unlocked - 100% Clean Members Area) */}
      {!isDemoMode && (
        <div className="bg-gradient-to-r from-purple-900 via-pink-900 to-slate-900 text-white px-4 py-2 text-xs font-bold flex items-center justify-between gap-3 border-b-2 border-pink-400/40 shadow-sm sticky top-0 z-50">
          <div className="flex items-center gap-2 max-w-4xl mx-auto md:mx-0">
            <span className="bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-950 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-2xs shrink-0">
              <Sparkles className="w-3 h-3 fill-slate-950" />
              {isEs ? 'ACCESO VIP OFICIAL' : 'ACESSO VIP OFICIAL'}
            </span>
            <span className="text-pink-100 font-semibold text-xs truncate">
              {isEs 
                ? '🎉 ¡Bienvenida a tu Portal Exclusivo! Todas tus plantillas y bonos están listos para usar.' 
                : '🎉 Bem-vinda ao seu Portal Exclusivo! Todos os seus moldes e bônus estão liberados.'}
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-medium text-pink-200">
            <button
              onClick={handleBackToSales}
              className="inline-flex items-center gap-1 bg-pink-500/30 hover:bg-pink-500/50 text-white border border-pink-300/40 px-2.5 py-0.5 rounded-full cursor-pointer transition text-[11px] font-bold active:scale-95"
              title={isEs ? 'Volver a la Página de Ventas' : 'Voltar para a Página de Vendas'}
            >
              <ArrowLeft className="w-3 h-3" />
              <span>{isEs ? 'Página de Ventas' : 'Página de Vendas'}</span>
            </button>
            <button
              onClick={handleOpenVipExpansions}
              className="inline-flex items-center gap-1 bg-amber-400/20 hover:bg-amber-400/40 text-amber-300 border border-amber-400/40 px-2.5 py-0.5 rounded-full cursor-pointer transition text-[11px] font-black"
            >
              <Crown className="w-3 h-3 fill-amber-300" />
              <span>{isVipUnlocked ? (isEs ? '💎 Módulos VIP Activos' : '💎 Módulos VIP Ativos') : (isEs ? '💎 Expansiones VIP' : '💎 Expansões VIP')}</span>
            </button>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline">{isEs ? 'Soporte: info@clarisideas.com' : 'Suporte: info@clarisideas.com'}</span>
          </div>
        </div>
      )}

      {/* Top Demo Notification Bar (Only shown if isDemoMode is explicitly enabled) */}
      {isDemoMode && (
        <div className="bg-slate-900 text-white px-4 py-3 text-xs font-bold flex flex-col md:flex-row md:items-center justify-between gap-3 border-b-2 border-amber-400/60 shadow-lg sticky top-0 z-50">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-black shrink-0">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-amber-400 text-slate-950 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider">
                  {isEs ? 'MODO DEMOSTRACIÓN' : 'MODO DEMONSTRAÇÃO'}
                </span>
                <span className="text-white font-extrabold text-xs">
                  {isEs ? 'Vista de Muestra del Entregable' : 'Visualização de Amostra do Entregável'}
                </span>
              </div>
              <p className="text-slate-300 text-[11px] font-medium hidden sm:block mt-0.5">
                {isEs 
                  ? 'Los enlaces de edición en Canva, carpetas de Drive y descargas se activan tras adquirir el Pack.' 
                  : 'Os links de edição no Canva, pastas do Drive e downloads são liberados após adquirir o Pack.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleUnlockAndBuy}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-black text-xs transition-all shadow-md shadow-emerald-500/20 cursor-pointer active:scale-95"
            >
              <Gift className="w-3.5 h-3.5" />
              <span>{isEs ? 'Comprar Pack Oficial' : 'Comprar Pack Oficial'}</span>
            </button>

            <button
              onClick={handleBackToSales}
              className="flex items-center gap-1 px-3 py-2 rounded-xl bg-white/10 hover:bg-white text-white hover:text-slate-900 transition-all font-bold text-xs cursor-pointer border border-white/20 active:scale-95"
              title={isEs ? 'Volver a la Tienda / Oferta' : 'Voltar para a Loja / Oferta'}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{isEs ? 'Volver' : 'Voltar'}</span>
            </button>
          </div>
        </div>
      )}

      {/* 1. Header Navigation */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        favoritesCount={favorites.length}
        showFavoritesOnly={showFavoritesOnly}
        onToggleFavorites={() => setShowFavoritesOnly(!showFavoritesOnly)}
        onOpenVideos={handleOpenVideos}
        onOpenCalculator={handleOpenCalculator}
        onOpenPricingCalculator={handleOpenPricingCalculator}
        onOpenPlanner={handleOpenPlanner}
        onOpenAIAssistant={handleOpenAIAssistant}
        onOpenDeliveryTool={handleOpenDeliveryTool}
        onOpenPrintableGuide={handleOpenPrintableGuide}
        onOpenSalesPage={handleBackToSales}
        onOpenVipExpansions={handleOpenVipExpansions}
        isVipUnlocked={isVipUnlocked}
        language={language}
        onToggleLanguage={onToggleLanguage}
        isCreatorMode={isProducerUnlocked || isCreatorMode}
        onLogoClick={handleLogoClick}
      />

      {/* 2. Welcome Hero Banner */}
      <WelcomeBanner
        language={language}
        activeFilter={searchQuery}
        onQuickFilter={handleQuickFilter}
        onOpenVideos={handleOpenVideos}
        onOpenCalculator={handleOpenCalculator}
        onOpenPricingCalculator={handleOpenPricingCalculator}
        onOpenPrintableGuide={handleOpenPrintableGuide}
      />

      {/* 3. Quick Start 4-Steps Guide */}
      <QuickStartGuide language={language} />

      {/* 4. Interactive Tools Hub (5 VIP Tools) */}
      <ToolsHub
        language={language}
        onOpenAIAssistant={handleOpenAIAssistant}
        onOpenCalculator={handleOpenCalculator}
        onOpenPricingCalculator={handleOpenPricingCalculator}
        onOpenPlanner={handleOpenPlanner}
        onOpenVideos={handleOpenVideos}
      />

      {/* 5. VIP Expansions Section (4 Order Bumps - Unlocked with Key or Order Bump) */}
      <VipExpansionsSection
        language={language}
        isVipUnlocked={isVipUnlocked}
        onOpenUnlockModal={() => setIsVipModalOpen(true)}
      />

      {/* 6. Main Resources & Bonus Catalog (100% UNLOCKED FOR BUYERS) */}
      <ResourceCatalog
        resources={RESOURCES_DATA}
        searchQuery={searchQuery}
        onClearSearch={() => setSearchQuery('')}
        favorites={favorites}
        completed={completed}
        onToggleFavorite={toggleFavorite}
        onToggleCompleted={toggleCompleted}
        showFavoritesOnly={showFavoritesOnly}
        onToggleFavoritesOnly={() => setShowFavoritesOnly(!showFavoritesOnly)}
        language={language}
        isDemoMode={isDemoMode}
        onTriggerLockModal={handleTriggerLockResource}
      />

      {/* 7. Footer */}
      <Footer
        language={language}
        onOpenVideos={handleOpenVideos}
        onOpenCalculator={handleOpenCalculator}
        onOpenPricingCalculator={handleOpenPricingCalculator}
        onOpenPlanner={handleOpenPlanner}
        onOpenProducerAccess={onOpenProducerAccess}
      />

      {/* VIP Unlock Modal */}
      <VipUnlockModal
        isOpen={isVipModalOpen}
        onClose={() => setIsVipModalOpen(false)}
        language={language}
        isUnlocked={isVipUnlocked}
        onUnlockSuccess={() => {
          setIsVipUnlocked(true);
          try {
            localStorage.setItem('pfl_vip_unlocked', 'true');
          } catch {
            // ignore
          }
          const el = document.getElementById('vip-expansions-section');
          if (el) {
            setTimeout(() => {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 300);
          }
        }}
      />

      {/* VIP Interactive Modals */}
      <AIPartyAssistantModal
        isOpen={isAIModalOpen}
        onClose={() => setIsAIModalOpen(false)}
        language={language}
        onSelectPackItem={(query) => {
          setSearchQuery(query);
          setIsAIModalOpen(false);
          const el = document.getElementById('resource-catalog-section');
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }}
      />

      <PaperCalculatorModal
        isOpen={isPaperModalOpen}
        onClose={() => setIsPaperModalOpen(false)}
        language={language}
      />

      <PartyPricingCalculatorModal
        isOpen={isPricingModalOpen}
        onClose={() => setIsPricingModalOpen(false)}
        language={language}
      />

      <PartyPlannerModal
        isOpen={isPlannerModalOpen}
        onClose={() => setIsPlannerModalOpen(false)}
        language={language}
      />

      <VideoTutorialsModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        language={language}
      />

      <PrintableGuideModal
        isOpen={isPrintGuideModalOpen}
        onClose={() => setIsPrintGuideModalOpen(false)}
        language={language}
      />

      <DeliveryGeneratorModal
        isOpen={isDeliveryModalOpen}
        onClose={() => setIsDeliveryModalOpen(false)}
        language={language}
      />

      {/* Demo Lock Alert Modal (Only used if explicitly in demo mode) */}
      <DemoLockModal
        isOpen={isLockModalOpen}
        onClose={() => setIsLockModalOpen(false)}
        onUnlock={handleUnlockAndBuy}
        language={language}
        resourceItem={lockedResource || lockedInfo}
      />
    </div>
  );
};
