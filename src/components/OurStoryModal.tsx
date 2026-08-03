import { X, Award, Flame, HeartHandshake, ShieldCheck, MapPin } from 'lucide-react';

interface OurStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OurStoryModal({ isOpen, onClose }: OurStoryModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-2xl bg-[#221f1c] rounded-2xl border border-[#50453b]/40 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="p-6 border-b border-[#50453b]/30 flex justify-between items-center bg-[#1e1b18]">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#f2be8c] block mb-1">
              L'Artisan Chocolatier
            </span>
            <h2 className="font-serif-display text-2xl font-bold text-[#f2be8c]">
              Our Story & Craftsmanship
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-[#d4c4b7] hover:text-white p-1 rounded-full hover:bg-[#2c2a26]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-8 text-[#d4c4b7] text-sm leading-relaxed">
          {/* Main Hero Banner */}
          <div className="rounded-xl overflow-hidden relative h-48 border border-[#50453b]/30">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDduQOZ8QYc4PvW-Mwj1Up3Lljsy2SgtVLV2dV-MP_YopTnFmoLqaMfYOTw7GVc3-X1djMaU2fLaOzCXHuYPfWTlkA5eh7Llq-30K1yxFAFRNGxOOVk-cZ6m9n8s4WrQwImZgbGMW9clctcGXF3KvaGynCMPjnpOAESQ1EeQAg975BIe6dWU34eaXsQ7jC56uLhG_LkiLAWP2tyGuoZXaGhpvWhROZiH7IVmyEvUTFGDq-aXwdbZJ2_"
              alt="Tempered chocolate"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#100e0b] via-[#100e0b]/60 to-transparent p-6 flex flex-col justify-end">
              <h3 className="font-serif-display text-2xl text-[#f2be8c] font-bold">
                Handcrafted in Small Batches
              </h3>
              <p className="text-xs text-[#e8e1dc]">Crafting slow luxury from bean to bar.</p>
            </div>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#1e1b18] p-4 rounded-xl border border-[#50453b]/20 space-y-2">
              <div className="flex items-center gap-2 text-[#f2be8c] font-bold">
                <Flame className="w-4 h-4" /> Artisanal Tempering
              </div>
              <p className="text-xs text-[#d4c4b7]">
                Every bar is hand-tempered on marble slabs to ensure an unmistakable snap and glossy shine.
              </p>
            </div>

            <div className="bg-[#1e1b18] p-4 rounded-xl border border-[#50453b]/20 space-y-2">
              <div className="flex items-center gap-2 text-[#f2be8c] font-bold">
                <Award className="w-4 h-4" /> Single-Origin Beans
              </div>
              <p className="text-xs text-[#d4c4b7]">
                Sourced ethically from Ecuador, Ghana, and Madagascar, respecting sustainable cocoa farming.
              </p>
            </div>

            <div className="bg-[#1e1b18] p-4 rounded-xl border border-[#50453b]/20 space-y-2">
              <div className="flex items-center gap-2 text-[#f2be8c] font-bold">
                <ShieldCheck className="w-4 h-4" /> Allergen Safety
              </div>
              <p className="text-xs text-[#d4c4b7]">
                Made in a boutique kitchen that handles nuts (pistachios, almonds, hazelnuts) and dairy. Gluten-free options available.
              </p>
            </div>

            <div className="bg-[#1e1b18] p-4 rounded-xl border border-[#50453b]/20 space-y-2">
              <div className="flex items-center gap-2 text-[#f2be8c] font-bold">
                <HeartHandshake className="w-4 h-4" /> Fresh Daily Guarantee
              </div>
              <p className="text-xs text-[#d4c4b7]">
                We pour small daily batches to guarantee peak flavor, silkiness, and aromatic intensity.
              </p>
            </div>
          </div>

          {/* Boutiques */}
          <div className="bg-[#100e0b] p-5 rounded-xl border border-[#50453b]/30 space-y-3">
            <div className="flex items-center gap-2 text-[#f2be8c] font-serif-display text-lg font-bold">
              <MapPin className="w-5 h-5" /> Visit Our Flagship Boutiques
            </div>
            <div className="text-xs space-y-1 text-[#d4c4b7]">
              <p>• <strong>dieb Flagship Store:</strong> 12 Artisanal Way, Central Galleria, Mumbai</p>
              <p>• <strong>dieb Confectionery Lounge:</strong> 45 Luxury Boulevard, Indiranagar, Bangalore</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
