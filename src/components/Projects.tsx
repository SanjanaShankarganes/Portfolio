import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [cardsPerView, setCardsPerView] = useState(1) // Start with 1 for mobile

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth
      if (width < 768) {
        setCardsPerView(1) // Mobile: 1 card
      } else if (width < 1024) {
        setCardsPerView(2) // Tablet: 2 cards
      } else {
        setCardsPerView(3) // Desktop: 3 cards
      }
    }

    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  const projects = [
    {
      title: 'VC Police Portal',
      description:
        'Web application that streamlines idol installation management during Vinayagar Chaturthi festival. Features secure role-based access, real-time tracking, and situational awareness through an intuitive interface.',
      tags: ['ReactJS', 'Express.js', 'Node.js', 'Authentication'],
      github: 'https://github.com/SanjanaShankarganes',
    },
    {
      title: 'FreelancerHub',
      description:
        'Real-time freelancing platform with job posting, authentication, and live Firebase data synchronization. Enables secure login, project listings, and seamless client-freelancer messaging.',
      tags: ['ReactJS', 'Firebase', 'Real-time DB', 'Authentication'],
      github: 'https://github.com/SanjanaShankarganes',
    },
    {
      title: 'E-Commerce Platform',
      description:
        'Full-stack e-commerce solution built with React.js and Material-UI. Features efficient product searches powered by ElasticSearch, Node.js backend, and SQLite database for robust data management.',
      tags: ['ReactJS', 'Node.js', 'SQLite', 'ElasticSearch', 'MUI'],
      github: 'https://github.com/SanjanaShankarganes',
    },
    {
      title: 'GitRepo',
      description:
        'React.js application that displays GitHub repositories based on user input. By leveraging the GitHub REST API, users can enter a username to fetch and view public repositories with detailed information.',
      tags: ['ReactJS', 'REST API', 'GitHub API'],
      github: 'https://github.com/SanjanaShankarganes',
    },
  ]

  // Triple projects for seamless infinite loop
  const infiniteProjects = [...projects, ...projects, ...projects]

  return (
    <section id="projects" className="relative py-12 md:py-24 px-4 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-300 text-base md:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            Real-world applications built with <span className="text-purple-400 font-semibold">modern technologies</span> and <span className="text-purple-400 font-semibold">best practices</span>
          </p>
        </motion.div>

        {/* Mobile: Vertical Stack | Desktop: Horizontal Carousel */}
        {/* Mobile View - Vertical Stack */}
        <div className="md:hidden space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 transition-all duration-300"
            >
              {/* Top Border with gradient animation */}
              <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-[length:200%_100%] animate-gradient"></div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={`${tag}-${tagIndex}`}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-purple-600 hover:bg-purple-700 rounded-lg text-white transition-all font-semibold text-sm"
                >
                  <FaGithub size={18} />
                  <span>Code</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop/Tablet View - Horizontal Carousel */}
        <div className="hidden md:block relative overflow-hidden py-8">
          <div className="overflow-x-hidden">
            <motion.div
              className="flex gap-6 items-stretch"
              animate={{
                x: [0, `-${(100 / cardsPerView)}%`],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {infiniteProjects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${index}`}
                  className="flex-shrink-0 relative w-[calc(50%-0.75rem)] lg:w-[calc(33.33%-1rem)]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: (index % projects.length) * 0.15 
                  }}
                  whileHover={{ 
                    scale: 1.08,
                    y: -15,
                    zIndex: 50,
                    transition: { duration: 0.3, type: "spring", stiffness: 300 }
                  }}
                >
                  <div className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 transition-all duration-300 h-full hover:shadow-2xl hover:shadow-purple-500/50 hover:border-purple-400/60 hover:bg-slate-800/80">
                    {/* Top Border with gradient animation */}
                    <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-[length:200%_100%] animate-gradient"></div>

                    <div className="p-6">
                      <h3 className="text-xl lg:text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-base text-gray-400 mb-4 leading-relaxed line-clamp-4">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={`${tag}-${tagIndex}`}
                            className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30 hover:bg-purple-500/30 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white transition-all hover:scale-105 font-semibold text-base"
                        >
                          <FaGithub size={20} />
                          <span>Code</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient Overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  )
}

export default Projects

