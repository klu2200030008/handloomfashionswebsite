import React from 'react';
import { FEATURED_PRODUCTS } from '../utils/productData';
import ProductCard from '../components/product/ProductCard';

/*const NAVIGATION_LINKS = [
  { name: 'Women', href: '/Women' },
  { name: 'Men', href: '/Men' },
  { name: 'Kids', href: '/Kids' },
  { name: 'Decors', href: '/Decor' },
];
*/

export default function Collections() {
  return (
    <div className="container mx-auto py-12">

      <h1 className="text-3xl font-bold mb-8">Our Collections</h1>
      {/*<button className="mt-4 w-full flex items-center justify-center gap-2 bg-white-900 text-white py-2 px-4 rounded-md hover:bg-white transition-colors">
      <nav className="hidden md:flex space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-700 hover:text-indigo-900 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          </button>
          */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURED_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}