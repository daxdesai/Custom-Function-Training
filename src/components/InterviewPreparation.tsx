import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { interviewTopics } from "@/lib/content";

const exchange = [
  {
    from: "Interviewer",
    text: "How would you check a visit date against consent?",
  },
  {
    from: "You",
    text: "Confirm both values exist, compare the dates, and open a query if the visit is earlier.",
  },
  {
    from: "Interviewer",
    text: "What cases would you test?",
  },
  {
    from: "You",
    text: "Missing values, equal dates, and a visit that falls before consent.",
  },
];

export function InterviewPreparation() {
  return (
    <section
      id="interview"
      className="section-anchor bg-surface py-20 sm:py-28"
      aria-labelledby="interview-heading"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <SectionHeader
              id="interview-heading"
              eyebrow="Interviews"
              title="Prepare With Confidence"
              description="The training also includes Custom Function interview preparation to help you approach technical interviews with greater confidence."
            />
          </Reveal>
          <ul className="mt-8 flex flex-wrap gap-2">
            {interviewTopics.map((topic) => (
              <li key={topic}>
                <span className="inline-flex rounded-full border border-line bg-white px-3 py-1.5 text-sm font-medium text-navy-900 shadow-soft">
                  {topic}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted">
            You will learn how to explain your approach, understand requirements,
            and solve programming-based scenarios during interviews.
          </p>
        </div>

        <Reveal delay={0.08}>
          <div
            className="rounded-3xl border border-navy-800 bg-navy-950 p-5 shadow-card sm:p-6"
            aria-label="Illustrative interview exchange"
          >
            <div className="mb-5 flex items-center justify-between gap-3">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-cyan-300">
                Practice prompt
              </p>
              <span className="rounded-full bg-white/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white/70">
                Example
              </span>
            </div>
            <div className="space-y-3">
              {exchange.map((line, index) => (
                <div
                  key={line.text}
                  className={`code-line max-w-[95%] rounded-2xl px-4 py-3 ${
                    line.from === "You"
                      ? "ml-auto bg-indigo-600 text-white"
                      : "bg-white/10 text-white/90"
                  }`}
                  style={{ animationDelay: `${index * 180}ms` }}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-300">
                    {line.from}
                  </p>
                  <p className="mt-1 text-sm leading-6">{line.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
