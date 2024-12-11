import React from 'react';
import Stats from './Stats';
import OrdersTable from '../admin/OrdersTable';
import InventoryTable from './InventoryTable';

export default function ArtisanDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container py-8">
        <h1 className="text-2xl font-bold mb-8">Artisan Dashboard</h1>
        <Stats />
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <OrdersTable />
          <InventoryTable />
        </div>
      </div>
    </div>
  );
}