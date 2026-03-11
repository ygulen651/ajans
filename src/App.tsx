import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './sections/Hero';
import Finale from './sections/Finale';
import Footer from './sections/Footer';
import Services from './sections/Services';
import References from './sections/References';
import Packages from './sections/Packages';
import BacklinkPackages from './sections/BacklinkPackages';
import SocialMediaPackages from './sections/SocialMediaPackages';
import Navigation from './components/Navigation';
import CustomCursor from './components/CustomCursor';
import ChatWidget from './components/ChatWidget';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    // Velocity-based skew effect
    let currentSkew = 0;
    let targetSkew = 0;
    
    const updateSkew = () => {
      currentSkew += (targetSkew - currentSkew) * 0.1;
      if (mainRef.current) {
        mainRef.current.style.transform = `skewY(${currentSkew}deg)`;
      }
      requestAnimationFrame(updateSkew);
    };
    
    const handleScroll = () => {
      const scrollSpeed = Math.abs(window.scrollY - (window as any).lastScrollY || 0);
      targetSkew = Math.min(scrollSpeed * 0.02, 3);
      (window as any).lastScrollY = window.scrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    updateSkew();
    
    // Reset skew when scroll stops
    let scrollTimeout: ReturnType<typeof setTimeout>;
    const resetSkew = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        targetSkew = 0;
      }, 100);
    };
    window.addEventListener('scroll', resetSkew, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', resetSkew);
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
    };
  }, []);

  return (
    <div className="relative bg-black min-h-screen overflow-x-hidden">
      {/* Grain overlay */}
      <div className="grain-overlay" />
      
      {/* Custom cursor */}
      <CustomCursor />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main ref={mainRef} className="relative transition-transform duration-100 ease-out will-change-transform">
        <Hero />
        <References />
        <Services />
        <Packages />
        <BacklinkPackages />
        <SocialMediaPackages />
        <Finale />
        <Footer />
      </main>

      {/* Floating Global Chat Widget */}
      <ChatWidget />
    </div>
  );
}

export default App;
