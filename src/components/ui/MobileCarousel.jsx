'use client'
/**
 * MobileCarousel — reusable utility
 *
 * Renders children as a swipeable single-item carousel on mobile,
 * and passes through as-is (null wrapper) on md+ so your grid/flex
 * layout stays fully in control on desktop.
 *
 * Props
 * ─────
 * children        ReactNode[]   Items to carousel. Each becomes one slide.
 * autoInterval    number        ms between auto-advance (0 = off). Default 0.
 * showDots        boolean       Show dot indicators. Default true.
 * showArrows      boolean       Show prev/next arrow buttons. Default true.
 * dotActiveClass  string        Tailwind classes for the active dot pill.
 * dotInactiveClass string       Tailwind classes for inactive dots.
 * arrowClass      string        Extra Tailwind classes applied to both arrow buttons.
 * className       string        Class applied to the outer carousel wrapper (mobile only).
 *
 * Usage
 * ─────
 * <MobileCarousel autoInterval={4000}>
 *   {items.map((item, i) => <MyCard key={i} {...item} />)}
 * </MobileCarousel>
 */

import { useState, useEffect, useCallback, useRef, Children } from "react";

// ── tiny hook: returns true when window width < 768px ────────────────────────
function useIsMobile() {
  const [mobile, setMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const handler = () => setMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return mobile;
}

// ── Arrow SVGs ────────────────────────────────────────────────────────────────
const ChevronLeft = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);
const ChevronRight = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

// ── Main component ────────────────────────────────────────────────────────────
export function MobileCarousel({
  children,
  autoInterval = 0,
  showDots = true,
  showArrows = true,
  dotActiveClass = "w-6 h-2.5 bg-pink-500",
  dotInactiveClass = "w-2.5 h-2.5 bg-gray-300 dark:bg-white/15 hover:bg-pink-300 dark:hover:bg-pink-400/40",
  arrowClass = "",
  className = "",
}) {
  const isMobile = useIsMobile();
  const slides = Children.toArray(children);
  const total = slides.length;

  const [index, setIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef(null);
  const trackRef = useRef(null);
  const autoRef = useRef(null);

  const go = useCallback(
    (next) => setIndex(Math.max(0, Math.min(total - 1, next))),
    [total]
  );

  // Auto-advance
  const resetAuto = useCallback(() => {
    if (!autoInterval) return;
    clearInterval(autoRef.current);
    autoRef.current = setInterval(
      () => setIndex((i) => (i >= total - 1 ? 0 : i + 1)),
      autoInterval
    );
  }, [autoInterval, total]);

  useEffect(() => {
    resetAuto();
    return () => clearInterval(autoRef.current);
  }, [resetAuto]);

  // Keep index valid if total changes
  useEffect(() => {
    setIndex((i) => Math.min(i, total - 1));
  }, [total]);

  // ── Pointer drag ────────────────────────────────────────────────────────────
  const onPointerDown = (e) => {
    setDragging(true);
    dragStart.current = e.clientX;
    trackRef.current?.setPointerCapture(e.pointerId);
  };

  const onPointerUp = (e) => {
    if (!dragging || dragStart.current === null) return;
    const delta = dragStart.current - e.clientX;
    if (Math.abs(delta) > 40) {
      go(index + (delta > 0 ? 1 : -1));
      resetAuto();
    }
    setDragging(false);
    dragStart.current = null;
  };

  // ── On desktop: render children unwrapped so parent grid/flex owns layout ──
  if (!isMobile) return <>{children}</>;

  // ── On mobile: full carousel ────────────────────────────────────────────────
  return (
    <div className={`relative w-full ${className}`}>
      {/* Track clip */}
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          style={{
            display: "flex",
            transform: `translateX(${-index * 100}%)`,
            transition: dragging
              ? "none"
              : "transform 0.42s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            cursor: dragging ? "grabbing" : "grab",
            userSelect: "none",
          }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              style={{ minWidth: "100%", boxSizing: "border-box" }}
              aria-hidden={i !== index}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      {showArrows && (
        <>
          <button
            onClick={() => { go(index - 1); resetAuto(); }}
            disabled={index === 0}
            aria-label="Previous slide"
            className={`
              absolute -left-3 top-1/2 -translate-y-1/2 z-10
              w-9 h-9 rounded-full flex items-center justify-center
              bg-white dark:bg-white/8 border border-gray-200/60 dark:border-white/10
              shadow-md text-gray-500 dark:text-gray-300
              hover:bg-pink-50 dark:hover:bg-pink-500/10 hover:border-pink-300/50 hover:text-pink-500
              disabled:opacity-25 disabled:cursor-not-allowed
              transition-all duration-200 select-none
              ${arrowClass}
            `}
          >
            <ChevronLeft />
          </button>

          <button
            onClick={() => { go(index + 1); resetAuto(); }}
            disabled={index >= total - 1}
            aria-label="Next slide"
            className={`
              absolute -right-3 top-1/2 -translate-y-1/2 z-10
              w-9 h-9 rounded-full flex items-center justify-center
              bg-white dark:bg-white/8 border border-gray-200/60 dark:border-white/10
              shadow-md text-gray-500 dark:text-gray-300
              hover:bg-pink-50 dark:hover:bg-pink-500/10 hover:border-pink-300/50 hover:text-pink-500
              disabled:opacity-25 disabled:cursor-not-allowed
              transition-all duration-200 select-none
              ${arrowClass}
            `}
          >
            <ChevronRight />
          </button>
        </>
      )}

      {/* Dots */}
      {showDots && total > 1 && (
        <div
          className="mt-5 flex items-center justify-center gap-2"
          role="tablist"
          aria-label="Slide navigation"
        >
          {slides.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => { go(i); resetAuto(); }}
              className={`rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 ${
                i === index ? dotActiveClass : dotInactiveClass
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MobileCarousel;
