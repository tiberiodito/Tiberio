import React from 'react';
import { 
  Sparkles, 
  Heart, 
  HelpCircle, 
  MessageCircle, 
  ShieldCheck, 
  Clock, 
  ExternalLink,
  Crown,
  Calculator,
  CalendarCheck,
  Video,
  DollarSign,
  ChevronRight
} from 'lucide-react';
import logoImg from '../assets/images/pack_fiesta_logo_1787101845875.jpg';

interface FooterProps {
  language: 'es' | 'pt';
  onOpenVideos: () => void;
  onOpenCalculator: () => void;
  onOpenPricingCalculator: () => void;
  onOpenPlanner: () => void;
  onOpenProducerAccess?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onOpenVideos,
  onOpenCalculator,
  onOpenPricingCalculator,
  onOpenPlanner,
  onOpenProducerAccess,
}) => {
  const isEs = language === 'es';

  return (
    <footer className="bg-white border-t-2 border-pink-100 mt-16 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Highlighted Tools Bar right at the footer top */}
        <div className="mb-10 p-6 bg-gradient-to-r from-pink-50/70 via-amber-50/50 to-teal-50/50 border-2 border-pink-100 rounded-3xl shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                <Crown className="w-5 h-5 text-amber-500 fill-amber-300" />
                <span>{isEs ? 'Herramientas Prácticas para tu Fiesta' : 'Ferramentas Práticas para sua Festa'}</span>
                <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-pink-500 text-white uppercase tracking-wider">
                  {isEs ? 'Acceso Rápido' : 'Acesso Rápido'}
                </span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {isEs 
                  ? 'Calcula precios de venta con ganancia, hojas de papel, organiza tareas y aprende a armar todo' 
                  : 'Calcule preço de venda com lucro, folhas de papel, organize tarefas e aprenda a montar tudo'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            
            {/* Tool 1: Calculadora de Precios & Lucro */}
            <button
              id="footer-pricing-card-btn"
              onClick={onOpenPricingCalculator}
              className="flex items-center justify-between p-3.5 bg-white hover:bg-emerald-50/60 border-2 border-emerald-200/90 rounded-2xl transition cursor-pointer shadow-xs hover:shadow-md hover:-translate-y-0.5 text-left group"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition">
                  <DollarSign className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-emerald-700 transition">
                    {isEs ? 'Precios & Ganancia' : 'Preço de Venda & Lucro'}
                  </h4>
                  <p className="text-[11px] text-emerald-700 font-semibold mt-0.5">
                    {isEs ? 'Calcula costos y utilidad' : 'Custos e lucro garantido'}
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-emerald-400 group-hover:text-emerald-600 transition shrink-0" />
            </button>

            {/* Tool 2: Calculadora de Papéis */}
            <button
              id="footer-calculator-card-btn"
              onClick={onOpenCalculator}
              className="flex items-center justify-between p-3.5 bg-white hover:bg-teal-50/60 border-2 border-teal-200/90 rounded-2xl transition cursor-pointer shadow-xs hover:shadow-md hover:-translate-y-0.5 text-left group"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-teal-500 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition">
                  <Calculator className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-teal-700 transition">
                    {isEs ? 'Simulador de Papeles' : 'Simulador de Papéis'}
                  </h4>
                  <p className="text-[11px] text-teal-700 font-semibold mt-0.5">
                    {isEs ? 'Gramajes & Hojas Exactas' : 'Gramaturas & Quantidade'}
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-teal-400 group-hover:text-teal-600 transition shrink-0" />
            </button>

            {/* Tool 3: Organizador & Checklist */}
            <button
              id="footer-planner-card-btn"
              onClick={onOpenPlanner}
              className="flex items-center justify-between p-3.5 bg-white hover:bg-purple-50/60 border-2 border-purple-200/90 rounded-2xl transition cursor-pointer shadow-xs hover:shadow-md hover:-translate-y-0.5 text-left group"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-purple-500 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition">
                  <CalendarCheck className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-purple-700 transition">
                    {isEs ? 'Organizador & Checklist' : 'Organizador & Checklist'}
                  </h4>
                  <p className="text-[11px] text-purple-700 font-semibold mt-0.5">
                    {isEs ? 'Planifica semana a semana' : 'Planeje semana a semana'}
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-purple-400 group-hover:text-purple-600 transition shrink-0" />
            </button>

            {/* Tool 4: 10 Tutoriais em Vídeo */}
            <button
              id="footer-videos-card-btn"
              onClick={onOpenVideos}
              className="flex items-center justify-between p-3.5 bg-white hover:bg-pink-50/60 border-2 border-pink-200/90 rounded-2xl transition cursor-pointer shadow-xs hover:shadow-md hover:-translate-y-0.5 text-left group"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-pink-500 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition">
                  <Video className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-pink-700 transition">
                    {isEs ? '10 Video Tutoriales' : '10 Tutoriais em Vídeo'}
                  </h4>
                  <p className="text-[11px] text-pink-700 font-semibold mt-0.5">
                    {isEs ? 'Edición & corte fácil' : 'Edição e montagem passo a passo'}
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-pink-400 group-hover:text-pink-600 transition shrink-0" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-pink-100">
          
          {/* Col 1: Brand & Promise */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-md border-2 border-pink-200 bg-amber-50">
                <img 
                  src={logoImg} 
                  alt="Pack Fiesta Lista Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-black text-xl bg-gradient-to-r from-pink-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                  Pack Fiesta Lista
                </span>
                <p className="text-[11px] text-pink-600 font-bold">
                  {isEs ? '✨ Papelería Creativa & Canva para Mamás' : '✨ Papelaria Criativa & Canva para Mães'}
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-500 max-w-md leading-relaxed">
              {isEs 
                ? 'El portal más completo de papelería creativa y plantillas de Canva para mamás y emprendedoras en América Latina. Diseña, edita e imprime recuerdos inolvidables con total facilidad.'
                : 'O portal mais completo de papelaria criativa e moldes do Canva para mães e artesãs na América Latina. Crie, edite e imprima lembrancinhas inesquecíveis com facilidade.'}
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-600 pt-2 font-semibold">
              <span className="flex items-center gap-1 text-teal-700">
                <Clock className="w-3.5 h-3.5 text-teal-600" />
                {isEs ? 'Acceso de por Vida' : 'Acesso Vitalício'}
              </span>
              <span className="flex items-center gap-1 text-pink-700">
                <ShieldCheck className="w-3.5 h-3.5 text-pink-600" />
                {isEs ? '100% Canva Gratis' : '100% Canva Grátis'}
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Crown className="w-3.5 h-3.5 text-amber-500" />
              {isEs ? 'Atajos Rápidos' : 'Atalhos Rápidos'}
            </h4>
            <div className="space-y-2">
              <button 
                onClick={onOpenCalculator} 
                className="w-full flex items-center gap-2.5 p-2 rounded-xl text-xs font-bold text-slate-700 hover:text-teal-700 hover:bg-teal-50 border border-transparent hover:border-teal-200 transition cursor-pointer text-left"
              >
                <div className="w-7 h-7 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 font-bold">
                  <Calculator className="w-4 h-4 stroke-[2.5]" />
                </div>
                <span>{isEs ? 'Calculadora de Papeles' : 'Calculadora de Papéis'}</span>
              </button>

              <button 
                onClick={onOpenPlanner} 
                className="w-full flex items-center gap-2.5 p-2 rounded-xl text-xs font-bold text-slate-700 hover:text-purple-700 hover:bg-purple-50 border border-transparent hover:border-purple-200 transition cursor-pointer text-left"
              >
                <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 font-bold">
                  <CalendarCheck className="w-4 h-4 stroke-[2.5]" />
                </div>
                <span>{isEs ? 'Organizador & Checklist' : 'Organizador & Checklist'}</span>
              </button>

              <button 
                onClick={onOpenVideos} 
                className="w-full flex items-center gap-2.5 p-2 rounded-xl text-xs font-bold text-slate-700 hover:text-pink-700 hover:bg-pink-50 border border-transparent hover:border-pink-200 transition cursor-pointer text-left"
              >
                <div className="w-7 h-7 rounded-lg bg-pink-100 text-pink-700 flex items-center justify-center shrink-0 font-bold">
                  <Video className="w-4 h-4 stroke-[2.5]" />
                </div>
                <span>{isEs ? '10 Video Tutoriales' : '10 Tutoriais em Vídeo'}</span>
              </button>
            </div>
          </div>

          {/* Col 3: Support */}
          <div>
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-3">
              {isEs ? '¿Necesitas Ayuda?' : 'Precisa de Ajuda?'}
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed mb-3">
              {isEs 
                ? 'Si tienes algún inconveniente al abrir un enlace o archivo, nuestro equipo te apoya con mucho cariño.'
                : 'Se tiver dúvidas com algum link ou molde, nosso time de suporte te atende com carinho.'}
            </p>
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-pink-50 text-pink-700 text-xs font-bold border border-pink-200">
              <HelpCircle className="w-3.5 h-3.5 text-pink-600" />
              <span>{isEs ? 'Soporte al Cliente Oficial' : 'Suporte Oficial ao Cliente'}</span>
            </div>
          </div>

        </div>

        {/* Bottom Note */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Pack Fiesta Lista. {isEs ? 'Todos los derechos reservados.' : 'Todos os direitos reservados.'}
          </p>
          
          <div className="flex items-center gap-4">
            <p className="flex items-center gap-1 font-medium text-pink-600">
              <span>{isEs ? 'Hecho con amor para mamás' : 'Feito com carinho para mães'}</span>
              <Heart className="w-3.5 h-3.5 fill-pink-500 text-pink-500" />
            </p>

            {onOpenProducerAccess && (
              <button
                type="button"
                onClick={onOpenProducerAccess}
                className="text-[11px] text-slate-400 hover:text-purple-600 transition flex items-center gap-1 cursor-pointer underline decoration-dotted"
                title="Acesso Exclusivo do Produtor"
              >
                <span>⚙️</span>
                <span>Acesso do Produtor</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
};
