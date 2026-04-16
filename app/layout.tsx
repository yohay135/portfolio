import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Yohay Mabari | Data & BI Analyst',
  description:
    'Portfolio of Yohay Mabari — Industrial Engineering & Management student at Azrieli College specializing in data analysis, business intelligence, and AI-based automation.',
  keywords: [
    'data analyst',
    'business intelligence',
    'Python',
    'SQL',
    'Power BI',
    'industrial engineering',
  ],
  openGraph: {
    title: 'Yohay | Data Analyst & IE Student',
    description:
      'Industrial Engineering student building data systems, BI dashboards, and automation tools.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} scroll-smooth`}>
      <body className="font-sans bg-bg-primary text-text-primary antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
