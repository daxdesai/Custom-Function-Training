"use client";

import { CtaButton } from "@/components/CtaButton";
import { Logo } from "@/components/Logo";
import { leadSources, navLinks } from "@/lib/content";
import { Menu, X } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b motion-safe:transition-[background-color,box-shadow,height,border-color] ${
        scrolled
          ? "h-14 border-line/80 bg-white/80 shadow-soft backdrop-blur-xl"
          : "h-16 border-transparent bg-white/75 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#home" className="rounded-lg" onClick={() => setOpen(false)}>
          <Logo />
          <span className="sr-only">Custom Function Training, home</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-navy-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CtaButton source={leadSources.navbarEnroll} size="sm" showArrow>
            Enroll Now
          </CtaButton>
        </div>

        <button
          type="button"
          className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full border border-line bg-white text-navy-900 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      {open
        ? createPortal(
            <motion.div
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className={`fixed inset-x-0 bottom-0 z-40 overflow-y-auto bg-white px-5 py-6 lg:hidden ${
                scrolled ? "top-14" : "top-16"
              }`}
              initial={reduce ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-xl px-3 py-3 text-base font-medium text-navy-900 hover:bg-surface"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <CtaButton
                source={leadSources.navbarEnroll}
                className="mt-6 w-full"
                showArrow
                onPress={() => setOpen(false)}
              >
                Enroll Now
              </CtaButton>
            </motion.div>,
            document.body,
          )
        : null}
    </header>
  );
}
