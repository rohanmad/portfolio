"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { aboutChapters, type AboutChapter } from "@/lib/data/portfolio"
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion"

function ChapterPanel({ chapter, index }: { chapter: AboutChapter; index: number }) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.article
      className="relative grid gap-6 lg:grid-cols-2 lg:gap-12"
      initial={reducedMotion ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
        <div className="image-frame group relative aspect-[3/2] overflow-hidden rounded-xl">
          <Image
            src={chapter.image.src}
            alt={chapter.image.alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--void)]/60 via-transparent to-transparent" />
          <div className="absolute top-4 left-4 rounded-full bg-[var(--accent-dim)] px-3 py-1 font-mono text-[10px] tracking-widest text-[var(--accent)] uppercase">
            ch.{String(index + 1).padStart(2, "0")}
          </div>
        </div>
      </div>

      <div className={`flex flex-col justify-center space-y-4 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
        <h3 className="font-mono text-xs tracking-[0.2em] text-[var(--accent)] uppercase">
          {chapter.title}
        </h3>
        <p className="text-base leading-relaxed text-[var(--text-primary)]">{chapter.lead}</p>
        {chapter.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="text-sm leading-relaxed text-[var(--text-muted)]">
            {paragraph}
          </p>
        ))}
      </div>
    </motion.article>
  )
}

export function AboutSection() {
  const [activeChapter, setActiveChapter] = useState(0)
  const reducedMotion = useReducedMotion()

  return (
    <section id="about" className="relative px-6 py-24 scroll-mt-8">
      <div className="mx-auto w-full max-w-4xl">
        <motion.div
          className="mb-12"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="display-text section-heading">
            <span className="text-gradient">about me</span>
          </h2>
        </motion.div>

        <div className="mb-12 flex flex-wrap gap-2">
          {aboutChapters.map((chapter, index) => (
            <button
              key={chapter.id}
              onClick={() => setActiveChapter(index)}
              className={`rounded-full border px-3 py-1.5 font-mono text-[11px] tracking-wide transition-all ${
                activeChapter === index
                  ? "border-[var(--accent)] bg-[var(--accent-dim)] text-[var(--accent)]"
                  : "border-[var(--border-subtle)] text-[var(--text-muted)] hover:border-[var(--border-hover)] hover:text-[var(--text-primary)]"
              }`}
            >
              {chapter.title}
            </button>
          ))}
        </div>

        <div className="mb-4 hidden lg:block">
          <AnimatePresence mode="wait">
            <ChapterPanel
              key={aboutChapters[activeChapter].id}
              chapter={aboutChapters[activeChapter]}
              index={activeChapter}
            />
          </AnimatePresence>
        </div>

        <div className="space-y-20 lg:hidden">
          {aboutChapters.map((chapter, index) => (
            <ChapterPanel key={chapter.id} chapter={chapter} index={index} />
          ))}
        </div>

        <div className="mt-12 hidden lg:block">
          <div className="h-1 overflow-hidden rounded-full bg-[var(--surface-hover)]">
            <motion.div
              className="h-full bg-[var(--accent)]"
              animate={{ width: `${((activeChapter + 1) / aboutChapters.length) * 100}%` }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
