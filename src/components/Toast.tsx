import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCheckCircle, FaTimes } from 'react-icons/fa'

interface ToastProps {
  show: boolean
  onClose: () => void
}

const Toast: React.FC<ToastProps> = ({ show, onClose }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.8 }}
          transition={{ type: 'spring', damping: 15, stiffness: 300 }}
          className="fixed top-24 right-6 z-[9999] max-w-md"
        >
          {/* Main Toast Card - Matches Portfolio Theme */}
          <div className="relative bg-slate-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-500/30 overflow-hidden">
            
            <div className="relative p-6">
              <div className="flex items-start gap-4">
                {/* Animated Check Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="flex-shrink-0"
                >
                  <div className="relative">
                    <div className="relative bg-purple-600 p-3 rounded-full shadow-lg">
                      <FaCheckCircle className="text-white text-2xl" />
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl font-bold text-white mb-2"
                  >
                    Message Sent! 🎉
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-sm text-gray-300 leading-relaxed"
                  >
                    Thanks for reaching out!
                  </motion.p>
                </div>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="flex-shrink-0 text-gray-400 hover:text-white hover:bg-purple-500/20 rounded-full p-2 transition-all hover:rotate-90 duration-300"
                >
                  <FaTimes className="text-lg" />
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 5, ease: 'linear' }}
              className="h-1 bg-purple-500 origin-left"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Toast

