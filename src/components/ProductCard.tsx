import { useState } from 'react';
import { ShoppingCart, Check } from 'lucide-react';
import { Product, BarSize, CartItem } from '../types';

interface ProductCardProps {
  key?: string;
  product: Product;
  onAddToCart: (item: Omit<CartItem, 'id'>) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState<BarSize>('Miniature');
  const [added, setAdded] = useState(false);

  const getPriceForSize = (size: BarSize): number => {
    switch (size) {
      case 'Miniature':
        return product.prices.miniature;
      case 'Big Bar':
        return product.prices.bigBar;
      case 'Mega Bar':
        return product.prices.megaBar;
      default:
        return product.prices.miniature;
    }
  };

  const currentPrice = getPriceForSize(selectedSize);

  const handleAdd = () => {
    onAddToCart({
      productId: product.id,
      name: product.name,
      size: selectedSize,
      price: currentPrice,
      quantity: 1,
      imageUrl: product.imageUrl,
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="product-card rounded-[24px] p-6 flex flex-col justify-between h-full relative group">
      <div>
        {/* Product Image */}
        <div className="h-64 rounded-xl mb-6 bg-cover bg-center overflow-hidden relative shadow-inner">
          <img
            src={product.imageUrl}
            alt={product.imageAlt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          {product.isBestseller && (
            <span className="absolute top-3 left-3 bg-[#f2be8c] text-[#5b3912] px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-md">
              BEST SELLER
            </span>
          )}
        </div>

        {/* Title & Description */}
        <h3 className="font-serif-display text-2xl text-[#f2be8c] mb-2 font-semibold">
          {product.name}
        </h3>
        <p className="text-[#d4c4b7] text-sm mb-6 leading-relaxed">
          {product.description}
        </p>
      </div>

      <div>
        {/* Size Selector Buttons */}
        <div className="space-y-4 mb-6">
          <div className="flex gap-2">
            {(['Miniature', 'Big Bar', 'Mega Bar'] as BarSize[]).map((size) => {
              const isActive = selectedSize === size;
              return (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#f2be8c]/10 text-[#f2be8c] border-[#f2be8c] shadow-[0_0_10px_rgba(242,190,140,0.2)]'
                      : 'border-[#50453b] text-[#d4c4b7] hover:border-[#f2be8c]/50'
                  }`}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>

        {/* Price & Add to Cart Action */}
        <div className="flex justify-between items-center pt-2 border-t border-[#50453b]/20">
          <span className="text-2xl font-bold text-[#f2be8c]">₹{currentPrice}</span>
          <button
            onClick={handleAdd}
            className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer ${
              added
                ? 'bg-emerald-500 text-white scale-105'
                : 'bg-[#f2be8c] text-[#5b3912] hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(242,190,140,0.2)]'
            }`}
          >
            {added ? (
              <>
                Added <Check className="w-4 h-4" />
              </>
            ) : (
              <>
                Add <ShoppingCart className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
