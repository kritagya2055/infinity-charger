'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function LifestyleImage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} style={{ borderTop: '1px solid #1A1A1A', backgroundColor: '#000' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="w-full overflow-hidden"
      >
        <img
          src="/images/lifestyle_image.png"
          alt="FlexCharge cable on carbon fiber desk with MacBook and iPhone"
          className="w-full object-cover"
          style={{
            display: 'block',
            height: 'clamp(400px, 60vw, 800px)',
            objectPosition: 'center',
          }}
        />
      </motion.div>
    </section>
  );
}
