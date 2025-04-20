"use client"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  name: string
  index: number
}

export default function SkillBadge({ name, index }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <div className="px-4 py-2 bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-full text-white hover:border-purple-500/50 transition-colors">
        {name}
      </div>
    </motion.div>
  )
}
