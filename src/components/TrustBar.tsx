import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { trustHighlights } from "@/lib/content";

export function TrustBar() {
  return (
    <section aria-label="Program highlights" className="relative z-10 pb-6">
      <Container>
        <Reveal>
          <div className="grid overflow-hidden rounded-3xl border border-line bg-white shadow-card sm:grid-cols-2 lg:grid-cols-4">
            {trustHighlights.map((item, index) => (
              <article
                key={item.title}
                className={`px-6 py-6 ${
                  index > 0 ? "border-t border-line sm:border-t-0" : ""
                } ${index % 2 === 1 ? "sm:border-l sm:border-line" : ""} ${
                  index > 1 ? "lg:border-l lg:border-line" : ""
                }`}
              >
                <p className="font-mono text-xs font-medium text-cyan-500">
                  0{index + 1}
                </p>
                <p className="mt-2 text-base font-semibold text-ink">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
