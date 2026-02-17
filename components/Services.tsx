'use client'

import { useState } from 'react'
import { 
  FileText, 
  FlaskConical, 
  Brain, 
  Building2, 
  Network, 
  Pill, 
  Shield, 
  Cloud, 
  Code, 
  Headphones 
} from 'lucide-react'

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  
  const services = [
    {
      title: "Electronic Health Record (EHR) Solutions",
      icon: FileText,
      items: [
        "Implementation and customization of EHR modules",
        "Clinical documentation and patient charting",
        "Order management and results review",
        "Interoperability with labs, radiology, and pharmacy"
      ]
    },
    {
      title: "Laboratory Information System (LIS) Services",
      icon: FlaskConical,
      items: [
        "Lab workflow automation",
        "Test catalog and panel configuration",
        "Analyzer and device integration",
        "Sample tracking and result validation",
        "Reporting and quality control support"
      ]
    },
    {
      title: "Clinical Decision Support (CDS)",
      icon: Brain,
      items: [
        "Alerts, reminders, and clinical rules",
        "Medication safety checks",
        "Diagnostic support tools",
        "Evidence-based care pathways"
      ]
    },
    {
      title: "Healthcare ERP Solutions",
      icon: Building2,
      items: [
        "HR, payroll, and staff scheduling",
        "Inventory and supply chain management",
        "Procurement and finance modules",
        "Asset and facility management"
      ]
    },
    {
      title: "Interoperability & Integration Services",
      icon: Network,
      items: [
        "FHIR, HL7, and openEHR integrations",
        "API development and system connectivity",
        "Health Information Exchange (HIE) support",
        "Master Patient Index (MPI) setup"
      ]
    },
    {
      title: "Pharmacy Information System",
      icon: Pill,
      items: [
        "Review orders",
        "Drug dispensing",
        "Drugs info"
      ]
    },
    {
      title: "Cybersecurity & Compliance",
      icon: Shield,
      items: [
        "Data protection and encryption",
        "Access control and audit logging",
        "Compliance with regional regulations",
        "Risk and vulnerability assessments"
      ]
    },
    {
      title: "Cloud Hosting & Infrastructure",
      icon: Cloud,
      items: [
        "Cloud migration and deployment",
        "Data residency solutions",
        "High-availability hosting",
        "Backup and disaster recovery"
      ]
    },
    {
      title: "Custom Healthcare Software Development",
      icon: Code,
      items: [
        "Tailored clinical applications",
        "Workflow automation tools",
        "Mobile health solutions",
        "Integration with existing hospital systems"
      ]
    },
    {
      title: "Implementation, Training & Support",
      icon: Headphones,
      items: [
        "End-to-end system deployment",
        "Staff training and onboarding",
        "24/7 technical support",
        "Continuous optimization and updates"
      ]
    }
  ]

  return (
    <section id="services" className="py-16 sm:py-24 bg-blue-50">
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
            Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mobile-margin">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              style={{
                transform: hoveredCard === index ? 'scale(1.02)' : 'scale(1)',
                height: hoveredCard === index ? 'auto' : '80px'
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div 
                className="p-4 cursor-pointer h-full"
                onMouseEnter={() => setHoveredCard(index)}
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-10 h-10 bg-[#558195] rounded-lg flex items-center justify-center flex-shrink-0">
                    {(() => {
                      const Icon = service.icon
                      return <Icon className="w-5 h-5 text-white" />
                    })()}
                  </div>
                  <h3 
                    style={{
                      fontSize: '16px',
                      fontFamily: 'Arial, Helvetica, sans-serif',
                      fontWeight: 600,
                      lineHeight: '1.2'
                    }}
                    className="text-[#558195] transition-colors duration-300 hover:text-[#466a79] flex-1"
                  >
                    {index + 1}. {service.title}
                  </h3>
                </div>
                
                <div 
                  className={`transition-all duration-500 ease-in-out ${
                    hoveredCard === index 
                      ? 'opacity-100 max-h-80 mt-2' 
                      : 'opacity-0 max-h-0'
                  }`}
                >
                  <ul className="space-y-1">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-[#E2E650] mr-1 mt-0.5 text-xs">•</span>
                        <span 
                          style={{
                            fontSize: '12px',
                            fontFamily: 'Arial, Helvetica, sans-serif'
                          }}
                          className="text-gray-600 leading-relaxed"
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
