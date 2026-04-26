import { motion } from 'motion/react';
import { gateGuide } from '../data';
import { ShieldAlert, AlertTriangle } from 'lucide-react';

export function GateView() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <div className="flex items-center gap-4 mb-6">
          <ShieldAlert className="w-8 h-8 text-red-500" />
          <h1 className="text-3xl md:text-4xl font-bold text-white">설화형 게이트</h1>
        </div>
        <div className="p-6 md:p-8 bg-red-950/20 border border-red-500/20 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[80px]" />
          <p className="text-base text-slate-300 leading-relaxed relative z-10">
            {gateGuide.intro}
          </p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16">
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
            <h2 className="text-xl font-bold text-white">공략 5대 원칙</h2>
          </div>
          <div className="flex flex-col gap-6">
            {gateGuide.rules.map((rule, idx) => (
              <div key={idx} className="flex gap-4 group">
                <div className="text-2xl font-black text-white/10 group-hover:text-yellow-500/40 transition-colors">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">{rule.title}</h3>
                  <p className="text-sm text-slate-400">{rule.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
            <span className="text-xl">⛩️</span>
            <h2 className="text-xl font-bold text-white">계열 분류</h2>
          </div>
          <div className="grid gap-4">
            {gateGuide.types.map((type, idx) => (
              <div key={idx} className="p-6 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.05] hover:border-white/10 transition-colors">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  {type.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm">{type.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
