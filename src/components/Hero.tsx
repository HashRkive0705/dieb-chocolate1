import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ChocolateShader } from './ChocolateShader';

interface HeroProps {
  onShopNow: () => void;
  onExploreGifting: () => void;
}

export function Hero({ onShopNow, onExploreGifting }: HeroProps) {
  const [sparkles, setSparkles] = useState<Array<{ id: number; left: number; top: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const generated = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 3
    }));
    setSparkles(generated);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-20 overflow-hidden bg-[#151310]">
      {/* Background WebGL Chocolate Dripping Shader */}
      <ChocolateShader className="absolute inset-0 w-full h-full opacity-60 pointer-events-none z-0" />

      {/* Dark overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#151310]/20 via-[#151310]/60 to-[#151310] pointer-events-none z-0" />

      {/* Particle Sparkles Simulation */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {sparkles.map((s) => (
          <div
            key={s.id}
            className="absolute w-[2px] h-[2px] bg-[#f2be8c] rounded-full shadow-[0_0_10px_#f2be8c] animate-pulse"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 my-auto text-center max-w-4xl mx-auto px-5 md:px-12 py-16 reveal-up">
        <span className="font-sans text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-[#f2be8c] mb-4 block flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-[#f2be8c]" /> Handcrafted Excellence
        </span>

        <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gold-shimmer mb-6 leading-tight tracking-tight">
          INDULGENT. FRESHLY MADE. IRRESISTIBLE!
        </h1>

        <p className="font-sans text-base sm:text-lg md:text-xl text-[#d4c4b7] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Luxury handcrafted chocolate bars made in small batches for gifting, celebrations, and everyday cravings.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onShopNow}
            className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-[#d4a373] to-[#f2be8c] text-[#5b3912] font-bold rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_25px_rgba(212,163,115,0.4)] flex items-center justify-center gap-2 cursor-pointer"
          >
            Shop Now <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={onExploreGifting}
            className="w-full sm:w-auto px-10 py-4 border border-[#f2be8c]/30 text-[#f2be8c] font-bold rounded-full hover:bg-[#f2be8c]/10 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
          >
            Explore Gifting
          </button>
        </div>
      </div>

      {/* Dripping Chocolate Section Divider */}
      <div className="dripping-divider relative z-10">
        <ChocolateShader className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" scaleY={0.3} />
      </div>
    </section>
  );
}
