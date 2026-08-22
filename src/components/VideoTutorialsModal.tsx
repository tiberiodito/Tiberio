import React, { useState } from 'react';
import { 
  X, 
  Play, 
  CheckCircle2, 
  ExternalLink, 
  Film, 
  Sparkles,
  Clock,
  Youtube,
  Tv,
  PlayCircle
} from 'lucide-react';
import { VideoTutorial } from '../types';
import { VIDEO_TUTORIALS } from '../data/tutorials';

interface VideoTutorialsModalProps {
  isOpen: boolean;
  onClose: () => void;
  tutorials?: VideoTutorial[];
  language?: 'es' | 'pt';
}

export const VideoTutorialsModal: React.FC<VideoTutorialsModalProps> = ({
  isOpen,
  onClose,
  tutorials = VIDEO_TUTORIALS,
  language = 'es',
}) => {
  const safeTutorials = tutorials && tutorials.length > 0 ? tutorials : VIDEO_TUTORIALS;
  const [selectedVideo, setSelectedVideo] = useState<VideoTutorial>(safeTutorials[0]);
  const isEs = language === 'es';

  const getTitle = (v: VideoTutorial) => (isEs ? v.title : (v.titlePt || v.title));
  const getDescription = (v: VideoTutorial) => (isEs ? v.description : (v.descriptionPt || v.description));
  const getCategory = (v: VideoTutorial) => (isEs ? v.category : (v.categoryPt || v.category));
  const getKeyTakeaways = (v: VideoTutorial) => (isEs ? v.keyTakeaways : (v.keyTakeawaysPt || v.keyTakeaways));

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200">
      
      <div 
        id="video-tutorials-modal"
        className="bg-white rounded-3xl w-full max-w-5xl max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
      >
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-100 bg-slate-50/90 shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-xs shrink-0">
              <Youtube className="w-5 h-5 fill-white" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="text-sm sm:text-lg font-extrabold text-slate-800 truncate">
                  {isEs ? 'Video Tutoriales' : 'Centro de Vídeos Tutoriais'}
                </h2>
                <span className="text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700 shrink-0">
                  {tutorials.length} {isEs ? 'Aulas' : 'Aulas'}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 truncate">
                {isEs ? 'Aprende a editar en Canva e imprimir' : 'Aprenda a editar no Canva e imprimir'}
              </p>
            </div>
          </div>

          <button
            id="close-video-modal-btn"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition cursor-pointer shrink-0 ml-2"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Modal Body: Player + Playlist */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 min-h-0">
          
          {/* Main Video Player & Details (7 cols) */}
          <div className="lg:col-span-7 p-5 sm:p-6 border-b lg:border-b-0 lg:border-r border-slate-100 flex flex-col gap-4 overflow-y-auto">
            
            {/* Direct High-Visibility YouTube CTA Banner */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3.5 bg-gradient-to-r from-red-50 via-rose-50 to-amber-50 border border-red-200/80 rounded-2xl shadow-2xs">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Youtube className="w-5 h-5 fill-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-slate-900 leading-tight">
                    {isEs ? '¿Quieres ver en YouTube en Pantalla Completa?' : 'Prefere assistir no YouTube em Tela Cheia?'}
                  </p>
                  <p className="text-[11px] text-slate-500 truncate">
                    {isEs ? 'Abre el video directamente en la App oficial de YouTube' : 'Abra o vídeo direto no App oficial ou navegador'}
                  </p>
                </div>
              </div>
              <a
                id="direct-youtube-main-btn"
                href={selectedVideo.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-xs rounded-xl shadow-xs flex items-center justify-center gap-1.5 transition shrink-0 cursor-pointer"
              >
                <span>{isEs ? 'Abrir en YouTube' : 'Assistir no YouTube'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embedded YouTube Iframe */}
            <div className="w-full aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-md border border-slate-200 relative">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                title={getTitle(selectedVideo)}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Video Meta */}
            <div>
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                  {getCategory(selectedVideo)}
                </span>
                <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {selectedVideo.duration}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-2">
                {getTitle(selectedVideo)}
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {getDescription(selectedVideo)}
              </p>
            </div>

            {/* Key Takeaways */}
            <div className="bg-purple-50/60 border border-purple-100 rounded-2xl p-4 mt-1">
              <h4 className="text-xs font-bold text-purple-900 flex items-center gap-1.5 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                {isEs ? 'Puntos Clave que Aprenderás:' : 'O que Você Vai Aprender Nesta Aula:'}
              </h4>
              <ul className="space-y-1.5">
                {getKeyTakeaways(selectedVideo).map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-purple-950">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Playlist List (5 cols) */}
          <div className="lg:col-span-5 p-4 sm:p-5 bg-slate-50/70 flex flex-col gap-2.5 overflow-y-auto max-h-[500px] lg:max-h-none">
            
            <div className="flex items-center justify-between px-1 mb-1">
              <h4 className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                {isEs ? 'Lista de Aulas & Tutoriales' : 'Lista de Aulas & Tutoriais'}
              </h4>
              <span className="text-[10px] font-bold text-red-700 bg-red-100/80 px-2 py-0.5 rounded-full border border-red-200 flex items-center gap-1">
                <Youtube className="w-3 h-3 fill-red-600 text-red-600" />
                {isEs ? 'Botones Directos' : 'Botões Diretos'}
              </span>
            </div>

            {tutorials.map((vid, idx) => {
              const isSelected = selectedVideo.id === vid.id;
              return (
                <div
                  key={vid.id}
                  id={`tutorial-item-${idx}`}
                  onClick={() => setSelectedVideo(vid)}
                  className={`w-full p-3 rounded-2xl transition flex flex-col gap-2 cursor-pointer border ${
                    isSelected
                      ? 'bg-white border-2 border-purple-500 shadow-sm'
                      : 'bg-white/90 hover:bg-white border-slate-200/90 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                      isSelected ? 'bg-purple-600 text-white' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {isSelected ? <Play className="w-3.5 h-3.5 fill-white" /> : idx + 1}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className="text-[10px] font-bold px-2 py-0.2 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                          {getCategory(vid)}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium flex items-center gap-0.5">
                          <Clock className="w-3 h-3" />
                          {vid.duration}
                        </span>
                      </div>
                      <p className={`text-xs font-bold leading-tight ${isSelected ? 'text-purple-900' : 'text-slate-900'}`}>
                        {getTitle(vid)}
                      </p>
                      <p className="text-[11px] text-slate-500 line-clamp-1 mt-1">
                        {getDescription(vid)}
                      </p>
                    </div>
                  </div>

                  {/* Dedicated Direct YouTube Link Button on each item */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                    <span className="text-[10px] text-slate-400 font-medium">
                      {isSelected 
                        ? (isEs ? '▶ Reproduciendo en la pantalla' : '▶ Reproduzindo na tela') 
                        : (isEs ? 'Toca para previsualizar' : 'Toque para pré-visualizar')}
                    </span>
                    <a
                      id={`playlist-yt-btn-${idx}`}
                      href={vid.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-[11px] rounded-xl shadow-2xs transition group cursor-pointer"
                      title={isEs ? 'Abrir directamente en YouTube' : 'Abrir diretamente no YouTube'}
                    >
                      <Youtube className="w-3.5 h-3.5 fill-white group-hover:scale-110 transition-transform" />
                      <span>{isEs ? 'Ver en YouTube ↗' : 'Abrir no YouTube ↗'}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>
            {isEs ? '💡 Puedes volver a ver estos videos las veces que quieras en YouTube.' : '💡 Você pode rever todas as aulas quantas vezes quiser no YouTube.'}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold cursor-pointer"
          >
            {isEs ? 'Cerrar' : 'Fechar'}
          </button>
        </div>

      </div>

    </div>
  );
};
