import React from 'react';
import { useAuthStore } from '../../store/authStore';
import Stats from '../../components/admin/Stats';
import OrdersTable from '../../components/admin/OrdersTable';

export default function AdminDashboard() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="text-gray-600">Welcome, {user?.email}</div>
        </div>
        <Stats />
        <div className="mt-8">
          <OrdersTable />
        </div>
      </div>
    </div>
  );
}