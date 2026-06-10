'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function FinalCTA() {
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
      className="bg-black py-20 px-6 text-center"
      style={{ borderTop: '1px solid #1A1A1A' }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-8xl font-bold text-white tracking-tight mb-4"
        >
          Ready to Order?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base mb-8"
          style={{ color: '#888888' }}
        >
          Free delivery across Nepal. Cash on Delivery.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <button
            onClick={handleOrder}
            className="bg-white text-black text-sm font-medium px-12 py-4 tracking-wider transition-all duration-200 hover:bg-gray-100 mb-8"
            style={{ letterSpacing: '0.1em' }}
          >
            ORDER NOW →
          </button>
          <p className="text-xs mt-8" style={{ color: '#555' }}>
            Trusted by 500+ customers in Nepal
          </p>
        </motion.div>
      </div>
    </section>
  );
}
