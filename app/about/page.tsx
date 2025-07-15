'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Coffee, Leaf, Users } from 'lucide-react';

export default function AboutFoodPage() {
  return (
    <main className="relative min-h-screen text-yellow-100 overflow-hidden">
      {/* Full Page Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/stor.png"
          alt="About Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <section className="max-w-4xl mx-auto text-center px-6 py-24 relative z-10">
        {/* Main Title with Icon */}
        <div className="flex flex-col items-center mb-12">
          <Coffee size={48} className="text-yellow-300 drop-shadow-lg mb-4" />
          <h1 className="text-5xl font-extrabold drop-shadow-lg">
            ABOUT FOOD
          </h1>
        </div>

        <p className="text-lg mb-12 text-orange-200 leading-relaxed">
          Food is more than just nourishment — it’s a universal language of culture, love, and creativity. Every ingredient tells a story, and every dish is a journey of flavors, memories, and traditions.
        </p>

        {/* Section 1: Fresh Ingredients */}
        <div className="mb-16">
          <div className="flex flex-col items-center mb-6">
            <Leaf size={40} className="text-green-400 drop-shadow-md" />
            <h2 className="text-3xl font-bold drop-shadow-md mt-2">
              THE IMPORTANCE OF FRESH INGREDIENTS
            </h2>
          </div>

          <div className="flex justify-center mb-6">
            <div className="relative w-[400px] h-[250px] rounded-2xl overflow-hidden">
              <Image
                src="/toom.png"
                alt="Fresh Ingredients"
                fill
                className="object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-black/40 rounded-2xl pointer-events-none" />
            </div>
          </div>

          <p className="text-lg text-orange-300 leading-relaxed">
            We believe the foundation of delicious food lies in the quality of its ingredients. Fresh, seasonal produce and carefully sourced components bring vibrant taste and essential nutrients to every plate.
          </p>
        </div>

        {/* Section 2: Sharing Meals */}
        <div>
          <div className="flex flex-col items-center mb-6">
            <Users size={40} className="text-yellow-400 drop-shadow-md" />
            <h2 className="text-3xl font-bold drop-shadow-md mt-2">
              SHARING MEALS, CREATING MEMORIES
            </h2>
          </div>

          <div className="flex justify-center mb-6">
            <div className="relative w-[400px] h-[250px] rounded-2xl overflow-hidden">
              <Image
                src="/famme.png"
                alt="Sharing Meals"
                fill
                className="object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-black/40 rounded-2xl pointer-events-none" />
            </div>
          </div>

          <p className="text-lg text-orange-300 leading-relaxed">
            Food connects people. Whether it’s a festive celebration, a quiet family dinner, or a quick snack with friends, sharing a meal creates bonds, sparks joy, and builds lifelong memories.
          </p>
        </div>
      </section>
    </main>
  );
}