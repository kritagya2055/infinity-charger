'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const images = [
  { src: '/images/product_1.png', alt: 'FlexCharge cable view 1' },
  { src: '/images/product_2.png', alt: 'FlexCharge cable view 2' },
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const go = (next: number) => {
    setDirection(next > current ? 1 : -1);
    setCurrent(next);
  };
  const prev = () => go((current - 1 + images.length) % images.length);
  const next = () => go((current + 1) % images.length);

  return (
    <section
      ref={ref}
      className="bg-black py-16 px-6"
      style={{ borderTop: '1px solid #1A1A1A' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center"
        >
          <p className="text-xs tracking-[0.25em] mb-4" style={{ color: '#888888' }}>
            PRODUCT GALLERY
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Every Angle.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          {/* Main image */}
          <div
            className="relative w-full overflow-hidden flex items-center justify-center"
            style={{ height: 'clamp(320px, 60vw, 680px)' }}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={current}
                custom={direction}
                src={images[current].src}
                alt={images[current].alt}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute h-full w-full object-contain"
              />
            </AnimatePresence>

            {/* Arrows */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center border text-white transition-all hover:bg-white hover:text-black"
              style={{ borderColor: '#333' }}
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center border text-white transition-all hover:bg-white hover:text-black"
              style={{ borderColor: '#333' }}
            >
              ›
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className="transition-all duration-300"
                style={{
                  width: i === current ? '24px' : '6px',
                  height: '6px',
                  backgroundColor: i === current ? '#ffffff' : '#333333',
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
