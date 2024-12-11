import React from 'react';
import { ShoppingCart, User, Menu } from 'lucide-react';
import { NAVIGATION_LINKS } from '../../utils/constants';
import { Link } from 'react-router-dom';
export default function Header() {
  
  return (
    <header className="bg-white shadow-sm">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          
        <div className="flex items-center">
            <Link to="/" className="text-2xl font-serif font-bold text-indigo-900">
              SNS HANDLOOMS
            </Link>
          </div>

          
          
          <nav className="hidden md:flex space-x-8">
            {NAVIGATION_LINKS.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-indigo-900"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
  <Link to="/cart">
    <button className="p-2 text-gray-600 hover:text-indigo-900">
      <ShoppingCart className="w-6 h-6" />
    </button>
  </Link>
  
  <Link to="/login">
    <button className="p-2 text-gray-600 hover:text-indigo-900">
      <User className="w-6 h-6" />
    </button>
  </Link>
  <button className="md:hidden p-2 text-gray-600 hover:text-indigo-900">
              <Menu className="w-6 h-6" />
            </button>
</div>
        </div>
      </div>
    </header>
  );
}