'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const parts = [
  {
    title: 'Custom Menus',
    image: '/AA.png',
    description:
      'We craft personalized menus tailored to your event preferences and dietary needs, ensuring every guest enjoys their meal.',
  },
  {
    title: 'Professional Staff',
    image: '/BB.png',
    description:
      'Our experienced and friendly catering staff provide impeccable service, making your event run smoothly from start to finish.',
  },
  {
    title: 'Beautiful Presentation',
    image: '/CC.png',
    description:
      'We focus on stunning food presentation, making each dish as visually appealing as it is delicious.',
  },
  {
    title: 'Event Coordination',
    image: '/DD.png',
    description:
      'From planning to execution, our team coordinates every detail to ensure your catering experience is seamless and stress-free.',
  },
];

// Animation variants, similar to Home page style
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.4 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const imageVariants = {
  hidden: { scale: 1.2, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
};

export default function CateringServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white p-12 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-yellow-300 mb-10 text-center">
        Catering Services
      </h1>
      <p className="text-orange-100 text-lg max-w-3xl mx-auto mb-12 text-center">
        We provide professional catering for events of all sizes — from intimate family gatherings to large-scale celebrations. Enjoy customized menus, chef-prepared dishes, and seamless service that will leave your guests delighted.
      </p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {parts.map(({ title, image, description }, idx) => (
          <motion.div
            key={idx}
            className="bg-gradient-to-br from-red-700 via-orange-600 to-yellow-500 rounded-xl overflow-hidden shadow-lg flex flex-col"
            variants={cardVariants}
          >
            <motion.div className="relative w-full h-48 overflow-hidden rounded-t-xl" variants={imageVariants}>
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-xl pointer-events-none" />
            </motion.div>

            <div className="p-6 bg-black bg-opacity-70 flex flex-col flex-grow">
              <motion.h2 className="text-2xl font-semibold text-yellow-300 mb-3" variants={imageVariants}>
                {title}
              </motion.h2>
              <motion.p className="text-yellow-100 flex-grow" variants={imageVariants}>
                {description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
