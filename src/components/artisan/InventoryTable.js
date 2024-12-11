import React from 'react';
import Table from '../common/Table';

export default function InventoryTable() {
  const headers = ['Product', 'Stock', 'Status'];
  
  const inventory = [
    {
      product: 'Silk Saree',
      stock: 5,
      status: 'low'
    }
  ];

  const renderRow = (item, index) => (
    <tr key={index}>
      <td className="py-2 px-4">{item.product}</td>
      <td className="py-2 px-4">{item.stock}</td>
      <td className="py-2 px-4">
        <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-sm">
          Low Stock
        </span>
      </td>
    </tr>
  );

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-4">Inventory Status</h2>
        <Table headers={headers} data={inventory} renderRow={renderRow} />
      </div>
    </div>
  );
}