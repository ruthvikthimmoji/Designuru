"use client";

import { useRef, useEffect } from "react";
import { useAnimation, useInView } from "framer-motion";

export function useScrollReveal(threshold: number = 0.2) {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, amount: threshold });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return { ref, controls };
}

