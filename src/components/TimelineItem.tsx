interface TimelineItemProps {
  title: string;
  subtitle: string;
  description: string;
  period: string;
  isLast?: boolean;
}

export default function TimelineItem({ title, subtitle, description, period, isLast = false }: TimelineItemProps) {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-gradient-to-br from-accent-rose to-accent-violet flex-shrink-0 mt-1.5 ring-4 ring-background" />
        {!isLast && <div className="w-px bg-white/10 flex-1 mt-2" />}
      </div>
      <div className="pb-12">
        <p className="text-xs font-medium text-accent-magenta mb-1 uppercase tracking-wider">{period}</p>
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <p className="text-accent-violet text-sm font-medium mb-3">{subtitle}</p>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
