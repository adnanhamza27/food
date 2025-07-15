'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const imageVariants = {
  hidden: { scale: 1.2, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
};

export default function HomeDeliveryPage() {
  return (
    <main className="min-h-screen bg-black text-white p-12">
      <h1 className="text-4xl font-bold text-yellow-300 mb-6">Home Delivery</h1>
      <p className="text-orange-100 text-lg max-w-3xl mb-12">
        Our home delivery service ensures your food arrives hot, fresh, and on time. Whether you’re at work or at home, we bring the flavors to you with efficiency and care.
      </p>

      {/* Top Row - Two Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Part 1 */}
        <section>
          <h2 className="text-2xl font-semibold text-yellow-300 mb-3">Quick Order Process</h2>
          <motion.div
            className="relative h-48 w-full rounded-xl overflow-hidden mb-4"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <Image
              src="/OO.png"
              alt="Quick order process"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <p className="text-orange-100 text-base">
            Place your order easily with our user-friendly app or website, designed for a smooth and fast ordering experience.
          </p>
        </section>

        {/* Part 2 */}
        <section>
          <h2 className="text-2xl font-semibold text-yellow-300 mb-3">Fresh & Hot Delivery</h2>
          <motion.div
            className="relative h-48 w-full rounded-xl overflow-hidden mb-4"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <Image
              src="/WW.png"
              alt="Fresh and hot delivery"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <p className="text-orange-100 text-base">
            We use insulated packaging and fast logistics to ensure your meals arrive fresh, hot, and ready to enjoy.
          </p>
        </section>
      </div>

      {/* Bottom Row - Centered Section */}
      <div className="max-w-2xl mx-auto mt-16">
        <section>
          <h2 className="text-2xl font-semibold text-yellow-300 mb-3 text-center">Real-time Tracking</h2>
          <motion.div
            className="relative h-48 w-full rounded-xl overflow-hidden mb-4"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <Image
              src="/ZZ.png"
              alt="Real-time delivery tracking"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <p className="text-orange-100 text-base text-center">
            Stay informed with live updates on your delivery status, estimated arrival times, and driver location.
          </p>
        </section>
      </div>
    </main>
  );
}
