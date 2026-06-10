'use client';

import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();

  const handleOrder = (qty = 1) => {
    localStorage.setItem('flexcharge_order', JSON.stringify({
      productName: 'FlexCharge 6-in-1 Cable',
      quantity: qty,
      pricePerPiece: 1299,
      totalPrice: qty * 1299,
    }));
    router.push('/checkout');
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col"
      style={{
        backgroundImage: "url('/images/product_2.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Logo */}
      <div className="relative z-10 px-6 pt-6">
        <span className="text-2xl font-extrabold tracking-tight" style={{ color: '#3B82F6' }}>
          FlexCharge
        </span>
      </div>

      {/* Center content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 py-16">
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-blue-500/50 bg-blue-500/10 text-blue-400 animate-fade-in">
          6-in-1 Charging Solution
        </span>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 animate-fade-in-up">
          One Cable.{' '}
          <span style={{ color: '#3B82F6' }}>Every Device.</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Stop carrying multiple cables. FlexCharge does it all.
        </p>

        <p className="max-w-xl text-gray-400 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          The FlexCharge 6-in-1 Cable charges iPhone, Android, iPad, and more — all with one compact, premium braided cable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <button
            onClick={() => handleOrder(1)}
            className="px-8 py-4 rounded-xl font-bold text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
            style={{ backgroundColor: '#3B82F6' }}
          >
            Order Now
          </button>
          <a
            href="#showcase"
            className="px-8 py-4 rounded-xl font-bold text-lg border-2 border-blue-500 text-blue-400 transition-all duration-300 hover:bg-blue-500/10 hover:scale-105"
          >
            See Product
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {['Cash on Delivery', 'Free Delivery', 'Fast Shipping'].map((badge) => (
            <div key={badge} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
              <span className="text-green-400">✓</span>
              {badge}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll arrow */}
      <div className="relative z-10 flex justify-center pb-8">
        <a href="#showcase" className="text-gray-400 animate-bounce-slow">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
