'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function StatementSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="bg-black w-full flex flex-col items-center justify-center text-center"
      style={{ padding: '140px 24px' }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-none tracking-tight"
      >
        Six connectors.
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-none tracking-tight mt-2"
      >
        Zero compromise.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-base md:text-lg mt-10"
        style={{ color: '#888888' }}
      >
        Works with every device you own.
      </motion.p>
    </section>
  );
}
