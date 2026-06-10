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
      <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: '100vh' }}>

        {/* LEFT — product_showcase.png, full panel, editorial fill */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden"
          style={{
            borderRight: '1px solid #1A1A1A',
            minHeight: '600px',
          }}
        >
          <img
            src="/images/product_showcase.png"
            alt="FlexCharge 6-in-1 Cable on dark stone"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Very subtle inner shadow on right edge to blend into divider */}
          <div
            className="absolute inset-y-0 right-0 w-16 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, transparent, rgba(0,0,0,0.3))',
            }}
          />
        </motion.div>

        {/* RIGHT — add to cart */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center px-10 md:px-16 py-20 bg-black"
        >
          <p className="text-xs tracking-[0.3em] mb-8" style={{ color: '#888888' }}>
            FLEXCHARGE 6-IN-1
          </p>

          {/* Price */}
          <div className="mb-2">
            <div className="flex items-baseline gap-4 mb-3">
              <span className="text-5xl font-bold text-white tracking-tight">Rs. 1,299</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-base line-through" style={{ color: '#444' }}>
                Rs. 1,555
              </span>
              <span
                className="text-xs border px-3 py-1 tracking-wider"
                style={{ borderColor: '#2a2a2a', color: '#777' }}
              >
                SAVE RS. 256
              </span>
            </div>
          </div>

          <div className="w-full my-8" style={{ height: '1px', backgroundColor: '#1A1A1A' }} />

          {/* Features */}
          <ul className="space-y-4 mb-8">
            {[
              '6 devices, one cable',
              'Premium braided design',
              'Fast charging supported',
              'Free delivery across Nepal',
            ].map((f) => (
              <li key={f} className="flex items-center gap-4 text-sm text-white">
                <span className="text-xs" style={{ color: '#444' }}>✓</span>
                {f}
              </li>
            ))}
          </ul>

          <div className="w-full mb-8" style={{ height: '1px', backgroundColor: '#1A1A1A' }} />

          {/* Quantity */}
          <div className="mb-8">
            <p className="text-xs tracking-[0.2em] mb-4" style={{ color: '#555' }}>
              QUANTITY
            </p>
            <div className="flex items-center mb-5">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-11 h-11 border flex items-center justify-center text-white transition-all duration-200 hover:bg-white hover:text-black text-lg font-light"
                style={{ borderColor: '#2a2a2a' }}
              >
                −
              </button>
              <span
                className="w-16 h-11 flex items-center justify-center text-white text-sm border-t border-b font-medium"
                style={{ borderColor: '#2a2a2a' }}
              >
                {qty}
              </span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="w-11 h-11 border flex items-center justify-center text-white transition-all duration-200 hover:bg-white hover:text-black text-lg font-light"
                style={{ borderColor: '#2a2a2a' }}
              >
                +
              </button>
            </div>
            <p className="text-sm" style={{ color: '#555' }}>
              Total:{' '}
              <span className="text-white font-semibold">
                Rs. {(qty * 1299).toLocaleString()}
              </span>
            </p>
          </div>

          {/* Order button */}
          <button
            onClick={handleOrder}
            className="w-full bg-white text-black text-xs font-semibold py-4 tracking-widest transition-all duration-200 hover:bg-gray-100 mb-4"
            style={{ letterSpacing: '0.12em' }}
          >
            ORDER NOW
          </button>

          <p className="text-xs text-center" style={{ color: '#444' }}>
            Cash on Delivery · Free Delivery
          </p>
        </motion.div>
      </div>
    </section>
  );
}
