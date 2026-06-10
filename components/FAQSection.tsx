'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: 'Which devices does it support?', a: 'iPhone, Android, iPad, Type-C laptops and more.' },
  { q: 'Is Cash on Delivery available?', a: 'Yes! We deliver all over Nepal with Cash on Delivery.' },
  { q: 'How many days for delivery?', a: 'You will receive your order within 3–5 working days.' },
  { q: 'Is the cable strong and durable?', a: 'Yes, premium braided design that lasts long.' },
  { q: 'Does it support fast charging?', a: 'Yes, FlexCharge fully supports fast charging.' },
  { q: 'Do I need separate cables for each device?', a: 'No! One FlexCharge cable is enough.' },
  { q: 'What if I receive a damaged product?', a: 'Contact us and we will replace it immediately.' },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="bg-black py-16 px-6"
      style={{ borderTop: '1px solid #1A1A1A' }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="lg:sticky lg:top-24 self-start"
        >
          <p className="text-xs tracking-[0.25em] mb-6" style={{ color: '#888888' }}>
            FAQ
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            Any
            <br />
            Questions?
          </h2>
        </motion.div>

        {/* Right — accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-0"
        >
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid #1A1A1A' }}>
              <button
                className="w-full flex items-center justify-between py-6 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-sm md:text-base font-medium text-white pr-8">
                  {faq.q}
                </span>
                <span
                  className="text-xl text-white flex-shrink-0 transition-transform duration-300"
                  style={{ transform: open === i ? 'rotate(45deg)' : 'none' }}
                >
                  +
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm pb-6 leading-relaxed" style={{ color: '#888888' }}>
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
