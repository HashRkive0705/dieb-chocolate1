import { useState } from 'react';
import { CheckCircle, Gift, Check } from 'lucide-react';
import { MINIATURE_GIFT_BOX } from '../data/products';
import { CartItem } from '../types';

interface MiniatureCollectionProps {
  onAddToCart: (item: Omit<CartItem, 'id'>) => void;
}

export function MiniatureCollection({ onAddToCart }: MiniatureCollectionProps) {
  const [added, setAdded] = useState(false);

  const handleOrder = () => {
    onAddToCart({
      productId: MINIATURE_GIFT_BOX.id,
      name: MINIATURE_GIFT_BOX.name,
      size: 'Standard',
      price: MINIATURE_GIFT_BOX.price,
      quantity: 1,
      imageUrl: MINIATURE_GIFT_BOX.imageUrl,
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <section className="bg-[#221f1c] py-24 border-y border-[#50453b]/20 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        {/* Left Column Text & Action */}
        <div className="flex-1 order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2be8c]/10 border border-[#f2be8c]/20 mb-4">
            <Gift className="w-3.5 h-3.5 text-[#f2be8c]" />
            <span className="text-[11px] font-bold text-[#f2be8c] tracking-widest uppercase">Curated Tasting Box</span>
          </div>

          <h2 className="font-serif-display text-4xl sm:text-5xl font-bold text-[#f2be8c] mb-6 leading-tight">
            The Miniature Collection
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#d4c4b7] mb-8 leading-relaxed font-normal">
            An exquisite curated selection of 12 miniature bites presented in a bespoke luxury gift box. The ultimate tasting experience for those who appreciate variety.
          </p>

          <ul className="space-y-4 mb-10 text-[#e8e1dc]">
            <li className="flex items-center gap-3 text-sm sm:text-base font-medium">
              <CheckCircle className="w-5 h-5 text-[#f2be8c] flex-shrink-0" />
              <span>12 Unique Handcrafted Flavours</span>
            </li>
            <li className="flex items-center gap-3 text-sm sm:text-base font-medium">
              <CheckCircle className="w-5 h-5 text-[#f2be8c] flex-shrink-0" />
              <span>Bespoke Luxury Gift Box Packaging</span>
            </li>
            <li className="flex items-center gap-3 text-sm sm:text-base font-medium">
              <CheckCircle className="w-5 h-5 text-[#f2be8c] flex-shrink-0" />
              <span>Personalised Gift Note Included</span>
            </li>
          </ul>

          <button
            onClick={handleOrder}
            className={`px-10 py-4 font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(242,190,140,0.3)] flex items-center justify-center gap-3 cursor-pointer ${
              added
                ? 'bg-emerald-500 text-white scale-105'
                : 'bg-[#f2be8c] text-[#5b3912] hover:scale-105 active:scale-95'
            }`}
          >
            {added ? (
              <>
                Box Added to Basket! <Check className="w-5 h-5" />
              </>
            ) : (
              `Order Gift Box - ₹${MINIATURE_GIFT_BOX.price}`
            )}
          </button>
        </div>

        {/* Right Column Gold Tray Showcase */}
        <div className="flex-1 order-1 md:order-2 w-full max-w-lg md:max-w-none">
          <div className="relative p-4 rounded-[32px] bg-gradient-to-tr from-[#f2be8c]/20 to-transparent border border-[#f2be8c]/20 shadow-2xl">
            <div className="rounded-[24px] overflow-hidden shadow-2xl aspect-[4/3] bg-[#100e0b]">
              <img
                src={MINIATURE_GIFT_BOX.imageUrl}
                alt={MINIATURE_GIFT_BOX.imageAlt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Floating Round Gift Box Seal Badge */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#f2be8c]/20 backdrop-blur-md rounded-full flex items-center justify-center border border-[#f2be8c]/30 shadow-2xl animate-pulse">
              <span className="font-serif-display font-bold text-[#f2be8c] text-center leading-none text-base tracking-wider">
                GIFT<br />BOX
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
