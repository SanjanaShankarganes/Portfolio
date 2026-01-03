import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaBriefcase, FaGraduationCap, FaCertificate, FaChartLine, FaClock, FaServer } from 'react-icons/fa'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experience = [
    {
      project: 'PAR System',
      tech: 'C#.NET Core, ReactJS',
      achievement: 'Digitized paper-based workflows into a centralized system, reducing processing time by 75%',
    },
    {
      project: 'RE.QMS Audit Portals',
      tech: 'ASP.NET, MVC.NET, ReactJS',
      achievement: 'Designed IMS, SQA, and MQF audit portals, improving system performance by 20%',
    },
    {
      project: 'Bator Operator System',
      tech: 'C#.NET Core, ReactJS, SignalR',
      achievement: 'Built real-time CNC task allocation with dynamic job assignment and live updates',
    },
  ]

  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Software Development Engineer delivering enterprise solutions with measurable impact
          </p>
        </motion.div>

        {/* Professional Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-16"
        >
          <div className="relative bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-transparent backdrop-blur-xl rounded-3xl p-6 md:p-10 border border-purple-500/30 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            
            <div className="relative z-10">
              {/* Header with Icon Badge */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 pb-8 border-b border-purple-500/30">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-500/30 rounded-2xl blur-lg"></div>
                    <div className="relative bg-gradient-to-br from-purple-500/30 to-purple-600/20 p-4 rounded-2xl border border-purple-500/50">
                      <FaBriefcase className="text-3xl text-purple-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-1">
                      Software Development Engineer
                    </h3>
                    <p className="text-lg md:text-xl text-purple-400 font-bold">MachDatum Private Limited</p>
                    <p className="text-xs md:text-sm text-gray-400 mt-1">
                      📍 Coimbatore <span className="text-purple-500 mx-2">|</span> 📅 Jan 2025 - Present
                    </p>
                  </div>
                </div>
              </div>

              {/* Impact Metrics - Prominent Display */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative bg-gradient-to-br from-purple-500/20 to-purple-600/10 p-4 md:p-6 rounded-2xl border border-purple-500/50"
                >
                  <div className="absolute top-0 right-0 text-6xl opacity-10">⏱️</div>
                  <FaClock className="text-3xl md:text-4xl text-purple-400 mb-3" />
                  <p className="text-3xl md:text-4xl font-bold text-white mb-2">1+ Year</p>
                  <p className="text-sm md:text-base text-purple-300 font-semibold">Professional Experience</p>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative bg-gradient-to-br from-green-500/20 to-green-600/10 p-4 md:p-6 rounded-2xl border border-green-500/50"
                >
                  <div className="absolute top-0 right-0 text-6xl opacity-10">📈</div>
                  <FaChartLine className="text-3xl md:text-4xl text-green-400 mb-3" />
                  <p className="text-3xl md:text-4xl font-bold text-white mb-2">75%</p>
                  <p className="text-sm md:text-base text-green-300 font-semibold">Efficiency Improvement</p>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative bg-gradient-to-br from-blue-500/20 to-blue-600/10 p-4 md:p-6 rounded-2xl border border-blue-500/50"
                >
                  <div className="absolute top-0 right-0 text-6xl opacity-10">⚡</div>
                  <FaServer className="text-3xl md:text-4xl text-blue-400 mb-3" />
                  <p className="text-3xl md:text-4xl font-bold text-white mb-2">20%</p>
                  <p className="text-sm md:text-base text-blue-300 font-semibold">Performance Boost</p>
                </motion.div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Developing <span className="text-white font-bold">enterprise-grade solutions</span> with full-stack expertise. 
                  Delivered <span className="text-white font-bold">real-time applications</span>, digitized workflows, and 
                  <span className="text-white font-bold"> scalable architectures</span> that drive measurable business impact.
                </p>
              </div>

              {/* Tech Stack with Gradient Tags */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-0.5 w-12 bg-gradient-to-r from-purple-500 to-transparent"></div>
                  <p className="text-purple-400 font-bold uppercase tracking-wider text-sm">Technology Stack</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['C#.NET Core', 'ASP.NET', 'MVC.NET', 'ReactJS', 'SignalR', 'REST APIs'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-5 py-2.5 bg-gradient-to-r from-purple-500/20 to-purple-600/10 text-purple-300 text-sm rounded-xl border border-purple-500/40 font-semibold hover:from-purple-500/30 hover:to-purple-600/20 hover:border-purple-400 transition-all cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Projects at MachDatum */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Key <span className="gradient-text">Contributions</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.project}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.1 * index + 0.6 }}
                className="bg-slate-800/50 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-purple-500/20 card-hover"
              >
                <h4 className="text-lg md:text-xl font-bold text-white mb-3">{exp.project}</h4>
                <p className="text-xs md:text-sm text-purple-400 font-semibold mb-3">{exp.tech}</p>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">{exp.achievement}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Education & <span className="gradient-text">Certifications</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-purple-500/20">
              <div className="flex items-center gap-3 mb-6">
                <FaGraduationCap className="text-2xl md:text-3xl text-purple-400" />
                <h4 className="text-lg md:text-xl font-bold text-purple-400">Education</h4>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4 py-2">
                  <h5 className="font-bold text-white">B.E. Computer Science</h5>
                  <p className="text-sm text-gray-400">K.S.R. College of Engineering</p>
                  <p className="text-purple-400 font-bold text-lg">CGPA: 8.85</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h5 className="font-semibold text-white">HSC - 87.54%</h5>
                  <p className="text-sm text-gray-400">SVGV Matric HSS, Karamadai</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <h5 className="font-semibold text-white">SSLC - 85.2%</h5>
                  <p className="text-sm text-gray-400">HRM Memorial School, Kotagiri</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-purple-500/20">
              <div className="flex items-center gap-3 mb-6">
                <FaCertificate className="text-2xl md:text-3xl text-purple-400" />
                <h4 className="text-lg md:text-xl font-bold text-purple-400">Certifications</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <div className="text-2xl">☁️</div>
                  <div>
                    <h5 className="font-semibold text-white">Cloud Computing</h5>
                    <p className="text-xs text-gray-400">NPTEL</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <div className="text-2xl">🤖</div>
                  <div>
                    <h5 className="font-semibold text-white">AI-ML Virtual Internship</h5>
                    <p className="text-xs text-gray-400">EduSkills</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                  <div className="text-2xl">🎮</div>
                  <div>
                    <h5 className="font-semibold text-white">Game Development</h5>
                    <p className="text-xs text-gray-400">GUVI - PyGame</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default About

