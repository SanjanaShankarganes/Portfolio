import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-8 px-4 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-gray-400">
            <span className="text-purple-400 font-semibold">Sanjana Shankarganesh</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

