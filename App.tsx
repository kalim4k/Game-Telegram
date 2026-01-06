import React from 'react';
import Hero from './components/Hero';
import Guide from './components/Guide';
import Button from './components/Button';
import { ShieldCheck } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col">
      {/* Navigation / Logo Area */}
      <nav className="w-full py-6 px-6 flex justify-center border-b border-zinc-200 bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="flex items-center gap-2 text-indigo-600">
          <ShieldCheck size={28} />
          <span className="text-xl font-bold tracking-tighter text-zinc-900">GAME<span className="text-indigo-600">INSIDER</span></span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Hero />
        <Guide />
        
        {/* Bottom CTA Section */}
        <section className="py-20 px-4 text-center bg-white border-t border-zinc-100">
          <h2 className="text-3xl font-bold mb-6 text-zinc-900">Prêt à dominer le jeu ?</h2>
          <p className="text-zinc-600 mb-8 max-w-md mx-auto">
            L'accès est limité. Rejoignez les autres joueurs dès maintenant avant la fermeture des inscriptions.
          </p>
          <Button />
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-zinc-500 text-sm border-t border-zinc-200 bg-zinc-50">
        <p>© {new Date().getFullYear()} Game Insider. Tous droits réservés.</p>
        <div className="flex justify-center gap-4 mt-4">
          <span className="cursor-pointer hover:text-zinc-800 transition-colors">Mentions Légales</span>
          <span className="cursor-pointer hover:text-zinc-800 transition-colors">Confidentialité</span>
        </div>
      </footer>

      {/* Sticky Mobile CTA - only visible on small screens when scrolling */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-zinc-200 md:hidden z-50 shadow-lg">
        <Button fullWidth className="py-3 text-sm shadow-none" />
      </div>
    </div>
  );
};

export default App;