export default function AdminAnalytics() {
  const stats = [
    { label: "ADRs This Month", value: "91", trend: "+18%", positive: true },
    { label: "Avg Causality Time", value: "47s", trend: "-12%", positive: true },
    { label: "Pending Reports", value: "9", trend: "-34%", positive: true },
    { label: "Resolution Rate", value: "90.1%", trend: "+4.2%", positive: true }
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <div className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4 text-center">Admin Analytics</div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-center mb-4">Hospital-Grade Intelligence Dashboard</h2>
      <p className="text-sm text-brand-3 text-center max-w-2xl mx-auto mb-16 font-medium">
        Real-time ADR surveillance, causality clustering, and reporting latency — all in one view.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 border border-brand-5/20 rounded-3xl overflow-hidden bg-white">
        {stats.map((stat, i) => (
          <div key={i} className="p-8 border-r last:border-r-0 border-b md:border-b-0 border-brand-5/20">
            <div className="text-[10px] font-bold text-brand-5 uppercase tracking-widest mb-4">{stat.label}</div>
            <div className="text-4xl font-bold mb-4">{stat.value}</div>
            <div className={`text-xs font-bold ${stat.positive ? 'text-primary' : 'text-red-500'} flex items-center gap-1`}>
              {stat.positive ? '▲' : '▼'} {stat.trend}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
