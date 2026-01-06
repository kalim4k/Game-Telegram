import React from 'react';
import { MousePointerClick, Mail, LockKeyhole } from 'lucide-react';

const steps = [
  {
    icon: MousePointerClick,
    title: "1. Cliquez pour Rejoindre",
    description: "Utilisez le bouton officiel pour accéder à la page de sécurisation."
  },
  {
    icon: Mail,
    title: "2. Validez vos infos",
    description: "Entrez simplement vos informations sur la page sécurisée."
  },
  {
    icon: LockKeyhole,
    title: "3. Recevez l'accès",
    description: "Le lien privé du groupe Telegram arrivera instantanément par email."
  }
];

const Guide: React.FC = () => {
  return (
    <section className="w-full bg-white border-y border-zinc-200">
      <div className="max-w-5xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-zinc-900">Comment ça marche ?</h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative p-8 bg-zinc-50 border border-zinc-100 rounded-2xl hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 group"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-indigo-600 shadow-md group-hover:scale-110 group-hover:border-indigo-100 transition-all duration-300">
                <step.icon size={26} />
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-lg font-bold text-zinc-900 mb-3">{step.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guide;