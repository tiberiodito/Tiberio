import React from 'react';

export const StressSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-[#bbf2e5] via-[#aeeedc] to-[#9ee5d1] py-10 px-4 text-center relative">
      <div className="max-w-3xl mx-auto">
        {/* Title Header */}
        <div className="mb-6">
          <span className="text-3xl sm:text-4xl block mb-1">🫣</span>
          <h2 className="font-fredoka text-2xl sm:text-4xl font-extrabold text-[#0f766e] uppercase tracking-wide">
            EL ESTRÉS <span className="font-script text-3xl sm:text-5xl text-[#0d9488] capitalize font-bold lowercase">de cada fiesta es</span> REAL
          </h2>
          <p className="font-fredoka text-xl sm:text-3xl text-[#0f766e] font-extrabold mt-1">
            y lo sabemos....
          </p>
        </div>

        {/* Photo of stressed mom */}
        <div className="rounded-2xl overflow-hidden border-4 border-white shadow-xl max-w-xl mx-auto mb-6">
          <img
            src="https://res.cloudinary.com/xjvdljmn/image/upload/v1787270264/imgi_8_20250902_0120_Stressed_Party_Planner_simple_compose_01k43s783eeh3r8n4q3gax4b5j_1_bpodnm_hxhkqi.png"
            alt="Mamá estresada con preparativos de cumpleaños"
            className="w-full h-auto block"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Text Box Overlay */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl max-w-2xl mx-auto text-center border-2 border-teal-100">
          <h3 className="font-fredoka text-lg sm:text-xl font-extrabold text-slate-900 uppercase tracking-tight mb-3">
            LLEGA EL CUMPLEAÑOS Y OTRA VEZ NO SABES POR DÓNDE EMPEZAR.
          </h3>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Las decoraciones profesionales cuestan entre <strong className="text-pink-600 font-extrabold">$200 y $500</strong> por fiesta ¡y dura solo unas horas!
          </p>
        </div>
      </div>
    </section>
  );
};
