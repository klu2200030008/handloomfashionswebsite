import React from 'react';

export default function StatsCard({ icon, title, value }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center">
        {icon}
        <div className="ml-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-gray-600">{value}</p>
        </div>
      </div>
    </div>
  );
}