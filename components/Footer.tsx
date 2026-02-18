import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import Image from 'next/image'
import ContactForm from './ContactForm'

export default function Footer() {
  return (
    <>
    <section id="contact" className="py-16 sm:py-24 bg-white flex items-center justify-center min-h-[80vh]">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-900 mb-4">Contact us</h2>
          <p className="text-lg text-gray-600 mb-8">Experience the future of healthcare technology. Schedule a personalized demo with our team today.</p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>

    <footer className="bg-[#558195] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          <div className="flex items-center space-x-2">
            <div className="p-1.5">
              <Image
                src="/images/logo.png"
                alt="Tibbna Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-normal">Tibbna</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-4 text-center">
          <p className="text-xs text-white/60">
            © 2026 by Tibbna. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </>
  )
}
