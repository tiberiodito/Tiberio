import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { FAQS_ES, FAQS_PT } from '../data/faqsData';

interface FAQSectionProps {
  language?: 'es' | 'pt';
}

export const FAQSection: React.FC<FAQSectionProps> = ({ language = 'es' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const faqs = language === 'pt' ? FAQS_PT : FAQS_ES;

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white via-pink-50/40 to-white">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Tag & Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-800 px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wide mb-3 border border-teal-200 shadow-xs">
            <HelpCircle className="w-4 h-4 text-teal-600" />
            <span>{language === 'pt' ? 'TIRE SUAS DÚVIDAS' : 'PREGUNTAS FRECUENTES'}</span>
          </div>

          <h2 className="font-fredoka text-2xl sm:text-4xl font-extrabold text-slate-900 uppercase tracking-tight mb-3">
            {language === 'pt' ? 'Perguntas Frequentes & Respostas Claras' : '¿Tienes Dudas? Resolvemos Todo Aquí'}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-medium max-w-xl mx-auto">
            {language === 'pt'
              ? 'Tudo o que você precisa saber para aproveitar o Pack Fiesta Lista com total segurança e tranquilidade.'
              : 'Todo lo que necesitas saber antes de acceder para comenzar a crear y personalizar tus fiestas hoy mismo.'}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border-2 transition-all duration-200 overflow-hidden bg-white ${
                  isOpen
                    ? 'border-teal-400 shadow-lg ring-2 ring-teal-100'
                    : 'border-teal-100/90 hover:border-teal-300 shadow-xs'
                }`}
              >
                <button
                  id={`faq-btn-${index}`}
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-4 px-4 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? 'bg-teal-500 text-white' : 'bg-teal-50 text-teal-600 border border-teal-200'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="font-fredoka font-bold text-sm sm:text-base text-slate-800 tracking-normal">
                      {faq.q}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-teal-100 text-teal-700' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-teal-50 bg-gradient-to-b from-teal-50/20 to-white">
                    <p className="font-medium text-slate-700">{faq.a}</p>
                    {faq.category && (
                      <div className="mt-3 flex items-center gap-1.5 text-[11px] font-bold text-teal-700">
                        <Sparkles className="w-3 h-3" />
                        <span>Categoría: {faq.category}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Security and Guarantee Badge Callout */}
        <div className="mt-10 sm:mt-12 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-pink-50 border-2 border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-fredoka font-extrabold text-slate-900 text-sm sm:text-base">
                {language === 'pt' ? 'Compra 100% Segura e com Garantia Total' : 'Compra 100% Segura con Garantía de 7 Días'}
              </h4>
              <p className="text-xs text-slate-600 font-medium">
                {language === 'pt'
                  ? 'Acesso imediato no seu e-mail logo após a confirmação. Suporte dedicado.'
                  : 'Recibes tus datos de acceso al instante por correo. Soporte siempre disponible.'}
              </p>
            </div>
          </div>
          <a
            href="#checkout-section"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ff1493] to-[#ff40a1] hover:from-[#e0007d] hover:to-[#e6328f] text-white font-fredoka font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 whitespace-nowrap shrink-0"
          >
            <Sparkles className="w-4 h-4" />
            <span>{language === 'pt' ? 'QUERO MEU ACESSO AGORA' : 'QUIERO MI ACCESO AHORA'}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
