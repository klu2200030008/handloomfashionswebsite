import React from 'react';
import { Heart, ShoppingBag } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
        />
        <button className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white">
          <Heart className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${product.price}</p>
      </div>
      <button className="mt-4 w-full flex items-center justify-center gap-2 bg-indigo-900 text-white py-2 px-4 rounded-md hover:bg-indigo-800 transition-colors">
        <ShoppingBag className="w-4 h-4" />
        Add to Cart
      </button>
    </div>
  );
}