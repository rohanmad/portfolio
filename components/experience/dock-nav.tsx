"use client"

import { motion } from "framer-motion"
import { Home, User, FolderKanban, Mail, Search } from "lucide-react"
import { navSections } from "@/lib/data/portfolio"
import { scrollToSection } from "@/lib/utils/scroll"
import { cn } from "@/lib/utils"

const icons = {
  hero: Home,
  about: User,
  projects: FolderKanban,
  contact: Mail,
}

type DockNavProps = {
  activeSection: string
  onOpenCommand: () => void
}

export function DockNav({ activeSection, onOpenCommand }: DockNavProps) {
  return (
    <motion.nav
      className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Main navigation"
    >
      <div className="flex items-end gap-0.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)]/80 px-2 py-1.5 shadow-[0_6px_24px_oklch(0_0_0/0.35)] backdrop-blur-xl">
        {navSections.map((section) => {
          const Icon = icons[section.id as keyof typeof icons]
          const isActive = activeSection === section.id

          return (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={cn(
                "group relative flex flex-col items-center gap-0.5 rounded-lg px-2.5 py-1.5 transition-colors",
                isActive
                  ? "text-[var(--accent)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              )}
              whileHover={{ y: -4, scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Go to ${section.label}`}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon className="h-4 w-4" strokeWidth={1.5} />
              <span className="font-mono text-[9px] tracking-wide">{section.label}</span>
              {isActive && (
                <motion.div
                  layoutId="dock-indicator"
                  className="absolute -bottom-0.5 h-1 w-1 rounded-full bg-[var(--accent)]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </motion.button>
          )
        })}

        <div className="mx-1 h-6 w-px bg-[var(--border-subtle)]" />

        <motion.button
          onClick={onOpenCommand}
          className="group flex flex-col items-center gap-0.5 rounded-lg px-2.5 py-1.5 text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          whileHover={{ y: -4, scale: 1.04 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Open search"
        >
          <Search className="h-4 w-4" strokeWidth={1.5} />
          <span className="font-mono text-[9px] tracking-wide">search</span>
        </motion.button>
      </div>
    </motion.nav>
  )
}
