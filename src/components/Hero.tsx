import { CodeWindow } from "@/components/CodeWindow";
import { Container } from "@/components/Container";
import { CtaButton } from "@/components/CtaButton";
import { heroCode, leadSources } from "@/lib/content";

export function Hero() {
  return (
    <section id="home" className="section-anchor relative overflow-hidden">
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="grid-fade pointer-events-none absolute inset-0" />

      <Container className="relative grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700">
            <span className="size-1.5 rounded-full bg-cyan-500" aria-hidden="true" />
            Online training program
          </p>
          <h1 className="mt-5 max-w-xl text-balance text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl lg:text-6xl lg:leading-[1.05]">
            Master Custom Function Programming
          </h1>
          <p className="mt-5 text-lg font-medium text-indigo-700 sm:text-xl">
            Learn. Practice. Prepare. Build Confidence.
          </p>
          <div className="mt-5 max-w-xl space-y-4 text-base leading-7 text-muted sm:text-lg">
            <p>
              Our Custom Function Training is an online training program designed
              to help you develop practical knowledge and skills in Custom Function
              programming.
            </p>
            <p>
              The training focuses on live online classes, practical assignments,
              real-world programming scenarios, debugging, and interview
              preparation.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaButton source={leadSources.heroEnroll} showArrow className="w-full sm:w-auto">
              Enroll Now
            </CtaButton>
            <CtaButton
              source={leadSources.heroDemo}
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Book a Demo Class
            </CtaButton>
          </div>
          <p className="mt-6 text-sm font-medium text-navy-800">
            Live Classes • Practical Assignments • Doubt Support • Interview
            Preparation
          </p>
        </div>

        <CodeWindow
          filename="VisitDateCheck"
          lines={heroCode}
          label="Illustrative Custom Function edit check"
        />
      </Container>
    </section>
  );
}
