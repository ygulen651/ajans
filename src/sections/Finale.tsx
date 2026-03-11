import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { finaleConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const Finale = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const diagonalRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const text = textRef.current;
    const diagonal = diagonalRef.current;
    if (!section || !image || !text || !diagonal) return;

    // Diagonal line rotation on scroll
    const diagonalTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });

    diagonalTl.fromTo(
      diagonal,
      { rotate: 15 },
      { rotate: -15, ease: 'none' }
    );

    if (diagonalTl.scrollTrigger) {
      triggersRef.current.push(diagonalTl.scrollTrigger);
    }

    // Image depth zoom effect
    const imageTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 60%',
        end: 'center center',
        scrub: 1,
      },
    });

    imageTl.fromTo(
      image,
      {
        scale: 1.2,
        opacity: 0.5,
      },
      {
        scale: 1,
        opacity: 1,
        ease: 'none',
      }
    );

    if (imageTl.scrollTrigger) {
      triggersRef.current.push(imageTl.scrollTrigger);
    }

    // Text reveal
    const textTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 50%',
        toggleActions: 'play none none reverse',
      },
    });

    textTl.fromTo(
      text.children,
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'expo.out',
      }
    );

    if (textTl.scrollTrigger) {
      triggersRef.current.push(textTl.scrollTrigger);
    }

    // Glitch effect on title
    const title = text.querySelector('.glitch-title');
    if (title) {
      const glitchInterval = setInterval(() => {
        gsap.to(title, {
          x: 2,
          duration: 0.05,
          yoyo: true,
          repeat: 3,
          onComplete: () => {
            gsap.set(title, { x: 0 });
          },
        });
      }, 5000);

      return () => {
        clearInterval(glitchInterval);
        triggersRef.current.forEach(trigger => trigger.kill());
        triggersRef.current = [];
      };
    }

    return () => {
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
    };
  }, []);

  if (!finaleConfig.headingMain && !finaleConfig.headingAccent) return null;

  return (
    <section
      ref={sectionRef}
      id="finale"
      className="relative min-h-screen w-full bg-black overflow-hidden"
    >
      {/* Diagonal split line */}
      <div
        ref={diagonalRef}
        className="absolute top-0 left-[60%] w-px h-[200%] bg-yellow origin-top z-20"
        style={{ transform: 'rotate(15deg)' }}
      />

      <div className="relative z-10 grid lg:grid-cols-5 min-h-screen">
        {/* Text content - 60% */}
        <div className="lg:col-span-3 flex items-center px-6 lg:px-16 py-24">
          <div ref={textRef} className="max-w-2xl">
            {finaleConfig.sectionLabel && (
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-px bg-yellow" />
                <span className="font-body text-yellow text-sm uppercase tracking-[0.3em]">
                  {finaleConfig.sectionLabel}
                </span>
              </div>
            )}

            {(finaleConfig.headingMain || finaleConfig.headingAccent) && (
              <div className="relative mb-12 flex flex-col items-start">
                <div className="bg-yellow px-6 py-2 mb-4 inline-block transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <h2 className="font-display font-black text-6xl md:text-8xl lg:text-9xl text-black uppercase tracking-tighter leading-none">
                    {finaleConfig.headingMain}
                  </h2>
                </div>
                <div className="bg-yellow px-6 py-2 self-end transform rotate-1 hover:rotate-0 transition-transform duration-300 mr-4 relative group">
                  <h2 className="font-display font-black text-6xl md:text-8xl lg:text-9xl text-black uppercase tracking-tighter leading-none">
                    {finaleConfig.headingAccent}
                  </h2>
                  <img 
                    src="/images/ugi aby.png" 
                    alt="UGI"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+200px)] w-32 md:w-48 lg:w-64 h-auto pointer-events-none z-30 opacity-90 mix-blend-multiply"
                  />
                </div>
              </div>
            )}

            {finaleConfig.tagline && (
              <p className="font-body text-white/60 text-lg md:text-xl leading-relaxed mb-8">
                {finaleConfig.tagline}
              </p>
            )}

            {finaleConfig.features.length > 0 && (
              <div className="flex flex-wrap gap-6 mb-12">
                {finaleConfig.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-yellow" />
                    <span className="font-body text-white/40 text-sm uppercase tracking-wider">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {finaleConfig.ctaText && (
              <a
                href={finaleConfig.ctaHref || '#'}
                className="group inline-flex items-center gap-4 px-8 py-4 bg-yellow text-black font-display font-bold text-sm uppercase tracking-wider hover:bg-white transition-all duration-300"
                data-cursor-hover
              >
                {finaleConfig.ctaText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            )}
          </div>
        </div>

        {/* Image - 40% */}
        {finaleConfig.image && (
          <div className="lg:col-span-2 relative overflow-hidden">
            <div
              ref={imageRef}
              className="absolute inset-0"
              style={{ perspective: '1000px' }}
            >
              <img
                src={finaleConfig.image}
                alt={finaleConfig.imageAlt}
                className="w-full h-full object-cover"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />

              {/* yellow accent border */}
              <div className="absolute top-8 right-8 bottom-8 w-px bg-yellow/50" />
              <div className="absolute top-8 right-8 left-8 h-px bg-yellow/50" />
            </div>
          </div>
        )}
      </div>

      {/* Floating text decoration */}
      {finaleConfig.decorativeText && (
        <div className="absolute bottom-12 left-6 font-display font-black text-[6rem] md:text-[10rem] text-white/[0.02] leading-none pointer-events-none select-none">
          {finaleConfig.decorativeText}
        </div>
      )}
    </section>
  );
};

export default Finale;
