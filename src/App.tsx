import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MegaBarsShowcase } from './components/MegaBarsShowcase';
import { ProductCatalog } from './components/ProductCatalog';
import { MiniatureCollection } from './components/MiniatureCollection';
import { GiftingSection } from './components/GiftingSection';
import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { TrackOrderModal } from './components/TrackOrderModal';
import { OurStoryModal } from './components/OurStoryModal';
import { Footer } from './components/Footer';
import { CursorGlow } from './components/CursorGlow';
import { CartItem, Order } from './types';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  // Modals visibility
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isTrackOrderOpen, setIsTrackOrderOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);

  // Cart operations
  const handleAddToCart = (newItem: Omit<CartItem, 'id'>) => {
    setCart((prevCart) => {
      // Check if item with same productId & size exists
      const existingIndex = prevCart.findIndex(
        (item) => item.productId === newItem.productId && item.size === newItem.size
      );

      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += newItem.quantity;
        return updated;
      }

      const id = `${newItem.productId}-${newItem.size}-${Date.now()}`;
      return [...prevCart, { ...newItem, id }];
    });

    // Optionally auto open cart drawer
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleOrderPlaced = (newOrder: Order) => {
    setOrders((prev) => [newOrder, ...prev]);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#151310] text-[#e8e1dc] font-sans selection:bg-[#f2be8c]/30 relative">
      {/* Ambient Radial Cursor Glow */}
      <CursorGlow />

      {/* Top Navigation */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenStory={() => setIsStoryOpen(true)}
        onOpenTrackOrder={() => setIsTrackOrderOpen(true)}
        onNavigateSection={scrollToSection}
      />

      {/* Hero Section */}
      <Hero
        onShopNow={() => scrollToSection('catalog')}
        onExploreGifting={() => scrollToSection('gifting')}
      />

      {/* Mega Bars Carousel Showcase */}
      <MegaBarsShowcase onAddToCart={handleAddToCart} />

      {/* Main Creations Product Catalog */}
      <ProductCatalog onAddToCart={handleAddToCart} />

      {/* The 12 Miniature Gold Tray Box */}
      <MiniatureCollection onAddToCart={handleAddToCart} />

      {/* Elevate Your Gift Add-Ons */}
      <GiftingSection onAddToCart={handleAddToCart} />

      {/* Footer */}
      <Footer
        onOpenStory={() => setIsStoryOpen(true)}
        onOpenTrackOrder={() => setIsTrackOrderOpen(true)}
        onNavigateSection={scrollToSection}
      />

      {/* Modals & Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onOrderPlaced={handleOrderPlaced}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onAddToCart={handleAddToCart}
      />

      <TrackOrderModal
        isOpen={isTrackOrderOpen}
        onClose={() => setIsTrackOrderOpen(false)}
        orders={orders}
      />

      <OurStoryModal
        isOpen={isStoryOpen}
        onClose={() => setIsStoryOpen(false)}
      />
    </div>
  );
}
