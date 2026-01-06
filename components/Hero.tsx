import React from 'react';
import { VIDEO_URL } from '../constants';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full flex flex-col items-center pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      {/* Header Text */}
      <div className="text-center mb-10 fade-in">
        <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold tracking-wider mb-5 border border-indigo-100 shadow-sm">
          ACCÈS LIMITÉ
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-zinc-900">
          Le Jeu Qui Fait <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Sensation</span>
        </h1>
        <p className="text-zinc-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Ne manquez pas l'opportunité de rejoindre la communauté exclusive.
        </p>
      </div>

      {/* Video Container - Format horizontal (aspect-video) imposé partout */}
      <div className="relative w-full max-w-2xl aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-indigo-200/50 border border-zinc-200 bg-zinc-100 fade-in" style={{animationDelay: '0.2s'}}>
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src={VIDEO_URL} type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
        
        {/* Overlay Gradient at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
      </div>

      <div className="mt-10 fade-in" style={{animationDelay: '0.4s'}}>
        <Button />
      </div>
    </section>
  );
};

export default Hero;