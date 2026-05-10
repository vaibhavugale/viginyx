export default function EarlyAccessForm() {
  return (
    <section className="bg-brand-1 text-white py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-center mb-6">Get Early Access</h2>
        <p className="text-sm text-brand-5 text-center max-w-2xl mx-auto mb-16 font-medium">
          Join our first cohort for a free 4–8 week pilot. First-come, first-served.
        </p>
        
        <div className="bg-white text-brand-1 rounded-[32px] overflow-hidden">
          <form className="p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-brand-5 tracking-widest">Full Name</label>
                <input type="text" className="w-full border-b border-brand-5/30 py-2 focus:border-primary outline-none transition-colors" placeholder="Dr. Anjali Sharma" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-brand-5 tracking-widest">Work Email</label>
                <input type="email" className="w-full border-b border-brand-5/30 py-2 focus:border-primary outline-none transition-colors" placeholder="anjali@hospital.in" />
              </div>
            </div>
            <button className="w-full px-8 py-5 bg-primary text-white font-bold text-xs uppercase tracking-[0.2em] rounded-2xl hover:opacity-90 transition-opacity">
              Register Your Hospital's Interest →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
