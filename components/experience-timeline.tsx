"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Briefcase, Calendar, ChevronDown, MapPin } from "lucide-react"

interface TimelineItem {
  id: number
  title: string
  company: string
  location: string
  period: string
  description: string[]
  current?: boolean
}

interface ExperienceTimelineProps {
  items: TimelineItem[]
}

export default function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  const [expandedId, setExpandedId] = useState<number | null>(items.find((item) => item.current)?.id || null)

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`relative pl-8 ${index !== items.length - 1 ? "pb-8 border-l border-gray-800" : ""}`}
        >
          {/* Timeline dot */}
          <div
            className={`absolute left-0 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full ${
              item.current ? "bg-purple-500" : "bg-gray-700"
            }`}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className={`absolute inset-0 rounded-full ${item.current ? "bg-purple-500/50" : "bg-gray-700/0"}`}
            />
          </div>

          {/* Content */}
          <div
            className={`bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border ${
              expandedId === item.id ? "border-purple-500/50 shadow-lg shadow-purple-500/10" : "border-gray-800"
            }`}
          >
            <div
              className="flex flex-col md:flex-row md:items-center justify-between cursor-pointer"
              onClick={() => toggleExpand(item.id)}
            >
              <div>
                <h3 className="text-xl font-bold text-white flex items-center">
                  {item.title}
                  {item.current && (
                    <span className="ml-3 text-xs font-normal py-1 px-2 rounded-full bg-purple-500/20 text-purple-300">
                      Current
                    </span>
                  )}
                </h3>
                <div className="text-purple-400 font-medium mt-1">{item.company}</div>
              </div>

              <motion.div animate={{ rotate: expandedId === item.id ? 180 : 0 }} className="mt-2 md:mt-0">
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </motion.div>
            </div>

            <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-400">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {item.period}
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {item.location}
              </div>
            </div>

            <AnimatePresence>
              {expandedId === item.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <ul className="mt-4 space-y-2 text-gray-300">
                    {item.description.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: i * 0.1 }}
                        className="flex items-start"
                      >
                        <Briefcase className="h-5 w-5 mr-2 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
