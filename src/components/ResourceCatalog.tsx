import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  ResourceItem, 
  ResourceCategory, 
  ResourceFormat 
} from '../types';
import { ResourceCard } from './ResourceCard';
import { 
  Layers, 
  Sparkles, 
  Package, 
  Gift, 
  Video, 
  BookMarked, 
  Brush, 
  Mail, 
  Shirt, 
  Filter, 
  CheckCircle,
  Search,
  RotateCcw,
  Crown,
  HeartHandshake,
  Heart,
  Tag,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface ResourceCatalogProps {
  resources: ResourceItem[];
  searchQuery: string;
  onClearSearch: () => void;
  favorites: string[];
  completed: string[];
  onToggleFavorite: (id: string) => void;
  onToggleCompleted: (id: string) => void;
  showFavoritesOnly: boolean;
  onToggleFavoritesOnly: () => void;
  language: 'es' | 'pt';
  isDemoMode?: boolean;
  onTriggerLockModal?: (item: ResourceItem) => void;
}

export const ResourceCatalog: React.FC<ResourceCatalogProps> = ({
  resources,
  searchQuery,
  onClearSearch,
  favorites,
  completed,
  onToggleFavorite,
  onToggleCompleted,
  showFavoritesOnly,
  onToggleFavoritesOnly,
  language,
  isDemoMode = false,
  onTriggerLockModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory>('all');
  const [selectedFormat, setSelectedFormat] = useState<string>('all');
  const [selectedOccasion, setSelectedOccasion] = useState<string>('all');

  // Carousel refs & scroll state
  const categoryScrollRef = useRef<HTMLDivElement>(null);
  const occasionScrollRef = useRef<HTMLDivElement>(null);
  
  const [canScrollCatLeft, setCanScrollCatLeft] = useState(false);
  const [canScrollCatRight, setCanScrollCatRight] = useState(true);
  const [canScrollOccLeft, setCanScrollOccLeft] = useState(false);
  const [canScrollOccRight, setCanScrollOccRight] = useState(true);

  const checkCategoryScroll = useCallback(() => {
    const el = categoryScrollRef.current;
    if (el) {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      setCanScrollCatLeft(scrollLeft > 6);
      setCanScrollCatRight(scrollLeft < scrollWidth - clientWidth - 6);
    }
  }, []);

  const checkOccasionScroll = useCallback(() => {
    const el = occasionScrollRef.current;
    if (el) {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      setCanScrollOccLeft(scrollLeft > 6);
      setCanScrollOccRight(scrollLeft < scrollWidth - clientWidth - 6);
    }
  }, []);

  useEffect(() => {
    const catEl = categoryScrollRef.current;
    const occEl = occasionScrollRef.current;

    checkCategoryScroll();
    checkOccasionScroll();

    if (catEl) {
      catEl.addEventListener('scroll', checkCategoryScroll, { passive: true });
    }
    if (occEl) {
      occEl.addEventListener('scroll', checkOccasionScroll, { passive: true });
    }

    window.addEventListener('resize', checkCategoryScroll);
    window.addEventListener('resize', checkOccasionScroll);

    return () => {
      if (catEl) catEl.removeEventListener('scroll', checkCategoryScroll);
      if (occEl) occEl.removeEventListener('scroll', checkOccasionScroll);
      window.removeEventListener('resize', checkCategoryScroll);
      window.removeEventListener('resize', checkOccasionScroll);
    };
  }, [checkCategoryScroll, checkOccasionScroll]);

  const scrollCategories = (direction: 'left' | 'right') => {
    if (categoryScrollRef.current) {
      const offset = direction === 'left' ? -260 : 260;
      categoryScrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const scrollOccasions = (direction: 'left' | 'right') => {
    if (occasionScrollRef.current) {
      const offset = direction === 'left' ? -220 : 220;
      occasionScrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const isEs = language === 'es';

  const categories: { id: ResourceCategory; label: string; icon: string; count?: number }[] = [
    { id: 'all', label: isEs ? '🌟 Todos los Recursos' : '🌟 Todos os Recursos', icon: '🌟' },
    { id: 'canva_main', label: isEs ? '🎨 Plantillas Canva' : '🎨 Moldes Canva', icon: '🎨' },
    { id: 'bonuses', label: isEs ? '🎁 18 Bonos Exclusivos' : '🎁 18 Bônus VIP', icon: '🎁' },
    { id: 'boxes_molds', label: isEs ? '📦 Cajas & Moldes A4' : '📦 Caixas & Moldes A4', icon: '📦' },
    { id: 'video_courses', label: isEs ? '🎥 Cursos en Video' : '🎥 Cursos em Vídeo', icon: '🎥' },
    { id: 'school_labels', label: isEs ? '🎒 Etiquetas Escolares' : '🎒 Etiquetas Escolares', icon: '🎒' },
    { id: 'coloring_books', label: isEs ? '🖍️ Libritos Colorear' : '🖍️ Livros de Colorir', icon: '🖍️' },
    { id: 'invitations', label: isEs ? '💌 Invitaciones' : '💌 Convites', icon: '💌' },
    { id: 'sublimation_crafts', label: isEs ? '👕 Sublimación' : '👕 Sublimação', icon: '👕' },
  ];

  const occasions = [
    { id: 'all', label: isEs ? '🌟 Todo' : '🌟 Tudo' },
    { id: 'first_year', label: isEs ? '👑 1º Añito & Bebés' : '👑 1º Aninho & Bebês' },
    { id: 'girls', label: isEs ? '👧 Niñas & Princesas' : '👧 Meninas & Princesas' },
    { id: 'boys', label: isEs ? '👦 Niños & Aventura' : '👦 Meninos & Aventura' },
    { id: 'baby_shower', label: isEs ? '🍼 Baby Shower & Bautizo' : '🍼 Chá de Bebê & Batizado' },
    { id: 'easy_starter', label: isEs ? '✂️ Fáciles para Mamás' : '✂️ Fáceis para Mães' },
    { id: 'school', label: isEs ? '🎒 Vuelta a Clases' : '🎒 Volta às Aulas' },
    { id: 'sublimation', label: isEs ? '👕 Sublimación & Tazas' : '👕 Sublimação & Canecas' },
  ];

  const formats = [
    { id: 'all', label: isEs ? 'Todos los Formatos' : 'Todos os Formatos' },
    { id: 'canva', label: isEs ? '🎨 Canva Gratis' : '🎨 Canva Grátis' },
    { id: 'drive', label: isEs ? '📁 Google Drive' : '📁 Google Drive' },
    { id: 'pdf', label: isEs ? '📄 PDF A4 Listo' : '📄 PDF A4 Pronto' },
    { id: 'svg', label: isEs ? '✂️ Moldes SVG' : '✂️ Moldes SVG' },
  ];

  // Multilingual Synonym Dictionary for fast accurate matching
  const SYNONYM_MAP: Record<string, string[]> = {
    cajitas: ['cajita', 'cajas', 'caixinha', 'caixinhas', 'caixa', 'caixas', 'milk', 'gable', 'box', 'dulceras', 'dulces', 'doces', 'molds', 'moldes', 'bono-12'],
    caixinhas: ['cajita', 'cajitas', 'cajas', 'caixinha', 'caixa', 'caixas', 'milk', 'gable', 'box', 'dulceras', 'moldes', 'bono-12'],
    'caixas milk': ['milk', 'caixinha', 'caixinhas', 'cajita', 'cajitas', 'cajas', 'bono-12'],
    'cajitas milk': ['milk', 'caixinha', 'caixinhas', 'cajita', 'cajitas', 'cajas', 'bono-12'],
    toppers: ['topper', 'cake', 'bolo', 'pastel', 'torta', 'topos', 'topo', 'bono-1', 'bônus-1', 'bono-13'],
    topos: ['topper', 'toppers', 'cake', 'bolo', 'pastel', 'torta', 'topo', 'bono-1', 'bônus-1', 'bono-13'],
    'topos de bolo': ['topper', 'toppers', 'cake', 'bolo', 'pastel', 'torta', 'topo', 'bono-1', 'bônus-1', 'bono-13'],
    'cake toppers': ['topper', 'toppers', 'cake', 'bolo', 'pastel', 'torta', 'topo', 'bono-1', 'bônus-1', 'bono-13'],
    'cake topper': ['topper', 'toppers', 'cake', 'bolo', 'pastel', 'torta', 'topo', 'bono-1', 'bônus-1', 'bono-13'],
    'letras 3d': ['letra', 'letras', '3d', 'abecedario', 'alfabeto', 'numeros', 'números', 'bono-14'],
    letras: ['letra', 'letras', '3d', 'abecedario', 'alfabeto', 'numeros', 'números', 'bono-14'],
    papitas: ['papitas', 'papas', 'chip', 'chips', 'batatinha', 'batatas', 'salgadinho', 'bolsa papitas', 'bono-10'],
    batatinha: ['papitas', 'papas', 'chip', 'chips', 'batatinha', 'batatas', 'salgadinho', 'sacos de batatinha', 'bono-10'],
    'bolsa papitas': ['papitas', 'papas', 'chip', 'chips', 'batatinha', 'batatas', 'salgadinho', 'bolsa', 'sacos', 'bono-10'],
    'sacos de batatinha': ['papitas', 'papas', 'chip', 'chips', 'batatinha', 'batatas', 'salgadinho', 'bolsa', 'sacos', 'bono-10'],
    etiquetas: ['etiqueta', 'etiquetas', 'escolar', 'escolares', 'cuadernos', 'cadernos', 'aulas', 'clases', 'bono-4', 'bônus-4'],
    'etiquetas escolares': ['etiqueta', 'etiquetas', 'escolar', 'escolares', 'cuadernos', 'cadernos', 'aulas', 'clases', 'bono-4', 'bônus-4'],
    invitaciones: ['invitacion', 'invitaciones', 'convite', 'convites', 'whatsapp', 'digital', 'bono-9', 'bônus-9'],
    convites: ['invitacion', 'invitaciones', 'convite', 'convites', 'whatsapp', 'digital', 'bono-9', 'bônus-9'],
    'convites whatsapp': ['invitacion', 'invitaciones', 'convite', 'convites', 'whatsapp', 'digital', 'bono-9', 'bônus-9'],
    'invitaciones whatsapp': ['invitacion', 'invitaciones', 'convite', 'convites', 'whatsapp', 'digital', 'bono-9', 'bônus-9'],
    colorear: ['colorear', 'colorir', 'librito', 'libritos', 'livro', 'livros', 'dibujo', 'desenho', 'bono-8', 'bônus-8'],
    colorir: ['colorear', 'colorir', 'librito', 'libritos', 'livro', 'livros', 'dibujo', 'desenho', 'bono-8', 'bônus-8'],
    'livros de colorir': ['colorear', 'colorir', 'librito', 'libritos', 'livro', 'livros', 'dibujo', 'desenho', 'bono-8', 'bônus-8'],
    'libritos colorear': ['colorear', 'colorir', 'librito', 'libritos', 'livro', 'livros', 'dibujo', 'desenho', 'bono-8', 'bônus-8'],
    recuerdos: ['recuerdo', 'recuerdos', 'lembrancinha', 'lembrancinhas', 'souvenir', 'souvenirs', 'brindes'],
    lembrancinhas: ['recuerdo', 'recuerdos', 'lembrancinha', 'lembrancinhas', 'souvenir', 'souvenirs', 'brindes'],
  };

  const normalize = (str: string) => 
    str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Filtering logic
  const filteredResources = resources.filter((item) => {
    // Search query match
    if (searchQuery.trim()) {
      const q = normalize(searchQuery.trim());
      
      // Find synonym expansions
      const matchingSynonyms = Object.entries(SYNONYM_MAP)
        .filter(([key]) => q.includes(normalize(key)) || normalize(key).includes(q))
        .flatMap(([, syns]) => syns);

      const searchTerms = Array.from(new Set([q, ...matchingSynonyms.map(normalize)]));

      const titleNorm = normalize(item.title);
      const subtitleNorm = normalize(item.subtitle || '');
      const descNorm = normalize(item.description);
      const catNorm = normalize(item.category);
      const tagsNorm = item.tags.map(t => normalize(t));

      const match = searchTerms.some((term) => {
        const bonusMatch = term.startsWith('bono-') && item.bonusNumber === parseInt(term.replace('bono-', ''), 10);
        return (
          bonusMatch ||
          titleNorm.includes(term) ||
          subtitleNorm.includes(term) ||
          descNorm.includes(term) ||
          catNorm.includes(term) ||
          tagsNorm.some((t) => t.includes(term) || term.includes(t))
        );
      });

      if (!match) {
        return false;
      }
    }

    // Favorites only filter
    if (showFavoritesOnly && !favorites.includes(item.id)) {
      return false;
    }

    // Category filter
    if (selectedCategory !== 'all') {
      if (selectedCategory === 'bonuses') {
        if (!item.isBonus) return false;
      } else if (item.category !== selectedCategory) {
        return false;
      }
    }

    // Occasion / Theme Filter
    if (selectedOccasion !== 'all') {
      if (selectedOccasion === 'first_year') {
        const isFirstYear = item.tags.some(t => ['Cumpleaños', 'Edad', 'Letras 3D', 'Números 3D', 'Cajitas', 'Pastel'].includes(t)) || item.category === 'boxes_molds' || item.id.includes('numeros') || item.id.includes('canva-main');
        if (!isFirstYear) return false;
      } else if (selectedOccasion === 'girls') {
        const isGirl = item.tags.some(t => ['Princesas', 'Mariposas', 'Cumpleaños', 'Candy Bar', 'Recuerdos', 'Flores', 'Pastel', 'Letras 3D'].some(k => t.toLowerCase().includes(k.toLowerCase()))) || item.category === 'canva_main' || item.id.includes('candy');
        if (!isGirl) return false;
      } else if (selectedOccasion === 'boys') {
        const isBoy = item.tags.some(t => ['Aventura', 'Dinosaurios', 'Cumpleaños', 'Candy Bar', 'Papitas', '3D', 'Letras'].some(k => t.toLowerCase().includes(k.toLowerCase()))) || item.id.includes('bolsa-papitas') || item.id.includes('numeros-3d') || item.category === 'boxes_molds';
        if (!isBoy) return false;
      } else if (selectedOccasion === 'baby_shower') {
        const isBaby = item.tags.some(t => ['Bautizo', 'Baby Shower', 'Recuerdos', 'Cajitas', 'Invitaciones', 'Souvenirs'].some(k => t.toLowerCase().includes(k.toLowerCase()))) || item.id.includes('recuerdos') || item.id.includes('canva-main') || item.category === 'invitations';
        if (!isBaby) return false;
      } else if (selectedOccasion === 'easy_starter') {
        if (item.difficulty !== 'Fácil' && !item.tags.includes('Favoritos')) return false;
      } else if (selectedOccasion === 'school') {
        if (item.category !== 'school_labels' && !item.id.includes('escolar')) return false;
      } else if (selectedOccasion === 'sublimation') {
        if (item.category !== 'sublimation_crafts' && !item.id.includes('sublimacion')) return false;
      }
    }

    // Format filter
    if (selectedFormat !== 'all' && item.format !== selectedFormat) {
      return false;
    }

    return true;
  });

  const completionPercentage = Math.round(
    (completed.length / Math.max(1, resources.length)) * 100
  );

  return (
    <div id="resource-catalog-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Active Quick Filter Notification Banner */}
      {searchQuery && (
        <div className="mb-4 flex items-center justify-between p-3.5 sm:p-4 bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white rounded-3xl shadow-md shadow-pink-200 animate-in fade-in duration-200">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-black">
            <Sparkles className="w-4 h-4 text-amber-200 fill-amber-200" />
            <span>{isEs ? 'Atajo Rápido Activo:' : 'Atalho Rápido Ativo:'}</span>
            <span className="bg-white text-pink-600 px-3 py-0.5 rounded-full text-xs font-black shadow-xs">
              {searchQuery}
            </span>
          </div>
          <button
            onClick={onClearSearch}
            className="text-xs font-black bg-white/20 hover:bg-white text-white hover:text-pink-600 px-3.5 py-1.5 rounded-2xl transition cursor-pointer flex items-center gap-1.5 active:scale-95"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{isEs ? 'Ver Todo' : 'Ver Tudo'}</span>
          </button>
        </div>
      )}

      {/* Active Favorites Filter Banner */}
      {showFavoritesOnly && (
        <div className="mb-4 flex items-center justify-between p-3.5 sm:p-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-3xl shadow-md shadow-pink-200 animate-in fade-in duration-200">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-black">
            <Heart className="w-4 h-4 text-white fill-white animate-pulse" />
            <span>{isEs ? 'Filtrando Tus Moldes Favoritos:' : 'Filtrando Seus Moldes Favoritos:'}</span>
            <span className="bg-white text-pink-700 px-3 py-0.5 rounded-full text-xs font-black shadow-xs">
              {favorites.length} {isEs ? 'guardados' : 'salvos'}
            </span>
          </div>
          <button
            onClick={onToggleFavoritesOnly}
            className="text-xs font-black bg-white/20 hover:bg-white text-white hover:text-pink-600 px-3.5 py-1.5 rounded-2xl transition cursor-pointer flex items-center gap-1.5 active:scale-95"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{isEs ? 'Mostrar Todo el Catálogo' : 'Mostrar Todo o Catálogo'}</span>
          </button>
        </div>
      )}

      {/* Section Title with Confetti & Crown */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Crown className="w-5 h-5 text-amber-500 fill-amber-300" />
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            {isEs ? 'Explora tus Plantillas & Bonos' : 'Explore seus Moldes & Bônus'}
          </h2>
        </div>
        <span className="text-xs font-bold text-pink-600 bg-pink-50 px-3 py-1 rounded-full border border-pink-200 shadow-2xs">
          ✨ {filteredResources.length} {isEs ? 'Recursos Listos' : 'Recursos Prontos'}
        </span>
      </div>

      {/* Category Navigation Bar (Smart Sliding Carousel with Interactive Cues) */}
      <div className="relative group">
        {/* Left Scroll Button & Fade Overlay */}
        {canScrollCatLeft && (
          <div className="absolute left-0 top-0 bottom-2.5 w-12 bg-gradient-to-r from-pink-50 via-pink-50/90 to-transparent z-10 flex items-center justify-start pointer-events-none">
            <button
              id="category-carousel-prev-btn"
              onClick={() => scrollCategories('left')}
              className="pointer-events-auto p-1.5 ml-0.5 rounded-full bg-white text-pink-700 shadow-md border-2 border-pink-200 hover:bg-pink-50 hover:scale-110 active:scale-95 transition-all cursor-pointer"
              title={isEs ? 'Ver anteriores' : 'Ver anteriores'}
            >
              <ChevronLeft className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        )}

        {/* Scrollable Category Row */}
        <div 
          ref={categoryScrollRef}
          className="flex items-center gap-2 overflow-x-auto pb-2.5 pt-1 scrollbar-none scroll-smooth snap-x touch-pan-x"
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  if (showFavoritesOnly) onToggleFavoritesOnly();
                }}
                className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer active:scale-95 shadow-2xs snap-start shrink-0 ${
                  isActive
                    ? 'bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white shadow-md shadow-pink-200 scale-105'
                    : 'bg-white text-slate-700 hover:bg-pink-50 hover:text-pink-600 border border-pink-100 hover:border-pink-300'
                }`}
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right Scroll Button & Fade Overlay */}
        {canScrollCatRight && (
          <div className="absolute right-0 top-0 bottom-2.5 w-14 bg-gradient-to-l from-pink-50 via-pink-50/90 to-transparent z-10 flex items-center justify-end pointer-events-none">
            <button
              id="category-carousel-next-btn"
              onClick={() => scrollCategories('right')}
              className="pointer-events-auto p-1.5 mr-0.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md shadow-pink-300/80 hover:scale-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center animate-pulse"
              title={isEs ? 'Ver más categorías' : 'Ver mais categorias'}
            >
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        )}
      </div>

      {/* Quick Occasion & Theme Filters Pill Row (Smart Sliding Carousel) */}
      <div className="mt-2 relative group">
        {/* Left Scroll Button */}
        {canScrollOccLeft && (
          <div className="absolute left-0 top-0 bottom-2 w-12 bg-gradient-to-r from-purple-50 via-purple-50/90 to-transparent z-10 flex items-center justify-start pointer-events-none">
            <button
              id="occasion-carousel-prev-btn"
              onClick={() => scrollOccasions('left')}
              className="pointer-events-auto p-1 ml-0.5 rounded-full bg-white text-purple-700 shadow-md border-2 border-purple-200 hover:bg-purple-50 hover:scale-110 active:scale-95 transition-all cursor-pointer"
              title={isEs ? 'Ver anteriores' : 'Ver anteriores'}
            >
              <ChevronLeft className="w-3.5 h-3.5 stroke-[3]" />
            </button>
          </div>
        )}

        {/* Scrollable Occasion Row */}
        <div 
          ref={occasionScrollRef}
          className="flex items-center gap-1.5 overflow-x-auto pb-2 pt-1 scrollbar-none scroll-smooth snap-x touch-pan-x"
        >
          <span className="text-[11px] font-black text-slate-500 uppercase tracking-wider flex items-center gap-1 shrink-0 mr-1 pl-1">
            <Tag className="w-3.5 h-3.5 text-pink-500" />
            <span>{isEs ? 'Ocasión:' : 'Ocasião:'}</span>
          </span>
          {occasions.map((occ) => {
            const isActive = selectedOccasion === occ.id;
            return (
              <button
                key={occ.id}
                onClick={() => setSelectedOccasion(occ.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer active:scale-95 shrink-0 snap-start ${
                  isActive
                    ? 'bg-purple-600 text-white shadow-xs font-black scale-102'
                    : 'bg-purple-50/70 text-purple-900 hover:bg-purple-100 border border-purple-200/70'
                }`}
              >
                {occ.label}
              </button>
            );
          })}
        </div>

        {/* Right Scroll Button */}
        {canScrollOccRight && (
          <div className="absolute right-0 top-0 bottom-2 w-14 bg-gradient-to-l from-purple-50 via-purple-50/90 to-transparent z-10 flex items-center justify-end pointer-events-none">
            <button
              id="occasion-carousel-next-btn"
              onClick={() => scrollOccasions('right')}
              className="pointer-events-auto p-1 mr-0.5 rounded-full bg-purple-600 text-white shadow-md shadow-purple-300/80 hover:scale-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center animate-pulse"
              title={isEs ? 'Ver más ocasiones' : 'Ver mais ocasiões'}
            >
              <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
            </button>
          </div>
        )}
      </div>

      {/* Sub-Filters and Progress Bar */}
      <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-3xl border-2 border-pink-100/80 shadow-sm">
        
        {/* Format chips */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-extrabold mr-1">
            <Filter className="w-3.5 h-3.5 text-pink-400" />
            <span>{isEs ? 'Formato:' : 'Formato:'}</span>
          </div>
          {formats.map((fmt) => (
            <button
              key={fmt.id}
              onClick={() => setSelectedFormat(fmt.id)}
              className={`px-3 py-1.5 text-xs rounded-xl font-bold transition cursor-pointer active:scale-95 ${
                selectedFormat === fmt.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-pink-50/50 text-slate-700 hover:bg-pink-100/70 border border-pink-100'
              }`}
            >
              {fmt.label}
            </button>
          ))}
        </div>

        {/* User Progress Stats */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-[11px] text-slate-500 font-medium">
              {isEs ? 'Progreso de tu Fiesta:' : 'Progresso da Festa:'}
            </p>
            <p className="text-xs font-black text-slate-800">
              {completed.length} {isEs ? 'de' : 'de'} {resources.length} {isEs ? 'listos' : 'prontos'} ({completionPercentage}%)
            </p>
          </div>
          <div className="w-20 bg-slate-100 h-3 rounded-full overflow-hidden border border-slate-200">
            <div 
              className="bg-gradient-to-r from-teal-400 to-emerald-500 h-full rounded-full transition-all duration-500" 
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>

      </div>

      {/* Showing Result Counter & Reset Button */}
      <div className="mt-4 flex items-center justify-between text-xs text-slate-500 px-1">
        <span>
          {isEs ? 'Mostrando' : 'Mostrando'} <strong className="text-pink-600 font-black">{filteredResources.length}</strong> {isEs ? 'recursos disponibles' : 'recursos disponíveis'}
          {showFavoritesOnly && ` • ${isEs ? 'Solo Favoritos ❤️' : 'Apenas Favoritos ❤️'}`}
        </span>
        {(searchQuery || selectedCategory !== 'all' || selectedFormat !== 'all' || selectedOccasion !== 'all' || showFavoritesOnly) && (
          <button
            onClick={() => {
              onClearSearch();
              setSelectedCategory('all');
              setSelectedFormat('all');
              setSelectedOccasion('all');
              if (showFavoritesOnly) onToggleFavoritesOnly();
            }}
            className="flex items-center gap-1 text-pink-600 hover:text-pink-700 font-bold cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{isEs ? 'Restablecer filtros' : 'Limpar filtros'}</span>
          </button>
        )}
      </div>

      {/* Grid of Resource Cards */}
      {filteredResources.length > 0 ? (
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredResources.map((item) => (
            <ResourceCard
              key={item.id}
              item={item}
              isFavorite={favorites.includes(item.id)}
              isCompleted={completed.includes(item.id)}
              onToggleFavorite={onToggleFavorite}
              onToggleCompleted={onToggleCompleted}
              language={language}
              isDemoMode={isDemoMode}
              onTriggerLockModal={onTriggerLockModal}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="mt-10 p-8 sm:p-12 bg-white rounded-3xl border-2 border-pink-100 text-center max-w-lg mx-auto shadow-sm animate-in fade-in duration-200">
          {showFavoritesOnly ? (
            <>
              <div className="w-16 h-16 bg-pink-50 text-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-4 border-2 border-pink-200 shadow-2xs">
                <Heart className="w-8 h-8 fill-pink-400 text-pink-500 animate-bounce" />
              </div>
              <h3 className="text-base sm:text-lg font-black text-slate-900">
                {isEs ? 'Aún no tienes moldes en Favoritos' : 'Você ainda não tem moldes em Favoritos'}
              </h3>
              <p className="text-xs text-slate-500 mt-2 max-w-sm mx-auto leading-relaxed">
                {isEs 
                  ? 'Para guardar tus plantillas preferidas, haz clic en el corazón ❤️ que aparece en la esquina superior de cualquier cajita, letra 3D o bono del catálogo.'
                  : 'Para salvar seus moldes preferidos, basta clicar no coração ❤️ que fica no canto superior de qualquer caixinha, letra 3D ou bônus do catálogo.'}
              </p>
              <button
                id="reset-favorites-empty-state-btn"
                onClick={onToggleFavoritesOnly}
                className="mt-5 px-6 py-2.5 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-2xl text-xs font-black transition shadow-md shadow-pink-200 cursor-pointer active:scale-95 flex items-center gap-2 mx-auto"
              >
                <Sparkles className="w-4 h-4" />
                <span>{isEs ? 'Explorar Catálogo Completo' : 'Explorar Catálogo Completo'}</span>
              </button>
            </>
          ) : (
            <>
              <div className="w-16 h-16 bg-pink-50 text-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-4 border border-pink-200">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-base font-black text-slate-900">
                {isEs ? 'No se encontraron plantillas' : 'Nenhum molde encontrado'}
              </h3>
              <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                {isEs 
                  ? 'Prueba con otra palabra como "cajitas", "toppers", "drive" o restablece los filtros.'
                  : 'Tente outra palavra como "caixinhas", "topos", "drive" ou limpe os filtros.'}
              </p>
              <button
                onClick={() => {
                  onClearSearch();
                  setSelectedCategory('all');
                  setSelectedFormat('all');
                  setSelectedOccasion('all');
                  if (showFavoritesOnly) onToggleFavoritesOnly();
                }}
                className="mt-5 px-6 py-2.5 bg-gradient-to-r from-pink-500 to-amber-500 hover:from-pink-600 hover:to-amber-600 text-white rounded-2xl text-xs font-black transition shadow-md shadow-pink-200 cursor-pointer active:scale-95"
              >
                {isEs ? 'Ver Todos los Recursos' : 'Ver Todos os Recursos'}
              </button>
            </>
          )}
        </div>
      )}

    </div>
  );
};
