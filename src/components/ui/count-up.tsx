"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CountUpProps {
  to: number;
  from?: number;
  direction?: "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
  suffix?: string;
  prefix?: string;
}

export default function CountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2, // Duration in seconds
  className = "",
  startWhen = true,
  separator = "",
  onStart,
  onEnd,
  suffix = "",
  prefix = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? to : from);

  // Calculate damping and stiffness based on duration
  // Standard spring transition is usually around 0.8s
  // We want to extend that to match the requested duration
  // stiffness = 100, damping = 10 is a standard spring
  
  const springValue = useSpring(motionValue, {
    damping: 20,
    stiffness: 100 * (1 / duration), // Lower stiffness = slower animation
    duration: duration * 1000 // Fallback if spring physics aren't used directly
  });

  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isInView && startWhen && !hasStarted) {
      if (onStart) onStart();
      setHasStarted(true);
      
      // We set the value to the target
      motionValue.set(direction === "down" ? from : to);
    }
  }, [isInView, startWhen, motionValue, direction, from, to, onStart, hasStarted]);

  // Group digits only when a separator is requested; toLocaleString() with the
  // visitor's locale would otherwise render e.g. 2019 as "2.019" in de-DE.
  const formatNumber = (value: number) =>
    separator
      ? Math.round(value).toLocaleString("en-US").replace(/,/g, separator)
      : String(Math.round(value));

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${formatNumber(latest)}${suffix}`;
      }
      
      if (latest === (direction === "down" ? from : to)) {
        if (onEnd) onEnd();
      }
    });

    return () => unsubscribe();
  }, [springValue, direction, from, to, separator, suffix, prefix, onEnd]);

  // Initial render value
  const initialValue = direction === "down" ? to : from;
  const formattedInitial = formatNumber(initialValue);

  return <span className={className} ref={ref}>{prefix}{formattedInitial}{suffix}</span>;
}
