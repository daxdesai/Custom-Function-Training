import { learningTopics } from "@/lib/content";
import { getSiteUrl, siteConfig } from "@/lib/site";

export function JsonLd() {
  const url = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: siteConfig.name,
        url,
      },
      {
        "@type": "Course",
        name: siteConfig.name,
        description: siteConfig.description,
        url,
        inLanguage: "en",
        courseMode: "online",
        provider: {
          "@type": "Organization",
          name: siteConfig.name,
          url,
        },
        teaches: learningTopics.map((topic) => topic.title),
        offers: {
          "@type": "Offer",
          category: "Online training",
          url: `${url}/#enroll`,
          availability: "https://schema.org/InStock",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
