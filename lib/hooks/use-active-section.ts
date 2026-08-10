"use client"

import { useEffect, useState } from "react"

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "hero")
  const idsKey = sectionIds.join(",")

  useEffect(() => {
    const ids = idsKey.split(",").filter(Boolean)
    if (ids.length === 0) return

    const updateActive = () => {
      const scrollBottom = window.scrollY + window.innerHeight
      const docHeight = document.documentElement.scrollHeight

      // Last section often can't reach the marker line — pin it when near page end
      if (scrollBottom >= docHeight - 80) {
        setActiveSection(ids[ids.length - 1])
        return
      }

      const marker = window.innerHeight * 0.35
      let current = ids[0]

      for (const id of ids) {
        const element = document.getElementById(id)
        if (!element) continue
        const { top, bottom } = element.getBoundingClientRect()
        if (top <= marker && bottom > marker) {
          current = id
        }
      }

      setActiveSection(current)
    }

    updateActive()
    window.addEventListener("scroll", updateActive, { passive: true })
    window.addEventListener("resize", updateActive)

    return () => {
      window.removeEventListener("scroll", updateActive)
      window.removeEventListener("resize", updateActive)
    }
  }, [idsKey])

  return [activeSection, setActiveSection] as const
}
