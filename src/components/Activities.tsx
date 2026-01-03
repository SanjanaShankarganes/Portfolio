import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Activities = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="activities" className="relative py-24 px-4 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Activities & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            <span className="text-purple-400 font-semibold">Paper presentations</span>, leadership roles, and <span className="text-purple-400 font-semibold">extracurricular excellence</span>
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Paper Presentations */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-800/50 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-purple-500/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="text-2xl md:text-3xl">📄</div>
              <h4 className="text-lg md:text-xl font-bold text-purple-400">Paper Presentations</h4>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-purple-500 pl-4">
                <h5 className="font-semibold text-white">Artificial Intelligence</h5>
                <p className="text-sm text-gray-400">Kongu Engineering College • Feb 2023</p>
              </div>
              <div className="border-l-2 border-blue-500 pl-4">
                <h5 className="font-semibold text-white">Augmented Reality & Virtual Reality</h5>
                <p className="text-sm text-gray-400">Velalar College of Engineering • Oct 2023</p>
              </div>
              <div className="border-l-2 border-green-500 pl-4">
                <h5 className="font-semibold text-white">Recent Trends in Engineering</h5>
                <p className="text-sm text-gray-400">KSR Institute of Engineering • Apr 2022</p>
              </div>
              <div className="border-l-2 border-pink-500 pl-4">
                <h5 className="font-semibold text-white">Environment Health</h5>
                <p className="text-sm text-gray-400">Bannari Amman College of Technology • May 2022</p>
              </div>
            </div>
          </motion.div>

          {/* Extracurricular Activities */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-slate-800/50 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-purple-500/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="text-2xl md:text-3xl">🏆</div>
              <h4 className="text-lg md:text-xl font-bold text-purple-400">Leadership & Interests</h4>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors">
                <div className="text-xl mt-0.5">🎤</div>
                <div>
                  <h5 className="font-semibold text-white">Master of Ceremonies</h5>
                  <p className="text-sm text-gray-400">Hosted college seminars and HR meets</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors">
                <div className="text-xl mt-0.5">👥</div>
                <div>
                  <h5 className="font-semibold text-white">Class Representative</h5>
                  <p className="text-sm text-gray-400">Led and coordinated class activities</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors">
                <div className="text-xl mt-0.5">♟️</div>
                <div>
                  <h5 className="font-semibold text-white">Chess Competitions</h5>
                  <p className="text-sm text-gray-400">Won multiple prizes in school championships</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors">
                <div className="text-xl mt-0.5">📷</div>
                <div>
                  <h5 className="font-semibold text-white">Photography</h5>
                  <p className="text-sm text-gray-400">Media and Arts Club, KSR College</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Activities


