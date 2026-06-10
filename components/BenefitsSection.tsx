'use client';

import { useRouter } from 'next/navigation';
import FadeSection from './FadeSection';

const benefits = [
  {
    icon: '🔌',
    title: '6 Devices, 1 Cable',
    desc: 'Charges iPhone, Android, iPad, Type-C laptops, and more — all with a single cable.',
  },
  {
    icon: '🛡️',
    title: 'Premium Braided Design',
    desc: 'Built to last with a durable, tangle-free nylon braid that withstands daily use.',
  },
  {
    icon: '✈️',
    title: 'Compact & Travel-Friendly',
    desc: 'Lightweight and compact — the perfect companion for home, office, or travel.',
  },
  {
    icon: '📱',
    title: 'Universal Compatibility',
    desc: 'Compatible with iPhone, Android, iPad, MacBooks, and virtually all USB devices.',
  },
  {
    icon: '💰',
    title: 'Save Money',
    desc: 'No need to buy separate cables for each device. One FlexCharge replaces them all.',
  },
  {
    icon: '⚡',
    title: 'Fast Charging',
    desc: 'Supports fast charging protocols so your devices power up quickly.',
  },
];

export default function BenefitsSection() {
  const router = useRouter();

  const handleOrder = () => {
    localStorage.setItem('flexcharge_order', JSON.stringify({
      productName: 'FlexCharge 6-in-1 Cable',
      quantity: 1,
      pricePerPiece: 1299,
      totalPrice: 1299,
    }));
    router.push('/checkout');
  };

  return (
    <section id="benefits" className="py-20 px-4 bg-black/40">
      <div className="max-w-6xl mx-auto">
        <FadeSection>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              Why Choose <span style={{ color: '#3B82F6' }}>FlexCharge?</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Everything you need in one cable. Built for modern life.
            </p>
          </div>
        </FadeSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((b, i) => (
            <FadeSection key={b.title} delay={i * 80}>
              <div className="group p-6 rounded-2xl border border-white/10 bg-gray-900/50 hover:border-blue-500/60 hover:bg-gray-900/80 transition-all duration-300 h-full">
                <div className="text-4xl mb-4">{b.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
              </div>
            </FadeSection>
          ))}
        </div>

        <FadeSection>
          <div className="text-center">
            <button
              onClick={handleOrder}
              className="px-10 py-4 rounded-xl font-bold text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
              style={{ backgroundColor: '#3B82F6' }}
            >
              Order Now
            </button>
          </div>
        </FadeSection>
      </div>
    </section>
  );
}
