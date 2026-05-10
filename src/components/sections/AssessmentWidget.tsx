export default function AssessmentWidget() {
  return (
    <section className="bg-white py-16 border-b border-brand-5/10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-8 text-center">Live Assessment Widget</div>
        <div className="bg-white border border-brand-5/30 rounded-3xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-4 bg-brand-9/50 border-b border-brand-5/30 text-[10px] font-bold uppercase tracking-widest p-4 text-brand-3">
            <div>Naranjo Causality Score</div>
            <div>Method</div>
            <div>Time</div>
            <div>Status</div>
          </div>
          <div className="grid grid-cols-4 p-8 items-center">
            <div className="text-4xl font-bold tracking-tighter flex items-center gap-4">
              9 <span className="text-brand-3 font-normal">—</span> Definite
            </div>
            <div className="text-sm font-bold">Naranjo</div>
            <div className="text-sm font-bold">&lt;60s</div>
            <div className="text-sm font-bold text-primary">Validated</div>
          </div>
        </div>
      </div>
    </section>
  );
}
