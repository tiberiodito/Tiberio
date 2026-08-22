import React, { useState, useEffect } from 'react';
import { 
  Lock, 
  KeyRound, 
  ShieldCheck, 
  Sparkles, 
  Check, 
  Copy, 
  Globe, 
  Eye, 
  ExternalLink, 
  X, 
  LogOut, 
  HelpCircle,
  Smartphone,
  Share2,
  DollarSign,
  AlertCircle
} from 'lucide-react';
import { OFFICIAL_CHECKOUT_URL } from '../data/pricingConfig';
import cooudProductCoverImg from '../assets/images/cooud_product_cover_1787415556963.jpg';
import checkoutBundleBannerImg from '../assets/images/checkout_bundle_banner_1787417162329.jpg';
import ad1 from '../assets/images/ad_creative_bundle_premium_1787432258750.jpg';
import ad2 from '../assets/images/ad_creative_emprende_1787429654281.jpg';
import ad3 from '../assets/images/ad_creative_canva_mobile_hd_1787432270466.jpg';

interface ProducerControlModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'es' | 'pt';
  onLanguageChange: (lang: 'es' | 'pt') => void;
  selectedCurrency: string;
  onCurrencyChange: (currency: string) => void;
  currentView: 'sales' | 'portal';
  onViewChange: (view: 'sales' | 'portal') => void;
  isUnlocked: boolean;
  onUnlockSuccess: () => void;
  onLock: () => void;
  onOpenAdsGallery?: () => void;
}

const PRODUCER_PIN = '3623';

export const ProducerControlModal: React.FC<ProducerControlModalProps> = ({
  isOpen,
  onClose,
  language,
  onLanguageChange,
  selectedCurrency,
  onCurrencyChange,
  currentView,
  onViewChange,
  isUnlocked,
  onUnlockSuccess,
  onLock,
  onOpenAdsGallery,
}) => {
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setPinInput('');
      setPinError(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleVerifyPin = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (pinInput.trim() === PRODUCER_PIN) {
      setPinError(false);
      onUnlockSuccess();
    } else {
      setPinError(true);
    }
  };

  const getFullUrl = (params: string) => {
    const baseUrl = window.location.origin + window.location.pathname;
    return `${baseUrl}${params}`;
  };

  const handleCopyLink = (params: string, key: string) => {
    const full = getFullUrl(params);
    navigator.clipboard.writeText(full);
    setCopiedLink(key);
    setTimeout(() => setCopiedLink(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-5 sm:p-6 shadow-2xl border-2 border-purple-200 relative overflow-hidden max-h-[92vh] flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Decorative accent */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
          title="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* --- STATE 1: PIN AUTHENTICATION FORM --- */}
        {!isUnlocked ? (
          <div className="py-4 text-center">
            
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-200">
              <KeyRound className="w-8 h-8 stroke-[2.5]" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-black uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Área Restrita do Produtor</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-fredoka">
              Digite a Senha de Acesso
            </h3>

            <p className="text-xs text-slate-500 max-w-xs mx-auto mt-1 mb-6">
              Acesso exclusivo para gerenciar idiomas, links de campanhas e alternar páginas.
            </p>

            <form onSubmit={handleVerifyPin} className="max-w-xs mx-auto space-y-4">
              <div className="relative">
                <input
                  type="password"
                  maxLength={10}
                  autoFocus
                  value={pinInput}
                  onChange={(e) => {
                    setPinInput(e.target.value);
                    setPinError(false);
                  }}
                  placeholder="Digite sua senha (PIN)"
                  className={`w-full text-center text-2xl tracking-widest font-black py-3 px-4 rounded-2xl border-2 transition focus:outline-none ${
                    pinError
                      ? 'border-red-500 bg-red-50 text-red-700 focus:ring-4 focus:ring-red-200'
                      : 'border-purple-300 bg-purple-50/50 text-slate-900 focus:border-purple-600 focus:ring-4 focus:ring-purple-100'
                  }`}
                />
              </div>

              {pinError && (
                <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-red-600 animate-bounce">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Senha incorreta! Tente novamente.</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-black text-sm shadow-md shadow-purple-300 active:scale-95 transition cursor-pointer"
              >
                Acessar Painel do Produtor 🔓
              </button>
            </form>

            <p className="text-[11px] text-slate-400 mt-6">
              💡 Dica: Seus visitantes finais não têm acesso a este menu.
            </p>
          </div>
        ) : (

          /* --- STATE 2: PRODUCER CONTROL PANEL --- */
          <div className="overflow-y-auto pr-1 space-y-5">
            
            {/* Header info */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                  👑
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900 font-fredoka flex items-center gap-1.5">
                    <span>Painel de Controle do Produtor</span>
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                      Ativo 3623
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500">Configure idioma da página e links de tráfego</p>
                </div>
              </div>

              <button
                onClick={onLock}
                className="flex items-center gap-1 text-[11px] font-bold text-rose-600 hover:text-rose-800 p-1.5 rounded-lg hover:bg-rose-50 transition cursor-pointer"
                title="Bloquear painel"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sair</span>
              </button>
            </div>

            {/* Section 1: Alternador de Idioma Ativo */}
            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
              <label className="block text-xs font-black text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-purple-600" />
                <span>Alternar Idioma Atual na Tela:</span>
              </label>
              
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => onLanguageChange('es')}
                  className={`p-2.5 rounded-xl border-2 font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer ${
                    language === 'es'
                      ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-purple-300'
                  }`}
                >
                  <span className="text-base">🇪🇸</span>
                  <div className="text-left">
                    <p className="leading-none">Espanhol (LATAM)</p>
                    <span className={`text-[10px] ${language === 'es' ? 'text-purple-200' : 'text-slate-400'}`}>Oferta U$6,90</span>
                  </div>
                  {language === 'es' && <Check className="w-4 h-4 shrink-0 ml-auto" />}
                </button>

                <button
                  type="button"
                  onClick={() => onLanguageChange('pt')}
                  className={`p-2.5 rounded-xl border-2 font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer ${
                    language === 'pt'
                      ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-purple-300'
                  }`}
                >
                  <span className="text-base">🇧🇷</span>
                  <div className="text-left">
                    <p className="leading-none">Português (Brasil)</p>
                    <span className={`text-[10px] ${language === 'pt' ? 'text-purple-200' : 'text-slate-400'}`}>Oferta R$ 37,90</span>
                  </div>
                  {language === 'pt' && <Check className="w-4 h-4 shrink-0 ml-auto" />}
                </button>
              </div>
            </div>

            {/* Section 2: Alternar Visualização (Página de Vendas vs Entregável) */}
            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
              <label className="block text-xs font-black text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-pink-600" />
                <span>Visualizar na Tela:</span>
              </label>
              
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    onViewChange('sales');
                    onClose();
                  }}
                  className={`p-2.5 rounded-xl border-2 font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer ${
                    currentView === 'sales'
                      ? 'bg-pink-600 text-white border-pink-600 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-pink-300'
                  }`}
                >
                  <span>🛍️</span>
                  <span>Página de Vendas</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onViewChange('portal');
                    onClose();
                  }}
                  className={`p-2.5 rounded-xl border-2 font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer ${
                    currentView === 'portal'
                      ? 'bg-pink-600 text-white border-pink-600 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-pink-300'
                  }`}
                >
                  <span>📦</span>
                  <span>Portal de Entregáveis</span>
                </button>
              </div>
            </div>

            {/* Section 3: Links Diretos para suas Campanhas & Entrega */}
            <div className="p-3.5 bg-purple-50/70 rounded-2xl border border-purple-200 space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-black text-purple-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Share2 className="w-3.5 h-3.5 text-purple-700" />
                  <span>Links Diretos Prontos para Uso:</span>
                </label>
                <span className="text-[10px] font-bold text-purple-700 bg-purple-200/70 px-2 py-0.5 rounded-full">
                  1-Clique Copiar
                </span>
              </div>

              {/* Link 0: Link Exclusivo do Entregável (Para os Compradores - Liberado) */}
              <div className="p-2.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl flex items-center justify-between gap-2 shadow-sm">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs">🎁</span>
                    <span className="text-xs font-black truncate">Link do Entregável (100% Liberado p/ Clientes)</span>
                    <span className="text-[9px] bg-amber-400 text-slate-900 font-extrabold px-1.5 py-0.2 rounded-full uppercase shrink-0">VIP</span>
                  </div>
                  <p className="text-[11px] text-pink-100 font-mono truncate">
                    {getFullUrl('?view=portal')}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopyLink('?view=portal', 'portal')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black transition cursor-pointer flex items-center gap-1 shrink-0 ${
                    copiedLink === 'portal'
                      ? 'bg-emerald-500 text-white'
                      : 'bg-white text-purple-900 hover:bg-pink-50 shadow-xs active:scale-95'
                  }`}
                >
                  {copiedLink === 'portal' ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar Link</span>
                    </>
                  )}
                </button>
              </div>

              {/* Link 0.5: Link Modo Demonstração (Para Amostras) */}
              <div className="p-2.5 bg-amber-50 rounded-xl border border-amber-300 flex items-center justify-between gap-2 shadow-2xs">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs">🔒</span>
                    <span className="text-xs font-black text-amber-900 truncate">Link Modo Demonstração (Amostra Bloqueada)</span>
                  </div>
                  <p className="text-[11px] text-amber-700 font-mono truncate">
                    {getFullUrl('?view=demo')}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopyLink('?view=demo', 'demo')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black transition cursor-pointer flex items-center gap-1 shrink-0 ${
                    copiedLink === 'demo'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-amber-500 hover:bg-amber-600 text-white shadow-xs active:scale-95'
                  }`}
                >
                  {copiedLink === 'demo' ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar Link</span>
                    </>
                  )}
                </button>
              </div>

              {/* Link 1: Brasil (Página de Vendas) */}
              <div className="p-2.5 bg-white rounded-xl border border-purple-200 flex items-center justify-between gap-2 shadow-2xs">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs">🇧🇷</span>
                    <span className="text-xs font-black text-slate-900 truncate">Página de Vendas Brasil (Português)</span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-mono truncate">
                    {getFullUrl('?lang=pt')}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopyLink('?lang=pt', 'pt')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black transition cursor-pointer flex items-center gap-1 shrink-0 ${
                    copiedLink === 'pt'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-purple-600 hover:bg-purple-700 text-white shadow-xs active:scale-95'
                  }`}
                >
                  {copiedLink === 'pt' ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar Link</span>
                    </>
                  )}
                </button>
              </div>

              {/* Link 2: Hispano (Página de Vendas) */}
              <div className="p-2.5 bg-white rounded-xl border border-purple-200 flex items-center justify-between gap-2 shadow-2xs">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs">🇪🇸</span>
                    <span className="text-xs font-black text-slate-900 truncate">Página de Vendas LATAM (Espanhol)</span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-mono truncate">
                    {getFullUrl('?lang=es')}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopyLink('?lang=es', 'es')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black transition cursor-pointer flex items-center gap-1 shrink-0 ${
                    copiedLink === 'es'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-purple-600 hover:bg-purple-700 text-white shadow-xs active:scale-95'
                  }`}
                >
                  {copiedLink === 'es' ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar Link</span>
                    </>
                  )}
                </button>
              </div>

              {/* Link 2.5: Link Oficial de Checkout Cooud */}
              <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-300 flex items-center justify-between gap-2 shadow-2xs">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs">💳</span>
                    <span className="text-xs font-black text-emerald-950 truncate">Checkout Oficial Cooud</span>
                    <span className="text-[9px] bg-emerald-600 text-white font-extrabold px-1.5 py-0.2 rounded-full uppercase shrink-0">Pago</span>
                  </div>
                  <p className="text-[11px] text-emerald-800 font-mono truncate">
                    {OFFICIAL_CHECKOUT_URL}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(OFFICIAL_CHECKOUT_URL);
                    setCopiedLink('checkout');
                    setTimeout(() => setCopiedLink(null), 2500);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black transition cursor-pointer flex items-center gap-1 shrink-0 ${
                    copiedLink === 'checkout'
                      ? 'bg-emerald-700 text-white'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs active:scale-95'
                  }`}
                >
                  {copiedLink === 'checkout' ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar Link</span>
                    </>
                  )}
                </button>
              </div>

              {/* Link 3: Acesso Direto de Admin com Senha salva */}
              <div className="p-2.5 bg-white rounded-xl border border-purple-200 flex items-center justify-between gap-2 shadow-2xs">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs">⚙️</span>
                    <span className="text-xs font-black text-slate-900 truncate">Link com Painel Aberto</span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-mono truncate">
                    {getFullUrl('?admin=1')}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopyLink('?admin=1', 'admin')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black transition cursor-pointer flex items-center gap-1 shrink-0 ${
                    copiedLink === 'admin'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-purple-600 hover:bg-purple-700 text-white shadow-xs active:scale-95'
                  }`}
                >
                  {copiedLink === 'admin' ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar Link</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Section 4: Capas e Banners Oficiais */}
            <div className="space-y-3">
              {/* Capa Principal Cooud */}
              <div className="p-3.5 bg-pink-50/80 rounded-2xl border border-pink-200 space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-black text-pink-950 uppercase tracking-wider flex items-center gap-1.5">
                    <span>🎨</span>
                    <span>Capa do Produto (Box 3D):</span>
                  </label>
                  <a
                    href={cooudProductCoverImg}
                    download="capa-produto-fiesta-lista.jpg"
                    className="text-[10px] font-bold text-white bg-pink-600 hover:bg-pink-700 px-2.5 py-1 rounded-full flex items-center gap-1 transition shadow-xs"
                  >
                    <span>⬇️ Baixar Imagem</span>
                  </a>
                </div>

                <div className="relative rounded-xl overflow-hidden border-2 border-pink-300 shadow-sm group">
                  <img
                    src={cooudProductCoverImg}
                    alt="Capa do Produto Mega Pack Fiesta Lista"
                    className="w-full h-44 object-contain bg-white"
                  />
                  <a
                    href={cooudProductCoverImg}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-2 right-2 bg-slate-900/80 hover:bg-slate-900 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 backdrop-blur-xs transition"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Abrir em Tamanho Real</span>
                  </a>
                </div>
              </div>

              {/* Banner Completo do Checkout */}
              <div className="p-3.5 bg-purple-50/80 rounded-2xl border border-purple-200 space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-black text-purple-950 uppercase tracking-wider flex items-center gap-1.5">
                    <span>🚀</span>
                    <span>Banner Visual de Checkout (Tudo Incluso):</span>
                  </label>
                  <a
                    href={checkoutBundleBannerImg}
                    download="banner-checkout-bundle.jpg"
                    className="text-[10px] font-bold text-white bg-purple-600 hover:bg-purple-700 px-2.5 py-1 rounded-full flex items-center gap-1 transition shadow-xs"
                  >
                    <span>⬇️ Baixar Banner</span>
                  </a>
                </div>

                <div className="relative rounded-xl overflow-hidden border-2 border-purple-300 shadow-sm group">
                  <img
                    src={checkoutBundleBannerImg}
                    alt="Banner Visual de Checkout do Mega Pack"
                    className="w-full h-44 object-contain bg-white"
                  />
                  <a
                    href={checkoutBundleBannerImg}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-2 right-2 bg-slate-900/80 hover:bg-slate-900 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 backdrop-blur-xs transition"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Abrir em Tamanho Real</span>
                  </a>
                </div>
              </div>

              {/* Seção de 3 Criativos para Facebook Ads */}
              <div className="p-4 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 rounded-2xl border-2 border-pink-300 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <label className="text-xs font-black text-pink-950 uppercase tracking-wider flex items-center gap-1.5">
                      <span>🔥</span>
                      <span>3 Criativos Oficiais para Facebook & Instagram Ads:</span>
                    </label>
                    <p className="text-[11px] text-pink-700 font-medium mt-0.5">
                      Clique em qualquer imagem para abrir a galeria interativa com textos e download em 1 clique.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      if (onOpenAdsGallery) {
                        onOpenAdsGallery();
                      } else {
                        window.location.href = '/?ads=1';
                      }
                    }}
                    className="shrink-0 bg-pink-600 hover:bg-pink-700 text-white text-[11px] font-black px-3 py-1.5 rounded-xl shadow-sm flex items-center justify-center gap-1 cursor-pointer transition hover:scale-105"
                  >
                    <span>🚀 Abrir Galeria Completa</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Criativo 1 */}
                  <div 
                    onClick={() => {
                      if (onOpenAdsGallery) {
                        onOpenAdsGallery();
                      } else {
                        window.location.href = '/?ads=1';
                      }
                    }}
                    className="bg-white rounded-xl p-2.5 border border-pink-200 flex flex-col justify-between shadow-2xs cursor-pointer hover:border-pink-400 hover:shadow-md transition group"
                  >
                    <div>
                      <span className="text-[10px] font-black text-pink-700 bg-pink-50 px-2 py-0.5 rounded-md inline-block mb-1">
                        1. Mega Pack Completo
                      </span>
                      <div className="aspect-square rounded-lg overflow-hidden border border-slate-200 mb-2 relative">
                        <img src={ad1} alt="Criativo 1 Mega Pack" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[10px] font-bold">
                          Ver & Baixar
                        </div>
                      </div>
                    </div>
                    <div className="w-full py-1.5 bg-pink-600 group-hover:bg-pink-700 text-white rounded-lg text-[11px] font-bold text-center flex items-center justify-center gap-1 transition shadow-xs">
                      <span>🎨 Ver Anúncio & Baixar</span>
                    </div>
                  </div>

                  {/* Criativo 2 */}
                  <div 
                    onClick={() => {
                      if (onOpenAdsGallery) {
                        onOpenAdsGallery();
                      } else {
                        window.location.href = '/?ads=1';
                      }
                    }}
                    className="bg-white rounded-xl p-2.5 border border-purple-200 flex flex-col justify-between shadow-2xs cursor-pointer hover:border-purple-400 hover:shadow-md transition group"
                  >
                    <div>
                      <span className="text-[10px] font-black text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md inline-block mb-1">
                        2. Renda Extra / Empreenda
                      </span>
                      <div className="aspect-square rounded-lg overflow-hidden border border-slate-200 mb-2 relative">
                        <img src={ad2} alt="Criativo 2 Empreenda" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[10px] font-bold">
                          Ver & Baixar
                        </div>
                      </div>
                    </div>
                    <div className="w-full py-1.5 bg-purple-600 group-hover:bg-purple-700 text-white rounded-lg text-[11px] font-bold text-center flex items-center justify-center gap-1 transition shadow-xs">
                      <span>🎨 Ver Anúncio & Baixar</span>
                    </div>
                  </div>

                  {/* Criativo 3 */}
                  <div 
                    onClick={() => {
                      if (onOpenAdsGallery) {
                        onOpenAdsGallery();
                      } else {
                        window.location.href = '/?ads=1';
                      }
                    }}
                    className="bg-white rounded-xl p-2.5 border border-rose-200 flex flex-col justify-between shadow-2xs cursor-pointer hover:border-rose-400 hover:shadow-md transition group"
                  >
                    <div>
                      <span className="text-[10px] font-black text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md inline-block mb-1">
                        3. Fácil no Celular / Canva
                      </span>
                      <div className="aspect-square rounded-lg overflow-hidden border border-slate-200 mb-2 relative">
                        <img src={ad3} alt="Criativo 3 Celular Canva" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[10px] font-bold">
                          Ver & Baixar
                        </div>
                      </div>
                    </div>
                    <div className="w-full py-1.5 bg-rose-600 group-hover:bg-rose-700 text-white rounded-lg text-[11px] font-bold text-center flex items-center justify-center gap-1 transition shadow-xs">
                      <span>🎨 Ver Anúncio & Baixar</span>
                    </div>
                  </div>
                </div>

                <div className="pt-1 text-center">
                  <a
                    href="https://packfiestalista.com/?ads=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-pink-600 hover:text-pink-800 font-bold underline inline-flex items-center gap-1"
                  >
                    <span>🔗 Link direto para a Central: https://packfiestalista.com/?ads=1</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Footer Close */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition cursor-pointer shadow-sm"
              >
                Concluir & Voltar à Navegação
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
