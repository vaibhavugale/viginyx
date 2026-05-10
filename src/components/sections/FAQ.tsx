export default function FAQ() {
  const faqs = [
    { q: "Why focus specifically on ADRs?", a: "ADR reporting is the most cited non-compliance during NABH audits. A purpose-built tool outperforms generic HIS modules every time." },
    { q: "What makes it immutable?", a: "Every record is cryptographically hashed and stored on a blockchain ledger. It cannot be edited or deleted once written." },
    { q: "How is it different from HMS?", a: "HMS bundles treat PV as a checkbox. Viginyx offers AI causality scoring and blockchain security that HIS simply doesn't have." },
    { q: "HIS Integration?", a: "Viginyx runs alongside your existing HIS via API integration. It fills the critical PV gap without requiring a HIS replacement." }
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <div className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4 text-center">FAQ</div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-center mb-16">Frequently Asked Questions</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {faqs.map((faq, i) => (
          <div key={i} className="space-y-4">
            <h4 className="text-lg font-bold">Q: {faq.q}</h4>
            <p className="text-sm text-brand-3 leading-relaxed font-medium">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
