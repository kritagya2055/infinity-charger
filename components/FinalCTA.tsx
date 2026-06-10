'use client';

import { useRouter } from 'next/navigation';
import FadeSection from './FadeSection';

export default function FinalCTA() {
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
    <section
      className="py-24 px-4 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0A0A0A 0%, #0f1f3d 50%, #0A0A0A 100%)',
      }}
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-3xl mx-auto text-center">
        <FadeSection>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Ready to Simplify Your <span style={{ color: '#3B82F6' }}>Charging?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Order now and get free delivery across Nepal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={handleOrder}
              className="px-10 py-4 rounded-xl font-bold text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/40"
              style={{ backgroundColor: '#3B82F6' }}
            >
              Order Now
            </button>
            <button
              onClick={handleOrder}
              className="px-10 py-4 rounded-xl font-bold text-lg border-2 border-blue-500 text-blue-400 transition-all duration-300 hover:bg-blue-500/10 hover:scale-105"
            >
              Buy Now
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {['Cash on Delivery', 'Free Delivery', 'Fast Shipping'].map((badge) => (
              <div key={badge} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                <span className="text-green-400">✓</span>
                {badge}
              </div>
            ))}
          </div>
        </FadeSection>
      </div>
    </section>
  );
}
