import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import AnimatedBackground from './AnimatedBackground'

const Hero = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.pushState({}, '', window.location.pathname)
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-60 h-60 mx-auto mb-8 rounded-full bg-purple-600 p-1.5">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
              <img 
                src="/profile.jpeg" 
                alt="Sanjana Shankarganesh"
                className="min-w-full min-h-full object-cover"
                style={{ objectPosition: 'center 35%' }}
              />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Hi, I'm{' '}
          <motion.span 
            className="gradient-text inline-block"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 200 }}
          >
            Sanjana Shankarganesh
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Software Development Engineer
          </motion.span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed text-center"
        >
          Building <span className="text-purple-400 font-semibold">scalable, high-performance</span> enterprise applications with strong expertise in{' '}
          <span className="text-blue-400 font-semibold">ReactJS, C#, .NET, Java, Node.js</span>, and{' '}
          <span className="text-purple-400 font-semibold">Spring Boot</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="flex flex-wrap gap-3 justify-center mb-12 max-w-2xl mx-auto"
        >
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 bg-purple-500/20 rounded-full text-sm font-semibold border border-purple-500/30 cursor-default"
          >
            💼 1 Year Experience
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 bg-purple-500/20 rounded-full text-sm font-semibold border border-purple-500/30 cursor-default"
          >
            🎓 CGPA: 8.85
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 bg-purple-500/20 rounded-full text-sm font-semibold border border-purple-500/30 cursor-default"
          >
            🚀 23 Technologies
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <motion.a 
            href="#projects" 
            onClick={(e) => handleScroll(e, 'projects')} 
            className="btn-primary cursor-pointer relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8 }}
          >
            <span className="relative z-10">View My Work</span>
          </motion.a>
          <motion.a 
            href="#contact" 
            onClick={(e) => handleScroll(e, 'contact')} 
            className="btn-secondary cursor-pointer relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.9 }}
          >
            <span className="relative z-10">Get In Touch</span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex gap-6 justify-center"
        >
          <motion.a
            href="https://github.com/SanjanaShankarganes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-300 hover:text-purple-400 transition-colors relative"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/sanjana-shankarganesh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-300 hover:text-purple-400 transition-colors relative"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="mailto:sanjanasankarganesh@gmail.com"
            className="text-3xl text-gray-300 hover:text-purple-400 transition-colors relative"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3 }}
          >
            <FaEnvelope />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

