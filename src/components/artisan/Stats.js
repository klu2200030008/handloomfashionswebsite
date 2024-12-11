import React from 'react';
import { Package, DollarSign, ShoppingCart, Users } from 'lucide-react';
import StatsCard from '../common/StatsCard';

export default function Stats() {
  const stats = [
    {
      icon: <Package className="w-8 h-8 text-indigo-600" />,
      title: 'Products',
      value: '12'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-indigo-600" />,
      title: 'Sales',
      value: '$1,234'
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-indigo-600" />,
      title: 'Orders',
      value: '8'
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: 'Customers',
      value: '45'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
}