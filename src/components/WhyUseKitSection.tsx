import React from 'react';
import { Heart } from 'lucide-react';

export const WhyUseKitSection: React.FC = () => {
  const cards = [
    {
      id: 1,
      src: 'https://res.cloudinary.com/xjvdljmn/image/upload/v1785869717/3_hyi7px.svg',
      alt: '+10.000 Diseños Premium',
    },
    {
      id: 2,
      src: 'https://res.cloudinary.com/xjvdljmn/image/upload/v1785869717/4_ceynlx.svg',
      alt: 'Kit Completo de Decoración',
    },
    {
      id: 3,
      src: 'https://res.cloudinary.com/xjvdljmn/image/upload/v1785869717/5_2f4ceab1-0354-42a3-ac0d-4e23aca5916b_ubothi.svg',
      alt: 'Fácil de usar en Canva',
    },
    {
      id: 4,
      src: 'https://res.cloudinary.com/xjvdljmn/image/upload/v1785869716/6_mq0dav.svg',
      alt: 'Oportunidad de Negocio',
    },
    {
      id: 5,
      src: 'https://res.cloudinary.com/xjvdljmn/image/upload/v1785869718/7_2884463b-f82d-4208-af30-eb8cb2ad4f9c_fbdtzg.svg',
      alt: 'Acceso Inmediato por Email',
    },
    {
      id: 6,
      src: 'https://res.cloudinary.com/xjvdljmn/image/upload/v1785869789/8_u2v2vi.svg',
      alt: '100% Personalizable',
    },
  ];

  return (
    <section className="py-14 px-4 bg-gradient-to-b from-[#fef7f9] via-white to-[#fef7f9]">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        {/* Pink Badge Header */}
        <div className="inline-flex items-center gap-2 bg-[#ff4097] text-white font-fredoka font-extrabold text-sm sm:text-base px-6 py-2.5 rounded-full shadow-lg shadow-pink-300/60 uppercase tracking-wide">
          <Heart className="w-4 h-4 fill-white" />
          <span>¿POR QUÉ USAR ESTE KIT DE FIESTA?</span>
        </div>

        {/* 6 Grid Cards (3 cols x 2 rows) using official SVGs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 text-center">
          {cards.map((card) => (
            <div
              key={card.id}
              className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1.5 transition-all duration-300 bg-white"
            >
              <img
                src={card.src}
                alt={card.alt}
                className="w-full h-auto object-contain block"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
