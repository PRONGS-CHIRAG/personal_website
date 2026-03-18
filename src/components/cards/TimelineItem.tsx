interface TimelineItemProps {
  title: string;
  subtitle: string;
  description: string;
}

export function TimelineItem({ title, subtitle, description }: TimelineItemProps) {
  return (
    <li className="relative pl-8">
      <div className="absolute left-0 top-1 h-2 w-2 rounded-full bg-gradient-to-r from-[#FF4FA3] via-[#D946EF] to-[#8B5CF6]" />
      <h3 className="text-sm font-semibold text-zinc-50 sm:text-base">
        {title}
      </h3>
      <p className="mt-0.5 text-xs font-medium text-pink-300 sm:text-sm">
        {subtitle}
      </p>
      <p className="mt-1.5 text-xs text-zinc-400 sm:text-sm">{description}</p>
    </li>
  );
}
