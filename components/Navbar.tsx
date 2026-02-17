'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#558195] shadow-lg' : 'bg-transparent'
    }`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 w-full">
          <div className="flex items-center space-x-3 cursor-pointer">
            <Image
              src="/images/logo.png"
              alt="Tibbna Logo"
              width={75}
              height={75}
              className="object-contain"
            />
            <span className="text-4xl font-normal transition-colors text-white">Tibbna</span>
          </div>
          
          <div className="hidden md:flex space-x-8 mr-32">
            <a href="#home" className="transition-colors duration-200 font-medium text-white hover:text-blue-300">
              Home
            </a>
            <a href="#about" className="transition-colors duration-200 font-medium text-white hover:text-blue-300">
              About
            </a>
            <a href="#services" className="transition-colors duration-200 font-medium text-white hover:text-blue-300">
              Services
            </a>
            <a href="#contact" className="transition-colors duration-200 font-medium text-white hover:text-blue-300">
              Contact
            </a>
          </div>

          <button 
            className="md:hidden transition-colors text-white hover:text-blue-300"
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-sm">
          <div className="px-4 py-4 space-y-3">
            <a href="#home" onClick={() => setIsOpen(false)} className="block w-full text-left py-2 text-white hover:text-blue-300">
              Home
            </a>
            <a href="#about" onClick={() => setIsOpen(false)} className="block w-full text-left py-2 text-white hover:text-blue-300">
              About
            </a>
            <a href="#services" onClick={() => setIsOpen(false)} className="block w-full text-left py-2 text-white hover:text-blue-300">
              Services
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block w-full text-left py-2 text-white hover:text-blue-300">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
