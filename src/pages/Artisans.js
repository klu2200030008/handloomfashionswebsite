import React from 'react';

const ARTISANS = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    specialty: 'Silk Weaving',
    location: 'Varanasi, India',
    image: 'https://images.unsplash.com/photo-1597516722214-acef0a45ff2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 2,
    name: 'Maya Devi',
    specialty: 'Cotton Handloom',
    location: 'Kutch, India',
    image: 'https://images.unsplash.com/photo-1590884056072-0cae2e7e5c6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }
];

export default function Artisans() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">Our Artisans</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ARTISANS.map((artisan) => (
          <div key={artisan.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={artisan.image}
              alt={artisan.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{artisan.name}</h2>
              <p className="text-gray-600 mb-2">{artisan.specialty}</p>
              <p className="text-gray-500">{artisan.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}