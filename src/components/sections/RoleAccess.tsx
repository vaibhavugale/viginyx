export default function RoleAccess() {
  const roles = [
    { role: "Patient", title: "Daily Check-in Portal", desc: "Simple daily check-ins via mobile. No app download needed. No medical training required." },
    { role: "Doctor / Clinician", title: "ADR Review Console", desc: "ADR review queue, auto-scored causality, and one-click CDSCO Yellow Form generation — without touching a spreadsheet." },
    { role: "Quality Manager", title: "Compliance Dashboard", desc: "Live compliance dashboard. Blockchain audit trail. Inspection-ready at all times." }
  ];

  return (
    <section className="bg-brand-9/20 py-24 border-y border-brand-5/10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4 text-center">Role-Based Access</div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-center mb-16">One Platform, Three Roles</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((item, i) => (
            <div key={i} className="p-8 bg-white border border-brand-5/20 rounded-[32px] flex flex-col h-full subtle-shadow">
              <div className="text-[10px] font-bold text-brand-5 mb-4 uppercase tracking-widest">{item.role}</div>
              <div className="text-primary text-sm font-bold mb-6">{item.title}</div>
              <p className="text-sm text-brand-3 leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
