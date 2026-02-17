import { Clipboard, User, Building2, BarChart3 } from 'lucide-react'

export default function BusinessSupport() {
  return (
    <>
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-left mobile-margin">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-900 mb-4">
            How Tibbna Support your Business
          </h2>
          <p className="text-xl sm:text-2xl text-blue-600 font-normal mb-6">
            Elevating Healthcare Solutions
          </p>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
            By replacing multiple fragmented systems with a single integrated platform, Tibbna 
            lowers IT overhead, minimizes maintenance costs, and improves resource utilization 
            across departments. Whether you operate a single clinic or a multi‑hospital network, 
            Tibbna adapts to your size, expands with your needs, and supports future service 
            lines without costly system changes.
          </p>
          <button className="bg-[#558195] hover:bg-[#466a79] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </section>

    <section id="services" className="py-16 sm:py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mobile-margin">
          <div className="bg-[#558195] p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Clipboard className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Services</h3>
            <p className="text-white/90 leading-relaxed">
              Get real-time support, up-to-date and compliance services. we take care of software 
              updates, security patches, and maintenance of the platform software applications. 
              Our platform solutions make services become more efficient, more accessible, and 
              easier to manage—empowering providers to focus on patient care instead of IT maintenance.
            </p>
          </div>

          <div className="bg-[#558195] p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <User className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Patient-Centric Experience</h3>
            <p className="text-white/90 leading-relaxed">
              We elevate patient satisfaction through out online appointments with no long waiting 
              time. Report, test results, and drug prescription available through patient APP.
            </p>
          </div>

          <div className="bg-[#558195] p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Integrated Hospital Information System (HIS)</h3>
            <p className="text-white/90 leading-relaxed">
              End‑to‑end digital management for hospitals and clinics. Covers clinical, 
              administrative, and financial workflows. Ensures seamless data flow across 
              all departments
            </p>
          </div>

          <div className="bg-[#558195] p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Enhances Decision‑Making With Real‑Time Insights</h3>
            <p className="text-white/90 leading-relaxed">
              provides live dashboards, analytics, and AI‑powered insights that help leaders 
              monitor performance, track KPIs, and make faster, data‑driven decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
