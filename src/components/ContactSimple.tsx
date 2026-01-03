import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Get free key from web3forms.com
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
        }),
      })

      if (response.ok) {
        alert('✅ Message sent successfully! I\'ll get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Failed to send')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('❌ Failed to send message. Please email me directly at sanjanasankarganesh@gmail.com')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
    <section id="contact" className="py-20 px-4 bg-slate-900/50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>
              <button 
                type="submit"
                disabled={isLoading}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
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

            <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-8 rounded-xl border border-purple-500/20">
              <h3 className="text-xl font-bold mb-3">Let's Work Together!</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, I'll do my best to
                get back to you!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact


