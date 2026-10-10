import { Container } from "@/components/Container";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { benefits } from "@/lib/content";

export function Benefits() {
  return (
    <section className="section-anchor bg-surface py-20 sm:py-28" aria-labelledby="benefits-heading">
      <Container>
        <Reveal>
          <SectionHeader
            id="benefits-heading"
            eyebrow="The program"
            title="What You Get"
            description="Everything you need to build practical programming skills and prepare for real-world opportunities."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={Math.min(index * 0.04, 0.24)}>
              <article className="group h-full rounded-2xl border border-line bg-white p-6 shadow-soft motion-safe:transition motion-safe:hover:-translate-y-1 motion-safe:hover:border-cyan-500/40 motion-safe:hover:shadow-card">
                <div className="grid size-11 place-items-center rounded-xl bg-surface text-indigo-700">
                  <Icon name={benefit.icon} />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{benefit.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
