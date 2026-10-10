import type { CodeToken } from "@/lib/content";

const tones: Record<NonNullable<CodeToken["tone"]>, string> = {
  comment: "text-[#8ea0b8]",
  keyword: "text-cyan-300",
  type: "text-[#b7c7ff]",
  string: "text-[#d5e4ff]",
  plain: "text-[#d7e0ec]",
};

export function CodeWindow({
  filename,
  lines,
  label,
  className = "",
}: {
  filename: string;
  lines: CodeToken[][];
  label: string;
  className?: string;
}) {
  return (
    <figure
      className={`float-slow overflow-hidden rounded-2xl border border-white/10 bg-navy-950 shadow-card ${className}`}
      aria-label={label}
    >
      <figcaption className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-[#f0b4b4]" />
          <span className="size-2.5 rounded-full bg-[#f3d7a1]" />
          <span className="size-2.5 rounded-full bg-[#b7e0c2]" />
        </span>
        <span className="font-mono text-xs text-white/70">{filename}</span>
        <span className="ml-auto rounded-full bg-white/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-cyan-300">
          Sample
        </span>
      </figcaption>
      <pre className="overflow-x-auto px-4 py-4 font-mono text-[12.5px] leading-6 sm:px-5 sm:text-[13px]">
        <code>
          {lines.map((line, index) => (
            <span
              key={`${filename}-${index}`}
              className="code-line block min-h-6"
              style={{ animationDelay: `${index * 65}ms` }}
            >
              {line.length === 0 || (line.length === 1 && line[0]?.text === "")
                ? " "
                : line.map((token, tokenIndex) => (
                    <span
                      key={`${index}-${tokenIndex}`}
                      className={tones[token.tone ?? "plain"]}
                    >
                      {token.text}
                    </span>
                  ))}
              {index === lines.length - 1 ? <span className="caret" /> : null}
            </span>
          ))}
        </code>
      </pre>
    </figure>
  );
}
