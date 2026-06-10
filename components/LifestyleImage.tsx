'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function LifestyleImage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} style={{ borderTop: '1px solid #1A1A1A' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="w-full overflow-hidden"
        style={{ maxHeight: '80vh' }}
      >
        <img
          src="/images/lifestyle_image.png"
          alt="FlexCharge lifestyle"
          className="w-full object-cover"
          style={{ maxHeight: '80vh', objectPosition: 'center' }}
        />
      </motion.div>
    </section>
  );
}
