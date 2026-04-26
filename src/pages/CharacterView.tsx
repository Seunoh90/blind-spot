import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { characters } from '../data';
import { ArrowLeft, Lock, Unlock, Zap, Heart, Shield, Activity, Fingerprint, AlertTriangle, Quote, X } from 'lucide-react';
import { cn } from '../lib/utils';

export function CharacterView() {
  const { id } = useParams();
  const character = characters.find(c => c.id === id);
  const [isSecretUnlocked, setIsSecretUnlocked] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!character) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center flex-col gap-6 text-white">
        <h1 className="text-3xl font-bold">존재하지 않는 데이터입니다.</h1>
        <Link to="/" className="text-purple-400 hover:underline">홈으로 돌아가기</Link>
      </div>
    );
  }

  const statCards = [
    { label: '나이', value: character.age, icon: Fingerprint },
    { label: '신체', value: character.height, icon: Activity },
    { label: '소속', value: character.affiliation.split('/')[0].trim(), icon: Shield },
    { label: '전투 스타일', value: character.combatStyle, icon: Zap },
    { label: '호 (好)', value: character.likes, icon: Heart },
    { label: '불호 (不好)', value: character.dislikes, icon: Heart },
  ];

  return (
    <div className="w-full pb-32">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] bg-zinc-950 overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img src={character.thumbnail} alt={character.name} referrerPolicy="no-referrer" className="w-full h-full object-cover opacity-40 blur-sm" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
        
        {/* Affiliation Logo Watermark */}
         <div className="absolute right-[-10%] top-[-10%] opacity-10 pointer-events-none">
           <img src={character.logo} alt="Logo" referrerPolicy="no-referrer" className="w-[800px] h-auto object-contain blur-[2px]" />
         </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-12">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> 뒤로 가기
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {character.quote && (
              <div className="mb-6 flex gap-3 text-white/90 items-start max-w-3xl">
                <Quote className="w-6 h-6 md:w-8 md:h-8 text-purple-400 shrink-0 opacity-80 mt-1" />
                <p className="text-2xl md:text-3xl font-bold leading-snug tracking-tight text-white drop-shadow-md break-keep">
                  {character.quote}
                </p>
              </div>
            )}
            <div className="text-purple-400 text-sm tracking-[0.2em] mb-3">CLASSIFIED REF: {character.id.toUpperCase()}</div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tight">{character.name}</h1>
            <h2 className="text-xl md:text-2xl text-slate-400 font-bold uppercase tracking-widest">{character.nameEn}</h2>
          </motion.div>
        </div>
      </section>

      {/* Main Info */}
      <section className="w-full relative z-20 max-w-7xl mx-auto px-6 -mt-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column: Stats */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1 space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              {statCards.map((stat, idx) => (
                <div key={idx} className="bg-white/[0.03] border border-white/5 p-5 rounded-xl block">
                  <stat.icon className={cn("w-5 h-5 mb-3", stat.label === '불호 (不好)' ? 'text-red-400 scale-y-[-1]' : 'text-purple-400')} />
                  <div className="text-xs text-slate-500 mb-1">{stat.label}</div>
                  <div className="text-white font-bold leading-tight break-keep">{stat.value}</div>
                </div>
              ))}
              <div className="col-span-2 bg-purple-500/10 border border-purple-500/20 p-5 rounded-xl block mt-2">
                <div className="text-xs text-purple-400 mb-1">10년 전 꿈</div>
                <div className="text-white font-bold">{character.pastDream}</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Details */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 space-y-12 pt-4"
          >
            {/* Description */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">기본 정보</h3>
              <p className="text-base text-slate-300 leading-relaxed font-medium">
                {character.description}
              </p>
              {character.personality && (
                <p className="text-base text-slate-300 leading-relaxed font-medium mt-4">
                  {character.personality}
                </p>
              )}
            </div>

            {/* NSFW Profile */}
            <div>
              <h3 className="text-xl font-bold text-red-400 mb-6 border-b border-red-500/20 pb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                NSFW 성향
              </h3>
              <div className="p-6 bg-red-950/20 border border-red-500/10 rounded-xl">
                <p className="text-base text-slate-300 leading-relaxed">
                  {character.nsfw}
                </p>
              </div>
            </div>

            {/* Secret Data */}
            {character.secretTitle && character.secretData && (
              <div>
                 <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center gap-2">
                   비공개 기록
                 </h3>
                 <div 
                   className={cn(
                     "relative overflow-hidden rounded-xl border transition-all duration-500 cursor-pointer group",
                     isSecretUnlocked ? "bg-zinc-900 border-yellow-500/30 p-8" : "bg-black border-white/10 h-32 flex items-center justify-center p-0"
                   )}
                   onClick={() => setIsSecretUnlocked(true)}
                 >
                    {!isSecretUnlocked ? (
                      <>
                        <div className="absolute inset-0 bg-white/[0.02] filter blur-xl backdrop-blur-2xl transition-all group-hover:bg-white/[0.05]" />
                        <div className="relative z-10 flex flex-col items-center gap-3 text-slate-500 group-hover:text-yellow-500 transition-colors">
                          <Lock className="w-6 h-6" />
                          <span className="font-mono text-sm tracking-widest font-bold">CLICK TO REVEAL SECRET DATA</span>
                        </div>
                      </>
                    ) : (
                      <AnimatePresence>
                        <motion.div 
                          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                          className="relative z-10"
                        >
                          <div className="flex items-center gap-3 mb-6 text-yellow-500">
                            <Unlock className="w-5 h-5" />
                            <h4 className="font-bold text-lg">{character.secretTitle}</h4>
                          </div>
                          <div className="space-y-4">
                            {character.secretData.map((text, i) => (
                              <p key={i} className="text-base text-slate-300 leading-relaxed">{text}</p>
                            ))}
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    )}
                 </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <h3 className="text-2xl font-bold text-white mb-8 w-full text-center">GALLERY</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {character.gallery.map((imgSrc, i) => (
            <motion.button
              key={i}
              onClick={() => setSelectedImage(imgSrc)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="aspect-square rounded-xl overflow-hidden bg-zinc-900 relative group border border-white/5 cursor-zoom-in"
            >
               <img src={imgSrc} alt={`${character.name} archive ${i + 1}`} referrerPolicy="no-referrer" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-110 duration-700" />
               <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-purple-500/50 transition-colors rounded-xl z-20 pointer-events-none" />
            </motion.button>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.button 
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              src={selectedImage}
              alt="Enlarged gallery view"
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

