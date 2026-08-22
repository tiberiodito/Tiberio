import React, { useState } from 'react';
import { 
  X, 
  Bot, 
  Sparkles, 
  Copy, 
  Check, 
  Send, 
  Palette, 
  Mail, 
  Candy, 
  Dices, 
  Printer, 
  RefreshCw,
  Loader2,
  Heart,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { AIPartyIdeaResponse } from '../types';

interface AIPartyAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  language?: 'es' | 'pt';
  onSelectPackItem?: (searchQuery: string) => void;
}

const POPULAR_THEMES_ES = [
  'Safari Baby',
  'Stitch & Angel',
  'Dinosaurios Jurásicos',
  'Princesas Encantadas',
  'Granjita de Animales',
  'Sonic & Amigos',
  'Super Mario Bros',
  'Spiderman / Superhéroes',
  'Unicornio Mágico',
  'Circo Vintage'
];

const POPULAR_THEMES_PT = [
  'Safari Baby',
  'Stitch & Angel',
  'Dinossauros',
  'Princesas Disney',
  'Fazendinha',
  'Sonic',
  'Super Mario',
  'Homem-Aranha',
  'Unicórnio Mágico',
  'Circo Vintage'
];

export const AIPartyAssistantModal: React.FC<AIPartyAssistantModalProps> = ({
  isOpen,
  onClose,
  language = 'es',
  onSelectPackItem,
}) => {
  const isEs = language === 'es';

  const [themeInput, setThemeInput] = useState('');
  const [childName, setChildName] = useState(() => localStorage.getItem('fiesta_child_name') || '');
  const [childAge, setChildAge] = useState(() => localStorage.getItem('fiesta_child_age') || '5');

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIPartyIdeaResponse | null>(null);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const popularThemes = isEs ? POPULAR_THEMES_ES : POPULAR_THEMES_PT;

  const handlePackItemClick = (item: string) => {
    if (onSelectPackItem) {
      onSelectPackItem(item);
      onClose();
    }
  };

  const handleGenerate = async (selectedTheme?: string) => {
    const themeToUse = selectedTheme || themeInput;
    if (!themeToUse.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch('/api/gemini/party-ideas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          theme: themeToUse,
          childName: childName || (isEs ? 'El Festajado' : 'O Aniversariante'),
          childAge: childAge || 5,
          language
        })
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error generating party ideas:', error);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-slate-900/75 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto">
      
      <div 
        id="ai-party-assistant-modal"
        className="bg-white rounded-2xl sm:rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden my-auto min-w-0"
      >
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-3.5 sm:px-6 py-3 sm:py-4 border-b border-slate-100 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-rose-500/10 shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-rose-500 text-white flex items-center justify-center shadow-xs shrink-0">
              <Bot className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <h2 className="text-xs sm:text-base font-extrabold text-slate-800 flex items-center gap-1.5 truncate">
                <span className="truncate">{isEs ? 'Asistente IA de Fiestas' : 'Assistente IA de Festas'}</span>
                <span className="text-[9px] sm:text-[10px] font-extrabold px-1.5 sm:px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 uppercase tracking-wider shrink-0">
                  IA
                </span>
              </h2>
              <p className="text-[10px] sm:text-xs text-slate-500 truncate">
                {isEs ? 'Paletas de colores y frases de invitaciones' : 'Paletas de cores e frases para convites'}
              </p>
            </div>
          </div>

          <button
            id="close-ai-modal-btn"
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition cursor-pointer shrink-0 ml-1"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-3.5 sm:p-6 space-y-4 sm:space-y-6 min-w-0">
          
          {/* Input Box */}
          <div className="p-3.5 sm:p-5 bg-slate-50 border border-slate-200 rounded-2xl min-w-0">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-3">
              <div className="sm:col-span-2 min-w-0">
                <label className="text-xs font-bold text-slate-800 block mb-1">
                  {isEs ? '¿Cuál es la temática de la fiesta?' : 'Qual é o tema da festa?'}
                </label>
                <input
                  type="text"
                  value={themeInput}
                  onChange={(e) => setThemeInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                  placeholder={isEs ? 'Escribe cualquier tema (ej: Stitch, Safari, Sirenita)...' : 'Digite qualquer tema (ex: Stitch, Safari, Moana)...'}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 font-medium"
                />
              </div>

              <div className="min-w-0">
                <label className="text-xs font-bold text-slate-800 block mb-1">
                  {isEs ? 'Nombre & Edad' : 'Nome & Idade'}
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    placeholder={isEs ? 'Nombre' : 'Nome'}
                    className="w-2/3 min-w-0 px-2.5 py-2 text-xs bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-400"
                  />
                  <input
                    type="text"
                    value={childAge}
                    onChange={(e) => setChildAge(e.target.value)}
                    placeholder="Edad"
                    className="w-1/3 min-w-0 px-2 py-2 text-xs bg-white border border-slate-300 rounded-xl text-center focus:ring-2 focus:ring-amber-400"
                  />
                </div>
              </div>
            </div>

            {/* Popular Themes Chips */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[11px] font-semibold text-slate-400 mr-1">
                {isEs ? 'Populares:' : 'Populares:'}
              </span>
              {popularThemes.map((theme, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setThemeInput(theme);
                    handleGenerate(theme);
                  }}
                  className="px-2 py-1 text-[11px] sm:text-xs bg-white hover:bg-amber-100 hover:text-amber-900 border border-slate-200 rounded-lg text-slate-700 transition cursor-pointer"
                >
                  {theme}
                </button>
              ))}
            </div>

            <div className="mt-3 sm:mt-4 flex justify-end">
              <button
                id="generate-ai-ideas-btn"
                onClick={() => handleGenerate()}
                disabled={loading || !themeInput.trim()}
                className="w-full sm:w-auto px-4 sm:px-5 py-2.5 bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 disabled:opacity-50 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{isEs ? 'Generando ideas mágicas...' : 'Criando ideias mágicas...'}</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>{isEs ? 'Crear Guía para este Tema' : 'Gerar Ideias para este Tema'}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Results Display */}
          {result && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
              
              {/* Theme Header */}
              <div className="p-4 bg-gradient-to-r from-amber-50 to-rose-50 border border-amber-200/80 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">
                    {isEs ? 'Guía Temática Personalizada' : 'Guia Temático Personalizado'}
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-900">
                    {result.themeName}
                  </h3>
                </div>
                <button
                  onClick={() => handleGenerate()}
                  className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-amber-600 transition cursor-pointer text-xs font-semibold flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>{isEs ? 'Regenerar' : 'Gerar Novamente'}</span>
                </button>
              </div>

              {/* 1. Color Palette */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5">
                <h4 className="text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Palette className="w-4 h-4 text-rose-500" />
                  {isEs ? '1. Paleta de Colores Recomendada (Para Canva y Globos)' : '1. Paleta de Cores Recomendada'}
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {result.colorPalette.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => copyToClipboard(color.hex, `color-${idx}`)}
                      className="p-3 rounded-xl border border-slate-200 text-left hover:shadow-xs transition group cursor-pointer"
                    >
                      <div 
                        className="w-full h-12 rounded-lg mb-2 shadow-inner border border-black/10 flex items-center justify-center text-white"
                        style={{ backgroundColor: color.hex }}
                      >
                        {copiedText === `color-${idx}` && (
                          <span className="text-[10px] bg-black/60 px-2 py-0.5 rounded-full font-bold">
                            ¡Copiado!
                          </span>
                        )}
                      </div>
                      <p className="text-xs font-bold text-slate-800">{color.name}</p>
                      <p className="text-[11px] text-slate-400 font-mono flex items-center justify-between">
                        <span>{color.hex}</span>
                        <Copy className="w-3 h-3 text-slate-300 group-hover:text-slate-600" />
                      </p>
                      <p className="text-[10px] text-rose-600 mt-1 font-medium">{color.role}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Invitation Phrases */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5">
                <h4 className="text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-purple-600" />
                  {isEs ? '2. Frases Listas para tu Invitación Digital (Bono 9)' : '2. Frases para o Convite Digital (Bônus 9)'}
                </h4>

                <div className="space-y-3">
                  {result.invitationPhrases.map((phrase, idx) => (
                    <div key={idx} className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-100 text-purple-800">
                          {phrase.style}
                        </span>
                        <p className="text-xs text-slate-800 mt-1.5 leading-relaxed font-medium">
                          "{phrase.text}"
                        </p>
                      </div>
                      <button
                        onClick={() => copyToClipboard(phrase.text, `phrase-${idx}`)}
                        className="p-2 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-purple-600 transition shrink-0 cursor-pointer"
                        title={isEs ? 'Copiar frase' : 'Copiar frase'}
                      >
                        {copiedText === `phrase-${idx}` ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Treats Fillings & Activities */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Treats */}
                <div className="bg-white border border-slate-200 rounded-2xl p-5">
                  <h4 className="text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Candy className="w-4 h-4 text-pink-500" />
                    {isEs ? '3. ¿Qué dulces meter en cada cajita?' : '3. Que doces colocar em cada caixinha?'}
                  </h4>

                  <div className="space-y-3">
                    {result.boxCandyFillings.map((box, idx) => (
                      <div key={idx} className="p-3 bg-pink-50/50 border border-pink-100 rounded-xl">
                        <p className="text-xs font-bold text-pink-950">{box.boxType}</p>
                        <div className="flex flex-wrap gap-1.5 mt-1.5">
                          {box.suggestedTreats.map((treat, i) => (
                            <span key={i} className="text-[11px] px-2 py-0.5 bg-white border border-pink-200 rounded-md text-pink-900">
                              🍬 {treat}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activities */}
                <div className="bg-white border border-slate-200 rounded-2xl p-5">
                  <h4 className="text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Dices className="w-4 h-4 text-emerald-600" />
                    {isEs ? '4. Dinámicas y Juegos Temáticos' : '4. Brincadeiras e Jogos'}
                  </h4>

                  <div className="space-y-2.5">
                    {result.partyActivities.map((act, idx) => (
                      <div key={idx} className="p-3 bg-emerald-50/50 border border-emerald-100 rounded-xl flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-emerald-200 text-emerald-800 text-xs font-bold flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <p className="text-xs text-emerald-950 leading-snug font-medium">
                          {act}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* 4. Pack items to use & Print Tip */}
              <div className="p-4 bg-slate-900 text-white rounded-2xl space-y-3 shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2 text-rose-300 text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{isEs ? 'Elementos recomendados del Pack Fiesta Lista:' : 'Itens recomendados do Pack Fiesta Lista:'}</span>
                  </div>
                  <span className="text-[10px] text-slate-300 bg-white/10 px-2 py-0.5 rounded-full font-medium self-start sm:self-auto">
                    {isEs ? '✨ Haz clic para abrir moldes' : '✨ Clique para abrir os moldes'}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {result.recommendedPackItems.map((item, idx) => (
                    <button
                      key={idx}
                      id={`ai-pack-item-${idx}`}
                      onClick={() => handlePackItemClick(item)}
                      className="p-3 bg-white/10 hover:bg-rose-600 active:scale-95 border border-white/15 hover:border-rose-400 rounded-xl text-xs text-white font-bold flex flex-col items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer text-center group shadow-xs hover:shadow-md"
                      title={isEs ? `Ir al catálogo y ver moldes de: ${item}` : `Ir ao catálogo e ver moldes de: ${item}`}
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform flex items-center justify-center gap-1 text-center w-full">
                        <span className="truncate">{item}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-rose-300 group-hover:text-white shrink-0" />
                      </span>
                      <span className="text-[10px] text-slate-300 group-hover:text-rose-100 font-normal">
                        {isEs ? 'Ver entregable →' : 'Ver molde →'}
                      </span>
                    </button>
                  ))}
                </div>
                <p className="text-xs text-slate-300 pt-2 border-t border-white/10 leading-relaxed">
                  🖨️ <strong>{isEs ? 'Consejo de Impresión:' : 'Dica de Impressão:'}</strong> {result.printTips}
                </p>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-4 sm:px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 min-w-0">
          <span className="truncate mr-2">
            {isEs ? '💡 Puedes consultar tantos temas como quieras.' : '💡 Consulte quantos temas quiser.'}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold cursor-pointer shrink-0"
          >
            {isEs ? 'Cerrar' : 'Fechar'}
          </button>
        </div>

      </div>

    </div>
  );
};
