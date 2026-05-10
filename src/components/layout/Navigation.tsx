export function Header() {
  return (
    <header className="max-w-7xl mx-auto w-full flex items-center justify-between px-8 py-6">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">V</div>
        <h1 className="text-xl font-bold tracking-tight text-brand-1">VIGINYX</h1>
      </div>
      <nav className="hidden md:flex items-center gap-8">
        {["Product", "Security", "NABH", "Pricing"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-bold text-brand-3 hover:text-brand-1 transition-colors">
            {item}
          </a>
        ))}
      </nav>
      <button className="px-6 py-2.5 bg-brand-1 text-white text-sm font-bold rounded-xl hover:bg-brand-2 transition-colors subtle-shadow">
        Book a Demo
      </button>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="py-12 border-t border-brand-5/10 bg-white text-center">
      <div className="text-[10px] font-bold tracking-widest uppercase text-brand-3">
        © NABH Compliant Architecture | helloviginyx@gmail.com
      </div>
    </footer>
  );
}
