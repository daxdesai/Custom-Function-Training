export function SectionHeader({
  eyebrow,
  title,
  description,
  id,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  id: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.18em] ${
            tone === "light" ? "text-cyan-300" : "text-indigo-700"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={`mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl ${
          tone === "light" ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-pretty text-base leading-7 sm:text-lg ${
            tone === "light" ? "text-white/75" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
