import React from 'react';
import { useAuthStore } from '../../store/authStore';
import Stats from '../../components/artisan/Stats';
import OrdersTable from '../../components/admin/OrdersTable';
import InventoryTable from '../../components/artisan/InventoryTable';

export default function ArtisanDashboard() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Artisan Dashboard</h1>
          <div className="text-gray-600">Welcome, {user?.email}</div>
        </div>
        <Stats />
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <OrdersTable />
          <InventoryTable />
        </div>
      </div>
    </div>
  );
}