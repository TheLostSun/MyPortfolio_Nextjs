import { useEffect, useRef } from "react";

type Props = { src: string; poster?: string; label: string; className?: string; aspect?: string };

/** Muted preview that loads and plays only while on screen. Controls let people unmute or go fullscreen. */
export default function Video({ src, poster, label, className = "", aspect = "aspect-video" }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => undefined);
        } else if (!el.paused) {
          el.pause();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={`block w-full ${aspect} object-contain bg-scope ${className}`}
      src={src}
      poster={poster}
      aria-label={label}
      muted
      loop
      playsInline
      controls
      preload="none"
    />
  );
}
