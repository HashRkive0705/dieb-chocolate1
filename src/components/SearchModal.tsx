import { useState } from 'react';
import { Search, X, ShoppingBag } from 'lucide-react';
import { PRODUCTS, MEGA_BARS } from '../data/products';
import { CartItem } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: Omit<CartItem, 'id'>) => void;
}

export function SearchModal({ isOpen, onClose, onAddToCart }: SearchModalProps) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const matchingProducts = PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase()) ||
      p.tags?.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const matchingMegaBars = MEGA_BARS.filter(
    (mb) =>
      mb.name.toLowerCase().includes(query.toLowerCase()) ||
      mb.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-[110] flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-2xl bg-[#221f1c] rounded-2xl border border-[#50453b]/40 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[80vh]">
        {/* Search Header */}
        <div className="p-4 sm:p-6 border-b border-[#50453b]/30 flex items-center gap-3 bg-[#1e1b18]">
          <Search className="w-5 h-5 text-[#f2be8c]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search chocolates, flavours (e.g. Kunafa, Lean, S'mores, Key Lime)..."
            className="flex-1 bg-transparent text-white placeholder-[#9c8e82] text-base focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="text-[#d4c4b7] hover:text-white p-1 rounded-full hover:bg-[#2c2a26]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results */}
        <div className="p-6 overflow-y-auto space-y-6">
          {query.trim() === '' ? (
            <div className="text-center py-8 text-[#d4c4b7] opacity-60 space-y-2">
              <p className="text-sm font-medium">Type a flavour or keyword above to search</p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {['Kunafa', 'Lean Coco', 'S\'mores', 'Key Lime', 'Tropical Crush', 'Ruby'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="text-xs bg-[#100e0b] text-[#f2be8c] px-3 py-1 rounded-full border border-[#50453b]/30 hover:border-[#f2be8c]"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : matchingProducts.length === 0 && matchingMegaBars.length === 0 ? (
            <div className="text-center py-12 text-[#d4c4b7]">
              <p className="text-lg font-serif-display mb-1">No confections found</p>
              <p className="text-xs text-[#9c8e82]">Try searching for "Pistachio", "Dark", or "Brownie"</p>
            </div>
          ) : (
            <>
              {/* Products Match */}
              {matchingProducts.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#f2be8c] mb-3">
                    Creations ({matchingProducts.length})
                  </h4>
                  <div className="space-y-3">
                    {matchingProducts.map((p) => (
                      <div
                        key={p.id}
                        className="flex items-center justify-between p-3 rounded-xl bg-[#1e1b18] border border-[#50453b]/20 hover:border-[#f2be8c]/40 transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={p.imageUrl}
                            alt={p.name}
                            className="w-12 h-12 object-cover rounded-lg"
                          />
                          <div>
                            <h5 className="font-serif-display font-semibold text-[#f2be8c] text-base">
                              {p.name}
                            </h5>
                            <p className="text-xs text-[#d4c4b7] line-clamp-1">{p.description}</p>
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            onAddToCart({
                              productId: p.id,
                              name: p.name,
                              size: 'Miniature',
                              price: p.prices.miniature,
                              quantity: 1,
                              imageUrl: p.imageUrl,
                            });
                            onClose();
                          }}
                          className="px-3.5 py-1.5 bg-[#f2be8c] text-[#5b3912] font-bold text-xs rounded-full flex items-center gap-1 hover:scale-105 active:scale-95 transition-all"
                        >
                          Add ₹{p.prices.miniature} <ShoppingBag className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Mega Bars Match */}
              {matchingMegaBars.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#f2be8c] mb-3">
                    Mega Bars ({matchingMegaBars.length})
                  </h4>
                  <div className="space-y-3">
                    {matchingMegaBars.map((mb) => (
                      <div
                        key={mb.id}
                        className="flex items-center justify-between p-3 rounded-xl bg-[#1e1b18] border border-[#50453b]/20 hover:border-[#f2be8c]/40 transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={mb.imageUrl}
                            alt={mb.name}
                            className="w-12 h-12 object-cover rounded-lg"
                          />
                          <div>
                            <h5 className="font-serif-display font-semibold text-[#f2be8c] text-base">
                              {mb.name}
                            </h5>
                            <p className="text-xs text-[#d4c4b7] line-clamp-1">{mb.description}</p>
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            onAddToCart({
                              productId: mb.id,
                              name: mb.name,
                              size: 'Mega Bar',
                              price: mb.price,
                              quantity: 1,
                              imageUrl: mb.imageUrl,
                            });
                            onClose();
                          }}
                          className="px-3.5 py-1.5 bg-[#f2be8c] text-[#5b3912] font-bold text-xs rounded-full flex items-center gap-1 hover:scale-105 active:scale-95 transition-all"
                        >
                          Add ₹{mb.price} <ShoppingBag className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
