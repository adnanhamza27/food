'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<null | { success: boolean; message: string }>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ success: false, message: 'Please fill in all required fields.' });
      return;
    }

    setStatus(null);
    setTimeout(() => {
      setStatus({
        success: true,
        message: 'Thank you for contacting us! We will get back to you soon.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Background with circular edges */}
      <motion.div
        className="absolute inset-0 -z-10 overflow-hidden"
        initial={{ scale: 1.2, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <div className="w-full h-full rounded-[120px] md:rounded-[160px] overflow-hidden">
          <Image
            src="/sod.png" // Replace with your own image path
            alt="Contact Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </motion.div>

      {/* Contact Form Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative bg-black/70 backdrop-blur-md rounded-3xl max-w-3xl w-full mx-auto my-20 p-10 shadow-2xl text-white"
      >
        <h1 className="text-4xl font-extrabold mb-6 text-yellow-300 text-center drop-shadow-lg">
      CONTACT US
        </h1>
        <p className="mb-8 text-center text-yellow-100 max-w-xl mx-auto">
          Have questions, feedback, or want to work together? Fill out the form below and we’ll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold text-yellow-200">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-yellow-400 outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold text-yellow-200">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-yellow-400 outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="block mb-2 font-semibold text-yellow-200">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Brief topic of your message"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-semibold text-yellow-200">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              placeholder="Write your message here..."
              className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white resize-none focus:ring-2 focus:ring-yellow-400 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-300 transition-colors text-black font-bold py-3 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-yellow-200"
          >
            Send Message
          </button>

          {status && (
            <p
              className={`mt-4 text-center font-semibold ${
                status.success ? 'text-green-400' : 'text-red-500'
              }`}
            >
              {status.message}
            </p>
          )}
        </form>

        {/* Optional Contact Info */}
        <div className="mt-12 text-yellow-100 text-center space-y-3">
          <p>📞 <strong>Phone:</strong> +1 (555) 123-4567</p>
          <p>📧 <strong>Email:</strong> contact@foodexample.com</p>
          <p>📍 <strong>Address:</strong> 123 Food Street, Flavor Town, USA</p>
        </div>
      </motion.section>
    </main>
  );
}
