import React from 'react';

export default function About() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">About Artisanal Looms</h1>
        
        <div className="prose prose-lg">
          <p className="mb-6">
            Artisanal Looms is dedicated to preserving and promoting traditional handloom craftsmanship
            while creating sustainable livelihoods for artisans across the globe.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p className="mb-6">
            We bridge the gap between skilled artisans and global markets, ensuring fair compensation
            and the continuation of age-old weaving traditions.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Sustainability</h2>
          <p className="mb-6">
            Our commitment to sustainable fashion extends from using natural materials to ensuring
            ethical working conditions and fair trade practices.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Community Impact</h2>
          <p className="mb-6">
            By supporting Artisanal Looms, you're directly contributing to the livelihood of artisan
            communities and helping preserve traditional craftsmanship for future generations.
          </p>
        </div>
      </div>
    </div>
  );
}