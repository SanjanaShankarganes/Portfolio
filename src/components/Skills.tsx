import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaCode,
} from 'react-icons/fa'
import { HiCode } from 'react-icons/hi'
import { MdDataObject } from 'react-icons/md'
import {
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiSpring,
  SiDotnet,
  SiHtml5,
  SiPostman,
  SiTailwindcss,
  SiJira,
  SiGithub,
} from 'react-icons/si'
import { TbApi, TbBrandSentry, TbFileTypeDoc } from 'react-icons/tb'
import { DiJava } from 'react-icons/di'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: 'Core Technologies',
      skills: [
        { name: 'ReactJS', icon: <FaReact />, color: 'text-blue-400' },
        { name: 'C#', icon: <FaCode />, color: 'text-purple-500' },
        { name: '.NET Core', icon: <SiDotnet />, color: 'text-purple-600' },
        { name: 'Java', icon: <DiJava />, color: 'text-red-500' },
        { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500' },
        { name: 'Spring Boot', icon: <SiSpring />, color: 'text-green-500' },
      ],
    },
    {
      title: 'Languages & Frontend',
      skills: [
        { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400' },
        { name: 'HTML/CSS', icon: <SiHtml5 />, color: 'text-orange-500' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-400' },
        { name: 'SQL', icon: <FaDatabase />, color: 'text-blue-600' },
      ],
    },
    {
      title: 'Core Expertise',
      skills: [
        { name: 'Data Structures', icon: <MdDataObject />, color: 'text-indigo-400' },
        { name: 'OOPs', icon: <HiCode />, color: 'text-pink-400' },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-500' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-blue-400' },
        { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-600' },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, color: 'text-orange-500' },
        { name: 'GitHub', icon: <SiGithub />, color: 'text-gray-400' },
        { name: 'Docker', icon: <FaDocker />, color: 'text-blue-500' },
        { name: 'Jira', icon: <SiJira />, color: 'text-blue-600' },
        { name: 'Sentry', icon: <TbBrandSentry />, color: 'text-purple-500' },
        { name: 'Postman', icon: <SiPostman />, color: 'text-orange-400' },
        { name: 'Typst', icon: <TbFileTypeDoc />, color: 'text-indigo-400' },
        { name: 'REST APIs', icon: <TbApi />, color: 'text-cyan-400' },
      ],
    },
  ]

  return (
    <section id="skills" className="relative py-24 px-4 bg-slate-900/50 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : { scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4"
          >
            <h2 className="section-title">
              My <span className="gradient-text">Tech Stack</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Master of <span className="text-purple-400 font-semibold">23 technologies</span> - Ready to deliver <span className="text-purple-400 font-semibold">enterprise-grade solutions</span>
          </motion.p>
        </motion.div>

        {/* All Skills in One Beautiful Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {skillCategories.flatMap(category => category.skills).map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative flex flex-col items-center gap-3">
                  <div
                    className={`text-4xl md:text-5xl ${skill.color} group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg`}
                  >
                    {skill.icon}
                  </div>
                  <span className="text-sm md:text-base font-semibold text-center text-gray-200 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Optional: Add a visual separator or badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 py-3 bg-purple-500/20 rounded-full border border-purple-500/30">
            <p className="text-gray-300">
              <span className="font-bold gradient-text">23 Technologies</span> and continuously learning more!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

