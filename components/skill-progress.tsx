"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface SkillProgressProps {
  name: string
  percentage: number
  color?: string
  index?: number
}

export default function SkillProgress({ name, percentage, color = "purple", index = 0 }: SkillProgressProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [hovered, setHovered] = useState(false)

  // Map color string to tailwind classes
  const colorMap: Record<string, string> = {
    purple: "from-purple-600 to-purple-400",
    blue: "from-blue-600 to-blue-400",
    pink: "from-pink-600 to-pink-400",
    green: "from-green-600 to-green-400",
    yellow: "from-yellow-600 to-yellow-400",
    red: "from-red-600 to-red-400",
    indigo: "from-indigo-600 to-indigo-400",
  }

  const gradientClass = colorMap[color] || colorMap.purple

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: index * 0.1 },
        },
      }}
      className="mb-6 bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-purple-500/20"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-white font-medium">{name}</h3>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: hovered ? 1 : 0 }} className="text-sm text-gray-300">
          {percentage}%
        </motion.span>
      </div>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          variants={{
            hidden: { width: 0 },
            visible: {
              width: `${percentage}%`,
              transition: { duration: 1, ease: "easeOut", delay: index * 0.1 },
            },
          }}
          className={`h-full bg-gradient-to-r ${gradientClass} relative`}
        >
          <motion.div
            animate={{
              boxShadow: hovered ? "0 0 20px 3px rgba(168, 85, 247, 0.6)" : "0 0 0px 0px rgba(168, 85, 247, 0)",
            }}
            className="absolute right-0 top-0 bottom-0 w-2 rounded-full"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
