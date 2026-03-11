import { useRef, useEffect } from 'react';
import { referencesConfig } from '../config';
import gsap from 'gsap';

export default function References() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wait until all images are loaded to get the correct scrollWidth
    const handleLoad = () => {
      if (!scrollRef.current) return;
      
      const scrollWidth = scrollRef.current.scrollWidth;
      
      // Kill any existing animations to avoid duplicates
      gsap.killTweensOf(scrollRef.current);
      
      gsap.to(scrollRef.current, {
        x: -scrollWidth / 2,
        duration: 30,
        ease: 'none',
        repeat: -1,
      });
    };

    // Also check if images are already loaded (from cache)
    const images = scrollRef.current?.querySelectorAll('img');
    let loadedCount = 0;
    
    if (images && images.length > 0) {
      images.forEach(img => {
        if (img.complete) {
          loadedCount++;
        } else {
          img.addEventListener('load', () => {
            loadedCount++;
            if (loadedCount === images.length) handleLoad();
          });
        }
      });
      
      if (loadedCount === images.length) {
        handleLoad();
      }
    } else {
      handleLoad();
    }

    // Backup for cases where images might fail or take too long
    const timer = setTimeout(handleLoad, 2000);

    return () => {
      clearTimeout(timer);
      gsap.killTweensOf(scrollRef.current);
    };
  }, []);

  const logos = [...referencesConfig.logos, ...referencesConfig.logos];

  return (
    <section className="w-full bg-yellow py-12 border-y border-black/10 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <span className="text-black/60 text-[10px] uppercase tracking-[0.3em] font-display mb-2 block">
          {referencesConfig.sectionLabel}
        </span>
      </div>

      <div className="relative flex whitespace-nowrap overflow-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-yellow to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-yellow to-transparent z-10 pointer-events-none" />

        <div 
          ref={scrollRef}
          className="flex items-center gap-16 md:gap-24 px-12"
        >
          {logos.map((logo: any, idx: number) => (
            <div 
              key={`${logo.name}-${idx}`}
              className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default"
            >
              <img 
                src={logo.path} 
                alt={logo.name} 
                className="h-10 md:h-14 lg:h-16 w-auto object-contain pointer-events-none"
                style={{ minWidth: '100px' }} // Ensure there's some space even if loading
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
