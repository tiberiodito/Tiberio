import React, { useState } from 'react';
import {
  X,
  Calculator,
  DollarSign,
  TrendingUp,
  Percent,
  Sparkles,
  Copy,
  Check,
  Package,
  Layers,
  Clock,
  Coins,
  ArrowRight,
  HelpCircle,
  ShoppingBag,
  Send,
  AlertCircle
} from 'lucide-react';

interface PartyPricingCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  language?: 'es' | 'pt';
}

interface PresetItem {
  id: string;
  nameEs: string;
  namePt: string;
  badgeEs: string;
  badgePt: string;
  badgeColor: string;
  quantity: number;
  sheetsA4: number;
  sheetCost: number;
  inkCostPerSheet: number;
  ribbonsAccessories: number;
  candiesFilling: number;
  packagingCost: number;
  laborHours: number;
  hourlyRate: number;
  fixedCostPercent: number;
  paymentFeePercent: number;
  targetMarginPercent: number;
  itemsListEs: string[];
  itemsListPt: string[];
}

const PRESETS: PresetItem[] = [
  {
    id: 'kit-basico',
    nameEs: 'Kit Fiesta Básico (20 Cajitas + 1 Topo 3D)',
    namePt: 'Kit Festa Básico (20 Caixinhas + 1 Topo 3D)',
    badgeEs: '⭐ El Más Vendido',
    badgePt: '⭐ Mais Vendido',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    quantity: 21,
    sheetsA4: 22,
    sheetCost: 0.25,
    inkCostPerSheet: 0.15,
    ribbonsAccessories: 3.50,
    candiesFilling: 0.00,
    packagingCost: 1.50,
    laborHours: 2.5,
    hourlyRate: 10.00,
    fixedCostPercent: 10,
    paymentFeePercent: 4.99,
    targetMarginPercent: 100,
    itemsListEs: ['10 Cajas Milk con Aplique', '10 Cajas Pirámide/Cono', '1 Cake Topper 3D en Capas'],
    itemsListPt: ['10 Caixas Milk com Aplique 3D', '10 Caixas Pirâmide/Cone', '1 Topo de Bolo 3D em Camadas']
  },
  {
    id: 'kit-luxo',
    nameEs: 'Kit Fiesta Luxo Completo (100+ Piezas Premium)',
    namePt: 'Kit Festa Luxo Completo (100+ Peças Premium)',
    badgeEs: '👑 Alta Ganancia / Premium',
    badgePt: '👑 Alta Lucratividade / Luxo',
    badgeColor: 'bg-purple-100 text-purple-900 border-purple-300',
    quantity: 101,
    sheetsA4: 72,
    sheetCost: 0.30,
    inkCostPerSheet: 0.18,
    ribbonsAccessories: 12.00,
    candiesFilling: 0.00,
    packagingCost: 4.50,
    laborHours: 6.0,
    hourlyRate: 12.00,
    fixedCostPercent: 10,
    paymentFeePercent: 4.99,
    targetMarginPercent: 140,
    itemsListEs: ['20 Cajas Milk con Lazo Doble', '20 Cajas Gable', '20 Chip Bags Papitas', '1 Cake Topper Luxo Shaker', '40 Stickers Candy Bar'],
    itemsListPt: ['20 Caixas Milk com Laço Duplo & Strass', '20 Caixas Gable com Visor', '20 Bolsinhas Chip Bags', '1 Topo de Bolo Luxo Shaker', '40 Adesivos para Docinhos']
  },
  {
    id: 'kit-pegue-monte',
    nameEs: 'Kit Pegue y Monte / Económico (Corte Simple)',
    namePt: 'Kit Pegue e Monte / Econômico (Sem Laço)',
    badgeEs: '⚡ Rápido y Fácil',
    badgePt: '⚡ Rápido e Sem Laços',
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-300',
    quantity: 30,
    sheetsA4: 25,
    sheetCost: 0.20,
    inkCostPerSheet: 0.12,
    ribbonsAccessories: 1.00,
    candiesFilling: 0.00,
    packagingCost: 1.00,
    laborHours: 1.5,
    hourlyRate: 10.00,
    fixedCostPercent: 10,
    paymentFeePercent: 4.99,
    targetMarginPercent: 80,
    itemsListEs: ['10 Cajas Milk Desarmadas', '10 Cajas Pirámide', '10 Cajas Sushi / Almohadita'],
    itemsListPt: ['10 Caixas Milk Desmontadas (Corte Reto)', '10 Caixas Pirâmide', '10 Caixas Sushi / Almofada']
  },
  {
    id: 'kit-mesversario',
    nameEs: 'Kit Mesversario / Fiesta en Casa (Mini Table)',
    namePt: 'Kit Mesversário / Festa em Casa (Mini Table)',
    badgeEs: '🍼 Recurrente Mensal',
    badgePt: '🍼 Recorrente Mensal',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
    quantity: 15,
    sheetsA4: 14,
    sheetCost: 0.25,
    inkCostPerSheet: 0.15,
    ribbonsAccessories: 2.50,
    candiesFilling: 0.00,
    packagingCost: 1.20,
    laborHours: 1.8,
    hourlyRate: 10.00,
    fixedCostPercent: 10,
    paymentFeePercent: 4.99,
    targetMarginPercent: 110,
    itemsListEs: ['1 Cake Topper con Número Mes', '2 Displays de Mesa', '6 Cajitas Milk', '6 Tubetes Decorados'],
    itemsListPt: ['1 Topo de Bolo com Mês/Nome', '2 Displays de Mesa em Papel', '6 Caixas Milk', '6 Tubetes com Aplique 3D']
  },
  {
    id: 'cajita-unitaria',
    nameEs: 'Docena de Cajitas Avulsas (Milk, Pirámide o Gable)',
    namePt: 'Dúzia de Caixinhas Avulsas (Milk, Pirâmide ou Gable)',
    badgeEs: '📦 Pedido Menor',
    badgePt: '📦 Pedido Menor',
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
    quantity: 12,
    sheetsA4: 12,
    sheetCost: 0.25,
    inkCostPerSheet: 0.15,
    ribbonsAccessories: 1.80,
    candiesFilling: 0.00,
    packagingCost: 0.80,
    laborHours: 1.2,
    hourlyRate: 10.00,
    fixedCostPercent: 10,
    paymentFeePercent: 4.99,
    targetMarginPercent: 100,
    itemsListEs: ['12 Cajas personalizadas con tema y nombre'],
    itemsListPt: ['12 Caixinhas personalizadas com tema e nome']
  },
  {
    id: 'topo-3d',
    nameEs: 'Cake Topper 3D en Capas (Mesa Principal)',
    namePt: 'Topo de Bolo 3D em Camadas (Mesa Principal)',
    badgeEs: '🎂 Rápido y Rentable',
    badgePt: '🎂 Rápido e Lucrativo',
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-300',
    quantity: 1,
    sheetsA4: 3,
    sheetCost: 0.30,
    inkCostPerSheet: 0.20,
    ribbonsAccessories: 2.50,
    candiesFilling: 0.00,
    packagingCost: 1.00,
    laborHours: 1.0,
    hourlyRate: 12.00,
    fixedCostPercent: 10,
    paymentFeePercent: 4.99,
    targetMarginPercent: 150,
    itemsListEs: ['1 Topo de Pastel multicapas con efecto 3D y varillas'],
    itemsListPt: ['1 Topo de Bolo multicamadas com acetato/lamicote e canudos']
  }
];

export const PartyPricingCalculatorModal: React.FC<PartyPricingCalculatorModalProps> = ({
  isOpen,
  onClose,
  language = 'es',
}) => {
  const isEs = language === 'es';

  // Currency selection
  const [currency, setCurrency] = useState<string>(isEs ? '$' : 'R$');

  // Input states
  const [presetSelected, setPresetSelected] = useState<string>('kit-basico');
  const [orderTitle, setOrderTitle] = useState<string>(isEs ? 'Kit Fiesta Infantil Personalizado' : 'Kit Lembrancinhas de Festa Infantil');
  const [itemCount, setItemCount] = useState<number>(21);
  const [sheetsA4, setSheetsA4] = useState<number>(22);
  const [sheetCost, setSheetCost] = useState<number>(0.25);
  const [inkCostPerSheet, setInkCostPerSheet] = useState<number>(0.15);
  const [ribbonsAccessories, setRibbonsAccessories] = useState<number>(3.50);
  const [candiesFilling, setCandiesFilling] = useState<number>(0.00);
  const [packagingCost, setPackagingCost] = useState<number>(1.50);
  
  // Labor
  const [laborHours, setLaborHours] = useState<number>(2.5);
  const [hourlyRate, setHourlyRate] = useState<number>(10.00);

  // Overhead & Platform fees
  const [fixedCostPercent, setFixedCostPercent] = useState<number>(10);
  const [paymentFeePercent, setPaymentFeePercent] = useState<number>(4.99);

  // Target profit margin
  const [targetMarginPercent, setTargetMarginPercent] = useState<number>(100);

  // Copied state
  const [copiedProposal, setCopiedProposal] = useState(false);

  // Apply preset
  const handleSelectPreset = (presetId: string) => {
    setPresetSelected(presetId);
    const p = PRESETS.find(item => item.id === presetId);
    if (p) {
      setOrderTitle(isEs ? p.nameEs : p.namePt);
      setItemCount(p.quantity);
      setSheetsA4(p.sheetsA4);
      setSheetCost(p.sheetCost);
      setInkCostPerSheet(p.inkCostPerSheet);
      setRibbonsAccessories(p.ribbonsAccessories);
      setCandiesFilling(p.candiesFilling);
      setPackagingCost(p.packagingCost);
      setLaborHours(p.laborHours);
      setHourlyRate(p.hourlyRate);
      setFixedCostPercent(p.fixedCostPercent);
      setPaymentFeePercent(p.paymentFeePercent);
      setTargetMarginPercent(p.targetMarginPercent);
    }
  };

  // Calculations
  const paperTotalCost = sheetsA4 * sheetCost;
  const inkTotalCost = sheetsA4 * inkCostPerSheet;
  const directMaterialsCost = paperTotalCost + inkTotalCost + ribbonsAccessories + candiesFilling + packagingCost;
  
  const laborTotalCost = laborHours * hourlyRate;
  const subtotalCost = directMaterialsCost + laborTotalCost;

  // Fixed overhead (electricity, tools wear, internet)
  const overheadCost = subtotalCost * (fixedCostPercent / 100);
  const totalProductionCost = subtotalCost + overheadCost;

  // Profit calculation based on desired margin %
  // Selling Price = Total Cost * (1 + Margin / 100) / (1 - Payment Fee / 100)
  const basePriceWithProfit = totalProductionCost * (1 + targetMarginPercent / 100);
  const feeMultiplier = Math.max(0.01, 1 - (paymentFeePercent / 100));
  const suggestedSellingPrice = basePriceWithProfit / feeMultiplier;
  
  const cardFeeAmount = suggestedSellingPrice * (paymentFeePercent / 100);
  const netRevenue = suggestedSellingPrice - cardFeeAmount;
  const netProfit = netRevenue - totalProductionCost;

  const unitSellingPrice = itemCount > 0 ? (suggestedSellingPrice / itemCount) : suggestedSellingPrice;
  const unitProductionCost = itemCount > 0 ? (totalProductionCost / itemCount) : totalProductionCost;
  const unitNetProfit = itemCount > 0 ? (netProfit / itemCount) : netProfit;

  // Tier comparisons (Economic 60%, Recommended targetMarginPercent, Luxury 180%)
  const economicPrice = (totalProductionCost * (1 + 0.60)) / feeMultiplier;
  const luxuryPrice = (totalProductionCost * (1 + 1.80)) / feeMultiplier;

  // Generate formatted WhatsApp quotation
  const handleCopyQuotation = () => {
    const text = isEs
      ? `🎈 *PRESUPUESTO DE PAPELERÍA & RECUERDOS DE FIESTA* 🎈\n\n` +
        `Hola! Con mucho gusto te presento la cotización para tu evento:\n\n` +
        `📦 *Detalle del Pedido:* ${orderTitle}\n` +
        `🔢 *Cantidad Total:* ${itemCount} piezas\n` +
        `✨ *Acabado:* Papel Fotográfico de Alta Resolución + Capas 3D + Apliques\n\n` +
        `----------------------------------------\n` +
        `🏷️ *Valor Unitario Promedio:* ${currency} ${unitSellingPrice.toFixed(2)}\n` +
        `💰 *INVERSIÓN TOTAL:* ${currency} ${suggestedSellingPrice.toFixed(2)}\n` +
        `----------------------------------------\n\n` +
        `📌 *Condiciones y Reserva:*\n` +
        `• Seña del 50% para congelar fecha e iniciar el diseño.\n` +
        `• Saldo restante contra entrega o despacho.\n` +
        `• Tiempo de confección: 5 a 7 días hábiles.\n\n` +
        `¿Deseas que reservemos la fecha para tu fiesta? 😊🎉`
      : `🎈 *ORÇAMENTO DE PAPELARIA PERSONALIZADA & LEMBRANCINHAS* 🎈\n\n` +
        `Olá! É um prazer enviar o orçamento exclusivo para o seu evento:\n\n` +
        `📦 *Detalhe da Encomenda:* ${orderTitle}\n` +
        `🔢 *Quantidade Total:* ${itemCount} itens\n` +
        `✨ *Acabamento:* Papel Fotográfico Glossy Alta Resolução + Camadas 3D + Laços/Apliques\n\n` +
        `----------------------------------------\n` +
        `🏷️ *Valor Unitário Médio:* ${currency} ${unitSellingPrice.toFixed(2)}\n` +
        `💰 *VALOR TOTAL DO PEDIDO:* ${currency} ${suggestedSellingPrice.toFixed(2)}\n` +
        `----------------------------------------\n\n` +
        `📌 *Condições & Agendamento:*\n` +
        `• Entrada de 50% para reserva da data e início da produção.\n` +
        `• Restante na entrega ou envio.\n` +
        `• Prazo de produção: 5 a 7 dias úteis.\n\n` +
        `Posso reservar a data para a festa do seu príncipe/princesa? 😊🎉`;

    try {
      navigator.clipboard.writeText(text);
      setCopiedProposal(true);
      setTimeout(() => setCopiedProposal(false), 3000);
    } catch {
      // Fallback
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
      
      <div 
        id="party-pricing-calculator-modal"
        className="bg-white rounded-3xl w-full max-w-5xl max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
      >
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-100 bg-gradient-to-r from-emerald-50 via-teal-50 to-amber-50 shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-md shadow-emerald-200 shrink-0">
              <DollarSign className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="text-sm sm:text-lg font-black text-slate-900 tracking-tight truncate">
                  {isEs ? 'Calculadora de Precio de Venta & Ganancia' : 'Calculadora de Preço de Venda & Lucro para Festas'}
                </h2>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-emerald-100 text-emerald-800 border border-emerald-300">
                  {isEs ? '100% Preciso' : '100% Preciso'}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 truncate">
                {isEs ? 'Calcula costos de papel, mano de obra y margen real para nunca perder dinero' : 'Calcule papel, tinta, laços, mão de obra e descubra quanto cobrar com lucro garantido'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Currency switcher */}
            <div className="flex items-center bg-white border border-slate-200 rounded-xl p-0.5 shadow-2xs">
              {['$', 'R$', '€', 'S/.'].map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`px-2 py-1 text-xs font-black rounded-lg transition ${
                    currency === curr
                      ? 'bg-emerald-600 text-white shadow-2xs'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>

            <button
              id="close-pricing-modal-btn"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/80 transition cursor-pointer"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* Quick Presets Banner with Rich Cards */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <label className="text-[11px] font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                <span>{isEs ? 'Modelos de Kits Listos para Precificar (Elige o Personaliza):' : 'Modelos de Kits Prontos para Precificar (Escolha ou Personalize):'}</span>
              </label>
              <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                {isEs ? 'Calcula automático' : 'Cálculo automático'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {PRESETS.map((p) => {
                const isSelected = presetSelected === p.id;
                const isLuxo = p.id === 'kit-luxo';
                const isBasico = p.id === 'kit-basico';

                return (
                  <button
                    key={p.id}
                    id={`pricing-preset-${p.id}`}
                    onClick={() => handleSelectPreset(p.id)}
                    className={`p-3.5 rounded-2xl border-2 text-left transition flex flex-col justify-between cursor-pointer relative overflow-hidden group active:scale-98 ${
                      isSelected
                        ? isLuxo
                          ? 'bg-purple-50/90 border-purple-500 ring-2 ring-purple-500/30 text-purple-950 font-bold shadow-md'
                          : isBasico
                            ? 'bg-amber-50/90 border-amber-500 ring-2 ring-amber-500/30 text-amber-950 font-bold shadow-md'
                            : 'bg-emerald-50/90 border-emerald-500 ring-2 ring-emerald-500/30 text-emerald-950 font-bold shadow-md'
                        : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 shadow-2xs'
                    }`}
                  >
                    <div>
                      {/* Top Badge & Piece Count */}
                      <div className="flex items-center justify-between gap-1 mb-2">
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${p.badgeColor}`}>
                          {isEs ? p.badgeEs : p.badgePt}
                        </span>
                        <span className="text-[11px] font-extrabold text-slate-800 bg-slate-100 px-2 py-0.5 rounded-lg shrink-0">
                          {p.quantity} {isEs ? 'piezas' : 'peças'}
                        </span>
                      </div>

                      {/* Kit Title */}
                      <h4 className="text-xs sm:text-sm font-black line-clamp-1 text-slate-900 group-hover:text-emerald-700 transition">
                        {isEs ? p.nameEs : p.namePt}
                      </h4>

                      {/* Item contents preview */}
                      <div className="mt-2 space-y-1">
                        {(isEs ? p.itemsListEs : p.itemsListPt).map((itemStr, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                            <span className="truncate">{itemStr}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Indicator */}
                    <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
                      <span className="text-slate-400 font-medium">
                        {p.sheetsA4} {isEs ? 'hojas A4' : 'folhas A4'} • {p.laborHours}h
                      </span>
                      <span className={`font-black ${isSelected ? 'text-emerald-700' : 'text-slate-500 group-hover:text-slate-900'}`}>
                        {isSelected ? (isEs ? '✓ Seleccionado' : '✓ Selecionado') : (isEs ? 'Usar este kit →' : 'Usar este kit →')}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Two Columns Layout: Inputs on Left, Real-Time Profit Analytics on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* LEFT COLUMN: Cost Breakdown Inputs (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Section 1: Order Details & Materials */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200/60 pb-2.5">
                  <h3 className="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <Package className="w-4 h-4 text-emerald-600" />
                    {isEs ? '1. Materiales e Insumos' : '1. Materiais & Insumos Gastos'}
                  </h3>
                  <span className="text-[11px] font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                    {currency} {directMaterialsCost.toFixed(2)}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Total pieces in order */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      {isEs ? 'Cantidad de Piezas en el Pedido' : 'Quantidade de Itens no Pedido'}
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={itemCount}
                      onChange={(e) => setItemCount(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-xl font-bold text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>

                  {/* Sheets A4 printed */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      {isEs ? 'Hojas A4 Fotográficas Utilizadas' : 'Folhas A4 Fotográficas Gastas'}
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={sheetsA4}
                      onChange={(e) => setSheetsA4(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-xl font-bold text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>

                  {/* Cost per sheet */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      {isEs ? `Costo por Hoja de Papel (${currency})` : `Custo por Folha de Papel (${currency})`}
                    </label>
                    <input
                      type="number"
                      step="0.05"
                      min="0"
                      value={sheetCost}
                      onChange={(e) => setSheetCost(Math.max(0, parseFloat(e.target.value) || 0))}
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-xl font-bold text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>

                  {/* Cost of ink per sheet */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      {isEs ? `Costo Tinta por Hoja (${currency})` : `Custo de Tinta por Folha (${currency})`}
                    </label>
                    <input
                      type="number"
                      step="0.05"
                      min="0"
                      value={inkCostPerSheet}
                      onChange={(e) => setInkCostPerSheet(Math.max(0, parseFloat(e.target.value) || 0))}
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-xl font-bold text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>

                  {/* Ribbons & 3D foam accessories */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      {isEs ? `Cintas, Lazos, Strass y Cinta 3D (${currency})` : `Fitas, Laços, Strass e Fita Banana (${currency})`}
                    </label>
                    <input
                      type="number"
                      step="0.5"
                      min="0"
                      value={ribbonsAccessories}
                      onChange={(e) => setRibbonsAccessories(Math.max(0, parseFloat(e.target.value) || 0))}
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-xl font-bold text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>

                  {/* Candies & Filling */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      {isEs ? `Dulces / Rellenos (Opcional) (${currency})` : `Doces / Recheios (Se incluso) (${currency})`}
                    </label>
                    <input
                      type="number"
                      step="0.5"
                      min="0"
                      value={candiesFilling}
                      onChange={(e) => setCandiesFilling(Math.max(0, parseFloat(e.target.value) || 0))}
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-xl font-bold text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>

                  {/* Packaging cost */}
                  <div className="sm:col-span-2">
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      {isEs ? `Bolsa de Entrega / Empaque Final (${currency})` : `Embalagem & Sacola de Entrega (${currency})`}
                    </label>
                    <input
                      type="number"
                      step="0.5"
                      min="0"
                      value={packagingCost}
                      onChange={(e) => setPackagingCost(Math.max(0, parseFloat(e.target.value) || 0))}
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-xl font-bold text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Labor & Hourly Rate */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200/60 pb-2.5">
                  <h3 className="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-purple-600" />
                    {isEs ? '2. Tu Mano de Obra (Tiempo de Trabajo)' : '2. Sua Mão de Obra (Tempo Dedicado)'}
                  </h3>
                  <span className="text-[11px] font-black text-purple-700 bg-purple-100 px-2 py-0.5 rounded-md">
                    {currency} {laborTotalCost.toFixed(2)}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Hours spent */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      {isEs ? 'Horas de Edición, Corte y Armado' : 'Horas de Edição, Corte e Montagem'}
                    </label>
                    <input
                      type="number"
                      step="0.5"
                      min="0.1"
                      value={laborHours}
                      onChange={(e) => setLaborHours(Math.max(0.1, parseFloat(e.target.value) || 0.1))}
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-xl font-bold text-slate-800 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>

                  {/* Hourly rate */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      {isEs ? `Valor de tu Hora de Trabajo (${currency}/h)` : `Valor da sua Hora de Trabalho (${currency}/h)`}
                    </label>
                    <input
                      type="number"
                      step="1"
                      min="1"
                      value={hourlyRate}
                      onChange={(e) => setHourlyRate(Math.max(1, parseFloat(e.target.value) || 1))}
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-xl font-bold text-slate-800 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                </div>
              </div>

              {/* Section 3: Overhead & Card Machine Fees */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 space-y-4">
                <h3 className="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-200/60 pb-2.5">
                  <Coins className="w-4 h-4 text-amber-600" />
                  {isEs ? '3. Costos Fijos & Tasa de Cobro' : '3. Custos Fixos & Taxa de Cartão'}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      {isEs ? 'Costos Fijos (Luz, Internet, Desgaste %)' : 'Custos Fixos (Luz, Internet, Desgaste %)'}
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="0"
                        max="50"
                        value={fixedCostPercent}
                        onChange={(e) => setFixedCostPercent(Math.max(0, parseInt(e.target.value) || 0))}
                        className="w-24 px-3 py-2 text-sm bg-white border border-slate-200 rounded-xl font-bold text-slate-800"
                      />
                      <span className="text-xs text-slate-500 font-medium">%</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      {isEs ? 'Tasa Pasarela / Tarjeta (%)' : 'Taxa da Máquina de Cartão (%)'}
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        step="0.1"
                        min="0"
                        max="25"
                        value={paymentFeePercent}
                        onChange={(e) => setPaymentFeePercent(Math.max(0, parseFloat(e.target.value) || 0))}
                        className="w-24 px-3 py-2 text-sm bg-white border border-slate-200 rounded-xl font-bold text-slate-800"
                      />
                      <span className="text-xs text-slate-500 font-medium">%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: Target Margin % Selector */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-50/90 to-teal-50/80 border-2 border-emerald-300 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-black text-emerald-950 uppercase tracking-wide flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                    {isEs ? '4. Margen de Ganancia Deseado:' : '4. Margem de Lucro Desejada:'}
                  </label>
                  <span className="text-sm font-black text-emerald-800 bg-white px-3 py-0.5 rounded-full border border-emerald-300 shadow-2xs">
                    {targetMarginPercent}%
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    { label: isEs ? '50% (Básico)' : '50% (Econômico)', val: 50 },
                    { label: isEs ? '80% (Estándar)' : '80% (Padrão)', val: 80 },
                    { label: isEs ? '100% (Recomendado)' : '100% (Recomendado)', val: 100 },
                    { label: isEs ? '150% (Artesanal Luxo)' : '150% (Luxo Artesanal)', val: 150 },
                    { label: isEs ? '200% (Alta Ganancia)' : '200% (Alta Margem)', val: 200 },
                  ].map((m) => (
                    <button
                      key={m.val}
                      onClick={() => setTargetMarginPercent(m.val)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                        targetMarginPercent === m.val
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : 'bg-white text-slate-700 border border-emerald-200 hover:bg-emerald-100/50'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Results & Real Profit Breakdown (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Highlighted Master Price Card */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-900 text-white shadow-xl shadow-emerald-900/20 border-2 border-emerald-400 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-400/20 text-emerald-200 border border-emerald-400/30 mb-3">
                  <Sparkles className="w-3 h-3 text-emerald-300" />
                  {isEs ? 'Precio de Venta Sugerido' : 'Preço de Venda Sugerido'}
                </span>

                {/* Total Price & Unit Price */}
                <div className="mb-4">
                  <div className="text-3xl sm:text-4xl font-black tracking-tight text-white flex items-baseline gap-1">
                    <span>{currency}</span>
                    <span>{suggestedSellingPrice.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-emerald-200 font-semibold mt-1">
                    {isEs ? 'Equivale a ' : 'Equivale a '} 
                    <strong className="text-white text-sm font-black">{currency} {unitSellingPrice.toFixed(2)}</strong> 
                    {isEs ? ' por cada pieza' : ' por cada unidade pronta'}
                  </p>
                </div>

                {/* Net Profit & Cost Breakdown Badges */}
                <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-emerald-500/40">
                  <div className="bg-white/10 backdrop-blur-xs p-3 rounded-2xl border border-white/10">
                    <span className="text-[10px] text-emerald-200 font-bold block uppercase tracking-wider">
                      {isEs ? 'Lucro Limpio en Mano' : 'Lucro Líquido no Bolso'}
                    </span>
                    <span className="text-lg font-black text-emerald-300">
                      +{currency} {netProfit.toFixed(2)}
                    </span>
                  </div>

                  <div className="bg-white/10 backdrop-blur-xs p-3 rounded-2xl border border-white/10">
                    <span className="text-[10px] text-emerald-200 font-bold block uppercase tracking-wider">
                      {isEs ? 'Costo Total Producción' : 'Custo Total Produção'}
                    </span>
                    <span className="text-lg font-black text-white/90">
                      {currency} {totalProductionCost.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* 3 Tier Price Comparison (Economic / Recommended / Luxury) */}
              <div className="p-4 sm:p-5 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-3">
                <h4 className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center justify-between">
                  <span>{isEs ? 'Faixas de Precio de Mercado' : 'Faixas de Preço do Mercado'}</span>
                  <span className="text-[10px] font-bold text-slate-400">Total do Kit</span>
                </h4>

                <div className="space-y-2">
                  {/* Economic Tier */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 text-xs">
                    <div>
                      <span className="font-bold text-slate-700 block">
                        {isEs ? 'Económico (Margen 60%)' : 'Econômico (Margem 60%)'}
                      </span>
                      <span className="text-[10px] text-slate-400">
                        {isEs ? 'Para clientes familiares o amigos' : 'Para amigos ou clientes de entrada'}
                      </span>
                    </div>
                    <span className="font-black text-slate-800 text-sm">
                      {currency} {economicPrice.toFixed(2)}
                    </span>
                  </div>

                  {/* Recommended Tier */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 border-2 border-emerald-400 text-xs">
                    <div>
                      <span className="font-black text-emerald-950 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                        {isEs ? 'Recomendado (Margen ' : 'Recomendado (Margem '}{targetMarginPercent}%)
                      </span>
                      <span className="text-[10px] text-emerald-700 font-medium">
                        {isEs ? 'El precio ideal para tu negocio' : 'Preço ideal com lucro e valorização'}
                      </span>
                    </div>
                    <span className="font-black text-emerald-800 text-sm">
                      {currency} {suggestedSellingPrice.toFixed(2)}
                    </span>
                  </div>

                  {/* Luxury Tier */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 text-xs">
                    <div>
                      <span className="font-bold text-purple-900 block">
                        {isEs ? 'Premium / Luxo (Margen 180%)' : 'Premium / Luxo (Margem 180%)'}
                      </span>
                      <span className="text-[10px] text-purple-500">
                        {isEs ? 'Con apliques metálicos y lazos dobles' : 'Com laços duplos, strass e acetato'}
                      </span>
                    </div>
                    <span className="font-black text-purple-900 text-sm">
                      {currency} {luxuryPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Copy WhatsApp Proposal Button */}
              <button
                id="copy-whatsapp-proposal-btn"
                onClick={handleCopyQuotation}
                className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 active:scale-98 transition cursor-pointer"
              >
                {copiedProposal ? (
                  <>
                    <Check className="w-4 h-4 stroke-[3] text-emerald-200" />
                    <span>{isEs ? '¡Presupuesto Copiado para WhatsApp!' : 'Orçamento Copiado com Sucesso!'}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{isEs ? 'Copiar Presupuesto Profesional para WhatsApp' : 'Copiar Orçamento Formatado para WhatsApp'}</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-slate-400 text-center font-medium">
                {isEs 
                  ? '💡 Pega el texto directamente en el chat de tu cliente con todos los datos ordenados.'
                  : '💡 Cole a mensagem diretamente no WhatsApp da cliente com valores e prazos prontos.'}
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
