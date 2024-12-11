import React from 'react';

function About() {
  return (
    React.createElement('div', { className: 'max-w-7xl mx-auto px-4 py-12' },
      React.createElement('div', { className: 'flex flex-col md:flex-row items-center gap-12' },
        React.createElement('div', { className: 'md:w-1/2' },
          React.createElement('img', {
            src: 'https://media.istockphoto.com/id/178631605/photo/rear-traditional-wooden-handloom.jpg?s=612x612&w=0&k=20&c=W6F9nhUzPJ4gQd9xew6y1QDUUEiQf4yeLaikt8tveTM=',
            alt: 'Handloom Weaver',
            className: 'rounded-lg shadow-lg w-full h-[600px] object-cover'
          })
        ),
        React.createElement('div', { className: 'md:w-1/2 space-y-6' },
          React.createElement('h1', { className: 'text-4xl font-bold text-gray-800' }, 'Our Heritage in Threads'),
          React.createElement('p', { className: 'text-lg text-gray-600 leading-relaxed' },
           ' Welcome to SNS Handloom, where tradition and craftsmanship come together to celebrate India’s unparalleled handloom heritage. We are committed to connecting skilled artisans with people who value and admire the beauty of handcrafted textiles.'+
           'Every piece in our collection is more than just a product; it is a work of art, a story of tradition, and a reflection of the rich cultural legacy that has been passed down through generations. '
            
          ),
          React.createElement('p', { className: 'text-lg text-gray-600 leading-relaxed' },
            'At SNS Handloom, we prioritize sustainability and fairness. We work directly with weaver communities across the country to ensure that their efforts are recognized with fair wages and ethical treatment. Our commitment to eco-friendly practices helps preserve not only the craft but also the environment, making every purchase a step towards a more sustainable future.'
          ),
          React.createElement('p', { className: 'text-lg text-gray-600 leading-relaxed' },
            'Our mission is to preserve the art of handloom weaving while improving the lives of the talented artisans behind these creations. By bridging the gap between weavers and customers, we aim to ensure that this timeless craft continues to thrive for generations to come.'
          ),
          
          React.createElement('div', { className: 'pt-4' },
            React.createElement('button', {
              className: 'bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition'
            }, 'Learn More About Our Artisans')
          )
        )
      )
    )
  );
}

export default About;
