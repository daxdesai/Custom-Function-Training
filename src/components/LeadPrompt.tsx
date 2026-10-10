"use client";

import { CtaButton } from "@/components/CtaButton";
import { leadSources } from "@/lib/content";
import { X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const STORAGE_KEY = "cft-lead-prompt-dismissed";

export function LeadPrompt() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const dismissed = () => window.sessionStorage.getItem(STORAGE_KEY) === "1";

    const formOnScreen = () => {
      const form = document.getElementById("enroll");
      const rect = form?.getBoundingClientRect();
      return Boolean(
        rect && rect.top < window.innerHeight * 0.85 && rect.bottom > 80,
      );
    };

    const reveal = () => {
      if (dismissed() || formOnScreen()) {
        setVisible(false);
        return;
      }
      setVisible(true);
    };

    const timer = window.setTimeout(reveal, 45000);
    const onScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      if (formOnScreen()) {
        setVisible(false);
        return;
      }
      if (!dismissed() && window.scrollY / scrollable > 0.62) reveal();
    };

    const form = document.getElementById("enroll");
    const observer = form
      ? new IntersectionObserver(
          ([entry]) => {
            if (entry?.isIntersecting) setVisible(false);
          },
          { threshold: 0.12 },
        )
      : null;
    if (form && observer) observer.observe(form);

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.aside
          key="lead-prompt"
          className="fixed bottom-4 right-4 z-30 w-[min(100%-2rem,22rem)] rounded-2xl border border-line bg-white/95 p-4 shadow-card backdrop-blur"
          aria-label="Enrollment prompt"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: 12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-semibold text-ink">Ready when you are</p>
        <button
          type="button"
          className="cursor-pointer rounded-full p-1 text-muted hover:bg-surface hover:text-ink"
          onClick={() => {
            window.sessionStorage.setItem(STORAGE_KEY, "1");
            setVisible(false);
          }}
        >
          <X className="size-4" aria-hidden="true" />
          <span className="sr-only">Dismiss</span>
        </button>
      </div>
      <p className="mt-1 text-sm leading-6 text-muted">
        Enroll or book a demo class when you want to talk.
      </p>
      <div className="mt-3 flex gap-2">
        <CtaButton
          source={leadSources.promptEnroll}
          size="sm"
          onPress={() => setVisible(false)}
        >
          Enroll Now
        </CtaButton>
        <CtaButton
          source={leadSources.promptDemo}
          size="sm"
          variant="secondary"
          onPress={() => setVisible(false)}
        >
          Book a Demo
        </CtaButton>
        </div>
      </motion.aside>
      ) : null}
    </AnimatePresence>
  );
}
