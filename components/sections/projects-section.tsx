"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import { projects, type Project } from "@/lib/data/portfolio"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion"

function ProjectMedia({ project }: { project: Project }) {
  const Icon = project.icon
  const images = project.images ?? []
  const [index, setIndex] = useState(0)
  const hasMultiple = images.length > 1
  const reducedMotion = useReducedMotion()

  if (images.length === 0) {
    return (
      <div className="relative mb-6 flex aspect-[16/9] items-center justify-center overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--accent-dim)]">
        <Icon className="h-14 w-14 text-[var(--accent)]" strokeWidth={1} />
        <div className="absolute inset-0 grid-overlay opacity-30" />
      </div>
    )
  }

  if (project.mediaLayout === "duo" && images.length >= 2) {
    return (
      <div className="relative mb-6 overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[oklch(0.04_0.01_260)]">
        <div className="relative aspect-[16/9] w-full">
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(ellipse 55% 50% at 55% 55%, oklch(0.72 0.14 235 / 0.12), transparent 70%)",
            }}
          />
          <div className="pointer-events-none absolute inset-0 grid-overlay opacity-[0.04]" />

          {/* homepage — back left, facing forward */}
          <motion.div
            className="absolute top-[6%] left-[6%] z-[1] h-[88%] w-[38%]"
            initial={reducedMotion ? false : { opacity: 0, x: -18, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative h-full w-full drop-shadow-[0_18px_36px_oklch(0_0_0/0.55)]">
              <Image
                src={images[0]}
                alt={`${project.title} homepage`}
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 40vw, 260px"
                priority
              />
            </div>
          </motion.div>

          {/* example post — front right, angled */}
          <motion.div
            className="absolute top-[2%] right-[0%] z-[2] h-[98%] w-[56%]"
            initial={reducedMotion ? false : { opacity: 0, x: 18, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative h-full w-full drop-shadow-[0_26px_48px_oklch(0_0_0/0.7)]">
              <Image
                src={images[1]}
                alt={`${project.title} example memory`}
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 1024px) 50vw, 320px"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  const goPrev = () => setIndex((i) => (i - 1 + images.length) % images.length)
  const goNext = () => setIndex((i) => (i + 1) % images.length)

  return (
    <div className="relative mb-6 overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)]">
      <div className="relative aspect-[16/9] w-full">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={images[index]}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={images[index]}
              alt={`${project.title} preview ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={goPrev}
            className="absolute top-1/2 left-2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--void)]/80 text-[var(--text-muted)] backdrop-blur-sm transition-colors hover:text-[var(--text-primary)]"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute top-1/2 right-2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--void)]/80 text-[var(--text-muted)] backdrop-blur-sm transition-colors hover:text-[var(--text-primary)]"
            aria-label="Next image"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="absolute bottom-2.5 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index
                    ? "w-4 bg-[var(--accent)]"
                    : "w-1.5 bg-[var(--text-dim)] hover:bg-[var(--text-muted)]"
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function ProjectDetail({ project }: { project: Project }) {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="flex h-full flex-col"
    >
      <ProjectMedia project={project} />

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

      {(() => {
        const codeLink = project.links.find((l) => l.label === "code")
        const demoLink = project.links.find((l) => l.label === "demo")

        return (
          <div className="flex gap-3">
            {codeLink ? (
              <div className="min-w-0 flex-1">
                <MagneticButton href={codeLink.href.trim()} target="_blank" className="w-full">
                  <span className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-[var(--border-hover)] bg-[var(--surface-hover)] px-3 py-2 font-mono text-xs text-[var(--text-primary)] transition-colors hover:border-[var(--text-muted)] hover:bg-[oklch(0.18_0.02_260)]">
                    <Github className="h-3.5 w-3.5" />
                    code
                  </span>
                </MagneticButton>
              </div>
            ) : (
              <span className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-[var(--border-subtle)] px-3 py-2 font-mono text-xs text-[var(--text-dim)]">
                <Github className="h-3.5 w-3.5" />
                code
              </span>
            )}

            {demoLink ? (
              <div className="min-w-0 flex-1">
                <MagneticButton href={demoLink.href.trim()} target="_blank" className="w-full">
                  <span className="btn-primary inline-flex w-full items-center justify-center gap-1.5">
                    <ExternalLink className="h-3.5 w-3.5" />
                    demo
                  </span>
                </MagneticButton>
              </div>
            ) : (
              <span className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-[var(--border-subtle)] px-3 py-2 font-mono text-xs text-[var(--text-dim)]">
                <ExternalLink className="h-3.5 w-3.5" />
                demo
              </span>
            )}
          </div>
        )
      })()}
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
              <ProjectDetail key={activeProject.id} project={activeProject} />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
