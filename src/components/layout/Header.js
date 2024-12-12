import React from 'react';
import { ShoppingCart, User, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const NAVIGATION_LINKS = [
  { name: 'Discover', href: '/Discover' },
  { name: 'Artisans', href: '/Artisans' },
  { name: 'Collections', href: '/Collections' },
  { name: 'About', href: '/About' },
];

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Brand Name */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-serif font-bold text-indigo-900">
              SNS HANDLOOMS
            </Link>
          </div>

          {/* Navigation Links */}
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

          {/* Action Buttons */}
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
