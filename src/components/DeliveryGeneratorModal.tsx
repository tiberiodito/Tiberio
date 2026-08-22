import React, { useState } from 'react';
import { 
  X, 
  Share2, 
  Copy, 
  Check, 
  Sparkles, 
  MessageSquare, 
  Mail, 
  FileText, 
  QrCode, 
  CheckCircle2,
  TrendingUp,
  Award,
  ExternalLink,
  Crown,
  EyeOff
} from 'lucide-react';
import logoImg from '../assets/images/pack_fiesta_logo_1787101845875.jpg';

interface DeliveryGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'es' | 'pt';
  onExitCreatorMode?: () => void;
}

export const DeliveryGeneratorModal: React.FC<DeliveryGeneratorModalProps> = ({
  isOpen,
  onClose,
  language,
  onExitCreatorMode,
}) => {
  const isEs = language === 'es';
  const [activeTab, setActiveTab] = useState<'whatsapp' | 'email' | 'card' | 'comparison'>('whatsapp');
  const [copied, setCopied] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}${window.location.pathname}?view=portal` 
    : 'https://tu-dominio.com/?view=portal';

  const whatsappCopy = isEs 
    ? `🎈 *¡GRACIAS POR TU COMPRA! TU PACK FIESTA LISTA ESTÁ LISTO* ✨\n\n¡Hola! Estamos muy felices de acompañarte en tus eventos o emprendimiento creativo. 🎉\n\nHemos preparado un *Portal Interactivo Exclusivo* para que accedas a todos tus recursos con 1 solo clic:\n\n👉 *ACCEDE A TU PORTAL AQUÍ:*\n${currentUrl}\n\n🎁 *¿Qué encontrarás adentro?*\n✅ +1.500 Plantillas de Cajitas y Recuerdos en Canva Gratis\n✅ 18 Bonos Exclusivos (Cake toppers, 15.000 etiquetas, libritos)\n✅ 10 Video Tutoriales paso a paso\n✅ Calculadora de Papeles e Impresión\n✅ Asistente IA para crear tu temática\n\n📌 *Dato importante:* Tu acceso es DE POR VIDA. ¡Guarda este mensaje en tus favoritos!\n\n¿Dudas? ¡Escríbenos y con gusto te ayudamos! 💖`
    : `🎈 *OBRIGADO PELA SUA COMPRA! SEU KIT FESTA PRONTA ESTÁ PRONTO* ✨\n\nOlá! Estamos muito felizes em te ajudar a criar festas inesquecíveis ou fazer seu negócio criativo crescer. 🎉\n\nPreparamos um *Portal Interativo Exclusivo* para você acessar tudo com 1 clique:\n\n👉 *ACESSE SEU PORTAL AQUI:*\n${currentUrl}\n\n🎁 *O que você encontra dentro?*\n✅ +1.500 Moldes de Caixinhas e Lembrancinhas no Canva Grátis\n✅ 18 Bônus Exclusivos (+1.200 topos, 15.000 etiquetas, livrinhos)\n✅ 10 Tutoriais em Vídeo passo a passo\n✅ Calculadora de Papéis e Impressão\n✅ Assistente IA de Ideias para seu tema\n\n📌 *Lembrete:* Seu acesso é VITALÍCIO. Salve este link nos favoritos!\n\nQualquer dúvida, estamos à disposição! 💖`;

  const emailSubject = isEs 
    ? '🎈 Acceso Inmediato a tu Pack Fiesta Lista (+1.500 Plantillas y 18 Bonos)' 
    : '🎈 Acesso Imediato ao seu Kit Festa Pronta (+1.500 Moldes e 18 Bônus)';

  const emailBody = isEs 
    ? `¡Hola, creadora mágica!\n\n¡Muchas gracias por tu compra del Pack Fiesta Lista! Ya tienes acceso inmediato a todas tus plantillas y bonos exclusivos.\n\nPara brindarte la mayor comodidad, hemos diseñado un Portal Web Interactivo donde podrás abrir directamente tus plantillas en Canva, ver los videos tutoriales, calcular cuántas hojas imprimir y recibir ideas personalizadas con IA:\n\n👉 INGRESA A TU PORTAL DE ENTREGABLES:\n${currentUrl}\n\nRecomendaciones para empezar:\n1. 100% Canva Gratis: No necesitas pagar Canva Pro.\n2. Descarga lo que vayas a usar: Tu acceso no vence nunca.\n3. Revisa la Calculadora de Papel antes de imprimir para ahorrar material.\n\n¡Que tengas un día maravilloso creando momentos inolvidables!\n\nEquipo Pack Fiesta Lista`
    : `Olá, criadora mágica!\n\nMuito obrigado pela sua compra do Kit Festa Pronta! Você já tem acesso imediato a todos os seus moldes e bônus exclusivos.\n\nPara sua maior praticidade, criamos um Portal Web Interativo onde você abre direto no Canva, assiste aos vídeos tutoriais, calcula a quantidade de folhas para imprimir e recebe ideias com IA:\n\n👉 ACESSE SEU PORTAL DE ENTREGÁVEIS:\n${currentUrl}\n\nRecomendações para começar:\n1. 100% Canva Grátis: Não precisa pagar Pro.\n2. Baixe quando for usar: Seu acesso é vitalício.\n3. Veja a Calculadora de Papel antes de imprimir.\n\nEquipe Kit Festa Pronta`;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200">
      
      <div 
        id="delivery-generator-modal"
        className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl border-2 border-pink-200 overflow-hidden"
      >
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-pink-200 bg-gradient-to-r from-pink-600 via-purple-600 to-teal-600 text-white shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center shadow-xs shrink-0">
              <Share2 className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h2 className="text-sm sm:text-lg font-black flex items-center gap-1.5 truncate">
                <span className="truncate">{isEs ? 'Exportar Entregable' : 'Exportar Entregável'}</span>
                <span className="text-[9px] sm:text-[10px] font-black px-2 py-0.5 rounded-full bg-amber-400 text-slate-900 shadow-xs uppercase shrink-0">
                  {isEs ? 'Clientes' : 'Clientes'}
                </span>
              </h2>
              <p className="text-[11px] sm:text-xs text-pink-100 truncate">
                {isEs ? 'Textos de entrega para WhatsApp, Hotmart o Kiwify' : 'Textos de entrega para WhatsApp, Hotmart ou Kiwify'}
              </p>
            </div>
          </div>

          <button
            id="close-delivery-modal-btn"
            onClick={onClose}
            className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/20 transition cursor-pointer shrink-0 ml-2"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-pink-100 bg-pink-50/40">
          <button
            onClick={() => setActiveTab('whatsapp')}
            className={`pb-2.5 text-xs font-black transition border-b-2 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'whatsapp' ? 'border-emerald-500 text-emerald-600' : 'border-transparent text-slate-500'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            WhatsApp
          </button>
          <button
            onClick={() => setActiveTab('email')}
            className={`pb-2.5 text-xs font-black transition border-b-2 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'email' ? 'border-purple-500 text-purple-600' : 'border-transparent text-slate-500'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            E-mail / Kiwify / Hotmart
          </button>
          <button
            onClick={() => setActiveTab('card')}
            className={`pb-2.5 text-xs font-black transition border-b-2 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'card' ? 'border-pink-500 text-pink-600' : 'border-transparent text-slate-500'
            }`}
          >
            <QrCode className="w-3.5 h-3.5" />
            {isEs ? 'Tarjeta de Acceso Digital' : 'Cartão de Acesso Digital'}
          </button>
          <button
            onClick={() => setActiveTab('comparison')}
            className={`pb-2.5 text-xs font-black transition border-b-2 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'comparison' ? 'border-teal-500 text-teal-600' : 'border-transparent text-slate-500'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            {isEs ? 'Google Doc vs Este Portal' : 'Google Doc vs Este Portal'}
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          
          {/* TAB 1: WHATSAPP COPY */}
          {activeTab === 'whatsapp' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-600 font-bold">
                  {isEs 
                    ? 'Mensaje optimizado para enviar al cliente por WhatsApp tras la compra:' 
                    : 'Mensagem pronta para enviar à cliente no WhatsApp após o pagamento:'}
                </p>
                <button
                  onClick={() => handleCopy(whatsappCopy, 'wa')}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl text-xs font-black flex items-center gap-1.5 cursor-pointer transition shadow-md shadow-emerald-200"
                >
                  {copied === 'wa' ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied === 'wa' ? (isEs ? '¡Copiado!' : 'Copiado!') : (isEs ? 'Copiar Mensaje' : 'Copiar Mensagem')}</span>
                </button>
              </div>

              <div className="p-4 bg-emerald-50/60 border-2 border-emerald-200 rounded-3xl font-mono text-xs text-slate-800 whitespace-pre-wrap leading-relaxed">
                {whatsappCopy}
              </div>
            </div>
          )}

          {/* TAB 2: EMAIL COPY */}
          {activeTab === 'email' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-600 font-bold">
                  {isEs ? 'Asunto y cuerpo de correo para el área de miembros o e-mail transaccional:' : 'Assunto e texto para a área de membros ou e-mail de entrega:'}
                </p>
                <button
                  onClick={() => handleCopy(`${emailSubject}\n\n${emailBody}`, 'em')}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl text-xs font-black flex items-center gap-1.5 cursor-pointer transition shadow-md shadow-purple-200"
                >
                  {copied === 'em' ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied === 'em' ? (isEs ? '¡Copiado!' : 'Copiado!') : (isEs ? 'Copiar E-mail' : 'Copiar E-mail')}</span>
                </button>
              </div>

              <div className="p-5 bg-purple-50/40 border-2 border-purple-200 rounded-3xl space-y-3">
                <div className="text-xs font-black text-purple-950 pb-2.5 border-b border-purple-200">
                  <span className="text-purple-600 uppercase text-[10px] block font-black">{isEs ? 'Asunto:' : 'Assunto:'}</span>
                  {emailSubject}
                </div>
                <div className="font-mono text-xs text-slate-800 whitespace-pre-wrap pt-1 leading-relaxed">
                  {emailBody}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ACCESS CARD */}
          {activeTab === 'card' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-600 font-bold">
                {isEs 
                  ? 'Vista previa del portal web interactivo que verán tus clientas al abrir el enlace:' 
                  : 'Prévia do portal web interativo que as clientes verão ao abrir o link:'}
              </p>

              <div className="p-6 bg-gradient-to-br from-pink-500 via-purple-500 to-teal-400 rounded-3xl text-white shadow-2xl max-w-lg mx-auto text-center space-y-4 border-4 border-white">
                
                {/* Logo in Card */}
                <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-amber-50 mx-auto">
                  <img 
                    src={logoImg} 
                    alt="Logo" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-black tracking-tight">Pack Fiesta Lista</h3>
                  <p className="text-xs text-pink-100 font-semibold mt-0.5">Portal Oficial de Entregables & Canva</p>
                </div>

                <div className="p-4 bg-white rounded-2xl text-slate-800 shadow-lg text-left text-xs space-y-2.5">
                  <div className="flex items-center gap-2 font-black text-slate-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                    <span>+1.500 Plantillas Canva 100% Gratis</span>
                  </div>
                  <div className="flex items-center gap-2 font-black text-slate-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                    <span>18 Bonos Exclusivos Desbloqueados</span>
                  </div>
                  <div className="flex items-center gap-2 font-black text-slate-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                    <span>Calculadora de Papel & Asistente IA</span>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-[11px] font-mono bg-black/40 px-4 py-2 rounded-full text-white font-bold border border-white/20">
                    {currentUrl}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: COMPARISON */}
          {activeTab === 'comparison' && (
            <div className="space-y-4">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">
                {isEs ? '¿Por qué este WebApp supera por 10x a un Google Docs?' : 'Por que este WebApp supera o Google Docs em 10x?'}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Google Docs */}
                <div className="p-5 bg-red-50/60 border-2 border-red-200 rounded-3xl space-y-2.5">
                  <h4 className="text-xs font-black text-red-900 flex items-center gap-1.5">
                    <span>❌ Google Doc Tradicional</span>
                  </h4>
                  <ul className="text-xs text-red-800 space-y-2">
                    <li>• Links soltos e desorganizados que assustam a mãe no celular.</li>
                    <li>• Dúvidas constantes no suporte sobre qual papel comprar e como imprimir.</li>
                    <li>• Sem busca rápida ou filtros por tipo de festa.</li>
                    <li>• Sensação de infoproduto amador que gera pedidos de reembolso.</li>
                  </ul>
                </div>

                {/* WebApp Portal */}
                <div className="p-5 bg-emerald-50/60 border-2 border-emerald-200 rounded-3xl space-y-2.5">
                  <h4 className="text-xs font-black text-emerald-900 flex items-center gap-1.5">
                    <span>✅ Este WebApp Interativo</span>
                  </h4>
                  <ul className="text-xs text-emerald-950 space-y-2 font-semibold">
                    <li>• Abertura com 1 clique direto no app do Canva (Android / iPhone / PC).</li>
                    <li>• Calculadora de papéis que evita erros de impressão.</li>
                    <li>• Checklist interativo para a mãe planejar a festa do filho.</li>
                    <li>• Assistente IA que gera paletas e frases para o tema na hora.</li>
                    <li>• Efeito "UAU" imediato: clientes elogiam e indicam para outras mães!</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-pink-50/50 border-t border-pink-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">
              {isEs ? '👑 Modo Creador Activo' : '👑 Modo Produtor Ativo'}
            </span>
            {onExitCreatorMode && (
              <button
                id="exit-creator-mode-btn"
                onClick={() => {
                  onExitCreatorMode();
                  onClose();
                }}
                className="px-3 py-1 bg-white hover:bg-rose-50 text-rose-700 border border-rose-200 rounded-lg font-bold text-[11px] flex items-center gap-1 transition cursor-pointer"
                title={isEs ? 'Ocultar botón de creador para probar como cliente' : 'Ocultar botão de produtor para testar como cliente'}
              >
                <EyeOff className="w-3.5 h-3.5" />
                <span>{isEs ? 'Ocultar Modo Creador' : 'Ocultar Modo Produtor'}</span>
              </button>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold cursor-pointer transition active:scale-95"
          >
            {isEs ? 'Cerrar' : 'Fechar'}
          </button>
        </div>

      </div>

    </div>
  );
};
