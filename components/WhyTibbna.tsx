import { Database, Cog, Zap } from 'lucide-react'
import Image from 'next/image'

export default function WhyTibbna() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12 mobile-margin">
          <h2 
            style={{
              fontSize: '45px',
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontWeight: 400,
              letterSpacing: '-0.03em'
            }}
            className="text-gray-900 mb-4"
          >
            About
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 mobile-margin">
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/about-image.jpg"
              alt="Healthcare IT Technology"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6">
              Tibbna is a next‑generation healthcare platform that unifies clinical workflows, strengthens patient safety, and modernizes the digital infrastructure of healthcare organizations. Built with deep regional insight and global health‑tech standards, it integrates EHR, LIS, clinical decision support, and ERP capabilities into one intelligent, interoperable healthcare platform.
            </p>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6">
              By streamlining how clinical data moves across the patient journey, Tibbna helps healthcare organizations overcome fragmented systems and operate with greater clarity, speed, and confidence.
            </p>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Supported by a team of experienced healthcare, technology, and operations professionals, Tibbna delivers solutions that are technically robust, clinically meaningful, and designed for reliable, scalable, and future‑ready digital transformation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mobile-margin">
          <div className="bg-[#558195] p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Database className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Unified Healthcare Ecosystem</h3>
            <p className="text-white/90 leading-relaxed">
              Brings together EHR, LIMS, Pharmacy, Radiology, ERP, and the Patient App on one 
              open‑standard platform, delivering secure, real‑time access to medical data — 
              anywhere, anytime.
            </p>
          </div>

          <div className="bg-[#558195] p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Cog className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Customized Healthcare Solutions</h3>
            <p className="text-white/90 leading-relaxed">
              A flexible, modular platform delivering tailored solutions that meet the health 
              organizations & healthcare providers needs.
            </p>
          </div>

          <div className="bg-[#558195] p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Faster Deployment & Lower Cost</h3>
            <p className="text-white/90 leading-relaxed">
              Modular architecture allows phased implementation, which is cloud‑ready and 
              data‑center friendly, as well as Reduces infrastructure and maintenance costs 
              compared to legacy systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
