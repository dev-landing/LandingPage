import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata:Metadata= {
  title: '3BX >> Books Beats Box',
  description: 'The best social and professional networking app for indie creatives, musicians and more',
  icons: {
    icon: '/logo_transparent.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-original-dark bg-original`}>{children}</body>
    </html>
  )
}
