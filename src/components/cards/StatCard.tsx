interface StatCardProps {
  label: string;
  value: string;
}

export function StatCard({ label, value }: StatCardProps) {
  return (
    // These compact metrics break up the biography section with quick, scannable proof points.
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_0_40px_rgba(0,0,0,0.7)] backdrop-blur-md">
      <div className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">
        {label}
      </div>
      <div className="mt-2 text-xl font-semibold text-zinc-50">{value}</div>
    </div>
  );
}
