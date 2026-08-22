export interface VipLinkItem {
  name: string;
  namePt?: string;
  url: string;
  type: 'drive' | 'canva';
  badge?: string;
}

export interface VipOrderBump {
  id: string;
  orderNumber: number;
  title: string;
  titlePt: string;
  subtitle: string;
  subtitlePt: string;
  description: string;
  descriptionPt: string;
  priceUsd: string;
  regularPriceUsd: string;
  icon: string;
  colorScheme: 'amber' | 'purple' | 'pink' | 'emerald' | 'indigo';
  links: VipLinkItem[];
}

export const VIP_SECRET_KEY = 'claravip100k';

export const VIP_ORDER_BUMPS: VipOrderBump[] = [
  {
    id: 'order-1-fondos',
    orderNumber: 1,
    title: '📁 ORDER 1: FONDOS TEMÁTICOS Y CLIPARTS HD (A - Z)',
    titlePt: '📁 ORDER 1: FUNDOS TEMÁTICOS E CLIPARTS HD (A - Z)',
    subtitle: 'Mega biblioteca alfabética de fondos para diseño de fiestas',
    subtitlePt: 'Mega biblioteca alfabética de fundos para design de festas',
    description: 'Encuentra las diferentes temáticas organizadas en orden alfabético en carpetas de Google Drive de alta velocidad. Descarga todo el material en tu computadora o celular para crear fondos únicos.',
    descriptionPt: 'Encontre diversas temáticas organizadas em ordem alfabética no Google Drive. Baixe o material no seu computador ou celular para criar fundos incríveis.',
    priceUsd: '3.90',
    regularPriceUsd: '14.90',
    icon: 'FolderKanban',
    colorScheme: 'indigo',
    links: [
      {
        name: '📂 Fondos y Cliparts (A - C)',
        namePt: '📂 Fundos e Cliparts (A - C)',
        url: 'https://drive.google.com/drive/folders/1XdZS8btdunvj89qYmVbftM6MarR9KLL5?usp=drive_link',
        type: 'drive',
        badge: 'Drive A-C'
      },
      {
        name: '📂 Fondos y Cliparts (D - J)',
        namePt: '📂 Fundos e Cliparts (D - J)',
        url: 'https://drive.google.com/drive/folders/1OIG3XTr3u_p-4ErAMhu4JwXECX-R23PF?usp=sharing',
        type: 'drive',
        badge: 'Drive D-J'
      },
      {
        name: '📂 Fondos y Cliparts (K - M)',
        namePt: '📂 Fundos e Cliparts (K - M)',
        url: 'https://drive.google.com/drive/folders/1aD5C2KExtmgH7ls-rZjlrsCVQpj4J7Fj?usp=sharing',
        type: 'drive',
        badge: 'Drive K-M'
      },
      {
        name: '📂 Fondos y Cliparts (N - Q)',
        namePt: '📂 Fundos e Cliparts (N - Q)',
        url: 'https://drive.google.com/drive/folders/1Me6wMhG9hPnq10-RRaUWlQCPRxpmL4RN?usp=drive_link',
        type: 'drive',
        badge: 'Drive N-Q'
      },
      {
        name: '📂 Fondos y Cliparts (R - Z)',
        namePt: '📂 Fundos e Cliparts (R - Z)',
        url: 'https://drive.google.com/drive/folders/1K7xRNue5qZoyLXlIHnrWHzBGLf6FHZdl?usp=drive_link',
        type: 'drive',
        badge: 'Drive R-Z'
      },
    ]
  },
  {
    id: 'order-2-invitaciones',
    orderNumber: 2,
    title: '💌 ORDER 2: +400 INVITACIONES EDITABLES EN CANVA',
    titlePt: '💌 ORDER 2: +400 CONVITES EDITÁVEIS NO CANVA',
    subtitle: 'Invitaciones interactivas, con video, princesas y temáticas listas',
    subtitlePt: 'Convites interativos, com vídeo, princesas e temáticos prontos',
    description: 'Colección de más de 400 modelos listos para abrir directamente en Canva con 1 clic. Incluye invitaciones interactivas con botones funcionales de WhatsApp y Google Maps, además de modelos animados en video.',
    descriptionPt: 'Coleção com mais de 400 modelos prontos para abrir direto no Canva. Inclui convites interativos com botões de WhatsApp e Google Maps, além de modelos em vídeo.',
    priceUsd: '3.90',
    regularPriceUsd: '19.90',
    icon: 'MailOpen',
    colorScheme: 'purple',
    links: [
      {
        name: '🎨 Invitaciones Pack 1',
        namePt: '🎨 Convites Pacote 1',
        url: 'https://canva.link/fd8e9ypeptj5700',
        type: 'canva',
        badge: 'Canva Pack 1'
      },
      {
        name: '🎨 Invitaciones Pack 2',
        namePt: '🎨 Convites Pacote 2',
        url: 'https://canva.link/r9aesnkknwslgm4',
        type: 'canva',
        badge: 'Canva Pack 2'
      },
      {
        name: '🎨 Invitaciones Pack 3',
        namePt: '🎨 Convites Pacote 3',
        url: 'https://canva.link/u1w10365nwtm866',
        type: 'canva',
        badge: 'Canva Pack 3'
      },
      {
        name: '🎨 Invitaciones Pack 4',
        namePt: '🎨 Convites Pacote 4',
        url: 'https://canva.link/nrzgxakkqdx97bj',
        type: 'canva',
        badge: 'Canva Pack 4'
      },
      {
        name: '👑 Invitaciones Princesas',
        namePt: '👑 Convites Princesas',
        url: 'https://canva.link/sa8e0gx3w6852e3',
        type: 'canva',
        badge: 'Princesas'
      },
      {
        name: '🎬 Invitaciones con Video',
        namePt: '🎬 Convites com Vídeo',
        url: 'https://canva.link/xnegnoqle9aebqy',
        type: 'canva',
        badge: 'Video Canva'
      },
      {
        name: '📲 Invitaciones Interactivas (WhatsApp & GPS)',
        namePt: '📲 Convites Interativos (WhatsApp & GPS)',
        url: 'https://canva.link/dmrxgf1hxly6z72',
        type: 'canva',
        badge: 'Interativo'
      },
    ]
  },
  {
    id: 'order-3-personajes',
    orderNumber: 3,
    title: '🔥 ORDER 3: PERSONAJES MÁS EN TENDENCIA PARA TU FIESTA',
    titlePt: '🔥 ORDER 3: PERSONAGENS EM ALTA PARA SUA FESTA',
    subtitle: 'Colección especial de alta demanda para fiestas infantiles',
    subtitlePt: 'Coleção especial de alta procura para festas infantis',
    description: 'Te dejamos con mucho cariño este pack especial con los personajes infantiles más buscados y de moda para fiestas infantiles en alta resolución y listos para recortar y personalizar.',
    descriptionPt: 'Pack especial com os personagens infantis mais buscados e em alta para festas em alta resolução, prontos para recortar e personalizar.',
    priceUsd: '3.90',
    regularPriceUsd: '14.90',
    icon: 'Sparkles',
    colorScheme: 'amber',
    links: [
      {
        name: '🌟 Descargar Personajes en Tendencia HD',
        namePt: '🌟 Baixar Personagens em Alta HD',
        url: 'https://drive.google.com/drive/folders/11aW48TdSA0ASDeXK1drze9X6WGHCEf4n?usp=drive_link',
        type: 'drive',
        badge: 'Drive VIP'
      }
    ]
  },
  {
    id: 'order-4-stickers',
    orderNumber: 4,
    title: '🎀 ORDER 4: STICKERS HERMOSOS PARA FIESTAS',
    titlePt: '🎀 ORDER 4: ADESIVOS LINDOS PARA FESTAS',
    subtitle: 'Colección completa de stickers y etiquetas decorativas',
    subtitlePt: 'Coleção completa de adesivos e etiquetas decorativas',
    description: 'Accede a todos los stickers y pegatinas lindísimas incluidas para decorar recuerdos, dulces, bolsas kraft, cilindros y mesas temáticas.',
    descriptionPt: 'Acesse todos os adesivos e etiquetas lindas para decorar lembrancinhas, doces, saquinhos kraft e mesas temáticas.',
    priceUsd: '3.90',
    regularPriceUsd: '14.90',
    icon: 'Heart',
    colorScheme: 'pink',
    links: [
      {
        name: '🎀 Descargar Colección de Stickers HD',
        namePt: '🎀 Baixar Coleção de Adesivos HD',
        url: 'https://drive.google.com/drive/folders/1WlGwBfHEAXOAUucgDLIO4JgYbflMkCMF?usp=drive_link',
        type: 'drive',
        badge: 'Drive VIP'
      }
    ]
  }
];

export const VIP_COMBO_INFO = {
  id: 'order-5-combo-vip',
  orderNumber: 5,
  title: '💎 MEGA COMBO VIP: 4 EXPANSIONES EN 1 SOLO PACK',
  titlePt: '💎 MEGA COMBO VIP: 4 EXPANSÕES EM 1 SÓ PACOTE',
  subtitle: 'Fondos + 400 Invitaciones + Personajes en Tendencia + Stickers',
  subtitlePt: 'Fundos + 400 Convites + Personagens em Alta + Adesivos',
  regularPriceUsd: '49.90',
  comboPriceUsd: '9.90',
  discountText: '80% OFF',
};
