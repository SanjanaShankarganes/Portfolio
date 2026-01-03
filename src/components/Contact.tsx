import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'sanjanasankarganesh@gmail.com',
      link: 'mailto:sanjanasankarganesh@gmail.com',
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/sanjana-shankarganesh',
      link: 'https://linkedin.com/in/sanjana-shankarganesh',
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'github.com/SanjanaShankarganes',
      link: 'https://github.com/SanjanaShankarganes',
    },
  ]

  return (
    <section id="contact" className="relative py-24 px-4 bg-slate-900/50 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            <span className="text-purple-400 font-semibold">Open to Full-Time Opportunities</span> • 
            <span className="text-purple-400 font-semibold"> Available for Immediate Hire</span> • 
            Ready to Drive Innovation & Excellence
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-6 text-center">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-700/50 transition-colors group"
                  >
                    <div className="text-3xl text-purple-400 group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      <p className="text-lg font-medium group-hover:text-purple-400 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl border border-purple-500/30">
              <h3 className="text-2xl font-bold mb-4 text-purple-400 text-center">Let's Collaborate & Build Something Great</h3>
              <p className="text-gray-300 leading-relaxed text-center">
                I'm actively seeking opportunities to contribute to innovative projects and dynamic teams. 
                Whether you're looking for a dedicated full-stack developer, have a challenging project in mind, 
                or simply wish to discuss potential collaborations, feel free to reach out.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

