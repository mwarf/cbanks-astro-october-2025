const WORDS_PER_MINUTE = 200;

/** Estimate reading time for a block of markdown/plain text, e.g. "4 min read". */
export function readingTime(content: string | undefined): string {
  const words = content?.trim().split(/\s+/).filter(Boolean).length ?? 0;
  const minutes = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
  return `${minutes} min read`;
}
