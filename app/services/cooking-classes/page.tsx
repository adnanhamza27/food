'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// Image animation variants (same style as home)
const imageVariants = {
  hidden: { scale: 1.2, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
};

export default function CookingClassesPage() {
  return (
    <main className="min-h-screen bg-black text-white p-12">
      <h1 className="text-4xl font-bold text-yellow-300 mb-6">Cooking Classes</h1>

      {/* Part 1 */}
      <section className="space-y-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-yellow-200">Hands-On Learning</h2>

        <motion.div
          className="relative w-full h-64 rounded-lg overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <Image src="/ZEE.png" alt="Cooking Class Hands-On" fill className="object-cover" />
        </motion.div>

        <p className="text-orange-100 text-lg">
          Join our hands-on cooking classes to learn from experienced chefs. Whether you’re a beginner or a home cook looking to improve your skills, we’ll help you cook with confidence and creativity.
        </p>
      </section>
    </main>
  );
}
