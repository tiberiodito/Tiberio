import React, { useState } from 'react';
import { 
  Sparkles, 
  MousePointerClick, 
  Edit3, 
  Download, 
  Scissors, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  Printer,
  FileCheck,
  Crown
} from 'lucide-react';

interface QuickStartGuideProps {
  language: 'es' | 'pt';
}

export const QuickStartGuide: React.FC<QuickStartGuideProps> = ({ language }) => {
  const [isOpen, setIsOpen] = useState(true);
  const isEs = language === 'es';

  const steps = [
    {
      step: '1',
      title: isEs ? '1. Abrir en Canva Gratis' : '1. Abrir no Canva Grátis',
      icon: MousePointerClick,
      color: 'bg-teal-500 text-white',
      badge: isEs ? '1 Clic' : '1 Clique',
      description: isEs
        ? 'Elige el recurso abajo y haz clic en "Abrir en Canva". Se abrirá en tu cuenta gratuita sin costo alguno.'
        : 'Escolha o recurso abaixo e clique em "Abrir no Canva". Ele abrirá na sua conta grátis sem custos.'
    },
    {
      step: '2',
      title: isEs ? '2. Editar Nombre y Foto' : '2. Editar Nome e Foto',
      icon: Edit3,
      color: 'bg-pink-500 text-white',
      badge: isEs ? 'Fácil' : 'Fácil',
      description: isEs
        ? 'Haz doble clic en el texto para escribir el nombre y edad de tu hijo/a. Sube fotos desde tu teléfono o PC.'
        : 'Dê dois cliques no texto para trocar pelo nome e idade. Suba fotos direto do celular ou computador.'
    },
    {
      step: '3',
      title: isEs ? '3. Descargar en PDF A4' : '3. Baixar em PDF A4',
      icon: Download,
      color: 'bg-purple-500 text-white',
      badge: isEs ? 'Nítido' : 'Nítido',
      description: isEs
        ? 'Ve a Compartir > Descargar > Elige "PDF para Impresión". Esto garantiza colores nítidos y sin pixelar.'
        : 'Vá em Compartilhar > Baixar > Escolha "PDF para Impressão". Isso garante cores nítidas e sem distorções.'
    },
    {
      step: '4',
      title: isEs ? '4. Imprimir y Armar' : '4. Imprimir e Montar',
      icon: Scissors,
      color: 'bg-amber-500 text-white',
      badge: isEs ? '¡Listo!' : 'Pronto!',
      description: isEs
        ? 'Usa Papel Fotográfico Glossy 200g-230g. Pasa una regla para marcar pliegues y pega con cinta doble cara.'
        : 'Use Papel Fotográfico Glossy 200g-230g. Passe uma régua para vincar as dobras e cole com fita dupla face.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-6">
      <div className="bg-white border-2 border-pink-100 rounded-3xl overflow-hidden shadow-sm">
        
        {/* Toggle Bar */}
        <button
          id="quick-start-toggle-btn"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 sm:px-6 bg-gradient-to-r from-pink-50/80 via-amber-50/50 to-teal-50/50 hover:from-pink-100/80 transition cursor-pointer text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-500 to-amber-400 text-white flex items-center justify-center font-bold text-sm shadow-sm shadow-pink-200">
              <Crown className="w-5 h-5 fill-amber-200 text-amber-200" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-extrabold text-slate-800 flex items-center gap-2">
                {isEs ? 'Guía Rápida: Cómo Crear y Armar tus Diseños en 4 Pasos' : 'Guia Rápido: Como Criar e Montar em 4 Passos'}
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-pink-500 text-white font-extrabold uppercase tracking-wider shadow-2xs">
                  {isEs ? 'Paso a Paso Fácil' : 'Passo a Passo Fácil'}
                </span>
              </h3>
              <p className="text-xs text-slate-500 hidden sm:block">
                {isEs ? 'Diseñado especialmente para mamás sin experiencia previa en diseño o manualidades' : 'Criado especialmente para mães sem experiência em design ou artesanato'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-pink-600 text-xs font-bold bg-white px-3 py-1.5 rounded-xl border border-pink-200 shadow-2xs">
            <span>{isOpen ? (isEs ? 'Ocultar' : 'Ocultar') : (isEs ? 'Ver Pasos' : 'Ver Passos')}</span>
            {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </button>

        {/* Collapsible Steps Content */}
        {isOpen && (
          <div className="p-6 bg-white border-t border-pink-100 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div 
                    key={idx} 
                    className="p-4 rounded-2xl bg-slate-50/90 border border-slate-200/80 hover:border-pink-300 hover:bg-pink-50/20 hover:shadow-xs transition relative group"
                  >
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className={`w-9 h-9 rounded-xl ${step.color} flex items-center justify-center font-black text-sm shadow-xs`}>
                        {step.step}
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700">
                        {step.badge}
                      </span>
                    </div>
                    <h4 className="text-xs font-black text-slate-800 mb-1.5">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Pro Tips Bar */}
            <div className="mt-4 p-3.5 bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-2xl flex items-center gap-3 text-xs text-amber-950">
              <span className="font-black text-amber-800 shrink-0 text-sm">💡 {isEs ? 'Consejo de Oro:' : 'Dica de Ouro:'}</span>
              <span className="text-[12px] leading-relaxed font-medium">
                {isEs 
                  ? 'Al imprimir en casa, selecciona siempre "Tamaño Real (100%)" en los ajustes de impresión para que las pestañas de las cajitas encajen perfectamente.'
                  : 'Ao imprimir em casa, selecione sempre "Tamanho Real (100%)" nas configurações para que os encaixes das caixinhas fechem perfeitos.'}
              </span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
