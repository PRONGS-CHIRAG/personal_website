interface HighlightCardProps {
  title: string;
  description: string;
}

export function HighlightCard({ title, description }: HighlightCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_0_40px_rgba(0,0,0,0.7)] backdrop-blur-md">
      <h3 className="text-sm font-semibold text-zinc-50 sm:text-base">{title}</h3>
      <p className="mt-2 text-xs text-zinc-400 sm:text-sm">{description}</p>
    </div>
  );
}
