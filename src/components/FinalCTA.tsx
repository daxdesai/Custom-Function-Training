import { Container } from "@/components/Container";
import { CtaButton } from "@/components/CtaButton";
import { finalHighlights, leadSources } from "@/lib/content";

export function FinalCTA() {
  return (
    <section className="cta-glow text-white" aria-labelledby="final-cta-heading">
      <Container className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Begin
          </p>
          <h2
            id="final-cta-heading"
            className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-5xl"
          >
            Start Your Custom Function Learning Journey
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-white/75 sm:text-lg">
            Build practical Custom Function skills with live online training,
            assignments, support, and interview preparation.
          </p>
          <p className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm font-medium text-white">
            {finalHighlights.map((item, index) => (
              <span key={item} className="inline-flex items-center gap-3">
                {index > 0 ? (
                  <span className="text-white/35" aria-hidden="true">
                    |
                  </span>
                ) : null}
                {item}
              </span>
            ))}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <CtaButton
              source={leadSources.finalEnroll}
              variant="inverseSolid"
              showArrow
              className="w-full sm:w-auto"
            >
              Enroll Now
            </CtaButton>
            <CtaButton
              source={leadSources.finalDemo}
              variant="inverse"
              className="w-full sm:w-auto"
            >
              Book a Demo Class
            </CtaButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
