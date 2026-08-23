import React, { useState } from 'react';
import { 
  Sparkles, 
  Lock, 
  Unlock, 
  ExternalLink, 
  Download, 
  Copy, 
  Check, 
  FolderKanban, 
  MailOpen, 
  Heart, 
  Crown, 
  KeyRound, 
  ShieldCheck, 
  Gift, 
  Layers,
  ArrowRight,
  Flame
} from 'lucide-react';
import { VIP_ORDER_BUMPS, VIP_COMBO_INFO, VipOrderBump, VipLinkItem } from '../data/vipBumpsData';
import { getCooudCheckoutUrl } from '../data/pricingConfig';
import vipCoverImg from '../assets/images/vip_combo_cover_1787445671206.jpg';

interface VipExpansionsSectionProps {
  language: 'es' | 'pt';
  isVipUnlocked: boolean;
  onOpenUnlockModal: () => void;
  onLockAgain?: () => void;
}

export const VipExpansionsSection: React.FC<VipExpansionsSectionProps> = ({
  language,
  isVipUnlocked,
  onOpenUnlockModal,
  onLockAgain
}) => {
  const isEs = language === 'es';
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const handleCopy = (url: string, id: string) => {
    try {
      navigator.clipboard.writeText(url);
      setCopiedLink(id);
      setTimeout(() => setCopiedLink(null), 2000);
    } catch {
      // Fallback
    }
  };

  const handleBuyCombo = () => {
    window.location.href = getCooudCheckoutUrl();
  };

  return (
    <section id="vip-expansions-section" className="my-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Top Section Header & Badge */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 border-2 border-amber-400/40 p-6 sm:p-10 shadow-2xl text-white">
        
        {/* Background Ambient Glow */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start gap-5 max-w-3xl">
            <img
              src={vipCoverImg}
              alt="Mega Combo VIP 4 Expansiones"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-amber-400/60 shadow-xl shrink-0"
              referrerPolicy="no-referrer"
            />
            <div className="space-y-2.5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-950 text-xs font-black uppercase tracking-wider shadow-lg">
                  <Crown className="w-3.5 h-3.5 fill-slate-950" />
                  {isEs ? 'MÓDULOS VIP & EXPANSIONES' : 'MÓDULOS VIP & EXPANSÕES'}
                </span>

                {isVipUnlocked ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-black">
                    <Unlock className="w-3.5 h-3.5 text-emerald-400" />
                    {isEs ? 'ACCESO DESBLOQUEADO' : 'ACESSO DESBLOQUEADO'}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/20 border border-pink-400/40 text-pink-300 text-xs font-black">
                    <Lock className="w-3.5 h-3.5 text-pink-400" />
                    {isEs ? 'EXCLUSIVO CLIENTES VIP' : 'EXCLUSIVO CLIENTES VIP'}
                  </span>
                )}
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
                {isEs 
                  ? 'Colección de Expansiones & Order Bumps' 
                  : 'Coleção de Expansões & Order Bumps'}
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {isEs
                  ? 'Accede a los 4 Packs Especiales diseñados para multiplicar tus opciones: Biblioteca de Fondos HD (A-Z), +400 Invitaciones Editables en Canva, Personajes en Tendencia y Stickers Decorativos.'
                  : 'Acesse os 4 Packs Especiais: Biblioteca de Fundos HD (A-Z), +400 Convites Editáveis no Canva, Personagens em Alta e Adesivos Decorativos.'}
              </p>
            </div>
          </div>

          {/* Action Trigger in Banner */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            {isVipUnlocked ? (
              <div className="p-4 bg-emerald-950/60 border border-emerald-500/40 rounded-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-black">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <div>
                  <div className="text-emerald-300 font-black text-xs uppercase tracking-wider">
                    {isEs ? 'Clave VIP Activa' : 'Chave VIP Ativa'}
                  </div>
                  <div className="text-white text-xs font-bold">
                    {isEs ? 'Todos los enlaces liberados' : 'Todos os links liberados'}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <button
                  onClick={onOpenUnlockModal}
                  className="px-5 py-3.5 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 rounded-2xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl shadow-amber-400/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <KeyRound className="w-4 h-4" />
                  <span>{isEs ? '🔑 Ingresar Clave de Acceso VIP' : '🔑 Inserir Chave de Acesso VIP'}</span>
                </button>

                <button
                  onClick={handleBuyCombo}
                  className="px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  <Gift className="w-3.5 h-3.5 text-pink-400" />
                  <span>{isEs ? 'Comprar Combo VIP ($9.90 USD)' : 'Comprar Combo VIP ($9.90 USD)'}</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Combo 5 Highlight Box inside Header */}
        <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div 
            onClick={!isVipUnlocked ? onOpenUnlockModal : undefined}
            className={`bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between gap-3 ${!isVipUnlocked ? 'cursor-pointer hover:bg-white/10 transition' : ''}`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 flex items-center justify-center shrink-0">
                <FolderKanban className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-black text-indigo-300 uppercase">ORDER 1</div>
                <div className="text-xs font-bold text-white">Fondos Temáticos A-Z</div>
              </div>
            </div>
            {!isVipUnlocked && <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />}
          </div>

          <div 
            onClick={!isVipUnlocked ? onOpenUnlockModal : undefined}
            className={`bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between gap-3 ${!isVipUnlocked ? 'cursor-pointer hover:bg-white/10 transition' : ''}`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/30 text-purple-300 flex items-center justify-center shrink-0">
                <MailOpen className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-black text-purple-300 uppercase">ORDER 2</div>
                <div className="text-xs font-bold text-white">+400 Invitaciones Canva</div>
              </div>
            </div>
            {!isVipUnlocked && <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />}
          </div>

          <div 
            onClick={!isVipUnlocked ? onOpenUnlockModal : undefined}
            className={`bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between gap-3 ${!isVipUnlocked ? 'cursor-pointer hover:bg-white/10 transition' : ''}`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 text-amber-300 flex items-center justify-center shrink-0">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-black text-amber-300 uppercase">ORDER 3</div>
                <div className="text-xs font-bold text-white">Personajes en Tendencia</div>
              </div>
            </div>
            {!isVipUnlocked && <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />}
          </div>

          <div 
            onClick={!isVipUnlocked ? onOpenUnlockModal : undefined}
            className={`bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between gap-3 ${!isVipUnlocked ? 'cursor-pointer hover:bg-white/10 transition' : ''}`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-pink-500/20 border border-pink-400/30 text-pink-300 flex items-center justify-center shrink-0">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-black text-pink-300 uppercase">ORDER 4</div>
                <div className="text-xs font-bold text-white">Stickers Decorativos</div>
              </div>
            </div>
            {!isVipUnlocked && <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />}
          </div>
        </div>
      </div>

      {/* Grid of the 4 Order Bumps - ONLY VISIBLE AFTER KEY UNLOCK */}
      {isVipUnlocked && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {VIP_ORDER_BUMPS.map((bump) => {
            const colorStyles = {
              indigo: {
                badge: 'bg-indigo-100 text-indigo-800 border-indigo-200',
                border: 'border-indigo-200 hover:border-indigo-400',
                accent: 'from-indigo-600 to-blue-600',
                button: 'bg-indigo-600 hover:bg-indigo-700 text-white',
                lightBg: 'bg-indigo-50/50',
              },
              purple: {
                badge: 'bg-purple-100 text-purple-800 border-purple-200',
                border: 'border-purple-200 hover:border-purple-400',
                accent: 'from-purple-600 to-pink-600',
                button: 'bg-purple-600 hover:bg-purple-700 text-white',
                lightBg: 'bg-purple-50/50',
              },
              amber: {
                badge: 'bg-amber-100 text-amber-900 border-amber-200',
                border: 'border-amber-200 hover:border-amber-400',
                accent: 'from-amber-500 to-orange-600',
                button: 'bg-amber-500 hover:bg-amber-600 text-slate-950 font-black',
                lightBg: 'bg-amber-50/50',
              },
              pink: {
                badge: 'bg-pink-100 text-pink-800 border-pink-200',
                border: 'border-pink-200 hover:border-pink-400',
                accent: 'from-pink-600 to-rose-600',
                button: 'bg-pink-600 hover:bg-pink-700 text-white',
                lightBg: 'bg-pink-50/50',
              },
            }[bump.colorScheme as 'indigo' | 'purple' | 'amber' | 'pink'];

            return (
              <div
                key={bump.id}
                className={`bg-white rounded-3xl border-2 ${colorStyles.border} p-6 sm:p-7 shadow-lg flex flex-col justify-between transition-all duration-300 relative group overflow-hidden`}
              >
                {/* Top Card Header */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-black border ${colorStyles.badge}`}>
                      {bump.orderNumber === 1 && '📁 PACK FONDOS HD'}
                      {bump.orderNumber === 2 && '💌 PACK INVITACIONES CANVA'}
                      {bump.orderNumber === 3 && '🔥 PACK PERSONAJES'}
                      {bump.orderNumber === 4 && '🎀 PACK STICKERS'}
                    </span>

                    <div className="flex items-center gap-1.5">
                      <span className="flex items-center gap-1 text-emerald-600 text-xs font-black bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        <Unlock className="w-3 h-3" /> {isEs ? 'Liberado' : 'Liberado'}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                    {isEs ? bump.title : bump.titlePt}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {isEs ? bump.description : bump.descriptionPt}
                  </p>
                </div>

                {/* Links List / Download Buttons */}
                <div className="mt-6 space-y-2.5 pt-4 border-t border-slate-100">
                  <div className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                    {isEs ? 'Enlaces directos de descarga y edición:' : 'Links diretos de download e edição:'}
                  </div>

                  <div className="grid grid-cols-1 gap-2">
                    {bump.links.map((link, idx) => {
                      const linkId = `${bump.id}-link-${idx}`;
                      const isCopied = copiedLink === linkId;

                      return (
                        <div
                          key={linkId}
                          className={`p-3 ${colorStyles.lightBg} border border-slate-200 rounded-2xl flex items-center justify-between gap-2 shadow-2xs hover:shadow-sm transition`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className={`w-8 h-8 rounded-xl ${colorStyles.button} flex items-center justify-center shrink-0 shadow-xs`}>
                              {link.type === 'canva' ? (
                                <Sparkles className="w-4 h-4" />
                              ) : (
                                <Download className="w-4 h-4" />
                              )}
                            </div>
                            <span className="text-xs font-black text-slate-800 truncate">
                              {isEs ? link.name : (link.namePt || link.name)}
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0">
                            {/* Copy Link Button */}
                            <button
                              onClick={() => handleCopy(link.url, linkId)}
                              className="p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-600 border border-slate-200 text-xs transition cursor-pointer"
                              title={isEs ? 'Copiar enlace directo' : 'Copiar link direto'}
                            >
                              {isCopied ? (
                                <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>

                            {/* Direct Open Button */}
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`px-3 py-1.5 rounded-xl ${colorStyles.button} font-bold text-xs flex items-center gap-1 shadow-xs transition hover:scale-105 active:scale-95`}
                            >
                              <span>{link.type === 'canva' ? 'Abrir Canva' : 'Abrir Drive'}</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
