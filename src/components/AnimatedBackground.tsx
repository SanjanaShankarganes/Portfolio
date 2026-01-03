import React from 'react'
import { motion } from 'framer-motion'

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle Center Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Particles - Subtle */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-purple-400/70 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${100 + Math.random() * 20}%`,
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            x: [0, (Math.random() - 0.5) * 150],
            opacity: [0, 0.6, 0.6, 0],
            scale: [0, 1, 1, 0.5],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: "linear",
          }}
        />
      ))}

      {/* Glowing Dots */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute w-2 h-2 bg-purple-400/60 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut",
          }}
        />
      ))}

    </div>
  )
}

export default AnimatedBackground

