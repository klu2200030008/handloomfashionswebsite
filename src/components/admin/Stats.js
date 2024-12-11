import React from 'react';
import { Users, ShoppingBag, Activity, Settings } from 'lucide-react';
import StatsCard from '../common/StatsCard';

export default function Stats() {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: 'Users',
      value: '1,234'
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-indigo-600" />,
      title: 'Orders',
      value: '56'
    },
    {
      icon: <Activity className="w-8 h-8 text-indigo-600" />,
      title: 'Revenue',
      value: '$12,345'
    },
    {
      icon: <Settings className="w-8 h-8 text-indigo-600" />,
      title: 'Products',
      value: '89'
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