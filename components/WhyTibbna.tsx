import { Database, Cog, Zap } from 'lucide-react'
import Image from 'next/image'

export default function WhyTibbna() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-gray-50">
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
            من نحن
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
              طبنا منصة رعاية صحية من الجيل التالي، تُوحِّد سير العمل السريري، وتعزز سلامة المريض، وتُحدّث البنية التحتية الرقمية للمنظمات الصحية. بُنيت بفهم عميق لخصائص المنطقة ووفق معايير تقنية الصحة العالمية، وتدمج قدرات السجل الصحي الإلكتروني ونظام معلومات المختبر ودعم القرار السريري وتخطيط الموارد في منصة صحية واحدة متكاملة.
            </p>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6">
              من خلال تبسيط تدفق البيانات السريرية عبر رحلة المريض، تساعد طبنا المنظمات الصحية على تجاوز أنظمتها المتفرقة، والعمل بوضوح وسرعة وثقة أكبر.
            </p>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              بدعم فريق من المتخصصين في الرعاية الصحية والتقنية والعمليات، تُقدّم طبنا حلولاً متينة تقنياً، ذات قيمة سريرية حقيقية، مصمَّمة لتحول رقمي موثوق وقابل للتوسع وجاهز للمستقبل.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mobile-margin">
          <div className="bg-[#558195] p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Database className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">منظومة رعاية صحية موحّدة</h3>
            <p className="text-white/90 leading-relaxed">
              تجمع بين السجل الصحي الإلكتروني ونظام معلومات المختبر والصيدلية والأشعة وتخطيط الموارد وتطبيق المريض في منصة واحدة مفتوحة المعايير، تُتيح وصولاً آمناً وفورياً إلى البيانات الطبية في أي وقت ومن أي مكان.
            </p>
          </div>

          <div className="bg-[#558195] p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Cog className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">حلول رعاية صحية مخصصة</h3>
            <p className="text-white/90 leading-relaxed">
              منصة مرنة ومعيارية تُقدّم حلولاً مصمَّمة خصيصاً لتلبية احتياجات المنظمات الصحية ومقدمي الرعاية على حد سواء.
            </p>
          </div>

          <div className="bg-[#558195] p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">نشر أسرع وتكلفة أقل</h3>
            <p className="text-white/90 leading-relaxed">
              البنية المعيارية تتيح التطبيق على مراحل، وهي جاهزة للسحابة ومركز البيانات، مع تخفيض ملحوظ في تكاليف البنية التحتية والصيانة مقارنةً بالأنظمة التقليدية.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
