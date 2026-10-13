const rot = { ne: -45, se: 45, down: 90, right: 0 } as const;

/** Signage arrow drawn as SVG so it never renders as an emoji. */
export default function Arrow({ dir = "ne" }: { dir?: keyof typeof rot }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      width="14"
      height="14"
      className="shrink-0"
      style={{ transform: `rotate(${rot[dir]}deg)` }}
    >
      <path d="M1 7h10.2L7.1 2.9 8.5 1.5 15 8l-6.5 6.5-1.4-1.4 4.1-4.1H1z" fill="currentColor" />
    </svg>
  );
}
