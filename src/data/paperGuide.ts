import { PaperGuideItem } from '../types';

export interface ProjectSimulation {
  id: string;
  titleEs: string;
  titlePt: string;
  icon: string;
  category: string;
  recommendedPaperEs: string;
  recommendedPaperPt: string;
  grammage: string;
  avoidPaperEs: string;
  avoidPaperPt: string;
  printerSettings: {
    mediaTypeEs: string;
    mediaTypePt: string;
    qualityEs: string;
    qualityPt: string;
    scale: string;
    colorProfile: string;
  };
  proTipEs: string;
  proTipPt: string;
  glueTipEs: string;
  glueTipPt: string;
  finishBadge: string;
}

export interface TroubleshootingItem {
  id: string;
  questionEs: string;
  questionPt: string;
  icon: string;
  severity: 'high' | 'medium' | 'low';
  causeEs: string;
  causePt: string;
  solutionStepsEs: string[];
  solutionStepsPt: string[];
  quickTipEs: string;
  quickTipPt: string;
}

export const PROJECT_SIMULATIONS: ProjectSimulation[] = [
  {
    id: 'cajitas-milk',
    titleEs: 'Cajitas Dulceras (Milk, Pirámide, Sushi, Bala)',
    titlePt: 'Caixinhas Personalizadas (Milk, Pirâmide, Sushi, Bala)',
    icon: 'PackageOpen',
    category: 'Cajas & Recuerdos',
    recommendedPaperEs: 'Papel Fotográfico Glossy (Brillante) de 200g a 230g',
    recommendedPaperPt: 'Papel Fotográfico Glossy (Brilhante) de 200g a 230g',
    grammage: '200g - 230g',
    avoidPaperEs: 'Evita papel bond común (75g) o papeles menores a 180g (se doblan y deforman con el peso de los dulces).',
    avoidPaperPt: 'Evite papel sulfite comum (75g) ou papéis abaixo de 180g (amamassam e não aguentam o peso dos doces).',
    printerSettings: {
      mediaTypeEs: 'Papel Fotográfico Brillante / Epson Photo Glossy / Glossy Film',
      mediaTypePt: 'Papel Fotográfico Brilhante / Epson Photo Glossy / Glossy Film',
      qualityEs: 'Alta / Calidad Superior (desactivar modo borrador)',
      qualityPt: 'Alta / Qualidade Superior (desativar modo rascunho)',
      scale: '100% (Tamaño Real / Sin Ajustar a Página)',
      colorProfile: 'RGB Estándar / Vívido'
    },
    proTipEs: 'Para un acabado profesional, pasa la punta de un bolígrafo sin tinta con regla metálica sobre las líneas punteadas antes de doblar.',
    proTipPt: 'Para acabamento profissional, passe a ponta de uma caneta sem tinta com régua de metal sobre as linhas pontilhadas antes de dobrar.',
    glueTipEs: 'Usa cinta doble cara o silicona líquida fría. Evita goma escolar acuosa porque arruga el papel.',
    glueTipPt: 'Use fita dupla face ou cola de silicone líquido fria. Evite cola branca escolar líquida porque enruga o papel.',
    finishBadge: 'Brillo Premium'
  },
  {
    id: 'chip-bags',
    titleEs: 'Bolsas de Papitas / Chip Bags (Efecto Metalizado)',
    titlePt: 'Bolsinhas de Salgadinho / Chip Bags (Efeito Metalizado)',
    icon: 'Utensils',
    category: 'Golosinas & Snacks',
    recommendedPaperEs: 'Papel Fotográfico Glossy Fino de 115g a 135g',
    recommendedPaperPt: 'Papel Fotográfico Glossy Fino de 115g a 135g',
    grammage: '115g - 135g',
    avoidPaperEs: 'No uses papel pesado de 230g porque no se podrá plegar ni sellar con facilidad en los bordes ondulados.',
    avoidPaperPt: 'Não use papel grosso de 230g porque fica duro demais para selar as bordas onduladas.',
    printerSettings: {
      mediaTypeEs: 'Papel Fotográfico Brillante',
      mediaTypePt: 'Papel Fotográfico Brilhante',
      qualityEs: 'Alta / Foto',
      qualityPt: 'Alta / Foto',
      scale: '100% (Sin Bordes o Tamaño Real)',
      colorProfile: 'Color Vivo'
    },
    proTipEs: 'Usa una tijera de zigzag o rizador de papel en los extremos superior e inferior para lograr el aspecto idéntico a una bolsa de papas real.',
    proTipPt: 'Use tesoura de picote/zigzag ou carretilha nas bordas superior e inferior para criar o visual idêntico ao de pacote de salgadinho de fábrica.',
    glueTipEs: 'Sella los bordes con cinta bifaz fina extra fuerte o selladora térmica manual a baja temperatura.',
    glueTipPt: 'Sele as bordas com fita dupla face forte ou seladora térmica manual em temperatura baixa.',
    finishBadge: 'Sensación Real'
  },
  {
    id: 'cake-toppers-3d',
    titleEs: 'Cake Toppers 3D (Adornos de Pastel en Capas)',
    titlePt: 'Topos de Bolo 3D (Em Camadas com Relevo)',
    icon: 'Cake',
    category: 'Mesa Principal',
    recommendedPaperEs: 'Fotográfico Glossy 230g (personajes) + Cartulina Glitter/Kraft 220g (fondo)',
    recommendedPaperPt: 'Fotográfico Glossy 230g (personagens) + Cartolina Glitter/Lamicote 220g (fundo)',
    grammage: '220g - 250g',
    avoidPaperEs: 'Evita papeles finos que se doblen al clavarlos en el pastel con el palito de acrílico o madera.',
    avoidPaperPt: 'Evite papéis moles que envergam ao espetar no bolo com o canudo ou palito transparente.',
    printerSettings: {
      mediaTypeEs: 'Papel Fotográfico Ultra Glossy / Glossy Pesado',
      mediaTypePt: 'Papel Fotográfico Ultra Glossy / Glossy Pesado',
      qualityEs: 'Máxima Calidad (Modo Foto Premium)',
      qualityPt: 'Máxima Qualidade (Modo Foto Premium)',
      scale: '100% Tamaño Real',
      colorProfile: 'RGB Realzado'
    },
    proTipEs: 'Corta en capas independientes y usa fita espuma (cinta de realce 3D) entre el fondo y el personaje para dar sombra y volumen tridimensional.',
    proTipPt: 'Corte as peças em camadas separadas e use fita banana (fita de espuma 3D) entre o fundo e o personagem para criar relevo tridimensional.',
    glueTipEs: 'Pega los palitos con silicona caliente en barra para máxima sujeción.',
    glueTipPt: 'Fixe os canudos/palitos com cola quente em bastão para sustentação firme.',
    finishBadge: 'Efecto 3D Volumen'
  },
  {
    id: 'stickers-etiquetas',
    titleEs: 'Etiquetas Escolares & Candy Bar (Stickers)',
    titlePt: 'Etiquetas Escolares & Candy Bar (Adesivos)',
    icon: 'Sparkles',
    category: 'Adhesivos & Rotulados',
    recommendedPaperEs: 'Papel Fotográfico Adhesivo Glossy de 115g a 135g',
    recommendedPaperPt: 'Papel Fotográfico Adesivo Glossy de 115g a 135g',
    grammage: '115g - 135g',
    avoidPaperEs: 'Evita papel no autoadhesivo para no perder tiempo aplicando pegamento en decenas de golosinas.',
    avoidPaperPt: 'Evite papel comum sem cola para não perder horas passando cola em dezenas de doces e garrafinhas.',
    printerSettings: {
      mediaTypeEs: 'Papel Adhesivo / Papel Mate / Papel Fotográfico',
      mediaTypePt: 'Papel Adesivo / Papel Matte / Papel Fotográfico',
      qualityEs: 'Alta Calidad',
      qualityPt: 'Alta Qualidade',
      scale: '100% Exacto',
      colorProfile: 'Estándar'
    },
    proTipEs: 'Si las etiquetas van en botellas con hielo o agua, protégelas colocando encima cinta transparente ancha (papel contact) para hacerlas 100% resistentes al agua.',
    proTipPt: 'Se as etiquetas forem para garrafinhas de água ou suco na geladeira, lamine com papel contact transparente ou vinil para torná-las 100% à prova d\'água.',
    glueTipEs: 'El papel autoadhesivo ya incluye pegamento de alta adherencia.',
    glueTipPt: 'O papel fotográfico adesivo já vem com cola autoadesiva pronta.',
    finishBadge: 'Pronto para Colar'
  },
  {
    id: 'invitaciones-lujo',
    titleEs: 'Invitaciones Impresas & Recuerdos Boho/Vintage',
    titlePt: 'Convites Impressos & Lembranças Elegantes Boho',
    icon: 'Mail',
    category: 'Papelería Fina',
    recommendedPaperEs: 'Papel Opalina Lisa / Telada / Papel Matte de 180g a 220g',
    recommendedPaperPt: 'Papel Opalina Lisa / Telada / Papel Matte de 180g a 220g',
    grammage: '180g - 220g',
    avoidPaperEs: 'Evita papeles demasiado brillantes si el diseño busca una estética sobria, vintage o floral delicada.',
    avoidPaperPt: 'Evite papéis com brilho excessivo se o design for floral, aquarelado, minimalista ou rústico chic.',
    printerSettings: {
      mediaTypeEs: 'Papel Mate / Epson Matte / Papel Especial',
      mediaTypePt: 'Papel Matte / Epson Matte / Papel Especial',
      qualityEs: 'Alta Calidad',
      qualityPt: 'Alta Qualidade',
      scale: '100%',
      colorProfile: 'Color Neutro / Suave'
    },
    proTipEs: 'La textura de la Opalina absorbe la tinta mate de forma suave, sin dejar huellas dactilares cuando los invitados la manipulan.',
    proTipPt: 'A textura da Opalina ou papel Matte absorve a tinta uniformemente, sem deixar marcas de dedo quando os convidados tocam.',
    glueTipEs: 'Usa lacre de cera, cordón de yute o lazo de gasa para cerrar el sobre.',
    glueTipPt: 'Use sinete de cera, cordão de juta ou fita de cetim/gaze para fechar o envelope.',
    finishBadge: 'Toque Aveludado'
  },
  {
    id: 'libritos-colorear',
    titleEs: 'Libritos para Colorear & Juegos Infantiles',
    titlePt: 'Livrinhos de Colorir & Atividades Infantis',
    icon: 'BookOpen',
    category: 'Entretenimiento Niños',
    recommendedPaperEs: 'Portada: Glossy 180g | Páginas Interiores: Papel Bond/Offset 75g-90g',
    recommendedPaperPt: 'Capa: Glossy 180g | Miolo/Páginas: Papel Sulfite/Offset 75g-90g',
    grammage: 'Capa 180g / Miolo 75g',
    avoidPaperEs: 'No uses papel fotográfico en las páginas interiores porque los lápices de colores y crayones patinan y no pintan bien.',
    avoidPaperPt: 'Não use papel fotográfico nas páginas de dentro porque lápis de cor e giz de cera escorregam e não fixam a cor.',
    printerSettings: {
      mediaTypeEs: 'Portada: Papel Foto | Interior: Papel Común (B/N o Color Estándar)',
      mediaTypePt: 'Capa: Papel Foto | Miolo: Papel Comum (P/B ou Cor Padrão)',
      qualityEs: 'Portada: Alta | Interior: Estándar (Rápida)',
      qualityPt: 'Capa: Alta | Miolo: Padrão (Rápida)',
      scale: 'Folleto / Doble faz en A4',
      colorProfile: 'Estándar'
    },
    proTipEs: 'Imprime las hojas interiores en blanco y negro (modo escala de grises) para ahorrar hasta un 80% de tinta.',
    proTipPt: 'Imprima as páginas internas em preto e branco (escala de cinza) para economizar até 80% da tinta da impressora.',
    glueTipEs: 'Engrapa en el lomo central con una grapadora de brazo largo o usa cordón decorativo.',
    glueTipPt: 'Grampeie na dobra central com grampeador comum ou amarre com fitinha de cetim.',
    finishBadge: 'Econômico & Criativo'
  }
];

export const TROUBLESHOOTING_GUIDE: TroubleshootingItem[] = [
  {
    id: 'issue-dark-colors',
    questionEs: '¿Por qué los colores salieron oscuros, apagados o diferentes a la pantalla?',
    questionPt: 'Por que as cores saíram escuras, apagadas ou diferentes da tela do celular/PC?',
    icon: 'Palette',
    severity: 'high',
    causeEs: 'La pantalla emite luz RGB brillante, mientras que la impresora mezcla tintas CMYK en papel absorbente. Además, suele estar seleccionada la opción de papel incorrecta.',
    causePt: 'A tela emite luz RGB brilhante, enquanto a impressora mistura tintas CMYK no papel. Quase sempre a impressora está configurada como "Papel Comum" em vez de "Papel Fotográfico".',
    solutionStepsEs: [
      'Entra en Propiedades de la Impresora antes de dar clic en Imprimir.',
      'En "Tipo de Papel" (Media Type), cambia de "Papel Común" a "Epson Matte" o "Papel Fotográfico Brillante". Esto le dice a la impresora que inyecte la cantidad exacta de micropuntos.',
      'En Calidad, selecciona "Alta" o "Foto".',
      'Si aún sale oscuro, aumenta el brillo de tu diseño en Canva un 10% a 15% antes de descargar.'
    ],
    solutionStepsPt: [
      'Abra as "Propriedades da Impressora" antes de clicar em Imprimir.',
      'Em "Tipo de Papel", mude de "Papel Comum" para "Papel Fotográfico Brilhante" ou "Epson Matte". Isso força a impressora a calibrar as cores corretamente.',
      'Na Qualidade de Impressão, selecione "Alta" ou "Foto".',
      'Se continuar escuro, aumente o brilho do molde no Canva em 10% a 15% antes de baixar o arquivo.'
    ],
    quickTipEs: '¡El 90% de los casos se soluciona cambiando el tipo de papel en la configuración de la impresora!',
    quickTipPt: '90% dos casos de cor escura são resolvidos apenas mudando o Tipo de Papel no driver da impressora!'
  },
  {
    id: 'issue-paper-jam',
    questionEs: '¿La impresora no jala el papel grueso (230g) o jala 2 hojas juntas?',
    questionPt: 'A impressora não puxa o papel fotográfico grosso (230g) ou puxa 2 folhas juntas?',
    icon: 'Printer',
    severity: 'medium',
    causeEs: 'Los rodillos de goma de la impresora pueden estar con polvo de papel o el paquete de hojas está pegado por la estática.',
    causePt: 'Os roletes de tração da impressora estão com poeira ou o maço de folhas está grudado pela eletricidade estática.',
    solutionStepsEs: [
      'Airea y abanica las hojas de papel fotográfico antes de colocarlas en la bandeja para eliminar la estática.',
      'Coloca de 3 a 5 hojas en la bandeja trasera (nunca 1 sola suelta y nunca el paquete lleno completo).',
      'Asegúrate de alimentar el papel por la bandeja trasera vertical (la que baja directo), no por la gaveta frontal inferior.',
      'Limpia suavemente el rodillo de goma con un hisopo con una gota de alcohol isopropílico si la impresora patina.'
    ],
    solutionStepsPt: [
      'Abane as folhas de papel fotográfico com as mãos antes de colocar na impressora para soltar a estática.',
      'Coloque de 3 a 5 folhas juntas na bandeja traseira (nunca 1 folha solta e nunca a bandeja abarrotada).',
      'Alimente sempre pela bandeja traseira vertical (entrada superior), que tem caminho reto sem curvas no papel.',
      'Se o rolete patinar, passe um cotonete levemente umedecido para retirar o pó do papel.'
    ],
    quickTipEs: 'Usa la bandeja trasera vertical para papeles pesados de 200g a 230g.',
    quickTipPt: 'Use sempre a bandeja traseira superior para papéis pesados de 200g a 230g.'
  },
  {
    id: 'issue-smudge-ink',
    questionEs: '¿La tinta se corre o se mancha al tocar el papel fotográfico?',
    questionPt: 'A tinta borrou ou soltou quando você passou a mão no papel fotográfico?',
    icon: 'Droplet',
    severity: 'high',
    causeEs: 'Papel incompatible con el tipo de tinta (tinta corante vs pigmentada) o manipulación inmediata antes del secado microporoso.',
    causePt: 'Papel incompatível com o tipo de tinta (tinta corante vs pigmentada) ou manuseio antes da secagem dos microporos do papel.',
    solutionStepsEs: [
      'Verifica que estés usando papel para Inyección de Tinta (Inkjet) y no para impresoras Láser.',
      'Si tu impresora usa tinta pigmentada (típica en tintas negras de oficina), usa papel Fotográfico Matte o Glossy Cast Coated de alta absorción.',
      'Deja reposar la hoja impresa 2 a 3 minutos antes de recortar con tijera para que la resina fije al 100%.'
    ],
    solutionStepsPt: [
      'Confirme se o papel fotográfico é para Jato de Tinta (Inkjet) e não para impressora Laser.',
      'Se a sua impressora usar tinta pigmentada, prefira papel Fotográfico Matte ou Glossy Microporoso de alta absorção.',
      'Deixe a folha recém-impressa secar de 2 a 3 minutos antes de cortar ou colar.'
    ],
    quickTipEs: 'El papel fotográfico Glossy microporoso seca al tacto en menos de 1 minuto.',
    quickTipPt: 'Papel fotográfico Glossy microporoso de qualidade seca quase instantaneamente.'
  },
  {
    id: 'issue-scale-size',
    questionEs: '¿Las pestañas de las cajitas no encajan o quedaron de tamaño diferente?',
    questionPt: 'As abas das caixinhas não encaixaram ou o molde saiu menor que a folha?',
    icon: 'Scissors',
    severity: 'low',
    causeEs: 'El visor de PDF o navegador redujo automáticamente el archivo para añadir márgenes blancos ("Ajustar al área de impresión").',
    causePt: 'O leitor de PDF ou navegador reduziu o molde automaticamente ativando a opção "Ajustar à página".',
    solutionStepsEs: [
      'En el menú de impresión, busca la casilla "Escala" o "Tamaño".',
      'Cambia de "Ajustar a la página" o "Reducir" a "Tamaño Real" o "Escala 100%".',
      'Si tu impresora lo permite, activa la opción "Impresión Sin Bordes" (Borderless) para aprovechar toda la hoja A4.'
    ],
    solutionStepsPt: [
      'Na janela de impressão, procure a opção "Escala" ou "Ajuste de Página".',
      'Mude de "Ajustar à página" para "Tamanho Real" ou "Escala 100%".',
      'Se a impressora suportar, ative a função "Sem Bordas" (Borderless) para aproveitar toda a área da folha A4.'
    ],
    quickTipEs: 'Siempre imprime a Escala 100% para que todas las piezas coincidan milimétricamente.',
    quickTipPt: 'Sempre imprima em Escala 100% para que todos os encaixes fiquem perfeitos.'
  }
];

export const PAPER_GUIDE: PaperGuideItem[] = [
  {
    name: 'Papel Fotográfico Glossy (Brillante)',
    grammage: '180g a 230g',
    finish: 'Brillante intenso con colores vivos',
    bestFor: ['Cajitas Dulceras (Milk, Pirámide, Bala)', 'Cake Toppers principales', 'Bolsas de Papitas', 'Recuerdos de Fiesta'],
    printerType: 'Impresoras de Inyección de Tinta (Inkjet: Epson EcoTank, Canon, HP)',
    motherTip: '¡El favorito de las mamás y artesanas! Los colores de los personajes quedan súper vivos y alegres. Para cajitas que lleven dulces pesados, usa 200g a 230g para que no se deformen.',
    score: 5
  },
  {
    name: 'Papel Fotográfico Matte / Opalina',
    grammage: '180g a 220g',
    finish: 'Mate elegante, sin reflejos ni marcas de dedos',
    bestFor: ['Invitaciones Digitales impresas', 'Cajitas estilo Boho / Vintage / Baby', 'Etiquetas de lujo', 'Libritos para Colorear (portadas)'],
    printerType: 'Inkjet y Láser',
    motherTip: 'Ideal si buscas una fiesta temática aesthetic, minimalista o campestre. La Opalina de 180g es económica y pasa sin problemas por cualquier impresora doméstica.',
    score: 4
  },
  {
    name: 'Papel Fotográfico Adhesivo (Glossy o Matte)',
    grammage: '115g a 135g',
    finish: 'Autoadhesivo con respaldo desprendible',
    bestFor: ['Etiquetas Escolares (+15.000 del Pack)', 'Stickers para Botellas de Agua', 'Cierre de Bolsitas', 'Tablas de Nutrición', 'Logos'],
    printerType: 'Inkjet',
    motherTip: '¡Ahorra horas de trabajo! No necesitas pegamento. Imprimes, recortas y pegas directo en jugos, frascos, chocolates y útiles escolares.',
    score: 5
  },
  {
    name: 'Papel Bond / Offset Común',
    grammage: '75g a 90g',
    finish: 'Papel de fotocopia común',
    bestFor: ['Interior de los 240 Libritos para Colorear', 'Juegos y dinámicas de fiesta', 'Borradores de prueba de moldes'],
    printerType: 'Cualquier impresora doméstica',
    motherTip: 'Úsalo para las hojas internas de colorear para que los niños puedan pintar con crayones y lápices sin traspasar la tinta.',
    score: 4
  },
  {
    name: 'Papel Kraft / Cartulina Metalizada',
    grammage: '180g a 250g',
    finish: 'Rústico / Dorado / Plateado / Holográfico',
    bestFor: ['Bases de Cake Topper en capas 3D', 'Fiestas temáticas de Safari / Granja / Princesas', 'Letras colgantes'],
    printerType: 'Para detalles y corte',
    motherTip: 'Colocar una capa dorada o kraft detrás de tus personajes de Canva hace que el topper parezca comprado en una tienda de lujo.',
    score: 5
  }
];

export const ASSEMBLY_TIPS = [
  {
    title: '1. El truco del pliegue perfecto',
    icon: 'Sparkles',
    description: 'Antes de doblar tus cajitas, pasa una regla y la punta de un bolígrafo sin tinta (o la parte trasera de un cuchillo sin filo) por las líneas punteadas. ¡Se doblará solo en 1 segundo y sin arrugarse!'
  },
  {
    title: '2. ¿Qué pegamento usar?',
    icon: 'Wrench',
    description: 'Para las solapas de las cajitas usa Cinta Doble Cara o Silicón Líquido Frío (evita la goma blanca escolar porque humedece el papel). Para toppers 3D usa cinta de espuma bifaz para dar volumen.'
  },
  {
    title: '3. Configuración de tu impresora',
    icon: 'Printer',
    description: 'En los ajustes de impresión de tu PC o celular, selecciona SIEMPRE "Tipo de papel: Papel Fotográfico" y "Calidad: Alta". Marca la casilla "Tamaño Real / 100%" para que los moldes coincidan con precisión.'
  },
  {
    title: '4. Cortar en serie para no cansarse',
    icon: 'Scissors',
    description: 'Imprime primero todas las hojas. Luego haz los cortes rectos con guillotina o regla y estilete, y deja los detalles circulares para la tijera mientras ves tu serie favorita.'
  }
];
