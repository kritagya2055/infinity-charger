'use client';

import { useState } from 'react';
import FadeSection from './FadeSection';

const faqs = [
  {
    q: 'Which devices does it support?',
    a: 'It works with iPhone, Android, iPad, Type-C laptops, and more.',
  },
  {
    q: 'Is Cash on Delivery available?',
    a: 'Yes! We deliver all over Nepal with Cash on Delivery.',
  },
  {
    q: 'How many days for delivery?',
    a: 'You will receive your order within 3-5 working days.',
  },
  {
    q: 'Is the cable strong and durable?',
    a: 'Yes, it has a premium braided design that lasts long.',
  },
  {
    q: 'Does it support fast charging?',
    a: 'Yes, FlexCharge fully supports fast charging.',
  },
  {
    q: 'Do I need to buy separate cables for each device?',
    a: 'No! One FlexCharge cable is enough for all your devices.',
  },
  {
    q: 'What if I receive a damaged product?',
    a: 'Just contact us and we will replace it immediately.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-4 bg-black/40">
      <div className="max-w-3xl mx-auto">
        <FadeSection>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              Frequently Asked <span style={{ color: '#3B82F6' }}>Questions</span>
            </h2>
          </div>
        </FadeSection>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeSection key={i} delay={i * 60}>
              <div className="border border-white/10 rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/5 transition-colors"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-semibold text-white pr-4">{faq.q}</span>
                  <span
                    className="text-blue-400 text-xl transition-transform duration-300 flex-shrink-0"
                    style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: open === i ? '200px' : '0px' }}
                >
                  <div className="px-6 pb-4 text-gray-400 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}
