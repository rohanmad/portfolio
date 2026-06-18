"use client"

import { motion } from "framer-motion"
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion"

export function AmbientBackground() {
  const reducedMotion = useReducedMotion()

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[var(--void)]" />
      <div className="grid-overlay absolute inset-0 opacity-[0.03]" />

      {!reducedMotion && (
        <motion.div
          className="absolute -top-1/4 left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full blur-[120px]"
          style={{ background: "oklch(0.72 0.14 235 / 0.06)" }}
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </div>
  )
}
