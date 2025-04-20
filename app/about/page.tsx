"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Briefcase, GraduationCap, Award, Heart } from "lucide-react"

export default function AboutPage() {
  const experiences = [
    {
      id: 1,
      title: "Frontend Engineer",
      company: "Meteoros Automation",
      location: "Chennai,Tamil nadu",
      period: "Feb 2025 - Present",
      description: [
        "Developing responsive and user-friendly web interfaces using React and modern JavaScript",
        "Building robust backend systems with Node.js, Express, and MongoDB",
        "Implementing RESTful APIs and GraphQL endpoints for seamless data exchange",
        "Optimizing applications for maximum speed and scalability",
        "Implementing responsive design and ensuring cross-browser compatibility",
      ],
      current: true,
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "CodeXintern",
      location: "Remote",
      period: "Sep 2024 - Oct 2022",
      description: [
        "Built responsive websites and implemented UI/UX designs",
        "Worked with JavaScript frameworks to create interactive web applications",
        "Collaborated with designers to implement visual elements",
        "Maintained and optimized existing web applications",
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-purple-300 text-transparent bg-clip-text"
        >
          About Me
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="space-y-6 text-gray-300 bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
              <p className="text-lg">
                Hello! I'm Nitesh Verma, a passionate full stack developer with expertise in building modern,
                responsive, and user-friendly websites and applications.
              </p>

              <p className="text-lg">
                With several years of experience in the industry, I've worked on a variety of projects ranging from
                small business websites to complex web applications. I specialize in frontend development using React,
                but I'm also comfortable working with backend technologies.
              </p>

              <p className="text-lg">
                My goal is to create digital experiences that are not only visually appealing but also functional and
                accessible to all users. I believe in writing clean, maintainable code and staying up-to-date with the
                latest web technologies and best practices.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20"
          >
            <h2 className="text-xl font-bold mb-4 text-white">Quick Info</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="bg-purple-500/20 p-2 rounded-full">
                  <Briefcase className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-sm text-gray-400">Profession</h3>
                  <p className="text-white">Full Stack Developer</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-purple-500/20 p-2 rounded-full">
                  <MapPin className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-sm text-gray-400">Location</h3>
                  <p className="text-white">City, Country</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-purple-500/20 p-2 rounded-full">
                  <Calendar className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-sm text-gray-400">Experience</h3>
                  <p className="text-white">5+ Years</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-purple-500/20 p-2 rounded-full">
                  <Heart className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-sm text-gray-400">Interests</h3>
                  <p className="text-white">Web Design, UI/UX, Open Source</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-purple-400" />
                <div>
                  <h3 className="text-sm text-gray-400">Email</h3>
                  <p className="text-white">niteshverma9025@gmail.com</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-8 text-white"
        >
          Work Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20"
            >
              <h3 className="text-xl font-bold text-white flex items-center">
                {item.title}
                {item.current && (
                  <span className="ml-3 text-xs font-normal py-1 px-2 rounded-full bg-purple-500/20 text-purple-300">
                    Current
                  </span>
                )}
              </h3>
              <div className="text-purple-400 font-medium mt-1">{item.company}</div>

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

              <ul className="mt-4 space-y-2 text-gray-300">
                {item.description.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <Briefcase className="h-5 w-5 mr-2 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-500/20 p-2 rounded-full">
                <GraduationCap className="h-6 w-6 text-purple-400" />
              </div>
              <h2 className="text-xl font-bold text-white">Education</h2>
            </div>

            <div className="border-l-2 border-purple-500/30 pl-6 py-2 mb-4">
              <h3 className="text-lg font-semibold text-white">Bachelor of Science in Computer Science</h3>
              <p className="text-gray-400">University Name | 20XX - 20XX</p>
              <p className="text-gray-300 mt-2">
                Focused on web development, algorithms, and software engineering principles.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-500/20 p-2 rounded-full">
                <Award className="h-6 w-6 text-purple-400" />
              </div>
              <h2 className="text-xl font-bold text-white">Achievements</h2>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></span>
                <div>
                  <h3 className="font-medium text-white">Full Stack Developer Certification</h3>
                  <p className="text-gray-300">Completed advanced training in modern web development stack.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></span>
                <div>
                  <h3 className="font-medium text-white">Open Source Contributor</h3>
                  <p className="text-gray-300">
                    Active contributor to several open-source projects in the JavaScript community.
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
