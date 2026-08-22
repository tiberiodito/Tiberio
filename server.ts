import express from "express";
import path from "path";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Health check endpoint for container probes and deployment verifications
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok", uptime: process.uptime() });
});

// Lazy-initialized Gemini Client to prevent any startup crash if key is missing or deferred
let aiClient: GoogleGenAI | null = null;
function getAIClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// Dynamic Theme Generator with rich thematic intelligence for 30+ themes and procedural custom themes
function generateThematicFallback(theme: string, childName: string, childAge: number | string, language: 'es' | 'pt') {
  const isPt = language === 'pt';
  const cleanTheme = theme.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const name = childName || (isPt ? 'Nosso Aniversariante' : 'Nuestro Cumpleañero');
  const age = childAge || 5;

  interface ThemePreset {
    themeName: string;
    colorPalette: { name: string; hex: string; role: string }[];
    invitationPhrases: { style: string; text: string }[];
    boxCandyFillings: { boxType: string; suggestedTreats: string[] }[];
    partyActivities: string[];
    recommendedPackItems: string[];
    printTips: string;
  }

  // Preset dictionary for popular themes
  if (cleanTheme.includes('dino') || cleanTheme.includes('jurassic')) {
    return {
      themeName: isPt ? `Expedição Jurássica de ${name}` : `Expedición Jurásica de ${name}`,
      colorPalette: [
        { name: isPt ? "Verde Selva" : "Verde Selva", hex: "#2E7D32", role: isPt ? "Cor Principal" : "Color Principal" },
        { name: isPt ? "Laranja T-Rex" : "Naranja T-Rex", hex: "#E65100", role: isPt ? "Destaque / Acento" : "Acento / Brillos" },
        { name: isPt ? "Marrom Terra" : "Marrón Tierra", hex: "#795548", role: isPt ? "Cor Secundária" : "Color Secundario" },
        { name: isPt ? "Areia Fóssil" : "Arena Fósil", hex: "#FFF8E1", role: isPt ? "Fundo Suave" : "Fondo Base" }
      ],
      invitationPhrases: [
        {
          style: isPt ? "Aventura Jurássica" : "Aventura Jurásica",
          text: isPt 
            ? `Um rugido de alegria! Prepare seus binóculos para explorar a Era dos Dinossauros no aniversário de ${age} anos do(a) ${name}!` 
            : `¡Un rugido de diversión! Prepara tus binoculares para explorar la era jurásica en los ${age} añitos de ${name}.`
        },
        {
          style: isPt ? "Divertido & Animado" : "Divertido & Enérgico",
          text: isPt 
            ? `Cuidado com o T-Rex! Uma aventura pré-histórica cheia de doces e surpresas te espera na festa do(a) ${name}.` 
            : `¡Cuidado con el T-Rex! Una aventura prehistórica llena de sorpresas te espera para festejar a ${name}.`
        },
        {
          style: isPt ? "Carinhoso & Família" : "Tierno & Infantil",
          text: isPt 
            ? `Nosso pequeno dinossauro está completando ${age} anos! Venha comemorar esse dia tão especial com a gente.` 
            : `¡Nuestro pequeño dinosaurio cumple ${age} añitos! Ven a compartir sonrisas y momentos mágicos con ${name}.`
        }
      ],
      boxCandyFillings: [
        {
          boxType: isPt ? "Caixa Milk" : "Caja Milk",
          suggestedTreats: isPt ? ["Ovos de chocolate de Dino", "Balas de goma de folhas", "Marshmallows verdes"] : ["Huevitos de chocolate Dino", "Gomitas en forma de hojas", "Malvaviscos verdes"]
        },
        {
          boxType: isPt ? "Valijita / Gable Box" : "Gable Box / Valijita",
          suggestedTreats: isPt ? ["Mini suco sabor uva/laranja", "Biscoitos vulcão de chocolate", "Pirulitos pré-históricos"] : ["Juguito tropical", "Galletas volcán de chocolate", "Paletas prehistóricas"]
        },
        {
          boxType: isPt ? "Saco de Batatinhas" : "Bolsa de Papitas",
          suggestedTreats: isPt ? ["Batata frita crocante", "Salgadinho de milho garra de dinossauro"] : ["Papas fritas clásicas", "Snacks en forma de patitas"]
        }
      ],
      partyActivities: [
        isPt ? "Escavação arqueológica: caça aos dinossauros de brinquedo escondidos na areia mágica" : "Excavación arqueológica: búsqueda de fósiles de juguete escondidos en arena o arroz",
        isPt ? "Dança da Estátua com o Rugido do T-Rex: quando a música parar, todos congelam como fósseis!" : "Baile de las Estatuas con Rugido T-Rex: cuando para la música, ¡todos congelados como fósiles!",
        isPt ? "Corrida dos ovos de velociraptor com colher de madeira" : "Carrera del huevo de velociraptor en cuchara con obstáculos"
      ],
      recommendedPackItems: isPt 
        ? ["Letras 3D", "Topos de Bolo", "Sacos de Batatinha", "Livros de Colorir"]
        : ["Letras 3D", "Cake Toppers", "Bolsa Papitas", "Libritos Colorear"],
      printTips: isPt
        ? "Para o tema Dinossauros, use Papel Fotográfico Matte ou Glossy 230g para que os tons de verde fiquem bem intensos."
        : "Para dinosaurios, usa Papel Fotográfico Glossy 230g para que los verdes y naranjas resalten con máximo contraste."
    };
  }

  if (cleanTheme.includes('stitch') || cleanTheme.includes('angel') || cleanTheme.includes('lilo')) {
    return {
      themeName: isPt ? `Festa Tropical Stitch & Angel de ${name}` : `Fiesta Tropical Stitch & Angel de ${name}`,
      colorPalette: [
        { name: isPt ? "Azul Stitch" : "Azul Stitch", hex: "#1E88E5", role: isPt ? "Cor Principal" : "Color Principal" },
        { name: isPt ? "Rosa Angel" : "Rosa Angel", hex: "#F06292", role: isPt ? "Cor Secundária" : "Color Secundario" },
        { name: isPt ? "Turquesa Tropical" : "Turquesa Tropical", hex: "#26C6DA", role: isPt ? "Destaque / Acento" : "Acento / Brillos" },
        { name: isPt ? "Branco Coco" : "Blanco Coco", hex: "#FAFAFA", role: isPt ? "Fundo Suave" : "Fondo Base" }
      ],
      invitationPhrases: [
        {
          style: isPt ? "Estilo Ohana & Família" : "Estilo Ohana & Amistad",
          text: isPt 
            ? `Ohana quer dizer família, e família nunca abandona uma super festa! Venha comemorar os ${age} anos de ${name}!` 
            : `¡Ohana significa familia, y la familia nunca se pierde una fiesta! Ven a celebrar los ${age} años de ${name}.`
        },
        {
          style: isPt ? "Tropical & Divertido" : "Tropical & Divertido",
          text: isPt 
            ? `Aloha! Vista sua alegria e prepare-se para um dia cheio de brincadeiras no mundo mágico de Stitch & Angel com ${name}!` 
            : `¡Aloha! Una fiesta llena de travesuras mágicas y diversión al estilo Stitch te espera en los ${age} añitos de ${name}.`
        },
        {
          style: isPt ? "Fofo & Encantador" : "Tierno & Encantador",
          text: isPt 
            ? `Uma dose de fofura intergaláctica! Esperamos você com muito carinho para abraçar e festejar com ${name}.` 
            : `¡Travesuras cósmicas y mucho amor! Acompáñanos a celebrar este día inolvidável con ${name}.`
        }
      ],
      boxCandyFillings: [
        {
          boxType: isPt ? "Caixa Milk" : "Caja Milk",
          suggestedTreats: isPt ? ["Marshmallows azuis e rosas", "Balas de coco havaianas", "Bombons de morango"] : ["Malvaviscos azul y rosa", "Caramelos frutales de coco", "Bombones de frutilla"]
        },
        {
          boxType: isPt ? "Valijita / Gable Box" : "Gable Box / Valijita",
          suggestedTreats: isPt ? ["Suco tropical de abacaxi", "Pirulitos coloridos espirais", "Mini cookies decorados"] : ["Juguito tropical de piña", "Paletas espirales hawaianas", "Galletitas decoradas"]
        },
        {
          boxType: isPt ? "Saco de Batatinhas" : "Bolsa de Papitas",
          suggestedTreats: isPt ? ["Batata frita crocante", "Pipoca doce colorida tropical"] : ["Papas fritas crujientes", "Palomitas dulces de colores"]
        }
      ],
      partyActivities: [
        isPt ? "Dança Hula-Hula do Stitch: aula de passinhos havaianos divertidos com colares de flores" : "El baile Hula-Hula de Stitch: coreografía hawaiana con collares de flores para todos los niños",
        isPt ? "Caça ao experimento alienígena: achar as estrelinhas espaciais perdidas no salão" : "Búsqueda del experimento cósmico: encontrar las estrellitas hawaianas ocultas",
        isPt ? "Limbo tropical do Stitch com bastão de flores" : "El juego del Limbo Tropical con música hawaiana alegre"
      ],
      recommendedPackItems: isPt 
        ? ["Letras 3D", "Topos de Bolo", "Sacos de Batatinha", "Convites WhatsApp"]
        : ["Letras 3D", "Cake Toppers", "Bolsa Papitas", "Invitaciones WhatsApp"],
      printTips: isPt
        ? "Para o Stitch, o Papel Fotográfico Glossy 200g realça o brilho tropical dos tons de azul e rosa neon."
        : "Para Stitch y Angel, imprime en Papel Fotográfico Glossy 200g para que el azul cielo y rosa pastel brillen radiantes."
    };
  }

  if (cleanTheme.includes('safari') || cleanTheme.includes('selva') || cleanTheme.includes('jungle')) {
    return {
      themeName: isPt ? `Safari Baby Aventura de ${name}` : `Safari Aventura de ${name}`,
      colorPalette: [
        { name: isPt ? "Verde Oliva" : "Verde Oliva", hex: "#689F38", role: isPt ? "Cor Principal" : "Color Principal" },
        { name: isPt ? "Mostarda Safari" : "Mostaza Safari", hex: "#FBC02D", role: isPt ? "Destaque / Acento" : "Acento / Brillos" },
        { name: isPt ? "Terracota Quente" : "Terracota", hex: "#D84315", role: isPt ? "Cor Secundária" : "Color Secundario" },
        { name: isPt ? "Creme Natural" : "Crema Suave", hex: "#FFFDE7", role: isPt ? "Fundo Suave" : "Fondo Base" }
      ],
      invitationPhrases: [
        {
          style: isPt ? "Expedição Safari" : "Expedición Safari",
          text: isPt 
            ? `Coloque seu chapéu de explorador! O jipe do Safari do(a) ${name} vai partir para comemorar seus ${age} aninhos!` 
            : `¡Ponte tu sombrero de explorador! El jeep de safari de ${name} está listo para festejar sus ${age} añitos.`
        },
        {
          style: isPt ? "Doce & Delicado" : "Tierno & Bebé",
          text: isPt 
            ? `Os animaizinhos mais fofos da savana se reuniram para uma festa inesquecível no aniversário de ${name}!` 
            : `Los animalitos más tiernos de la selva se reúnen para celebrar el cumpleaños número ${age} de ${name}.`
        },
        {
          style: isPt ? "Animado" : "Alegre & Festivo",
          text: isPt 
            ? `Leão, girafa, elefantinho e muita diversão! Você é nosso convidado de honra para essa aventura com ${name}.` 
            : `¡León, jirafa, monito y mucha alegría! Eres nuestro invitado especial para explorar junto a ${name}.`
        }
      ],
      boxCandyFillings: [
        {
          boxType: isPt ? "Caixa Milk" : "Caja Milk",
          suggestedTreats: isPt ? ["Balas de banana", "Bombons de nozes/avelã", "Marshmallows cor bege e verde"] : ["Gomitas frutales de plátano", "Bombones de chocolate con leche", "Malvaviscos crema y verde"]
        },
        {
          boxType: isPt ? "Valijita / Gable Box" : "Gable Box / Valijita",
          suggestedTreats: isPt ? ["Suco de maçã/laranja", "Biscoitos em formato de bichinhos", "Paçoca rolha"] : ["Juguito de manzana", "Galletitas en forma de animalitos", "Paletas safari"]
        },
        {
          boxType: isPt ? "Saco de Batatinhas" : "Bolsa de Papitas",
          suggestedTreats: isPt ? ["Batata palha ou ondulada", "Salgadinho de queijo crocante"] : ["Papas fritas onduladas", "Snacks crujientes de queso"]
        }
      ],
      partyActivities: [
        isPt ? "Safári fotográfico: binóculos de rolo de papel e caça aos bichinhos escondidos" : "Safari fotográfico: los niños reciben binoculares de cartón y buscan peluches ocultos",
        isPt ? "Imitação dos sons dos animais da selva (quem ruge mais alto como o leãozinho)" : "El coro de la selva: imitar los sonidos de la jirafa, elefante y leoncito",
        isPt ? "Passagem pela ponte dos macaquinhos (corda no chão com obstáculos)" : "El puente de la selva: circuito de equilibrio con ramas y hojas de papel"
      ],
      recommendedPackItems: isPt 
        ? ["Caixinhas Milk", "Letras 3D", "Topos de Bolo", "Livros de Colorir"]
        : ["Cajitas Milk", "Letras 3D", "Cake Toppers", "Libritos Colorear"],
      printTips: isPt
        ? "Para o tema Safari, o Papel Fotográfico Matte ou Offset 240g dá um toque rústico elegante maravilhoso."
        : "Para el estilo Safari, el papel Fotográfico Matte o Kraft suave aporta un toque rústico y elegante bellísimo."
    };
  }

  if (cleanTheme.includes('princes') || cleanTheme.includes('reino') || cleanTheme.includes('coroa')) {
    return {
      themeName: isPt ? `Baile Real das Princesas de ${name}` : `Baile Real de Princesas de ${name}`,
      colorPalette: [
        { name: isPt ? "Rosa Real" : "Rosa Real", hex: "#F48FB1", role: isPt ? "Cor Principal" : "Color Principal" },
        { name: isPt ? "Dourado Nobre" : "Dorado Corona", hex: "#D4AF37", role: isPt ? "Destaque / Acento" : "Acento / Brillos" },
        { name: isPt ? "Lavanda Castelo" : "Lavanda Castillo", hex: "#CE93D8", role: isPt ? "Cor Secundária" : "Color Secundario" },
        { name: isPt ? "Branco Pérola" : "Blanco Perla", hex: "#FFF9FB", role: isPt ? "Fundo Suave" : "Fondo Base" }
      ],
      invitationPhrases: [
        {
          style: isPt ? "Decreto Real" : "Decreto Real",
          text: isPt 
            ? `Por ordem de sua alteza real, você foi convocado(a) para o Baile dos ${age} anos da Princesa ${name}!` 
            : `¡Por decreto del reino, estás cordialmente invitado al Gran Baile Real de la Princesa ${name} en sus ${age} añitos!`
        },
        {
          style: isPt ? "Conto de Fadas" : "Cuento de Hadas",
          text: isPt 
            ? `Era uma vez um dia mágico cheio de encanto, coroas e doces para celebrar o aniversário de ${name}.` 
            : `Había una vez un reino donde los sueños se hacían realidad... Ven a celebrar junto a la Princesa ${name}.`
        },
        {
          style: isPt ? "Terno & Amoroso" : "Tierno & Dulce",
          text: isPt 
            ? `Nossa princesinha está completando ${age} anos e seu maior presente é a sua presença brilhante!` 
            : `¡Nuestra princesita cumple ${age} años! Te esperamos con coronitas, sonrisas y momentos mágicos.`
        }
      ],
      boxCandyFillings: [
        {
          boxType: isPt ? "Caixa Milk" : "Caja Milk",
          suggestedTreats: isPt ? ["Bombons de chocolate branco", "Pérolas de açúcar rosa", "Marshmallows em flor"] : ["Bombones de chocolate blanco", "Gomitas en forma de flor", "Malvaviscos rosados"]
        },
        {
          boxType: isPt ? "Valijita / Gable Box" : "Gable Box / Valijita",
          suggestedTreats: isPt ? ["Mini suco de uva branca", "Biscoitos amanteigados em coroa", "Chicletes de framboesa"] : ["Juguito de uva o durazno", "Galletas glaseadas en forma de corona", "Piruletas de corazón"]
        },
        {
          boxType: isPt ? "Saco de Batatinhas" : "Bolsa de Papitas",
          suggestedTreats: isPt ? ["Batata palha especial", "Pipoca doce rosa brilhante"] : ["Papas fritas finas", "Palomitas acarameladas rosas"]
        }
      ],
      partyActivities: [
        isPt ? "Coroação Real com varinha mágica e entrega de mini tiaras de papel" : "Ceremonia de Coronación: entrega de coronitas de papel y varitas brillantes a los invitados",
        isPt ? "Valsa das Princesas e Príncipes: dança das fitas coloridas mágicas" : "Vals de los Príncipes y Princesas con cintas mágicas de satén",
        isPt ? "Caça ao sapatinho de cristal ou coroa mágica escondida no salão" : "Búsqueda de la zapatilla de cristal oculta en el castillo"
      ],
      recommendedPackItems: isPt 
        ? ["Letras 3D", "Topos de Bolo", "Caixinhas Milk", "Livros de Colorir"]
        : ["Letras 3D", "Cake Toppers", "Cajitas Milk", "Libritos Colorear"],
      printTips: isPt
        ? "Imprima as caixas em Papel Fotográfico Glossy 230g e aplique apliques 3D com fita banana para destacar as coroas."
        : "Imprime en Papel Fotográfico Glossy 230g y usa cinta de espuma (foamy 3D) para resaltar las capas de la corona."
    };
  }

  if (cleanTheme.includes('sonic')) {
    return {
      themeName: isPt ? `Velocidade Sônica de ${name}` : `Velocidad Sónica de ${name}`,
      colorPalette: [
        { name: isPt ? "Azul Sônico" : "Azul Sonic", hex: "#0D47A1", role: isPt ? "Cor Principal" : "Color Principal" },
        { name: isPt ? "Vermelho Power" : "Rojo Power", hex: "#D50000", role: isPt ? "Cor Secundária" : "Color Secundario" },
        { name: isPt ? "Ouro Anéis" : "Oro Anillos", hex: "#FFD600", role: isPt ? "Destaque / Acento" : "Acento / Brillos" },
        { name: isPt ? "Azul Céu Green Hill" : "Celeste Green Hill", hex: "#E1F5FE", role: isPt ? "Fundo Suave" : "Fondo Base" }
      ],
      invitationPhrases: [
        {
          style: isPt ? "Super Velocidade" : "Super Velocidad",
          text: isPt 
            ? `Gotta go fast! O Sonic ligou o turbo para comemorar os ${age} anos de ${name}! Venha correr nessa festa!` 
            : `¡Gotta go fast! La velocidad supersónica se activa para celebrar los ${age} añitos de ${name}. ¡No te quedes atrás!`
        },
        {
          style: isPt ? "Gamer & Ação" : "Gamer & Aventuras",
          text: isPt 
            ? `Prepare-se para subir de nível! Uma fase especial cheia de anéis e doces espera por você na festa do(a) ${name}!` 
            : `¡Prepárate para pasar de nivel! Una zona llena de anillos dorados y sorpresas te espera en el cumpleaños de ${name}.`
        },
        {
          style: isPt ? "Divertido" : "Dinámico & Alegre",
          text: isPt 
            ? `Junte-se a Sonic, Tails e Knuckles no evento mais veloz do ano com nosso(a) campeão(ã) ${name}!` 
            : `¡Únete al equipo Sonic para una fiesta cargada de energía y alegría con ${name}!`
        }
      ],
      boxCandyFillings: [
        {
          boxType: isPt ? "Caixa Milk" : "Caja Milk",
          suggestedTreats: isPt ? ["Balas de goma azuis", "Moedas de chocolate douradas (anéis)", "Chicletes de framboesa"] : ["Gomitas azules mora", "Monedas de chocolate dorado", "Caramelos energéticos"]
        },
        {
          boxType: isPt ? "Valijita / Gable Box" : "Gable Box / Valijita",
          suggestedTreats: isPt ? ["Suco sabor blueberry/morango", "Anéis de cebola ou salgadinho de argola", "Pirulito pop com som"] : ["Juguito sabor mora/fresa", "Snacks en aros dorados", "Paleta con polvito ácido"]
        },
        {
          boxType: isPt ? "Saco de Batatinhas" : "Bolsa de Papitas",
          suggestedTreats: isPt ? ["Batata frita lisa crocante", "Salgadinho de queijo tubular"] : ["Papas fritas crujientes", "Nachos de queso"]
        }
      ],
      partyActivities: [
        isPt ? "Circuito de velocidade do Sonic: corrida de obstáculos leves e salto sobre blocos de almofadas" : "Circuito de carreras sónicas: carrera con mini vallas y recolección de aros",
        isPt ? "Caça aos Anéis de Ouro: achar argolas amarelas de plástico espalhadas no salão" : "Búsqueda de los Anillos Dorados: encontrar la mayor cantidad de aros en 1 minuto",
        isPt ? "Desafio do Dr. Eggman: acertar os balões com dardos de velcro ou bolinhas de plástico" : "Derrota al Dr. Eggman: tiro al blanco de globos con pelotas suaves"
      ],
      recommendedPackItems: isPt 
        ? ["Letras 3D", "Topos de Bolo", "Sacos de Batatinha", "Etiquetas Escolares"]
        : ["Letras 3D", "Cake Toppers", "Bolsa Papitas", "Etiquetas Escolares"],
      printTips: isPt
        ? "Imprima as caixas em Papel Fotográfico Glossy 230g para garantir que o azul e o vermelho fiquem com alto contraste e brilho."
        : "Imprime en Papel Fotográfico Glossy 230g con saturación viva para que los aros dorados y el azul eléctrico brillen al máximo."
    };
  }

  if (cleanTheme.includes('mario') || cleanTheme.includes('nintendo')) {
    return {
      themeName: isPt ? `Super Mario World de ${name}` : `Super Mario Bros Aventura de ${name}`,
      colorPalette: [
        { name: isPt ? "Vermelho Mario" : "Rojo Mario", hex: "#E52521", role: isPt ? "Cor Principal" : "Color Principal" },
        { name: isPt ? "Verde Luigi" : "Verde Luigi", hex: "#00A651", role: isPt ? "Cor Secundária" : "Color Secundario" },
        { name: isPt ? "Amarelo Estrela" : "Amarillo Estrella", hex: "#FBD000", role: isPt ? "Destaque / Acento" : "Acento / Brillos" },
        { name: isPt ? "Azul Macacão" : "Azul Overol", hex: "#00247D", role: isPt ? "Fundo Suave" : "Fondo Base" }
      ],
      invitationPhrases: [
        {
          style: isPt ? "Gamer & Ação" : "Gamer & Misión",
          text: isPt 
            ? `It's-a me, ${name}! Pule nos blocos de interrogação e venha comemorar ${age} anos no Reino dos Cogumelos!` 
            : `¡It's-a me, ${name}! Supera los niveles y ven a celebrar ${age} años de pura diversión en el Reino Champiñón.`
        },
        {
          style: isPt ? "Super Estrela" : "Estrella Invencible",
          text: isPt 
            ? `Pegamos a Super Estrela da invencibilidade e vamos fazer a festa mais divertida do ano com ${name}!` 
            : `¡Con el poder de la Super Estrella celebramos los ${age} añitos de ${name} con risas, juegos y sorpresas!`
        },
        {
          style: isPt ? "Animado" : "Festivo & Dinámico",
          text: isPt 
            ? `Mario, Luigi, Yoshi e toda a turma esperam por você para uma tarde inesquecível com ${name}!` 
            : `¡Mario, Luigi, Yoshi y todos los amigos te esperan para compartir un día inolvidable junto a ${name}!`
        }
      ],
      boxCandyFillings: [
        {
          boxType: isPt ? "Caixa Milk" : "Caja Milk",
          suggestedTreats: isPt ? ["Balas de goma formato cogumelo", "Moedas de chocolate douradas", "Marshmallows vermelhos"] : ["Gomitas en forma de honguito", "Monedas de chocolate dorado", "Malvaviscos rojos y verdes"]
        },
        {
          boxType: isPt ? "Valijita / Gable Box" : "Gable Box / Valijita",
          suggestedTreats: isPt ? ["Mini suco de pêssego da Princesa Peach", "Biscoitos estrela amanteigados", "Pirulitos bigode"] : ["Juguito de melocotón Princesa Peach", "Galletitas estrella", "Paletas bigote divertidas"]
        },
        {
          boxType: isPt ? "Saco de Batatinhas" : "Bolsa de Papitas",
          suggestedTreats: isPt ? ["Batata frita ondulada", "Salgadinho sabor queijo"] : ["Papas fritas clásicas", "Snacks crujientes de maíz"]
        }
      ],
      partyActivities: [
        isPt ? "Corrida de carrinhos Mario Kart: circuito no chão com pneus de papelão e volantes" : "Carrera Mario Kart: circuito en el suelo con volantes de cartón y conos",
        isPt ? "Estoure os blocos de interrogação com surpresas dentro" : "Golpea el Bloque Sorpresa (caja colgante con golosinas)",
        isPt ? "Pula-pula dos canos verdes e caça às moedas de ouro" : "El rescate de la Estrella Dorada: circuito de saltos y equilibrio"
      ],
      recommendedPackItems: isPt 
        ? ["Letras 3D", "Topos de Bolo", "Sacos de Batatinha", "Livros de Colorir"]
        : ["Letras 3D", "Cake Toppers", "Bolsa Papitas", "Libritos Colorear"],
      printTips: isPt
        ? "Use Papel Fotográfico Glossy 230g para que o vermelho do chapéu do Mario e o amarelo da estrela fiquem vibrantes."
        : "Usa Papel Fotográfico Glossy de 230g para que el rojo brillante y el verde de Luigi tengan máxima vivacidad."
    };
  }

  if (cleanTheme.includes('aranha') || cleanTheme.includes('spider') || cleanTheme.includes('heroi') || cleanTheme.includes('hero')) {
    return {
      themeName: isPt ? `Aranhaverso em Ação de ${name}` : `Spider-Man en Acción de ${name}`,
      colorPalette: [
        { name: isPt ? "Vermelho Teia" : "Rojo Telaraña", hex: "#D32F2F", role: isPt ? "Cor Principal" : "Color Principal" },
        { name: isPt ? "Azul Herói" : "Azul Héroe", hex: "#1976D2", role: isPt ? "Cor Secundária" : "Color Secundario" },
        { name: isPt ? "Preto Máscara" : "Negro Máscara", hex: "#212121", role: isPt ? "Destaque / Acento" : "Acento / Brillos" },
        { name: isPt ? "Branco Teia" : "Blanco Telaraña", hex: "#F5F5F5", role: isPt ? "Fundo Suave" : "Fondo Base" }
      ],
      invitationPhrases: [
        {
          style: isPt ? "Chamado de Super-Herói" : "Misión de Superhéroe",
          text: isPt 
            ? `Seu sentido aranha está apitando! Junte-se a nós para combater o tédio no aniversário de ${age} anos de ${name}!` 
            : `¡Tu sentido arácnido está vibrando! Únete a la misión para celebrar los ${age} añitos de nuestro héroe ${name}.`
        },
        {
          style: isPt ? "Ação & Aventura" : "Acción & Amistad",
          text: isPt 
            ? `Com grandes aniversários vêm grandes diversões! Venha balançar na teia e celebrar com ${name}!` 
            : `¡Un gran cumpleaños conlleva una gran diversión! Ven a lanzar telarañas de alegría junto a ${name}.`
        },
        {
          style: isPt ? "Divertido" : "Alegre & Emocionante",
          text: isPt 
            ? `Os maiores heróis do bairro já confirmaram presença! Falta só você para fazer a festa do(a) ${name} inesquecível!` 
            : `¡Los héroes de la ciudad ya están listos! Solo faltas tú para festejar este día increíble con ${name}.`
        }
      ],
      boxCandyFillings: [
        {
          boxType: isPt ? "Caixa Milk" : "Caja Milk",
          suggestedTreats: isPt ? ["Balas de goma formato aranha", "Bombons com cobertura vermelha", "Chicletes azuis"] : ["Gomitas rojas y azules", "Bombones envueltos en rojo", "Caramelos araña"]
        },
        {
          boxType: isPt ? "Valijita / Gable Box" : "Gable Box / Valijita",
          suggestedTreats: isPt ? ["Mini suco sabor morango", "Biscoitos com desenho de teia", "Pirulito pop vermelho"] : ["Juguito de frutos rojos", "Galletitas decoradas con telaraña", "Paletas rojas y azules"]
        },
        {
          boxType: isPt ? "Saco de Batatinhas" : "Bolsa de Papitas",
          suggestedTreats: isPt ? ["Batata frita crocante", "Salgadinho de trigo formato teia"] : ["Papas fritas clásicas", "Snacks en forma de red"]
        }
      ],
      partyActivities: [
        isPt ? "Treinamento de Lançador de Teias: acertar alvos de vilões com serpentina spray ou teias de barbante" : "Entrenamiento arácnido: esquivar rayos láser de lana roja en un pasillo",
        isPt ? "Caminhada nas paredes com obstáculos e túnel secreto" : "Tiro al blanco con telarañas suaves contra villanos de cartón",
        isPt ? "Desafio da pose de herói com sessão de fotos divertidas" : "Concurso de la mejor pose de superhéroe con capas y antifaces"
      ],
      recommendedPackItems: isPt 
        ? ["Letras 3D", "Topos de Bolo", "Sacos de Batatinha", "Convites WhatsApp"]
        : ["Letras 3D", "Cake Toppers", "Bolsa Papitas", "Invitaciones WhatsApp"],
      printTips: isPt
        ? "Imprima em Papel Fotográfico Glossy 230g para que o vermelho e o azul do uniforme do herói fiquem bem vivos."
        : "Imprime en Papel Fotográfico Glossy 230g para que el contraste rojo telaraña y azul eléctrico se vean nítidos y profesionales."
    };
  }

  if (cleanTheme.includes('fazend') || cleanTheme.includes('granja') || cleanTheme.includes('farm')) {
    return {
      themeName: isPt ? `Fazendinha Alegre de ${name}` : `Granjita Encantada de ${name}`,
      colorPalette: [
        { name: isPt ? "Amarelo Girassol" : "Amarillo Girasol", hex: "#FBC02D", role: isPt ? "Cor Principal" : "Color Principal" },
        { name: isPt ? "Verde Pasto" : "Verde Campo", hex: "#4CAF50", role: isPt ? "Cor Secundária" : "Color Secundario" },
        { name: isPt ? "Terracota Celeiro" : "Rojo Granero", hex: "#D84315", role: isPt ? "Destaque / Acento" : "Acento / Brillos" },
        { name: isPt ? "Marrom Madeira" : "Marrón Madera", hex: "#8D6E63", role: isPt ? "Fundo Suave" : "Fondo Base" }
      ],
      invitationPhrases: [
        {
          style: isPt ? "Dia no Campo" : "Día en el Campo",
          text: isPt 
            ? `Cócóricó! O galinho já cantou avisando que a Fazendinha do(a) ${name} vai abrir a porteira para seus ${age} aninhos!` 
            : `¡Kikirikí! El gallito anunció que la granjita de ${name} abre sus puertas para celebrar sus ${age} añitos.`
        },
        {
          style: isPt ? "Doce & Familiar" : "Tierno & Rustico",
          text: isPt 
            ? `Vaquinha, porquinho, pintinho e muito amor! Venha passar uma tarde deliciosa na fazendinha com ${name}.` 
            : `¡Vaqui, cerdito, ovejita y mucha ternura! Acompáñanos a festejar el cumpleaños campestre de ${name}.`
        },
        {
          style: isPt ? "Alegre" : "Alegre & Campirano",
          text: isPt 
            ? `Coloque sua botina e seu chapéu de palha! Uma tarde de muita festa e docinhos espera por você com ${name}!` 
            : `¡Ponte tus botitas de campo! Una fiesta llena de juegos y sorpresas te espera para consentir a ${name}.`
        }
      ],
      boxCandyFillings: [
        {
          boxType: isPt ? "Caixa Milk" : "Caja Milk",
          suggestedTreats: isPt ? ["Paçoquinha de amendoim", "Doce de leite em cubos", "Balas de milho ou coco"] : ["Dulce de leche en cubitos", "Gomitas en forma de frutitas", "Caramelos de maíz"]
        },
        {
          boxType: isPt ? "Valijita / Gable Box" : "Gable Box / Valijita",
          suggestedTreats: isPt ? ["Mini suco sabor maracujá/laranja", "Biscoitos amanteigados de milho", "Pipoca artesanal doce"] : ["Juguito de durazno o manzana", "Galletas de avena o maíz", "Paletas rústicas"]
        },
        {
          boxType: isPt ? "Saco de Batatinhas" : "Bolsa de Papitas",
          suggestedTreats: isPt ? ["Pipoca salgada quentinha", "Salgadinho de milho assado"] : ["Palomitas de maíz crocantes", "Snacks de maíz horneados"]
        }
      ],
      partyActivities: [
        isPt ? "Corrida dos cavalinhos de pau ou corrida do saco de estopa" : "Carrera en caballitos de palo o carrera de sacos campestres",
        isPt ? "Pescaria no lago dos patinhos de plástico" : "Pesca milagrosa en la lagunita de patitos",
        isPt ? "Colheita na hortinha: colher cenourinhas e maçãs de feltro/papel" : "La cosecha divertida: recolectar frutitas de papel en canastitas"
      ],
      recommendedPackItems: isPt 
        ? ["Caixinhas Milk", "Letras 3D", "Topos de Bolo", "Livros de Colorir"]
        : ["Cajitas Milk", "Letras 3D", "Cake Toppers", "Libritos Colorear"],
      printTips: isPt
        ? "Para o tema Fazendinha, Papel Fotográfico Matte ou Offset 240g traz uma textura aveludada campestre maravilhosa."
        : "Para granjita, el Papel Fotográfico Matte o Kraft suave resalta los tonos rústicos y campestres con gran calidez."
    };
  }

  // Generic custom dynamic procedural generator for ANY other theme input
  const titleCased = theme.charAt(0).toUpperCase() + theme.slice(1);
  const hueSeed = cleanTheme.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const hue1 = (hueSeed * 37) % 360;
  const hue2 = (hue1 + 140) % 360;
  const hue3 = (hue1 + 50) % 360;

  // Simple HSL to Hex
  function hslToHex(h: number, s: number, l: number) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`.toUpperCase();
  }

  const color1 = hslToHex(hue1, 75, 48);
  const color2 = hslToHex(hue2, 80, 52);
  const color3 = hslToHex(hue3, 85, 45);

  return {
    themeName: isPt ? `Festa Mágica ${titleCased} de ${name}` : `Fiesta Mágica ${titleCased} de ${name}`,
    colorPalette: [
      { name: isPt ? `Tom Vibrante ${titleCased}` : `Tono Vibrante ${titleCased}`, hex: color1, role: isPt ? "Cor Principal" : "Color Principal" },
      { name: isPt ? "Cor de Contraste" : "Color Contraste", hex: color2, role: isPt ? "Cor Secundária" : "Color Secundario" },
      { name: isPt ? "Acento Brilhante" : "Acento Brillante", hex: color3, role: isPt ? "Destaque / Acento" : "Acento / Brillos" },
      { name: isPt ? "Base Suave" : "Base Suave", hex: "#FFFDF9", role: isPt ? "Fundo Suave" : "Fondo Base" }
    ],
    invitationPhrases: [
      {
        style: isPt ? "Aventura & Magia" : "Aventura & Magia",
        text: isPt 
          ? `O mundo encantado de ${titleCased} vai ganhar vida para comemorar os ${age} anos de ${name}! Venha se divertir com a gente!` 
          : `¡El fascinante mundo de ${titleCased} cobra vida para celebrar los ${age} añitos de ${name}! Ven a compartir momentos inolvidables.`
      },
      {
        style: isPt ? "Festa & Emoção" : "Fiesta & Emoción",
        text: isPt 
          ? `Prepare seu melhor sorriso e venha viver um dia mágico e cheio de surpresas na festa de ${name} com o tema ${titleCased}!` 
          : `¡Prepara tu mejor sonrisa! Una celebración llena de sorpresas, risas y detalles de ${titleCased} te espera junto a ${name}.`
      },
      {
        style: isPt ? "Doce & Familiar" : "Tierno & Especial",
        text: isPt 
          ? `Nossa comemoração de ${age} aninhos será ainda mais especial com a sua presença! Esperamos você com muito carinho para festejar ${name}.` 
          : `¡Nuestra fiesta de ${age} años no sería lo mismo sin ti! Te esperamos con amor y sorpresas para celebrar a ${name}.`
      }
    ],
    boxCandyFillings: [
      {
        boxType: isPt ? "Caixa Milk" : "Caja Milk",
        suggestedTreats: isPt ? [`Bombons finos personalizados ${titleCased}`, "Marshmallows bicolores", "Balas de goma frutais"] : [`Bombones temáticos de ${titleCased}`, "Malvaviscos bicolores", "Gomitas frutales"]
      },
      {
        boxType: isPt ? "Valijita / Gable Box" : "Gable Box / Valijita",
        suggestedTreats: isPt ? ["Mini suco de caixinha", "Biscoitos decorados com glacê", "Pirulitos coloridos"] : ["Juguito individual", "Galletitas decoradas artesanales", "Paletas de caramelo"]
      },
      {
        boxType: isPt ? "Saco de Batatinhas" : "Bolsa de Papitas",
        suggestedTreats: isPt ? ["Batatas fritas crocantes", "Pipoca doce gourmet"] : ["Papas fritas crujientes", "Palomitas dulces acarameladas"]
      }
    ],
    partyActivities: [
      isPt ? `Desafio Temático de ${titleCased}: caça ao tesouro com pistas personalizadas no salão` : `Desafío temático de ${titleCased}: búsqueda del tesoro con pistas escondidas`,
      isPt ? `Dança das Estátuas com as músicas favoritas do tema ${titleCased}` : `El baile de las estatuas con la música favorita de ${titleCased}`,
      isPt ? `Oficina de desenho e colorir com os livrinhos do Pack` : `Rincón de arte y coloreado con los libritos temáticos del Pack`
    ],
    recommendedPackItems: isPt 
      ? ["Letras 3D", "Topos de Bolo", "Caixinhas Milk", "Livros de Colorir"]
      : ["Letras 3D", "Cake Toppers", "Cajitas Milk", "Libritos Colorear"],
    printTips: isPt
      ? `Para o tema ${titleCased}, imprima em Papel Fotográfico Glossy 200g a 230g na qualidade fotográfica alta para garantir cores vivas.`
      : `Para ${titleCased}, imprime en Papel Fotográfico Glossy de 200g a 230g con ajuste de 'Calidad Alta' para colores saturados y brillantes.`
  };
}

// API Route: AI Party Theme Assistant
app.post("/api/gemini/party-ideas", async (req, res) => {
  const { theme, childName, childAge, language = 'es' } = req.body;

  if (!theme || !theme.trim()) {
    return res.status(400).json({ error: "El tema de la fiesta es requerido" });
  }

  // Attempt Gemini API generation with 3.7 Flash
  const ai = getAIClient();
  if (ai) {
    try {
      const prompt = `
        Eres una decoradora de fiestas infantiles y experta en papelería creativa para mamás en América Latina.
        Genera una guía creativa, ultra personalizada y única para una fiesta con la temática EXACTA: "${theme}".
        Nombre del cumpleañero/a: ${childName || "El cumpleañero"}
        Edad a cumplir: ${childAge || 5} años.
        Idioma de respuesta: ${language === 'pt' ? 'Português' : 'Español'}.

        INSTRUCCIONES CLAVE DE PERSONALIZACIÓN:
        1. themeName: Nombre creativo del tema (ej: "Expedición Jurásica de Matías").
        2. colorPalette: 4 colores EXCLUSIVOS Y REPRESENTATIVOS de esta temática específica (hex válido como #2E7D32, nombre de fantasía y rol como "Color Principal", "Color Secundario", "Destaque / Acento", "Fondo Suave").
        3. invitationPhrases: 3 frases distintas y personalizadas con el nombre y la edad del niño/a basadas en el tema (Estilos: Aventura/Emoción, Tierno/Familiar, Divertido/Dinámico).
        4. boxCandyFillings: Dulces y golosinas específicos y creativos adaptados a este tema para "Caja Milk", "Gable Box / Valijita", "Bolsa de Papitas".
        5. partyActivities: 3 juegos o dinámicas caseras o de salón 100% temáticas adaptadas al personaje o tema.
        6. recommendedPackItems: 4 elementos indispensables del pack que debe buscar en el catálogo (ej: "Letras 3D", "Cake Toppers", "Cajitas Milk", "Bolsa Papitas", "Libritos Colorear").
        7. printTips: 1 consejo de tipo de papel y gramaje recomendado para este estilo.
      `;

      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: prompt,
        config: {
          systemInstruction: "Eres una consultora creativa y amorosa de eventos infantiles de Pack Fiesta Lista. Generas contenido siempre 100% único, vibrante y personalizado al tema exacto solicitado.",
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              themeName: { type: Type.STRING },
              colorPalette: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    name: { type: Type.STRING },
                    hex: { type: Type.STRING },
                    role: { type: Type.STRING }
                  },
                  required: ["name", "hex", "role"]
                }
              },
              invitationPhrases: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    style: { type: Type.STRING },
                    text: { type: Type.STRING }
                  },
                  required: ["style", "text"]
                }
              },
              boxCandyFillings: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    boxType: { type: Type.STRING },
                    suggestedTreats: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING }
                    }
                  },
                  required: ["boxType", "suggestedTreats"]
                }
              },
              partyActivities: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              recommendedPackItems: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              printTips: { type: Type.STRING }
            },
            required: [
              "themeName",
              "colorPalette",
              "invitationPhrases",
              "boxCandyFillings",
              "partyActivities",
              "recommendedPackItems",
              "printTips"
            ]
          }
        }
      });

      const parsedData = JSON.parse(response.text || "{}");
      if (parsedData.themeName && parsedData.colorPalette && parsedData.invitationPhrases) {
        return res.json(parsedData);
      }
    } catch (apiError) {
      console.warn("Gemini API generation encountered an issue, serving smart dynamic theme engine:", apiError);
    }
  }

  // Fallback to intelligent procedural engine ensuring customized, theme-specific response
  const dynamicResponse = generateThematicFallback(theme, childName, childAge, language);
  return res.json(dynamicResponse);
});

// Vite middleware setup
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  const server = app.listen(PORT, "0.0.0.0", () => {
    console.log(`Fiesta Mágica Delivery Portal running at http://0.0.0.0:${PORT}`);
  });

  const shutdown = () => {
    console.log("Shutting down server gracefully...");
    server.close(() => {
      process.exit(0);
    });
  };

  process.on("SIGTERM", shutdown);
  process.on("SIGINT", shutdown);
}

startServer();
