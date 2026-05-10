export default function IntelligenceEngine() {
  const steps = [
    { id: "01", title: "Raw Data Input", desc: "Patient & drug data ingestion. Clinical inputs captured instantly across all ward touchpoints." },
    { id: "02", title: "Viginyx Core Engine", desc: "60-second causality assessment. AI-driven Naranjo & WHO-UMC scoring with automated Yellow Form generation." },
    { id: "03", title: "Validated Output", desc: "Causality scores, CDSCO-ready forms, and blockchain-sealed audit logs ready for regulatory submission." }
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <div className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4 text-center">Intelligence Engine</div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-center mb-4">From Raw Data to Validated Causality</h2>
      <p className="text-sm text-brand-3 text-center max-w-2xl mx-auto mb-16 font-medium">
        A three-phase logic flow that transforms unstructured ADR data into clinically validated assessments in under 60 seconds.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-brand-5/20 rounded-3xl overflow-hidden">
        {steps.map((step, i) => (
          <div key={i} className={`p-8 ${i < 2 ? 'md:border-r border-b md:border-b-0 border-brand-5/20' : ''}`}>
            <div className="text-[10px] font-bold text-brand-5 mb-6">{step.id}</div>
            <h3 className="text-xl font-bold mb-4">{step.title}</h3>
            <p className="text-sm text-brand-3 leading-relaxed font-medium">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
