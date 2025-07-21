"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"


const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full animate-pulse"></div>
              <img
                src="src/assets/cvcv copy.jpg"
                alt="Abiy Girma Profile"
                className="relative z-10 w-72 h-72 rounded-full object-cover border-4 border-white shadow-xl mx-auto mt-4 ml-4 hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.src = "/placeholder.svg?height=300&width=300"
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Hello! I'm Abiy Girma</h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            I’m Abiy Girma, a Computer Engineering graduate from Hawassa University, 
            where I completed my studies with Great Distinction. I’m a dedicated full-stack
             developer with over a year of professional experience, passionate about transforming
              ideas into interactive, user-focused web applications. While I specialize in frontend 
              website development, ensuring clean, maintainable, and responsive interfaces, I also have
               solid experience handling the entire development stack.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            I have the expertise to design and develop complete web applications from 
            scratch using the MERN stack (MongoDB, Express.js, React, and Node.js). From
             crafting seamless user interfaces to building powerful backend APIs and managing both SQL
              and NoSQL databases, I deliver scalable and production-ready solutions. My focus is always on writing clean, 
              efficient code and building secure,
               high-performance web platforms that provide real value to users.
            Beyond development, I enjoy staying engaged with the tech community, contributing to open-source projects, 
            and continuously leveling up my skills in this ever-evolving industry.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <motion.div
                className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg cursor-pointer group"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-center mb-2 group-hover:animate-bounce">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">1+</span>
                  </div>
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-center">Experience</h4>
                <p className="text-slate-600 dark:text-slate-300 text-center">Years</p>
              </motion.div>

              <motion.div
                className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg cursor-pointer group"
                whileHover={{ scale: 1.05, rotateY: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-center mb-2 group-hover:animate-bounce">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">4+</span>
                  </div>
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-center">Projects</h4>
                <p className="text-slate-600 dark:text-slate-300 text-center">Completed</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
