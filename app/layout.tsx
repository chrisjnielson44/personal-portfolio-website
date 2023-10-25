import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Christopher Nielson',
  description: 'Christopher Nielson Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)"></meta>
      <meta name="theme-color" content="#111827" media="(prefers-color-scheme: dark)"></meta>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
