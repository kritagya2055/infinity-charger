'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function HeroSection() {
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
      className="relative w-full bg-black overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Product image — centered, large */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative">
          {/* Subtle glow beneath product */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse, rgba(255,255,255,0.08) 0%, transparent 70%)',
              filter: 'blur(20px)',
            }}
          />
          <img
            src="/images/hero_image.png"
            alt="FlexCharge 6-in-1 Cable"
            className="w-full max-w-2xl h-auto object-contain relative z-10"
            style={{ maxHeight: '70vh' }}
          />
        </div>
      </div>

      {/* Bottom left content */}
      <div className="absolute bottom-16 left-6 md:left-16 z-20 max-w-md">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs font-medium tracking-[0.25em] mb-4"
          style={{ color: '#888888' }}
        >
          6-IN-1 CHARGING CABLE
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-5xl md:text-7xl font-bold text-white leading-[1.0] tracking-tight mb-2"
        >
          One Cable.
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-5xl md:text-7xl font-bold text-white leading-[1.0] tracking-tight mb-6"
        >
          Every Device.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="text-sm mb-8"
          style={{ color: '#888888' }}
        >
          Charge all your devices — iPhone, Android, iPad and more.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          onClick={handleOrder}
          className="bg-white text-black text-sm font-medium px-8 py-3 tracking-wider transition-all duration-200 hover:bg-gray-100"
          style={{ letterSpacing: '0.08em' }}
        >
          ORDER NOW →
        </motion.button>
      </div>

      {/* Bottom right — price block */}
      <div className="absolute bottom-16 right-6 md:right-16 z-20 text-right">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-3xl font-bold text-white mb-1">Rs. 1,299</p>
          <p className="text-sm line-through mb-3" style={{ color: '#888888' }}>
            Rs. 1,555
          </p>
          <span className="text-xs border border-white/30 text-white px-3 py-1 tracking-wider">
            FREE DELIVERY
          </span>
        </motion.div>
      </div>

      {/* Scroll arrow */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-white/40"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
