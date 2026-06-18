"use client"

import { useCallback, useEffect, useState } from "react"
import LogRocket from "logrocket"
import { AmbientBackground } from "@/components/experience/ambient-background"
import { StatusBar } from "@/components/experience/status-bar"
import { ScrollProgress } from "@/components/experience/scroll-progress"
import { CommandPalette } from "@/components/experience/command-palette"
import { CursorGlow } from "@/components/experience/cursor-glow"
import { DockNav } from "@/components/experience/dock-nav"
import { AboutSection } from "@/components/sections/about-section"
import { ContactSection } from "@/components/sections/contact-section"
import { HeroSection } from "@/components/sections/hero-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { navSections } from "@/lib/data/portfolio"
import { useActiveSection } from "@/lib/hooks/use-active-section"

export default function Portfolio() {
  const [commandOpen, setCommandOpen] = useState(false)
  const activeSection = useActiveSection(navSections.map((s) => s.id))

  useEffect(() => {
    LogRocket.init("8fdnjx/rohan-portfolio")
  }, [])

  const openCommand = useCallback(() => setCommandOpen(true), [])
  const closeCommand = useCallback(() => setCommandOpen(false), [])

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault()
        setCommandOpen((open) => !open)
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  return (
    <>
      <AmbientBackground />
      <CursorGlow />
      <StatusBar />
      <ScrollProgress />

      <main className="relative z-10 pb-16">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <DockNav activeSection={activeSection} onOpenCommand={openCommand} />
      <CommandPalette open={commandOpen} onClose={closeCommand} />
    </>
  )
}
