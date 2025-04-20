import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t dark:border-gray-800 light:border-gray-200">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Nitesh Verma</h3>
            <p className="dark:text-gray-400 light:text-gray-600 mb-4">
              Full Stack Developer at Meteoros Automation, specializing in creating beautiful and functional web
              experiences.
            </p>
            <div className="flex gap-4">
              <Link href="https://github.com/niteshverma01" className="dark:text-gray-400 light:text-gray-600 hover:text-purple-600 transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/nitesh--verma01/" className="dark:text-gray-400 light:text-gray-600 hover:text-purple-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://x.com/NVerma_07?t=qRRhpxUa46iLu-2RdCQbwQ&s=09" className="dark:text-gray-400 light:text-gray-600 hover:text-purple-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:niteshverma9025@gmail.com"
                className="dark:text-gray-400 light:text-gray-600 hover:text-purple-600 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="dark:text-gray-400 light:text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="dark:text-gray-400 light:text-gray-600 hover:text-purple-600 transition-colors"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/skills"
                  className="dark:text-gray-400 light:text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="dark:text-gray-400 light:text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="dark:text-gray-400 light:text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="dark:text-gray-400 light:text-gray-600">
                <span className="block text-sm dark:text-gray-500 light:text-gray-500">Email</span>
                niteshverma9025@gmail.com
              </li>
              <li className="dark:text-gray-400 light:text-gray-600">
                <span className="block text-sm dark:text-gray-500 light:text-gray-500">Location</span>
                Bhopal, India
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t dark:border-gray-800 light:border-gray-200 text-center dark:text-gray-500 light:text-gray-500">
          <p>© {new Date().getFullYear()} Nitesh Verma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
