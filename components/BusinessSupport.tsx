import { Clipboard, User, Building2, BarChart3 } from 'lucide-react'

export default function BusinessSupport() {
  return (
    <>
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-right mobile-margin">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-900 mb-4">
            كيف تدعم طبنا عملك
          </h2>
          <p className="text-xl sm:text-2xl text-blue-600 font-normal mb-6">
            الارتقاء بحلول الرعاية الصحية
          </p>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
            باستبدال أنظمة متعددة ومتفرقة بمنصة متكاملة واحدة، تُخفِّض طبنا أعباء تقنية المعلومات، وتُقلِّص تكاليف الصيانة، وتُحسِّن استغلال الموارد عبر جميع الأقسام. سواء كنتَ تدير عيادة واحدة أو شبكة مستشفيات متعددة، تتكيف طبنا مع حجمك وتنمو بنمو احتياجاتك، وتسند خطوط الخدمة المستقبلية دون تغييرات مكلفة في الأنظمة.
          </p>
          <button className="bg-[#558195] hover:bg-[#466a79] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105">
            اعرف المزيد
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
            <h3 className="text-xl font-bold text-white mb-4">الخدمات</h3>
            <p className="text-white/90 leading-relaxed">
              احصل على دعم فوري وخدمات محدّثة ومتوافقة. نتولى تحديثات البرمجيات وتصحيحات الأمان وصيانة تطبيقات المنصة، لتتفرغ أنت للتركيز على رعاية المريض بدلاً من متاعب التقنية.
            </p>
          </div>

          <div className="bg-[#558195] p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <User className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">تجربة محورها المريض</h3>
            <p className="text-white/90 leading-relaxed">
              نرتقي برضى المريض من خلال مواعيد إلكترونية دون انتظار طويل، مع إتاحة التقارير ونتائج التحاليل ووصفات الدواء عبر تطبيق المريض.
            </p>
          </div>

          <div className="bg-[#558195] p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">نظام معلومات المستشفى المتكامل (HIS)</h3>
            <p className="text-white/90 leading-relaxed">
              إدارة رقمية شاملة من طرف إلى طرف للمستشفيات والعيادات، تغطّي سير العمل السريري والإداري والمالي، وتضمن تدفقاً سلساً للبيانات عبر جميع الأقسام.
            </p>
          </div>

          <div className="bg-[#558195] p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">تعزيز اتخاذ القرار برؤى آنية</h3>
            <p className="text-white/90 leading-relaxed">
              تُقدّم لوحات تحكم حية وتحليلات ورؤى مدعومة بالذكاء الاصطناعي، تُساعد القيادة على متابعة الأداء ورصد مؤشرات الأداء واتخاذ قرارات أسرع مبنية على البيانات.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
