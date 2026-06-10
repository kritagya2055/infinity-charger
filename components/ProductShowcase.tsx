'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function ProductShowcase() {
  const [qty, setQty] = useState(1);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const router = useRouter();

  const handleOrder = () => {
    localStorage.setItem(
      'flexcharge_order',
      JSON.stringify({
        productName: 'FlexCharge 6-in-1 Cable',
        quantity: qty,
        pricePerPiece: 1299,
        totalPrice: qty * 1299,
      })
    );
    router.push('/checkout');
  };

  return (
    <section
      ref={ref}
      className="bg-black w-full"
      style={{ borderTop: '1px solid #1A1A1A' }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left — image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center overflow-hidden"
          style={{
            borderRight: '1px solid #1A1A1A',
            minHeight: '600px',
            backgroundColor: '#000',
          }}
        >
          <div className="relative w-full h-full flex items-center justify-center p-12">
            {/* Subtle glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.04) 0%, transparent 65%)',
              }}
            />
            <img
              src="/images/product_showcase.png"
              alt="FlexCharge Cable"
              className="w-full max-w-lg h-auto object-contain relative z-10"
              style={{ maxHeight: '520px' }}
            />
          </div>
        </motion.div>

        {/* Right — details */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center px-10 md:px-16 py-20"
        >
          <p className="text-xs tracking-[0.25em] mb-6" style={{ color: '#888888' }}>
            FLEXCHARGE 6-IN-1
          </p>

          <div className="mb-6">
            <div className="flex items-baseline gap-4 mb-2">
              <span className="text-4xl font-bold text-white">Rs. 1,299</span>
              <span className="text-base line-through" style={{ color: '#555' }}>
                Rs. 1,555
              </span>
            </div>
            <span
              className="text-xs border px-3 py-1 tracking-wider"
              style={{ borderColor: '#333', color: '#888' }}
            >
              SAVE RS. 256
            </span>
          </div>

          <div className="w-8 mb-8" style={{ height: '1px', backgroundColor: '#1A1A1A', width: '100%' }} />

          <ul className="space-y-3 mb-8">
            {[
              '6 devices, one cable',
              'Premium braided design',
              'Fast charging supported',
              'Free delivery across Nepal',
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-white">
                <span style={{ color: '#555' }}>✓</span>
                {f}
              </li>
            ))}
          </ul>

          <div className="w-full mb-8" style={{ height: '1px', backgroundColor: '#1A1A1A' }} />

          {/* Quantity */}
          <div className="mb-6">
            <p className="text-xs tracking-widest mb-3" style={{ color: '#888888' }}>
              QUANTITY
            </p>
            <div className="flex items-center gap-0 mb-4">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-10 h-10 border flex items-center justify-center text-white transition-colors hover:bg-white hover:text-black text-lg"
                style={{ borderColor: '#333' }}
              >
                −
              </button>
              <span
                className="w-14 h-10 flex items-center justify-center text-white text-sm border-t border-b"
                style={{ borderColor: '#333' }}
              >
                {qty}
              </span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="w-10 h-10 border flex items-center justify-center text-white transition-colors hover:bg-white hover:text-black text-lg"
                style={{ borderColor: '#333' }}
              >
                +
              </button>
            </div>
            <p className="text-sm" style={{ color: '#888888' }}>
              Total:{' '}
              <span className="text-white font-semibold">
                Rs. {(qty * 1299).toLocaleString()}
              </span>
            </p>
          </div>

          <button
            onClick={handleOrder}
            className="w-full bg-white text-black text-sm font-medium py-4 tracking-wider transition-all duration-200 hover:bg-gray-100 mb-4"
            style={{ letterSpacing: '0.08em' }}
          >
            ORDER NOW
          </button>

          <p className="text-xs text-center" style={{ color: '#555' }}>
            Cash on Delivery · Free Delivery
          </p>
        </motion.div>
      </div>
    </section>
  );
}
