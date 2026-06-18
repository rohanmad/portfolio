"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const reducedMotion = useReducedMotion()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  if (reducedMotion) return null

  return (
    <motion.div
      className="fixed top-12 right-0 left-0 z-50 h-px origin-left bg-[var(--accent)]"
      style={{ scaleX }}
      aria-hidden
    />
  )
}
