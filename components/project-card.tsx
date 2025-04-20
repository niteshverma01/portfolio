"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    longDescription?: string
    technologies: string[]
    features?: string[]
    image: string
    images?: string[]
    githubUrl: string
    liveUrl: string
    category?: string
    date?: string
  }
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group bg-white/80 dark:bg-black/40 backdrop-blur-sm border border-gray-200 dark:border-purple-500/20 rounded-lg overflow-hidden hover:border-purple-400 dark:hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>

        {/* Category badge */}
        {project.category && (
          <div className="absolute top-3 left-3 px-2 py-1 bg-purple-600/80 backdrop-blur-sm rounded-full text-xs font-medium text-white">
            {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
          </div>
        )}
      </div>

      <div className="p-6">
        <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {project.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-300 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-300 text-xs rounded-full">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            className="border-purple-300 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-500/10"
            asChild
          >
            <Link href={project.githubUrl} className="flex items-center gap-1" target="_blank">
              <Github className="h-4 w-4" />
              Code
            </Link>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-purple-300 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-500/10"
            asChild
          >
            <Link href={project.liveUrl} className="flex items-center gap-1" target="_blank">
              <ExternalLink className="h-4 w-4" />
              Demo
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
