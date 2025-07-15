'use client';

import Image from 'next/image';

const menuItems = [
  {
    title: 'Grilled Chicken',
    price: '$12.99',
    description: 'Juicy grilled chicken served with seasonal vegetables.',
    image: '/11.png',
  },
  {
    title: 'Margherita Pizza',
    price: '$10.50',
    description: 'Classic pizza topped with fresh tomatoes, mozzarella, and basil.',
    image: '/22.png',
  },
  {
    title: 'Vegan Bowl',
    price: '$11.25',
    description: 'Healthy vegan mix with quinoa, chickpeas, and avocado.',
    image: '/33.png',
  },
  {
    title: 'Salmon Teriyaki',
    price: '$14.00',
    description: 'Grilled salmon glazed with teriyaki sauce and rice.',
    image: '/44.png',
  },
  {
    title: 'Grilled Chicken',
    price: '$12.99',
    description: 'Juicy grilled chicken served with seasonal vegetables.',
    image: '/55.png',
  },
  {
    title: 'Margherita Pizza',
    price: '$10.50',
    description: 'Classic pizza topped with fresh tomatoes, mozzarella, and basil.',
    image: '/66.png',
  },
  {
    title: 'Vegan Bowl',
    price: '$11.25',
    description: 'Healthy vegan mix with quinoa, chickpeas, and avocado.',
    image: '/77.png',
  },
  {
    title: 'Salmon Teriyaki',
    price: '$14.00',
    description: 'Grilled salmon glazed with teriyaki sauce and rice.',
    image: '/88.png',
  },
  {
    title: 'Grilled Chicken',
    price: '$12.99',
    description: 'Juicy grilled chicken served with seasonal vegetables.',
    image: '/99.png',
  },
  {
    title: 'Margherita Pizza',
    price: '$10.50',
    description: 'Classic pizza topped with fresh tomatoes, mozzarella, and basil.',
    image: '/10.png',
  },
  {
    title: 'Vegan Bowl',
    price: '$11.25',
    description: 'Healthy vegan mix with quinoa, chickpeas, and avocado.',
    image: '/www.png',
  },
  {
    title: 'Salmon Teriyaki',
    price: '$14.00',
    description: 'Grilled salmon glazed with teriyaki sauce and rice.',
    image: '/afoka.png',
  },
];

export default function MenuPage() {
  return (
    <main className="bg-black text-white min-h-screen py-16 px-6">
      <section className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-yellow-300 drop-shadow-lg">
          Our Menu
        </h1>
        <p className="text-orange-300 text-lg">
          Explore our delicious selection of handcrafted meals.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="
              bg-gray-900 rounded-3xl overflow-hidden 
              shadow-[0_8px_20px_rgba(255,140,0,0.6)] 
              border-2 border-yellow-400 border-opacity-50
              transition-transform duration-300 hover:scale-105
            "
          >
            <div className="relative w-full h-60 rounded-t-3xl overflow-hidden shadow-inner">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rounded-t-3xl transition-transform duration-500 hover:scale-110 brightness-90"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-yellow-300 drop-shadow-md">
                {item.title}
              </h2>
              <p className="text-orange-400 font-bold mb-2">{item.price}</p>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
