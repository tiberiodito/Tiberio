/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TopAnnouncementBar } from './components/TopAnnouncementBar';
import { SalesHeader } from './components/SalesHeader';
import { StickyDeliverableBar } from './components/StickyDeliverableBar';
import { HeroSection } from './components/HeroSection';
import { MintHighlightBanner } from './components/MintHighlightBanner';
import { ThreeThingsSection } from './components/ThreeThingsSection';
import { StressSection } from './components/StressSection';
import { WhyUseKitSection } from './components/WhyUseKitSection';
import { RealComparisonSection } from './components/RealComparisonSection';
import { TestimonialBanner } from './components/TestimonialBanner';
import { CategoryMarqueeAndGallery } from './components/CategoryMarqueeAndGallery';
import { ThreeStepsSection } from './components/ThreeStepsSection';
import { AiToolsShowcaseSection } from './components/AiToolsShowcaseSection';
import { WaitMoreBanner } from './components/WaitMoreBanner';
import { TenBonusesSection } from './components/TenBonusesSection';
import { OfferRecapSection } from './components/OfferRecapSection';
import { MegaDiscountBanner } from './components/MegaDiscountBanner';
import { CheckoutSection } from './components/CheckoutSection';
import { CustomerReviewsChatSection } from './components/CustomerReviewsChatSection';
import { FAQSection } from './components/FAQSection';
import { FloatingBottomBar } from './components/FloatingBottomBar';
import { CheckoutModal } from './components/CheckoutModal';
import { DeliverablePortalView } from './components/DeliverablePortalView';
import { DemoLockModal, LockedItemInfo } from './components/DemoLockModal';
import { ProducerControlModal } from './components/ProducerControlModal';
import { getCooudCheckoutUrl } from './data/pricingConfig';

const checkUrlMode = (): { isPortal: boolean; isDemo: boolean } => {
  if (typeof window === 'undefined') return { isPortal: false, isDemo: false };
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const viewParam = urlParams.get('view')?.toLowerCase();
    const demoParam = urlParams.get('demo')?.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    const pathname = window.location.pathname.toLowerCase();

    // Se o usuário veio pelo link direto do entregável (destinado aos compradores)
    const isBuyerPortal =
      viewParam === 'portal' ||
      viewParam === 'entregable' ||
      viewParam === 'entregavel' ||
      viewParam === 'acesso' ||
      viewParam === 'vip' ||
      urlParams.get('portal') === '1' ||
      urlParams.get('entregable') === '1' ||
      urlParams.get('entregavel') === '1' ||
      urlParams.get('acesso') === '1' ||
      urlParams.get('vip') === '1' ||
      pathname.endsWith('/portal') ||
      pathname.endsWith('/entregable') ||
      pathname.endsWith('/entregavel');

    const isDemoPortal =
      viewParam === 'demo' ||
      demoParam === '1' ||
      demoParam === 'true' ||
      hash.includes('demo');

    return {
      isPortal: isBuyerPortal || isDemoPortal,
      isDemo: isDemoPortal && !isBuyerPortal,
    };
  } catch {
    return { isPortal: false, isDemo: false };
  }
};

export default function App() {
  const initialMode = checkUrlMode();
  const [currentView, setCurrentView] = useState<'sales' | 'portal'>(() => {
    return initialMode.isPortal ? 'portal' : 'sales';
  });
  const [isPortalDemoMode, setIsPortalDemoMode] = useState<boolean>(() => {
    return initialMode.isDemo;
  });
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [language, setLanguage] = useState<'es' | 'pt'>('es');
  
  // Producer / Admin State (Protected with PIN 3623)
  const [isProducerModalOpen, setIsProducerModalOpen] = useState(false);
  const [isProducerUnlocked, setIsProducerUnlocked] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('pfl_producer_auth') === 'true';
    } catch {
      return false;
    }
  });

  // Check URL parameters on mount and on popstate/hashchange
  useEffect(() => {
    const syncFromUrl = () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        
        // Language check
        const langParam = urlParams.get('lang');
        if (langParam === 'pt') {
          setLanguage('pt');
          setSelectedCurrency('BRL');
        } else if (langParam === 'es') {
          setLanguage('es');
          setSelectedCurrency('USD');
        }

        // View check (?view=portal, ?entregable=1, etc.)
        const mode = checkUrlMode();
        if (mode.isPortal) {
          setCurrentView('portal');
          setIsPortalDemoMode(mode.isDemo);
        } else {
          setCurrentView('sales');
          setIsPortalDemoMode(false);
        }

        // Admin check
        if (urlParams.get('admin') === '1' || urlParams.get('key') === '3623') {
          if (urlParams.get('key') === '3623') {
            setIsProducerUnlocked(true);
            sessionStorage.setItem('pfl_producer_auth', 'true');
          }
          setIsProducerModalOpen(true);
        }
      } catch (e) {
        console.error('Error parsing URL params:', e);
      }
    };

    syncFromUrl();
    window.addEventListener('popstate', syncFromUrl);
    window.addEventListener('hashchange', syncFromUrl);

    return () => {
      window.removeEventListener('popstate', syncFromUrl);
      window.removeEventListener('hashchange', syncFromUrl);
    };
  }, []);

  const handleChangeView = (newView: 'sales' | 'portal', isDemo: boolean = false) => {
    setCurrentView(newView);
    setIsPortalDemoMode(isDemo);
    try {
      const url = new URL(window.location.href);
      if (newView === 'portal') {
        if (isDemo) {
          url.searchParams.set('view', 'demo');
        } else {
          url.searchParams.set('view', 'portal');
        }
      } else {
        url.searchParams.delete('view');
        url.searchParams.delete('demo');
        url.searchParams.delete('portal');
        url.searchParams.delete('entregable');
        url.searchParams.delete('entregavel');
      }
      window.history.pushState({}, '', url.toString());
    } catch {}
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUnlockProducer = () => {
    setIsProducerUnlocked(true);
    try {
      sessionStorage.setItem('pfl_producer_auth', 'true');
    } catch {}
  };

  const handleLockProducer = () => {
    setIsProducerUnlocked(false);
    try {
      sessionStorage.removeItem('pfl_producer_auth');
    } catch {}
    setIsProducerModalOpen(false);
  };
  
  // Estado para modal de bloqueio de demonstração
  const [isLockModalOpen, setIsLockModalOpen] = useState(false);
  const [lockedToolInfo, setLockedToolInfo] = useState<LockedItemInfo | null>(null);

  const isEs = language === 'es';

  const handleOpenBuy = () => {
    // Redireciona diretamente para o checkout oficial da Cooud com UTMs
    window.location.href = getCooudCheckoutUrl();
  };

  const handleExploreDeliverable = () => {
    // Quando o visitante clica no botão "Ver Demonstração / Ver por dentro" na página de vendas, abre em modo demonstração
    handleChangeView('portal', true);
  };

  const handleOpenTool = (toolId: string) => {
    if (toolId === 'portal') {
      handleChangeView('portal');
      return;
    }

    const toolNamesMap: Record<string, { title: string; type: string }> = {
      'ai-assistant': {
        title: isEs ? 'Asistente de Ideas con Inteligencia Artificial' : 'Assistente de Ideias com IA',
        type: isEs ? 'Inteligencia Artificial VIP' : 'Inteligência Artificial VIP',
      },
      'paper': {
        title: isEs ? 'Calculadora de Papeles y Hojas' : 'Calculadora de Papéis e Folhas',
        type: isEs ? 'Herramienta VIP' : 'Ferramenta VIP',
      },
      'pricing': {
        title: isEs ? 'Calculadora de Precios y Ganancia' : 'Calculadora de Preços e Lucro',
        type: isEs ? 'Herramienta VIP' : 'Ferramenta VIP',
      },
      'checklist': {
        title: isEs ? 'Organizador de Fiestas & Checklist' : 'Organizador de Festas & Checklist',
        type: isEs ? 'Herramienta VIP' : 'Ferramenta VIP',
      },
      'videos': {
        title: isEs ? '10 Video Tutoriales de Armado y Canva' : '10 Tutoriais em Vídeo de Montagem e Canva',
        type: isEs ? 'Clases en Video' : 'Aulas em Vídeo',
      },
      'guide-pdf': {
        title: isEs ? 'Guía PDF de Impresión y Gramajes' : 'Guia PDF de Impressão e Gramaturas',
        type: isEs ? 'Manual VIP' : 'Manual VIP',
      },
    };

    const toolInfo = toolNamesMap[toolId] || {
      title: isEs ? 'Herramienta Interactiva VIP' : 'Ferramenta Interativa VIP',
      type: isEs ? 'Herramienta Protegida' : 'Ferramenta Protegida',
    };

    setLockedToolInfo(toolInfo);
    setIsLockModalOpen(true);
  };

  if (currentView === 'portal') {
    return (
      <>
        <DeliverablePortalView
          onBackToSales={() => {
            handleChangeView('sales');
          }}
          language={language}
          onToggleLanguage={() => setLanguage(language === 'es' ? 'pt' : 'es')}
          isProducerUnlocked={isProducerUnlocked}
          onOpenProducerAccess={() => setIsProducerModalOpen(true)}
          isDemoMode={isPortalDemoMode}
        />

        {/* Modal de Controle do Produtor (Protegido por PIN 3623) */}
        <ProducerControlModal
          isOpen={isProducerModalOpen}
          onClose={() => setIsProducerModalOpen(false)}
          language={language}
          onLanguageChange={(lang) => {
            setLanguage(lang);
            setSelectedCurrency(lang === 'pt' ? 'BRL' : 'USD');
          }}
          selectedCurrency={selectedCurrency}
          onCurrencyChange={setSelectedCurrency}
          currentView={currentView}
          onViewChange={handleChangeView}
          isUnlocked={isProducerUnlocked}
          onUnlockSuccess={handleUnlockProducer}
          onLock={handleLockProducer}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#fef7f9] text-slate-800 font-outfit selection:bg-pink-300 selection:text-pink-900 pb-20">
      {/* 1. Top Announcement Bar (Barra Vermelha 1: Desconto + Escassez + Contador Fixo) */}
      <TopAnnouncementBar
        language={language}
        isProducerUnlocked={isProducerUnlocked}
        onOpenProducerModal={() => setIsProducerModalOpen(true)}
      />

      {/* 1.1 Sales Header (Barra Branca: Logo + Pack Fiesta Lista + Oferta) - Rola para cima */}
      <SalesHeader
        language={language}
      />

      {/* 1.2 Sticky Deliverable Bar (Barra Vermelha 2: Botão de Destaque Ver Entregables em Vivo Fixo) */}
      <StickyDeliverableBar
        language={language}
        onExploreDeliverable={handleExploreDeliverable}
      />

      {/* 2. Hero Section com Botão de Destaque para Espiar o Entregável */}
      <HeroSection
        onBuyClick={handleOpenBuy}
        onExploreDeliverable={handleExploreDeliverable}
        language={language}
      />

      {/* 2.1 ⭐ FERRAMENTAS DE IA E CALCULADORAS NO TOPO (Diferencial Imediato) */}
      <AiToolsShowcaseSection
        onOpenTool={handleOpenTool}
        language={language}
      />

      {/* 3. Mint Highlight Banner */}
      <MintHighlightBanner />

      {/* 4. 3 Things You'll Achieve */}
      <ThreeThingsSection />

      {/* 5. Party Stress Section */}
      <StressSection />

      {/* 6. Why Use This Party Kit Grid */}
      <WhyUseKitSection />

      {/* 7. Real Comparison (Hacerlo Sola vs. Pack Fiesta Lista) */}
      <RealComparisonSection
        onBuyClick={handleOpenBuy}
        language={language}
      />

      {/* 8. Real Testimonial Banner */}
      <TestimonialBanner />

      {/* 9. Marquee & Gallery Showcase */}
      <CategoryMarqueeAndGallery />

      {/* 10. 3 Simple Steps Section */}
      <ThreeStepsSection />

      {/* 12. Wait... There's More Banner */}
      <WaitMoreBanner />

      {/* 13. 10 Free Bonuses Section */}
      <TenBonusesSection />

      {/* 14. Offer Value Recap */}
      <OfferRecapSection />

      {/* 15. Mega Discount 81% Banner */}
      <MegaDiscountBanner onBuyClick={handleOpenBuy} />

      {/* 16. Product Purchase & Checkout Widget com Moeda Local */}
      <CheckoutSection
        onBuyClick={handleOpenBuy}
        selectedCurrency={selectedCurrency}
        onCurrencyChange={setSelectedCurrency}
      />

      {/* 17. Real Customer Reviews & DM Chat Proof */}
      <CustomerReviewsChatSection />

      {/* 18. FAQ Accordion & Contact */}
      <FAQSection language={language} />

      {/* Footer copyright notice & Link discreto do Produtor */}
      <footer className="bg-white border-t border-slate-200 py-8 px-4 text-center text-xs text-slate-400 space-y-2">
        <p className="font-fredoka text-slate-600 font-extrabold text-sm uppercase">
          PACK FIESTA LISTA © {new Date().getFullYear()} - {language === 'es' ? 'TODOS LOS DERECHOS RESERVADOS' : 'TODOS OS DIREITOS RESERVADOS'}
        </p>
        <p>Página de alta conversión diseñada con fidelidad total al diseño original.</p>
        <p className="text-[10px] text-slate-400">Canva® es una marca registrada. Este kit incluye archivos compatibles 100% gratuitos.</p>
        
        {/* Link Discreto de Acesso do Produtor */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setIsProducerModalOpen(true)}
            className="text-[11px] text-slate-400 hover:text-purple-600 transition inline-flex items-center gap-1 cursor-pointer underline decoration-dotted"
            title="Acesso Exclusivo do Produtor (PIN 3623)"
          >
            <span>⚙️</span>
            <span>Acesso do Produtor</span>
          </button>
        </div>
      </footer>

      {/* Floating Bottom Convert Bar */}
      <FloatingBottomBar
        onBuyClick={handleOpenBuy}
        selectedCurrency={selectedCurrency}
      />

      {/* Interactive Checkout Modal */}
      <CheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedCurrency={selectedCurrency}
      />

      {/* Modal de Bloqueio de Demonstração para Ferramentas */}
      <DemoLockModal
        isOpen={isLockModalOpen}
        onClose={() => setIsLockModalOpen(false)}
        onUnlock={() => {
          setIsLockModalOpen(false);
          handleOpenBuy();
        }}
        language={language}
        resourceItem={lockedToolInfo}
      />

      {/* Modal de Controle do Produtor (Protegido por PIN 3623) */}
      <ProducerControlModal
        isOpen={isProducerModalOpen}
        onClose={() => setIsProducerModalOpen(false)}
        language={language}
        onLanguageChange={(lang) => {
          setLanguage(lang);
          setSelectedCurrency(lang === 'pt' ? 'BRL' : 'USD');
        }}
        selectedCurrency={selectedCurrency}
        onCurrencyChange={setSelectedCurrency}
        currentView={currentView}
        onViewChange={handleChangeView}
        isUnlocked={isProducerUnlocked}
        onUnlockSuccess={handleUnlockProducer}
        onLock={handleLockProducer}
      />
    </div>
  );
}
