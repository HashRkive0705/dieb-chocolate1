import { useState } from 'react';
import { X, Trash2, ShoppingBag, Plus, Minus, Send, CheckCircle2, Copy } from 'lucide-react';
import { CartItem, OrderType, Order } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onOrderPlaced: (order: Order) => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOrderPlaced
}: CartDrawerProps) {
  const [orderType, setOrderType] = useState<OrderType>('delivery');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');
  const [copied, setCopied] = useState(false);
  const [lastPlacedOrder, setLastPlacedOrder] = useState<Order | null>(null);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    const orderId = `DIEB-${Math.floor(100000 + Math.random() * 900000)}`;

    let message = `Hello dieb Chocolate! 🍫 I would like to place an order:%0A%0A`;
    message += `Order Reference ID: ${orderId}%0A%0A`;
    cart.forEach((item) => {
      message += `• ${item.name} (${item.size}) × ${item.quantity} = ₹${item.price * item.quantity}%0A`;
    });

    message += `%0ASubtotal: ₹${subtotal}`;
    message += `%0AOrder Type: ${orderType.toUpperCase()}`;

    if (phone.trim()) {
      message += `%0ACustomer Phone: ${phone.trim()}`;
    }

    if (orderType === 'delivery') {
      message += `%0ADelivery Address: ${address.trim() || 'Address to be confirmed'}`;
    }

    if (note.trim()) {
      message += `%0APersonal Note: ${note.trim()}`;
    }

    const newOrder: Order = {
      id: orderId,
      items: [...cart],
      subtotal,
      orderType,
      phone: phone.trim(),
      address,
      note,
      status: 'received',
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    onOrderPlaced(newOrder);
    setLastPlacedOrder(newOrder);
    onClearCart();

    // Open WhatsApp with 70033 88674 (India +91)
    window.open(`https://wa.me/917003388674?text=${message}`, '_blank');
  };

  const copyOrderId = () => {
    if (lastPlacedOrder) {
      navigator.clipboard.writeText(lastPlacedOrder.id);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Slide-in Drawer */}
      <div className="relative z-10 w-full sm:w-[450px] bg-[#2c2a26] h-full shadow-2xl flex flex-col transform transition-transform duration-500 animate-in slide-in-from-right">
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#50453b]/30 flex justify-between items-center bg-[#221f1c]">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-[#f2be8c]" />
            <h2 className="font-serif-display text-2xl font-bold text-[#f2be8c]">
              Your Indulgence
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-[#d4c4b7] hover:text-[#f2be8c] p-2 rounded-full hover:bg-[#373430] transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Order Confirmation Screen if just placed */}
        {lastPlacedOrder ? (
          <div className="flex-1 overflow-y-auto p-8 flex flex-col justify-center items-center text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-[#f2be8c]/10 border border-[#f2be8c]/30 flex items-center justify-center text-[#f2be8c]">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>

            <div>
              <span className="text-xs font-bold tracking-widest text-[#f2be8c] uppercase block mb-1">
                Order Received
              </span>
              <h3 className="font-serif-display text-2xl font-bold text-white mb-2">
                Thank You for Choosing dieb
              </h3>
              <p className="text-sm text-[#d4c4b7]">
                Your artisanal confections order has been logged!
              </p>
            </div>

            <div className="w-full bg-[#1e1b18] p-4 rounded-xl border border-[#50453b]/40 text-left space-y-2">
              <div className="flex justify-between items-center text-xs text-[#d4c4b7]">
                <span>Order Reference Number</span>
                <button
                  onClick={copyOrderId}
                  className="flex items-center gap-1 text-[#f2be8c] hover:underline"
                >
                  <Copy className="w-3 h-3" /> {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
              <p className="font-mono text-lg font-bold text-[#f2be8c]">{lastPlacedOrder.id}</p>
              <div className="text-xs text-[#d4c4b7] pt-2 border-t border-[#50453b]/20 flex justify-between">
                <span>Status: <strong className="text-emerald-400 capitalize">{lastPlacedOrder.status}</strong></span>
                <span>Subtotal: <strong>₹{lastPlacedOrder.subtotal}</strong></span>
              </div>
            </div>

            <div className="w-full space-y-3">
              <button
                onClick={() => setLastPlacedOrder(null)}
                className="w-full py-3 bg-[#f2be8c] text-[#5b3912] font-bold rounded-xl hover:scale-[1.02] active:scale-95 transition-all text-sm cursor-pointer"
              >
                Place Another Order
              </button>
              <button
                onClick={onClose}
                className="w-full py-3 border border-[#50453b] text-[#d4c4b7] font-semibold rounded-xl hover:text-white transition-all text-sm cursor-pointer"
              >
                Continue Browsing
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Cart Items List */}
            <div className="flex-grow overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-[#d4c4b7] opacity-60 space-y-4 py-16">
                  <ShoppingBag className="w-16 h-16 stroke-1 text-[#f2be8c]" />
                  <div>
                    <p className="font-serif-display text-xl text-white mb-1">Your basket is currently empty</p>
                    <p className="text-xs">Explore our handcrafted creations to add items.</p>
                  </div>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 bg-[#1e1b18] p-4 rounded-xl border border-[#50453b]/20 hover:border-[#f2be8c]/30 transition-all"
                  >
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif-display font-semibold text-[#f2be8c] text-base truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-[#d4c4b7]">{item.size}</p>
                      <span className="font-bold text-sm text-white mt-1 block">
                        ₹{item.price * item.quantity}
                      </span>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-2 bg-[#2c2a26] p-1 rounded-lg border border-[#50453b]">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="p-1 hover:text-[#f2be8c] text-[#d4c4b7] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-bold w-4 text-center text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="p-1 hover:text-[#f2be8c] text-[#d4c4b7] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Remove Item */}
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-red-400/70 hover:text-red-400 p-1.5 transition-colors"
                      title="Remove item"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Drawer Footer with Order Form */}
            {cart.length > 0 && (
              <div className="p-6 bg-[#1e1b18] border-t border-[#50453b]/30 space-y-5">
                {/* Subtotal */}
                <div className="flex justify-between items-center text-lg font-sans">
                  <span className="text-[#d4c4b7]">Subtotal</span>
                  <span className="text-[#f2be8c] font-bold text-2xl">₹{subtotal}</span>
                </div>

                {/* Delivery vs Pickup Selector */}
                <div className="flex p-1 bg-[#100e0b] rounded-full border border-[#50453b]/30">
                  <button
                    onClick={() => setOrderType('delivery')}
                    className={`flex-1 py-2 rounded-full text-xs font-bold transition-all ${
                      orderType === 'delivery'
                        ? 'bg-[#f2be8c] text-[#5b3912] shadow-md'
                        : 'text-[#d4c4b7] hover:text-white'
                    }`}
                  >
                    DELIVERY
                  </button>
                  <button
                    onClick={() => setOrderType('pickup')}
                    className={`flex-1 py-2 rounded-full text-xs font-bold transition-all ${
                      orderType === 'pickup'
                        ? 'bg-[#f2be8c] text-[#5b3912] shadow-md'
                        : 'text-[#d4c4b7] hover:text-white'
                    }`}
                  >
                    PICKUP
                  </button>
                </div>

                {/* Phone Input */}
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number (e.g. 70033 88674)"
                  className="w-full bg-[#100e0b] border-b border-[#50453b] focus:border-[#f2be8c] px-4 py-3 text-sm text-white focus:outline-none placeholder-[#9c8e82] transition-colors rounded-t-lg"
                />

                {/* Address Input */}
                {orderType === 'delivery' && (
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Delivery Address / Landmark"
                    className="w-full bg-[#100e0b] border-b border-[#50453b] focus:border-[#f2be8c] px-4 py-3 text-sm text-white focus:outline-none placeholder-[#9c8e82] transition-colors rounded-t-lg"
                  />
                )}

                {/* Note Input */}
                <input
                  type="text"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Custom Gift Note (Optional)"
                  className="w-full bg-[#100e0b] border-b border-[#50453b] focus:border-[#f2be8c] px-4 py-3 text-xs text-white focus:outline-none placeholder-[#9c8e82] transition-colors rounded-t-lg"
                />

                {/* Buttons */}
                <div>
                  <button
                    onClick={handleWhatsAppCheckout}
                    className="w-full py-3.5 bg-[#25D366] text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[#20ba59] transition-all text-sm shadow-md cursor-pointer"
                  >
                    <Send className="w-4 h-4 fill-white" /> Checkout via WhatsApp
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
