import { useState } from 'react';
import { Sparkles, Check } from 'lucide-react';
import { GIFT_OPTIONS } from '../data/products';
import { CartItem } from '../types';

interface GiftingSectionProps {
  onAddToCart: (item: Omit<CartItem, 'id'>) => void;
}

export function GiftingSection({ onAddToCart }: GiftingSectionProps) {
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const handleAddGift = (optionId: string, name: string, price: number, imageUrl: string) => {
    onAddToCart({
      productId: optionId,
      name: name,
      size: 'Standard',
      price: price,
      quantity: 1,
      imageUrl: imageUrl,
    });

    setAddedIds((prev) => ({ ...prev, [optionId]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [optionId]: false }));
    }, 1200);
  };

  return (
    <section id="gifting" className="py-24 px-5 md:px-16 max-w-[1280px] mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2be8c]/10 border border-[#f2be8c]/20 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#f2be8c]" />
          <span className="text-[11px] font-bold text-[#f2be8c] tracking-widest uppercase">Custom Add-Ons</span>
        </div>

        <h2 className="font-serif-display text-4xl sm:text-5xl font-bold text-[#f2be8c] mb-3">
          Elevate Your Gift
        </h2>
        <p className="text-[#d4c4b7] text-base">
          Add a touch of floral elegance or luxury wrapping for memorable unboxing
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {GIFT_OPTIONS.map((option) => {
          const isAdded = !!addedIds[option.id];
          return (
            <div
              key={option.id}
              className="product-card flex flex-col md:flex-row rounded-[24px] overflow-hidden group border border-[#50453b]/20 hover:border-[#f2be8c]/40 transition-all duration-500"
            >
              <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden relative">
                <img
                  src={option.imageUrl}
                  alt={option.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-8 flex flex-col justify-center flex-1">
                <h3 className="font-serif-display text-2xl font-semibold text-[#f2be8c] mb-2">
                  {option.name}
                </h3>
                <p className="text-[#d4c4b7] text-sm mb-6 leading-relaxed">
                  {option.description}
                </p>

                <button
                  onClick={() => handleAddGift(option.id, option.name, option.price, option.imageUrl)}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 w-fit flex items-center gap-2 cursor-pointer ${
                    isAdded
                      ? 'bg-emerald-500 text-white'
                      : 'border border-[#f2be8c]/40 text-[#f2be8c] hover:bg-[#f2be8c]/10 active:scale-95'
                  }`}
                >
                  {isAdded ? (
                    <>
                      Added to Gift! <Check className="w-4 h-4" />
                    </>
                  ) : (
                    `Add ${option.id === 'gift-1' ? 'to Gift' : 'Styling'} +₹${option.price}`
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
