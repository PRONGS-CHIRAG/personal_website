"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 gap-2",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-[#FF4FA3] via-[#D946EF] to-[#8B5CF6] text-white shadow-lg shadow-[#FF4FA3]/30 hover:shadow-xl hover:brightness-110",
        secondary:
          "border border-white/15 bg-white/5 text-white hover:bg-white/10",
        ghost: "text-zinc-300 hover:bg-white/5",
      },
      size: {
        md: "px-5 py-2.5",
        lg: "px-6 py-3 text-base",
        sm: "px-3 py-1.5 text-xs",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export function Button({
  className,
  variant,
  size,
  leftIcon,
  rightIcon,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size, className }))} {...props}>
      {leftIcon && <span className="mr-1.5">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="ml-1.5">{rightIcon}</span>}
    </button>
  );
}
