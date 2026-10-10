export const siteConfig = {
  name: "Custom Function Training",
  title: "Custom Function Training | Master Custom Function Programming",
  description:
    "Learn Custom Function programming through live online classes, practical assignments, debugging, real-world scenarios, and interview preparation.",
  tagline: "Master Custom Function Programming",
  support: "Learn. Practice. Prepare. Build Confidence.",
  email: "contact@example.com",
  phone: "+1 (000) 000-0000",
  phoneHref: "+10000000000",
} as const;

export function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000";

  try {
    return new URL(raw).origin;
  } catch {
    return "http://localhost:3000";
  }
}
