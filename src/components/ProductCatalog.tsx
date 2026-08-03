import { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { CartItem } from '../types';

interface ProductCatalogProps {
  onAddToCart: (item: Omit<CartItem, 'id'>) => void;
}

export function ProductCatalog({ onAddToCart }: ProductCatalogProps) {
  const [activeTag, setActiveTag] = useState<string>('All');

  const allTags = ['All', 'Dark', 'Milk', 'Ruby', 'Kunafa', 'Brownie', 'Marshmallow', 'Key Lime'];

  const filteredProducts = PRODUCTS.filter((product) => {
    if (activeTag === 'All') return true;
    return product.tags?.some((t) => t.toLowerCase() === activeTag.toLowerCase());
  });

  return (
    <section id="catalog" className="py-24 px-5 md:px-16 max-w-[1280px] mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-xs font-bold tracking-[0.25em] text-[#f2be8c] uppercase mb-2 block">
          Artisanal Creations
        </span>
        <h2 className="font-serif-display text-4xl sm:text-5xl font-bold text-[#f2be8c] mb-4">
          Our Creations
        </h2>
        <div className="w-24 h-1 bg-[#f2be8c] mx-auto rounded-full mb-8 shadow-[0_0_10px_rgba(242,190,140,0.5)]" />

        {/* Category Tag Pills */}
        <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                activeTag === tag
                  ? 'bg-[#f2be8c] text-[#5b3912] shadow-[0_0_15px_rgba(242,190,140,0.3)] scale-105'
                  : 'bg-[#221f1c] text-[#d4c4b7] border border-[#50453b]/30 hover:border-[#f2be8c]/50'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Creations */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  );
}
