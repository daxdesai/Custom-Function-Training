import { Container } from "@/components/Container";
import { CtaButton } from "@/components/CtaButton";
import { Logo } from "@/components/Logo";
import { leadSources } from "@/lib/content";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#learn", label: "What You'll Learn" },
  { href: "#practical", label: "Practical Training" },
  { href: "#interview", label: "Interview Preparation" },
  { href: "#faq", label: "FAQ" },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo tone="light" />
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/70">
            {siteConfig.tagline}
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
            Explore
          </p>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-white/75 hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <CtaButton
                source={leadSources.footerEnroll}
                variant="link"
                size="inline"
              >
                Enroll
              </CtaButton>
            </li>
          </ul>
        </nav>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-white/75 hover:text-white"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="text-white/75 hover:text-white"
              >
                {siteConfig.phone}
              </a>
            </li>
          </ul>
          <p className="mt-3 text-xs text-white/45">Placeholder contact details.</p>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-5">
          <p className="text-xs text-white/55">
            © 2026 Custom Function Training. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
