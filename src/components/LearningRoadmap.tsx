import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { learningTopics } from "@/lib/content";

export function LearningRoadmap() {
  return (
    <section
      id="learn"
      className="section-anchor bg-white py-20 sm:py-28"
      aria-labelledby="learn-heading"
    >
      <Container>
        <SectionHeader
          id="learn-heading"
          eyebrow="Curriculum"
          title="What Will You Learn?"
          description="The training focuses on practical Custom Function concepts that help you understand programming, solve problems, and work with real-world scenarios."
        />

        <ol className="relative mx-auto mt-14 max-w-3xl space-y-4">
          <div
            className="absolute bottom-2 left-5 top-2 w-px -translate-x-1/2 bg-line"
            aria-hidden="true"
          />
          <div
            className="line-y absolute bottom-2 left-5 top-2 w-px -translate-x-1/2 bg-cyan-500"
            aria-hidden="true"
          />

          {learningTopics.map((topic) => (
            <li
              key={topic.number}
              className="reveal relative grid grid-cols-[2.5rem_minmax(0,1fr)] items-start gap-4"
            >
              <span className="relative z-10 grid size-10 place-items-center rounded-full border border-line bg-white font-mono text-xs font-medium text-navy-900">
                {topic.number}
              </span>
              <div className="rounded-2xl border border-line bg-white px-5 py-4 shadow-soft motion-safe:transition motion-safe:hover:border-cyan-500/40">
                <h3 className="text-base font-semibold text-ink sm:text-lg">{topic.title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted">{topic.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
