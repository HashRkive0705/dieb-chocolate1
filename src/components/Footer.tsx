import { Share2, ThumbsUp, Instagram, Facebook } from 'lucide-react';
import { ChocolateShader } from './ChocolateShader';

interface FooterProps {
  onOpenStory: () => void;
  onOpenTrackOrder: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export function Footer({ onOpenStory, onOpenTrackOrder, onNavigateSection }: FooterProps) {
  return (
    <footer className="bg-[#100e0b] relative pt-32 pb-16 px-5 md:px-16 border-t-4 border-[#f2be8c]/30">
      {/* Top Dripping Chocolate Shader */}
      <div className="absolute top-0 left-0 w-full h-16 pointer-events-none overflow-hidden">
        <ChocolateShader className="w-full h-full opacity-40 origin-bottom" scaleY={0.5} />
      </div>

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 pt-8">
        {/* Brand Overview */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="font-serif-display text-4xl font-bold text-[#f2be8c]">dieb</h2>
          <p className="text-[#d4c4b7] text-sm max-w-sm leading-relaxed">
            Crafting small-batch, luxury chocolates in the heart of the city. Every bar is a testament to our dedication to flavor and texture.
          </p>

          <div className="flex gap-4 pt-2">
            <button
              onClick={() => alert('Shared dieb Chocolate link to clipboard!')}
              className="w-10 h-10 rounded-full border border-[#50453b] flex items-center justify-center text-[#f2be8c] hover:bg-[#f2be8c] hover:text-[#5b3912] transition-all cursor-pointer"
              title="Share dieb Chocolate"
              aria-label="Share"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => alert('Thank you for loving dieb!')}
              className="w-10 h-10 rounded-full border border-[#50453b] flex items-center justify-center text-[#f2be8c] hover:bg-[#f2be8c] hover:text-[#5b3912] transition-all cursor-pointer"
              title="Like"
              aria-label="Like"
            >
              <ThumbsUp className="w-4 h-4" />
            </button>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-[#50453b] flex items-center justify-center text-[#f2be8c] hover:bg-[#f2be8c] hover:text-[#5b3912] transition-all"
              title="Instagram"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-[#50453b] flex items-center justify-center text-[#f2be8c] hover:bg-[#f2be8c] hover:text-[#5b3912] transition-all"
              title="Facebook"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Company */}
        <div>
          <h4 className="text-xs font-bold text-[#f2be8c] uppercase mb-6 tracking-widest">
            Company
          </h4>
          <ul className="space-y-4 text-[#d4c4b7] text-sm font-medium">
            <li>
              <button
                onClick={onOpenStory}
                className="hover:text-[#f2be8c] transition-colors text-left"
              >
                Our Story
              </button>
            </li>
            <li>
              <button
                onClick={onOpenStory}
                className="hover:text-[#f2be8c] transition-colors text-left"
              >
                Artisanal Process
              </button>
            </li>
            <li>
              <button
                onClick={onOpenStory}
                className="hover:text-[#f2be8c] transition-colors text-left"
              >
                Flagship Boutiques
              </button>
            </li>
            <li>
              <button
                onClick={onOpenTrackOrder}
                className="hover:text-[#f2be8c] transition-colors text-left"
              >
                Track Order
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Support */}
        <div>
          <h4 className="text-xs font-bold text-[#f2be8c] uppercase mb-6 tracking-widest">
            Support
          </h4>
          <ul className="space-y-4 text-[#d4c4b7] text-sm font-medium">
            <li>
              <button
                onClick={onOpenStory}
                className="hover:text-[#f2be8c] transition-colors text-left"
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button
                onClick={onOpenStory}
                className="hover:text-[#f2be8c] transition-colors text-left"
              >
                Terms of Service
              </button>
            </li>
            <li>
              <button
                onClick={onOpenStory}
                className="hover:text-[#f2be8c] transition-colors text-left"
              >
                Allergens & Ingredients
              </button>
            </li>
            <li>
              <button
                onClick={onOpenStory}
                className="hover:text-[#f2be8c] transition-colors text-left"
              >
                Delivery & Shipping Info
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="max-w-[1280px] mx-auto mt-20 text-center text-[#d4c4b7]/40 text-[11px] uppercase tracking-[0.4em] font-medium border-t border-[#50453b]/20 pt-8">
        © 2026 L'Artisan Chocolatier. dieb - Handcrafted Excellence.
      </div>
    </footer>
  );
}
