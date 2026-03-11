import { useState } from 'react';
import { packagesConfig } from '../config';
import { Check, Download, ChevronRight } from 'lucide-react';

export default function Packages() {
  const [activeTab, setActiveTab] = useState(packagesConfig.tabs[0].id);

  return (
    <section id="packages" className="relative w-full bg-black text-white">
      {/* 1. Top Banner */}
      <div className="relative border-y border-white/10 bg-black py-16 px-6 overflow-hidden">
        {/* Abstract pattern background overlay */}
        <div 
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 c 20 20, 40 20, 60 0 s 40 -20, 60 0' stroke='%23ffffff' stroke-width='2' fill='none' /%3E%3C/svg%3E")`, 
            backgroundSize: '100px 100px' 
          }}
        />
        
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 text-white/80 text-sm mb-6 font-medium tracking-wide">
            <a href="#" className="hover:text-white transition-colors">Ana Sayfa</a>
            <ChevronRight size={14} />
            <span className="text-white">Web Sitesi Paketleri</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-6 uppercase tracking-tight">
            {packagesConfig.headingMain} <span className="text-yellow">{packagesConfig.headingAccent}</span>
          </h2>
          <p className="max-w-4xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed font-body">
            {packagesConfig.description}
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 xl:px-0 py-16">
        
        {/* 2. Value Props (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {packagesConfig.valueProps.map((prop, idx) => {
            const Icon = prop.icon;
            return (
              <div key={idx} className="bg-black border border-white/10 rounded-xl p-8 flex flex-col items-center text-center group hover:bg-white/[0.02] transition-colors">
                <div className="text-yellow mb-6 transform group-hover:-translate-y-2 transition-transform duration-500">
                  <Icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-display font-black mb-3 text-white tracking-wider uppercase">{prop.title}</h3>
                <p className="text-gray-400 font-body leading-relaxed text-sm">
                  {prop.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* 3. Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {packagesConfig.pricingPlans.map((plan, idx) => {
            const isPopular = plan.isPopular;
            const containerClasses = isPopular 
              ? "bg-[#111111] border border-yellow/50 text-white transform lg:-translate-y-4 shadow-[0_0_30px_rgba(250,204,21,0.1)] relative" 
              : "bg-black border border-white/10 text-white relative";
            const btnClasses = isPopular
              ? "bg-yellow text-black hover:bg-white w-full py-4 font-display font-black tracking-widest uppercase text-sm transition-colors flex items-center justify-center gap-2"
              : "bg-transparent border border-white/20 text-white hover:border-yellow hover:text-yellow w-full py-4 font-display font-black tracking-widest uppercase text-sm transition-colors flex items-center justify-center gap-2";

            return (
              <div key={idx} className={`rounded-2xl flex flex-col overflow-hidden group hover:border-yellow/50 transition-colors duration-500 ${containerClasses}`}>
                 
                 {isPopular && (
                   <div className="absolute top-0 right-0 left-0 bg-yellow text-black text-center text-xs font-bold uppercase tracking-widest py-1">
                     En Çok Tercih Edilen
                   </div>
                 )}
                 
                 {/* Header */}
                 <div className={`text-center pb-6 px-6 relative z-10 ${isPopular ? "pt-10" : "pt-8"}`}>
                    <h3 className="text-2xl font-display font-black tracking-wider uppercase mb-2 group-hover:text-yellow transition-colors">{plan.name}</h3>
                 </div>
                 
                 {/* Divider */}
                 <div className="relative flex justify-center items-center mb-6 px-6">
                    <div className={`h-px w-full ${isPopular ? "bg-white/10" : "bg-white/5"}`} />
                    <div className="absolute top-1/2 -translate-y-1/2 text-yellow bg-black px-2">
                       <plan.icon size={16} strokeWidth={1.5} />
                    </div>
                 </div>

                 {/* Price */}
                 <div className="text-center mb-8 px-6">
                   <div className="text-4xl font-display font-black">{plan.price}</div>
                 </div>

                 {/* Features List */}
                 <div className="flex-grow px-8 pb-6 space-y-8 font-body">
                    <div>
                      <h4 className="font-display font-bold mb-4 text-xs tracking-[0.2em] uppercase text-gray-500">Özellikler</h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-3 text-sm leading-relaxed">
                             <div className="mt-1 text-yellow shrink-0">
                               <Check size={14} strokeWidth={2} />
                             </div>
                             <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {plan.integrationFeatures && (
                      <div>
                        <h4 className="font-display font-bold mb-4 text-xs tracking-[0.2em] uppercase text-gray-500">Ücretsiz Entegrasyonlar</h4>
                        <ul className="space-y-3">
                          {plan.integrationFeatures.map((integration, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-3 text-sm leading-relaxed">
                               <div className="mt-1 text-yellow shrink-0">
                                 <Check size={14} strokeWidth={2} />
                               </div>
                               <span className="text-gray-300">{integration}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div>
                      <h4 className="font-display font-bold mb-4 text-xs tracking-[0.2em] uppercase text-gray-500">Barındırma</h4>
                      <ul className="space-y-3">
                        {plan.hostingFeatures.map((hosting, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-3 text-sm leading-relaxed">
                             <div className="mt-1 text-yellow shrink-0">
                               <Check size={14} strokeWidth={2} />
                             </div>
                             <span className="text-gray-300">{hosting}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                 </div>
                 
                 {/* Actions */}
                 <div className="p-6 mt-auto">
                   <button className={btnClasses}>
                     <Download size={18} />
                     <span>Satın Al</span>
                   </button>
                 </div>
              </div>
            );
          })}
        </div>

        {/* 4. Tabbed Features Section */}
        <div className="max-w-5xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {packagesConfig.tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-8 py-4 rounded-xl font-display font-black tracking-wider uppercase text-sm transition-all duration-300
                    ${isActive 
                      ? "bg-yellow text-black" 
                      : "bg-transparent border border-white/10 text-gray-500 hover:border-yellow hover:text-yellow"
                    }
                  `}
                >
                  <TabIcon size={18} className={isActive ? "text-black" : ""} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-in fade-in duration-500">
             {packagesConfig.tabs.find(t => t.id === activeTab)?.cards.map((card, idx) => {
               const CardIcon = card.icon;
               return (
                 <div key={`${activeTab}-${idx}`} className="bg-black border border-white/10 p-8 rounded-2xl hover:border-yellow/50 transition-colors text-center flex flex-col items-center group">
                   <div className="mb-6 text-yellow transform group-hover:-translate-y-2 transition-transform duration-500">
                     <CardIcon size={36} strokeWidth={1.5} />
                   </div>
                   <h4 className="font-display font-black uppercase tracking-wider text-xl mb-3 text-white">{card.title}</h4>
                   <p className="font-body text-gray-400 text-sm leading-relaxed">{card.desc}</p>
                 </div>
               );
             })}
          </div>
        </div>

      </div>
    </section>
  );
}
