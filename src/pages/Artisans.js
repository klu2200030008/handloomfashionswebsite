import React from 'react';

const ARTISANS = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    specialty: 'Silk Weaving',
    location: 'Varanasi, India',
    image: 'https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?cs=srgb&dl=pexels-olly-842811.jpg&fm=jpg'
  },
  {
    id: 2,
    name: 'Maya Devi',
    specialty: 'Cotton Handloom',
    location: 'Kutch, India',
    image: 'https://t4.ftcdn.net/jpg/03/17/72/03/360_F_317720355_sn87YEwDHHGMMYYmxiS3o3Hinkt1T3sB.jpg'
  },
  {
    id: 3,
    name: 'Rajesh Kumar',
    specialty: 'Silk Weaving',
    location: 'Varanasi, India',
    image: 'https://www.shutterstock.com/image-photo/handsome-30s-top-manager-portrait-600nw-2448610227.jpg'
  },
  {
    id: 5,
    name: 'Rajesh Kumar',
    specialty: 'Silk Weaving',
    location: 'Varanasi, India',
    image: 'https://media.istockphoto.com/id/1987655119/photo/smiling-young-businesswoman-standing-in-the-corridor-of-an-office.jpg?s=612x612&w=0&k=20&c=5N_IVGYsXoyj-H9vEiZUCLqbmmineaemQsKt2NTXGms='
  },
  {
    id: 6,
    name: 'Rajesh Kumar',
    specialty: 'Silk Weaving',
    location: 'Varanasi, India',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS89UTjoByKFsXFM3i7RmAv6IkWISM2M3J_7DtNdka3W4EJVd-yqfaqqd7c3AjpHauwcB8&usqp=CAU'
  },
  {
    id: 7,
    name: 'Rajesh Kumar',
    specialty: 'Silk Weaving',
    location: 'Varanasi, India',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa6anMnzXDiZrZ2OEo_fxPikq4Gh_7zGRCP-0_NqnNmtAQ3aAapoTKl0QcWpu3S0Alurw&usqp=CAU'
  },
  {
    id: 9,
    name: 'Rajesh Kumar',
    specialty: 'Silk Weaving',
    location: 'Varanasi, India',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa6anMnzXDiZrZ2OEo_fxPikq4Gh_7zGRCP-0_NqnNmtAQ3aAapoTKl0QcWpu3S0Alurw&usqp=CAU'
  },
  {
    id: 10,
    name: 'Rajesh Kumar',
    specialty: 'Silk Weaving',
    location: 'Varanasi, India',
    image: 'https://assets.vogue.in/photos/607d10139958e484805743e0/2:3/w_2560%2Cc_limit/Ira%2520Guha%2C%2520founder%2520and%2520CEO%2520Asan%2520Cup.jpg'
  },
  {
    id: 11,
    name: 'Rajesh Kumar',
    specialty: 'Silk Weaving',
    location: 'Varanasi, India',
    image: 'https://static.vecteezy.com/system/resources/previews/047/462/758/non_2x/positive-man-on-clean-background-photo.jpg'
  },
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