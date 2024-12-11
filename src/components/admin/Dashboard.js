import React from 'react';
import Stats from './Stats';
import OrdersTable from './OrdersTable';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container py-8">
        <h1 className="text-2xl font-bold mb-8">Admin Dashboard</h1>
        <Stats />
        <div className="mt-8">
          <OrdersTable />
        </div>
      </div>
    </div>
  );
}