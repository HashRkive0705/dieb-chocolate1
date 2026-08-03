import { useRef } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag, Sparkles } from 'lucide-react';
import { MEGA_BARS } from '../data/products';
import { CartItem } from '../types';

interface MegaBarsShowcaseProps {
  onAddToCart: (item: Omit<CartItem, 'id'>) => void;
}

export function MegaBarsShowcase({ onAddToCart }: MegaBarsShowcaseProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="mega-bars" className="py-20 bg-[#100e0b] overflow-hidden border-t border-[#50453b]/10 relative">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-[#f2be8c]" />
            <span className="text-xs font-bold tracking-widest text-[#f2be8c] uppercase">Signature Collection</span>
          </div>
          <h2 className="font-serif-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[#f2be8c] mb-2">
            Mega Bars Showcase
          </h2>
          <p className="text-[#d4c4b7] text-base">Our signature oversized indulgence for serious chocolate lovers</p>
        </div>

        <div className="flex items-center gap-4 self-stretch md:self-auto justify-between">
          <div className="bg-[#f2be8c]/10 border border-[#f2be8c]/20 px-6 py-2.5 rounded-full shadow-[0_0_15px_rgba(242,190,140,0.1)]">
            <span className="text-[#f2be8c] font-bold tracking-widest text-sm">EVERY FLAVOUR ₹175</span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2.5 rounded-full border border-[#f2be8c]/20 text-[#f2be8c] hover:bg-[#f2be8c]/10 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2.5 rounded-full border border-[#f2be8c]/20 text-[#f2be8c] hover:bg-[#f2be8c]/10 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto no-scrollbar px-5 md:px-16 pb-10 scroll-smooth"
      >
        {MEGA_BARS.map((bar) => (
          <div
            key={bar.id}
            className="min-w-[300px] sm:min-w-[360px] md:min-w-[420px] h-80 rounded-2xl relative overflow-hidden group border border-[#50453b]/20 hover:border-[#f2be8c]/40 transition-all duration-500 flex-shrink-0 shadow-lg"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url('${bar.imageUrl}')` }}
            />
            
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#100e0b] via-[#100e0b]/50 to-transparent" />

            {/* Badge */}
            {bar.tag && (
              <div className="absolute top-4 left-4">
                <span className="bg-[#f2be8c] text-[#5b3912] px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase shadow-md">
                  {bar.tag}
                </span>
              </div>
            )}

            {/* Bottom Content */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-end">
              <h3 className="text-2xl font-serif-display text-white mb-2 font-medium group-hover:text-[#f2be8c] transition-colors">
                {bar.name}
              </h3>
              <p className="text-xs text-[#d4c4b7] line-clamp-2 mb-4 opacity-90">
                {bar.description}
              </p>

              <div className="flex justify-between items-center pt-2 border-t border-[#50453b]/30">
                <span className="text-xl font-bold text-[#f2be8c]">₹{bar.price}</span>
                <button
                  onClick={() =>
                    onAddToCart({
                      productId: bar.id,
                      name: bar.name,
                      size: 'Mega Bar',
                      price: bar.price,
                      quantity: 1,
                      imageUrl: bar.imageUrl,
                    })
                  }
                  className="bg-[#f2be8c] text-[#5b3912] px-5 py-2 rounded-full font-bold text-xs hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-md cursor-pointer"
                >
                  Add Mega Bar <ShoppingBag className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
