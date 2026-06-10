'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRouter } from 'next/navigation';

const features = [
  {
    icon: '⬡',
    title: 'Universal Compatibility',
    desc: 'Works with iPhone, Android, iPad, laptop and more.',
  },
  {
    icon: '◈',
    title: 'Premium Braided Build',
    desc: 'Durable, tangle-free, built to last.',
  },
  {
    icon: '⚡',
    title: 'Fast Charging',
    desc: 'Full speed charging for all your devices.',
  },
  {
    icon: '◻',
    title: 'Ultra Compact',
    desc: 'Fits in your pocket or travel bag easily.',
  },
  {
    icon: '◯',
    title: 'One Cable Only',
    desc: 'Replace 6 cables with just one.',
  },
  {
    icon: '→',
    title: 'Free Delivery',
    desc: 'Delivered to your door across Nepal.',
  },
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const router = useRouter();

  const handleOrder = () => {
    localStorage.setItem(
      'flexcharge_order',
      JSON.stringify({
        productName: 'FlexCharge 6-in-1 Cable',
        quantity: 1,
        pricePerPiece: 1299,
        totalPrice: 1299,
      })
    );
    router.push('/checkout');
  };

  return (
    <section
      ref={ref}
      className="bg-black py-16 px-6 md:px-16"
      style={{ borderTop: '1px solid #1A1A1A' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-xs tracking-[0.25em] mb-4" style={{ color: '#888888' }}>
            WHY FLEXCHARGE
          </p>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            Built Different.
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 mb-14">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08 }}
            >
              <p className="text-xl text-white mb-4" style={{ fontFamily: 'monospace' }}>
                {f.icon}
              </p>
              <h3 className="text-base font-semibold text-white mb-2 tracking-tight">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#888888' }}>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex justify-center"
        >
          <button
            onClick={handleOrder}
            className="border border-white text-white text-sm font-medium px-10 py-3 tracking-wider transition-all duration-200 hover:bg-white hover:text-black"
            style={{ letterSpacing: '0.08em' }}
          >
            ORDER NOW →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
