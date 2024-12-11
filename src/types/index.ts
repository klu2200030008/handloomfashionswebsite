export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  artisanId: string;
  category: string;
  materials: string[];
  stock: number;
  createdAt: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'artisan' | 'buyer' | 'marketing';
  avatar?: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface Order {
  id: string;
  buyerId: string;
  items: CartItem[];
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  totalAmount: number;
  createdAt: Date;
}