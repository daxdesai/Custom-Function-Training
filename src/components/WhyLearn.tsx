import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { whyPoints } from "@/lib/content";
import { Check } from "lucide-react";

export function WhyLearn() {
  return (
    <section className="bg-surface py-20 sm:py-28" aria-labelledby="why-heading">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">
              The difference
            </p>
            <h2
              id="why-heading"
              className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              Why Learn With Us?
            </h2>
            <p className="mt-4 text-pretty text-base leading-7 text-muted sm:text-lg">
              The program is built around live teaching, repeated practice, and
              the support to keep going when the code does not work the first time.
            </p>
          </Reveal>
          <ul className="grid gap-3 sm:grid-cols-2">
            {whyPoints.map((point, index) => (
              <Reveal key={point} delay={index * 0.03}>
                <li className="flex h-full items-start gap-3 rounded-2xl border border-line bg-white px-4 py-4 shadow-soft">
                  <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-cyan-500/10 text-cyan-500">
                    <Check className="size-4" aria-hidden="true" strokeWidth={2.5} />
                  </span>
                  <span className="font-medium text-ink">{point}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
