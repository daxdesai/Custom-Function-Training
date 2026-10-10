"use client";

import { useLead } from "@/components/LeadProvider";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

const variants = {
  primary: "bg-navy-900 text-white shadow-soft hover:bg-navy-800",
  secondary:
    "border border-navy-900/15 bg-white text-navy-900 hover:border-cyan-500/40 hover:bg-surface",
  inverse:
    "border border-white/20 bg-white/10 text-white hover:bg-white/15",
  inverseSolid: "bg-white text-navy-900 hover:bg-cyan-300",
  link: "bg-transparent font-medium text-white/75 shadow-none hover:bg-transparent hover:text-white",
} as const;

const sizes = {
  md: "h-12 px-5 text-sm",
  sm: "h-10 px-4 text-sm",
  inline: "h-auto px-0 py-0 text-sm",
} as const;

export function CtaButton({
  source,
  children,
  variant = "primary",
  size = "md",
  className = "",
  showArrow = false,
  onPress,
}: {
  source: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  showArrow?: boolean;
  onPress?: () => void;
}) {
  const { scrollToForm } = useLead();

  return (
    <button
      type="button"
      onClick={() => {
        onPress?.();
        scrollToForm(source);
      }}
      className={`inline-flex cursor-pointer items-center justify-center gap-2 rounded-full font-semibold motion-safe:transition motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {showArrow ? <ArrowRight className="size-4" aria-hidden="true" /> : null}
    </button>
  );
}
