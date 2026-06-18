"use client"

import { useEffect, useState } from "react"
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion"

type TypedTextProps = {
  strings: string[]
  className?: string
}

export function TypedText({ strings, className = "" }: TypedTextProps) {
  const reducedMotion = useReducedMotion()
  const [displayText, setDisplayText] = useState(strings[0] ?? "")
  const [stringIndex, setStringIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (reducedMotion) {
      setDisplayText(strings[0] ?? "")
      return
    }

    const current = strings[stringIndex] ?? ""
    const typeSpeed = isDeleting ? 40 : 60
    const pauseAtEnd = 1000
    const startDelay = stringIndex === 0 && !isDeleting ? 2500 : 0

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const next = current.slice(0, displayText.length + 1)
          setDisplayText(next)
          if (next === current) {
            setTimeout(() => setIsDeleting(true), pauseAtEnd)
          }
        } else {
          const next = current.slice(0, displayText.length - 1)
          setDisplayText(next)
          if (next === "") {
            setIsDeleting(false)
            setStringIndex((i) => (i + 1) % strings.length)
          }
        }
      },
      displayText === "" && !isDeleting ? startDelay : typeSpeed
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, stringIndex, strings, reducedMotion])

  return (
    <span className={className}>
      {displayText}
      <span className="typed-cursor" aria-hidden>
        |
      </span>
    </span>
  )
}
