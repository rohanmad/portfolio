"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { projects, type Project } from "@/lib/data/portfolio"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion"

function ProjectDetail({ project }: { project: Project }) {
  const Icon = project.icon

  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="flex h-full flex-col"
    >
      <div className="relative mb-6 flex aspect-[16/9] items-center justify-center overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--accent-dim)]">
        <Icon className="h-14 w-14 text-[var(--accent)]" strokeWidth={1} />
        <div className="absolute inset-0 grid-overlay opacity-30" />
      </div>

      <h3 className="mb-3 font-mono text-xl text-[var(--accent)]">{project.title}</h3>
      <p className="mb-5 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
        {project.description}
      </p>

      <div className="mb-6 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[var(--border-subtle)] px-2.5 py-0.5 font-mono text-[11px] text-[var(--text-muted)]"
          >
            {tag}
          </span>
        ))}
      </div>

      {project.links.length > 0 && (
        <div className="flex gap-3">
          {project.links.map((link) => (
            <MagneticButton key={link.label} href={link.href.trim()} target="_blank">
              <span
                className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 font-mono text-xs transition-colors ${
                  link.label === "code"
                    ? "border-[var(--border-subtle)] text-[var(--text-muted)] hover:border-[var(--border-hover)] hover:text-[var(--text-primary)]"
                    : "btn-primary"
                }`}
              >
                {link.label === "code" ? (
                  <Github className="h-4 w-4" />
                ) : (
                  <ExternalLink className="h-4 w-4" />
                )}
                {link.label}
              </span>
            </MagneticButton>
          ))}
        </div>
      )}

      {project.links.length === 0 && (
        <div className="flex gap-3">
          <span className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-[var(--border-subtle)] px-3 py-2 font-mono text-xs text-[var(--text-dim)]">
            <Github className="h-3.5 w-3.5" />
            code
          </span>
          <span className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-[var(--border-subtle)] px-3 py-2 font-mono text-xs text-[var(--text-dim)]">
            <ExternalLink className="h-3.5 w-3.5" />
            demo
          </span>
        </div>
      )}
    </motion.div>
  )
}

export function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const reducedMotion = useReducedMotion()
  const activeProject = projects[activeIndex]

  return (
    <section id="projects" className="relative px-6 py-24 scroll-mt-8">
      <div className="mx-auto w-full max-w-5xl">
        <motion.div
          className="mb-12"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="display-text section-heading">
            <span className="text-gradient">projects</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
          <nav className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0" aria-label="Project list">
            {projects.map((project, index) => {
              const isActive = index === activeIndex

              return (
                <motion.button
                  key={project.id}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative flex-shrink-0 rounded-lg border px-3 py-3 text-left transition-all lg:w-full ${
                    isActive
                      ? "border-[var(--border-hover)] bg-[var(--surface-hover)]"
                      : "border-transparent hover:border-[var(--border-subtle)] hover:bg-[var(--surface)]"
                  }`}
                  whileHover={{ x: isActive ? 0 : 4 }}
                  aria-current={isActive ? "true" : undefined}
                >
                  <span
                    className={`mb-1 block font-mono text-[10px] tracking-widest uppercase ${
                      isActive ? "text-[var(--accent)]" : "text-[var(--text-dim)]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`block font-mono text-xs ${
                      isActive ? "text-[var(--text-primary)]" : "text-[var(--text-muted)]"
                    }`}
                  >
                    {project.title}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="project-active-bar"
                      className="absolute top-1/2 left-0 h-6 w-0.5 -translate-y-1/2 rounded-full bg-[var(--accent)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </motion.button>
              )
            })}
          </nav>

          <div className="project-panel min-h-[380px] rounded-xl border border-[var(--border-subtle)] bg-[var(--surface)] p-5 md:p-6">
            <AnimatePresence mode="wait">
              <ProjectDetail project={activeProject} />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
