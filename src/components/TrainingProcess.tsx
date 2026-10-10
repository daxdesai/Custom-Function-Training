import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { processSteps } from "@/lib/content";

export function TrainingProcess() {
  return (
    <section className="bg-white py-20 sm:py-28" aria-labelledby="process-heading">
      <Container>
        <SectionHeader
          id="process-heading"
          eyebrow="How it works"
          title="Training Process"
          description="Five steps from joining the program to preparing for interviews."
        />
        <ol className="relative mt-14 grid gap-8 md:grid-cols-5">
          <div
            className="absolute bottom-0 left-5 top-0 w-px -translate-x-1/2 bg-line md:hidden"
            aria-hidden="true"
          />
          <div
            className="line-y absolute bottom-0 left-5 top-0 w-px -translate-x-1/2 bg-cyan-500 md:hidden"
            aria-hidden="true"
          />
          <div
            className="absolute left-0 right-0 top-5 hidden h-px bg-line md:block"
            aria-hidden="true"
          />
          <div
            className="line-x absolute left-0 right-0 top-5 hidden h-px bg-cyan-500 md:block"
            aria-hidden="true"
          />

          {processSteps.map((step) => (
            <li key={step.number} className="reveal relative pl-14 md:pl-0 md:pt-14">
              <span className="absolute left-0 top-0 z-10 grid size-10 place-items-center rounded-full border border-line bg-white font-mono text-xs font-medium text-navy-900">
                {step.number}
              </span>
              <h3 className="text-base font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
