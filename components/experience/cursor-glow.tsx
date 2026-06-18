"use client"

import { useEffect } from "react"
import { motion, useMotionTemplate, useSpring } from "framer-motion"
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion"
import { useMousePosition } from "@/lib/hooks/use-mouse-position"

export function CursorGlow() {
  const { x: mouseX, y: mouseY } = useMousePosition()
  const reducedMotion = useReducedMotion()

  const x = useSpring(0, { stiffness: 100, damping: 30, mass: 0.35 })
  const y = useSpring(0, { stiffness: 100, damping: 30, mass: 0.35 })

  useEffect(() => {
    x.set(mouseX)
    y.set(mouseY)
  }, [mouseX, mouseY, x, y])

  useEffect(() => {
    x.set(window.innerWidth / 2)
    y.set(window.innerHeight / 2)
  }, [x, y])

  const background = useMotionTemplate`
    radial-gradient(780px circle at ${x}px ${y}px, oklch(0.16 0.03 260 / 0.5), transparent 70%),
    radial-gradient(420px circle at ${x}px ${y}px, oklch(0.72 0.14 235 / 0.09), transparent 58%)
  `

  if (reducedMotion) return null

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[1]"
      style={{ background }}
      aria-hidden
    />
  )
}
