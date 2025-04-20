"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "../public/my-photo (1).jpeg"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme, resolvedTheme } = useTheme()
  const isDarkMode = theme === "dark" || resolvedTheme === "dark"

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const navItems = [
    { name: "<Home>", path: "/" },
    { name: "<AboutMe>", path: "/about" },
    { name: "<Skills>", path: "/skills" },
    { name: "<Projects>", path: "/projects" },
  ]

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark"
    setTheme(newTheme)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "fixed top-0 left-0 w-full py-4 px-4 md:px-8 z-40 transition-all duration-300",
        scrolled
          ? isDarkMode
            ? "bg-black/80 backdrop-blur-md shadow-lg"
            : "bg-white/80 backdrop-blur-md shadow-lg"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-purple-500">
            <Image
              src="../public/my-photo (1).jpeg"
              alt="Profile"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <span className="font-semibold text-lg font-space">Nitesh Verma</span>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav className="hidden md:flex items-center gap-6" initial="hidden" animate="visible">
          {navItems.map((item) => (
            <motion.div key={item.path}>
              <Link
                href={item.path}
                className={cn(
                  "transition-colors hover:text-purple-600 relative",
                  pathname === item.path ? "font-medium" : isDarkMode ? "text-gray-400" : "text-gray-600",
                )}
              >
                {item.name}
                {pathname === item.path && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 top-full h-[2px] w-full bg-gradient-to-r from-purple-500 to-blue-500"
                  />
                )}
              </Link>
            </motion.div>
          ))}
          <button
            onClick={toggleTheme}
            className={`rounded-full p-2 ${isDarkMode
              ? "bg-gray-800 hover:bg-gray-700 text-purple-400"
              : "bg-gray-200 hover:bg-gray-300 text-purple-600"
              }`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </motion.nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className={`rounded-full p-2 ${isDarkMode
              ? "bg-gray-800 hover:bg-gray-700 text-purple-400"
              : "bg-gray-200 hover:bg-gray-300 text-purple-600"
              }`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-50 bg-black/95 dark:bg-black/95 light:bg-white/95 pt-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <nav className="flex flex-col items-center gap-8 p-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.path}
                    className={cn(
                      "text-xl transition-colors hover:text-purple-400",
                      pathname === item.path
                        ? isDarkMode
                          ? "text-white font-medium"
                          : "text-gray-900 font-medium"
                        : isDarkMode
                          ? "text-gray-400"
                          : "text-gray-600",
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
