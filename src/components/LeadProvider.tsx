"use client";

import { leadSources } from "@/lib/content";
import { useReducedMotion } from "motion/react";
import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type LeadContextValue = {
  source: string;
  revision: number;
  scrollToForm: (source: string) => void;
};

const LeadContext = createContext<LeadContextValue | null>(null);

export function LeadProvider({ children }: { children: ReactNode }) {
  const [source, setSource] = useState<string>(leadSources.contactForm);
  const [revision, setRevision] = useState(0);
  const reduce = useReducedMotion();

  const value = useMemo<LeadContextValue>(
    () => ({
      source,
      revision,
      scrollToForm: (nextSource: string) => {
        setSource(nextSource);
        setRevision((current) => current + 1);
        document.getElementById("enroll")?.scrollIntoView({
          behavior: reduce ? "auto" : "smooth",
          block: "start",
        });
        window.setTimeout(
          () => {
            document.getElementById("lead-name")?.focus({ preventScroll: true });
          },
          reduce ? 0 : 700,
        );
      },
    }),
    [reduce, revision, source],
  );

  return <LeadContext.Provider value={value}>{children}</LeadContext.Provider>;
}

export function useLead() {
  const context = useContext(LeadContext);
  if (!context) {
    throw new Error("useLead must be used within LeadProvider");
  }
  return context;
}
