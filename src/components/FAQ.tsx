"use client";

import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { faqs } from "@/lib/content";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-anchor bg-white py-20 sm:py-28" aria-labelledby="faq-heading">
      <Container>
        <SectionHeader
          id="faq-heading"
          eyebrow="Questions"
          title="FAQ"
          description="Straight answers about who the training is for, how the classes work, and how to enroll."
          align="center"
        />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-line overflow-hidden rounded-3xl border border-line bg-white shadow-soft">
          {faqs.map((item, index) => {
            const open = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div key={item.question}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold text-ink sm:px-6"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : index)}
                  >
                    {item.question}
                    <ChevronDown
                      className={`size-5 shrink-0 text-indigo-700 motion-safe:transition ${
                        open ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={open ? undefined : true}
                  inert={open ? undefined : true}
                  className={`grid motion-safe:transition-[grid-template-rows] motion-safe:duration-300 ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-7 text-muted sm:px-6 sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
