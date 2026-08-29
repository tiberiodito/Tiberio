import React from 'react';
import { Sparkles, Camera, Check, Heart, ArrowRight } from 'lucide-react';
import { CATEGORY_TAGS } from '../data/kitData';
import { getCooudCheckoutUrl } from '../data/pricingConfig';

export interface ShowcaseCard {
  id: string;
  img: string;
  category: string;
  categoryIcon: 'heart' | 'sparkle';
  title: string;
  feature: string;
}

export const ROW_1_CARDS: ShowcaseCard[] = [
  {
    id: 'c1',
    img: 'https://res.cloudinary.com/xjvdljmn/image/upload/v1787271823/gallery_topper_glitter_1787010216316_vxkobn.jpg',
    category: 'Toppers',
    categoryIcon: 'heart',
    title: 'Topper Glitter "Boy or Girl"',
    feature: 'Alta Resolución',
  },
  {
    id: 'c2',
    img: 'https://res.cloudinary.com/xjvdljmn/image/upload/v1787271822/gallery_banderin_bluey_1787010225197_n6hy7l.jpg',
    category: 'Banderines',
    categoryIcon: 'heart',
    title: 'Banderín de Pared Personalizado',
    feature: '100% Editable',
  },
  {
    id: 'c3',
    img: 'https://res.cloudinary.com/xjvdljmn/image/upload/v1787271823/gallery_letras3d_shaker_1787010236018_t6xchc.jpg',
    category: 'Papelería 3D',
    categoryIcon: 'heart',
    title: 'Número 3D Shaker con Lentejuelas',
    feature: 'Efecto Shaker',
  },
  {
    id: 'c4',
    img: 'https://res.cloudinary.com/xjvdljmn/image/upload/v1787271823/gallery_maletita_van_1787010265371_rpjywp.jpg',
    category: 'Souvenirs',
    categoryIcon: 'heart',
    title: 'Maletitas Dulceras Vintage Pastel',
    feature: 'Armado Fácil',
  },
  {
    id: 'c5',
    img: 'https://res.cloudinary.com/xjvdljmn/image/upload/v1787271823/gallery_mesa_cenicienta_1787010344767_xgqvpn.jpg',
    category: 'Candy Bar',
    categoryIcon: 'heart',
    title: 'Kit Completo Mesa Cenicienta',
    feature: 'Mega Set',
  },
  {
    id: 'c6',
    img: 'https://res.cloudinary.com/xjvdljmn/image/upload/v1787271823/gallery_letras_pawpatrol_1787010334821_et26fo.jpg',
    category: 'Letras 3D',
    categoryIcon: 'heart',
    title: 'Letras 3D Temáticas Paw Patrol',
    feature: 'Con Relieve',
  },
];

export const ROW_2_CARDS: ShowcaseCard[] = [
  {
    id: 'c7',
    img: 'https://res.cloudinary.com/xjvdljmn/image/upload/v1787271822/gallery_cajita_kitty_1787010282416_moltti.jpg',
    category: 'Cajitas de Lujo',
    categoryIcon: 'sparkle',
    title: 'Cajita Almohadita Kitty Rosa',
    feature: 'Fácil de Armar',
  },
  {
    id: 'c8',
    img: 'https://res.cloudinary.com/xjvdljmn/image/upload/v1787271823/gallery_kit_bluey_boxes_1787010293441_db8na1.jpg',
    category: 'Kits Imprimibles',
    categoryIcon: 'sparkle',
    title: 'Kit Completo Bluey Boxes & Conos',
    feature: 'Plantillas Listas',
  },
  {
    id: 'c9',
    img: 'https://res.cloudinary.com/xjvdljmn/image/upload/v1787271824/gallery_tubetes_stitch_1787010314727_tqxwvz.jpg',
    category: 'Golosineros',
    categoryIcon: 'sparkle',
    title: 'Tubetes Golosineros Stitch & Monstruos',
    feature: 'Con Tags Incluidos',
  },
  {
    id: 'c10',
    img: 'https://res.cloudinary.com/xjvdljmn/image/upload/v1787271822/gallery_caja_caperucita_1787010325440_dfv4qx.jpg',
    category: 'Scrap Party',
    categoryIcon: 'sparkle',
    title: 'Cajas Milk Caperucita Roja Vintage',
    feature: 'Diseño Exclusivo',
  },
  {
    id: 'c11',
    img: 'https://res.cloudinary.com/xjvdljmn/image/upload/v1787271823/gallery_cajita_unicornio_1787010360519_lyc8g9.jpg',
    category: 'Cajitas Pirámide',
    categoryIcon: 'sparkle',
    title: 'Cajita Pirámide Unicornio Arcoíris',
    feature: 'Sin Pegamento Difícil',
  },
  {
    id: 'c12',
    img: 'https://res.cloudinary.com/xjvdljmn/image/upload/v1787271822/gallery_bluey_caja_1787010208174_ysv21f.jpg',
    category: 'Candy Box',
    categoryIcon: 'sparkle',
    title: 'Cajita Loncherita Bluey y Amigos',
    feature: '100% Personalizable',
  },
];

interface CardItemProps {
  card: ShowcaseCard;
}

const CardItem: React.FC<CardItemProps> = ({ card }) => {
  return (
    <div className="w-[280px] sm:w-[320px] shrink-0 bg-white rounded-3xl p-3 sm:p-4 shadow-md hover:shadow-2xl border border-pink-100/80 transition-all duration-300 transform hover:-translate-y-1.5 select-none">
      {/* Image container */}
      <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-pink-50 mb-3 border border-pink-100">
        <img
          src={card.img}
          alt={card.title}
          className="w-full h-full object-cover pointer-events-none"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Category Badge top-left */}
        <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs text-slate-800 text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-pink-100">
          {card.categoryIcon === 'heart' ? (
            <Heart className="w-3 h-3 text-pink-500 fill-pink-500" />
          ) : (
            <Sparkles className="w-3 h-3 text-amber-500 fill-amber-500" />
          )}
          <span>{card.category}</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="font-fredoka text-sm sm:text-base font-extrabold text-slate-900 leading-snug line-clamp-1 mb-2 text-left">
        {card.title}
      </h3>

      {/* Feature & Canva tag bottom row */}
      <div className="flex items-center justify-between pt-1 border-t border-slate-100">
        <div className="flex items-center gap-1 text-emerald-600 font-extrabold text-xs">
          <Check className="w-3.5 h-3.5 stroke-[3]" />
          <span>{card.feature}</span>
        </div>

        <span className="bg-pink-100 text-pink-600 font-fredoka font-bold text-[10px] sm:text-[11px] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
          Canva
        </span>
      </div>
    </div>
  );
};

interface CategoryMarqueeAndGalleryProps {
  onBuyClick?: () => void;
}

export const CategoryMarqueeAndGallery: React.FC<CategoryMarqueeAndGalleryProps> = ({ onBuyClick }) => {
  return (
    <section className="bg-gradient-to-b from-[#fff0f5] via-[#fef7f9] to-[#fff0f5] py-14 overflow-hidden relative">
      
      {/* 1. Category Tag Marquee Banner */}
      <div className="bg-[#ff5bb0] text-white py-3.5 overflow-hidden shadow-sm mb-10 border-y border-pink-300">
        <div className="flex animate-marquee-left whitespace-nowrap gap-6 font-fredoka text-sm sm:text-base font-extrabold uppercase tracking-wider">
          {[...CATEGORY_TAGS, ...CATEGORY_TAGS, ...CATEGORY_TAGS].map((tag, idx) => (
            <span key={idx} className="flex items-center gap-3">
              <span>{tag}</span>
              <Sparkles className="w-4 h-4 text-yellow-300" />
            </span>
          ))}
        </div>
      </div>

      {/* 2. Header Section */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-8 space-y-3">
        <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 font-extrabold text-xs px-4 py-1.5 rounded-full uppercase border border-pink-200 shadow-xs">
          <Camera className="w-4 h-4 text-pink-600" />
          <span>GALERÍA VISUAL DE RESULTADOS REALES</span>
        </div>

        <h2 className="font-fredoka text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 uppercase tracking-tight">
          MIRA TODO LO QUE <span className="text-[#ff40a1]">PODRÁS CREAR</span>
        </h2>

        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
          Desde invitaciones y banderines hasta mesas de dulces completas: fotos de artículos y decoraciones listas para imprimir hoy mismo.
        </p>

        {/* User requested highlight phrase */}
        <p className="text-xs sm:text-sm font-extrabold text-pink-600 flex items-center justify-center gap-1.5 pt-1">
          <span>👇</span>
          <span>Pasa el cursor o mantén presionado en móvil para pausar y ver los detalles</span>
        </p>
      </div>

      {/* 3. Double Infinite Carousel Tracks */}
      <div className="space-y-6 w-full overflow-hidden py-2">
        
        {/* Row 1: Moves Left */}
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee-left pause-on-hover flex gap-5">
            {[...ROW_1_CARDS, ...ROW_1_CARDS, ...ROW_1_CARDS, ...ROW_1_CARDS].map((card, idx) => (
              <CardItem key={`r1-${card.id}-${idx}`} card={card} />
            ))}
          </div>
        </div>

        {/* Row 2: Moves Right */}
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee-right pause-on-hover flex gap-5">
            {[...ROW_2_CARDS, ...ROW_2_CARDS, ...ROW_2_CARDS, ...ROW_2_CARDS].map((card, idx) => (
              <CardItem key={`r2-${card.id}-${idx}`} card={card} />
            ))}
          </div>
        </div>

      </div>

      {/* 4. Bottom Callout Banner + BOTÃO 2 DE COMPRA */}
      <div className="max-w-3xl mx-auto px-4 mt-10 space-y-6 text-center">
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl border-2 border-pink-200 text-center relative overflow-hidden">
          <div className="inline-flex items-center gap-2 text-pink-600 font-fredoka text-base sm:text-lg font-extrabold uppercase mb-1">
            <Sparkles className="w-5 h-5 text-amber-400 fill-amber-400" />
            <span>¡TODO ESTO Y MÁS DE 1.500 PLANTILLAS LISTAS!</span>
            <Sparkles className="w-5 h-5 text-amber-400 fill-amber-400" />
          </div>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            Puedes imprimir en cualquier impresora común de casa o llevar el PDF a tu imprenta local. Las plantillas vienen con medidas exactas y líneas de corte.
          </p>
        </div>

        {/* 🎯 BOTÃO 2: Logo abaixo da Apresentação dos 1.500 Moldes */}
        <div className="pt-1">
          <a
            href={getCooudCheckoutUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (onBuyClick) {
                e.preventDefault();
                onBuyClick();
              }
            }}
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-4.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:to-rose-600 text-white font-fredoka font-black text-base sm:text-lg uppercase tracking-wider shadow-[0_8px_25px_rgba(244,63,94,0.45)] hover:shadow-[0_12px_30px_rgba(244,63,94,0.6)] transform hover:scale-[1.03] active:scale-95 transition-all duration-300 cursor-pointer border-2 border-white/40"
          >
            <span>¡QUIERO TODAS LAS +1.500 PLANTILLAS POR $6.90!</span>
            <ArrowRight className="w-5 h-5 animate-pulse" />
          </a>
          <p className="text-[11px] text-slate-500 font-medium mt-2">
            ⚡ Acceso inmediato a tu correo • Descarga ilimitada y de por vida
          </p>
        </div>
      </div>

    </section>
  );
};
