import type { Metadata } from 'next'
import { Noto_Sans_Arabic } from 'next/font/google'
import './globals.css'

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'طبنا - حلول تقنية متقدمة للرعاية الصحية',
  description: 'تمكين المنظمات الصحية بحلول تقنية معلومات صحية آمنة وذكية ومبتكرة',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={notoSansArabic.className}>{children}</body>
    </html>
  )
}
