export default function Footer() {
  return (
    <footer className="py-10 px-4 border-t border-white/10" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-2">
        <span className="text-2xl font-extrabold" style={{ color: '#3B82F6' }}>
          FlexCharge
        </span>
        <p className="text-gray-500 text-sm">One Cable. Every Device. Everywhere.</p>
        <p className="text-gray-600 text-xs mt-2">
          © {new Date().getFullYear()} FlexCharge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
