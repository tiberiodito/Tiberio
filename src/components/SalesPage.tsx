import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  Play, 
  Star, 
  ShieldCheck, 
  Zap, 
  Gift, 
  HelpCircle, 
  ArrowRight, 
  Layers, 
  Clock, 
  Download, 
  Check, 
  ChevronDown, 
  Scissors, 
  Printer, 
  Palette, 
  DollarSign, 
  Bot, 
  Eye, 
  BookOpen, 
  Users, 
  PartyPopper,
  ExternalLink,
  ChevronRight,
  Flame,
  CreditCard,
  Lock,
  Globe,
  Tag,
  AlertTriangle,
  X,
  PhoneCall,
  FileCheck,
  TrendingUp,
  Award,
  Heart,
  MonitorPlay,
  ArrowUpRight
} from 'lucide-react';
import heroImg from '../assets/images/fiesta_mega_mockup_1787102747278.jpg';
import { PRICING_CONFIG, CURRENCY_RATES } from '../data/pricingConfig';
import { FAQS_ES, FAQS_PT } from '../data/faqsData';

interface SalesPageProps {
  onGoToPortal: () => void;
  checkoutUrl?: string;
}

export const SalesPage: React.FC<SalesPageProps> = ({
  onGoToPortal,
  checkoutUrl = "https://pay.hotmart.com"
}) => {
  // Language selector
  const [lang, setLang] = useState<'es' | 'pt'>('es');
  
  // Countdown Timer (14:59)
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD');
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [recentBuyer, setRecentBuyer] = useState<{ name: string; city: string; flag: string; time: string } | null>(null);

  const isEs = lang === 'es';

  // Centralized pricing constants derived from PRICING_CONFIG
  const priceDisplayUsd = `$${PRICING_CONFIG.baseUsdPromo.toFixed(2)} USD`;
  const regularDisplayUsd = `$${PRICING_CONFIG.baseUsdRegular.toFixed(2)} USD`;
  const discountText = `${PRICING_CONFIG.discountPercentage}%`;

  // Timer interval
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { minutes: 14, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Live recent purchases toast simulation
  useEffect(() => {
    const buyers = [
      { name: 'Camila R.', city: 'Ciudad de México', flag: '🇲🇽', time: isEs ? 'hace 2 minutos' : 'há 2 minutos' },
      { name: 'Valentina M.', city: 'Bogotá', flag: '🇨🇴', time: isEs ? 'hace 4 minutos' : 'há 4 minutos' },
      { name: 'Luciana S.', city: 'Lima', flag: '🇵🇪', time: isEs ? 'hace 6 minutos' : 'há 6 minutos' },
      { name: 'Mariana B.', city: 'São Paulo', flag: '🇧🇷', time: isEs ? 'hace 1 minuto' : 'há 1 minuto' },
      { name: 'Sofía C.', city: 'Santiago', flag: '🇨🇱', time: isEs ? 'hace 8 minutos' : 'há 8 minutos' },
      { name: 'Florencia G.', city: 'Buenos Aires', flag: '🇦🇷', time: isEs ? 'hace 5 minutos' : 'há 5 minutos' }
    ];

    let index = 0;
    const interval = setInterval(() => {
      setRecentBuyer(buyers[index % buyers.length]);
      index++;
      setTimeout(() => setRecentBuyer(null), 5000);
    }, 12000);

    return () => clearInterval(interval);
  }, [isEs]);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  const currentPrice = CURRENCY_RATES[selectedCurrency] || CURRENCY_RATES.USD;

  const bonuses = [
    {
      id: 1,
      title: isEs ? '1.200 Toppers de Torta 3D en Capas' : '1.200 Toppers de Bolo 3D em Camadas',
      desc: isEs ? 'Plantillas listas para cortar y armar figuras con volumen de todos los personajes infantiles.' : 'Arquivos prontos para cortar e montar topos em camadas volumétricas de personagens em alta.',
      reg: '$19.00',
      tag: isEs ? 'BÔNUS #1' : 'BÔNUS #1',
      icon: Layers,
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 2,
      title: isEs ? '+900 Modelos de Cajitas Imprimibles & Editables' : '+900 Modelos de Caixas Imprimíveis e Editáveis',
      desc: isEs ? 'Cajas Milk, Pirámide, Sushi, Hexagonal, Maletín y Almohada con líneas de corte y doblez.' : 'Caixas Milk, Pirâmide, Sushi, Bolsinhas e Sacolinhas com linhas de vinco e corte.',
      reg: '$27.00',
      tag: isEs ? 'BÔNUS #2' : 'BÔNUS #2',
      icon: Scissors,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 3,
      title: isEs ? '240 Libritos para Colorear Temáticos (Souvenirs)' : '240 Livros de Colorir Temáticos (Lembrancinhas)',
      desc: isEs ? 'El recuerdo favorito de los niños listo en PDF tamaño media carta o A4 para entregar en fiestas.' : 'A lembrancinha preferida das crianças pronta em PDF para imprimir e encadernar com giz de cera.',
      reg: '$15.00',
      tag: isEs ? 'BÔNUS #3' : 'BÔNUS #3',
      icon: BookOpen,
      color: 'from-amber-500 to-yellow-500'
    },
    {
      id: 4,
      title: isEs ? '+1.500 Etiquetas Escolares & Multiuso' : '+1.500 Etiquetas Escolares e Multiuso',
      desc: isEs ? 'Kits escolares completos para cuadernos, lápices y termos para facturar todo el año escolar.' : 'Kits de volta às aulas para cadernos, lápis e garrafinhas para faturar muito em temporada escolar.',
      reg: '$17.00',
      tag: isEs ? 'BÔNUS #4' : 'BÔNUS #4',
      icon: Tag,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 5,
      title: isEs ? 'Pack de Recuerditos "Festeja Conmigo"' : 'Lembrancinhas "Comemore Conosco"',
      desc: isEs ? 'Bolsitas kraft decoradas, tags de agradecimiento, cartoncitos para dulces y burbujeros.' : 'Solapas para saquinhos, tags de agradecimento, porta-tubetes e caixinhas acrílicas.',
      reg: '$12.00',
      tag: isEs ? 'BÔNUS #5' : 'BÔNUS #5',
      icon: Heart,
      color: 'from-rose-500 to-pink-500'
    },
    {
      id: 6,
      title: isEs ? 'Moldes para Cajas de Dulces Listos para Armar' : 'Moldes para Caixas de Doces Prontos para Montar',
      desc: isEs ? 'Porta brigadeiros, porta trufas, cajitas para donas y conchas para Candy Bar.' : 'Forminhas decoradas, porta-trufas, caixas para brigadeiros e doces finos.',
      reg: '$14.00',
      tag: isEs ? 'BÔNUS #6' : 'BÔNUS #6',
      icon: PartyPopper,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 7,
      title: isEs ? '+300 Separadores de Libros Imprimibles' : '+300 Marcadores de Livros Imprimíveis',
      desc: isEs ? 'Diseños motivacionales, infantiles y florales para souvenirs económicos y de rápida venta.' : 'Marcadores criativos e plastificáveis para lembranças escolares e corporativas.',
      reg: '$9.00',
      tag: isEs ? 'BÔNUS #7' : 'BÔNUS #7',
      icon: FileCheck,
      color: 'from-violet-500 to-purple-500'
    },
    {
      id: 8,
      title: isEs ? '+1.000 Diseños Exclusivos para Sublimación' : '+1.000 Designs para Sublimação',
      desc: isEs ? 'Artes listas en alta resolución para tazas, remeras, botellas y almohadones.' : 'Estampas em alta resolução prontas para canecas, squeezes, camisas e almofadas.',
      reg: '$22.00',
      tag: isEs ? 'BÔNUS #8' : 'BÔNUS #8',
      icon: Palette,
      color: 'from-fuchsia-500 to-pink-500'
    },
    {
      id: 9,
      title: isEs ? '+300 Invitaciones Digitales Creativas & Animadas' : '+300 Convites Digitais Criativos e Animados',
      desc: isEs ? 'Plantillas para WhatsApp con enlaces interactivos de ubicación y confirmación de asistencia.' : 'Convites modernos para enviar no WhatsApp com botões interativos de confirmação e mapa.',
      reg: '$16.00',
      tag: isEs ? 'BÔNUS #9' : 'BÔNUS #9',
      icon: Sparkles,
      color: 'from-teal-500 to-emerald-500'
    },
    {
      id: 10,
      title: isEs ? 'Guía Maestra: Inicia tu Negocio de Papelería en Casa' : 'Guia Passo a Passo: Negócio de Papelaria em Casa',
      desc: isEs ? 'E-book con consejos de compra de papeles, tipos de impresoras caseras y cómo captar clientes.' : 'Passo a passo de como precificar kits Básico e Luxo, fornecedores e captação de clientes locais.',
      reg: '$25.00',
      tag: isEs ? 'BÔNUS #10' : 'BÔNUS #10',
      icon: TrendingUp,
      color: 'from-amber-600 to-orange-500'
    }
  ];

  const faqs = isEs ? FAQS_ES : FAQS_PT;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-pink-500 selection:text-white pb-24">
      
      {/* 🔴 Top Urgency Bar */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-red-600 via-pink-600 to-red-600 py-2.5 px-3 sm:px-4 text-white text-xs sm:text-sm font-black shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-2">
          
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-yellow-300 animate-bounce shrink-0" />
            <span className="hidden sm:inline">
              {isEs 
                ? '🔥 ¡ÚLTIMOS 17 ACCESOS CON 81% DE DESCUENTO + 10 REGALOS EXCLUSIVOS!' 
                : '🔥 ÚLTIMOS 17 ACESSOS COM 81% DE DESCONTO + 10 BRINDES EXCLUSIVOS!'}
            </span>
            <span className="sm:hidden text-[11px]">
              {isEs ? '🔥 OFERTA 81% OFF TERMINA EN:' : '🔥 OFERTA 81% OFF TERMINA EM:'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="bg-black/40 px-2 py-0.5 rounded font-mono text-yellow-300 border border-yellow-400/40 text-xs sm:text-sm font-bold">
              {formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}
            </span>

            {/* Language Switcher */}
            <div className="flex items-center bg-black/30 rounded-lg p-0.5 border border-white/20">
              <button
                onClick={() => setLang('es')}
                className={`px-1.5 py-0.5 rounded text-[10px] sm:text-xs font-bold transition ${lang === 'es' ? 'bg-pink-600 text-white' : 'text-slate-300 hover:text-white'}`}
              >
                🇪🇸 ES
              </button>
              <button
                onClick={() => setLang('pt')}
                className={`px-1.5 py-0.5 rounded text-[10px] sm:text-xs font-bold transition ${lang === 'pt' ? 'bg-pink-600 text-white' : 'text-slate-300 hover:text-white'}`}
              >
                🇧🇷 PT
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* 🌟 HERO SECTION */}
      <header className="relative pt-10 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center overflow-hidden">
        
        {/* Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-pink-600/25 to-purple-600/25 blur-[120px] rounded-full pointer-events-none" />

        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20 border border-pink-500/40 px-4 py-1.5 rounded-full text-pink-300 text-xs sm:text-sm font-black uppercase tracking-wider mb-6 shadow-inner">
          <Sparkles className="w-4 h-4 text-pink-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>{isEs ? '+10.000 Kits Editables en Canva Gratis + 10 Bônus' : '+10.000 Kits Editáveis no Canva Grátis + 10 Bônus'}</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15] max-w-4xl mx-auto">
          {isEs ? (
            <>
              Crea Fiestas Infantiles Mágicas en Minutos o <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-300 to-yellow-300 underline decoration-pink-500/50">Inicia tu Negocio de Papelería</span> Sin Experiencia
            </>
          ) : (
            <>
              Crie Festas Infantis Mágicas em Minutos ou <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-300 to-yellow-300 underline decoration-pink-500/50">Comece seu Negócio de Papelaria</span> Sem Experiência
            </>
          )}
        </h1>

        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          {isEs ? (
            <>
              Accede al <strong className="text-pink-300">Pack Fiesta Lista 2026</strong> con miles de cajitas, toppers 3D, banderines, invitaciones interactivas listas para imprimir en Canva Gratis + <strong className="text-yellow-300">Calculadora de Ganancias con IA</strong>.
            </>
          ) : (
            <>
              Acesse o <strong className="text-pink-300">Kit Pronto para Festa 2026</strong> com milhares de caixinhas, topos 3D, convites digitais prontos para imprimir no Canva Grátis + <strong className="text-yellow-300">Calculadora de Lucro e Inteligência Artificial</strong>.
            </>
          )}
        </p>

        {/* 3D Mockup */}
        <div className="mt-8 relative max-w-3xl mx-auto rounded-3xl p-2 bg-gradient-to-b from-pink-500/40 via-purple-500/20 to-transparent shadow-2xl shadow-pink-500/20">
          <img 
            src={heroImg} 
            alt="Pack Fiesta Lista Mockup" 
            className="w-full h-auto rounded-2xl shadow-2xl object-cover"
          />
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/95 border border-pink-500/60 backdrop-blur-md px-5 py-2 rounded-2xl text-xs sm:text-sm font-black text-pink-200 shadow-xl flex items-center gap-2 whitespace-nowrap">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            {isEs ? 'Acceso Vitalicio • 100% en Canva Gratis • Licencia Comercial' : 'Acesso Vitalício • 100% no Canva Grátis • Licença Comercial'}
          </div>
        </div>

        {/* Main CTA Button & Live Deliverable Demo Card */}
        <div className="mt-12 max-w-xl mx-auto space-y-4">
          <a
            href="#oferta"
            className="w-full py-5 px-8 rounded-2xl font-black text-slate-950 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 hover:from-yellow-300 hover:to-amber-200 shadow-2xl shadow-yellow-500/40 transform hover:scale-[1.02] active:scale-95 transition duration-200 flex items-center justify-center gap-3 text-lg sm:text-xl cursor-pointer"
          >
            <span>{isEs ? `¡SÍ, QUIERO EL PACK COMPLETO POR SOLO ${priceDisplayUsd}!` : `SIM, QUERO O PACOTE COMPLETO POR APENAS ${priceDisplayUsd}!`}</span>
            <ArrowRight className="w-6 h-6 stroke-[3]" />
          </a>

          {/* 🌟 ULTRA HIGHLIGHTED BUTTON: Live Deliverable Demo Showcase */}
          <div className="relative group p-1 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-amber-400 shadow-xl shadow-pink-500/20 hover:shadow-pink-500/40 transition-all duration-300 transform hover:scale-[1.02]">
            <button
              onClick={onGoToPortal}
              className="w-full py-4 px-5 rounded-xl bg-slate-950/95 hover:bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-3 transition cursor-pointer text-left"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <MonitorPlay className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="bg-emerald-500 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-ping" />
                      {isEs ? 'DEMO EN VIVO' : 'DEMO AO VIVO'}
                    </span>
                    <span className="text-xs font-bold text-pink-300">{isEs ? '100% Interactivo' : '100% Interativo'}</span>
                  </div>
                  <p className="text-sm sm:text-base font-black text-white mt-0.5">
                    {isEs ? '👉 Ver el Portal Entregable por Dentro' : '👉 Ver o Portal Entregável por Dentro'}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    {isEs ? 'Prueba la IA, la calculadora de precios y los catálogos ahora mismo' : 'Teste a IA, a calculadora de preços e os catálogos agora mesmo'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 bg-pink-500/20 text-pink-300 border border-pink-500/40 px-3.5 py-2 rounded-xl text-xs font-black shrink-0 group-hover:bg-pink-500 group-hover:text-white transition">
                <span>{isEs ? 'EXPLORAR DEMO' : 'EXPLORAR DEMO'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </button>
          </div>

          {/* Local currency highlight */}
          <div className="p-3 bg-slate-900/90 border border-yellow-400/40 rounded-2xl text-xs sm:text-sm text-yellow-300 font-bold flex items-center justify-center gap-2 shadow-inner">
            <Globe className="w-4 h-4 text-yellow-400 shrink-0" />
            <span>
              {isEs 
                ? '🌎 ¡PAGA EN TU MONEDA LOCAL! (Pesos mexicanos, colombianos, soles, pesos chilenos, reales, etc. al pagar)'
                : '🌎 PAGUE NA SUA MOEDA LOCAL! (Reais via PIX, pesos mexicanos, colombianos, etc. no momento do pagamento)'}
            </span>
          </div>
        </div>

        {/* Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-emerald-400" /> {isEs ? 'Pago 100% Encriptado' : 'Pagamento 100% Seguro'}</span>
          <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-yellow-400" /> {isEs ? 'Entrega Inmediata al Correo' : 'Entrega Imediata no E-mail'}</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-pink-400" /> {isEs ? '7 Días de Garantía Total' : '7 Dias de Garantia Total'}</span>
        </div>

      </header>

      {/* 🌎 CURRENCY SELECTOR WIDGET */}
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-xl">
          <div className="text-center mb-6">
            <span className="text-xs font-bold text-yellow-400 uppercase tracking-widest bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/30">
              {isEs ? 'CALCULA EL PRECIO EN TU PAÍS' : 'CALCULE O PREÇO NO SEU PAÍS'}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-2">
              {isEs ? 'Precios y Métodos de Pago Locales' : 'Preços e Formas de Pagamento Locais'}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              {isEs ? 'El valor se convierte automáticamente a tu moneda en el checkout oficial según la cotización del día.' : 'O valor é convertido automaticamente para sua moeda no checkout oficial com base na cotação diária.'}
            </p>
          </div>

          {/* Buttons for Currencies */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
            {Object.keys(CURRENCY_RATES).map(curr => {
              const item = CURRENCY_RATES[curr];
              return (
                <button
                  key={curr}
                  onClick={() => setSelectedCurrency(curr)}
                  className={`p-2.5 rounded-xl text-xs font-black transition flex flex-col items-center justify-center border cursor-pointer ${
                    selectedCurrency === curr 
                      ? 'bg-pink-600 text-white border-pink-400 shadow-lg shadow-pink-600/30' 
                      : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:border-slate-500'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <span>{item.flag}</span>
                    <span>{curr}</span>
                  </div>
                  <span className="text-[10px] font-normal opacity-80">{item.text.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          <div className="bg-slate-950/80 border border-pink-500/30 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <div className="text-slate-400 text-xs line-through">
                {isEs ? 'Precio Normal:' : 'Preço Normal:'} {currentPrice.symbol}{currentPrice.regular}
              </div>
              <div className="text-3xl sm:text-4xl font-black text-yellow-300 flex items-center justify-center sm:justify-start gap-2">
                <span>{currentPrice.symbol}{currentPrice.promo}</span>
                <span className="text-xs font-bold text-slate-300 uppercase">({selectedCurrency})</span>
                {currentPrice.badge && (
                  <span className="text-[10px] font-bold bg-pink-500/20 text-pink-300 border border-pink-500/40 px-2 py-0.5 rounded-full">
                    {currentPrice.badge}
                  </span>
                )}
              </div>
              <div className="text-xs text-emerald-400 font-bold mt-1">
                {isEs ? '✅ Métodos disponibles:' : '✅ Formas aceitas:'} {isEs ? currentPrice.payMethods.es : currentPrice.payMethods.pt}
              </div>
            </div>

            <a
              href="#oferta"
              className="py-3.5 px-6 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-xl text-sm shadow-lg transition active:scale-95 whitespace-nowrap cursor-pointer"
            >
              {isEs ? 'PAGAR EN MI MONEDA' : 'PAGAR NA MINHA MOEDA'}
            </a>
          </div>
        </div>
      </section>

      {/* 💥 THE COMPARISON TABLE (Doing everything alone vs Pack Fiesta Lista) */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-pink-400 text-xs font-black uppercase tracking-widest bg-pink-500/10 px-3 py-1 rounded-full border border-pink-500/20">
            {isEs ? 'COMPARATIVA REAL' : 'COMPARAÇÃO REAL'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white mt-2">
            {isEs ? 'Hacerlo Sola vs. Usar el Pack Fiesta Lista' : 'Fazer Tudo Sozinha vs. Usar o Pack Fiesta Lista'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Alone */}
          <div className="bg-red-950/20 border-2 border-red-500/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="inline-block bg-red-500/20 text-red-300 text-xs font-black uppercase px-3 py-1 rounded-lg mb-4">
                ❌ {isEs ? 'Hacerlo desde cero por tu cuenta:' : 'Fazendo tudo sozinha do zero:'}
              </div>
              <ul className="space-y-3.5 text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold shrink-0">✗</span>
                  <span><strong>+200 USD</strong> gastados comprando kits sueltos y vectores caros en internet.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold shrink-0">✗</span>
                  <span><strong>+40 horas</strong> buscando imágenes sin fondo en Google que salen pixeladas.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold shrink-0">✗</span>
                  <span>Errores de medida en cajitas que no encajan al armar y desperdician tinta y papel.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold shrink-0">✗</span>
                  <span>Cobrar a ciegas sin saber si ganas dinero o tienes pérdidas en tus pedidos.</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-red-500/30 text-center text-xs text-red-300 font-bold">
              {isEs ? 'Costo estimado: Más de $200 USD y días de estrés' : 'Custo estimado: Mais de $200 USD e dias de estresse'}
            </div>
          </div>

          {/* With Pack */}
          <div className="bg-gradient-to-b from-emerald-950/30 to-slate-900 border-2 border-emerald-500/60 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-emerald-500/10">
            <div>
              <div className="inline-block bg-emerald-500/20 text-emerald-300 text-xs font-black uppercase px-3 py-1 rounded-lg mb-4">
                ✅ {isEs ? 'Con el Pack Fiesta Lista:' : 'Com o Pack Fiesta Lista:'}
              </div>
              <ul className="space-y-3.5 text-sm text-slate-200">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  <span><strong>{isEs ? `Solo ${priceDisplayUsd}` : `Apenas ${priceDisplayUsd}`}</strong> {isEs ? 'acceso vitalicio a más de 10.000 archivos listos.' : 'acesso vitalício a mais de 10.000 arquivos prontos.'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  <span><strong>{isEs ? 'Listo en 3 minutos' : 'Pronto em 3 minutos'}</strong> {isEs ? 'con plantillas editables en Canva Gratis.' : 'com modelos editáveis no Canva Grátis.'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  <span>{isEs ? 'Moldes con líneas de corte exactas en 300 DPI para tijera o plotter.' : 'Moldes com linhas de corte precisas em 300 DPI para tesoura ou plotter.'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  <span>{isEs ? 'Calculadora de Ganancias que te dice exactamente cuánto cobrar por cada kit.' : 'Calculadora de Lucro que diz exatamente quanto cobrar por kit.'}</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-emerald-500/40 text-center text-xs text-emerald-300 font-black">
              {isEs ? `Inversión única: Solo ${priceDisplayUsd} (Ahorras más del ${discountText})` : `Investimento único: Apenas ${priceDisplayUsd} (Economia de mais de ${discountText})`}
            </div>
          </div>

        </div>
      </section>

      {/* 🎁 VITRINE DOS 10 MEGA BÔNUS (COM ANCORAGEM $XX -> $0 GRÁTIS) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-yellow-400 text-xs font-black uppercase tracking-widest bg-yellow-400/10 px-4 py-1.5 rounded-full border border-yellow-400/30">
            {isEs ? 'VALOR TOTAL DE BÔNUS: $184 USD' : 'VALOR TOTAL DOS BÔNUS: $184 USD'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 leading-tight">
            {isEs ? 'Vitrina de los 10 Mega Bônus Exclusivos' : 'Vitrine dos 10 Mega Bônus Exclusivos'}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            {isEs 
              ? 'Todos estos 10 regalos se desbloquean automáticamente en tu acceso hoy:' 
              : 'Todos esses 10 presentes são liberados instantaneamente no seu acesso hoje:'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {bonuses.map(bonus => {
            const IconComponent = bonus.icon;
            return (
              <div 
                key={bonus.id}
                className="bg-slate-900/90 border border-slate-800 hover:border-pink-500/60 rounded-3xl p-5 sm:p-6 transition group relative flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-[11px] font-black tracking-wider text-pink-400 bg-pink-500/10 px-3 py-0.5 rounded-full border border-pink-500/20">
                      {bonus.tag}
                    </span>
                    <div className="text-xs font-bold">
                      <span className="text-slate-500 line-through mr-2">{isEs ? 'Valor:' : 'Valor:'} {bonus.reg}</span>
                      <span className="text-emerald-400 font-black bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                        {isEs ? 'HOY: GRATIS' : 'HOJE: GRÁTIS'}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${bonus.color} flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-105 transition`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white leading-snug">{bonus.title}</h4>
                      <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">{bonus.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bonus Total Anchoring Banner */}
        <div className="mt-8 bg-gradient-to-r from-purple-900/60 via-pink-900/60 to-purple-900/60 border-2 border-pink-500/40 rounded-3xl p-6 text-center max-w-3xl mx-auto shadow-2xl">
          <div className="text-slate-400 text-xs sm:text-sm uppercase font-bold tracking-wider">
            {isEs ? 'Si compraras estos 10 bônus por separado pagarías:' : 'Se você comprasse esses 10 bônus separadamente pagaria:'}
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-400 line-through my-1">
            ${PRICING_CONFIG.bonusValueUsd.toFixed(2)} USD
          </div>
          <div className="text-base sm:text-lg text-yellow-300 font-black">
            {isEs 
              ? `¡Hoy incluidos 100% GRATIS dentro de tu pago único de ${priceDisplayUsd}!` 
              : `Hoje inclusos 100% GRÁTIS dentro do seu pagamento único de ${priceDisplayUsd}!`}
          </div>
        </div>
      </section>

      {/* 🤖 4 INTERACTIVE TOOLS INCLUDED IN THE APP */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-slate-900/50 border border-slate-800/80 rounded-3xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-indigo-400 text-xs font-black uppercase tracking-widest bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            {isEs ? 'TECNOLOGÍA EXCLUSIVA' : 'TECNOLOGIA EXCLUSIVA'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3">
            {isEs ? '4 Herramientas Inteligentes en tu Portal' : '4 Ferramentas Inteligentes no seu Portal'}
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            {isEs ? 'Ningún otro pack del mercado incluye estas funciones:' : 'Nenhum outro pack do mercado possui essas ferramentas:'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Tool 1: AI Assistant */}
          <div className="bg-slate-950 border border-indigo-500/40 rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-3">
                <Bot className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-1">
                {isEs ? '1. Asistente IA de Fiestas' : '1. Assistente IA de Festas'}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {isEs 
                  ? 'Genera combinaciones de paletas de color, frases para invitaciones y temáticas por edad con Inteligencia Artificial.' 
                  : 'Gera ideias de temas, paletas de cores exatas e frases personalizadas para convites com IA.'}
              </p>
            </div>
            <button
              onClick={onGoToPortal}
              className="mt-4 text-xs font-bold text-indigo-300 hover:text-indigo-200 flex items-center gap-1 cursor-pointer"
            >
              <span>{isEs ? 'Probar en vivo' : 'Testar ao vivo'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Tool 2: Profit Calculator */}
          <div className="bg-slate-950 border border-emerald-500/40 rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                <DollarSign className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-1">
                {isEs ? '2. Calculadora de Ganancias' : '2. Calculadora de Lucro'}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {isEs 
                  ? 'Calcula el costo de papel, tinta, cintas y mano de obra para Kits Básico, Luxo y Pegue e Monte.' 
                  : 'Calcula custo de papel fotográfico, fita, laços e hora de trabalho para precificar kits com lucro de até 300%.'}
              </p>
            </div>
            <button
              onClick={onGoToPortal}
              className="mt-4 text-xs font-bold text-emerald-300 hover:text-emerald-200 flex items-center gap-1 cursor-pointer"
            >
              <span>{isEs ? 'Probar en vivo' : 'Testar ao vivo'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Tool 3: Paper Guide */}
          <div className="bg-slate-950 border border-amber-500/40 rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                <Printer className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-1">
                {isEs ? '3. Guía Maestra de Papeles' : '3. Guia de Papéis & Impressão'}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {isEs 
                  ? 'Gramajes recomendados (Fotográfico 180g, Opalina 240g, Kraft) y configuraciones de impresora.' 
                  : 'Gramaturas recomendadas (Glossy 180g, Matte 230g, Kraft) e configurações de impressora jato de tinta.'}
              </p>
            </div>
            <button
              onClick={onGoToPortal}
              className="mt-4 text-xs font-bold text-amber-300 hover:text-amber-200 flex items-center gap-1 cursor-pointer"
            >
              <span>{isEs ? 'Ver guía' : 'Ver guia'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Tool 4: 10 Video Tutorials */}
          <div className="bg-slate-950 border border-rose-500/40 rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center mb-3">
                <Play className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-1">
                {isEs ? '4. 10 Video-Tutoriales' : '4. 10 Vídeo Aulas Passo a Passo'}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {isEs 
                  ? 'Aprende a editar en Canva, ensamblar cajitas 3D y aplicar efectos dorados y glitter.' 
                  : 'Aprenda a editar no Canva pelo celular, técnicas de vinco e montagem de caixas sem errar.'}
              </p>
            </div>
            <button
              onClick={onGoToPortal}
              className="mt-4 text-xs font-bold text-rose-300 hover:text-rose-200 flex items-center gap-1 cursor-pointer"
            >
              <span>{isEs ? 'Ver aulas' : 'Ver aulas'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* ⭐ SOCIAL PROOF / REVIEWS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-1 text-amber-400 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400" />
            ))}
            <span className="text-white font-bold text-sm ml-2">4.9 / 5.0 (+3.420 clientas felices)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            {isEs ? 'Lo Que Dicen Nuestras Clientas' : 'O Que Dizem Nossas Clientes'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {isEs 
                  ? '"Pagué con OXXO en México y me llegó al instante. Hice el cumpleaños de mi hija de Paw Patrol en una sola tarde usando mi impresora normal. ¡Ahorré muchísimo dinero!"' 
                  : '"Paguei no PIX e recebi em 1 segundo. Fiz a festa do meu filho de 4 anos e todo mundo elogiou as caixinhas Milk. O material é muito completo!"'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
              <div>
                <h5 className="text-xs font-bold text-white">Mariana González</h5>
                <p className="text-[11px] text-slate-400">🇲🇽 Monterrey, México</p>
              </div>
              <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">Compradora Verificada</span>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {isEs 
                  ? '"Inicié mi emprendimiento de papelería en casa gracias a la calculadora de precios y los moldes. Ya vendí 8 kits de fiesta en mi ciudad en mi primera semana."' 
                  : '"Comecei a vender kits Pegue e Monte aqui no meu bairro. A calculadora de preços me ajudou muito a não cobrar errado. Já recuperei o investimento 20 vezes!"'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
              <div>
                <h5 className="text-xs font-bold text-white">Carla Valencia</h5>
                <p className="text-[11px] text-slate-400">🇨🇴 Medellín, Colombia</p>
              </div>
              <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">Compradora Verificada</span>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {isEs 
                  ? '"No tenía experiencia con Canva y con los videos entendí todo en 10 minutos. Los toppers en 3D quedan preciosos. ¡100% recomendado!"' 
                  : '"Não entendia nada de edição e consegui fazer tudo pelo celular. Os topos de bolo 3D ficam incríveis e os clientes adoram!"'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
              <div>
                <h5 className="text-xs font-bold text-white">Andrea Morales</h5>
                <p className="text-[11px] text-slate-400">🇵🇪 Lima, Perú</p>
              </div>
              <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">Compradora Verificada</span>
            </div>
          </div>

        </div>
      </section>

      {/* 💰 PRICING & CHECKOUT SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center" id="oferta">
        
        <div className="relative bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-2 border-yellow-400/80 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-yellow-500/10">
          
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 text-slate-950 px-6 py-1.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider shadow-lg">
            ⚡ {isEs ? `OFERTA DE LANZAMIENTO (${discountText} OFF)` : `OFERTA DE LANÇAMENTO (${discountText} OFF)`}
          </div>

          <h3 className="text-2xl sm:text-4xl font-black text-white mt-2">
            {isEs ? 'Pack Fiesta Lista 2026 + 10 Bônus + IA' : 'Kit Pronto para Festa 2026 + 10 Bônus + IA'}
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            {isEs ? 'Pago único sin suscripciones ni mensualidades • Acceso de por vida' : 'Pagamento único sem mensalidades • Acesso vitalício'}
          </p>

          {/* Pricing display */}
          <div className="my-8">
            <div className="text-slate-500 text-lg line-through font-bold">
              {isEs ? 'Precio Regular:' : 'Preço Regular:'} {currentPrice.symbol}{currentPrice.regular} {selectedCurrency === 'USD' ? 'USD' : `(${selectedCurrency})`}
            </div>
            <div className="text-5xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400 mt-1">
              {currentPrice.symbol}{currentPrice.promo}
            </div>
            <div className="text-xs font-bold text-emerald-400 mt-2">
              {isEs ? `¡Ahorras más del ${discountText} comprando hoy!` : `Economize mais de ${discountText} comprando hoje!`}
            </div>
          </div>

          {/* Value summary checkmarks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-left max-w-lg mx-auto text-xs sm:text-sm text-slate-200 mb-8">
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> +10.000 Plantillas en Canva Gratis</div>
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> 10 Mega Bônus Valuados en ${PRICING_CONFIG.bonusValueUsd} USD</div>
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Asistente Inteligente con IA</div>
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Calculadora de Precios y Ganancias</div>
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> 10 Video Aulas Paso a Paso</div>
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Licencia Comercial Ilimitada</div>
          </div>

          {/* Action CTA */}
          <button
            onClick={() => setIsCheckoutModalOpen(true)}
            className="w-full py-5 px-8 rounded-2xl font-black text-slate-950 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 hover:from-yellow-300 hover:to-amber-200 shadow-2xl shadow-yellow-400/40 transform hover:scale-[1.02] active:scale-95 transition duration-200 flex items-center justify-center gap-3 text-xl cursor-pointer"
          >
            <span>{isEs ? '¡SÍ, QUIERO EL ACCESO INMEDIATO!' : 'SIM, QUERO ACESSO IMEDIATO!'}</span>
            <ArrowRight className="w-6 h-6 stroke-[3]" />
          </button>

          <p className="text-slate-400 text-xs mt-4 flex items-center justify-center gap-2">
            <Lock className="w-3.5 h-3.5 text-emerald-400" /> {isEs ? 'Transacción 100% segura y encriptada' : 'Transação 100% segura e criptografada'}
          </p>

        </div>
      </section>

      {/* 🛡️ GUARANTEE */}
      <section className="py-12 px-4 max-w-3xl mx-auto text-center">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl flex flex-col sm:flex-row items-center gap-6 text-left">
          <div className="w-24 h-24 rounded-2xl bg-pink-500/20 border border-pink-500/40 flex items-center justify-center text-pink-400 shrink-0">
            <ShieldCheck className="w-14 h-14" />
          </div>
          <div>
            <h3 className="text-xl font-black text-white">
              {isEs ? 'Garantía Incondicional de 7 Días (Riesgo Cero)' : 'Garantia Incondicional de 7 Dias (Risco Zero)'}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
              {isEs 
                ? 'Prueba todo el Pack Fiesta Lista por 7 días. Abre los archivos en Canva, usa la calculadora de ganancias, mira las video-aulas. Si no quedas 100% enamorada del material, te devolvemos cada centavo sin preguntas.' 
                : 'Teste todo o material por 7 dias. Se por qualquer motivo achar que não valeu a pena, basta nos enviar um e-mail que devolveremos 100% do seu dinheiro. Sem letras miúdas!'}
            </p>
          </div>
        </div>
      </section>

      {/* ❓ FAQS */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            {isEs ? 'Preguntas Frecuentes' : 'Perguntas Frequentes'}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            {isEs ? 'Resolvemos tus dudas antes de comprar' : 'Tire suas dúvidas antes de comprar'}
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full p-4 sm:p-5 text-left font-bold text-white text-sm sm:text-base flex items-center justify-between gap-4 cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-pink-400 transition-transform duration-200 shrink-0 ${activeFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              {activeFaq === idx && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 border-t border-slate-800/80 pt-3 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 📌 STICKY BOTTOM BAR (Floating with timer) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 border-t border-pink-500/40 backdrop-blur-md p-3 sm:p-4 shadow-2xl">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
          <div className="hidden sm:block text-left">
            <div className="text-xs text-yellow-300 font-bold flex items-center gap-1">
              <Flame className="w-3.5 h-3.5" /> {isEs ? 'OFERTA ACTIVA' : 'OFERTA ATIVA'}: {formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}
            </div>
            <div className="text-sm font-black text-white">
              {isEs ? 'Pack Fiesta Lista + 10 Bônus' : 'Kit Pronto para Festa + 10 Bônus'}
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <div className="text-left sm:text-right">
              <span className="text-[10px] text-slate-400 block line-through">{currentPrice.symbol}{currentPrice.regular}</span>
              <span className="text-xl font-black text-yellow-300">{currentPrice.symbol}{currentPrice.promo}</span>
            </div>

            <button
              onClick={() => setIsCheckoutModalOpen(true)}
              className="py-3 px-6 rounded-xl font-black text-slate-950 bg-gradient-to-r from-yellow-400 to-amber-300 hover:from-yellow-300 hover:to-amber-200 text-xs sm:text-sm shadow-lg active:scale-95 transition cursor-pointer whitespace-nowrap"
            >
              {isEs ? '¡COMPRAR AHORA!' : 'COMPRAR AGORA!'}
            </button>
          </div>
        </div>
      </div>

      {/* 🔔 LIVE PURCHASES TOAST */}
      {recentBuyer && (
        <div className="fixed bottom-20 left-4 z-50 bg-slate-900/95 border border-pink-500/50 p-3 rounded-2xl shadow-2xl flex items-center gap-3 text-xs max-w-xs animate-in slide-in-from-bottom duration-300">
          <div className="text-2xl">{recentBuyer.flag}</div>
          <div>
            <p className="font-bold text-white">{recentBuyer.name} <span className="text-slate-400 font-normal">({recentBuyer.city})</span></p>
            <p className="text-emerald-400 text-[11px] font-semibold">{isEs ? 'Compró el Pack Fiesta Lista' : 'Comprou o Kit Festa'} • {recentBuyer.time}</p>
          </div>
        </div>
      )}

      {/* 💳 CHECKOUT / DELIVERABLE MODAL */}
      {isCheckoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border-2 border-yellow-400 rounded-3xl max-w-md w-full p-6 text-center shadow-2xl relative">
            <button
              onClick={() => setIsCheckoutModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-full bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-14 h-14 rounded-2xl bg-yellow-400/20 text-yellow-400 flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-black text-white">
              {isEs ? '¡Estás a un paso de tu acceso!' : 'Você está a um passo do seu acesso!'}
            </h3>
            <p className="text-xs text-slate-300 mt-2">
              {isEs 
                ? 'Elige cómo deseas continuar para recibir tu Pack Fiesta Lista:' 
                : 'Escolha como deseja prosseguir para receber o seu Kit Festa:'}
            </p>

            {/* Currency Banner */}
            <div className="mt-3 mb-1 bg-emerald-950/60 border border-emerald-500/50 rounded-xl p-2 text-emerald-300 text-xs font-bold flex items-center justify-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{isEs ? `🌎 ¡Pago en tu moneda local (${selectedCurrency})!` : `🌎 Pagamento na sua moeda local (${selectedCurrency})!`}</span>
            </div>

            <div className="mt-4 space-y-3">
              {/* Checkout link button */}
              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-300 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg hover:from-yellow-300 hover:to-amber-200 transition"
              >
                <CreditCard className="w-4 h-4" />
                <span>{isEs ? `Pagar en Mi Moneda (${currentPrice.symbol}${currentPrice.promo} ${selectedCurrency})` : `Pagar na Minha Moeda (${currentPrice.symbol}${currentPrice.promo} ${selectedCurrency})`}</span>
              </a>

              {/* Instant Access to deliverable button */}
              <button
                onClick={() => {
                  setIsCheckoutModalOpen(false);
                  onGoToPortal();
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-pink-300 border border-pink-500/30 font-black text-sm flex items-center justify-center gap-2 transition cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>{isEs ? 'Ver Portal Entregable en Vivo (Demo)' : 'Ver Portal Entregável ao Vivo (Demo)'}</span>
              </button>
            </div>

            <div className="mt-4 text-[11px] text-slate-400 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Garantía de 7 días • Acceso de por vida</span>
            </div>
          </div>
        </div>
      )}

      {/* 🦶 Footer */}
      <footer className="mt-20 text-center text-xs text-slate-500 border-t border-slate-900 pt-8 px-4">
        <p>© 2026 Pack Fiesta Lista. {isEs ? 'Todos los derechos reservados.' : 'Todos os direitos reservados.'}</p>
        <p className="mt-1">Canva® es una marca registrada de Canva Pty Ltd. Este sitio no es parte del sitio web de Facebook o Facebook Inc.</p>
        <div className="mt-4 flex items-center justify-center gap-4">
          <button onClick={onGoToPortal} className="text-pink-400 hover:underline">
            {isEs ? 'Acceder al Portal de Clientes' : 'Acessar o Portal de Clientes'}
          </button>
        </div>
      </footer>

    </div>
  );
};
