"use client"

import { motion, Variant, TargetAndTransition } from "framer-motion"

export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const slideIn = {
  initial: { x: -60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 60, opacity: 0 }
}

export function FadeIn({ children, className = "", delay = 0 }: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeIn}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function SlideIn({ children, className = "", delay = 0 }: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={slideIn}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerChildren({ children, className = "" }: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedButton({ children, className = "", whileHover = { scale: 1.05 }, whileTap = { scale: 0.95 } }: {
  children: React.ReactNode;
  className?: string;
  whileHover?: TargetAndTransition;
  whileTap?: TargetAndTransition;
}) {
  return (
    <motion.div
      className={className}
      whileHover={whileHover}
      whileTap={whileTap}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  )
}

export function HoverScale({ children, className = "" }: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  )
}
