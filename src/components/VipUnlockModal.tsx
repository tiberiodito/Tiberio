import React, { useState } from 'react';
import { 
  KeyRound, 
  Lock, 
  Sparkles, 
  CheckCircle2, 
  X, 
  ExternalLink, 
  ShieldCheck, 
  Gift, 
  AlertCircle,
  FolderKanban,
  MailOpen,
  Heart,
  Crown
} from 'lucide-react';
import { VIP_SECRET_KEY, VIP_COMBO_INFO } from '../data/vipBumpsData';
import { getCooudCheckoutUrl } from '../data/pricingConfig';

interface VipUnlockModalProps {
  isOpen: boolean;
  onClose: () => void;
  isUnlocked: boolean;
  onUnlockSuccess: () => void;
  language: 'es' | 'pt';
}

export const VipUnlockModal: React.FC<VipUnlockModalProps> = ({
  isOpen,
  onClose,
  isUnlocked,
  onUnlockSuccess,
  language
}) => {
  const isEs = language === 'es';
  const [inputKey, setInputKey] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [showSuccessAnim, setShowSuccessAnim] = useState(false);

  if (!isOpen) return null;

  const handleSubmitKey = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanKey = inputKey.trim().toLowerCase();

    if (!cleanKey) {
      setErrorMsg(isEs ? 'Por favor, ingresa tu clave de acceso.' : 'Por favor, insira sua chave de acesso.');
      return;
    }

    if (cleanKey === VIP_SECRET_KEY.toLowerCase()) {
      setErrorMsg('');
      setShowSuccessAnim(true);
      try {
        localStorage.setItem('pfl_vip_unlocked', 'true');
      } catch {
        // Ignore storage error
      }
      onUnlockSuccess();
      setTimeout(() => {
        setShowSuccessAnim(false);
        onClose();
      }, 1400);
    } else {
      setErrorMsg(
        isEs 
          ? 'Clave incorrecta. Verifica tu correo de confirmación de compra del Combo VIP o adquiere el acceso a continuación.' 
          : 'Chave incorreta. Verifique seu e-mail de confirmação de compra do Combo VIP ou adquira o acesso abaixo.'
      );
    }
  };

  const handleBuyVip = () => {
    window.location.href = getCooudCheckoutUrl();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border-2 border-amber-300/60 overflow-hidden text-slate-800">
        
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-amber-500 via-pink-600 to-purple-700 p-6 text-white text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white text-amber-600 shadow-xl mb-3 border-2 border-amber-200">
            {isUnlocked || showSuccessAnim ? (
              <Crown className="w-8 h-8 text-amber-500 animate-bounce" />
            ) : (
              <KeyRound className="w-8 h-8 text-pink-600" />
            )}
          </div>

          <h2 className="text-xl sm:text-2xl font-black tracking-tight">
            {isUnlocked || showSuccessAnim
              ? (isEs ? '¡Acceso VIP Desbloqueado!' : 'Acesso VIP Desbloqueado!')
              : (isEs ? 'Desbloquear Módulos VIP & Expansiones' : 'Desbloquear Módulos VIP & Expansões')}
          </h2>

          <p className="text-pink-100 text-xs sm:text-sm mt-1 max-w-md mx-auto">
            {isEs
              ? 'Área exclusiva para clientes del Mega Combo VIP (Fondos, +400 Invitaciones, Personajes y Stickers).'
              : 'Área exclusiva para clientes do Mega Combo VIP (Fundos, +400 Convites, Personagens e Adesivos).'}
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          {showSuccessAnim ? (
            <div className="py-8 text-center space-y-3 animate-in zoom-in-95">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-black text-emerald-800">
                {isEs ? '¡Bienvenida al Club VIP de Clara Maya!' : 'Bem-vinda ao Clube VIP de Clara Maya!'}
              </h3>
              <p className="text-xs text-slate-600 font-semibold">
                {isEs ? '¡Tus 4 expansiones completas ya están visibles en la pantalla!' : 'Suas 4 expansões completas já estão visíveis na tela!'}
              </p>
            </div>
          ) : isUnlocked ? (
            <div className="p-5 bg-emerald-50 border-2 border-emerald-300 rounded-2xl text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <p className="font-extrabold text-sm text-emerald-900">
                {isEs ? '¡Tu acceso VIP está completamente activo!' : 'Seu acesso VIP está completamente ativo!'}
              </p>
              <p className="text-xs text-emerald-700">
                {isEs ? 'Los 4 módulos y enlaces ya están visibles justo debajo en tu pantalla.' : 'Os 4 módulos e links já estão visíveis logo abaixo na sua tela.'}
              </p>
              <button
                onClick={onClose}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-xl text-sm transition shadow-lg cursor-pointer"
              >
                {isEs ? 'Cerrar y Ver Mis Archivos VIP' : 'Fechar e Ver Meus Arquivos VIP'}
              </button>
            </div>
          ) : (
            <>
              {/* Form Input Key */}
              <form onSubmit={handleSubmitKey} className="space-y-3">
                <label className="block text-xs font-black uppercase text-slate-600 tracking-wider">
                  {isEs ? 'Ingresa tu Clave Secreta VIP:' : 'Insira sua Chave Secreta VIP:'}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={inputKey}
                    onChange={(e) => {
                      setInputKey(e.target.value);
                      if (errorMsg) setErrorMsg('');
                    }}
                    placeholder={isEs ? 'Ingresa la clave recibida en tu compra...' : 'Insira a chave recebida na sua compra...'}
                    className="w-full pl-4 pr-12 py-3.5 rounded-2xl border-2 border-slate-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-200 text-slate-900 font-bold text-sm outline-none transition bg-slate-50 focus:bg-white"
                  />
                  <div className="absolute right-3 top-3.5 text-slate-400">
                    <KeyRound className="w-5 h-5" />
                  </div>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-2 text-rose-700 text-xs font-semibold animate-in fade-in">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-amber-500 via-pink-600 to-purple-600 hover:from-amber-600 hover:to-purple-700 text-white font-black text-sm rounded-2xl shadow-lg shadow-pink-500/25 transition-all hover:scale-[1.01] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{isEs ? 'Desbloquear Ahora' : 'Desbloquear Agora'}</span>
                </button>
              </form>

              {/* Upsell / No Key Box */}
              <div className="pt-4 border-t border-slate-200 space-y-3 text-center">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-[11px] font-black">
                  <Gift className="w-3.5 h-3.5" />
                  <span>{isEs ? '¿Aún no tienes el Mega Combo VIP?' : 'Ainda não tem o Mega Combo VIP?'}</span>
                </div>
                <p className="text-xs text-slate-600">
                  {isEs
                    ? 'Adquiere los 4 Packs Especiales (Fondos A-Z, +400 Invitaciones Canva, Personajes y Stickers) en oferta exclusiva por solo '
                    : 'Adquira os 4 Packs Especiais (Fundos A-Z, +400 Convites Canva, Personagens e Adesivos) em oferta exclusiva por apenas '}
                  <strong className="text-pink-600 text-sm font-black">$9.90 USD</strong>
                </p>
                <button
                  onClick={handleBuyVip}
                  className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-black text-xs rounded-xl transition flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4 text-amber-400" />
                  <span>{isEs ? 'Comprar Combo VIP por $9.90 USD' : 'Comprar Combo VIP por $9.90 USD'}</span>
                </button>
              </div>
            </>
          )}

          <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 font-medium pt-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>{isEs ? 'Acceso 100% vitalicio y seguro' : 'Acesso 100% vitalício e seguro'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
