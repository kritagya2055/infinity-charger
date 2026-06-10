'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const testimonials = [
  {
    name: 'Ayush Baral',
    text: 'Best cable I\'ve ever used. Works with all my devices. Highly recommend!',
  },
  {
    name: 'Arun Ramtel',
    text: 'Premium quality and very durable. Worth every rupee!',
  },
  {
    name: 'Prabhakar Kafle',
    text: 'Fast delivery and great product. Works perfectly with iPhone and Android both!',
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="w-full py-16 px-6"
      style={{ backgroundColor: '#080808', borderTop: '1px solid #1A1A1A' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[0.25em] mb-4" style={{ color: '#888888' }}>
            WHAT PEOPLE SAY
          </p>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            People Love It.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
            >
              <p className="text-5xl text-white font-serif leading-none mb-4" style={{ lineHeight: 1, opacity: 0.3 }}>
                "
              </p>
              <p className="text-base text-white leading-relaxed mb-6 font-light">
                {t.text}
              </p>
              <p className="text-xs tracking-widest mb-2" style={{ color: '#888888' }}>
                — {t.name}
              </p>
              <p className="text-sm text-white tracking-widest">★★★★★</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
