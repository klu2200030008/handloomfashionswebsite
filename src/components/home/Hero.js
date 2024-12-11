import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80"
          alt="Handloom weaving"
        />
        <div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply" />
      </div>
      
      <div className="container relative py-24 sm:py-32">
        <h1 className="heading-primary text-white">
          Artisanal Handloom Fashion
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-gray-300">
          Discover unique handcrafted textiles from skilled artisans around the world. 
          Each piece tells a story of tradition, craftsmanship, and sustainable fashion.
        </p>
        <div className="mt-10 flex gap-4">
          <button className="btn btn-primary inline-flex items-center">
            Shop Collection
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          <button className="btn btn-secondary inline-flex items-center">
            Meet Our Artisans
          </button>
        </div>
      </div>
    </div>
  );
}