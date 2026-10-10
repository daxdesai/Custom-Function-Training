const FORMULA_PREFIX = /^[=+\-@\t\r]/;

export function plainText(
  value: string,
  max: number,
  preserveNewlines = false,
) {
  const withoutTags = value.replace(/[<>]/g, "");
  const normalized = preserveNewlines
    ? withoutTags.replace(/\r\n/g, "\n").replace(/[^\S\n]+/g, " ").trim()
    : withoutTags.replace(/\s+/g, " ").trim();
  const sliced = normalized.slice(0, max);

  if (FORMULA_PREFIX.test(sliced)) {
    return `'${sliced}`;
  }

  return sliced;
}
