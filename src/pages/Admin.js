import React from 'react'
import AdminDashboard from './admin/Dashboard'
import OrdersTable from '../components/admin/OrdersTable'
import Stats from '../components/admin/Stats'

export default function Admin() {
  return (
    <div>
        <AdminDashboard />
        <OrdersTable />
        <Stats />
    </div>
  )
}
