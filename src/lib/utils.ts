import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  // `clsx` handles conditional class names, and `twMerge` resolves Tailwind conflicts.
  return twMerge(clsx(inputs));
}
