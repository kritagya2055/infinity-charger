import FadeSection from './FadeSection';

const testimonials = [
  {
    name: 'Ayush Baral',
    stars: 5,
    text: 'Best cable I\'ve ever used. Works with all my devices. Highly recommend!',
  },
  {
    name: 'Arun Ramtel',
    stars: 5,
    text: 'Premium quality and very durable. Worth every rupee!',
  },
  {
    name: 'Prabhakar Kafle',
    stars: 5,
    text: 'Fast delivery and great product. Works perfectly with iPhone and Android both!',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="max-w-6xl mx-auto">
        <FadeSection>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              What Our <span style={{ color: '#3B82F6' }}>Customers Say</span>
            </h2>
            <p className="text-gray-400">Join thousands of happy customers across Nepal</p>
          </div>
        </FadeSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeSection key={t.name} delay={i * 100}>
              <div
                className="p-6 rounded-2xl border border-white/10 bg-gray-900/50 h-full flex flex-col gap-4"
                style={{ boxShadow: '0 0 20px rgba(59,130,246,0.08)' }}
              >
                <div className="text-yellow-400 text-xl">{'★'.repeat(t.stars)}</div>
                <p className="text-gray-300 flex-1 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm text-white" style={{ backgroundColor: '#3B82F6' }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-green-400 flex items-center gap-1">
                      <span>✓</span> Verified Buyer
                    </div>
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
