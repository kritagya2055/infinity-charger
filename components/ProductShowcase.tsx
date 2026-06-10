'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const images = [
  '/images/product_1.svg',
  '/images/product_2.svg',
  '/images/product_3.svg',
  '/images/product_4.svg',
  '/images/product_5.svg',
];

export default function ProductShowcase() {
  const [current, setCurrent] = useState(0);
  const [qty, setQty] = useState(1);
  const router = useRouter();

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  const handleOrder = () => {
    localStorage.setItem('flexcharge_order', JSON.stringify({
      productName: 'FlexCharge 6-in-1 Cable',
      quantity: qty,
      pricePerPiece: 1299,
      totalPrice: qty * 1299,
    }));
    router.push('/checkout');
  };

  return (
    <section id="showcase" className="py-20 px-4" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Image carousel */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-900 border border-white/10">
              <Image
                src={images[current]}
                alt={`Product image ${current + 1}`}
                fill
                className="object-cover transition-all duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:bg-blue-500/70 transition-colors"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:bg-blue-500/70 transition-colors"
              >
                ›
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 justify-center">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    i === current ? 'border-blue-500' : 'border-white/10 opacity-60'
                  }`}
                >
                  <Image src={src} alt={`Thumb ${i + 1}`} fill className="object-cover" sizes="64px" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product details */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                FlexCharge 6-in-1 Cable
              </h2>
              {/* Stars */}
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-lg">★★★★★</span>
                <span className="text-gray-400 text-sm">50+ reviews</span>
              </div>
            </div>

            {/* Pricing */}
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-extrabold" style={{ color: '#3B82F6' }}>
                  Rs. 1,299
                </span>
                <span className="text-xl text-gray-500 line-through">Rs. 1,555</span>
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-semibold">
                You save Rs. 256!
              </span>
            </div>

            {/* Free delivery */}
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <span className="text-green-400">✓</span>
              <span className="font-semibold text-green-400">Free Delivery</span>
              <span className="text-gray-500">across Nepal</span>
            </div>

            {/* Quantity */}
            <div className="space-y-2">
              <label className="text-sm text-gray-400 font-medium">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 rounded-lg bg-gray-800 border border-white/10 text-white text-lg hover:border-blue-500 transition-colors"
                >
                  −
                </button>
                <span className="text-xl font-bold w-8 text-center">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="w-10 h-10 rounded-lg bg-gray-800 border border-white/10 text-white text-lg hover:border-blue-500 transition-colors"
                >
                  +
                </button>
                <span className="text-gray-400 text-sm ml-2">
                  Total:{' '}
                  <span className="text-white font-bold">Rs. {(qty * 1299).toLocaleString()}</span>
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleOrder}
                className="flex-1 py-4 rounded-xl font-bold text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
                style={{ backgroundColor: '#3B82F6' }}
              >
                Order Now
              </button>
              <button
                onClick={handleOrder}
                className="flex-1 py-4 rounded-xl font-bold text-lg border-2 border-blue-500 text-blue-400 transition-all duration-300 hover:bg-blue-500/10 hover:scale-105"
              >
                Buy Now
              </button>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap gap-3 pt-2">
              {['COD Available', 'Free Delivery', 'Easy Return'].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-xs text-gray-400 border border-white/10 rounded-full px-3 py-1.5">
                  <span className="text-blue-400">✓</span> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
