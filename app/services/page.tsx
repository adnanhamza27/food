'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Catering Services',
    slug: 'catering-services',
    description:
      'Professional catering for your events, from small gatherings to large celebrations, with customized menus to delight your guests.',
    image: '/khdma.png',
  },
  {
    title: 'Home Delivery',
    slug: 'home-delivery',
    description:
      'Fast and reliable food delivery service right to your doorstep, ensuring your meals arrive fresh and delicious.',
    image: '/twsil.png',
  },
  {
    title: 'Event Planning',
    slug: 'event-planning',
    description:
      'Let us help you plan your next event with tailored food options, decoration, and seamless coordination.',
    image: '/l3rs.png',
  },
  {
    title: 'Cooking Classes',
    slug: 'cooking-classes',
    description:
      'Learn how to prepare your favorite dishes from our expert chefs with hands-on cooking classes for all skill levels.',
    image: '/3ml.png',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const imageVariants = {
  hidden: { scale: 1.2, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
};

export default function ServicesPage() {
  return (
    <main className="bg-black text-white min-h-screen py-16 px-6">
      {/* Header */}
      <section className="relative max-w-4xl mx-auto text-center mb-16">
        <motion.div
          className="absolute inset-0 -z-10 rounded-3xl overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <Image
            src="/toom.png"
            alt="Food services background"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>

        <h1 className="relative text-5xl font-bold mb-4 text-yellow-100 drop-shadow-md">
           OUR FOOD SERVICES
        </h1>
        <p className="relative text-orange-100 text-lg max-w-3xl mx-auto">
          We offer a variety of food-related services designed to satisfy your cravings and make your events unforgettable.
        </p>
      </section>

      {/* Services */}
      <motion.section
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {services.map(({ title, description, image, slug }, idx) => (
          <motion.div
            key={idx}
            className="relative h-auto overflow-hidden rounded-xl bg-gradient-to-br from-red-700 via-orange-600 to-yellow-500 shadow-[0_8px_15px_rgba(255,140,0,0.5)] border-2 border-orange-400 flex flex-col justify-between"
            variants={cardVariants}
          >
            <motion.div
              variants={imageVariants}
              className="relative w-full h-40 overflow-hidden rounded-t-xl"
            >
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-xl pointer-events-none" />
            </motion.div>

            <div className="p-4 bg-black/70 rounded-b-xl text-center space-y-2 flex-grow flex flex-col justify-between">
              <motion.h2
                className="text-xl font-semibold text-yellow-300"
                variants={imageVariants}
              >
                {title}
              </motion.h2>
              <motion.p
                className="text-yellow-100 text-sm mb-4"
                variants={imageVariants}
              >
                {description}
              </motion.p>
              <motion.div variants={imageVariants}>
                <Link
                  href={`/services/${slug}`}
                  className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* Why Us */}
      <section className="max-w-4xl mx-auto text-center mt-24 px-4">
        <h2 className="text-4xl font-bold mb-6 text-yellow-100 drop-shadow">
          WHY WE WERE YOU YOU ?
        </h2>
        <p className="text-orange-100 text-lg max-w-3xl mx-auto">
          At FOOD, we believe in more than just serving meals — we create memorable experiences. Our dedication to using only the freshest ingredients, paired with professional service and attention to detail, ensures that every bite delights your palate and every event exceeds your expectations.
        </p>
      </section>

      {/* 🔥 Custom Reservation Section */}
      <section className="mt-32 bg-black text-yellow-300 text-center py-16 rounded-xl shadow-xl max-w-5xl mx-auto px-6">
  <h2 className="text-4xl font-bold mb-4 drop-shadow-md">SPECIAL RESERVATIONS</h2>
  <p className="text-lg mb-6 text-yellow-200">
    Want to reserve a custom package, private chef, or group event? Click below to access our exclusive reservation options tailored to your needs.
  </p>
  <Link
    href="/reservation"
    className="inline-block bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-yellow-300 hover:scale-105 transition-transform"
  >
    Make a Reservation
  </Link>
</section>

    </main>
  );
}
