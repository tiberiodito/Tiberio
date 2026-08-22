import React from 'react';
import { Lock, Sparkles, CheckCircle, ArrowRight, X, ShieldCheck, Zap } from 'lucide-react';
import { ResourceItem } from '../types';

export interface LockedItemInfo {
  title: string;
  badge?: string;
  type?: string;
}

interface DemoLockModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUnlock: () => void;
  language: 'es' | 'pt';
  resourceItem?: ResourceItem | LockedItemInfo | null;
}

export const DemoLockModal: React.FC<DemoLockModalProps> = ({
  isOpen,
  onClose,
  onUnlock,
  language,
  resourceItem,
}) => {
  if (!isOpen) return null;

  const isEs = language === 'es';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Card */}
      <div 
        className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 border-2 border-pink-200 shadow-2xl relative overflow-hidden text-center animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Background decorative glow */}
        <div className="absolute -top-16 -right-16 w-36 h-36 bg-pink-200 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-amber-200 rounded-full blur-3xl opacity-50 pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Lock Icon badge */}
        <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-pink-500 via-rose-500 to-amber-500 flex items-center justify-center text-white mx-auto shadow-lg shadow-pink-200 mb-4 animate-bounce">
          <Lock className="w-8 h-8 stroke-[2.5]" />
        </div>

        {/* Badge */}
        <span className="inline-flex items-center gap-1 text-[11px] font-black text-pink-600 bg-pink-50 border border-pink-200 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
          <Sparkles className="w-3 h-3 text-amber-500 fill-amber-400" />
          {isEs ? 'Modo Demostración Activo' : 'Modo Demonstração Ativo'}
        </span>

        {/* Heading */}
        <h3 className="font-fredoka text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
          {isEs ? '¡Desbloquea el Acceso Completo!' : 'Desbloqueie o Acesso Completo!'}
        </h3>

        {/* Resource detail if clicked specifically */}
        {resourceItem ? (
          <div className="my-3 p-3 rounded-2xl bg-pink-50/80 border border-pink-200 text-left flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white text-pink-600 flex items-center justify-center font-bold text-base shadow-2xs shrink-0">
              🔒
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-bold text-pink-600 uppercase tracking-wide">
                {resourceItem.type || (isEs ? 'Herramienta & Recurso VIP' : 'Ferramenta & Recurso VIP')}
              </p>
              <p className="text-xs font-black text-slate-900 truncate">
                {resourceItem.title}
              </p>
            </div>
          </div>
        ) : null}

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
          {isEs
            ? 'Estás explorando el catálogo y las herramientas en modo visitante. Los enlaces directos de edición en Canva, carpetas de Drive, simuladores, calculadora de precios y videos se activan tras adquirir tu Pack.'
            : 'Você está explorando o catálogo e as ferramentas em modo visitante. Os links diretos de edição no Canva, pastas do Drive, simuladores, calculadora de lucro e vídeos são liberados após adquirir seu Kit.'}
        </p>

        {/* Benefits list */}
        <div className="my-4 bg-slate-50 rounded-2xl p-3.5 border border-slate-200/80 text-left space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>{isEs ? 'Acceso de por vida a las 18 carpetas y bonos' : 'Acesso vitalício às 18 pastas e bônus'}</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>{isEs ? 'Plantillas Canva 100% editables en 1 clic' : 'Moldes Canva 100% editáveis em 1 clique'}</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>{isEs ? 'Calculadoras, videos y organizador incluidos' : 'Calculadoras, vídeos e organizador inclusos'}</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onUnlock}
          className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-600 text-white font-black text-sm sm:text-base transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-2 cursor-pointer active:scale-95 group"
        >
          <Zap className="w-5 h-5 fill-amber-300 text-amber-300 group-hover:scale-110 transition-transform" />
          <span>{isEs ? 'Comprar Pack Completo (U$6,90)' : 'Comprar Pack Completo (U$6,90)'}</span>
          <ArrowRight className="w-4 h-4 stroke-[3]" />
        </button>

        {/* Secondary Back Button */}
        <button
          onClick={onClose}
          className="mt-3 text-xs font-bold text-slate-500 hover:text-slate-800 transition cursor-pointer underline"
        >
          {isEs ? 'Continuar explorando en modo visita' : 'Continuar explorando em modo visita'}
        </button>

        {/* Guarantee footer */}
        <div className="mt-3 flex items-center justify-center gap-1 text-[11px] text-slate-400 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>{isEs ? 'Garantía de 7 días • Acceso inmediato' : 'Garantia de 7 dias • Acesso imediato'}</span>
        </div>

      </div>

    </div>
  );
};
