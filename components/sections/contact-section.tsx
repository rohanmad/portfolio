"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { contactItems } from "@/lib/data/portfolio"
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion"

const iconMap = {
  email: Mail,
  linkedin: Linkedin,
  github: Github,
  mobile: Phone,
}

export function ContactSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="contact" className="relative px-6 pt-24 pb-10 scroll-mt-8">
      <div className="mx-auto w-full max-w-3xl text-center">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="display-text section-heading mb-3">
            <span className="text-gradient">let&apos;s connect</span>
          </h2>
          <p className="mb-12 text-base text-[var(--text-muted)]">
            always open to chat about tech or anything unrelated!
          </p>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map((item, index) => {
            const Icon = iconMap[item.id as keyof typeof iconMap]
            const Wrapper = item.href ? "a" : "div"

            return (
              <motion.div
                key={item.id}
                initial={reducedMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Wrapper
                  {...(item.href
                    ? {
                        href: item.href,
                        target: item.href.startsWith("http") ? "_blank" : undefined,
                        rel: item.href.startsWith("http") ? "noopener noreferrer" : undefined,
                      }
                    : {})}
                  className="contact-card group block rounded-xl border border-[var(--border-subtle)] bg-[var(--surface)] p-5 transition-all hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)]"
                  {...(item.id === "mobile" ? { "data-nosnippet": true } : {})}
                >
                  <Icon
                    className="mx-auto mb-3 h-8 w-8 text-[var(--accent)] transition-transform group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                  <h3 className="mb-1 font-mono text-xs font-medium text-[var(--accent)]">
                    {item.label}
                  </h3>
                  <p className="font-mono text-xs text-[var(--text-muted)]">{item.value}</p>
                </Wrapper>
              </motion.div>
            )
          })}
        </div>
      </div>

      <footer className="mt-8 border-t border-[var(--border-subtle)] pt-3" aria-hidden />
    </section>
  )
}
