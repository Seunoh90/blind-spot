import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { Home } from './pages/Home';
import { GateView } from './pages/GateView';
import { CharacterView } from './pages/CharacterView';
import { Shield } from 'lucide-react';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col relative w-full overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-indigo-900/10 blur-[100px]"></div>
      </div>
      
      {/* Header */}
      <header className="w-full border-b border-white[0.05] bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img src="https://5ooo.uk/crack/page/logo.png" alt="BLIND SPOT" referrerPolicy="no-referrer" className="h-8 w-auto object-contain drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]" />
          </Link>
          <nav className="flex gap-8 items-center text-sm font-medium text-slate-300">
            <Link to="/" className="hover:text-white transition-colors">홈</Link>
            <Link to="/gate" className="hover:text-purple-400 transition-colors">게이트 안내</Link>
            <a 
              href="https://crack.wrtn.ai/detail/69e646db4e1ed64414bb2e87/" 
              target="_blank" 
              rel="noreferrer"
              className="px-5 py-2.5 bg-purple-600/10 border border-purple-500/50 text-purple-400 rounded-sm hover:bg-purple-600 hover:text-white transition-all shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
            >
              플레이하기
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/5 py-12 px-6 mt-20 relative z-10 bg-zinc-950/90">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-slate-500 text-sm">
            © 2026 BLIND SPOT. ALL RIGHTS RESERVED.
          </div>
          <a
            href="https://crack.wrtn.ai/detail/69e646db4e1ed64414bb2e87/" 
            target="_blank" 
            rel="noreferrer"
            className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors underline underline-offset-4"
          >
            플레이하러 가기
          </a>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gate" element={<GateView />} />
          <Route path="/character/:id" element={<CharacterView />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
