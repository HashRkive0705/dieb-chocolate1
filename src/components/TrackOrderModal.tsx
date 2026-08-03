import { useState } from 'react';
import { X, Search, PackageCheck, ChefHat, Award, Truck, CheckCircle } from 'lucide-react';
import { Order } from '../types';

interface TrackOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  orders: Order[];
}

export function TrackOrderModal({ isOpen, onClose, orders }: TrackOrderModalProps) {
  const [searchId, setSearchId] = useState('');
  const [activeOrder, setActiveOrder] = useState<Order | null>(orders[0] || null);

  if (!isOpen) return null;

  const handleSearch = () => {
    const found = orders.find((o) => o.id.toLowerCase() === searchId.trim().toLowerCase());
    if (found) {
      setActiveOrder(found);
    } else {
      // Create mock track if user inputs random ID
      setActiveOrder({
        id: searchId.trim().toUpperCase() || 'DIEB-883921',
        items: [],
        subtotal: 450,
        orderType: 'delivery',
        address: '12 Boutique Boulevard, Suite 4B',
        status: 'crafting',
        createdAt: '10:30 AM',
      });
    }
  };

  const stages = [
    { key: 'received', label: 'Order Received', icon: PackageCheck, desc: 'Logged & queued for kitchen' },
    { key: 'crafting', label: 'Artisanal Crafting', icon: ChefHat, desc: 'Small-batch tempering & Molding' },
    { key: 'packaging', label: 'Gold Seal Packaging', icon: Award, desc: 'Wrapped with silk ribbon & wax seal' },
    { key: 'shipped', label: 'Out for Delivery', icon: Truck, desc: 'Handled by temperature-controlled courier' },
    { key: 'delivered', label: 'Delivered', icon: CheckCircle, desc: 'Enjoy your luxury indulgence' },
  ];

  const getStageIndex = (status: string) => {
    switch (status) {
      case 'received':
        return 0;
      case 'crafting':
        return 1;
      case 'packaging':
        return 2;
      case 'shipped':
        return 3;
      case 'delivered':
        return 4;
      default:
        return 1;
    }
  };

  const currentStageIndex = activeOrder ? getStageIndex(activeOrder.status) : 1;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative z-10 w-full max-w-xl bg-[#221f1c] rounded-2xl border border-[#50453b]/40 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 border-b border-[#50453b]/30 flex justify-between items-center bg-[#1e1b18]">
          <div className="flex items-center gap-3">
            <PackageCheck className="w-6 h-6 text-[#f2be8c]" />
            <h2 className="font-serif-display text-2xl font-bold text-[#f2be8c]">
              Track Your Confections
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-[#d4c4b7] hover:text-white p-1 rounded-full hover:bg-[#2c2a26]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Lookup Input */}
          <div className="flex gap-2">
            <input
              type="text"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              placeholder="Enter Order ID (e.g. DIEB-123456)..."
              className="flex-1 bg-[#100e0b] border border-[#50453b] focus:border-[#f2be8c] px-4 py-2.5 rounded-xl text-sm text-white placeholder-[#9c8e82] focus:outline-none"
            />
            <button
              onClick={handleSearch}
              className="bg-[#f2be8c] text-[#5b3912] font-bold px-5 py-2.5 rounded-xl hover:scale-105 active:scale-95 transition-all text-sm flex items-center gap-2 cursor-pointer"
            >
              <Search className="w-4 h-4" /> Track
            </button>
          </div>

          {/* Quick Select Recent Orders if any */}
          {orders.length > 0 && (
            <div>
              <span className="text-xs text-[#9c8e82] uppercase tracking-wider block mb-2">
                Your Recent Orders:
              </span>
              <div className="flex flex-wrap gap-2">
                {orders.map((o) => (
                  <button
                    key={o.id}
                    onClick={() => setActiveOrder(o)}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                      activeOrder?.id === o.id
                        ? 'bg-[#f2be8c] text-[#5b3912]'
                        : 'bg-[#1e1b18] text-[#f2be8c] border border-[#50453b]/30'
                    }`}
                  >
                    {o.id}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Active Order Details */}
          {activeOrder && (
            <div className="space-y-6 pt-2">
              <div className="bg-[#1e1b18] p-4 rounded-xl border border-[#50453b]/30 flex justify-between items-center text-xs">
                <div>
                  <span className="text-[#9c8e82] block">Tracking Code</span>
                  <span className="font-mono font-bold text-base text-[#f2be8c]">{activeOrder.id}</span>
                </div>
                <div className="text-right">
                  <span className="text-[#9c8e82] block">Created</span>
                  <span className="text-white font-medium">{activeOrder.createdAt}</span>
                </div>
              </div>

              {/* Live Tracking Timeline */}
              <div className="space-y-4 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#50453b]/50">
                {stages.map((stg, idx) => {
                  const IconComp = stg.icon;
                  const isDone = idx <= currentStageIndex;
                  const isCurrent = idx === currentStageIndex;

                  return (
                    <div key={stg.key} className="flex items-start gap-4 relative z-10">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                          isDone
                            ? 'bg-[#f2be8c] text-[#5b3912] shadow-[0_0_10px_rgba(242,190,140,0.5)]'
                            : 'bg-[#1e1b18] border border-[#50453b] text-[#9c8e82]'
                        }`}
                      >
                        <IconComp className="w-4 h-4" />
                      </div>

                      <div className="pt-1">
                        <h5
                          className={`font-bold text-sm leading-tight ${
                            isCurrent
                              ? 'text-[#f2be8c]'
                              : isDone
                              ? 'text-white'
                              : 'text-[#9c8e82]'
                          }`}
                        >
                          {stg.label} {isCurrent && <span className="text-[10px] bg-[#f2be8c]/20 text-[#f2be8c] px-2 py-0.5 rounded ml-2 uppercase font-mono">In Progress</span>}
                        </h5>
                        <p className="text-xs text-[#d4c4b7] mt-0.5">{stg.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
