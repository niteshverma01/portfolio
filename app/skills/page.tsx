"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Database, Layout, Server, Smartphone, GitBranch, Zap, BookOpen } from "lucide-react"
import SkillProgress from "@/components/skill-progress"
import SkillBadge from "@/components/skill-badge"

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState("technical")

  const technicalSkills = [
    { name: "React.js", percentage: 90, color: "purple" },
    { name: "Next.js", percentage: 85, color: "blue" },
    { name: "JavaScript", percentage: 92, color: "yellow" },
    { name: "TypeScript", percentage: 80, color: "blue" },
    { name: "Tailwind CSS", percentage: 88, color: "indigo" },
    { name: "Node.js", percentage: 75, color: "green" },
    { name: "HTML/CSS", percentage: 95, color: "red" },
    { name: "Git/GitHub", percentage: 85, color: "purple" },
  ]

  const softSkills = [
    { name: "Problem Solving", percentage: 92, color: "purple" },
    { name: "Communication", percentage: 88, color: "blue" },
    { name: "Teamwork", percentage: 90, color: "green" },
    { name: "Time Management", percentage: 85, color: "yellow" },
    { name: "Adaptability", percentage: 87, color: "red" },
    { name: "Creativity", percentage: 89, color: "indigo" },
  ]

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="h-8 w-8 text-purple-500" />,
      skills: ["React.js", "Next.js", "HTML5 / CSS3", "Tailwind CSS", "JavaScript / TypeScript", "Responsive Design"],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-8 w-8 text-purple-500" />,
      skills: ["Node.js", "Express", "RESTful APIs", "Authentication", "Server-side Rendering"],
    },
    {
      title: "Database & Storage",
      icon: <Database className="h-8 w-8 text-purple-500" />,
      skills: ["MongoDB", "PostgreSQL", "Firebase", "SQL / NoSQL", "Data Modeling"],
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-8 w-8 text-purple-500" />,
      skills: ["React Native", "Progressive Web Apps", "Mobile-First Design"],
    },
  ]

  const learningSkills = ["GraphQL", "AWS", "Docker", "Three.js", "WebGL", "Machine Learning"]

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-500 to-purple-300 text-transparent bg-clip-text text-center"
      >
        Skills & Expertise
      </motion.h1>

      <div className="flex justify-center mb-12">
        <div className="flex bg-black/40 backdrop-blur-sm p-1 rounded-lg border border-purple-500/20">
          <button
            className={`px-6 py-2 rounded-md transition-all ${
              activeTab === "technical" ? "bg-purple-600 text-white" : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("technical")}
          >
            <span className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Technical Skills
            </span>
          </button>
          <button
            className={`px-6 py-2 rounded-md transition-all ${
              activeTab === "soft" ? "bg-purple-600 text-white" : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("soft")}
          >
            <span className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Soft Skills
            </span>
          </button>
        </div>
      </div>

      {activeTab === "technical" ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillProgress name={skill.name} percentage={skill.percentage} color={skill.color} index={index} />
              </motion.div>
            ))}
          </div>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold my-12 text-center text-white"
          >
            Skill Categories
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20"
              >
                <div className="flex items-start gap-4">
                  {category.icon}
                  <div>
                    <h2 className="text-xl font-bold mb-3 text-white">{category.title}</h2>
                    <ul className="space-y-1 text-gray-300">
                      {category.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <h2 className="text-2xl font-bold mb-6 text-white">Currently Learning</h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {learningSkills.map((skill, index) => (
                <SkillBadge key={index} name={skill} index={index} />
              ))}
            </div>
          </motion.div>
        </>
      ) : (
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-300 text-center mb-12"
          >
            Beyond technical abilities, these soft skills have been crucial in my professional journey and collaborative
            work.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillProgress name={skill.name} percentage={skill.percentage} color={skill.color} index={index} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20"
          >
            <h3 className="text-xl font-bold mb-4 text-white">My Approach to Work</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="bg-purple-500/20 p-2 rounded-full h-min">
                  <Zap className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Problem-Solving Mindset</h4>
                  <p className="text-gray-300">
                    I approach challenges methodically, breaking down complex problems into manageable parts to find
                    efficient solutions.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-blue-500/20 p-2 rounded-full h-min">
                  <Layout className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white">User-Centered Design</h4>
                  <p className="text-gray-300">
                    I prioritize creating intuitive, accessible interfaces that provide excellent user experiences.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-green-500/20 p-2 rounded-full h-min">
                  <GitBranch className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Collaborative Development</h4>
                  <p className="text-gray-300">
                    I thrive in team environments, valuing open communication and knowledge sharing to achieve project
                    goals.
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      )}
    </div>
  )
}
