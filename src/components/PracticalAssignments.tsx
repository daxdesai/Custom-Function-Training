import { CodeWindow } from "@/components/CodeWindow";
import { Container } from "@/components/Container";
import { CtaButton } from "@/components/CtaButton";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { assignmentCode, assignmentFlow, leadSources } from "@/lib/content";
import { ArrowDown } from "lucide-react";

export function PracticalAssignments() {
  return (
    <section
      id="practical"
      className="section-anchor bg-white py-20 sm:py-28"
      aria-labelledby="practical-heading"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <Reveal>
            <SectionHeader
              id="practical-heading"
              eyebrow="Assignments"
              title="Practice Makes Progress"
              description="Learning programming requires practice. Throughout the training, you will receive hands-on assignments that allow you to apply the concepts covered during the live sessions."
            />
          </Reveal>
          <ol className="mt-8 max-w-sm">
            {assignmentFlow.map((step, index) => (
              <li key={step}>
                <div className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3">
                  <span className="font-mono text-xs text-cyan-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium text-ink">{step}</span>
                </div>
                {index < assignmentFlow.length - 1 ? (
                  <ArrowDown
                    className="mx-auto my-1 size-4 text-indigo-600"
                    aria-hidden="true"
                  />
                ) : null}
              </li>
            ))}
          </ol>
          <CtaButton source={leadSources.practical} className="mt-8" showArrow>
            Start Practicing
          </CtaButton>
        </div>
        <Reveal delay={0.08}>
          <CodeWindow
            filename="Assignment"
            lines={assignmentCode}
            label="Illustrative assignment snippet"
            className="float-none"
          />
        </Reveal>
      </Container>
    </section>
  );
}
