import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { servicesConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Use fromTo directly with scrolltriggers attached
    const cards = cardsRef.current.filter(Boolean);
    
    // Heading animation
    gsap.fromTo(headingRef.current, 
      { y: 50, opacity: 0 },
      {
        y: 0, 
        opacity: 1,
        duration: 1,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        }
      }
    );

    // Cards animation
    if(cards.length > 0) {
      gsap.fromTo(cards, 
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger === section) t.kill();
      });
    };
  }, []);

  return (
    <section ref={sectionRef} id="services" className="relative min-h-screen w-full bg-black py-24 overflow-hidden perspective-1000">
      
      {/* Background grid lines (matching ProductShowcase) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-yellow" />
        <div className="absolute left-2/4 top-0 bottom-0 w-px bg-yellow" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-yellow" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full">
        
        {/* Section header */}
        <div ref={headingRef} className="mb-16 text-center">
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="w-12 h-px bg-yellow" />
              <span className="font-body text-yellow text-sm uppercase tracking-[0.3em]">
                {servicesConfig.sectionLabel}
              </span>
              <div className="w-12 h-px bg-yellow" />
            </div>
          <h2 className="font-display font-black text-5xl md:text-7xl text-white uppercase tracking-tight">
             {servicesConfig.headingMain} <span className="text-yellow">{servicesConfig.headingAccent}</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {servicesConfig.services.map((service, index) => {
            const Icon = service.icon;
            // Manage borders to create the internal grid look
            const isTopRow = index < 3;
            const isLeftCol = index % 3 === 0;
            const isRightCol = index % 3 === 2;
            const borderClasses = `
              border-white/10 
              ${isTopRow ? 'border-t' : ''} 
              ${isLeftCol ? 'border-l' : ''} 
              ${isRightCol ? 'border-r' : ''} 
              border-b border-r
            `;

            return (
              <div 
                key={index}
                ref={el => { cardsRef.current[index] = el; }}
                className={`group relative p-10 hover:bg-white/[0.02] transition-colors duration-500 overflow-hidden ${borderClasses}`}
              >
                {/* Decoration */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Icon */}
                <div className="text-yellow mb-8 transform group-hover:-translate-y-2 transition-transform duration-500">
                  <Icon size={36} strokeWidth={1.5} />
                </div>
                
                {/* Content */}
                <h3 className="font-display font-black text-xl text-white mb-4 tracking-wider uppercase group-hover:text-yellow transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-body text-gray-400 text-sm leading-relaxed max-w-[90%]">
                  {service.description}
                </p>

                {/* Decorative Number */}
                <div className="absolute right-6 bottom-6 text-6xl font-display font-black text-white/[0.03] group-hover:text-white/[0.08] transition-colors duration-500 pointer-events-none select-none tracking-tighter">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Decorative large background text */}
      {servicesConfig.decorativeText && (
        <div className="absolute top-[30%] left-0 -translate-y-1/2 -translate-x-1/4 font-display font-black text-[10rem] md:text-[14rem] text-white/[0.02] leading-none pointer-events-none select-none z-0">
          {servicesConfig.decorativeText}
        </div>
      )}
    </section>
  );
}

export default Services;
