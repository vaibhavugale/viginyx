export default function TrustLayer() {
  const complianceItems = [
    "DPDP Act 2023 Data Privacy",
    "NABH 6th Edition Compliance",
    "Blockchain Audit Integrity",
    "CDSCO Reporting Standards",
    "PvPI Integration Protocol"
  ];

  return (
    <section className="bg-brand-9/20 py-24 border-y border-brand-5/10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4">The Trust Layer</div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">Immutable Records. Unbreakable Trust.</h2>
        <p className="text-sm text-brand-3 max-w-2xl mb-12 leading-relaxed font-medium">
          Every ADR assessment, form submission, and data modification is cryptographically sealed on a blockchain-backed audit trail. Compliant with DPDP Act 2023 and NABH 6th Edition requirements.
        </p>

        <div className="border border-brand-5/30 bg-white rounded-3xl overflow-hidden">
          <div className="grid grid-cols-2 bg-brand-9/50 border-b border-brand-5/30 p-4 text-[10px] font-bold uppercase tracking-widest text-brand-3">
            <div>Compliance Check</div>
            <div className="text-right">Result</div>
          </div>
          {complianceItems.map((item, i) => (
            <div key={i} className="grid grid-cols-2 p-5 border-b last:border-b-0 border-brand-5/20 text-sm font-bold">
              <div>{item}</div>
              <div className="text-right text-primary">PASSED</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
