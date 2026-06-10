'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

interface OrderData {
  productName: string;
  quantity: number;
  pricePerPiece: number;
  totalPrice: number;
}

export default function CheckoutPage() {
  const router = useRouter();
  const [order, setOrder] = useState<OrderData | null>(null);
  const [form, setForm] = useState({ name: '', phone: '', address: '', city: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem('flexcharge_order');
    if (raw) setOrder(JSON.parse(raw));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-md"
        >
          <p className="text-xs tracking-[0.3em] mb-8" style={{ color: '#888' }}>
            ORDER CONFIRMED
          </p>
          <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">Thank you,<br />{form.name}.</h1>
          <p className="text-sm mb-12" style={{ color: '#888' }}>
            Your order will arrive in 3–5 working days to {form.city}.
            <br />Payment via Cash on Delivery.
          </p>
          <button
            onClick={() => router.push('/')}
            className="border border-white text-white text-xs px-8 py-3 tracking-widest transition-all hover:bg-white hover:text-black"
          >
            BACK TO HOME
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black" style={{ borderTop: '1px solid #1A1A1A' }}>
      {/* Minimal nav */}
      <div className="flex items-center justify-between px-6 md:px-12 h-14" style={{ borderBottom: '1px solid #1A1A1A' }}>
        <button onClick={() => router.push('/')} className="text-xs tracking-widest transition-colors hover:text-white" style={{ color: '#888' }}>
          ← BACK
        </button>
        <span className="text-white font-bold text-xs tracking-[0.2em]">FLEXCHARGE</span>
        <div className="w-16" />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left — order summary */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.25em] mb-8" style={{ color: '#888' }}>
            ORDER SUMMARY
          </p>

          {order ? (
            <div className="space-y-6">
              <div>
                <p className="text-base font-medium text-white mb-1">{order.productName}</p>
                <p className="text-sm" style={{ color: '#888' }}>Qty: {order.quantity}</p>
              </div>
              <div className="space-y-3 py-6" style={{ borderTop: '1px solid #1A1A1A', borderBottom: '1px solid #1A1A1A' }}>
                <div className="flex justify-between text-sm">
                  <span style={{ color: '#888' }}>Price per piece</span>
                  <span className="text-white">Rs. {order.pricePerPiece.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span style={{ color: '#888' }}>Delivery</span>
                  <span className="text-white">Free</span>
                </div>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-sm font-medium text-white tracking-wide">TOTAL</span>
                <span className="text-2xl font-bold text-white">Rs. {order.totalPrice.toLocaleString()}</span>
              </div>
              <div
                className="flex items-center gap-3 p-4 text-xs"
                style={{ border: '1px solid #1A1A1A', color: '#888' }}
              >
                <span>💵</span>
                <span>Cash on Delivery — Pay when your order arrives.</span>
              </div>
            </div>
          ) : (
            <p className="text-sm" style={{ color: '#888' }}>No order found.</p>
          )}
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="text-xs tracking-[0.25em] mb-8" style={{ color: '#888' }}>
            DELIVERY DETAILS
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              { key: 'name', label: 'FULL NAME', placeholder: 'Your full name', type: 'text' },
              { key: 'phone', label: 'PHONE', placeholder: '98XXXXXXXX', type: 'tel' },
              { key: 'address', label: 'ADDRESS', placeholder: 'Street, Area', type: 'text' },
              { key: 'city', label: 'CITY / DISTRICT', placeholder: 'Kathmandu', type: 'text' },
            ].map(({ key, label, placeholder, type }) => (
              <div key={key}>
                <label className="block text-xs tracking-widest mb-2" style={{ color: '#555' }}>
                  {label}
                </label>
                <input
                  type={type}
                  required
                  placeholder={placeholder}
                  value={form[key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  className="w-full px-0 py-3 bg-transparent text-white text-sm placeholder-gray-700 outline-none border-b focus:border-b-white transition-colors"
                  style={{ borderBottom: '1px solid #333' }}
                />
              </div>
            ))}

            <button
              type="submit"
              className="w-full bg-white text-black text-xs font-medium py-4 tracking-widest transition-all hover:bg-gray-100 mt-4"
              style={{ letterSpacing: '0.12em' }}
            >
              CONFIRM ORDER
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
