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
      style={{ height: '100vh', minHeight: '700px' }}
    >
      {/* Hero image — fills full viewport, no overlay */}
      <img
        src="/hero_image.png"
        alt="FlexCharge 6-in-1 Cable"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ zIndex: 1 }}
      />

      {/* Bottom left — text content */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-16 pb-16 pt-40"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 40%, transparent 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto flex items-end justify-between gap-8 flex-wrap">
          {/* Left — headline + CTA */}
          <div className="max-w-lg">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xs font-medium tracking-[0.3em] mb-5"
              style={{ color: '#888888' }}
            >
              6-IN-1 CHARGING CABLE
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="font-bold text-white leading-[0.95] tracking-tight mb-2"
              style={{ fontSize: 'clamp(48px, 7vw, 96px)' }}
            >
              One Cable.
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-bold text-white leading-[0.95] tracking-tight mb-8"
              style={{ fontSize: 'clamp(48px, 7vw, 96px)' }}
            >
              Every Device.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="text-sm mb-8 leading-relaxed"
              style={{ color: '#888888' }}
            >
              Charge all your devices — iPhone, Android, iPad and more.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              onClick={handleOrder}
              className="bg-white text-black text-xs font-semibold px-8 py-3 tracking-widest transition-all duration-200 hover:bg-gray-100"
              style={{ letterSpacing: '0.12em' }}
            >
              ORDER NOW →
            </motion.button>
          </div>

          {/* Right — price block */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-right pb-1"
          >
            <p className="text-4xl font-bold text-white mb-1">Rs. 1,299</p>
            <p className="text-sm line-through mb-4" style={{ color: '#666' }}>
              Rs. 1,555
            </p>
            <span
              className="text-xs border text-white px-3 py-1.5 tracking-widest"
              style={{ borderColor: 'rgba(255,255,255,0.25)' }}
            >
              FREE DELIVERY
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll arrow */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ color: 'rgba(255,255,255,0.35)' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
