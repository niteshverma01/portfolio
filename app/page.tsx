"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Download, ChevronDown, Github, Linkedin, Twitter } from "lucide-react"
import { TypeAnimation } from "react-type-animation"
import { useRef } from "react"

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null)

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 px-4 overflow-hidden">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-normal mb-2 text-gray-300 font-space"
              >
                Namaste(); I&apos;m
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-4"
              >
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-purple-300 text-transparent bg-clip-text font-space">
                  Nitesh Verma.
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center text-3xl md:text-4xl font-bold text-white"
              >
                <span className="mr-2">I</span>
                <TypeAnimation
                  sequence={[
                    "build web.",
                    2000,
                    "design UIs.",
                    2000,
                    "solve problems.",
                    2000,
                    "create experiences.",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Number.POSITIVE_INFINITY}
                  className="text-purple-400"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-lg text-gray-300"
              >
                A Full Stack Developer passionate about building fast, clean, and interactive web applications. I craft seamless user experiences from frontend to backend, always learning and evolving.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Button className="px-6 py-6 text-base bg-purple-600 hover:bg-purple-700 rounded-md" asChild>
                  <Link href="mailto:niteshverma9025@gmail.com">
                    Let&apos;s Talk! <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  className="px-6 py-6 text-base border-purple-500 text-white hover:bg-purple-500/10"
                  asChild
                >
                  <Link href="./nitesh-resume.pdf">
                    <Download className="mr-2 h-4 w-4" /> Download CV
                  </Link>
                </Button>
              </motion.div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="flex gap-4 pt-2"
              >
                <Link href="https://github.com/niteshverma01" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="https://www.linkedin.com/in/nitesh--verma01/" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="https://x.com/NVerma_07?t=qRRhpxUa46iLu-2RdCQbwQ&s=09" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[500px] rounded-lg overflow-hidden border-2 border-purple-500/30 shadow-xl shadow-purple-500/10 backdrop-blur-sm bg-white dark:bg-black/30">
                <div className="absolute top-0 left-0 w-full h-8 bg-gray-900 flex items-center px-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="pt-10 px-6 font-mono text-sm relative z-10">
                  <div className="text-gray-600 dark:text-gray-400">// Full Stack Developer</div>
                  <div className="mt-4">
                    <span className="text-purple-600 dark:text-purple-400">const</span>{" "}
                    <span className="text-green-600 dark:text-green-400">developer</span> ={" "}
                    <span className="text-yellow-600 dark:text-yellow-300">{"{"}</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-blue-600 dark:text-blue-300">name:</span>{" "}
                    <span className="text-orange-600 dark:text-orange-300">{"'Nitesh Verma'"}</span>,
                  </div>
                  <div className="ml-8">
                    <span className="text-blue-600 dark:text-blue-300">title:</span>{" "}
                    <span className="text-orange-600 dark:text-orange-300">{"'Full Stack Developer'"}</span>,
                  </div>

                  <div className="ml-8">
                    <span className="text-blue-600 dark:text-blue-300">skills:</span>{" "}
                    <span className="text-yellow-600 dark:text-yellow-300">{"["}</span>
                    <span className="text-orange-600 dark:text-orange-300">{"'HTML'"}</span>,{" "}
                    <span className="text-orange-600 dark:text-orange-300">{"'CSS'"}</span>,{" "}
                    <span className="text-orange-600 dark:text-orange-300">{"'Javascript'"}</span>,{" "}
                    <span className="text-orange-600 dark:text-orange-300">{"'Bootstrap'"}</span>,{" "}
                    <span className="text-orange-600 dark:text-orange-300">{"'React.js'"}</span>,{" "}
                    <span className="text-orange-600 dark:text-orange-300">{"'Next.js'"}</span>,{" "}
                    <span className="text-orange-600 dark:text-orange-300">{"'TypeScript'"}</span>,{" "}
                    <span className="text-orange-600 dark:text-orange-300">{"'Tailwind'"}</span>,{" "}
                    <span className="text-orange-600 dark:text-orange-300">{"'MongoDB'"}</span>,{" "}
                    <span className="text-orange-600 dark:text-orange-300">{"'MySQL'"}</span>,{" "}
                    <span className="text-orange-600 dark:text-orange-300">{"'Node.js'"}</span>,{" "}
                    <span className="text-orange-600 dark:text-orange-300">{"'Express.js'"}</span>
                    <span className="text-yellow-600 dark:text-yellow-300">{"]"}</span>,
                  </div>
                  <div className="ml-8">
                    <span className="text-blue-600 dark:text-blue-300">loves:</span>{" "}
                    <span className="text-yellow-600 dark:text-yellow-300">{"["}</span>
                    <span className="text-orange-600 dark:text-orange-300">{"'Clean Code'"}</span>,{" "}
                    <span className="text-orange-600 dark:text-orange-300">{"'UI/UX'"}</span>,{" "}
                    <span className="text-orange-600 dark:text-orange-300">{"'Problem Solving'"}</span>
                    <span className="text-yellow-600 dark:text-yellow-300">{"]"}</span>,
                  </div>
                  <div className="ml-8">
                    <span className="text-blue-600 dark:text-blue-300">contact:</span>{" "}
                    <span className="text-yellow-600 dark:text-yellow-300">{"() => "}</span>
                    <span className="text-orange-600 dark:text-orange-300">{"'Let's connect!'"}</span>
                  </div>
                  <div>
                    <span className="text-yellow-600 dark:text-yellow-300">{"}"}</span>;
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          >
            <button onClick={scrollToProjects} className="text-gray-400 hover:text-white transition-colors group">
              <div className="text-sm mb-2">Scroll Down</div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                className="bg-purple-500/20 rounded-full p-2 group-hover:bg-purple-500/30 transition-colors"
              >
                <ChevronDown className="h-5 w-5" />
              </motion.div>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section ref={projectsRef} className="py-20 px-4 relative">
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-purple-300 text-transparent bg-clip-text inline-block font-space">
              Featured Projects
            </h2>
            <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">Check out some of my recent work</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/80 dark:bg-black/40 backdrop-blur-sm border border-gray-200 dark:border-purple-500/20 rounded-lg overflow-hidden hover:border-purple-400 dark:hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="E-Commerce Platform"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>

                {/* Category badge */}
                <div className="absolute top-3 left-3 px-2 py-1 bg-purple-600/80 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                  Full Stack
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  E-Commerce Platform
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A full-stack e-commerce platform with product catalog, shopping cart, and payment integration.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-300 text-xs rounded-full">
                    React
                  </span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-300 text-xs rounded-full">
                    Node.js
                  </span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-300 text-xs rounded-full">
                    MongoDB
                  </span>
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-300 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-500/10"
                    asChild
                  >
                    <Link href="/projects">View Project</Link>
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/80 dark:bg-black/40 backdrop-blur-sm border border-gray-200 dark:border-purple-500/20 rounded-lg overflow-hidden hover:border-purple-400 dark:hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Task Management App"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>

                {/* Category badge */}
                <div className="absolute top-3 left-3 px-2 py-1 bg-purple-600/80 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                  Frontend
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  Task Management App
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A responsive task management application with drag-and-drop functionality and user authentication.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-300 text-xs rounded-full">
                    Next.js
                  </span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-300 text-xs rounded-full">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-300 text-xs rounded-full">
                    Firebase
                  </span>
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-300 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-500/10"
                    asChild
                  >
                    <Link href="/projects">View Project</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-12"
          >
            <Button
              variant="outline"
              className="border-purple-500 text-gray-800 dark:text-white hover:bg-purple-50 dark:hover:bg-purple-500/10"
              asChild
            >
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
