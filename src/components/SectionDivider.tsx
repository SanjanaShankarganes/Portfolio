import React from 'react'
import { motion } from 'framer-motion'

interface SectionDividerProps {
  title?: string
}

const SectionDivider: React.FC<SectionDividerProps> = ({ title }) => {
  return (
    <div className="relative py-8">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      </div>
      {title && (
        <div className="relative flex justify-center">
          <span className="bg-slate-900 px-6 py-2 text-sm text-purple-400 font-semibold tracking-wider uppercase">
            {title}
          </span>
        </div>
      )}
    </div>
  )
}

export default SectionDivider


