import React, { useState } from 'react';
import { 
  Heart, 
  ExternalLink, 
  Copy, 
  Check, 
  Sparkles, 
  PackageOpen, 
  Type, 
  Hash, 
  Candy, 
  Gift, 
  Palette, 
  Star, 
  ShoppingBag, 
  Utensils, 
  Mail, 
  Sparkle, 
  FolderDown, 
  FileText, 
  BookOpen, 
  Video, 
  Flame, 
  Coffee, 
  Cake, 
  Layers, 
  FileCheck, 
  BookMarked, 
  Smartphone, 
  Shirt, 
  Book, 
  Brush, 
  Send, 
  Dices, 
  Box, 
  Image, 
  ClipboardList, 
  ShieldCheck, 
  Bookmark, 
  Droplet, 
  Smile,
  Printer,
  Clock,
  Crown,
  Lock
} from 'lucide-react';
import { ResourceItem } from '../types';

interface ResourceCardProps {
  item: ResourceItem;
  isFavorite: boolean;
  isCompleted: boolean;
  onToggleFavorite: (id: string) => void;
  onToggleCompleted: (id: string) => void;
  language: 'es' | 'pt';
  isDemoMode?: boolean;
  onTriggerLockModal?: (item: ResourceItem) => void;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
  item,
  isFavorite,
  isCompleted,
  onToggleFavorite,
  onToggleCompleted,
  language,
  isDemoMode = false,
  onTriggerLockModal,
}) => {
  const [copied, setCopied] = useState(false);
  const isEs = language === 'es';

  // Icon mapping
  const renderIcon = () => {
    const props = { className: "w-5 h-5" };
    switch (item.iconName) {
      case 'Type': return <Type {...props} />;
      case 'Hash': return <Hash {...props} />;
      case 'Candy': return <Candy {...props} />;
      case 'Gift': return <Gift {...props} />;
      case 'Palette': return <Palette {...props} />;
      case 'Star': return <Star {...props} />;
      case 'ShoppingBag': return <ShoppingBag {...props} />;
      case 'Utensils': return <Utensils {...props} />;
      case 'Mail': return <Mail {...props} />;
      case 'Sparkle': return <Sparkle {...props} />;
      case 'FolderDown': return <FolderDown {...props} />;
      case 'FileText': return <FileText {...props} />;
      case 'BookOpen': return <BookOpen {...props} />;
      case 'Video': return <Video {...props} />;
      case 'Flame': return <Flame {...props} />;
      case 'Coffee': return <Coffee {...props} />;
      case 'Cake': return <Cake {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'FileCheck': return <FileCheck {...props} />;
      case 'BookMarked': return <BookMarked {...props} />;
      case 'Smartphone': return <Smartphone {...props} />;
      case 'Shirt': return <Shirt {...props} />;
      case 'Book': return <Book {...props} />;
      case 'Brush': return <Brush {...props} />;
      case 'Send': return <Send {...props} />;
      case 'Dices': return <Dices {...props} />;
      case 'Box': return <Box {...props} />;
      case 'Heart': return <Heart {...props} />;
      case 'Image': return <Image {...props} />;
      case 'ClipboardList': return <ClipboardList {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Bookmark': return <Bookmark {...props} />;
      case 'Droplet': return <Droplet {...props} />;
      case 'Smile': return <Smile {...props} />;
      default: return <PackageOpen {...props} />;
    }
  };

  const getFormatBadgeStyle = () => {
    switch (item.format) {
      case 'canva':
        return 'bg-pink-100 text-pink-700 border-pink-200';
      case 'drive':
        return 'bg-teal-100 text-teal-800 border-teal-200';
      case 'pdf':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'svg':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'video':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'ebook':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getButtonStyle = () => {
    switch (item.format) {
      case 'canva':
        return 'bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:to-rose-700 text-white shadow-pink-200';
      case 'drive':
        return 'bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white shadow-teal-200';
      case 'pdf':
        return 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-purple-200';
      case 'svg':
        return 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-amber-200';
      case 'video':
        return 'bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white shadow-red-200';
      default:
        return 'bg-slate-900 hover:bg-slate-800 text-white shadow-slate-200';
    }
  };

  // Translated button label
  const getActionLabel = () => {
    if (isEs) return item.actionText;
    switch (item.format) {
      case 'canva': return 'Abrir no Canva';
      case 'drive': return item.actionText.toLowerCase().includes('descargar') ? 'Baixar no Google Drive' : 'Abrir no Drive';
      case 'pdf': return 'Baixar PDF Pronto';
      case 'svg': return 'Baixar Moldes SVG';
      case 'video': return 'Acessar Curso em Vídeo';
      case 'ebook': return 'Baixar 4 E-books';
      default: return 'Abrir Recurso';
    }
  };

  // Robust link opener across desktop, mobile, tablet & iframe sandboxes
  const handleOpenUrl = (targetUrl: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (isDemoMode) {
      onTriggerLockModal?.(item);
      return;
    }
    if (!targetUrl) return;

    try {
      const win = window.open(targetUrl, '_blank', 'noopener,noreferrer');
      if (!win || win.closed || typeof win.closed === 'undefined') {
        const tempLink = document.createElement('a');
        tempLink.href = targetUrl;
        tempLink.target = '_blank';
        tempLink.rel = 'noopener noreferrer';
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
      }
    } catch (err) {
      console.warn('Fallback opening:', err);
      window.open(targetUrl, '_blank');
    }
  };

  const handleOpenResource = (e?: React.MouseEvent) => {
    if (isDemoMode) {
      if (e) e.stopPropagation();
      onTriggerLockModal?.(item);
      return;
    }
    handleOpenUrl(item.actionUrl, e);
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isDemoMode) {
      onTriggerLockModal?.(item);
      return;
    }
    try {
      navigator.clipboard.writeText(item.actionUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div 
      id={`resource-card-${item.id}`}
      onClick={handleOpenResource}
      className={`group relative bg-white rounded-3xl border-2 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer select-none ${
        isCompleted 
          ? 'border-emerald-300 bg-emerald-50/30 shadow-xs' 
          : isDemoMode
          ? 'border-pink-100 hover:border-pink-300 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.99]'
          : 'border-pink-100/90 hover:border-pink-300 hover:shadow-lg hover:shadow-pink-100/60 hover:-translate-y-0.5 active:scale-[0.99]'
      }`}
    >
      
      {/* Card Header & Content */}
      <div className="p-5">
        
        {/* Top Badges & Actions */}
        <div className="flex items-center justify-between gap-2 mb-3">
          
          <div className="flex items-center gap-1.5 flex-wrap">
            {/* Format Badge */}
            <span className={`text-[11px] font-extrabold px-2.5 py-0.5 rounded-full border ${getFormatBadgeStyle()}`}>
              {item.formatLabel}
            </span>

            {/* Special Highlights */}
            {item.badge && (
              <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 text-white shadow-2xs">
                {item.badge}
              </span>
            )}

            {/* Demo Lock Pill */}
            {isDemoMode && (
              <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-slate-900 text-amber-300 flex items-center gap-1 shadow-2xs">
                <Lock className="w-2.5 h-2.5" />
                <span>Demo</span>
              </span>
            )}
          </div>

          {/* Action icons: Favorite & Completed Check */}
          <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => onToggleCompleted(item.id)}
              className={`p-1.5 rounded-xl text-xs transition cursor-pointer active:scale-90 ${
                isCompleted 
                  ? 'bg-emerald-100 text-emerald-700 font-black' 
                  : 'text-slate-300 hover:text-slate-500 hover:bg-slate-100'
              }`}
              title={isCompleted ? (isEs ? 'Completado' : 'Concluído') : (isEs ? 'Marcar como hecho' : 'Marcar como feito')}
            >
              <Check className={`w-4 h-4 ${isCompleted ? 'stroke-[3]' : ''}`} />
            </button>

            <button
              onClick={() => onToggleFavorite(item.id)}
              className={`p-1.5 rounded-xl transition cursor-pointer active:scale-90 ${
                isFavorite 
                  ? 'text-pink-500 bg-pink-50' 
                  : 'text-slate-300 hover:text-pink-400 hover:bg-pink-50/50'
              }`}
              title={isFavorite ? (isEs ? 'Quitar de Favoritos' : 'Remover Favorito') : (isEs ? 'Añadir a Favoritos' : 'Favoritar')}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-pink-500 text-pink-500' : ''}`} />
            </button>
          </div>

        </div>

        {/* Title & Subtitle with Icon */}
        <div className="flex items-start gap-3 mt-1.5">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-pink-50 to-amber-50 text-pink-600 border border-pink-100/80 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-pink-500 group-hover:text-white transition duration-300 shadow-2xs">
            {renderIcon()}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-extrabold text-slate-900 text-sm leading-snug group-hover:text-pink-600 transition truncate">
              {item.title}
            </h3>
            {item.subtitle && (
              <p className="text-[11px] text-slate-500 font-semibold truncate mt-0.5">
                {item.subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-slate-600 mt-2.5 line-clamp-2 leading-relaxed">
          {item.description}
        </p>

        {/* Multi-link / Sub-links Quick List if available */}
        {item.subLinks && item.subLinks.length > 0 && (
          <div className="mt-3 pt-2.5 border-t border-pink-100/80 space-y-1.5" onClick={(e) => e.stopPropagation()}>
            <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-600 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-pink-600" />
              {isEs ? 'Enlaces y Partes Incluidas:' : 'Links e Partes Incluídas:'}
            </p>
            <div className="flex flex-col gap-1">
              {item.subLinks.map((sub, idx) => (
                <button
                  key={idx}
                  onClick={(e) => handleOpenUrl(sub.url, e)}
                  className="w-full text-left flex items-center justify-between gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-50 hover:bg-pink-50 text-slate-700 hover:text-pink-700 border border-slate-200/80 hover:border-pink-200 transition text-[11px] font-semibold group/sub cursor-pointer active:scale-[0.98]"
                >
                  <span className="truncate">
                    {isEs ? sub.label : (sub.labelPt || sub.label)}
                  </span>
                  {isDemoMode ? (
                    <Lock className="w-3 h-3 shrink-0 text-amber-500" />
                  ) : (
                    <ExternalLink className="w-3 h-3 shrink-0 text-slate-400 group-hover/sub:text-pink-600" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Paper & Assembly Advice Badge */}
        {item.paperRecommended && (
          <div className="mt-3 pt-2.5 border-t border-pink-50 flex items-center gap-1.5 text-[11px] text-slate-500">
            <Printer className="w-3.5 h-3.5 text-teal-600 shrink-0" />
            <span className="truncate">
              <strong className="text-slate-700 font-bold">{isEs ? 'Papel:' : 'Papel:'}</strong> {item.paperRecommended}
            </span>
          </div>
        )}

      </div>

      {/* Card Footer with Direct CTA Button */}
      <div className="px-5 pb-5 pt-1 bg-white">
        <div className="flex items-center gap-2">
          
          {/* Main Action Button */}
          {isDemoMode ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onTriggerLockModal?.(item);
              }}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-2xl text-xs font-black transition shadow-sm cursor-pointer text-center active:scale-95 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-amber-300 hover:text-white hover:bg-pink-600 border border-slate-700 hover:border-pink-500"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>{isEs ? 'Desbloquear con Pack VIP' : 'Desbloquear com Pack VIP'}</span>
            </button>
          ) : (
            <a
              href={item.actionUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
                handleOpenResource(e);
              }}
              className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-black transition shadow-sm cursor-pointer text-center active:scale-95 ${getButtonStyle()}`}
            >
              <span>{getActionLabel()}</span>
              <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          )}

          {/* Copy link button */}
          <button
            onClick={handleCopy}
            className="p-2.5 rounded-2xl border border-pink-200 text-slate-500 hover:text-pink-600 hover:bg-pink-50 transition cursor-pointer active:scale-90 shrink-0"
            title={isDemoMode ? (isEs ? 'Bloqueado en modo demo' : 'Bloqueado no modo demo') : (isEs ? 'Copiar enlace directo' : 'Copiar link direto')}
          >
            {isDemoMode ? (
              <Lock className="w-3.5 h-3.5 text-amber-600" />
            ) : copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>

        </div>
      </div>

    </div>
  );
};
