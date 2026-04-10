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
      title: "حلول السجل الصحي الإلكتروني (EHR)",
      icon: FileText,
      items: [
        "تطبيق وتخصيص وحدات السجل الصحي الإلكتروني",
        "التوثيق السريري وملفات المرضى",
        "إدارة الطلبات ومراجعة النتائج",
        "التشغيل البيني مع المختبرات والأشعة والصيدلية"
      ]
    },
    {
      title: "خدمات نظام معلومات المختبر (LIS)",
      icon: FlaskConical,
      items: [
        "أتمتة سير عمل المختبر",
        "تكوين كتالوج الفحوصات واللوحات",
        "تكامل المحللات والأجهزة",
        "تتبع العينات والتحقق من النتائج",
        "دعم إعداد التقارير وضبط الجودة"
      ]
    },
    {
      title: "دعم القرار السريري (CDS)",
      icon: Brain,
      items: [
        "تنبيهات وتذكيرات وقواعد سريرية",
        "فحوصات سلامة الدواء",
        "أدوات دعم التشخيص",
        "مسارات الرعاية القائمة على الأدلة"
      ]
    },
    {
      title: "حلول تخطيط موارد المؤسسات الصحية (ERP)",
      icon: Building2,
      items: [
        "إدارة الموارد البشرية والرواتب وجدولة العمل",
        "إدارة المخزون وسلسلة التوريد",
        "وحدات المشتريات والشؤون المالية",
        "إدارة الأصول والمرافق"
      ]
    },
    {
      title: "خدمات التشغيل البيني والتكامل",
      icon: Network,
      items: [
        "تكاملات FHIR وHL7 وopenEHR",
        "تطوير واجهات البرمجة (API) وربط الأنظمة",
        "دعم تبادل المعلومات الصحية (HIE)",
        "إعداد فهرس المرضى الرئيسي (MPI)"
      ]
    },
    {
      title: "نظام معلومات الصيدلية",
      icon: Pill,
      items: [
        "مراجعة الطلبات",
        "صرف الأدوية",
        "معلومات الدواء"
      ]
    },
    {
      title: "الأمن السيبراني والامتثال",
      icon: Shield,
      items: [
        "حماية البيانات والتشفير",
        "التحكم في الوصول وتسجيل التدقيق",
        "الامتثال للوائح والأنظمة الإقليمية",
        "تقييم المخاطر والثغرات الأمنية"
      ]
    },
    {
      title: "الاستضافة السحابية والبنية التحتية",
      icon: Cloud,
      items: [
        "الترحيل إلى السحابة والنشر",
        "حلول إقامة البيانات وفق المتطلبات",
        "استضافة عالية التوفر",
        "النسخ الاحتياطي والتعافي من الكوارث"
      ]
    },
    {
      title: "تطوير برمجيات صحية مخصصة",
      icon: Code,
      items: [
        "تطبيقات سريرية مصمَّمة حسب الاحتياج",
        "أدوات أتمتة سير العمل",
        "حلول الصحة الرقمية عبر الهاتف المحمول",
        "التكامل مع أنظمة المستشفى القائمة"
      ]
    },
    {
      title: "التطبيق والتدريب والدعم الفني",
      icon: Headphones,
      items: [
        "نشر شامل للنظام من البداية حتى النهاية",
        "تدريب الكوادر والتأهيل",
        "دعم فني على مدار الساعة طوال الأسبوع",
        "تحسين مستمر وتحديثات دورية"
      ]
    }
  ]

  return (
    <section id="services" className="py-16 sm:py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-right mb-12 mobile-margin">
          <h2 
            style={{
              fontSize: '45px',
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontWeight: 400,
              letterSpacing: '-0.03em'
            }}
            className="text-gray-900 mb-4"
          >
            خدماتنا
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
                        <span className="text-[#E2E650] ml-1 mt-0.5 text-xs">•</span>
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
