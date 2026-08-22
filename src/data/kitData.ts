// Dados oficiais de produtos, bônus, depoimentos e moedas da página original
import { CurrencyConfig } from './pricingConfig';

export const heroMockupTop = 'https://res.cloudinary.com/xjvdljmn/image/upload/v1787270264/pack_fiesta_lista_mega_mockup_1787000380614_d3yhtw.jpg';

export interface CurrencyItem {
  code: string;
  name: string;
  symbol: string;
  rate: number;
  flag?: string;
  payMethods?: string;
}

export const CURRENCIES: CurrencyItem[] = [
  { code: 'USD', name: 'Dólares (USD)', symbol: '$', rate: 1, flag: '🇺🇸', payMethods: 'Tarjeta de Crédito, Débito, PayPal' },
  { code: 'MXN', name: 'Pesos Mexicanos (MXN)', symbol: '$', rate: 19.5, flag: '🇲🇽', payMethods: 'OXXO en efectivo, Tarjetas, SPEI, Mercado Pago' },
  { code: 'COP', name: 'Pesos Colombianos (COP)', symbol: '$', rate: 4330, flag: '🇨🇴', payMethods: 'PSE, Bancolombia, Nequi, Daviplata, Efecty' },
  { code: 'PEN', name: 'Soles Peruanos (PEN)', symbol: 'S/', rate: 3.9, flag: '🇵🇪', payMethods: 'Yape, Plin, PagoEfectivo (bodegas/agentes), Tarjetas' },
  { code: 'CLP', name: 'Pesos Chilenos (CLP)', symbol: '$', rate: 1010, flag: '🇨🇱', payMethods: 'Webpay Plus, Redcompra, Servipag, Mach, Tarjetas' },
  { code: 'ARS', name: 'Pesos Argentinos (ARS)', symbol: '$', rate: 1150, flag: '🇦🇷', payMethods: 'Mercado Pago, Rapipago, Pago Fácil, Tarjetas' },
  { code: 'BRL', name: 'Reais Brasileiros (BRL)', symbol: 'R$', rate: 5.5, flag: '🇧🇷', payMethods: 'PIX (Acesso Imediato ⚡), Cartão de Crédito, Boleto' },
  { code: 'EUR', name: 'Euros (EUR)', symbol: '€', rate: 0.94, flag: '🇪🇺', payMethods: 'Tarjeta Visa/Mastercard, PayPal, Klarna' },
];

export interface BonusItem {
  id: string;
  tag: string;
  title: string;
  image: string;
  originalPrice: string;
}

export const BONUSES: BonusItem[] = [
  {
    id: 'b1',
    tag: 'BONO #1',
    title: '+900 Moldes de Cajitas para Dulces y Regalos',
    image: 'https://res.cloudinary.com/xjvdljmn/image/upload/v1787277224/bono_1_cajas_1786493911759_gkotit.jpg',
    originalPrice: 'US$ 27.00',
  },
  {
    id: 'b2',
    tag: 'BONO #2',
    title: '240 Libritos de Colorear Temáticos para Niños',
    image: 'https://res.cloudinary.com/xjvdljmn/image/upload/v1787277225/bono_2_libritos_1786493933893_uvjbqp.jpg',
    originalPrice: 'US$ 15.00',
  },
  {
    id: 'b3',
    tag: 'BONO #3',
    title: 'Moldes de Cajitas Candy Bar Listas para Armar',
    image: 'https://res.cloudinary.com/xjvdljmn/image/upload/v1787277226/bono3_caja_candy_1786979993606_dclc3i.jpg',
    originalPrice: 'US$ 19.00',
  },
  {
    id: 'b4',
    tag: 'BONO #4',
    title: 'Souvenirs y Recuerdos de Fiesta "Celebra con Nosotros"',
    image: 'https://res.cloudinary.com/xjvdljmn/image/upload/v1787277225/bono_4_recuerdos_1786494626784_ebeez3.jpg',
    originalPrice: 'US$ 14.00',
  },
  {
    id: 'b5',
    tag: 'BONO #5',
    title: '+1.200 Cake Toppers 3D Imprimibles y Editables',
    image: 'https://res.cloudinary.com/xjvdljmn/image/upload/v1787277226/bono5_toppers_mockup_1786993733128_jajdyr.jpg',
    originalPrice: 'US$ 19.00',
  },
  {
    id: 'b6',
    tag: 'BONO #6',
    title: '+300 Marca Páginas Imprimibles y Temáticos',
    image: 'https://res.cloudinary.com/xjvdljmn/image/upload/v1787277225/bono_6_marcapaginas_1786494639954_xpjksn.jpg',
    originalPrice: 'US$ 9.00',
  },
  {
    id: 'b7',
    tag: 'BONO #7',
    title: '+1.000 Diseños para Sublimación de Tazas y Remeras',
    image: 'https://res.cloudinary.com/xjvdljmn/image/upload/v1787277226/bono_7_sublimacion_1786494021102_lzk2r5.jpg',
    originalPrice: 'US$ 22.00',
  },
  {
    id: 'b8',
    tag: 'BONO #8',
    title: '+300 Invitaciones Digitales e Interactivas',
    image: 'https://res.cloudinary.com/xjvdljmn/image/upload/v1787277226/bono_8_invitaciones_1786494033397_sdhbs2.jpg',
    originalPrice: 'US$ 16.00',
  },
  {
    id: 'b9',
    tag: 'BONO #9',
    title: 'Guía Paso a Paso para Emprender desde Casa',
    image: 'https://res.cloudinary.com/xjvdljmn/image/upload/v1787277225/bono_9_guia_1786494046525_grneq3.jpg',
    originalPrice: 'US$ 25.00',
  },
  {
    id: 'b10',
    tag: 'BONO #10',
    title: '+1.500 Etiquetas Escolares y Multiuso Editables',
    image: 'https://res.cloudinary.com/xjvdljmn/image/upload/v1787277226/bono_10_etiquetas_1786494058979_v4tla8.jpg',
    originalPrice: 'US$ 17.00',
  },
];

export const CATEGORY_TAGS = [
  'KITS COMPLETOS',
  'INVITACIONES CANVA',
  'CAJITAS DULCERAS',
  'TOPPERS DE TORTA',
  'BANDERINES',
  'LETRAS 3D',
  'CHIP BAGS',
  'ETIQUETAS ESCOLARES',
  'LIBROS DE COLOREAR',
  'CENTROS DE MESA'
];

export const CLIENT_REVIEWS_IMAGES = [
  {
    id: 'r1',
    author: 'Mariana S. (México)',
    title: 'Testimonio de clienta real #1',
    image: 'https://res.cloudinary.com/xjvdljmn/image/upload/v1787278851/cliente_testimonio_1_1786496025709_c6kigt.jpg',
  },
  {
    id: 'r2',
    author: 'Camila R. (Colombia)',
    title: 'Testimonio de clienta real #2',
    image: 'https://res.cloudinary.com/xjvdljmn/image/upload/v1787278851/cliente_testimonio_2_1786496042784_btiwar.jpg',
  },
  {
    id: 'r3',
    author: 'Luciana F. (Perú)',
    title: 'Testimonio de clienta real #3',
    image: 'https://res.cloudinary.com/xjvdljmn/image/upload/v1787278851/cliente_testimonio_3_1786496054201_a9n6av.jpg',
  },
];

export const FAQS = [
  {
    id: 'faq-1',
    question: '¿Necesito pagar Canva Pro para usar las plantillas?',
    answer: '¡No! Todas las plantillas están diseñadas para funcionar 100% con la versión gratuita de Canva. No necesitas pagar ninguna suscripción adicional.',
  },
  {
    id: 'faq-2',
    question: '¿Cómo recibo el acceso al producto?',
    answer: 'El acceso es inmediato y automático. Una vez confirmado tu pago, recibirás un correo electrónico con tus datos de acceso al Portal VIP para descargar o editar todo en 1 clic.',
  },
  {
    id: 'faq-3',
    question: '¿Puedo editar desde mi celular o necesito una computadora?',
    answer: 'Puedes editar tanto desde tu celular con la app gratuita de Canva como desde cualquier computadora, tablet o laptop.',
  },
  {
    id: 'faq-4',
    question: '¿Qué papel necesito para imprimir?',
    answer: 'Dentro del portal recibirás la Guía Maestra de Papeles recomendada (Papel Fotográfico Glossy o Matte de 180g a 240g, Opalina, etc.) para que tus impresiones queden como de imprenta profesional.',
  },
  {
    id: 'faq-5',
    question: '¿Puedo pagar en mi moneda local (pesos, soles, etc.)?',
    answer: '¡Sí! Al hacer clic en el botón de compra, la plataforma oficial convertirá automáticamente el valor a tu moneda local y te ofrecerá los métodos de pago nativos de tu país (PIX, OXXO, PSE, Yape, tarjetas de débito/crédito, etc.).',
  },
  {
    id: 'faq-6',
    question: '¿Tiene garantía de satisfacción?',
    answer: 'Sí, cuentas con 7 días de Garantía Incondicional. Si por alguna razón sientes que no cumplió tus expectativas, puedes solicitar el 100% de tu dinero de vuelta.',
  },
];
