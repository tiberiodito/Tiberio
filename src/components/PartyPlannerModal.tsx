import React, { useState, useEffect } from 'react';
import { 
  X, 
  CalendarCheck, 
  Sparkles, 
  CheckCircle2, 
  Circle, 
  Plus, 
  Trash2, 
  Printer, 
  PartyPopper,
  Calendar,
  User,
  Heart
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PartyPlan } from '../types';

interface PartyPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  language?: 'es' | 'pt';
}

const DEFAULT_TIMELINE_ES = [
  {
    phase: '30 Días Antes',
    tasks: [
      { id: 't-30-1', text: 'Elegir la temática en el Pack Fiesta Mágica y abrir las plantillas en Canva' },
      { id: 't-30-2', text: 'Calcular cantidad de invitados y cajitas necesarias en la Calculadora de Papel' },
      { id: 't-30-3', text: 'Comprar los papeles recomendados (Glossy 230g y Papel Adhesivo 115g)' }
    ]
  },
  {
    phase: '15 Días Antes',
    tasks: [
      { id: 't-15-1', text: 'Personalizar la Invitación Digital (Bono 9) con foto y enviar por WhatsApp' },
      { id: 't-15-2', text: 'Editar el nombre del cumpleañero en las Letras 3D y Cake Topper en Canva' },
      { id: 't-15-3', text: 'Descargar todos los archivos editados en formato "PDF para Impresión"' }
    ]
  },
  {
    phase: '7 Días Antes',
    tasks: [
      { id: 't-7-1', text: 'Imprimir todas las hojas en calidad alta desde la impresora' },
      { id: 't-7-2', text: 'Recortar las cajitas, toppers y etiquetas escolares/golosinas con tijera y regla' },
      { id: 't-7-3', text: 'Comprar los dulces y golosinas para rellenar las cajitas y bolsitas' }
    ]
  },
  {
    phase: '2 Días Antes',
    tasks: [
      { id: 't-2-1', text: 'Marcar pliegues y pegar las cajitas con cinta doble cara' },
      { id: 't-2-2', text: 'Ensamblar el Cake Topper en capas con cinta de espuma 3D y palillos' },
      { id: 't-2-3', text: 'Imprimir los Libritos para Colorear (Bono 8) y juegos de fiesta (Bono 10)' }
    ]
  },
  {
    phase: '¡El Gran Día!',
    tasks: [
      { id: 't-0-1', text: 'Rellenar las cajitas con dulces y sellar las bolsas de papitas' },
      { id: 't-0-2', text: 'Colocar el Topper en el pastel y acomodar las Letras 3D en la mesa principal' },
      { id: 't-0-3', text: '¡Disfrutar, cantar el feliz cumpleaños y tomar muchas fotos hermosas!' }
    ]
  }
];

const DEFAULT_TIMELINE_PT = [
  {
    phase: '30 Dias Antes',
    tasks: [
      { id: 't-30-1', text: 'Escolher o tema no Kit Festa Mágica e abrir os moldes no Canva' },
      { id: 't-30-2', text: 'Calcular quantidade de convidados e caixinhas na Calculadora de Papel' },
      { id: 't-30-3', text: 'Comprar os papéis certos (Fotográfico Glossy 230g e Adesivo 115g)' }
    ]
  },
  {
    phase: '15 Dias Antes',
    tasks: [
      { id: 't-15-1', text: 'Personalizar o Convite Digital (Bônus 9) com foto e mandar no WhatsApp' },
      { id: 't-15-2', text: 'Editar nome e idade da criança nas Letras 3D e Topo de Bolo no Canva' },
      { id: 't-15-3', text: 'Baixar todos os arquivos no formato "PDF para Impressão"' }
    ]
  },
  {
    phase: '7 Dias Antes',
    tasks: [
      { id: 't-7-1', text: 'Imprimir todas as folhas em qualidade alta na impressora' },
      { id: 't-7-2', text: 'Cortar todas as caixinhas, topos e adesivos com tesoura e régua' },
      { id: 't-7-3', text: 'Comprar os doces e guloseimas para rechear as caixas' }
    ]
  },
  {
    phase: '2 Dias Antes',
    tasks: [
      { id: 't-2-1', text: 'Vincar as dobras e colar as caixas com fita dupla face' },
      { id: 't-2-2', text: 'Montar o Topo de Bolo em camadas com fita banana 3D' },
      { id: 't-2-3', text: 'Imprimir os Livrinhos de Colorir (Bônus 8) e jogos infantis (Bônus 10)' }
    ]
  },
  {
    phase: 'O Grande Dia!',
    tasks: [
      { id: 't-0-1', text: 'Rechear as caixinhas com doces e fechar os sacos de batatinha' },
      { id: 't-0-2', text: 'Colocar o Topo no bolo e arrumar as Letras 3D na mesa principal' },
      { id: 't-0-3', text: 'Cantar parabéns, curtir a festa e tirar fotos lindas!' }
    ]
  }
];

export const PartyPlannerModal: React.FC<PartyPlannerModalProps> = ({
  isOpen,
  onClose,
  language = 'es',
}) => {
  const isEs = language === 'es';

  // Load state from localStorage
  const [childName, setChildName] = useState<string>(() => {
    return localStorage.getItem('fiesta_child_name') || '';
  });
  const [childAge, setChildAge] = useState<string>(() => {
    return localStorage.getItem('fiesta_child_age') || '5';
  });
  const [partyTheme, setPartyTheme] = useState<string>(() => {
    return localStorage.getItem('fiesta_party_theme') || '';
  });
  const [partyDate, setPartyDate] = useState<string>(() => {
    return localStorage.getItem('fiesta_party_date') || '';
  });

  const [checkedTasks, setCheckedTasks] = useState<string[]>(() => {
    const saved = localStorage.getItem('fiesta_checked_tasks');
    return saved ? JSON.parse(saved) : [];
  });

  const [customTasks, setCustomTasks] = useState<{ id: string; text: string; done: boolean }[]>(() => {
    const saved = localStorage.getItem('fiesta_custom_tasks');
    return saved ? JSON.parse(saved) : [];
  });

  const [newTaskInput, setNewTaskInput] = useState('');

  // Persist
  useEffect(() => {
    localStorage.setItem('fiesta_child_name', childName);
    localStorage.setItem('fiesta_child_age', childAge);
    localStorage.setItem('fiesta_party_theme', partyTheme);
    localStorage.setItem('fiesta_party_date', partyDate);
    localStorage.setItem('fiesta_checked_tasks', JSON.stringify(checkedTasks));
    localStorage.setItem('fiesta_custom_tasks', JSON.stringify(customTasks));
  }, [childName, childAge, partyTheme, partyDate, checkedTasks, customTasks]);

  const timeline = isEs ? DEFAULT_TIMELINE_ES : DEFAULT_TIMELINE_PT;
  const totalStandardTasks = timeline.reduce((acc, curr) => acc + curr.tasks.length, 0);
  const totalAllTasks = totalStandardTasks + customTasks.length;
  const totalCompleted = checkedTasks.length + customTasks.filter(t => t.done).length;
  const progress = totalAllTasks > 0 ? Math.round((totalCompleted / totalAllTasks) * 100) : 0;

  const toggleTask = (id: string) => {
    if (checkedTasks.includes(id)) {
      setCheckedTasks(checkedTasks.filter(t => t !== id));
    } else {
      setCheckedTasks([...checkedTasks, id]);
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 }
      });
    }
  };

  const addCustomTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskInput.trim()) return;
    const newTask = {
      id: `custom-${Date.now()}`,
      text: newTaskInput.trim(),
      done: false
    };
    setCustomTasks([...customTasks, newTask]);
    setNewTaskInput('');
  };

  const toggleCustomTask = (id: string) => {
    setCustomTasks(customTasks.map(t => {
      if (t.id === id) {
        const nextState = !t.done;
        if (nextState) {
          confetti({ particleCount: 30, spread: 50, origin: { y: 0.7 } });
        }
        return { ...t, done: nextState };
      }
      return t;
    }));
  };

  const removeCustomTask = (id: string) => {
    setCustomTasks(customTasks.filter(t => t.id !== id));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200">
      
      <div 
        id="party-planner-modal"
        className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
      >
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-100 bg-emerald-50/50 shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs shrink-0">
              <CalendarCheck className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h2 className="text-sm sm:text-lg font-extrabold text-slate-800 truncate">
                {isEs ? 'Cronograma & Checklist' : 'Organizador & Cronograma'}
              </h2>
              <p className="text-[11px] sm:text-xs text-slate-500 truncate">
                {isEs ? 'Tu paso a paso ordenado para la fiesta' : 'Seu checklist organizado da festa'}
              </p>
            </div>
          </div>

          <button
            id="close-planner-modal-btn"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition cursor-pointer shrink-0 ml-2"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Child & Event Profile Bar */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div>
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                {isEs ? 'Cumpleañero/a' : 'Aniversariante'}
              </label>
              <input
                type="text"
                value={childName}
                onChange={(e) => setChildName(e.target.value)}
                placeholder={isEs ? 'Nombre del niño/a' : 'Nome da criança'}
                className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-xl font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                {isEs ? 'Edad a Cumplir' : 'Idade'}
              </label>
              <input
                type="text"
                value={childAge}
                onChange={(e) => setChildAge(e.target.value)}
                placeholder="5"
                className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-xl font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                {isEs ? 'Temática Elegida' : 'Tema Escolhido'}
              </label>
              <input
                type="text"
                value={partyTheme}
                onChange={(e) => setPartyTheme(e.target.value)}
                placeholder={isEs ? 'Ej: Safari, Princesas...' : 'Ex: Safari, Stitch...'}
                className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-xl font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                {isEs ? 'Fecha de la Fiesta' : 'Data da Festa'}
              </label>
              <input
                type="date"
                value={partyDate}
                onChange={(e) => setPartyDate(e.target.value)}
                className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-xl font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>
          </div>

          {/* Progress Card */}
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-between gap-4">
            <div>
              <h3 className="text-xs font-bold text-emerald-950 flex items-center gap-2">
                <PartyPopper className="w-4 h-4 text-emerald-600" />
                {isEs 
                  ? `Preparación de la Fiesta de ${childName || 'tu peque'}`
                  : `Preparativos da Festa de ${childName || 'seu pequeno(a)'}`}
              </h3>
              <p className="text-xs text-emerald-800 mt-0.5">
                {isEs 
                  ? `Has completado ${totalCompleted} de ${totalAllTasks} tareas (${progress}%)`
                  : `Você completou ${totalCompleted} de ${totalAllTasks} tarefas (${progress}%)`}
              </p>
            </div>

            <div className="w-24 bg-white h-3 rounded-full overflow-hidden border border-emerald-300">
              <div 
                className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Timeline Phases */}
          <div className="space-y-4">
            {timeline.map((stage, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-4">
                <h4 className="text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  {stage.phase}
                </h4>

                <div className="space-y-2">
                  {stage.tasks.map((task) => {
                    const isDone = checkedTasks.includes(task.id);
                    return (
                      <button
                        key={task.id}
                        onClick={() => toggleTask(task.id)}
                        className={`w-full text-left p-2.5 rounded-xl transition flex items-start gap-3 cursor-pointer ${
                          isDone 
                            ? 'bg-emerald-50/60 text-emerald-900 line-through opacity-80' 
                            : 'bg-slate-50/80 hover:bg-slate-100 text-slate-800'
                        }`}
                      >
                        <div className="mt-0.5 shrink-0 text-emerald-600">
                          {isDone ? <CheckCircle2 className="w-4 h-4 fill-emerald-100" /> : <Circle className="w-4 h-4 text-slate-300" />}
                        </div>
                        <span className="text-xs leading-relaxed">{task.text}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Custom Tasks Section */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4">
              <h4 className="text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                {isEs ? 'Mis Notas & Tareas Personalizadas' : 'Minhas Tarefas Personalizadas'}
              </h4>

              {customTasks.length > 0 && (
                <div className="space-y-2 mb-3">
                  {customTasks.map((task) => (
                    <div
                      key={task.id}
                      className={`p-2.5 rounded-xl transition flex items-center justify-between gap-3 ${
                        task.done ? 'bg-purple-50/60 text-purple-900 line-through' : 'bg-slate-50 text-slate-800'
                      }`}
                    >
                      <button
                        onClick={() => toggleCustomTask(task.id)}
                        className="flex items-center gap-3 text-left flex-1 cursor-pointer"
                      >
                        <div className="shrink-0 text-purple-600">
                          {task.done ? <CheckCircle2 className="w-4 h-4 fill-purple-100" /> : <Circle className="w-4 h-4 text-slate-300" />}
                        </div>
                        <span className="text-xs">{task.text}</span>
                      </button>

                      <button
                        onClick={() => removeCustomTask(task.id)}
                        className="text-slate-300 hover:text-rose-500 p-1 cursor-pointer"
                        title={isEs ? 'Eliminar' : 'Excluir'}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Add Custom Task Form */}
              <form onSubmit={addCustomTask} className="flex gap-2">
                <input
                  type="text"
                  value={newTaskInput}
                  onChange={(e) => setNewTaskInput(e.target.value)}
                  placeholder={isEs ? 'Añadir tarea (ej: Encargar tarta de chocolate)...' : 'Adicionar tarefa (ex: Encomendar bolo)...'}
                  className="flex-1 px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer transition shadow-xs"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{isEs ? 'Añadir' : 'Adicionar'}</span>
                </button>
              </form>
            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>
            {isEs ? '✨ Todo se guarda automáticamente en tu navegador.' : '✨ Salvo automaticamente no seu navegador.'}
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
