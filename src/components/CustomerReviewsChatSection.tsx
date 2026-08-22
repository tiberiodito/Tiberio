import React, { useState } from 'react';
import { Star, Heart, CheckCircle2, ZoomIn, X } from 'lucide-react';
import { CLIENT_REVIEWS_IMAGES } from '../data/kitData';

export const CustomerReviewsChatSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-[#fff5f8] via-[#fef7f9] to-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wide mb-3 border border-pink-200 shadow-xs">
            <CheckCircle2 className="w-4 h-4 text-pink-600" />
            <span>RESULTADOS Y CONVERSACIONES REALES</span>
          </div>

          <h2 className="font-fredoka text-2xl sm:text-4xl font-extrabold text-slate-900 uppercase tracking-tight mb-3">
            LO QUE DICEN NUESTROS CLIENTES
          </h2>
          
          <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-amber-400" />
            ))}
          </div>

          <p className="text-slate-600 text-sm sm:text-base font-medium max-w-2xl mx-auto">
            Capturas 100% reales de mensajes de clientas compartiendo sus creaciones y satisfacción con el Pack Fiesta Lista.
          </p>
        </div>

        {/* 3 Full Screenshots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto items-start">
          {CLIENT_REVIEWS_IMAGES.map((review, index) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-pink-200 flex flex-col transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
            >
              {/* Header card info */}
              <div className="p-4 bg-gradient-to-r from-pink-50 to-white border-b border-pink-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-slate-800 leading-tight">
                      {review.author}
                    </h4>
                    <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Clienta Verificada
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-pink-500 bg-pink-50 px-2 py-1 rounded-full border border-pink-100">
                  <Heart className="w-3.5 h-3.5 fill-pink-500" />
                  <span className="text-[10px] font-black text-pink-700">5.0 ★</span>
                </div>
              </div>

              {/* Full Image Container - No Cropping */}
              <div
                className="relative bg-slate-900/5 p-2 sm:p-3 cursor-pointer group-hover:bg-slate-900/10 transition-colors"
                onClick={() => setSelectedImage(review.image)}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-inner border border-slate-200/80 bg-white">
                  <img
                    src={review.image}
                    alt={review.title}
                    className="w-full h-auto max-h-[580px] object-contain block mx-auto group-hover:scale-[1.02] transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  {/* Zoom hint overlay on hover */}
                  <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/95 text-slate-900 px-3 py-1.5 rounded-full text-xs font-black shadow-lg flex items-center gap-1.5 border border-pink-200">
                      <ZoomIn className="w-3.5 h-3.5 text-pink-600" />
                      Ver captura completa
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-3.5 bg-white border-t border-pink-100 text-center">
                <p className="text-xs font-bold text-slate-600">
                  💬 Testimonio real recibido por WhatsApp / Redes
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Zoom Modal for full view */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[92vh] bg-white rounded-3xl p-3 sm:p-4 overflow-hidden shadow-2xl border-2 border-pink-300 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-slate-900 transition-colors shadow-md"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[85vh] overflow-y-auto rounded-2xl">
              <img
                src={selectedImage}
                alt="Captura de testimonio completo"
                className="w-full h-auto object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
