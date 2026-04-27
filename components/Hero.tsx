import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen">
      <div className="flex h-screen">
        <div className="w-full md:w-2/3 bg-[#558195] flex items-center justify-center px-4 sm:px-6 md:px-8">
          <div className="max-w-3xl text-right mobile-margin">
            <h1 
              style={{
                fontSize: 'clamp(28px, 5vw, 45px)',
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontWeight: 400,
                letterSpacing: '-0.03em'
              }}
              className="text-white mb-4 sm:mb-6 leading-tight"
            >
              حلول ذكية لرعاية صحية أفضل
            </h1>
            <p 
              style={{
                fontSize: 'clamp(16px, 3vw, 20px)',
                fontFamily: 'Arial, Helvetica, sans-serif'
              }}
              className="text-white/90 mb-4 sm:mb-6 leading-relaxed"
            >
              طبنا هي منصّة الكترونية ذكية تعيد تشكيل مستقبل للرعاية الصحية حيث تجمع بين الذكاء الرقمي، سهولة الاستخدام، والمعايير العالمية للجودة. تقدّم المنصّة حلولاً موحّدة للمستشفيات، العيادات، المختبرات، والصيدليات لتمكينهم من إدارة البيانات بكفاءة، وتحسين جودة الخدمات، وتسريع اتخاذ القرار عبر أنظمة مترابطة وآمنة تدعم سير العمل السريري ورحلة علاج المريض داخل المرافق الصحية.
            </p>
            <p 
              style={{
                fontSize: '16px',
                fontFamily: 'Arial, Helvetica, sans-serif'
              }}
              className="text-[#E2E650] font-semibold mb-6 sm:mb-8"
            >
              رحلة المريض من التسجيل حتى الخروج في منصة واحدة
            </p>
          </div>
        </div>
        
        <div className="hidden md:block md:w-1/3 relative">
          <Image
            src="/images/hero-bg.jpg"
            alt="Healthcare Technology"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center px-4">
          <a 
            href="#contact"
            style={{fontFamily: 'Arial, Helvetica, sans-serif'}}
            className="bg-white hover:bg-gray-100 text-[#558195] px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-semibold transition-all transform hover:scale-105 shadow-2xl border-2 border-white inline-block"
          >
            تواصل معنا
          </a>
        </div>
      </div>
    </section>
  )
}
