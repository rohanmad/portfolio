"use client"

import { useRef, type ReactNode, type MouseEvent } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion"

type MagneticButtonProps = {
  children: ReactNode
  className?: string
  onClick?: () => void
  href?: string
  target?: string
  strength?: number
}

export function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  target,
  strength = 0.08,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 250, damping: 28 })
  const springY = useSpring(y, { stiffness: 250, damping: 28 })

  const handleMouse = (event: MouseEvent) => {
    if (reducedMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((event.clientX - centerX) * strength)
    y.set((event.clientY - centerY) * strength)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  const inner = (
    <motion.div
      ref={ref}
      style={reducedMotion ? undefined : { x: springX, y: springY }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className={className}
      whileTap={{ scale: 0.985 }}
    >
      {children}
    </motion.div>
  )

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className="block w-full"
      >
        {inner}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className="border-0 bg-transparent p-0">
      {inner}
    </button>
  )
}
