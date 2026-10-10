import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { testimonials, type Testimonial } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="bg-surface py-20 sm:py-28" aria-labelledby="stories-heading">
      <Container>
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">
            Stories
          </p>
          <h2
            id="stories-heading"
            className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          >
            From the program
          </h2>
        </Reveal>

        {testimonials.length === 0 ? (
          <Reveal>
            <figure className="mt-10 rounded-3xl border border-dashed border-navy-800/15 bg-white px-6 py-12 text-center sm:px-10">
              <blockquote>
                <p className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  Student testimonials will appear here.
                </p>
              </blockquote>
              <figcaption className="mt-5 text-sm text-muted">
                Name · Role · Experience · Testimonial
              </figcaption>
            </figure>
          </Reveal>
        ) : (
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <TestimonialCard key={`${item.name}-${item.role}`} item={item} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-3xl border border-line bg-white p-6 shadow-soft">
      <blockquote className="text-base leading-7 text-ink">“{item.quote}”</blockquote>
      <figcaption className="mt-6 border-t border-line pt-4">
        <p className="font-semibold text-ink">{item.name}</p>
        <p className="text-sm text-muted">{item.role}</p>
        <p className="text-sm text-muted">{item.experience}</p>
      </figcaption>
    </figure>
  );
}
