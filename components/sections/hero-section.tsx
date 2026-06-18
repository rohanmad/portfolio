"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Newspaper } from "lucide-react"
import { siteMeta, socialLinks, typedStrings } from "@/lib/data/portfolio"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { TypedText } from "@/components/ui/typed-text"
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion"

const socialIcons = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Email: Mail,
}

export function HeroSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center px-6 pt-28 pb-20 scroll-mt-0"
    >
      <div className="mx-auto w-full max-w-4xl">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-2 font-mono text-base text-[var(--accent)] md:text-lg">
            {siteMeta.greeting}
          </p>

          <h1 className="display-text mb-5 text-[clamp(2.25rem,8vw,4.75rem)] leading-[0.95] tracking-tight">
            <span className="text-gradient">{siteMeta.name}</span>
          </h1>

          <div className="mb-10 max-w-xl font-mono text-sm text-[var(--text-muted)] md:text-base">
            <span className="text-[var(--accent)]">&gt; i&apos;m </span>
            <TypedText strings={typedStrings} />
          </div>

          <div className="mb-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <MagneticButton href={siteMeta.resumeUrl} target="_blank">
              <span className="btn-primary inline-flex items-center gap-2">
                <Newspaper className="h-3.5 w-3.5" />
                view my resume
              </span>
            </MagneticButton>
          </div>

          <div className="flex items-center gap-5">
            {socialLinks.map((link, index) => {
              const Icon = socialIcons[link.label as keyof typeof socialIcons]
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group relative text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
                  initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  aria-label={link.label}
                >
                  <Icon className="h-5 w-5 transition-transform group-hover:scale-110" strokeWidth={1.5} />
                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[9px] opacity-0 transition-opacity group-hover:opacity-100">
                    {link.handle}
                  </span>
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
