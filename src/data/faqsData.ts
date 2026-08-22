export interface FAQItem {
  id: string;
  q: string;
  a: string;
  category?: string;
}

export const FAQS_ES: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Producto & Contenido',
    q: '¿Qué es y qué incluye exactamente el Pack Fiesta Lista?',
    a: 'Es el mega kit digital más completo de papelería creativa y decoración de fiestas en español. Incluye más de 10.000 plantillas editables en Canva (cajitas milk, pirámides, conos, bolsas sorpresa, banderines, invitaciones, cake toppers y recuerdos), más de 15.000 elementos PNG/vectores, 10 Mega Bonos VIP de regalo (como el Catálogo de Clientes, Guías de Papeles e Impresión) y acceso exclusivo a nuestras 5 Apps con Inteligencia Artificial y Calculadoras para automatizar tus textos y costos.',
  },
  {
    id: 'faq-2',
    category: 'Acceso & Entrega',
    q: '¿Cómo se recibe y descarga el material? ¿Caduca el acceso?',
    a: '¡El acceso es INMEDIATO y DE POR VIDA! En cuanto realizas tu pago seguro, el sistema envía automáticamente a tu correo electrónico un enlace directo a tu Portal Exclusivo de Miembros. No necesitas descargar gigabytes pesados de golpe: puedes abrir y editar las plantillas en la nube en Canva cuando las necesites, desde cualquier lugar y tantas veces como quieras.',
  },
  {
    id: 'faq-3',
    category: 'Temáticas & Diseños',
    q: '¿Qué temáticas, personajes y motivos están disponibles?',
    a: 'Encontrarás todos los personajes infantiles en tendencia (Disney, Pixar, Nickelodeon, superhéroes, anime, videojuegos), temáticas clásicas (princesas, dinosaurios, safari, granjita, circo, sirenas), motivos para cumpleaños de todas las edades, baby showers, revelaciones de género, bautizos, primeras comuniones, fiestas de 15 años y eventos temáticos de temporada. ¡Hay opciones listas para cualquier fiesta!',
  },
  {
    id: 'faq-4',
    category: 'Facilidad de Uso',
    q: '¿Necesito tener experiencia previa en diseño gráfico?',
    a: '¡Para nada! Las plantillas ya vienen con las medidas, marcas de doblez y cortes exactos prediseñados. Solo tienes que hacer clic para cambiar el nombre, la edad o los colores. Además, incluimos 10 video tutoriales paso a paso súper didácticos donde te mostramos exactamente cómo editar, imprimir, recortar y armar tus cajitas desde cero en minutos.',
  },
  {
    id: 'faq-5',
    category: 'Requisitos Técnicos',
    q: '¿Se necesita pagar la suscripción de Canva Pro?',
    a: '¡NO! El 100% de las plantillas y elementos han sido diseñados y probados para funcionar a la perfección con la versión GRATUITA de Canva. No tienes que gastar ni un solo centavo adicional en suscripciones mensuales de diseño.',
  },
  {
    id: 'faq-6',
    category: 'Dispositivos',
    q: '¿Puedo editar desde mi teléfono celular o necesito una computadora?',
    a: 'Puedes usar tanto tu celular o tablet (a través de la app gratuita de Canva en iOS o Android) como tu computadora o laptop (desde cualquier navegador web). Trabajas como te resulte más cómodo y rápido.',
  },
  {
    id: 'faq-7',
    category: 'Impresión & Materiales',
    q: '¿Necesito tener una impresora especial o materiales costosos?',
    a: 'No requieres maquinaria industrial. Puedes imprimir con una impresora doméstica común a color (inyección de tinta o láser) o llevar los archivos PDF a cualquier imprenta, papelería o centro de copiado de tu barrio. Dentro del kit te incluimos una Guía Maestra de Papeles recomendados (fotográfico, opalina, gramajes ideales) y la Calculadora Inteligente de Impresión.',
  },
  {
    id: 'faq-8',
    category: 'Herramientas IA',
    q: '¿Cómo funcionan las 5 Apps con Inteligencia Artificial y Calculadoras?',
    a: 'Son herramientas interactivas exclusivas que funcionan con 1 solo clic: el Generador de Textos de Invitación IA redacta frases mágicas y divertidas al instante; la Calculadora de Precios y Ganancias te dice exactamente cuánto cobrar a tus clientes para tener margen de lucro real; el Asistente Creador de Temas IA te sugiere paletas de colores y decoraciones a juego; y el Generador de Recuerdos & Toppers crea ideas originales personalizadas.',
  },
  {
    id: 'faq-9',
    category: 'Emprendimiento',
    q: '¿Puedo usar los diseños para vender a mis propios clientes? (Uso Comercial)',
    a: '¡SÍ, TOTALMENTE! El Pack Fiesta Lista incluye LICENCIA COMERCIAL para productos físicos terminados. Puedes personalizar las cajitas, recuerdos e invitaciones para tus clientas y cobrar por tu trabajo, generando ingresos extra desde casa sin pagar regalías.',
  },
  {
    id: 'faq-10',
    category: 'Pagos & Moneda',
    q: '¿Cuáles son los medios de pago disponibles y en qué moneda se cobra?',
    a: 'Procesamos los pagos mediante pasarelas 100% seguras y encriptadas (Hotmart / Stripe). Puedes pagar con Tarjetas de Crédito, Débito, PayPal y, según tu país, métodos locales en efectivo (como OXXO en México, Baloto/Efecty en Colombia, Sencillito en Chile, PagoEfectivo en Perú, Pix en Brasil, etc.). El sistema convertirá automáticamente el valor a tu moneda local al momento del checkout.',
  },
  {
    id: 'faq-11',
    category: 'Garantía',
    q: '¿Qué garantía tengo si el producto no cumple mis expectativas?',
    a: 'Cuentas con nuestra Garantía Incondicional de Satisfacción de 7 Días. Si dentro de los primeros 7 días sientes que el Pack Fiesta Lista no es lo que esperabas, simplemente nos envías un correo y te devolvemos el 100% de tu dinero sin preguntas ni complicaciones. El riesgo es 100% nuestro.',
  },
];

export const FAQS_PT: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Produto & Conteúdo',
    q: 'O que é e o que inclui exatamente o Pack Fiesta Lista?',
    a: 'É o maior kit digital de papelaria personalizada e decoração para festas. Inclui mais de 10.000 moldes editáveis no Canva (caixas milk, pirâmides, cones, sacolinhas, bandeirolas, convites e topos de bolo), mais de 15.000 elementos PNG/vetores, 10 Super Bônus VIP de presente e 5 Aplicativos com Inteligência Artificial e Calculadoras de Preço e Impressão.',
  },
  {
    id: 'faq-2',
    category: 'Acesso & Entrega',
    q: 'Como recebo o material? O acesso expira?',
    a: 'O acesso é IMEDIATO e VITALÍCIO! Assim que o seu pagamento for confirmado, você receberá no seu e-mail o link exclusivo do portal de membros. Você pode acessar e editar diretamente na nuvem no Canva quantas vezes quiser, para sempre.',
  },
  {
    id: 'faq-3',
    category: 'Temas & Modelos',
    q: 'Quais temas e personagens estão disponíveis?',
    a: 'Todos os personagens infantis do momento (Disney, super-heróis, games), temas clássicos (safari, fazendinha, princesas, circo, astronauta), aniversários de todas as idades, chá de bebê, mesversários, batizados e eventos sazonais.',
  },
  {
    id: 'faq-4',
    category: 'Facilidade',
    q: 'Preciso ter experiência prévia em design gráfico?',
    a: 'Não! Os moldes já estão com todas as medidas, marcas de corte e vinco prontas. Você só precisa trocar o nome e a idade com 1 clique. Além disso, você tem 10 videoaulas práticas ensinando tudo do zero ao acabamento.',
  },
  {
    id: 'faq-5',
    category: 'Requisitos',
    q: 'Preciso pagar a assinatura do Canva Pro?',
    a: 'NÃO! 100% dos arquivos foram feitos e testados para funcionar na conta GRATUITA do Canva. Você não precisa pagar mensalidades de nenhum programa.',
  },
  {
    id: 'faq-6',
    category: 'Dispositivos',
    q: 'Posso editar pelo celular ou preciso de computador?',
    a: 'Funciona tanto no celular ou tablet (pelo aplicativo grátis do Canva) quanto no computador/notebook pelo navegador. Escolha o que for mais prático para você.',
  },
  {
    id: 'faq-7',
    category: 'Impressão',
    q: 'Preciso de impressora profissional ou materiais caros?',
    a: 'Não! Você pode imprimir na sua impressora caseira comum a jato de tinta ou em qualquer gráfica rápida/papelaria próxima. O kit inclui o Guia de Papéis recomendados e a Calculadora de Folhas.',
  },
  {
    id: 'faq-8',
    category: 'Ferramentas IA',
    q: 'Como funcionam os 5 Aplicativos com Inteligência Artificial?',
    a: 'São geradores interativos: o Gerador de Textos de Convite cria frases automáticas e personalizadas, a Calculadora de Preço calcula seu lucro exato por encomenda, o Assistente de Temas gera paletas de cores harmônicas e o Gerador de Lembrancinhas dá ideias criativas instantâneas.',
  },
  {
    id: 'faq-9',
    category: 'Empreendedorismo',
    q: 'Posso vender as peças impressas para minhas clientes? (Uso Comercial)',
    a: 'SIM! O kit inclui Licença Comercial liberada para produtos físicos impressos. Você pode montar, produzir e vender as lembrancinhas personalizadas ficando com 100% dos lucros.',
  },
  {
    id: 'faq-10',
    category: 'Pagamento',
    q: 'Quais são as formas de pagamento disponíveis?',
    a: 'Aceitamos Cartão de Crédito (com parcelamento), PIX com aprovação imediata e Boleto Bancário através de ambiente 100% seguro e criptografado.',
  },
  {
    id: 'faq-11',
    category: 'Garantia',
    q: 'Qual é a garantia caso eu não goste?',
    a: 'Você tem Garantia Incondicional de 7 Dias. Se por qualquer motivo você não ficar 100% satisfeita, devolvemos todo o seu dinheiro sem perguntas.',
  },
];
