'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const imageVariants = {
  hidden: { scale: 1.2, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
};

export default function EventPlanningPage() {
  return (
    <main className="min-h-screen bg-black text-white p-12 space-y-16">
      <h1 className="text-4xl font-bold text-yellow-300 mb-6">Event Planning</h1>

      {/* Grid layout: 2 up, 2 down */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Part 1 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-200">Theme Coordination</h2>
          <motion.div
            className="relative w-full h-64 rounded-lg overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <Image src="/EE.png" alt="Theme Coordination" fill className="object-cover" />
          </motion.div>
          <p className="text-orange-100 max-w-3xl">
            We help you design and execute a visually stunning theme that matches your vision. From color schemes to decorative details, we bring your concept to life.
          </p>
        </section>

        {/* Part 2 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-200">Vendor Management</h2>
          <motion.div
            className="relative w-full h-64 rounded-lg overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <Image src="/FF.png" alt="Vendor Management" fill className="object-cover" />
          </motion.div>
          <p className="text-orange-100 max-w-3xl">
            We coordinate with trusted vendors including decorators, entertainers, and audio-visual teams to ensure everything runs smoothly and professionally.
          </p>
        </section>

        {/* Part 3 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-200">On-Site Supervision</h2>
          <motion.div
            className="relative w-full h-64 rounded-lg overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <Image src="/GG.png" alt="On-Site Supervision" fill className="object-cover" />
          </motion.div>
          <p className="text-orange-100 max-w-3xl">
            Our team is present throughout your event to oversee operations, handle last-minute changes, and ensure everything runs according to plan.
          </p>
        </section>

        {/* Part 4 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-200">Guest Experience</h2>
          <motion.div
            className="relative w-full h-64 rounded-lg overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <Image src="/RR.png" alt="Guest Experience" fill className="object-cover" />
          </motion.div>
          <p className="text-orange-100 max-w-3xl">
            We ensure your guests are taken care of with thoughtful touches, seamless logistics, and a welcoming atmosphere they won’t forget.
          </p>
        </section>
      </div>
    </main>
  );
}
