import React from 'react';
import Table from '../common/Table';

export default function OrdersTable() {
  const headers = ['Order ID', 'Customer', 'Status', 'Amount'];
  
  const orders = [
    {
      id: '#123456',
      customer: 'John Doe',
      status: 'completed',
      amount: '$299'
    }
  ];

  const renderRow = (order, index) => (
    <tr key={index}>
      <td className="py-2 px-4">{order.id}</td>
      <td className="py-2 px-4">{order.customer}</td>
      <td className="py-2 px-4">
        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
          {order.status}
        </span>
      </td>
      <td className="py-2 px-4">{order.amount}</td>
    </tr>
  );

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
        <Table headers={headers} data={orders} renderRow={renderRow} />
      </div>
    </div>
  );
}