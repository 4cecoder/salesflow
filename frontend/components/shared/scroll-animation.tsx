import { motion, useScroll, useTransform } from "framer-motion"
import { ReactNode } from "react"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
}

export function FadeUpScroll({ children, className }: ScrollAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function FadeInScroll({ children, className }: ScrollAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function SlideInFromRight({ children, className }: ScrollAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function SlideInFromLeft({ children, className }: ScrollAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface ParallaxProps extends ScrollAnimationProps {
  offset?: number
}

export function ParallaxScroll({ children, className, offset = 50 }: ParallaxProps) {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, offset])

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
