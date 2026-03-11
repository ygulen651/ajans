import { backlinkPackagesConfig } from '../config';
import { Check, Download, TrendingUp } from 'lucide-react';

export default function BacklinkPackages() {
  return (
    <section id="backlink-packages" className="relative w-full bg-black text-white pb-24">
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-6 uppercase tracking-tight">
            {backlinkPackagesConfig.headingMain} <span className="text-yellow">{backlinkPackagesConfig.headingAccent}</span>
          </h2>
          <p className="max-w-4xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed font-body">
            {backlinkPackagesConfig.description}
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 xl:px-0 pt-16">
        
        {/* Middle Promotional Banner */}
        <div className="max-w-4xl mx-auto mb-16 bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-yellow/30 transition-colors">
          <div className="flex items-center gap-4 text-yellow">
             <TrendingUp size={40} className="shrink-0" />
             <h3 className="text-xl md:text-2xl font-display font-black tracking-widest uppercase text-white">
                {backlinkPackagesConfig.promotionalBanner.text}
             </h3>
          </div>
          <div className="bg-yellow text-black font-display font-black px-6 py-2 rounded-lg tracking-widest text-lg transform hover:-translate-y-1 transition-transform cursor-default">
             DDA
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {backlinkPackagesConfig.pricingPlans.map((plan, idx) => {
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
                    <div className="text-gray-400 font-body text-sm tracking-widest mb-2 uppercase">{plan.level}</div>
                    <div className="inline-block bg-white/[0.05] border border-white/10 px-6 py-2 rounded-full mb-4">
                      <h3 className="text-2xl font-display font-black tracking-wider uppercase group-hover:text-yellow transition-colors">
                        {plan.name}
                      </h3>
                    </div>
                 </div>
                 
                 {/* Divider */}
                 <div className="relative flex justify-center items-center mb-6 px-6">
                    <div className={`h-px w-full ${isPopular ? "bg-white/10" : "bg-white/5"}`} />
                    <div className="absolute top-1/2 -translate-y-1/2 text-yellow bg-black px-2">
                       <plan.icon size={16} strokeWidth={1.5} />
                    </div>
                 </div>

                 {/* Features List */}
                 <div className="flex-grow px-8 pb-6 space-y-8 font-body">
                    <ul className="space-y-4">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 text-sm leading-relaxed">
                           <div className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-yellow/10 text-yellow shrink-0">
                             <Check size={12} strokeWidth={3} />
                           </div>
                           <span className={isPopular ? "text-white/90 font-medium" : "text-gray-300"}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                 </div>

                 {/* Price & Actions */}
                 <div className="text-center mt-auto p-6 pt-0">
                   <div className="text-4xl font-display font-black mb-6">{plan.price}</div>
                   <button className={btnClasses}>
                     <Download size={18} />
                     <span>Satın Al</span>
                   </button>
                 </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
