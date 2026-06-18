"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Search, ArrowRight } from "lucide-react"
import { navSections, siteMeta, socialLinks } from "@/lib/data/portfolio"
import { scrollToSection } from "@/lib/utils/scroll"

type CommandPaletteProps = {
  open: boolean
  onClose: () => void
}

type CommandItem = {
  id: string
  label: string
  hint?: string
  action: () => void
}

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)

  const commands: CommandItem[] = [
    ...navSections.map((section) => ({
      id: section.id,
      label: `Go to ${section.label}`,
      hint: section.shortcut,
      action: () => {
        scrollToSection(section.id)
        onClose()
      },
    })),
    {
      id: "resume",
      label: "View resume",
      action: () => {
        window.open(siteMeta.resumeUrl, "_blank")
        onClose()
      },
    },
    ...socialLinks.map((link) => ({
      id: link.label,
      label: `Open ${link.label}`,
      hint: link.handle,
      action: () => {
        window.open(link.href, link.href.startsWith("mailto") ? "_self" : "_blank")
        onClose()
      },
    })),
  ]

  const filtered = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  )

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  useEffect(() => {
    if (!open) {
      setQuery("")
      setSelectedIndex(0)
    }
  }, [open])

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (!open) return

      if (event.key === "Escape") onClose()
      if (event.key === "ArrowDown") {
        event.preventDefault()
        setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1))
      }
      if (event.key === "ArrowUp") {
        event.preventDefault()
        setSelectedIndex((i) => Math.max(i - 1, 0))
      }
      if (event.key === "Enter" && filtered[selectedIndex]) {
        filtered[selectedIndex].action()
      }
    }

    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [open, filtered, selectedIndex, onClose])

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[90] bg-[var(--void)]/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed top-[20%] left-1/2 z-[91] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] shadow-2xl"
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-label="Command palette"
          >
            <div className="flex items-center gap-3 border-b border-[var(--border-subtle)] px-4 py-3">
              <Search className="h-4 w-4 text-[var(--text-dim)]" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="search commands..."
                className="flex-1 bg-transparent font-mono text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-dim)]"
              />
              <kbd className="rounded-md border border-[var(--border-subtle)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--text-dim)]">
                esc
              </kbd>
            </div>
            <ul className="max-h-64 overflow-y-auto p-2">
              {filtered.map((cmd, index) => (
                <li key={cmd.id}>
                  <button
                    onClick={cmd.action}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition-colors ${
                      index === selectedIndex
                        ? "bg-[var(--surface-hover)] text-[var(--text-primary)]"
                        : "text-[var(--text-muted)]"
                    }`}
                  >
                    <span className="font-mono text-sm">{cmd.label}</span>
                    <span className="flex items-center gap-2">
                      {cmd.hint && (
                        <span className="font-mono text-[10px] text-[var(--text-dim)]">
                          {cmd.hint}
                        </span>
                      )}
                      <ArrowRight className="h-3 w-3 opacity-40" />
                    </span>
                  </button>
                </li>
              ))}
              {filtered.length === 0 && (
                <li className="px-3 py-6 text-center font-mono text-sm text-[var(--text-dim)]">
                  no commands found
                </li>
              )}
            </ul>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
