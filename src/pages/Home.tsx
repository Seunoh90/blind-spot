import { motion } from 'motion/react';
import { characters, gateGuide } from '../data';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export function Home() {
  return (
    <div className="w-full">
      {/* Hero / Worldview Section */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="text-purple-500 font-mono text-sm tracking-widest uppercase mb-4 block">Worldview / 2026 Korea</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            혼란의 잔재,<br/>새로운 이면의 도래.
          </h1>
          <p className="text-base text-slate-400 leading-relaxed mb-6 font-medium">
            2016년, 전 세계에 갑작스럽게 '게이트'와 초인적인 힘을 가진 '각성자', 그리고 이형의 '몬스터'들이 출현했습니다. 그로부터 10년이 지난 현재, 인류는 혼란기를 극복하고 어느 정도 안정화 단계에 접어들었습니다.
          </p>
          <p className="text-base text-slate-400 leading-relaxed">
            그러나 이면에 숨겨진 또 다른 이질적인 공간, 이곳의 법칙이 파생시킨 치명적인 균열들이 남아있습니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 p-6 md:p-8 border border-white/10 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative overflow-hidden group cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
                <h3 className="text-xl font-bold text-white">특수 게이트: 설화형 게이트</h3>
              </div>
              <p className="text-sm md:text-base text-slate-400 max-w-2xl">
                한국에서만 발생하는 특수한 형태의 위험 지정 구역. 민담과 토착 신앙의 규칙이 지배하는 이 기이한 공간의 진입 규칙을 확인하십시오.
              </p>
            </div>
            <Link to="/gate" className="shrink-0 flex items-center gap-2 text-purple-400 hover:text-purple-300 font-bold group-hover:translate-x-2 transition-transform">
              안내서 열람 <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Roster Section */}
      <section className="max-w-7xl mx-auto px-6 pb-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-3">주요 인물</h2>
          <p className="text-sm md:text-base text-slate-400">사건의 중심에 선 6인의 특수 각성자들.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {characters.map((char, index) => (
            <Link key={char.id} to={`/character/${char.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-xl aspect-[3/4] overflow-hidden bg-zinc-900 border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer"
              >
                {/* Image */}
                <div className="absolute inset-0 bg-zinc-950" /> {/* Base background to avoid glitchiness */}
                <img 
                  src={char.thumbnail} 
                  alt={char.name}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity group-hover:scale-105 duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-purple-400 font-medium text-sm tracking-wide mb-2">
                    {char.affiliation.split('/')[0].trim()}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1 shadow-black/50">{char.name}</h3>
                  <div className="text-slate-300 font-medium text-base tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-1">
                    {char.nameEn}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
