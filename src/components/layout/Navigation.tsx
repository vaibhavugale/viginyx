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
    <footer className="bg-white text-brand-1 pt-20 pb-10 px-8 border-t border-brand-5/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-brand-1 font-serif italic">Viginyx</h2>
            <p className="text-sm md:text-base text-brand-4 leading-relaxed max-w-sm">
              Precision Pharmacovigilance Intelligence for Modern Indian Hospitals. Built for NABH compliance, powered by AI, secured by blockchain.
            </p>
            <div className="flex items-center gap-3 text-brand-8">
              <div className="w-5 h-5 rounded-full bg-brand-8/10 flex items-center justify-center shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-8" />
              </div>
              <span className="text-[11px] md:text-xs font-medium text-brand-5">Incubated at RIIDL, Somaiya Vidyavihar University, Mumbai</span>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12">
            
            {/* Platform Links */}
            <div className="space-y-6">
              <h4 className="text-[10px] font-black text-brand-5 uppercase tracking-[0.2em]">Platform</h4>
              <ul className="space-y-4">
                {["ADR Reporting", "Causality Engine", "CDSCO Yellow Forms", "PvPI Integration", "Audit Trail"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[13px] font-bold text-brand-3 hover:text-brand-8 transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compliance Links */}
            <div className="space-y-6">
              <h4 className="text-[10px] font-black text-brand-5 uppercase tracking-[0.2em]">Compliance</h4>
              <ul className="space-y-4">
                {["NABH 6th Edition", "DPDP Act 2023", "CDSCO Standards", "PvPI Guidelines", "Blockchain Security"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[13px] font-bold text-brand-3 hover:text-brand-8 transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-brand-5/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-lg bg-brand-1/5 flex items-center justify-center">
              <div className="w-3 h-3 border-2 border-brand-1/20 rounded-sm" />
            </div>
            <span className="text-[10px] md:text-xs font-black text-brand-5 uppercase tracking-widest">NABH Compliant Architecture</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-1/5 flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-brand-3 rounded-sm flex items-center justify-center">
                <div className="w-1 h-1 bg-brand-3 rounded-full" />
              </div>
            </div>
            <a href="mailto:helloviginyx@gmail.com" className="text-[13px] font-bold text-brand-3 hover:text-brand-1 transition-colors tracking-tight">
              helloviginyx@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
