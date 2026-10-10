import { Container } from "@/components/Container";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { journeySteps } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export function LearningJourney() {
  return (
    <section className="bg-surface py-20 sm:py-28" aria-labelledby="journey-heading">
      <Container>
        <Reveal>
          <SectionHeader
            id="journey-heading"
            eyebrow="How you progress"
            title="Learning Journey"
            description="Each stage builds on the last, from understanding a concept to explaining it with confidence."
          />
        </Reveal>

        <ol className="relative mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          <div
            className="pointer-events-none absolute left-[8%] right-[8%] top-8 hidden h-px bg-gradient-to-r from-transparent via-cyan-500/70 to-transparent xl:block"
            aria-hidden="true"
          />
          {journeySteps.map((step, index) => (
            <li key={step.title} className="group relative h-full">
              {index < journeySteps.length - 1 ? (
                <ArrowRight
                  className="absolute -right-3 top-7 z-10 hidden size-4 text-cyan-500 xl:block"
                  aria-hidden="true"
                />
              ) : null}
              <Reveal delay={index * 0.05} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-4 shadow-soft motion-safe:transition motion-safe:hover:-translate-y-1 motion-safe:hover:border-cyan-500/40">
                  <div className="relative z-10 grid size-10 place-items-center rounded-full border border-line bg-white text-indigo-700">
                    <Icon name={step.icon} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted group-hover:text-ink">
                    {step.description}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
