'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(0,0,0,0.85)' : '#000000',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: '1px solid #1A1A1A',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-14">
        <span
          className="text-white font-bold text-sm tracking-[0.2em]"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          FLEXCHARGE
        </span>
        <button
          onClick={handleOrder}
          className="text-white border border-white text-xs font-medium px-4 py-2 tracking-wider transition-all duration-200 hover:bg-white hover:text-black"
          style={{ letterSpacing: '0.1em' }}
        >
          ORDER NOW
        </button>
      </div>
    </nav>
  );
}
