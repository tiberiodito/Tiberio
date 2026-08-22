import React, { useState } from 'react';
import { 
  X, 
  Calculator, 
  Printer, 
  Layers, 
  Sparkles, 
  Scissors, 
  Check, 
  HelpCircle, 
  ShoppingBag, 
  Info,
  AlertTriangle,
  Settings,
  Wrench,
  Droplet,
  Palette,
  PackageOpen,
  Utensils,
  Cake,
  Mail,
  BookOpen,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { 
  PAPER_GUIDE, 
  ASSEMBLY_TIPS, 
  PROJECT_SIMULATIONS, 
  TROUBLESHOOTING_GUIDE,
  ProjectSimulation 
} from '../data/paperGuide';

interface PaperCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  language?: 'es' | 'pt';
}

export const PaperCalculatorModal: React.FC<PaperCalculatorModalProps> = ({
  isOpen,
  onClose,
  language = 'es',
}) => {
  const isEs = language === 'es';

  // Navigation tab: simulator, troubleshooter, calculator, guide
  const [activeTab, setActiveTab] = useState<'simulator' | 'troubleshooter' | 'calculator' | 'guide'>('simulator');

  // Selected project for simulator
  const [selectedProjectId, setSelectedProjectId] = useState<string>('cajitas-milk');
  const selectedProject = PROJECT_SIMULATIONS.find(p => p.id === selectedProjectId) || PROJECT_SIMULATIONS[0];

  // Selected printer brand for driver tip
  const [printerBrand, setPrinterBrand] = useState<'epson' | 'canon' | 'hp' | 'laser'>('epson');

  // Calculator inputs
  const [milkBoxes, setMilkBoxes] = useState<number>(15);
  const [gableBoxes, setGableBoxes] = useState<number>(10);
  const [chipBags, setChipBags] = useState<number>(15);
  const [cakeToppers, setCakeToppers] = useState<number>(1);
  const [candyBarStickers, setCandyBarStickers] = useState<number>(30);
  const [coloringBooks, setColoringBooks] = useState<number>(10);

  // Calculations
  const glossySheetsHeavy = milkBoxes * 1 + gableBoxes * 1 + cakeToppers * 2 + coloringBooks * 1;
  const glossySheetsThin = chipBags * 1;
  const adhesiveSheets = Math.ceil(candyBarStickers / 6);
  const bondSheets = coloringBooks * 2;
  const totalA4Sheets = glossySheetsHeavy + glossySheetsThin + adhesiveSheets + bondSheets;
  const estimatedTapeRolls = Math.max(1, Math.ceil((milkBoxes + gableBoxes + chipBags) / 25));

  // Expanded troubleshooting item
  const [expandedIssue, setExpandedIssue] = useState<string | null>('issue-dark-colors');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
      
      <div 
        id="paper-calculator-modal"
        className="bg-white rounded-3xl w-full max-w-5xl max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
      >
        
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-100 bg-gradient-to-r from-teal-50 via-cyan-50 to-pink-50 shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-teal-600 to-cyan-500 text-white flex items-center justify-center shadow-md shadow-teal-200 shrink-0">
              <Printer className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="text-sm sm:text-lg font-black text-slate-900 tracking-tight truncate">
                  {isEs ? 'Simulador de Papeles & Configuración de Impresora' : 'Simulador de Papéis & Configuração de Impressão'}
                </h2>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-teal-100 text-teal-800 border border-teal-300">
                  {isEs ? 'Guía Anti-Errores' : 'Guia Anti-Erros'}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 truncate">
                {isEs 
                  ? 'Aprende qué papel usar, cómo configurar tu impresora y resuelve cualquier problema de color' 
                  : 'Saiba qual papel comprar, calibre sua impressora e resolva cores escuras ou borrões'}
              </p>
            </div>
          </div>

          <button
            id="close-calculator-modal-btn"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition cursor-pointer shrink-0 ml-2"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 sm:gap-2 px-4 sm:px-6 pt-3 border-b border-slate-100 bg-white overflow-x-auto no-scrollbar shrink-0">
          <button
            onClick={() => setActiveTab('simulator')}
            className={`pb-2.5 px-2 text-xs font-black transition border-b-2 cursor-pointer shrink-0 flex items-center gap-1.5 ${
              activeTab === 'simulator'
                ? 'border-teal-600 text-teal-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>{isEs ? '1. Simulador por Proyecto' : '1. Simulador por Projeto'}</span>
          </button>

          <button
            onClick={() => setActiveTab('troubleshooter')}
            className={`pb-2.5 px-2 text-xs font-black transition border-b-2 cursor-pointer shrink-0 flex items-center gap-1.5 ${
              activeTab === 'troubleshooter'
                ? 'border-teal-600 text-teal-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Wrench className="w-3.5 h-3.5 text-amber-500" />
            <span>{isEs ? '2. Solucionador de Impresión' : '2. Dúvidas de Impressão'}</span>
          </button>

          <button
            onClick={() => setActiveTab('calculator')}
            className={`pb-2.5 px-2 text-xs font-black transition border-b-2 cursor-pointer shrink-0 flex items-center gap-1.5 ${
              activeTab === 'calculator'
                ? 'border-teal-600 text-teal-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Calculator className="w-3.5 h-3.5 text-pink-500" />
            <span>{isEs ? '3. Calculadora de Hojas' : '3. Quantidade de Folhas'}</span>
          </button>

          <button
            onClick={() => setActiveTab('guide')}
            className={`pb-2.5 px-2 text-xs font-black transition border-b-2 cursor-pointer shrink-0 flex items-center gap-1.5 ${
              activeTab === 'guide'
                ? 'border-teal-600 text-teal-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-purple-500" />
            <span>{isEs ? '4. Guía de Papeles' : '4. Tipos de Papel'}</span>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          
          {/* TAB 1: INTERACTIVE SIMULATOR BY PROJECT */}
          {activeTab === 'simulator' && (
            <div className="space-y-6">
              
              {/* Project Type Picker */}
              <div>
                <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-2.5">
                  🎯 {isEs ? 'Paso 1: ¿Qué tipo de recuerdo vas a armar hoy?' : 'Passo 1: O que você vai produzir agora?'}:
                </label>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                  {PROJECT_SIMULATIONS.map((proj) => (
                    <button
                      key={proj.id}
                      onClick={() => setSelectedProjectId(proj.id)}
                      className={`p-3 rounded-2xl border text-left transition cursor-pointer flex flex-col justify-between ${
                        selectedProjectId === proj.id
                          ? 'bg-teal-50 border-teal-500 ring-2 ring-teal-500/20 text-teal-950 font-black shadow-xs scale-[1.02]'
                          : 'bg-slate-50 hover:bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <span className="text-xs line-clamp-2 leading-tight">
                        {isEs ? proj.titleEs : proj.titlePt}
                      </span>
                      <span className="text-[10px] text-teal-700 font-extrabold mt-2 px-2 py-0.5 bg-white rounded-md border border-teal-200/80 w-fit">
                        {proj.grammage}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Printer Model Filter */}
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <Printer className="w-4 h-4 text-teal-600" />
                  {isEs ? 'Paso 2: ¿Cuál es tu marca de impresora?' : 'Passo 2: Qual a sua impressora doméstica?'}:
                </span>
                <div className="flex items-center gap-1.5">
                  {[
                    { id: 'epson', label: 'Epson EcoTank' },
                    { id: 'canon', label: 'Canon MegaTank' },
                    { id: 'hp', label: 'HP Ink Tank' },
                    { id: 'laser', label: 'Laser / Outra' },
                  ].map((b) => (
                    <button
                      key={b.id}
                      onClick={() => setPrinterBrand(b.id as any)}
                      className={`px-3 py-1 text-xs font-bold rounded-xl transition cursor-pointer ${
                        printerBrand === b.id
                          ? 'bg-teal-600 text-white shadow-2xs'
                          : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {b.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Simulation Result Master Card */}
              <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white border-2 border-teal-500 shadow-xl space-y-5 relative overflow-hidden">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-teal-500/30 pb-4">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-teal-300 bg-teal-500/20 px-2.5 py-0.5 rounded-full border border-teal-400/30">
                      {isEs ? selectedProject.category : selectedProject.category}
                    </span>
                    <h3 className="text-base sm:text-xl font-black text-white mt-1">
                      {isEs ? selectedProject.titleEs : selectedProject.titlePt}
                    </h3>
                  </div>

                  <span className="text-xs font-black text-amber-300 bg-amber-500/20 border border-amber-400/40 px-3 py-1 rounded-xl self-start sm:self-auto">
                    ✨ {selectedProject.finishBadge}
                  </span>
                </div>

                {/* 2 Blocks: Recommended Paper & Settings */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Left: What to Buy & What to Avoid */}
                  <div className="space-y-3">
                    <div className="p-4 rounded-2xl bg-teal-900/40 border border-teal-500/40 backdrop-blur-xs">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
                        <span className="text-xs font-black text-emerald-300 uppercase tracking-wider">
                          {isEs ? 'Papel Recomendado:' : 'Papel Ideal para Comprar:'}
                        </span>
                      </div>
                      <p className="text-sm font-black text-white">
                        {isEs ? selectedProject.recommendedPaperEs : selectedProject.recommendedPaperPt}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-rose-950/40 border border-rose-500/30">
                      <div className="flex items-center gap-2 mb-1">
                        <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                        <span className="text-[11px] font-black text-rose-300 uppercase tracking-wider">
                          {isEs ? 'Evita usar este papel:' : 'Não use este papel:'}
                        </span>
                      </div>
                      <p className="text-xs text-rose-200/90 font-medium leading-relaxed">
                        {isEs ? selectedProject.avoidPaperEs : selectedProject.avoidPaperPt}
                      </p>
                    </div>
                  </div>

                  {/* Right: Exact Printer Driver Settings */}
                  <div className="p-4 rounded-2xl bg-slate-800/80 border border-teal-400/30 space-y-2.5 text-xs">
                    <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                      <Settings className="w-4 h-4 text-teal-300" />
                      <span className="font-black text-teal-200 uppercase tracking-wider">
                        {isEs ? 'Ajustes en tu Impresora:' : 'Configuração no Driver da Impressora:'}
                      </span>
                    </div>

                    <div className="space-y-1.5 text-[11px]">
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-slate-400 font-bold">{isEs ? 'Tipo de Papel:' : 'Tipo de Mídia:'}</span>
                        <span className="font-black text-white text-right">
                          {printerBrand === 'epson' ? 'Epson Photo Glossy / Premium' : (isEs ? selectedProject.printerSettings.mediaTypeEs : selectedProject.printerSettings.mediaTypePt)}
                        </span>
                      </div>

                      <div className="flex items-start justify-between gap-2">
                        <span className="text-slate-400 font-bold">{isEs ? 'Calidad:' : 'Qualidade:'}</span>
                        <span className="font-black text-emerald-300 text-right">
                          {isEs ? selectedProject.printerSettings.qualityEs : selectedProject.printerSettings.qualityPt}
                        </span>
                      </div>

                      <div className="flex items-start justify-between gap-2">
                        <span className="text-slate-400 font-bold">{isEs ? 'Escala:' : 'Escala de Tamanho:'}</span>
                        <span className="font-black text-amber-300 text-right">
                          {selectedProject.printerSettings.scale}
                        </span>
                      </div>

                      <div className="flex items-start justify-between gap-2">
                        <span className="text-slate-400 font-bold">{isEs ? 'Entrada:' : 'Bandeja de Papel:'}</span>
                        <span className="font-black text-white text-right">
                          {isEs ? 'Bandeja Trasera Vertical' : 'Bandeja Traseira Superior'}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Bottom Gold Tips */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-teal-500/30 text-xs">
                  <div className="flex items-start gap-2 bg-white/5 p-3 rounded-xl">
                    <Scissors className="w-4 h-4 text-teal-300 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-teal-200 block text-[11px] font-black uppercase">
                        {isEs ? 'Dica de Corte & Vinco:' : 'Dica de Corte & Vinco:'}
                      </strong>
                      <p className="text-slate-200 text-[11px] mt-0.5">
                        {isEs ? selectedProject.proTipEs : selectedProject.proTipPt}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 bg-white/5 p-3 rounded-xl">
                    <Droplet className="w-4 h-4 text-pink-300 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-pink-200 block text-[11px] font-black uppercase">
                        {isEs ? 'Pegamento & Adhesivo:' : 'Melhor Cola & Fixação:'}
                      </strong>
                      <p className="text-slate-200 text-[11px] mt-0.5">
                        {isEs ? selectedProject.glueTipEs : selectedProject.glueTipPt}
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: TROUBLESHOOTING GUIDE */}
          {activeTab === 'troubleshooter' && (
            <div className="space-y-4">
              
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-black text-amber-950 uppercase tracking-wide">
                    {isEs ? 'Solucionador Rápido de Problemas de Impresión' : 'Solucionador Rápido de Problemas de Impressão'}
                  </h3>
                  <p className="text-xs text-amber-800 font-medium mt-0.5">
                    {isEs 
                      ? 'Haz clic en el problema que estás experimentando para ver la solución exacta en 1 minuto.' 
                      : 'Clique na dúvida abaixo para ver a solução passo a passo em menos de 1 minuto.'}
                  </p>
                </div>
              </div>

              {/* Accordion List */}
              <div className="space-y-3">
                {TROUBLESHOOTING_GUIDE.map((issue) => {
                  const isExpanded = expandedIssue === issue.id;
                  return (
                    <div
                      key={issue.id}
                      className={`rounded-2xl border transition overflow-hidden ${
                        isExpanded
                          ? 'border-teal-500 bg-white shadow-md'
                          : 'border-slate-200 bg-slate-50 hover:bg-white'
                      }`}
                    >
                      <button
                        onClick={() => setExpandedIssue(isExpanded ? null : issue.id)}
                        className="w-full p-4 text-left flex items-center justify-between gap-3 cursor-pointer"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                            issue.severity === 'high' ? 'bg-rose-100 text-rose-700' : 'bg-teal-100 text-teal-800'
                          }`}>
                            {issue.severity === 'high' ? '⚠️' : '💡'}
                          </div>
                          <span className="text-xs sm:text-sm font-extrabold text-slate-800">
                            {isEs ? issue.questionEs : issue.questionPt}
                          </span>
                        </div>

                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-teal-600 shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                        )}
                      </button>

                      {isExpanded && (
                        <div className="p-4 sm:p-5 pt-0 border-t border-slate-100 space-y-3 text-xs animate-in fade-in duration-150">
                          
                          {/* Cause */}
                          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                            <strong className="text-slate-700 font-extrabold block mb-1">
                              🔍 {isEs ? '¿Por qué ocurre?' : 'Por que isso acontece?'}:
                            </strong>
                            <p className="text-slate-600 font-medium leading-relaxed">
                              {isEs ? issue.causeEs : issue.causePt}
                            </p>
                          </div>

                          {/* Solution Steps */}
                          <div className="space-y-2">
                            <strong className="text-teal-800 font-black block text-[11px] uppercase tracking-wider">
                              ✅ {isEs ? 'Solución Paso a Paso:' : 'Como resolver agora:'}:
                            </strong>
                            <ul className="space-y-1.5 pl-1">
                              {(isEs ? issue.solutionStepsEs : issue.solutionStepsPt).map((step, sIdx) => (
                                <li key={sIdx} className="flex items-start gap-2 text-slate-700 font-medium">
                                  <span className="w-4 h-4 rounded-full bg-teal-100 text-teal-800 font-black text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                                    {sIdx + 1}
                                  </span>
                                  <span>{step}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Quick Tip Badge */}
                          <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 font-bold flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>{isEs ? issue.quickTipEs : issue.quickTipPt}</span>
                          </div>

                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          )}

          {/* TAB 3: CALCULATOR DE HOJAS */}
          {activeTab === 'calculator' && (
            <div className="space-y-6">
              
              <div>
                <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-3">
                  {isEs ? '1. ¿Qué elementos vas a preparar para la fiesta?' : '1. O que você vai produzir para a festa?'}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  
                  {/* Milk Boxes */}
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl">
                    <label className="text-xs font-bold text-slate-800 block mb-1">
                      {isEs ? 'Cajitas Milk / Pirámide' : 'Caixas Milk / Pirâmide'}
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="0"
                        max="200"
                        value={milkBoxes}
                        onChange={(e) => setMilkBoxes(Math.max(0, parseInt(e.target.value) || 0))}
                        className="w-20 px-3 py-1.5 text-sm bg-white border border-slate-200 rounded-xl font-bold text-center"
                      />
                      <span className="text-xs text-slate-500">{isEs ? 'unidades' : 'unidades'}</span>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-1">1 hoja = 1 cajita (Glossy 230g)</p>
                  </div>

                  {/* Gable Boxes */}
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl">
                    <label className="text-xs font-bold text-slate-800 block mb-1">
                      {isEs ? 'Cajas Gable / Loncheritas' : 'Caixas Gable / Maletinhas'}
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="0"
                        max="200"
                        value={gableBoxes}
                        onChange={(e) => setGableBoxes(Math.max(0, parseInt(e.target.value) || 0))}
                        className="w-20 px-3 py-1.5 text-sm bg-white border border-slate-200 rounded-xl font-bold text-center"
                      />
                      <span className="text-xs text-slate-500">{isEs ? 'unidades' : 'unidades'}</span>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-1">1 hoja = 1 loncherita A4</p>
                  </div>

                  {/* Chip Bags */}
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl">
                    <label className="text-xs font-bold text-slate-800 block mb-1">
                      {isEs ? 'Bolsas de Papitas / Chip Bags' : 'Bolsas de Salgadinho / Chip Bags'}
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="0"
                        max="200"
                        value={chipBags}
                        onChange={(e) => setChipBags(Math.max(0, parseInt(e.target.value) || 0))}
                        className="w-20 px-3 py-1.5 text-sm bg-white border border-slate-200 rounded-xl font-bold text-center"
                      />
                      <span className="text-xs text-slate-500">{isEs ? 'unidades' : 'unidades'}</span>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-1">1 hoja = 1 bolsa (Glossy 115g)</p>
                  </div>

                  {/* Cake Topper 3D */}
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl">
                    <label className="text-xs font-bold text-slate-800 block mb-1">
                      {isEs ? 'Cake Topper 3D en Capas' : 'Topo de Bolo 3D em Camadas'}
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="0"
                        max="20"
                        value={cakeToppers}
                        onChange={(e) => setCakeToppers(Math.max(0, parseInt(e.target.value) || 0))}
                        className="w-20 px-3 py-1.5 text-sm bg-white border border-slate-200 rounded-xl font-bold text-center"
                      />
                      <span className="text-xs text-slate-500">{isEs ? 'toppers' : 'topos'}</span>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-1">~2 a 3 hojas por topper volumétrico</p>
                  </div>

                  {/* Candy Bar Stickers */}
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl">
                    <label className="text-xs font-bold text-slate-800 block mb-1">
                      {isEs ? 'Stickers & Botellas de Agua' : 'Adesivos Candy Bar & Garrafinhas'}
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="0"
                        max="500"
                        value={candyBarStickers}
                        onChange={(e) => setCandyBarStickers(Math.max(0, parseInt(e.target.value) || 0))}
                        className="w-20 px-3 py-1.5 text-sm bg-white border border-slate-200 rounded-xl font-bold text-center"
                      />
                      <span className="text-xs text-slate-500">{isEs ? 'etiquetas' : 'adesivos'}</span>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-1">~6 a 8 stickers por hoja autoadhesiva</p>
                  </div>

                  {/* Coloring Books */}
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl">
                    <label className="text-xs font-bold text-slate-800 block mb-1">
                      {isEs ? 'Libritos para Colorear (240 modelos)' : 'Livrinhos de Colorir (240 modelos)'}
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={coloringBooks}
                        onChange={(e) => setColoringBooks(Math.max(0, parseInt(e.target.value) || 0))}
                        className="w-20 px-3 py-1.5 text-sm bg-white border border-slate-200 rounded-xl font-bold text-center"
                      />
                      <span className="text-xs text-slate-500">{isEs ? 'libritos' : 'livrinhos'}</span>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-1">1 hoja glossy portada + 2 hojas bond interior</p>
                  </div>

                </div>
              </div>

              {/* Calculation Summary Card */}
              <div className="p-5 rounded-3xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-lg space-y-4">
                <div className="flex items-center justify-between border-b border-white/20 pb-3">
                  <div>
                    <span className="text-xs font-black text-teal-100 uppercase tracking-wider">
                      {isEs ? 'Lista de Compras de Papelería Estimada' : 'Lista de Compras de Papelaria Estimada'}
                    </span>
                    <h4 className="text-xl font-black">{totalA4Sheets} {isEs ? 'Hojas A4 Totales' : 'Folhas A4 no Total'}</h4>
                  </div>
                  <ShoppingBag className="w-8 h-8 text-teal-200" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="bg-white/10 p-3 rounded-2xl">
                    <span className="text-teal-100 block text-[10px] font-bold">Glossy 230g (Cajas)</span>
                    <span className="text-lg font-black">{glossySheetsHeavy} hojas</span>
                  </div>
                  <div className="bg-white/10 p-3 rounded-2xl">
                    <span className="text-teal-100 block text-[10px] font-bold">Glossy 115g (Chip Bags)</span>
                    <span className="text-lg font-black">{glossySheetsThin} hojas</span>
                  </div>
                  <div className="bg-white/10 p-3 rounded-2xl">
                    <span className="text-teal-100 block text-[10px] font-bold">Adhesivo Glossy</span>
                    <span className="text-lg font-black">{adhesiveSheets} hojas</span>
                  </div>
                  <div className="bg-white/10 p-3 rounded-2xl">
                    <span className="text-teal-100 block text-[10px] font-bold">Bond / Fotocopia 75g</span>
                    <span className="text-lg font-black">{bondSheets} hojas</span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 4: GENERAL PAPER GUIDE */}
          {activeTab === 'guide' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {PAPER_GUIDE.map((paper, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-black text-slate-800">{paper.name}</h4>
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-teal-100 text-teal-800">
                        {paper.grammage}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 font-medium">{paper.finish}</p>
                    
                    <div className="pt-2 border-t border-slate-200/60 text-[11px]">
                      <strong className="text-slate-700 block font-bold mb-1">
                        {isEs ? 'Recomendado para:' : 'Indicado para:'}
                      </strong>
                      <div className="flex flex-wrap gap-1">
                        {paper.bestFor.map((item, iIdx) => (
                          <span key={iIdx} className="px-1.5 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600 text-[10px]">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-2.5 bg-teal-50/60 rounded-xl border border-teal-100 text-[10px] text-teal-900 font-medium">
                      💡 {paper.motherTip}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
