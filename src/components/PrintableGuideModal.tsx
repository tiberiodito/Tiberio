import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  FileText, 
  Download, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Crown, 
  Scissors, 
  ShieldCheck,
  Heart,
  ExternalLink,
  Check
} from 'lucide-react';
import logoImg from '../assets/images/pack_fiesta_logo_1787101845875.jpg';

interface PrintableGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  language?: 'es' | 'pt';
}

export const PrintableGuideModal: React.FC<PrintableGuideModalProps> = ({
  isOpen,
  onClose,
  language = 'es',
}) => {
  const [downloaded, setDownloaded] = useState(false);
  const isEs = language === 'es';

  if (!isOpen) return null;

  const paperTable = [
    {
      type: isEs ? 'Fotográfico Glossy (Brillante)' : 'Fotográfico Glossy (Brilho)',
      grammage: '180g – 230g',
      idealFor: isEs 
        ? 'Cajitas Milk, Pirámide, Sushi, Toppers de Pastel, Centros de Mesa' 
        : 'Caixinhas Milk, Pirâmide, Sushi, Topos de Bolo, Centros de Mesa',
      tip: isEs ? 'Colores ultra vivos e impermeables.' : 'Cores ultra vivas e excelente acabamento fotográfico.',
      badge: isEs ? '⭐ El #1 Más Usado' : '⭐ O #1 Mais Usado',
      color: 'border-pink-300 bg-pink-50/50 text-pink-900',
    },
    {
      type: isEs ? 'Fotográfico Matte / Offset' : 'Fotográfico Matte / Offset',
      grammage: '180g – 240g',
      idealFor: isEs 
        ? 'Letras 3D, Números 3D, Diseños Vintage, Apliques sin reflejo' 
        : 'Letras 3D, Números 3D, Festas minimalistas, Apliques sem reflexo',
      tip: isEs ? 'Fácil de doblar y marcar pliegues.' : 'Fácil de vincar e não solta reflexo nas fotos com flash.',
      badge: isEs ? 'Perfeito para 3D' : 'Perfeito para 3D',
      color: 'border-teal-300 bg-teal-50/50 text-teal-900',
    },
    {
      type: isEs ? 'Papel Adhesivo Fotográfico' : 'Papel Fotográfico Adesivo',
      grammage: '115g – 135g',
      idealFor: isEs 
        ? 'Bolsitas de Papitas, Rótulos de Chocolates, Tubetes, Burbujeros' 
        : 'Bolsas de Salgadinho, Rótulos de Chocolate, Tubetes, Latinhas',
      tip: isEs ? 'Solo despega y pega en el envase.' : 'Autocolante de alta fixação para lembrancinhas plásticas e metálicas.',
      badge: isEs ? 'Fácil Aplicación' : 'Fácil Aplicação',
      color: 'border-amber-300 bg-amber-50/50 text-amber-900',
    },
    {
      type: isEs ? 'Lamicote / Papel Metalizado' : 'Lamicote / Metalizado Dourado',
      grammage: '250g',
      idealFor: isEs 
        ? 'Bases brillantes de Toppers de Pastel, Letras de Lujo' 
        : 'Camadas de fundo de Topos de Bolo e Apliques Luxo',
      tip: isEs ? 'Efecto espejo dorado o plateado.' : 'Efeito espelhado luxuoso que valoriza a festa.',
      badge: isEs ? 'Toque Luxo' : 'Toque Luxo',
      color: 'border-purple-300 bg-purple-50/50 text-purple-900',
    },
  ];

  const goldenRules = isEs ? [
    'Configura tu impresora siempre en "Papel Fotográfico" y calidad "Alta / Foto".',
    'En los ajustes de impresión, elige siempre "Tamaño 100% / Real" (nunca "Ajustar al área").',
    'Usa una regla metálica y la punta sin filo de una tijera o aguja para marcar los pliegues antes de doblar.',
    'Usa silicón líquido, cinta doble cara o pistola de silicón caliente para pegar las pestañas con firmeza.',
    'Guarda este portal en tus favoritos para volver siempre que necesites nuevos moldes.'
  ] : [
    'Configure sua impressora sempre em "Papel Fotográfico" e qualidade "Alta / Foto".',
    'Nas opções de impressão, selecione sempre "Tamanho 100% / Tamanho Real" (nunca "Ajustar à página").',
    'Use uma régua de metal e um boleador/agulha sem ponta para vincar as dobras antes de colar.',
    'Utilize cola quente, cola pano ou fita dupla face para fechar as caixinhas sem amassar.',
    'Salve este portal nos seus favoritos para acessar sempre que precisar de novos moldes.'
  ];

  const generatePrintableHTML = () => {
    const title = isEs ? 'Guía de Bolsillo de Papeles e Impresión - Pack Fiesta Lista' : 'Guia de Bolso de Papéis e Impressão - Pack Fiesta Lista';
    const subtitle = isEs ? 'Portal Oficial de Plantillas Canva & Papelería Creativa' : 'Portal Oficial de Moldes Canva & Papelaria Criativa';
    
    return `<!DOCTYPE html>
<html lang="${isEs ? 'es' : 'pt'}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 10mm 15mm;
    }
    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #0f172a;
      background: #ffffff;
      margin: 0;
      padding: 24px;
      font-size: 13px;
      line-height: 1.5;
    }
    .print-actions {
      margin-bottom: 20px;
      padding: 16px;
      background: #fdf2f8;
      border: 2px solid #f43f5e;
      border-radius: 12px;
      text-align: center;
    }
    .print-btn {
      background: #e11d48;
      color: white;
      border: none;
      padding: 10px 24px;
      font-size: 14px;
      font-weight: 800;
      border-radius: 8px;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(225,29,72,0.3);
    }
    .header-box {
      border: 2px solid #f43f5e;
      background: #fff1f2;
      border-radius: 14px;
      padding: 16px 20px;
      margin-bottom: 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .header-title {
      font-size: 20px;
      font-weight: 900;
      color: #be123c;
      margin: 0 0 3px 0;
    }
    .header-sub {
      font-size: 12px;
      color: #475569;
      margin: 0;
      font-weight: 600;
    }
    .badge-pill {
      background: #0d9488;
      color: white;
      font-size: 11px;
      font-weight: 800;
      padding: 4px 12px;
      border-radius: 9999px;
      text-transform: uppercase;
    }
    .section-heading {
      font-size: 13.5px;
      font-weight: 800;
      color: #0f172a;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin: 16px 0 10px 0;
      padding-bottom: 4px;
      border-bottom: 2px solid #e2e8f0;
    }
    .papers-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin-bottom: 14px;
    }
    .paper-card {
      border: 1.5px solid #cbd5e1;
      border-radius: 10px;
      padding: 10px 12px;
      background: #f8fafc;
      page-break-inside: avoid;
    }
    .paper-name {
      font-weight: 800;
      font-size: 12.5px;
      color: #0f172a;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .paper-grammage {
      background: #e2e8f0;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 10px;
      font-weight: 700;
      color: #334155;
    }
    .paper-desc {
      margin: 5px 0;
      font-size: 11px;
      color: #334155;
      line-height: 1.4;
    }
    .paper-tip {
      font-size: 10px;
      color: #64748b;
      font-style: italic;
      margin: 4px 0 0 0;
      padding-top: 3px;
      border-top: 1px dashed #cbd5e1;
    }
    .rules-list {
      background: #f8fafc;
      border: 1.5px solid #e2e8f0;
      border-radius: 10px;
      padding: 12px 14px;
      margin: 0;
    }
    .rule-item {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      margin-bottom: 7px;
      font-size: 11.5px;
      color: #1e293b;
    }
    .rule-item:last-child {
      margin-bottom: 0;
    }
    .rule-num {
      background: #8b5cf6;
      color: white;
      width: 17px;
      height: 17px;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 9.5px;
      font-weight: 800;
      flex-shrink: 0;
      margin-top: 1px;
    }
    .summary-box {
      margin-top: 14px;
      background: #fef3c7;
      border: 1.5px solid #fde68a;
      border-radius: 10px;
      padding: 10px 14px;
      font-size: 11px;
      color: #78350f;
      line-height: 1.45;
    }
    .footer-note {
      margin-top: 16px;
      text-align: center;
      font-size: 10.5px;
      color: #94a3b8;
      border-top: 1px solid #e2e8f0;
      padding-top: 6px;
    }
    @media print {
      .print-actions {
        display: none !important;
      }
      body {
        padding: 0;
      }
    }
  </style>
</head>
<body>
  <div class="print-actions">
    <button class="print-btn" onclick="window.print()">${isEs ? '🖨️ Imprimir / Guardar en PDF' : '🖨️ Imprimir / Salvar em PDF'}</button>
    <p style="margin:6px 0 0 0; font-size:11px; color:#be123c; font-weight:600;">${isEs ? 'La ventana de diálogo para imprimir se abrirá a continuación.' : 'A janela de impressão ou salvar em PDF deve abrir automaticamente.'}</p>
  </div>

  <div class="header-box">
    <div>
      <h1 class="header-title">Pack Fiesta Lista</h1>
      <p class="header-sub">${subtitle} • ${isEs ? 'Guía de Bolsillo' : 'Guia de Bolso'}</p>
    </div>
    <span class="badge-pill">100% Canva Gratis</span>
  </div>

  <div class="section-heading">${isEs ? '1. Tipos de Papel Recomendados para la Papelería' : '1. Papéis Recomendados para a Papelaria Criativa'}</div>
  <div class="papers-grid">
    ${paperTable.map(p => `
      <div class="paper-card">
        <div class="paper-name">
          <span>${p.type}</span>
          <span class="paper-grammage">${p.grammage}</span>
        </div>
        <div class="paper-desc"><strong>${isEs ? 'Ideal para:' : 'Ideal para:'}</strong> ${p.idealFor}</div>
        <div class="paper-tip">💡 ${p.tip}</div>
      </div>
    `).join('')}
  </div>

  <div class="section-heading">${isEs ? '2. Las 5 Reglas de Oro de Impresión y Montaje' : '2. As 5 Regras de Ouro de Impressão e Montagem'}</div>
  <div class="rules-list">
    ${goldenRules.map((rule, idx) => `
      <div class="rule-item">
        <span class="rule-num">${idx + 1}</span>
        <span>${rule}</span>
      </div>
    `).join('')}
  </div>

  <div class="summary-box">
    <strong>${isEs ? 'Módulos Incluidos:' : 'Módulos Incluídos:'}</strong>
    ${isEs 
      ? 'Cajitas Milk, Pirámide, Sushi, Conos • Letras 3D & Números 3D • Bolsa de Papitas • Candy Bar • Toppers de Pastel • Libritos de Colorear • Etiquetas Escolares • Sublimación • 18 Bonos Exclusivos.'
      : 'Caixinhas Milk, Pirâmide, Sushi, Cones • Letras 3D & Números 3D • Bolsas de Batatinha • Candy Bar • Topos de Bolo • Livrinhos de Colorir • Etiquetas Escolares • Sublimação • 18 Bônus Exclusivos.'}
  </div>

  <div class="footer-note">
    Pack Fiesta Lista © ${new Date().getFullYear()} • ${isEs ? 'Imprime esta hoja para llevarla a la papelería' : 'Imprima esta folha ou salve o PDF no seu celular para levar na papelaria'}
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() {
        try {
          window.print();
        } catch(e) {
          console.error(e);
        }
      }, 400);
    };
  </script>
</body>
</html>`;
  };

  const handlePrint = () => {
    const htmlContent = generatePrintableHTML();

    // 1. Try Opening Blob URL in a clean new tab (works unrestricted in all modern browsers)
    try {
      const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
      const blobUrl = URL.createObjectURL(blob);
      const printWindow = window.open(blobUrl, '_blank');
      
      if (printWindow) {
        printWindow.focus();
        return;
      }
    } catch (err) {
      console.warn('Blob URL print open failed, attempting window.open fallback', err);
    }

    // 2. Direct Window Open Fallback
    try {
      const printWin = window.open('', '_blank');
      if (printWin) {
        printWin.document.open();
        printWin.document.write(htmlContent);
        printWin.document.close();
        printWin.focus();
        return;
      }
    } catch (err) {
      console.warn('window.open failed, attempting direct print or download', err);
    }

    // 3. Fallback direct print & auto-download
    try {
      window.print();
    } catch (err) {
      console.error('Direct window.print failed', err);
    }
  };

  const handleDownload = () => {
    const htmlContent = generatePrintableHTML();
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = isEs ? 'Guia_Impresion_Papeles_PackFiestaLista.html' : 'Guia_Impressao_Papeis_PackFiestaLista.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-hidden">
      
      <div 
        id="printable-guide-modal-container"
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[94vh] flex flex-col shadow-2xl border-2 border-pink-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      >
        
        {/* Modal Header */}
        <div className="p-3.5 sm:p-5 bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white flex items-center justify-between gap-2 shrink-0 border-b border-pink-600/30">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shrink-0">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] sm:text-xs font-black uppercase px-2 py-0.5 rounded-full bg-white/25 text-white tracking-wider truncate">
                  {isEs ? 'Guía de Bolsillo PDF' : 'Guia de Bolso PDF'}
                </span>
                <Crown className="w-3.5 h-3.5 fill-amber-300 text-amber-300 shrink-0" />
              </div>
              <h2 className="text-sm sm:text-lg font-black tracking-tight mt-0.5 truncate text-white">
                {isEs ? 'Guía de Papeles & Resumen' : 'Guia de Bolso & Resumo de Papéis'}
              </h2>
            </div>
          </div>

          {/* Action Buttons in Header - Always Fully Visible */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Download Button with Arrow */}
            <button
              id="top-download-guide-btn"
              onClick={handleDownload}
              className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-white text-pink-700 hover:bg-pink-50 font-black text-xs transition flex items-center gap-1.5 shadow-sm cursor-pointer active:scale-95 shrink-0"
              title={isEs ? 'Descargar Archivo' : 'Baixar Arquivo'}
            >
              {downloaded ? (
                <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
              ) : (
                <Download className="w-4 h-4 text-pink-700 stroke-[2.8]" />
              )}
              <span className="hidden sm:inline">{downloaded ? (isEs ? '¡Guardado!' : 'Salvo!') : (isEs ? 'Descargar' : 'Baixar')}</span>
            </button>

            {/* Print Button */}
            <button
              id="top-print-guide-btn"
              onClick={handlePrint}
              className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs transition flex items-center gap-1.5 cursor-pointer active:scale-95 shrink-0"
              title={isEs ? 'Abrir para Imprimir o Guardar en PDF' : 'Abrir para Imprimir ou Salvar PDF'}
            >
              <Printer className="w-4 h-4 stroke-[2.5]" />
              <span className="hidden md:inline">{isEs ? 'Imprimir' : 'Imprimir'}</span>
            </button>

            {/* Close X Button - High Contrast & Guaranteed Visible */}
            <button
              id="close-printable-modal-btn"
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-xl bg-white/25 hover:bg-white/40 text-white transition cursor-pointer active:scale-90 shrink-0 flex items-center justify-center"
              title={isEs ? 'Cerrar' : 'Fechar'}
            >
              <X className="w-5 h-5 stroke-[2.8]" />
            </button>
          </div>
        </div>

        {/* Modal Content (Printable Sheet) - Scrollable */}
        <div className="p-4 sm:p-7 space-y-5 overflow-y-auto flex-1 print:p-0 print:max-h-none">
          
          {/* Action Helper Banner */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3.5 bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200 rounded-2xl shadow-2xs">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-pink-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                <Printer className="w-4 h-4 stroke-[2.5]" />
              </div>
              <p className="text-xs text-pink-950 font-semibold leading-tight">
                {isEs 
                  ? 'Guarda la guía en PDF para llevarla a la papelería o imprimir cuando quieras.' 
                  : 'Salve o guia em PDF no seu celular para levar na papelaria ou imprimir em casa.'}
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                id="banner-download-guide-btn"
                onClick={handleDownload}
                className="flex-1 sm:flex-initial px-3 py-2 bg-pink-600 hover:bg-pink-700 text-white font-extrabold text-xs rounded-xl shadow-xs flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 transition"
              >
                {downloaded ? <Check className="w-4 h-4 text-emerald-300 stroke-[3]" /> : <Download className="w-4 h-4 stroke-[2.8]" />}
                <span>{downloaded ? (isEs ? '¡Guardado!' : 'Salvo!') : (isEs ? 'Descargar Guía' : 'Baixar Guia PDF')}</span>
              </button>
              <button
                id="banner-print-guide-btn"
                onClick={handlePrint}
                className="flex-1 sm:flex-initial px-3 py-2 bg-white border border-pink-300 hover:bg-pink-50 text-pink-700 font-bold text-xs rounded-xl shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 transition"
              >
                <Printer className="w-4 h-4 stroke-[2.5]" />
                <span>{isEs ? 'Imprimir' : 'Imprimir'}</span>
              </button>
            </div>
          </div>

          {/* Brand Presentation Banner */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-pink-50/70 border border-pink-200">
            <div className="flex items-center gap-3">
              <img 
                src={logoImg} 
                alt="Pack Fiesta Lista" 
                className="w-12 h-12 rounded-xl object-cover border border-pink-200 shadow-xs"
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="font-black text-base text-slate-900">
                  Pack Fiesta Lista
                </h3>
                <p className="text-xs text-pink-700 font-semibold">
                  {isEs ? 'Portal Oficial de Moldes Canva & Papelería Creativa' : 'Portal Oficial de Moldes Canva & Papelaria Criativa'}
                </p>
              </div>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
              {isEs ? '100% Canva Gratis' : '100% Canva Grátis'}
            </span>
          </div>

          {/* Section 1: Paper Types Table */}
          <div>
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-pink-600" />
              <span>{isEs ? '1. Tipos de Papel Recomendados para la Papelería' : '1. Papéis Recomendados para a Papelaria'}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {paperTable.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`p-4 rounded-2xl border-2 ${item.color} flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-black text-slate-900">{item.type}</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white/80 border border-slate-200 text-slate-700">
                        {item.grammage}
                      </span>
                    </div>
                    <p className="text-xs text-slate-700 font-medium">
                      <strong>{isEs ? 'Ideal para:' : 'Ideal para:'}</strong> {item.idealFor}
                    </p>
                  </div>
                  <p className="text-[11px] text-slate-500 italic mt-2.5 pt-2 border-t border-black/5">
                    💡 {item.tip}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: 5 Golden Rules */}
          <div>
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Scissors className="w-4 h-4 text-purple-600" />
              <span>{isEs ? '2. Las 5 Reglas de Oro de Impresión y Montaje' : '2. As 5 Regras de Ouro de Impressão e Montagem'}</span>
            </h3>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-2.5">
              {goldenRules.map((rule, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 font-black flex items-center justify-center shrink-0 text-[11px]">
                    {idx + 1}
                  </div>
                  <span className="leading-snug">{rule}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Summary of Categories & Quick Links */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950">
            <h4 className="font-black text-xs uppercase tracking-wider flex items-center gap-1.5 mb-1.5 text-amber-900">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>{isEs ? 'Módulos Incluidos en tu Compra' : 'Módulos Incluídos na sua Compra'}</span>
            </h4>
            <p className="leading-relaxed text-amber-900">
              {isEs
                ? 'Cajitas Milk, Pirámide, Sushi, Cones • Letras 3D & Números 3D • Bolsa de Papitas • Candy Bar • Toppers de Pastel • Libritos de Colorear • Etiquetas Escolares • Sublimación • 18 Bonos Exclusivos.'
                : 'Caixinhas Milk, Pirâmide, Sushi, Cones • Letras 3D & Números 3D • Bolsas de Batatinha • Candy Bar • Topos de Bolo • Livrinhos de Colorir • Etiquetas Escolares • Sublimação • 18 Bônus Exclusivos.'}
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-3.5 sm:p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shrink-0">
          <span className="text-slate-500 font-medium text-center sm:text-left text-[11px] sm:text-xs">
            {isEs ? '💡 Puedes imprimir esta hoja o guardar el PDF en tu teléfono.' : '💡 Imprima esta folha ou salve o PDF no celular para levar na papelaria.'}
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              id="bottom-download-guide-btn"
              onClick={handleDownload}
              className="flex-1 sm:flex-initial px-3.5 py-2 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-extrabold flex items-center justify-center gap-1.5 transition cursor-pointer active:scale-95 shadow-xs"
            >
              {downloaded ? <Check className="w-4 h-4 text-emerald-300 stroke-[3]" /> : <Download className="w-4 h-4 stroke-[2.8]" />}
              <span>{downloaded ? (isEs ? '¡Guardado!' : 'Salvo!') : (isEs ? 'Descargar PDF' : 'Baixar PDF')}</span>
            </button>
            <button
              id="bottom-print-guide-btn"
              onClick={handlePrint}
              className="px-3 sm:px-3.5 py-2 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 font-bold flex items-center justify-center gap-1.5 transition cursor-pointer active:scale-95 shadow-2xs"
            >
              <Printer className="w-4 h-4 stroke-[2.5]" />
              <span className="hidden sm:inline">{isEs ? 'Imprimir' : 'Imprimir'}</span>
            </button>
            <button
              id="bottom-close-guide-btn"
              onClick={onClose}
              className="px-3.5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold transition cursor-pointer active:scale-95 flex items-center justify-center gap-1"
            >
              <X className="w-4 h-4 stroke-[2.5]" />
              <span>{isEs ? 'Cerrar' : 'Fechar'}</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
