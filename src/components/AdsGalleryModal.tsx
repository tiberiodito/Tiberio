import React, { useState } from 'react';
import { Download, Copy, Check, Sparkles, X, Eye, ExternalLink, Instagram, Facebook, Target, Flame, Lightbulb, Image as ImageIcon, Sparkle, UserCheck, LayoutTemplate } from 'lucide-react';
import ad1 from '../assets/images/ad_creative_bundle_premium_1787432258750.jpg';
import ad2 from '../assets/images/ad_creative_emprende_1787429654281.jpg';
import ad3 from '../assets/images/ad_creative_canva_mobile_hd_1787432270466.jpg';

import post1 from '../assets/images/post_table_decor_hd_1787437799423.jpg';
import post2 from '../assets/images/post_craft_flatlay_hd_1787437817925.jpg';
import post3 from '../assets/images/post_clara_creator_hd_1787437832862.jpg';
import bannerFb from '../assets/images/banner_facebook_clara_maya_1787438244860.jpg';

interface AdsGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdsGalleryModal: React.FC<AdsGalleryModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'ads' | 'feed' | 'banner'>('ads');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const downloadImage = async (url: string, filename: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => window.URL.revokeObjectURL(blobUrl), 1000);
    } catch (e) {
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const creatives = [
    {
      id: 'criativo-1',
      title: 'Criativo 1: Mega Pack Completo (Alto Valor Percebido)',
      badge: '🔥 Mais Vendido / Conversão Alta',
      angle: 'Foco no volume de materiais (+1.500 modelos, caixas 3D, topos de bolo, 18 bônus)',
      image: ad1,
      filename: 'criativo-1-megapack-fiestalista.jpg',
      headline: '🔥 +1.500 Plantillas Canva para Fiestas Infantiles (81% OFF)',
      primaryText: `✂️ ¡Ahorra horas de diseño y crea fiestas mágicas en minutos! ✨\n\nConsigue el Mega Pack Fiesta Lista con más de 1.500 plantillas 100% editables en Canva (versión gratuita) + Moldes de Cajitas 3D, Topos de Torta, Dulceros y 18 Bonos Exclusivos.\n\n📲 ¡Descarga inmediata y acceso de por vida sin mensualidades!`,
      cta: 'Más Información / Comprar',
      publico: 'Mulheres de 22 a 55 anos, Mães com filhos pequenos (0-10 anos), Festas infantis, Artesanato, Canva.',
    },
    {
      id: 'criativo-2',
      title: 'Criativo 2: Empreendedorismo & Renda Extra em Casa',
      badge: '💰 Ângulo Empreenda & Fature',
      angle: 'Conecta com mulheres que querem começar um ateliê de festas do zero',
      image: ad2,
      filename: 'criativo-2-empreenda-fiestalista.jpg',
      headline: '✨ Emprende con Papelería Creativa desde Casa',
      primaryText: `💰 ¿Quieres iniciar tu propio negocio de fiestas infantiles desde casa sin experiencia previa?\n\nCon el Pack Fiesta Lista no necesitas programas difíciles ni diseñar desde cero. Solo abres Canva, cambias el nombre, imprimes y ¡listo para vender!\n\nIncluye calculadora de costos, videos paso a paso y moldes listos para armar. 🚀`,
      cta: 'Ver Más / Empezar Ahora',
      publico: 'Trabalho em casa, Renda extra, Mulheres empreendedoras, Silhouette, Papelaria personalizada, Scrapbook.',
    },
    {
      id: 'criativo-3',
      title: 'Criativo 3: Edição Rápida no Celular (Simplicidade Canva)',
      badge: '⚡ Quebra de Objeção / Fácil de Usar',
      angle: 'Mostra que não precisa de computador nem programas difíceis',
      image: ad3,
      filename: 'criativo-3-facil-canva-fiestalista.jpg',
      headline: '📲 Edita en 3 Minutos desde tu Celular | Canva',
      primaryText: `📱 ¡Edita todo directamente desde tu celular o computadora con Canva Gratis!\n\nPersonaliza nombres, colores y temas infantiles con solo 2 clics. Ideal para mamás que quieren hacer la fiesta de sus hijos o profesionales de eventos que buscan agilidad.\n\n⏳ ¡Oferta especial de lanzamiento por tiempo limitado!`,
      cta: 'Obtener Oferta',
      publico: 'Interesses em Canva, Design gráfico para iniciantes, Lembrancinhas personalizadas, Aniversário infantil.',
    },
  ];

  const feedPosts = [
    {
      id: 'post-1',
      title: 'Post 1: Mesa de Doces & Papelaria em Ação',
      badge: '📸 Dica & Inspiração',
      objective: 'Gerar desejo e mostrar como fica o resultado final de uma festa feita com os moldes.',
      image: post1,
      filename: 'post-1-mesa-fiesta-infantil.jpg',
      copy: `✨ ¡La magia está en los detalles! 🎉🎂\n\n¿Sabías que no necesitas gastar una fortuna para tener una mesa de dulces de ensueño? Con la papelería personalizada en 3D puedes transformar cualquier cumpleaños en un recuerdo inolvidable.\n\n✂️ Cajitas Milk, pirámides, topos de torta y dulceros personalizados... ¡Todo hecho con amor y tijeras!\n\n💬 ¿Cuál es la temática favorita de tu pequeño este año? ¡Cuéntame en los comentarios! 👇💖\n\n#FiestasInfantiles #PapeleriaCreativa #DecoracionCumpleaños #MamáEmprendedora #MesaDeDulces #HechoConAmor`,
    },
    {
      id: 'post-2',
      title: 'Post 2: Cantinho da Criatividade (Bastidores / Flatlay)',
      badge: '✂️ Engajamento & Conexão',
      objective: 'Humanizar a página e conectar com quem ama trabalhos manuais e artesanato.',
      image: post2,
      filename: 'post-2-bastidores-artesana.jpg',
      copy: `☕✂️ Modo creativo activado ✨\n\nNo hay nada más gratificante que ver una hoja de papel transformarse en una cajita mágica para un cumpleaños especial. \n\nPara mí, crear papelería de fiestas no es solo un trabajo, es ponerle ilusión a cada celebración 🎀🎈\n\n💡 Un tip para hoy: ¡No tengas miedo de empezar con lo que tienes en casa! Unas tijeras, pegamento y muchas ganas son suficientes para crear magia.\n\n¿Quién más por aquí ama el mundo del craft y las manualidades? 🙋‍♀️💕\n\n#PapeleriaPersonalizada #ScrapFiesta #EmprenderDesdeCasa #ManualidadesFaciles #CanvaLover #FiestasMagicas`,
    },
    {
      id: 'post-3',
      title: 'Post 3: Apresentação & Propósito da Clara Maya',
      badge: '👋 Apresentação & Autoridade',
      objective: 'Dar um rosto e voz confiável à página, gerando confiança imediata em quem visita.',
      image: post3,
      filename: 'post-3-hola-soy-clara-maya.jpg',
      copy: `¡Hola a todas! 👋💖 Soy Clara Maya.\n\nBienvenidos a este espacio dedicado al maravilloso mundo de las fiestas infantiles y la papelería personalizada.\n\nMi misión aquí es simple: ayudarte a ahorrar tiempo, dinero y estrés, para que puedas crear celebraciones inolvidables o incluso emprender tu propio negocio de fiestas desde casa con herramientas sencillas como Canva ✨✂️\n\n🎉 Aquí encontrarás tips, ideas, inspiración y las mejores plantillas para que tus fiestas brillen.\n\n¡Gracias por estar aquí! Sígueme para no perderte ninguna idea mágica 🌸\n\n#FiestaLista #ClaraMaya #PapeleriaDeFiestas #EmprendedorasCreativas #DiseñoEnCanva #FiestasEnCasa`,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden my-auto border border-pink-100 flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 text-white p-5 sm:p-6 flex items-center justify-between shrink-0 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0 border border-white/30">
              <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight flex items-center gap-2">
                Central de Mídias & Criativos
              </h2>
              <p className="text-xs sm:text-sm text-pink-100 font-medium">
                Imagens em alta resolução + Cópias completas para Anúncios e Feed Orgânico
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-all hover:scale-105 shrink-0"
            title="Fechar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="bg-white border-b border-slate-200 px-4 sm:px-6 pt-3 flex flex-wrap gap-2 sm:gap-4 shrink-0">
          <button
            onClick={() => setActiveTab('ads')}
            className={`pb-3 px-3 sm:px-4 font-black text-xs sm:text-sm flex items-center gap-2 border-b-2 transition-all cursor-pointer ${
              activeTab === 'ads'
                ? 'border-pink-600 text-pink-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Flame className="w-4 h-4 text-pink-500" />
            <span>🔥 3 Criativos (Ads)</span>
          </button>
          <button
            onClick={() => setActiveTab('feed')}
            className={`pb-3 px-3 sm:px-4 font-black text-xs sm:text-sm flex items-center gap-2 border-b-2 transition-all cursor-pointer ${
              activeTab === 'feed'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <ImageIcon className="w-4 h-4 text-purple-500" />
            <span>📸 3 Posts do Feed</span>
          </button>
          <button
            onClick={() => setActiveTab('banner')}
            className={`pb-3 px-3 sm:px-4 font-black text-xs sm:text-sm flex items-center gap-2 border-b-2 transition-all cursor-pointer ${
              activeTab === 'banner'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <LayoutTemplate className="w-4 h-4 text-indigo-500" />
            <span>🖼️ Capa / Banner do Facebook</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-8 bg-slate-50">
          {activeTab === 'ads' && (
            <>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3 text-amber-900 text-xs sm:text-sm">
                <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Dica de Ouro para seus Anúncios:</strong> Baixe as 3 imagens e teste as 3 em um mesmo conjunto de anúncios no Facebook Ads. Deixe o algoritmo da Meta encontrar qual ângulo traz o menor custo por compra (CPA).
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8">
                {creatives.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6"
                  >
                    {/* Visual Image Preview */}
                    <div className="w-full md:w-5/12 flex flex-col items-center shrink-0">
                      <div className="relative group w-full aspect-square rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-3">
                          <button
                            onClick={() => setPreviewImage(item.image)}
                            className="px-3 py-2 bg-white text-slate-800 rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-lg hover:bg-slate-50 transition-colors cursor-pointer"
                          >
                            <Eye className="w-4 h-4 text-pink-600" />
                            Ver Imagem
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => downloadImage(item.image, item.filename)}
                        className="w-full mt-3.5 py-3 px-4 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-pink-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                      >
                        <Download className="w-4 h-4" /> Baixar Imagem HD (1:1)
                      </button>
                    </div>

                    {/* Details & Copy */}
                    <div className="w-full md:w-7/12 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span className="text-xs font-black px-2.5 py-1 rounded-full bg-pink-100 text-pink-700">
                            {item.badge}
                          </span>
                        </div>
                        <h3 className="text-lg font-black text-slate-900">{item.title}</h3>
                        <p className="text-xs text-slate-500 mt-1">{item.angle}</p>
                      </div>

                      {/* Headline to copy */}
                      <div className="bg-slate-50 rounded-xl p-3 border border-slate-200">
                        <div className="flex items-center justify-between text-xs font-bold text-slate-600 mb-1">
                          <span>Título do Anúncio (Headline):</span>
                          <button
                            onClick={() => handleCopy(item.headline, `${item.id}-head`)}
                            className="text-pink-600 hover:text-pink-800 flex items-center gap-1 font-bold cursor-pointer"
                          >
                            {copiedId === `${item.id}-head` ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-600" /> Copiado!
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" /> Copiar
                              </>
                            )}
                          </button>
                        </div>
                        <p className="text-xs font-semibold text-slate-800 font-mono bg-white p-2 rounded border border-slate-100">
                          {item.headline}
                        </p>
                      </div>

                      {/* Primary Text to copy */}
                      <div className="bg-slate-50 rounded-xl p-3 border border-slate-200">
                        <div className="flex items-center justify-between text-xs font-bold text-slate-600 mb-1">
                          <span>Texto Principal (Copy):</span>
                          <button
                            onClick={() => handleCopy(item.primaryText, `${item.id}-copy`)}
                            className="text-pink-600 hover:text-pink-800 flex items-center gap-1 font-bold cursor-pointer"
                          >
                            {copiedId === `${item.id}-copy` ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-600" /> Copiado!
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" /> Copiar Texto
                              </>
                            )}
                          </button>
                        </div>
                        <p className="text-xs text-slate-700 whitespace-pre-line bg-white p-2 rounded border border-slate-100 leading-relaxed font-sans max-h-32 overflow-y-auto">
                          {item.primaryText}
                        </p>
                      </div>

                      {/* Targeting suggestion */}
                      <div className="flex items-start gap-2 text-xs text-slate-500 bg-purple-50/50 p-2.5 rounded-xl border border-purple-100">
                        <Target className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-purple-900">Público recomendado no Meta:</strong> {item.publico}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'feed' && (
            <>
              <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 flex items-start gap-3 text-purple-900 text-xs sm:text-sm">
                <UserCheck className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Como usar no seu Feed do Facebook / Instagram:</strong> Poste essas 3 imagens no seu feed com as legendas sugeridas. Isso dá vida à página, gera autoridade e faz com que qualquer pessoa que clique no seu perfil veja um perfil ativo e acolhedor!
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8">
                {feedPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6"
                  >
                    {/* Visual Image Preview */}
                    <div className="w-full md:w-5/12 flex flex-col items-center shrink-0">
                      <div className="relative group w-full aspect-square rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-3">
                          <button
                            onClick={() => setPreviewImage(post.image)}
                            className="px-3 py-2 bg-white text-slate-800 rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-lg hover:bg-slate-50 transition-colors cursor-pointer"
                          >
                            <Eye className="w-4 h-4 text-purple-600" />
                            Ver Foto
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => downloadImage(post.image, post.filename)}
                        className="w-full mt-3.5 py-3 px-4 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                      >
                        <Download className="w-4 h-4" /> Baixar Foto HD (1:1)
                      </button>
                    </div>

                    {/* Post Copy */}
                    <div className="w-full md:w-7/12 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span className="text-xs font-black px-2.5 py-1 rounded-full bg-purple-100 text-purple-700">
                            {post.badge}
                          </span>
                        </div>
                        <h3 className="text-lg font-black text-slate-900">{post.title}</h3>
                        <p className="text-xs text-slate-500 mt-1">
                          <strong>Objetivo:</strong> {post.objective}
                        </p>
                      </div>

                      {/* Primary Text to copy */}
                      <div className="bg-slate-50 rounded-xl p-3 border border-slate-200">
                        <div className="flex items-center justify-between text-xs font-bold text-slate-600 mb-1">
                          <span>Legenda Pronta (Copiar e Colar):</span>
                          <button
                            onClick={() => handleCopy(post.copy, `${post.id}-copy`)}
                            className="text-purple-600 hover:text-purple-800 flex items-center gap-1 font-bold cursor-pointer"
                          >
                            {copiedId === `${post.id}-copy` ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-600" /> Copiado!
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" /> Copiar Legenda
                              </>
                            )}
                          </button>
                        </div>
                        <p className="text-xs text-slate-700 whitespace-pre-line bg-white p-3 rounded-lg border border-slate-100 leading-relaxed font-sans max-h-48 overflow-y-auto">
                          {post.copy}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'banner' && (
            <>
              <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-4 flex items-start gap-3 text-indigo-900 text-xs sm:text-sm">
                <LayoutTemplate className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Capa Oficial para a Página do Facebook:</strong> Imagem dimensionada no formato ideal de banner (16:9 widescreen) com estética limpa, tons pastéis e papelaria 3D de alta qualidade para deixar o topo da página da Clara Maya 100% profissional.
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-black px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-700">
                      🖼️ Capa Panorâmica (Facebook Cover)
                    </span>
                    <h3 className="text-lg font-black text-slate-900 mt-2">
                      Banner Oficial: Clara Maya | Papelería Creativa & Fiestas Infantiles
                    </h3>
                  </div>
                  <button
                    onClick={() => downloadImage(bannerFb, 'banner-facebook-clara-maya.jpg')}
                    className="py-2.5 px-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition hover:scale-105 cursor-pointer shrink-0"
                  >
                    <Download className="w-4 h-4" /> Baixar Capa HD (16:9)
                  </button>
                </div>

                {/* Banner Preview */}
                <div className="relative group w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner">
                  <img
                    src={bannerFb}
                    alt="Banner de Capa Facebook Clara Maya"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button
                      onClick={() => setPreviewImage(bannerFb)}
                      className="px-4 py-2.5 bg-white text-slate-800 rounded-xl font-bold text-xs flex items-center gap-2 shadow-lg hover:bg-slate-50 transition cursor-pointer"
                    >
                      <Eye className="w-4 h-4 text-indigo-600" /> Ver Imagem Completa
                    </button>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
                  <span>📐 <strong>Resolução:</strong> Alta Definição (16:9) adaptada perfeitamente para Desktop e Celular no Facebook.</span>
                  <span className="text-emerald-700 font-bold">✨ Pronto para aplicar na página</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-500 font-medium">
            Formato: 1080x1080px (Feed Instagram / Facebook / WhatsApp)
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
          >
            Fechar Janela
          </button>
        </div>
      </div>

      {/* Fullscreen Image Preview Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 z-60 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setPreviewImage(null)}
        >
          <div className="relative max-w-3xl w-full max-h-[90vh] flex flex-col items-center">
            <img
              src={previewImage}
              alt="Visualização Criativo"
              className="max-w-full max-h-[80vh] rounded-2xl shadow-2xl object-contain border border-white/20"
            />
            <button
              onClick={() => setPreviewImage(null)}
              className="mt-4 px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-full font-bold text-sm backdrop-blur-md"
            >
              Clique em qualquer lugar para fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
