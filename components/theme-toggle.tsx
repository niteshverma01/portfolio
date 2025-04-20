"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useSound } from "./sound-provider"

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { playClick } = useSound()
  const isDarkMode = theme === "dark" || resolvedTheme === "dark"

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    playClick()
    const newTheme = isDarkMode ? "light" : "dark"
    setTheme(newTheme)
  }

  if (!mounted) {
    return <div className="w-9 h-9"></div>
  }

  return (
    <motion.div whileTap={{ scale: 0.9 }}>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className={`rounded-full ${
          isDarkMode ? "bg-gray-800 hover:bg-gray-700 text-purple-400" : "bg-gray-200 hover:bg-gray-300 text-purple-600"
        }`}
        aria-label="Toggle theme"
      >
        {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </motion.div>
  )
}
