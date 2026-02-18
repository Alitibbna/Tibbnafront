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
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 w-full">
          <div className="flex items-center space-x-3 cursor-pointer">
            <div className="p-1.5">
              <Image
                src="/images/logo.png"
                alt="Tibbna Logo"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
            <span 
              style={{ fontSize: '50px' }}
              className={`font-bold transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >Tibbna</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className={`transition-colors duration-200 font-medium ${
              isScrolled ? 'text-gray-900 hover:text-[#558195]' : 'text-white hover:text-blue-300'
            }`}>
              Home
            </a>
            <a href="#about" className={`transition-colors duration-200 font-medium ${
              isScrolled ? 'text-gray-900 hover:text-[#558195]' : 'text-white hover:text-blue-300'
            }`}>
              About
            </a>
            <a href="#services" className={`transition-colors duration-200 font-medium ${
              isScrolled ? 'text-gray-900 hover:text-[#558195]' : 'text-white hover:text-blue-300'
            }`}>
              Services
            </a>
            <a href="#contact" className={`transition-colors duration-200 font-medium ${
              isScrolled ? 'text-gray-900 hover:text-[#558195]' : 'text-white hover:text-blue-300'
            }`}>
              Contact
            </a>
          </div>

          <button
            className={`md:hidden focus:outline-none ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className={`md:hidden ${
          isScrolled ? 'bg-white border-t border-gray-200' : 'bg-[#558195] border-t border-white/20'
        }`}>
          <div className="px-4 py-4 space-y-3">
            <a href="#home" className={`block transition-colors font-medium ${
              isScrolled ? 'text-gray-900 hover:text-[#558195]' : 'text-white hover:text-blue-300'
            }`}>
              Home
            </a>
            <a href="#about" className={`block transition-colors font-medium ${
              isScrolled ? 'text-gray-900 hover:text-[#558195]' : 'text-white hover:text-blue-300'
            }`}>
              About
            </a>
            <a href="#services" className={`block transition-colors font-medium ${
              isScrolled ? 'text-gray-900 hover:text-[#558195]' : 'text-white hover:text-blue-300'
            }`}>
              Services
            </a>
            <a href="#contact" className={`block transition-colors font-medium ${
              isScrolled ? 'text-gray-900 hover:text-[#558195]' : 'text-white hover:text-blue-300'
            }`}>
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
