import { socialMediaPackagesConfig } from '../config';
import { Check, X, ChevronRight, Settings } from 'lucide-react';

export default function SocialMediaPackages() {
  return (
    <section id="social-media" className="relative w-full bg-black text-white pb-24">
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
          <div className="flex items-center justify-center gap-2 text-white/50 text-xs font-display tracking-widest uppercase mb-6">
            <a href="#" className="hover:text-yellow transition-colors">Ana Sayfa</a>
            <ChevronRight size={12} />
            <span className="text-white">Paketler</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-6 uppercase tracking-tight">
            {socialMediaPackagesConfig.headingMain} <span className="text-yellow">{socialMediaPackagesConfig.headingAccent}</span>
          </h2>
          <p className="max-w-4xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed font-body">
            {socialMediaPackagesConfig.description}
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 xl:px-0 pt-16">
        
        {/* Toggle Pill */}
        <div className="flex justify-center mb-12">
            <div className="bg-yellow text-black font-display font-black tracking-widest uppercase text-sm px-8 py-3 rounded-full shadow-[0_0_20px_rgba(250,204,21,0.2)]">
                Aylık Paketler
            </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {socialMediaPackagesConfig.pricingPlans.map((plan: any, idx: number) => {
            const isPopular = plan.isPopular;
            const containerClasses = isPopular 
              ? "bg-[#111111] border border-yellow/50 text-white transform lg:-translate-y-4 shadow-[0_0_30px_rgba(250,204,21,0.1)] relative" 
              : "bg-black border border-white/10 text-white relative hover:border-yellow/30 transition-colors duration-500";
            const btnClasses = isPopular
              ? "bg-yellow text-black hover:bg-white w-full py-4 font-display font-black tracking-widest uppercase text-sm transition-colors flex items-center justify-center gap-2 rounded-lg"
              : "bg-transparent border border-white/20 text-white hover:border-yellow hover:text-yellow w-full py-4 font-display font-black tracking-widest uppercase text-sm transition-colors flex items-center justify-center gap-2 rounded-lg";

            return (
              <div key={idx} className={`rounded-3xl flex flex-col overflow-hidden group ${containerClasses}`}>
                 
                 {/* Header */}
                 <div className={`text-center pb-6 px-6 relative z-10 ${isPopular ? "pt-10" : "pt-8"}`}>
                    <h3 className="text-2xl font-display font-black tracking-wider uppercase mb-2 group-hover:text-yellow transition-colors">
                      {plan.name}
                    </h3>
                 </div>

                 {/* Features List */}
                  <div className="flex-grow px-8 pb-6 space-y-8 font-body">
                    <ul className="space-y-4">
                      {plan.features.map((feature: any, fIdx: number) => (
                        <li key={fIdx} className="flex items-start gap-4 text-sm leading-relaxed">
                           <div className={`mt-0.5 flex items-center justify-center shrink-0 w-5 h-5 rounded-full ${feature.included ? 'bg-yellow/20 text-yellow' : 'bg-red-500/10 text-red-500'}`}>
                             {feature.included ? <Check size={12} strokeWidth={3} /> : <X size={12} strokeWidth={3} />}
                           </div>
                           <span className={feature.included ? (isPopular ? "text-white/90 font-medium" : "text-gray-300") : "text-gray-600"}>
                             {feature.name}
                           </span>
                        </li>
                      ))}
                    </ul>
                 </div>

                 {/* Divider */}
                 <div className="relative flex justify-center items-center mb-6 px-6">
                    <div className="h-px w-full bg-white/10" />
                    <div className="absolute top-1/2 -translate-y-1/2 text-yellow bg-black px-2">
                       <plan.icon size={16} strokeWidth={1.5} />
                    </div>
                 </div>

                 {/* Price & Actions */}
                 <div className="text-center mt-auto p-6 pt-0">
                   <div className="text-4xl font-display font-black mb-6">{plan.price}</div>
                   <button className={btnClasses}>
                     <span>Satın Al</span>
                   </button>
                 </div>
              </div>
            );
          })}

          {/* Custom Plan Card */}
          <div className="rounded-3xl flex flex-col overflow-hidden group bg-gradient-to-br from-[#111111] to-[#1a1a05] border border-yellow/20 text-white relative hover:border-yellow/50 transition-colors duration-500">
             {/* Abstract Decor */}
             <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #facc15 0%, transparent 70%)' }} />
             
             <div className="flex-grow flex flex-col justify-center items-center p-10 text-center relative z-10">
                <Settings size={48} className="text-yellow mb-8 opacity-80" strokeWidth={1} />
                <h3 className="text-5xl font-display font-black tracking-wider mb-6 group-hover:text-yellow transition-colors">
                  {socialMediaPackagesConfig.customPlan.name}
                </h3>
                <p className="text-gray-400 font-body text-lg leading-relaxed mb-10 max-w-xs">
                  {socialMediaPackagesConfig.customPlan.description}
                </p>
                <button className="bg-transparent border border-white text-white hover:bg-white hover:text-black w-full py-4 rounded-full font-display font-black tracking-widest uppercase text-sm transition-all shadow-[0_0_20px_rgba(250,204,21,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                    {socialMediaPackagesConfig.customPlan.buttonText}
                </button>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
