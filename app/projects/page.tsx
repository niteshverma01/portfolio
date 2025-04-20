"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ProjectCard from "@/components/project-card"
import { Code, Globe, Server, Database, Layers } from "lucide-react"

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all")

  // Enhanced project data with more details
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with product catalog, shopping cart, and payment integration.",
      longDescription:
        "A comprehensive e-commerce solution built with React and Node.js. Features include product browsing, searching, filtering, user authentication, shopping cart, checkout process with Stripe integration, order history, and admin dashboard for product management.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe API", "JWT Auth"],
      features: [
        "Responsive design for all devices",
        "User authentication and profile management",
        "Product search and filtering",
        "Shopping cart with persistent storage",
        "Secure payment processing with Stripe",
        "Order tracking and history",
        "Admin dashboard for inventory management",
      ],
      image: "/placeholder.svg?height=300&width=500",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      githubUrl: "#",
      liveUrl: "#",
      category: "fullstack",
      date: "2023",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A responsive task management application with drag-and-drop functionality and user authentication.",
      longDescription:
        "A modern task management application built with Next.js and Firebase. The app allows users to create, organize, and track tasks with an intuitive drag-and-drop interface. Features include task categorization, due dates, priority levels, and team collaboration.",
      technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS", "React DnD", "React Query"],
      features: [
        "Intuitive drag-and-drop interface",
        "Real-time updates with Firebase",
        "Task categorization and filtering",
        "Due date and priority management",
        "Team collaboration features",
        "Dark and light mode support",
        "Progressive Web App capabilities",
      ],
      image: "/placeholder.svg?height=300&width=500",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      githubUrl: "#",
      liveUrl: "#",
      category: "frontend",
      date: "2022",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects and skills with a clean, modern design.",
      longDescription:
        "A visually stunning portfolio website built with React and Framer Motion. The site features smooth animations, interactive elements, and a clean, modern design that effectively showcases my work and skills.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Next.js", "Three.js"],
      features: [
        "Responsive design with modern aesthetics",
        "Smooth page transitions and animations",
        "Interactive 3D elements with Three.js",
        "Dark mode support",
        "Contact form with email integration",
        "Optimized performance and accessibility",
      ],
      image: "/placeholder.svg?height=300&width=500",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      githubUrl: "#",
      liveUrl: "#",
      category: "frontend",
      date: "2023",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather application that displays current weather and forecasts for any location.",
      longDescription:
        "An elegant weather dashboard that provides current conditions and forecasts for any location worldwide. The app features beautiful visualizations, hourly and daily forecasts, and historical weather data analysis.",
      technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation API", "CSS Modules"],
      features: [
        "Current weather conditions with visual indicators",
        "7-day forecast with detailed information",
        "Hourly forecast for the next 48 hours",
        "Location search with autocomplete",
        "Geolocation for current position weather",
        "Weather data visualization with charts",
        "Responsive design for all devices",
      ],
      image: "/placeholder.svg?height=300&width=500",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      githubUrl: "#",
      liveUrl: "#",
      category: "frontend",
      date: "2022",
    },
    {
      id: 5,
      title: "Blog Platform",
      description: "A full-stack blog platform with user authentication, content management, and commenting system.",
      longDescription:
        "A modern blogging platform built with Next.js and MongoDB. The platform features a rich text editor, user authentication, commenting system, and content management. It's designed to be fast, SEO-friendly, and easy to use.",
      technologies: ["Next.js", "MongoDB", "NextAuth.js", "TailwindCSS", "Rich Text Editor", "Vercel"],
      features: [
        "User authentication and profile management",
        "Rich text editor with image uploads",
        "Comment and reply system",
        "Content categorization and tagging",
        "Search functionality with filters",
        "SEO optimization",
        "Responsive design for all devices",
      ],
      image: "/placeholder.svg?height=300&width=500",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      githubUrl: "#",
      liveUrl: "#",
      category: "fullstack",
      date: "2023",
    },
    {
      id: 6,
      title: "Real-time Chat Application",
      description: "A real-time chat application with private messaging and group chat functionality.",
      longDescription:
        "A feature-rich real-time chat application built with React, Socket.io, and Express. The app supports private messaging, group chats, file sharing, and read receipts. It's designed to be fast, reliable, and secure.",
      technologies: ["React", "Socket.io", "Express", "MongoDB", "JWT Auth", "WebRTC"],
      features: [
        "Real-time messaging with Socket.io",
        "Private and group conversations",
        "File and image sharing",
        "Read receipts and typing indicators",
        "User presence indicators",
        "Message search functionality",
        "Responsive design for all devices",
      ],
      image: "/placeholder.svg?height=300&width=500",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      githubUrl: "#",
      liveUrl: "#",
      category: "fullstack",
      date: "2022",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  // Category icons
  const categoryIcons = {
    all: <Layers className="h-5 w-5" />,
    frontend: <Code className="h-5 w-5" />,
    fullstack: <Globe className="h-5 w-5" />,
    backend: <Server className="h-5 w-5" />,
    database: <Database className="h-5 w-5" />,
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-purple-300 text-transparent bg-clip-text text-center"
      >
        My Projects
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-gray-700 dark:text-gray-300 text-center mb-8 max-w-2xl mx-auto"
      >
        Here are some of the projects I've worked on. Each project represents different skills and technologies I've
        mastered.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex justify-center mb-12"
      >
        <div className="flex flex-wrap justify-center gap-2 p-2 bg-gray-100/80 dark:bg-black/40 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-purple-500/20">
          <button
            className={`px-6 py-2 rounded-md transition-all flex items-center gap-2 ${
              filter === "all"
                ? "bg-purple-600 text-white"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-purple-500/10"
            }`}
            onClick={() => setFilter("all")}
          >
            {categoryIcons.all}
            All Projects
          </button>
          <button
            className={`px-6 py-2 rounded-md transition-all flex items-center gap-2 ${
              filter === "frontend"
                ? "bg-purple-600 text-white"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-purple-500/10"
            }`}
            onClick={() => setFilter("frontend")}
          >
            {categoryIcons.frontend}
            Frontend
          </button>
          <button
            className={`px-6 py-2 rounded-md transition-all flex items-center gap-2 ${
              filter === "fullstack"
                ? "bg-purple-600 text-white"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-purple-500/10"
            }`}
            onClick={() => setFilter("fullstack")}
          >
            {categoryIcons.fullstack}
            Full Stack
          </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">No projects found with the selected filter.</p>
        </div>
      )}
    </div>
  )
}
