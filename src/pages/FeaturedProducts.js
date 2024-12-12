import React from 'react';
import ProductCard from '../components/product/ProductCard';
import { FEATURED_PRODUCTS } from '../utils/productData';

export default function FeaturedProducts() {
  return (
    <section className="bg-white py-16">
      <div className="container">
        <div className="text-center">
          <h2 className="heading-secondary text-gray-900">Featured Collections</h2>
          <p className="mt-4 text-lg text-body">
            Discover our handpicked selection of exceptional handloom pieces
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}