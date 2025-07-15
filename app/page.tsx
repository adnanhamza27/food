'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.5 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const imageVariants = {
  hidden: { scale: 1.2, opacity: 0.8 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const features = [
  {
    src: '/salade.png',
    title: 'Fresh Ingredients',
    description: 'Only the freshest and healthiest ingredients go into our dishes.',
  },
  {
    src: '/1200.png',
    title: 'Fast Delivery',
    description: 'Hot meals delivered right to your doorstep in minutes.',
  },
  {
    src: '/chef.png',
    title: 'Chef-Crafted',
    description: 'All meals are handcrafted by experienced chefs.',
  },
  {
    src: '/souss.png',
    title: 'Variety of Flavors',
    description: 'Explore cuisines from all around the world in one place.',
  },
];

export default function HomePage() {
  return (
    <main className={`${poppins.className} relative min-h-screen text-white overflow-hidden`}>
      {/* Full Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/JOUJ.png"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Hero Section */}
      <section className="relative text-center py-32 sm:py-40">
        <div className="relative z-20 flex flex-col items-center justify-center px-4">
          <motion.h1
            className="text-6xl sm:text-7xl font-extrabold tracking-wide text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            WELCOME TO FOOD
          </motion.h1>

          <motion.p
            className="text-lg text-gray-200 max-w-2xl mx-auto mt-10 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Where freshness meets flavor — Enjoy our expertly crafted meals.
          </motion.p>
        </div>
      </section>

      {/* Features Grid with Background */}
      <motion.section
        className="relative px-6 py-16 text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src="/tabl.png"
            alt="Features Background"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="relative h-64 overflow-hidden rounded-xl bg-black/60 shadow-[0_8px_15px_rgba(0,0,0,0.5)] border border-yellow-500"
              variants={cardVariants}
            >
              <motion.div
                variants={imageVariants}
                className="relative w-full h-40 overflow-hidden rounded-t-xl"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-xl pointer-events-none" />
              </motion.div>
              <div className="p-4 bg-black/70 rounded-b-xl">
                <motion.h2
                  className="text-xl font-semibold mb-2 text-yellow-300"
                  variants={textVariants}
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  className="text-yellow-100 text-sm"
                  variants={textVariants}
                >
                  {item.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Button with background */}
      <motion.div
        className="relative text-center py-16"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src="/famm.png"
            alt="CTA Background"
            fill
            className="object-cover object-top-rounded-lg"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <Link
          href="/menu"
          className="inline-block bg-yellow-400 text-black font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          View Menu
        </Link>
      </motion.div>
    </main>
  );
}
