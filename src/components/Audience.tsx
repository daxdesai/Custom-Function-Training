import { Container } from "@/components/Container";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { audience } from "@/lib/content";

export function Audience() {
  return (
    <section
      id="audience"
      className="section-anchor bg-white py-20 sm:py-28"
      aria-labelledby="audience-heading"
    >
      <Container>
        <Reveal>
          <SectionHeader
            id="audience-heading"
            eyebrow="Audience"
            title="Who Is This Training For?"
            description="A structured path for people who want practical Custom Function skills, whether they are starting out or preparing for the next interview."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {audience.map((person, index) => (
            <Reveal key={person.title} delay={index * 0.04}>
              <article className="h-full rounded-2xl border border-line bg-white p-6 shadow-soft motion-safe:transition motion-safe:hover:-translate-y-1 motion-safe:hover:border-cyan-500/40">
                <div className="grid size-11 place-items-center rounded-xl bg-surface text-indigo-700">
                  <Icon name={person.icon} />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
                  {person.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{person.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
