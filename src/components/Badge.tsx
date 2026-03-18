interface BadgeProps {
  label: string;
  variant?: "default" | "gradient" | "muted";
}

export default function Badge({ label, variant = "default" }: BadgeProps) {
  const variants = {
    default: "bg-white/5 border border-white/10 text-slate-300",
    gradient: "bg-gradient-to-r from-accent-rose/10 via-accent-magenta/10 to-accent-violet/10 border border-accent-violet/20 text-white",
    muted: "bg-white/[0.03] border border-white/10 text-slate-500",
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${variants[variant]}`}>
      {label}
    </span>
  );
}
