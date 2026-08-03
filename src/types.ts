export type BarSize = 'Miniature' | 'Big Bar' | 'Mega Bar' | 'Standard';

export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  category: 'Creations' | 'Mega Bars' | 'Gift Boxes';
  prices: {
    miniature: number;
    bigBar: number;
    megaBar: number;
  };
  tags?: string[];
  isBestseller?: boolean;
}

export interface MegaBar {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  imageAlt: string;
  isBestseller?: boolean;
  tag?: string;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  size: BarSize;
  price: number;
  quantity: number;
  imageUrl?: string;
}

export interface GiftOption {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  imageAlt: string;
}

export type OrderType = 'delivery' | 'pickup';

export interface Order {
  id: string;
  items: CartItem[];
  subtotal: number;
  orderType: OrderType;
  phone?: string;
  address?: string;
  note?: string;
  status: 'received' | 'crafting' | 'packaging' | 'shipped' | 'delivered';
  createdAt: string;
}
