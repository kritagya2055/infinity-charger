'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

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
    if (raw) {
      setOrder(JSON.parse(raw));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="text-center max-w-md">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-3xl font-extrabold text-white mb-3">Order Placed!</h1>
          <p className="text-gray-400 mb-6">
            Thank you, {form.name}! Your order has been received. We'll deliver within 3-5 working days to {form.city}.
          </p>
          <button
            onClick={() => router.push('/')}
            className="px-8 py-3 rounded-xl font-bold text-white transition-all hover:scale-105"
            style={{ backgroundColor: '#3B82F6' }}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <button onClick={() => router.push('/')} className="text-blue-400 text-sm mb-4 flex items-center gap-1 hover:underline">
            ← Back to Product
          </button>
          <h1 className="text-3xl font-extrabold text-white">Checkout</h1>
        </div>

        {/* Order Summary */}
        {order && (
          <div className="p-5 rounded-2xl border border-white/10 bg-gray-900/50 mb-8">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Order Summary</h2>
            <div className="flex justify-between items-center mb-2">
              <span className="text-white">{order.productName}</span>
              <span className="text-gray-400">x{order.quantity}</span>
            </div>
            <div className="flex justify-between items-center mb-2 text-sm text-gray-400">
              <span>Price per piece</span>
              <span>Rs. {order.pricePerPiece.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center mb-2 text-sm text-green-400">
              <span>Delivery</span>
              <span>FREE</span>
            </div>
            <div className="border-t border-white/10 pt-3 mt-3 flex justify-between items-center">
              <span className="font-bold text-white text-lg">Total</span>
              <span className="font-extrabold text-xl" style={{ color: '#3B82F6' }}>
                Rs. {order.totalPrice.toLocaleString()}
              </span>
            </div>
          </div>
        )}

        {/* Delivery Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-lg font-bold text-white mb-2">Delivery Details</h2>
          {[
            { key: 'name', label: 'Full Name', placeholder: 'Your name', type: 'text' },
            { key: 'phone', label: 'Phone Number', placeholder: '98XXXXXXXX', type: 'tel' },
            { key: 'address', label: 'Delivery Address', placeholder: 'Street, Area', type: 'text' },
            { key: 'city', label: 'City / District', placeholder: 'Kathmandu', type: 'text' },
          ].map(({ key, label, placeholder, type }) => (
            <div key={key}>
              <label className="block text-sm text-gray-400 mb-1.5">{label}</label>
              <input
                type={type}
                required
                placeholder={placeholder}
                value={form[key as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          ))}

          <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-sm text-green-400 flex items-center gap-2">
            <span>💵</span>
            <span>Payment: Cash on Delivery (COD)</span>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl font-bold text-lg text-white transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/30 mt-2"
            style={{ backgroundColor: '#3B82F6' }}
          >
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
}
