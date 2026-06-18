"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { siteMeta } from "@/lib/data/portfolio"

export function StatusBar() {
  const [displayText, setDisplayText] = useState("")
  const fullText = siteMeta.domain

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 150)

    return () => clearInterval(timer)
  }, [fullText])

  return (
    <motion.header
      className="fixed top-0 right-0 left-0 z-50 border-b border-[var(--border-subtle)] bg-[var(--void)]/80 backdrop-blur-xl"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex h-12 max-w-5xl items-center px-6">
        <span className="font-mono text-xs text-[var(--accent)] terminal-cursor">
          {displayText}
        </span>
      </div>
    </motion.header>
  )
}
