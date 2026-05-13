import { Header } from "@viginyx/ui";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <div className="p-8">
        <h1 className="text-4xl font-bold text-slate-900">Dashboard</h1>
        <p className="mt-4 text-slate-600">
          Welcome to the VIGINYX Intelligence Dashboard.
        </p>
      </div>
    </main>
  );
}
