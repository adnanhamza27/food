'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ReservationPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="relative min-h-screen bg-background text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/ROO.png"
          alt="Reservation background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>

      {/* Thank You Message */}
      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg shadow-lg z-50"
          role="alert"
        >
          Thank you for choosing us, we will do our duty towards you
        </motion.div>
      )}

      {/* Reservation Form */}
      <section className="max-w-2xl mx-auto p-6 mt-20 bg-black/70 rounded-2xl shadow-2xl backdrop-blur-md">
        <motion.h1
          className="text-4xl font-bold text-yellow-300 mb-8 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Reserve Your Spot
        </motion.h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-yellow-100 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-yellow-100 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="date" className="block text-yellow-100 mb-1">
                Date
              </label>
              <input
                type="date"
                id="date"
                className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>
            <div>
              <label htmlFor="time" className="block text-yellow-100 mb-1">
                Time
              </label>
              <input
                type="time"
                id="time"
                className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="guests" className="block text-yellow-100 mb-1">
              Number of Guests
            </label>
            <input
              type="number"
              id="guests"
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="e.g. 2"
              min={1}
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-yellow-100 mb-1">
              Special Requests (optional)
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Any notes for our team..."
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            >
              Submit Reservation
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
