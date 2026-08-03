import { useState } from 'react';
import { ShoppingBag, Search, Menu, X, Sparkles, MapPin, PackageCheck, BookOpen } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenStory: () => void;
  onOpenTrackOrder: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export function Header({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenStory,
  onOpenTrackOrder,
  onNavigateSection
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onNavigateSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#151310]/80 backdrop-blur-xl border-b border-[#50453b]/20 shadow-[0_0_20px_rgba(212,163,115,0.1)] h-20 flex items-center transition-all">
      <nav className="max-w-[1280px] mx-auto px-5 md:px-16 w-full flex justify-between items-center">
        {/* Left Side: Menu Toggle + Brand Logo */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#f2be8c] hover:scale-105 transition-transform duration-300 p-1 rounded-lg focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <button
            onClick={() => handleNavClick('hero')}
            className="text-left font-serif-display text-3xl md:text-4xl tracking-tighter text-[#f2be8c] font-semibold hover:opacity-90 transition-opacity"
          >
            dieb
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => handleNavClick('catalog')}
            className="text-xs font-bold tracking-widest uppercase text-[#f2be8c] hover:text-[#ffdcbd] transition-colors"
          >
            Collections
          </button>
          <button
            onClick={() => handleNavClick('mega-bars')}
            className="text-xs font-bold tracking-widest uppercase text-[#d4c4b7] hover:text-[#f2be8c] transition-colors"
          >
            Mega Bars
          </button>
          <button
            onClick={() => handleNavClick('gifting')}
            className="text-xs font-bold tracking-widest uppercase text-[#d4c4b7] hover:text-[#f2be8c] transition-colors"
          >
            Gifting
          </button>
          <button
            onClick={onOpenStory}
            className="text-xs font-bold tracking-widest uppercase text-[#d4c4b7] hover:text-[#f2be8c] transition-colors"
          >
            Our Story
          </button>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-5">
          <button
            onClick={onOpenSearch}
            className="text-[#f2be8c] hover:scale-110 transition-transform p-1.5 rounded-full hover:bg-[#221f1c]"
            title="Search confections"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={onOpenCart}
            className="relative group p-1.5 rounded-full hover:bg-[#221f1c] transition-all"
            title="View Shopping Basket"
            aria-label="Shopping Basket"
          >
            <ShoppingBag className="w-5 h-5 text-[#f2be8c] group-hover:scale-110 transition-transform" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#f2be8c] text-[#5b3912] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 bg-[#1e1b18] border-b border-[#50453b]/40 p-6 shadow-2xl backdrop-blur-2xl animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => handleNavClick('catalog')}
              className="flex items-center gap-3 text-left py-2 px-3 rounded-lg text-[#f2be8c] font-bold tracking-wider hover:bg-[#2c2a26]"
            >
              <Sparkles className="w-4 h-4" /> Collections
            </button>
            <button
              onClick={() => handleNavClick('mega-bars')}
              className="flex items-center gap-3 text-left py-2 px-3 rounded-lg text-[#d4c4b7] hover:text-[#f2be8c] font-medium hover:bg-[#2c2a26]"
            >
              <Sparkles className="w-4 h-4" /> Mega Bars Showcase
            </button>
            <button
              onClick={() => handleNavClick('gifting')}
              className="flex items-center gap-3 text-left py-2 px-3 rounded-lg text-[#d4c4b7] hover:text-[#f2be8c] font-medium hover:bg-[#2c2a26]"
            >
              <Sparkles className="w-4 h-4" /> Elevate Your Gift
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenStory();
              }}
              className="flex items-center gap-3 text-left py-2 px-3 rounded-lg text-[#d4c4b7] hover:text-[#f2be8c] font-medium hover:bg-[#2c2a26]"
            >
              <BookOpen className="w-4 h-4" /> Our Artisanal Story
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrackOrder();
              }}
              className="flex items-center gap-3 text-left py-2 px-3 rounded-lg text-[#d4c4b7] hover:text-[#f2be8c] font-medium hover:bg-[#2c2a26]"
            >
              <PackageCheck className="w-4 h-4" /> Track Order Status
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
